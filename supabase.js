// ============================================================
// AQL Learn — Supabase client + Auth + Progress
// Browser-safe: uses ONLY the publishable key.
// ============================================================

'use strict';

// ---------- Config ----------
const SUPABASE_URL = 'https://llkivhncpedoqpfrjmum.supabase.co';
const SUPABASE_KEY = 'sb_publishable_e9xX2vw2ZsTvVBQi11e6zQ_CVn4IYyS';

const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: false,
    storageKey: 'aql-learn-session'
  }
});
window.sb = sb;

// ============================================================
// Auth
// ============================================================
const Auth = {
  _session: null,
  _student: null,
  _classRow: null,
  _isAdmin: false,
  _ready: false,
  _listeners: [],

  async init() {
    const { data: { session } } = await sb.auth.getSession();
    this._session = session || null;
    if (session) await this._hydrate();
    this._ready = true;

    sb.auth.onAuthStateChange(async (_event, newSession) => {
      this._session = newSession || null;
      this._student = null;
      this._classRow = null;
      this._isAdmin = false;
      if (newSession) await this._hydrate();
      this._fire();
    });

    return this._session;
  },

  onChange(fn) { this._listeners.push(fn); },
  _fire() { this._listeners.forEach(fn => { try { fn(); } catch (e) { console.error(e); } }); },

  async _hydrate() {
    if (!this._session) return;
    const uid = this._session.user.id;

    const [{ data: adminRow }, { data: studentRow }] = await Promise.all([
      sb.from('admins').select('user_id').eq('user_id', uid).maybeSingle(),
      sb.from('students').select('id, name, class_id, last_seen_at').eq('auth_user_id', uid).maybeSingle()
    ]);

    this._isAdmin = !!adminRow;
    this._student = studentRow || null;

    if (studentRow) {
      const { data: cls } = await sb.from('classes')
        .select('id, code, name')
        .eq('id', studentRow.class_id)
        .maybeSingle();
      this._classRow = cls || null;
      // Bump last_seen_at (fire-and-forget)
      sb.from('students').update({ last_seen_at: new Date().toISOString() })
        .eq('id', studentRow.id).then(() => {});
    }
  },

  session()   { return this._session; },
  student()   { return this._student; },
  classRow()  { return this._classRow; },
  isAdmin()   { return this._isAdmin; },
  isStudent() { return !!this._student; },
  isReady()   { return this._ready; },

  _synthEmail(code, name) {
    const slug = name.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    return `${slug}.${code.toLowerCase()}@aqllearn.student`;
  },

  // Student join: class code + name + password. Tries login, else signup.
  async joinOrLogin({ code, name, password }) {
    const cleanCode = (code || '').trim().toUpperCase();
    const cleanName = (name || '').trim();
    if (!cleanCode || !cleanName) throw new Error('Class code and name are required.');
    if (!password || password.length < 6) throw new Error('Password must be 6+ characters.');

    const { data: cls, error: classErr } = await sb.from('classes')
      .select('id, code, name').eq('code', cleanCode).maybeSingle();
    if (classErr) throw classErr;
    if (!cls) throw new Error('Class code not found. Ask your instructor to confirm the code.');

    const email = this._synthEmail(cls.code, cleanName);

    // Try login first
    const { error: loginErr } = await sb.auth.signInWithPassword({ email, password });
    if (!loginErr) {
      await this._hydrate();
      if (!this._student) throw new Error('Account found but not linked to a class.');
      if (this._student.class_id !== cls.id) {
        throw new Error('This callsign is registered in a different class.');
      }
      return this._student;
    }

    // Not found → try signup
    const { data: signup, error: signupErr } = await sb.auth.signUp({ email, password });
    if (signupErr) {
      if (/already registered/i.test(signupErr.message || '')) {
        throw new Error('That callsign is taken in this class, or the password is wrong.');
      }
      throw signupErr;
    }
    if (!signup.session) {
      throw new Error('Sign-in pending — disable email confirmation in Supabase Auth settings.');
    }

    const { error: insErr } = await sb.from('students').insert({
      auth_user_id: signup.user.id,
      class_id: cls.id,
      name: cleanName
    });
    if (insErr) {
      // Rollback: sign out so a retry can create cleanly
      await sb.auth.signOut();
      if (/duplicate/i.test(insErr.message)) {
        throw new Error('That callsign is already taken in this class.');
      }
      throw insErr;
    }

    await this._hydrate();
    return this._student;
  },

  async adminLogin({ email, password }) {
    const { error } = await sb.auth.signInWithPassword({
      email: (email || '').trim(),
      password
    });
    if (error) throw error;
    await this._hydrate();
    if (!this._isAdmin) {
      await sb.auth.signOut();
      throw new Error('This account is not an admin.');
    }
    return true;
  },

  async signOut() {
    await sb.auth.signOut();
    this._session = null;
    this._student = null;
    this._classRow = null;
    this._isAdmin = false;
  }
};

window.Auth = Auth;

// ============================================================
// Progress — Supabase-backed, cached in memory
// ============================================================
const Progress = {
  _done: null, // Set<string>

  async load() {
    const student = Auth.student();
    if (!student) { this._done = new Set(); return this._done; }
    const { data, error } = await sb.from('progress')
      .select('resource_id').eq('student_id', student.id);
    if (error) { console.error('progress load', error); this._done = new Set(); return this._done; }
    this._done = new Set((data || []).map(r => r.resource_id));
    return this._done;
  },

  reload() { this._done = null; },

  isComplete(id) { return !!(this._done && this._done.has(id)); },

  async toggle(id) {
    const student = Auth.student();
    if (!student) return false;
    if (!this._done) this._done = new Set();
    const willMark = !this._done.has(id);

    if (willMark) {
      this._done.add(id);
      const { error } = await sb.from('progress')
        .insert({ student_id: student.id, resource_id: id });
      if (error) {
        if (!/duplicate/i.test(error.message)) {
          console.error('progress insert', error);
          this._done.delete(id);
          return false;
        }
      }
    } else {
      this._done.delete(id);
      const { error } = await sb.from('progress')
        .delete().eq('student_id', student.id).eq('resource_id', id);
      if (error) {
        console.error('progress delete', error);
        this._done.add(id);
        return true;
      }
    }
    return willMark;
  },

  getTrackStats(trackId) {
    const track = findTrack(trackId);
    if (!track) return { done: 0, total: 0, pct: 0 };
    let total = 0, done = 0;
    track.phases.forEach(phase => {
      phase.resources.forEach(r => {
        total++;
        if (this.isComplete(r.id)) done++;
      });
    });
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;
    return { done, total, pct };
  },

  getPhaseStats(phase) {
    let total = 0, done = 0;
    phase.resources.forEach(r => {
      total++;
      if (this.isComplete(r.id)) done++;
    });
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;
    return { done, total, pct };
  },

  getPillarStats(pillar) {
    let total = 0, done = 0;
    pillar.subtracks.forEach(t => {
      t.phases.forEach(p => {
        p.resources.forEach(r => {
          total++;
          if (this.isComplete(r.id)) done++;
        });
      });
    });
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;
    return { done, total, pct };
  }
};

window.Progress = Progress;
