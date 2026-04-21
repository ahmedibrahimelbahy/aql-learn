// ============================================================
// AQL Learn — Admin Dashboard
// Requires: Auth, sb, CONTENT, esc, pad
// ============================================================

'use strict';

const AdminView = {
  _selectedClassId: null,
  _selectedStudentId: null,

  // Entry point — called by router when user hits #admin
  async render() {
    const root = document.getElementById('view-admin');
    if (!root) return;

    if (!Auth.isReady()) await Auth.init();

    if (!Auth.isAdmin()) {
      root.innerHTML = this._loginHtml();
      return;
    }

    root.innerHTML = this._shellHtml();
    await this._renderClasses();
  },

  // ---------- Login screen ----------
  _loginHtml() {
    return `
      <div class="container">
        <div class="admin-login-wrap">
          <div class="admin-login-box">
            <div class="modal-label">Admin Access</div>
            <h2 class="admin-login-title">Command Center Login</h2>
            <p class="admin-login-sub">Instructor credentials required.</p>
            <div class="admin-login-form">
              <input type="email" id="admin-email" class="modal-input" placeholder="Email" autocomplete="username">
              <input type="password" id="admin-password" class="modal-input" placeholder="Password" autocomplete="current-password">
              <div class="modal-error" id="admin-error"></div>
              <button class="modal-btn-confirm" onclick="AdminView._submitLogin()">Authenticate</button>
            </div>
            <div class="admin-login-foot">
              <a class="breadcrumb-link" onclick="Router.navigate('home')">← Back to learner view</a>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  async _submitLogin() {
    const email = document.getElementById('admin-email').value;
    const password = document.getElementById('admin-password').value;
    const err = document.getElementById('admin-error');
    err.textContent = '';
    try {
      await Auth.adminLogin({ email, password });
      this.render();
    } catch (e) {
      err.textContent = e.message || 'Authentication failed.';
    }
  },

  // ---------- Dashboard shell ----------
  _shellHtml() {
    return `
      <div class="container admin-container">
        <div class="admin-header">
          <div>
            <div class="modal-label">Instructor Console</div>
            <h1 class="admin-title">Command Center</h1>
          </div>
          <div class="admin-header-actions">
            <button class="btn-open" onclick="AdminView._openNewClass()">+ New Class</button>
            <button class="btn-open" onclick="Router.navigate('home')">Learner View</button>
            <button class="btn-open admin-danger" onclick="AdminView._signOut()">Sign Out</button>
          </div>
        </div>

        <div class="admin-grid">
          <aside class="admin-classes">
            <div class="admin-section-head">Classes</div>
            <div id="admin-class-list"></div>
          </aside>
          <main class="admin-main" id="admin-main">
            <div class="empty-state">Select a class to view students.</div>
          </main>
        </div>
      </div>

      <!-- New Class modal -->
      <div class="modal-overlay" id="new-class-modal">
        <div class="modal-box">
          <div class="modal-scan"></div>
          <div class="modal-header">
            <div class="modal-label">Provision Cohort</div>
            <h2>New Class</h2>
            <p>Give this cohort a code and a human-readable name.</p>
          </div>
          <div class="modal-body">
            <input id="new-class-code" class="modal-input" placeholder="Class code (e.g. AQL-SPRING-26)" maxlength="40">
            <input id="new-class-name" class="modal-input" placeholder="Class name" maxlength="80" style="margin-top:0.7rem">
            <div class="modal-error" id="new-class-error"></div>
          </div>
          <div class="modal-footer">
            <button class="modal-btn-cancel" onclick="AdminView._closeNewClass()">Cancel</button>
            <button class="modal-btn-confirm" onclick="AdminView._submitNewClass()">Create</button>
          </div>
        </div>
      </div>
    `;
  },

  async _renderClasses() {
    const list = document.getElementById('admin-class-list');
    if (!list) return;
    const { data: classes, error } = await sb.from('classes')
      .select('id, code, name, created_at')
      .order('created_at', { ascending: false });

    if (error) {
      list.innerHTML = `<div class="admin-empty">${esc(error.message)}</div>`;
      return;
    }
    if (!classes || !classes.length) {
      list.innerHTML = `<div class="admin-empty">No classes yet.<br>Click <strong>+ New Class</strong> to create one.</div>`;
      return;
    }

    list.innerHTML = classes.map(c => `
      <div class="admin-class-row${c.id === this._selectedClassId ? ' active' : ''}"
           onclick="AdminView._selectClass('${esc(c.id)}')">
        <div class="admin-class-code">${esc(c.code)}</div>
        <div class="admin-class-name">${esc(c.name)}</div>
      </div>
    `).join('');
  },

  async _selectClass(id) {
    this._selectedClassId = id;
    this._selectedStudentId = null;
    await this._renderClasses();
    await this._renderStudents(id);
  },

  async _renderStudents(classId) {
    const main = document.getElementById('admin-main');
    if (!main) return;
    main.innerHTML = `<div class="admin-loading">Loading students…</div>`;

    const [{ data: cls }, { data: students }] = await Promise.all([
      sb.from('classes').select('id, code, name').eq('id', classId).maybeSingle(),
      sb.from('v_student_progress')
        .select('student_id, student_name, class_code, class_name, last_seen_at, joined_at, completed_count')
        .eq('class_id', classId)
        .order('last_seen_at', { ascending: false })
    ]);

    const totalResources = this._totalResources();
    const rows = (students || []).map(s => {
      const pct = totalResources > 0 ? Math.round((s.completed_count / totalResources) * 100) : 0;
      return `
        <tr class="${s.student_id === this._selectedStudentId ? 'active' : ''}"
            onclick="AdminView._selectStudent('${esc(s.student_id)}')">
          <td>${esc(s.student_name)}</td>
          <td class="mono">${s.completed_count} / ${totalResources}</td>
          <td>
            <div class="admin-mini-bar">
              <div class="admin-mini-fill" style="width:${pct}%"></div>
            </div>
            <span class="mono admin-pct">${pct}%</span>
          </td>
          <td class="mono dim">${this._fmtTime(s.last_seen_at)}</td>
        </tr>
      `;
    }).join('');

    main.innerHTML = `
      <div class="admin-main-head">
        <div>
          <div class="admin-main-code">${esc(cls?.code || '')}</div>
          <div class="admin-main-name">${esc(cls?.name || '')}</div>
          <div class="admin-main-meta">${(students || []).length} students</div>
        </div>
        <div class="admin-main-actions">
          <button class="btn-open" onclick="AdminView._exportCsv()">⬇ Export CSV</button>
          <button class="btn-open admin-danger" onclick="AdminView._deleteClass()">Delete Class</button>
        </div>
      </div>

      <div class="admin-table-wrap">
        ${ (students && students.length) ? `
          <table class="admin-table">
            <thead>
              <tr>
                <th>Student</th>
                <th>Completed</th>
                <th>Progress</th>
                <th>Last Active</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        ` : `
          <div class="admin-empty">No students in this class yet.<br>Share code <strong>${esc(cls?.code || '')}</strong> with them to join.</div>
        ` }
      </div>

      <div id="admin-student-detail"></div>
    `;
  },

  async _selectStudent(id) {
    this._selectedStudentId = id;
    await this._renderStudents(this._selectedClassId);
    await this._renderStudentDetail(id);
  },

  async _renderStudentDetail(studentId) {
    const el = document.getElementById('admin-student-detail');
    if (!el) return;
    el.innerHTML = `<div class="admin-loading">Loading progress…</div>`;

    const [{ data: student }, { data: rows }] = await Promise.all([
      sb.from('students').select('id, name').eq('id', studentId).maybeSingle(),
      sb.from('progress').select('resource_id, completed_at').eq('student_id', studentId)
    ]);

    const doneSet = new Set((rows || []).map(r => r.resource_id));
    const doneMap = new Map((rows || []).map(r => [r.resource_id, r.completed_at]));

    const pillarsHtml = CONTENT.pillars.map(pillar => {
      const pillarDone = pillar.subtracks.reduce((a, t) =>
        a + t.phases.reduce((b, p) =>
          b + p.resources.filter(r => doneSet.has(r.id)).length, 0), 0);
      const pillarTotal = pillar.subtracks.reduce((a, t) =>
        a + t.phases.reduce((b, p) => b + p.resources.length, 0), 0);
      const pct = pillarTotal ? Math.round((pillarDone / pillarTotal) * 100) : 0;

      const tracksHtml = pillar.subtracks.map(track => {
        const trackDone = track.phases.reduce((a, p) =>
          a + p.resources.filter(r => doneSet.has(r.id)).length, 0);
        const trackTotal = track.phases.reduce((a, p) => a + p.resources.length, 0);
        const tpct = trackTotal ? Math.round((trackDone / trackTotal) * 100) : 0;
        return `
          <div class="admin-track-row">
            <span>${esc(track.name)}</span>
            <span class="mono dim">${trackDone} / ${trackTotal}</span>
            <div class="admin-mini-bar"><div class="admin-mini-fill" style="width:${tpct}%"></div></div>
            <span class="mono">${tpct}%</span>
          </div>
        `;
      }).join('');

      return `
        <div class="admin-pillar-block">
          <div class="admin-pillar-head">
            <span class="admin-pillar-name">${esc(pillar.name)}</span>
            <span class="mono dim">${pillarDone} / ${pillarTotal} · ${pct}%</span>
          </div>
          <div class="admin-track-list">${tracksHtml}</div>
        </div>
      `;
    }).join('');

    el.innerHTML = `
      <div class="admin-student-detail">
        <div class="admin-section-head">
          ${esc(student?.name || '')} — Detail
        </div>
        ${pillarsHtml}
      </div>
    `;
  },

  // ---------- Actions ----------
  _openNewClass() {
    document.getElementById('new-class-modal').classList.add('open');
    document.getElementById('new-class-code').value = '';
    document.getElementById('new-class-name').value = '';
    document.getElementById('new-class-error').textContent = '';
    setTimeout(() => document.getElementById('new-class-code').focus(), 50);
  },

  _closeNewClass() {
    document.getElementById('new-class-modal').classList.remove('open');
  },

  async _submitNewClass() {
    const code = document.getElementById('new-class-code').value.trim().toUpperCase();
    const name = document.getElementById('new-class-name').value.trim();
    const err  = document.getElementById('new-class-error');
    err.textContent = '';
    if (!code || !name) { err.textContent = 'Code and name required.'; return; }
    if (!/^[A-Z0-9][A-Z0-9\-_]{1,39}$/.test(code)) {
      err.textContent = 'Code must be letters/numbers/hyphens (e.g. AQL-SPRING-26).';
      return;
    }
    const { data, error } = await sb.from('classes')
      .insert({ code, name, created_by: Auth.session().user.id })
      .select().maybeSingle();
    if (error) {
      err.textContent = /duplicate/i.test(error.message) ? 'Code already exists.' : error.message;
      return;
    }
    this._closeNewClass();
    await this._renderClasses();
    await this._selectClass(data.id);
  },

  async _deleteClass() {
    if (!this._selectedClassId) return;
    if (!confirm('Delete this class, its students, and all progress? This cannot be undone.')) return;
    const { error } = await sb.from('classes').delete().eq('id', this._selectedClassId);
    if (error) { alert(error.message); return; }
    this._selectedClassId = null;
    this._selectedStudentId = null;
    await this._renderClasses();
    document.getElementById('admin-main').innerHTML =
      `<div class="empty-state">Select a class to view students.</div>`;
  },

  async _exportCsv() {
    if (!this._selectedClassId) return;
    const [{ data: cls }, { data: students }] = await Promise.all([
      sb.from('classes').select('code, name').eq('id', this._selectedClassId).maybeSingle(),
      sb.from('students').select('id, name').eq('class_id', this._selectedClassId)
    ]);
    const studentIds = (students || []).map(s => s.id);
    const { data: progress } = await sb.from('progress')
      .select('student_id, resource_id, completed_at')
      .in('student_id', studentIds);

    // Flat resource list
    const allResources = [];
    CONTENT.pillars.forEach(p => p.subtracks.forEach(t =>
      t.phases.forEach(ph => ph.resources.forEach(r =>
        allResources.push({ pillar: p.name, track: t.name, phase: ph.name, id: r.id, title: r.title })
      ))
    ));

    const header = [
      'student_name','pillar','track','phase','resource_id','resource_title','completed','completed_at'
    ];
    const rows = [header.join(',')];
    const doneMap = new Map();
    (progress || []).forEach(p => doneMap.set(p.student_id + '|' + p.resource_id, p.completed_at));

    (students || []).forEach(s => {
      allResources.forEach(r => {
        const key = s.id + '|' + r.id;
        const done = doneMap.has(key);
        rows.push([
          this._csvField(s.name),
          this._csvField(r.pillar),
          this._csvField(r.track),
          this._csvField(r.phase),
          this._csvField(r.id),
          this._csvField(r.title),
          done ? '1' : '0',
          done ? doneMap.get(key) : ''
        ].join(','));
      });
    });

    const blob = new Blob([rows.join('\n')], { type: 'text/csv' });
    const url  = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `aql-learn-${cls?.code || 'class'}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  },

  _csvField(s) {
    const v = String(s ?? '');
    if (/[",\n]/.test(v)) return '"' + v.replace(/"/g, '""') + '"';
    return v;
  },

  async _signOut() {
    await Auth.signOut();
    Router.navigate('home');
  },

  _totalResources() {
    let n = 0;
    CONTENT.pillars.forEach(p => p.subtracks.forEach(t =>
      t.phases.forEach(ph => { n += ph.resources.length; })));
    return n;
  },

  _fmtTime(iso) {
    if (!iso) return '—';
    const d = new Date(iso);
    const now = Date.now();
    const diff = (now - d.getTime()) / 1000;
    if (diff < 60) return 'just now';
    if (diff < 3600) return Math.floor(diff / 60) + 'm ago';
    if (diff < 86400) return Math.floor(diff / 3600) + 'h ago';
    if (diff < 604800) return Math.floor(diff / 86400) + 'd ago';
    return d.toISOString().slice(0, 10);
  }
};

window.AdminView = AdminView;
