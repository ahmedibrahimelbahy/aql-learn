// ============================================================
// AQL Learn — Neural Command Center
// Hash router + Supabase-backed auth & progress.
// Auth, Progress, and sb live in supabase.js (loaded first).
// ============================================================

'use strict';

// ============================================================
// Helpers
// ============================================================
function findTrack(trackId) {
  for (const pillar of CONTENT.pillars) {
    const track = pillar.subtracks.find(s => s.id === trackId);
    if (track) return track;
  }
  return null;
}

function findTrackWithPillar(trackId) {
  for (const pillar of CONTENT.pillars) {
    const track = pillar.subtracks.find(s => s.id === trackId);
    if (track) return { pillar, track };
  }
  return null;
}

function getYouTubeId(url) {
  if (!url) return null;
  const m = url.match(/(?:[?&]v=|youtu\.be\/)([A-Za-z0-9_-]{11})/);
  return m ? m[1] : null;
}

function esc(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function getTotalStats() {
  let totalResources = 0, totalTracks = 0;
  CONTENT.pillars.forEach(p => {
    p.subtracks.forEach(t => {
      totalTracks++;
      t.phases.forEach(ph => { totalResources += ph.resources.length; });
    });
  });
  return { totalResources, totalTracks };
}

function pad(n, width = 2) { return String(n).padStart(width, '0'); }

// ============================================================
// SVG Icons
// ============================================================
const ICONS = {
  // Pillars (current 4)
  'start-here':      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/></svg>',
  'by-channel':      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="13" rx="1"/><circle cx="12" cy="12.5" r="3.5"/><path d="M7 6l2-3h6l2 3"/></svg>',
  'official-courses':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M12 3L2 8l10 5 10-5-10-5z"/><path d="M2 14l10 5 10-5"/><path d="M6 10v5l6 3 6-3v-5"/></svg>',
  'by-topic':        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2" fill="currentColor"/></svg>',

  // Tracks — current
  onramp:            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>',
  'build-agents':    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="8" width="14" height="11" rx="2"/><circle cx="9" cy="13" r="1.2"/><circle cx="15" cy="13" r="1.2"/><path d="M12 8V4M9 4h6M3 14h2M19 14h2"/></svg>',
  'build-code':      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="1"/><path d="M7 9l-3 3 3 3M13 9l3 3-3 3M11 16l2-8"/></svg>',
  'create-content':  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l4 4M15 15l4 4M5 19l4-4M15 9l4-4"/><circle cx="12" cy="12" r="2"/></svg>',

  // Legacy track icons (kept for compatibility if re-introduced)
  automation:        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"><path d="M13 2L4 14h7l-2 8 9-12h-7l2-8z"/></svg>',
  'content-creation':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l4 4M15 15l4 4M5 19l4-4M15 9l4-4"/><circle cx="12" cy="12" r="2"/></svg>',
  development:       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6l-6 6 6 6M16 6l6 6-6 6M14 3l-4 18"/></svg>',

  n8n:          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/><circle cx="12" cy="12" r="2"/><path d="M8 6h8M6 8v8M18 8v8M8 18h8M7.5 7.5l3 3M16.5 7.5l-3 3M7.5 16.5l3-3M16.5 16.5l-3-3"/></svg>',
  'ai-agents':  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="8" width="14" height="11" rx="2"/><circle cx="9" cy="13" r="1.2"/><circle cx="15" cy="13" r="1.2"/><path d="M12 8V4M9 4h6M3 14h2M19 14h2"/></svg>',
  marketing:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11v2a1 1 0 0 0 1 1h2l4 4V6L6 10H4a1 1 0 0 0-1 1z"/><path d="M14 8a5 5 0 0 1 0 8M17 5a9 9 0 0 1 0 14"/></svg>',
  'image-gen':  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="1"/><circle cx="9" cy="9" r="1.5"/><path d="M3 17l5-5 4 4 3-3 6 6"/></svg>',
  'video-gen':  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="16" height="14" rx="1"/><path d="M18 9l4-2v10l-4-2z"/><path d="M8 9l4 3-4 3z"/></svg>',
  'web-dev':    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></svg>',
  'app-dev':    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M10 18h4"/></svg>',
  'ai-fluency':             '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v14H8l-4 4z"/><path d="M8 10h8M8 14h5"/></svg>',
  'claude-code-courses':    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="1"/><path d="M7 9l-3 3 3 3M13 9l3 3-3 3M11 16l2-8"/></svg>',
  'claude-platform-courses':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3v5a2 2 0 0 0 2 2h8a2 2 0 0 1 2 2v5"/><circle cx="6" cy="3" r="1.5"/><circle cx="18" cy="21" r="1.5"/><circle cx="12" cy="12" r="3"/></svg>',

  article: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
  course:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3L2 8l10 5 10-5-10-5z"/><path d="M6 10v5l6 3 6-3v-5"/></svg>',
  fallback:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3" fill="currentColor"/></svg>'
};

function getIcon(key) { return ICONS[key] || ICONS.fallback; }

// ============================================================
// Reusable visuals
// ============================================================
function renderRing(pct, size = 44, stroke = 2, showLabel = true) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - pct / 100);
  return `
    <div class="pillar-ring" style="width:${size}px;height:${size}px">
      <svg viewBox="0 0 ${size} ${size}">
        <circle class="pillar-ring-track" cx="${size/2}" cy="${size/2}" r="${r}"/>
        <circle class="pillar-ring-fill"
                cx="${size/2}" cy="${size/2}" r="${r}"
                stroke-dasharray="${c}"
                stroke-dashoffset="${offset}"/>
      </svg>
      ${showLabel ? `<div class="pillar-ring-pct">${pct}%</div>` : ''}
    </div>
  `;
}

function typeWriter(el, text, speed = 55, onDone) {
  // Cancel any in-flight typing on this element so we never interleave
  if (el._twToken) el._twToken.cancelled = true;
  const token = { cancelled: false };
  el._twToken = token;

  el.textContent = '';
  let i = 0;
  (function step() {
    if (token.cancelled) return;
    if (i >= text.length) { if (onDone) onDone(); return; }
    el.textContent += text.charAt(i++);
    setTimeout(step, speed);
  })();
}

function countUp(el, target, duration = 1200) {
  const start = performance.now();
  (function frame(now) {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = Math.floor(target * eased);
    if (t < 1) requestAnimationFrame(frame);
    else el.textContent = target;
  })(start);
}

// ============================================================
// Join Modal (student auth)
// ============================================================
function openJoinModal(force = false) {
  const modal = document.getElementById('join-modal');
  const cancel = document.getElementById('join-modal-cancel');
  if (cancel) cancel.style.display = force ? 'none' : '';
  document.getElementById('join-code').value = '';
  document.getElementById('join-name').value = '';
  document.getElementById('join-password').value = '';
  document.getElementById('join-error').textContent = '';
  modal.classList.add('open');
  setTimeout(() => document.getElementById('join-code').focus(), 50);
}

function closeJoinModal() {
  document.getElementById('join-modal').classList.remove('open');
}

async function submitJoinModal() {
  const code = document.getElementById('join-code').value;
  const name = document.getElementById('join-name').value;
  const password = document.getElementById('join-password').value;
  const err = document.getElementById('join-error');
  err.textContent = '';
  const btn = document.getElementById('join-submit');
  btn.disabled = true;
  btn.textContent = 'Connecting…';
  try {
    await Auth.joinOrLogin({ code, name, password });
    await Progress.load();
    updateProfileBadge();
    closeJoinModal();
    Router._render();
  } catch (e) {
    err.textContent = e.message || 'Could not join.';
  } finally {
    btn.disabled = false;
    btn.textContent = 'Connect';
  }
}

// ============================================================
// Profile badge + dropdown (header, right side)
// ============================================================
function updateProfileBadge() {
  const badge = document.getElementById('profile-badge');
  if (!badge) return;
  const student = Auth.student();
  if (Auth.isAdmin()) {
    badge.textContent = 'A';
    badge.setAttribute('title', 'Admin — ' + (Auth.session()?.user?.email || ''));
  } else if (student) {
    badge.textContent = (student.name || '?').charAt(0).toUpperCase();
    badge.setAttribute('title', student.name);
  } else {
    badge.textContent = '?';
    badge.setAttribute('title', 'Not signed in');
  }
}

function toggleProfileDropdown() {
  const dd = document.getElementById('profile-dropdown');
  if (dd.classList.contains('open')) closeProfileDropdown();
  else openProfileDropdown();
}

function openProfileDropdown() {
  renderProfileDropdown();
  document.getElementById('profile-dropdown').classList.add('open');
  setTimeout(() => {
    document.addEventListener('click', _outsideDropdownClose, { once: true });
  }, 0);
}

function closeProfileDropdown() {
  document.getElementById('profile-dropdown').classList.remove('open');
}

function _outsideDropdownClose(e) {
  const widget = document.getElementById('profile-widget');
  if (!widget.contains(e.target)) closeProfileDropdown();
}

function renderProfileDropdown() {
  const dd = document.getElementById('profile-dropdown');
  const student = Auth.student();
  const cls = Auth.classRow();
  const isAdmin = Auth.isAdmin();

  const lines = [];
  if (student) {
    lines.push(`<div class="dropdown-info">${esc(student.name)}</div>`);
    if (cls) lines.push(`<div class="dropdown-info dim">Class · ${esc(cls.code)}</div>`);
  } else if (isAdmin) {
    lines.push(`<div class="dropdown-info">Admin</div>`);
    lines.push(`<div class="dropdown-info dim">${esc(Auth.session()?.user?.email || '')}</div>`);
  } else {
    lines.push(`<div class="dropdown-info dim">Not signed in</div>`);
  }
  lines.push(`<div class="dropdown-divider"></div>`);

  if (!student && !isAdmin) {
    lines.push(`<div class="dropdown-action" onclick="openJoinModal(false)">Join a Class</div>`);
  }
  if (isAdmin) {
    lines.push(`<div class="dropdown-action" onclick="Router.navigate('admin')">Admin Dashboard</div>`);
  }
  if (student || isAdmin) {
    lines.push(`<div class="dropdown-action danger" onclick="signOut()">Sign Out</div>`);
  } else {
    lines.push(`<div class="dropdown-action" onclick="Router.navigate('admin')">Admin Login</div>`);
  }

  dd.innerHTML = lines.join('');
}

async function signOut() {
  await Auth.signOut();
  Progress.reload();
  closeProfileDropdown();
  updateProfileBadge();
  Router.navigate('home');
  openJoinModal(true);
}

// ============================================================
// Router
// ============================================================
const Router = {
  navigate(path) { window.location.hash = path; },
  current() { return window.location.hash.slice(1) || 'home'; },

  init() {
    window.addEventListener('hashchange', () => this._render());
    this._render();
  },

  _render() {
    const path = this.current();
    const [view, param] = path.split('/');

    document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));

    if (view === 'admin') {
      closeJoinModal();
      document.getElementById('view-admin').classList.add('active');
      AdminView.render();
    } else if (view === 'pillar' && param) {
      if (!Auth.isStudent()) { openJoinModal(true); return; }
      closeJoinModal();
      Views.renderPillar(param);
    } else if (view === 'track' && param) {
      if (!Auth.isStudent()) { openJoinModal(true); return; }
      closeJoinModal();
      Views.renderTrack(param);
    } else {
      Views.renderHome();
      if (!Auth.isStudent() && !Auth.isAdmin()) openJoinModal(true);
      else closeJoinModal();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

// ============================================================
// Breadcrumb
// ============================================================
function setBreadcrumb(parts) {
  const el = document.getElementById('breadcrumb');
  if (!parts.length) { el.innerHTML = ''; return; }
  el.innerHTML = parts.map((p, i) => {
    if (i < parts.length - 1) {
      return `<a class="breadcrumb-link" href="#${esc(p.href)}">${esc(p.label)}</a>` +
             `<span class="breadcrumb-sep">/</span>`;
    }
    return `<span>${esc(p.label)}</span>`;
  }).join('');
}

// ============================================================
// Home mode toggle (Grid / Map)
// ============================================================
const HOME_MODE_KEY = 'aql-learn-home-mode';

function setHomeMode(mode) {
  if (mode !== 'grid' && mode !== 'map') mode = 'grid';
  localStorage.setItem(HOME_MODE_KEY, mode);

  document.getElementById('toggle-grid').classList.toggle('active', mode === 'grid');
  document.getElementById('toggle-map').classList.toggle('active', mode === 'map');

  const grid = document.getElementById('pillar-grid');
  const map  = document.getElementById('constellation-wrap');

  if (mode === 'grid') {
    grid.style.display = '';
    map.style.display = 'none';
  } else {
    grid.style.display = 'none';
    map.style.display = '';
    renderConstellation();
  }
}

function getHomeMode() { return localStorage.getItem(HOME_MODE_KEY) || 'grid'; }

// ============================================================
// Constellation
// ============================================================
function renderConstellation() {
  const svg = document.getElementById('constellation-svg');
  if (!svg) return;

  const W = 1200, H = 620;
  const pillars = CONTENT.pillars;
  const n = pillars.length;

  const positions = pillars.map((_, i) => {
    const t = (i + 1) / (n + 1);
    const x = t * W;
    const y = H * 0.5 + Math.sin(t * Math.PI * 2) * H * 0.18;
    return { x, y };
  });

  let out = '';

  pillars.forEach((pillar, pi) => {
    const { x, y } = positions[pi];
    const tracks = pillar.subtracks;

    out += `<circle class="orbit-line" cx="${x}" cy="${y}" r="78"/>`;

    tracks.forEach((track, ti) => {
      const angle = (ti / tracks.length) * Math.PI * 2 - Math.PI / 2;
      const tx = x + Math.cos(angle) * 78;
      const ty = y + Math.sin(angle) * 78;
      const stats = Progress.getTrackStats(track.id);
      const completed = stats.pct === 100;

      // Spoke from pillar to track
      out += `<line class="spoke-glow" x1="${x}" y1="${y}" x2="${tx}" y2="${ty}"/>`;
      out += `<line class="spoke-line" x1="${x}" y1="${y}" x2="${tx}" y2="${ty}"/>`;
      out += `<circle class="data-packet" r="1.8">`;
      out += `<animateMotion dur="2.4s" repeatCount="indefinite" begin="${(ti * 0.3).toFixed(2)}s" path="M${x},${y} L${tx},${ty}"/>`;
      out += `</circle>`;

      // Resource dots around track
      track.phases.forEach((phase, phi) => {
        phase.resources.forEach((res, ri) => {
          const idx = phi * 10 + ri;
          const rangle = (idx / 8) * Math.PI * 2;
          const rr = 14 + ((idx % 3) * 4);
          const rx = tx + Math.cos(rangle) * rr;
          const ry = ty + Math.sin(rangle) * rr;
          const done = Progress.isComplete(res.id);
          out += `<circle class="resource-dot${done ? ' completed' : ''}" cx="${rx}" cy="${ry}" r="1.6"/>`;
          out += `<line class="resource-line" x1="${tx}" y1="${ty}" x2="${rx}" y2="${ry}"/>`;
        });
      });

      out += `<g class="track-node${completed ? ' completed' : ''}" onclick="Router.navigate('track/${esc(track.id)}')">`;
      out += `<circle cx="${tx}" cy="${ty}" r="4"/>`;
      const labelY = ty + (Math.sin(angle) > 0 ? 18 : -10);
      out += `<text x="${tx}" y="${labelY}">${esc(track.name.toUpperCase())}</text>`;
      out += `</g>`;
    });

    out += `<g class="pillar-node" onclick="Router.navigate('pillar/${esc(pillar.id)}')">`;
    out += `<circle cx="${x}" cy="${y}" r="9"/>`;
    out += `<circle cx="${x}" cy="${y}" r="16" fill="none" stroke="#00e5ff" stroke-opacity="0.3"/>`;
    out += `<text x="${x}" y="${y - 28}">${esc(pillar.name.toUpperCase())}</text>`;
    out += `</g>`;
  });

  svg.innerHTML = out;
  attachConstellationInteractions();
}

function attachConstellationInteractions() {
  const wrap = document.getElementById('constellation-wrap');
  const svg  = document.getElementById('constellation-svg');
  const coords = document.getElementById('constellation-coords');
  if (!wrap || !svg) return;

  wrap.onmousemove = (e) => {
    const rect = wrap.getBoundingClientRect();
    const cx = ((e.clientX - rect.left) / rect.width) - 0.5;
    const cy = ((e.clientY - rect.top) / rect.height) - 0.5;
    svg.style.transform = `translate(${-cx * 14}px, ${-cy * 10}px)`;
    if (coords) {
      const x = ((e.clientX - rect.left) / rect.width * 1200).toFixed(2).padStart(6, '0');
      const y = ((e.clientY - rect.top) / rect.height * 620).toFixed(2).padStart(6, '0');
      coords.textContent = `X ${x} · Y ${y}`;
    }
  };

  clearInterval(wrap._shootInterval);
  wrap._shootInterval = setInterval(() => {
    if (wrap.style.display === 'none') return;
    const star = document.createElement('div');
    star.className = 'shooting-star';
    star.style.top = (Math.random() * 60) + '%';
    star.style.left = '-100px';
    star.style.transform = `rotate(${-15 + Math.random() * 30}deg)`;
    wrap.appendChild(star);
    star.animate([
      { left: '-100px', opacity: 0 },
      { left: '30%',    opacity: 1, offset: 0.1 },
      { left: '120%',   opacity: 0 }
    ], { duration: 1400, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' })
      .onfinish = () => star.remove();
  }, 7000);
}

// ============================================================
// Views
// ============================================================
const Views = {

  renderHome() {
    document.getElementById('view-home').classList.add('active');
    setBreadcrumb([]);

    const line1 = document.getElementById('hero-line-1');
    const line2 = document.getElementById('hero-line-2');
    line2.innerHTML = '';
    typeWriter(line1, 'LEARN AI.', 60, () => {
      setTimeout(() => {
        typeWriter(line2, 'BUILD THE FUTURE.', 55, () => {
          const cur = document.createElement('span');
          cur.className = 'type-cursor';
          line2.appendChild(cur);
        });
      }, 200);
    });

    const { totalResources, totalTracks } = getTotalStats();
    document.getElementById('hero-stats').innerHTML = `
      <div class="hero-stat">
        <div class="hero-stat-number" data-target="${CONTENT.pillars.length}">0</div>
        <div class="hero-stat-label">Pillars</div>
      </div>
      <div class="hero-stat">
        <div class="hero-stat-number" data-target="${totalTracks}">0</div>
        <div class="hero-stat-label">Tracks</div>
      </div>
      <div class="hero-stat">
        <div class="hero-stat-number" data-target="${totalResources}">0</div>
        <div class="hero-stat-label">Resources</div>
      </div>
    `;
    setTimeout(() => {
      document.querySelectorAll('.hero-stat-number[data-target]').forEach(el => {
        countUp(el, parseInt(el.dataset.target, 10), 1400);
      });
    }, 600);

    const grid = document.getElementById('pillar-grid');
    grid.innerHTML = CONTENT.pillars.map((pillar, i) => {
      const stats = Progress.getPillarStats(pillar);
      const trackCount = pillar.subtracks.length;
      const resCount = pillar.subtracks.reduce((a, t) =>
        a + t.phases.reduce((b, p) => b + p.resources.length, 0), 0);
      const iconHtml = ICONS[pillar.id] || `<span style="font-size:1.6rem">${esc(pillar.icon)}</span>`;
      return `
        <div class="pillar-card" onclick="Router.navigate('pillar/${esc(pillar.id)}')">
          <span class="corner tl"></span><span class="corner tr"></span>
          <span class="corner bl"></span><span class="corner br"></span>
          <div class="pillar-card-head">
            <span class="pillar-index">PILLAR · ${pad(i + 1)} / ${pad(CONTENT.pillars.length)}</span>
            ${renderRing(stats.pct, 44)}
          </div>
          <div class="pillar-icon-frame">${iconHtml}</div>
          <h2>${esc(pillar.name)}</h2>
          <p>${esc(pillar.description)}</p>
          <div class="pillar-meta">
            <strong>${trackCount}</strong> TRACKS · <strong>${resCount}</strong> RESOURCES
          </div>
        </div>
      `;
    }).join('');

    setHomeMode(getHomeMode());
  },

  renderPillar(pillarId) {
    const pillar = CONTENT.pillars.find(p => p.id === pillarId);
    if (!pillar) { Router.navigate('home'); return; }

    document.getElementById('view-pillar').classList.add('active');
    setBreadcrumb([
      { href: 'home', label: 'HOME' },
      { href: `pillar/${pillarId}`, label: pillar.name.toUpperCase() }
    ]);

    document.getElementById('pillar-title').textContent = pillar.name;
    document.getElementById('pillar-desc').textContent = pillar.description;

    const pillarStats = Progress.getPillarStats(pillar);
    const totalPhases = pillar.subtracks.reduce((a, t) => a + t.phases.length, 0);
    document.getElementById('pillar-meta').innerHTML = `
      <span class="meta-chip">${pillar.subtracks.length} Tracks</span>
      <span class="meta-chip">${totalPhases} Phases</span>
      <span class="meta-chip">${pillarStats.total} Resources</span>
      <span class="meta-chip">${pillarStats.pct}% Complete</span>
    `;

    document.getElementById('subtrack-grid').innerHTML = pillar.subtracks.map(track => {
      const stats = Progress.getTrackStats(track.id);
      const totalPhases = track.phases.length;
      const initialFallback = track.id.endsWith('-channel')
        ? `<span class=&quot;creator-initial&quot;>${esc(track.name.charAt(0))}</span>`
        : `<span style=&quot;font-size:1.4rem&quot;>${esc(track.icon)}</span>`;
      const iconHtml = track.avatar
        ? `<img src="${esc(track.avatar)}" alt="${esc(track.name)}" class="creator-avatar" onerror="this.outerHTML='${initialFallback}'">`
        : (track.id.endsWith('-channel')
          ? `<span class="creator-initial">${esc(track.name.charAt(0))}</span>`
          : (ICONS[track.id] || `<span style="font-size:1.4rem">${esc(track.icon)}</span>`));

      return `
        <div class="subtrack-card" onclick="Router.navigate('track/${esc(track.id)}')">
          <div class="subtrack-icon">${iconHtml}</div>
          <div class="subtrack-body">
            <h3>${esc(track.name)}</h3>
            <div class="subtrack-meta">
              <span>${esc(track.estimatedTime)}</span>
              <span>${stats.total} Resources</span>
              <span>${totalPhases} Phases</span>
            </div>
            <p>${esc(track.description)}</p>
          </div>
          <div class="subtrack-progress-wrap">
            ${renderRing(stats.pct, 58)}
            <div class="btn-launch">LAUNCH ▸</div>
          </div>
        </div>
      `;
    }).join('');
  },

  renderTrack(trackId) {
    const found = findTrackWithPillar(trackId);
    if (!found) { Router.navigate('home'); return; }
    const { pillar, track } = found;

    document.getElementById('view-track').classList.add('active');
    setBreadcrumb([
      { href: 'home', label: 'HOME' },
      { href: `pillar/${pillar.id}`, label: pillar.name.toUpperCase() },
      { href: `track/${trackId}`, label: track.name.toUpperCase() }
    ]);

    document.getElementById('track-back-btn').onclick = () =>
      Router.navigate(`pillar/${pillar.id}`);

    const trackIconEl = document.getElementById('track-icon');
    if (track.avatar) {
      const fallback = track.id.endsWith('-channel')
        ? `<span class=&quot;creator-initial large&quot;>${esc(track.name.charAt(0))}</span>`
        : `<span style=&quot;font-size:1.6rem&quot;>${esc(track.icon)}</span>`;
      trackIconEl.innerHTML = `<img src="${esc(track.avatar)}" alt="${esc(track.name)}" class="creator-avatar" onerror="this.outerHTML='${fallback}'">`;
    } else if (track.id.endsWith('-channel')) {
      trackIconEl.innerHTML = `<span class="creator-initial large">${esc(track.name.charAt(0))}</span>`;
    } else {
      trackIconEl.innerHTML = ICONS[track.id] || `<span style="font-size:1.6rem">${esc(track.icon)}</span>`;
    }
    document.getElementById('track-title').textContent = track.name;
    document.getElementById('track-desc').textContent = track.description;
    document.getElementById('track-meta').innerHTML = `
      <span class="meta-chip">${esc(track.estimatedTime)}</span>
      <span class="meta-chip">${track.phases.length} Phases</span>
      <span class="meta-chip">Pillar: ${esc(pillar.name)}</span>
    `;

    this._updateTrackStats(trackId);
    this._renderSegmentBar(track);

    document.getElementById('timeline').innerHTML = track.phases
      .map(phase => this._renderPhase(phase))
      .join('');
  },

  _renderSegmentBar(track) {
    const bar = document.getElementById('segment-bar');
    if (!bar) return;
    const allResources = [];
    track.phases.forEach(p => p.resources.forEach(r => allResources.push(r)));
    bar.innerHTML = allResources.map(r =>
      `<div class="segment${Progress.isComplete(r.id) ? ' active' : ''}" data-id="${esc(r.id)}"></div>`
    ).join('');
  },

  _updateTrackStats(trackId) {
    const stats = Progress.getTrackStats(trackId);
    const el = (id) => document.getElementById(id);
    if (el('stat-completed')) el('stat-completed').textContent = pad(stats.done);
    if (el('stat-total'))     el('stat-total').textContent     = pad(stats.total);
    if (el('stat-pct'))       el('stat-pct').textContent       = stats.pct + '%';
  },

  _renderPhase(phase) {
    const stats = Progress.getPhaseStats(phase);
    const allDone = stats.total > 0 && stats.done === stats.total;
    const cards = phase.resources.map(r => this._renderResourceCard(r)).join('');

    return `
      <div class="phase" id="phase-${esc(phase.id)}">
        <div class="phase-dot${allDone ? ' completed' : ''}"></div>
        <div class="phase-header">
          <div class="phase-timeline-label">${esc(phase.timeline)}</div>
          <div class="phase-name">${esc(phase.name)}</div>
          <div class="phase-progress">
            <span id="phase-label-${esc(phase.id)}">${pad(stats.done)}/${pad(stats.total)}</span>
            <div class="progress-bar">
              <div class="progress-fill" id="phase-fill-${esc(phase.id)}" style="width: ${stats.pct}%"></div>
            </div>
            <span id="phase-pct-${esc(phase.id)}">${stats.pct}%</span>
          </div>
        </div>
        <div class="resource-grid">${cards}</div>
      </div>
    `;
  },

  _renderResourceCard(resource) {
    const done = Progress.isComplete(resource.id);
    const doneClass = done ? ' completed' : '';
    const cbClass = done ? ' checked' : '';
    const cbLabel = done ? 'Done' : 'Mark';
    const isNew = (() => {
      if (!resource.dateAdded) return false;
      const diffDays = (new Date() - new Date(resource.dateAdded)) / (1000 * 60 * 60 * 24);
      return diffDays <= 30;
    })();
    const newBadgeHtml = isNew ? '<span class="badge-new">NEW</span>' : '';

    if (resource.type === 'youtube') {
      const ytId = getYouTubeId(resource.url);
      const thumbSrc = ytId ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg` : '';
      const imgHtml = thumbSrc
        ? `<img src="${esc(thumbSrc)}" alt="${esc(resource.title)}" loading="lazy" onerror="this.style.display='none'">`
        : '';

      return `
        <div class="resource-card${doneClass}" id="card-${esc(resource.id)}">
          ${newBadgeHtml}
          <div class="completed-check">✓</div>
          <div class="resource-thumb">
            ${imgHtml}
            <div class="thumb-overlay"><div class="play-icon"></div></div>
            ${resource.duration ? `<span class="duration-badge">${esc(resource.duration)}</span>` : ''}
          </div>
          <div class="resource-body">
            <span class="resource-type youtube">▶ Video</span>
            <div class="resource-title">${esc(resource.title)}</div>
            <div class="resource-desc">${esc(resource.description || '')}</div>
            <div class="resource-footer">
              <a class="btn-open" href="${esc(resource.url)}" target="_blank" rel="noopener noreferrer">Watch</a>
              <div class="mark-done-wrap" onclick="toggleDone('${esc(resource.id)}', event)">
                <div class="check-box${cbClass}" id="cb-${esc(resource.id)}"></div>
                <span id="cb-label-${esc(resource.id)}">${cbLabel}</span>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    if (resource.type === 'course') {
      return `
        <div class="resource-card${doneClass}" id="card-${esc(resource.id)}">
          ${newBadgeHtml}
          <div class="completed-check">✓</div>
          <div class="article-icon-area">
            <div class="article-icon" style="color:#00ff9d;border-color:rgba(0,255,157,0.35);background:rgba(0,255,157,0.06)">
              ${getIcon('course')}
            </div>
          </div>
          <div class="resource-body">
            <span class="resource-type course">◆ Course</span>
            <div class="resource-title">${esc(resource.title)}</div>
            <div class="resource-desc">${esc(resource.description || '')}</div>
            <div class="resource-footer">
              <a class="btn-open" href="${esc(resource.url)}" target="_blank" rel="noopener noreferrer">Enroll</a>
              <div class="mark-done-wrap" onclick="toggleDone('${esc(resource.id)}', event)">
                <div class="check-box${cbClass}" id="cb-${esc(resource.id)}"></div>
                <span id="cb-label-${esc(resource.id)}">${cbLabel}</span>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    return `
      <div class="resource-card${doneClass}" id="card-${esc(resource.id)}">
        ${newBadgeHtml}
        <div class="completed-check">✓</div>
        <div class="article-icon-area">
          <div class="article-icon">${getIcon('article')}</div>
        </div>
        <div class="resource-body">
          <span class="resource-type article">◇ Article</span>
          <div class="resource-title">${esc(resource.title)}</div>
          <div class="resource-desc">${esc(resource.description || '')}</div>
          <div class="resource-footer">
            <a class="btn-open" href="${esc(resource.url)}" target="_blank" rel="noopener noreferrer">Read</a>
            <div class="mark-done-wrap" onclick="toggleDone('${esc(resource.id)}', event)">
              <div class="check-box${cbClass}" id="cb-${esc(resource.id)}"></div>
              <span id="cb-label-${esc(resource.id)}">${cbLabel}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};

// ============================================================
// Toggle resource completion (async — writes to Supabase)
// ============================================================
async function toggleDone(resourceId, event) {
  event.preventDefault();
  event.stopPropagation();

  if (!Auth.isStudent()) { openJoinModal(true); return; }

  const isNowDone = await Progress.toggle(resourceId);

  const card = document.getElementById(`card-${resourceId}`);
  if (card) card.classList.toggle('completed', isNowDone);
  const cb = document.getElementById(`cb-${resourceId}`);
  if (cb) cb.classList.toggle('checked', isNowDone);
  const label = document.getElementById(`cb-label-${resourceId}`);
  if (label) label.textContent = isNowDone ? 'Done' : 'Mark';
  const seg = document.querySelector(`.segment[data-id="${resourceId}"]`);
  if (seg) seg.classList.toggle('active', isNowDone);

  const path = Router.current();
  if (!path.startsWith('track/')) return;
  const trackId = path.split('/')[1];
  const found = findTrackWithPillar(trackId);
  if (!found) return;

  const { track } = found;
  Views._updateTrackStats(trackId);

  for (const phase of track.phases) {
    const owns = phase.resources.some(r => r.id === resourceId);
    if (!owns) continue;

    const stats = Progress.getPhaseStats(phase);
    const allDone = stats.total > 0 && stats.done === stats.total;

    const dot   = document.querySelector(`#phase-${phase.id} .phase-dot`);
    const fill  = document.getElementById(`phase-fill-${phase.id}`);
    const lbl   = document.getElementById(`phase-label-${phase.id}`);
    const pct   = document.getElementById(`phase-pct-${phase.id}`);

    if (dot)  dot.classList.toggle('completed', allDone);
    if (fill) fill.style.width = `${stats.pct}%`;
    if (lbl)  lbl.textContent  = `${pad(stats.done)}/${pad(stats.total)}`;
    if (pct)  pct.textContent  = `${stats.pct}%`;
    break;
  }
}

// ============================================================
// Boot
// ============================================================
document.addEventListener('DOMContentLoaded', async () => {
  await Auth.init();
  if (Auth.isStudent()) await Progress.load();
  updateProfileBadge();
  Router.init();

  // Refresh UI when auth state changes (sign in / out)
  Auth.onChange(async () => {
    if (Auth.isStudent()) await Progress.load();
    else Progress.reload();
    updateProfileBadge();
    Router._render();
  });
});
