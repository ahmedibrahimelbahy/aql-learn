// ============================================================
// AQL Learn — Application Logic
// Hash-based SPA router + progress tracking via localStorage
// ============================================================

'use strict';

// ============================================================
// Progress Manager
// Stores completed resource IDs in localStorage
// ============================================================
const Progress = {
  KEY: 'aql-learn-progress-v1',

  _cache: null,

  load() {
    if (this._cache) return this._cache;
    try {
      this._cache = new Set(JSON.parse(localStorage.getItem(this.KEY) || '[]'));
    } catch {
      this._cache = new Set();
    }
    return this._cache;
  },

  save() {
    localStorage.setItem(this.KEY, JSON.stringify([...this._cache]));
  },

  isComplete(id) {
    return this.load().has(id);
  },

  toggle(id) {
    const set = this.load();
    if (set.has(id)) {
      set.delete(id);
    } else {
      set.add(id);
    }
    this.save();
    return set.has(id);
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
  }
};

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
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function getTotalStats() {
  let totalResources = 0, totalTracks = 0;
  CONTENT.pillars.forEach(p => {
    p.subtracks.forEach(t => {
      totalTracks++;
      t.phases.forEach(ph => {
        totalResources += ph.resources.length;
      });
    });
  });
  return { totalResources, totalTracks };
}

// ============================================================
// Router
// Hash-based: #home | #pillar/ID | #track/ID
// ============================================================
const Router = {
  navigate(path) {
    window.location.hash = path;
  },

  current() {
    return window.location.hash.slice(1) || 'home';
  },

  init() {
    window.addEventListener('hashchange', () => this._render());
    this._render();
  },

  _render() {
    const path = this.current();
    const [view, param] = path.split('/');

    // Hide all views
    document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));

    if (view === 'pillar' && param) {
      Views.renderPillar(param);
    } else if (view === 'track' && param) {
      Views.renderTrack(param);
    } else {
      Views.renderHome();
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
             `<span class="breadcrumb-sep">›</span>`;
    }
    return `<span>${esc(p.label)}</span>`;
  }).join('');
}

// ============================================================
// Views
// ============================================================
const Views = {

  // ── HOME ─────────────────────────────────────────────────
  renderHome() {
    document.getElementById('view-home').classList.add('active');
    setBreadcrumb([]);

    // Stats bar
    const { totalResources, totalTracks } = getTotalStats();
    document.getElementById('hero-stats').innerHTML = `
      <div class="hero-stat">
        <div class="hero-stat-number">${CONTENT.pillars.length}</div>
        <div class="hero-stat-label">Pillars</div>
      </div>
      <div class="hero-stat">
        <div class="hero-stat-number">${totalTracks}</div>
        <div class="hero-stat-label">Tracks</div>
      </div>
      <div class="hero-stat">
        <div class="hero-stat-number">${totalResources}</div>
        <div class="hero-stat-label">Resources</div>
      </div>
    `;

    // Pillar cards
    document.getElementById('pillar-grid').innerHTML = CONTENT.pillars.map(pillar => {
      const tags = pillar.subtracks.map(s =>
        `<span class="track-tag">${esc(s.icon)} ${esc(s.name)}</span>`
      ).join('');

      return `
        <div class="pillar-card" onclick="Router.navigate('pillar/${esc(pillar.id)}')">
          <span class="pillar-arrow">↗</span>
          <span class="pillar-icon">${pillar.icon}</span>
          <h2>${esc(pillar.name)}</h2>
          <p>${esc(pillar.description)}</p>
          <div class="pillar-tracks">${tags}</div>
        </div>
      `;
    }).join('');
  },

  // ── PILLAR ───────────────────────────────────────────────
  renderPillar(pillarId) {
    const pillar = CONTENT.pillars.find(p => p.id === pillarId);
    if (!pillar) { Router.navigate('home'); return; }

    document.getElementById('view-pillar').classList.add('active');
    setBreadcrumb([
      { href: 'home', label: 'Home' },
      { href: `pillar/${pillarId}`, label: pillar.name }
    ]);

    document.getElementById('pillar-title').textContent = pillar.name;
    document.getElementById('pillar-desc').textContent = pillar.description;

    document.getElementById('subtrack-grid').innerHTML = pillar.subtracks.map(track => {
      const stats = Progress.getTrackStats(track.id);
      const totalPhases = track.phases.length;

      return `
        <div class="subtrack-card" onclick="Router.navigate('track/${esc(track.id)}')">
          <div class="subtrack-header">
            <div class="subtrack-icon">${track.icon}</div>
            <div class="subtrack-title-wrap">
              <h3>${esc(track.name)}</h3>
              <div class="subtrack-meta">
                <span>⏱ ${esc(track.estimatedTime)}</span>
                <span>📚 ${stats.total} resources</span>
                <span>🗂 ${totalPhases} phases</span>
              </div>
            </div>
          </div>
          <p>${esc(track.description)}</p>
          <div class="progress-label">
            <span>Progress</span>
            <span>${stats.done} / ${stats.total}</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${stats.pct}%"></div>
          </div>
        </div>
      `;
    }).join('');
  },

  // ── TRACK ────────────────────────────────────────────────
  renderTrack(trackId) {
    const found = findTrackWithPillar(trackId);
    if (!found) { Router.navigate('home'); return; }
    const { pillar, track } = found;

    document.getElementById('view-track').classList.add('active');
    setBreadcrumb([
      { href: 'home', label: 'Home' },
      { href: `pillar/${pillar.id}`, label: pillar.name },
      { href: `track/${trackId}`, label: track.name }
    ]);

    // Back button goes to correct pillar
    document.getElementById('track-back-btn').onclick = () =>
      Router.navigate(`pillar/${pillar.id}`);

    // Header
    document.getElementById('track-icon').textContent = track.icon;
    document.getElementById('track-title').textContent = track.name;
    document.getElementById('track-desc').textContent = track.description;
    document.getElementById('track-meta').innerHTML = `
      <span class="meta-chip">⏱ ${esc(track.estimatedTime)}</span>
      <span class="meta-chip">🗂 ${track.phases.length} phases</span>
    `;

    // Overall stats
    this._updateTrackStats(trackId);

    // Timeline
    document.getElementById('timeline').innerHTML = track.phases
      .map(phase => this._renderPhase(phase))
      .join('');
  },

  _updateTrackStats(trackId) {
    const stats = Progress.getTrackStats(trackId);
    const el = (id) => document.getElementById(id);
    if (el('stat-completed')) el('stat-completed').textContent = stats.done;
    if (el('stat-total'))     el('stat-total').textContent     = stats.total;
    if (el('stat-pct'))       el('stat-pct').textContent       = stats.pct + '%';
    if (el('track-progress-fill'))
      el('track-progress-fill').style.width = stats.pct + '%';
  },

  _renderPhase(phase) {
    const stats = Progress.getPhaseStats(phase);
    const allDone = stats.total > 0 && stats.done === stats.total;

    const cards = phase.resources
      .map(r => this._renderResourceCard(r))
      .join('');

    return `
      <div class="phase" id="phase-${esc(phase.id)}">
        <div class="phase-dot${allDone ? ' completed' : ''}"></div>
        <div class="phase-header">
          <div class="phase-timeline-label">${esc(phase.timeline)}</div>
          <div class="phase-name">${esc(phase.name)}</div>
          <div class="phase-progress">
            <div class="progress-label">
              <span id="phase-label-${esc(phase.id)}">${stats.done}/${stats.total} completed</span>
              <span id="phase-pct-${esc(phase.id)}">${stats.pct}%</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" id="phase-fill-${esc(phase.id)}" style="width: ${stats.pct}%"></div>
            </div>
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
    const cbLabel = done ? 'Done' : 'Mark done';

    if (resource.type === 'youtube') {
      const ytId = getYouTubeId(resource.url);
      const thumbSrc = ytId
        ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`
        : '';
      const imgHtml = thumbSrc
        ? `<img src="${esc(thumbSrc)}" alt="${esc(resource.title)}" loading="lazy"
             onerror="this.style.display='none'">`
        : '';

      return `
        <div class="resource-card${doneClass}" id="card-${esc(resource.id)}">
          <div class="completed-check">✓</div>
          <div class="resource-thumb">
            ${imgHtml}
            <div class="thumb-overlay">
              <div class="play-icon"></div>
            </div>
            ${resource.duration ? `<span class="duration-badge">${esc(resource.duration)}</span>` : ''}
          </div>
          <div class="resource-body">
            <span class="resource-type youtube">▶ YouTube</span>
            <div class="resource-title">${esc(resource.title)}</div>
            <div class="resource-desc">${esc(resource.description || '')}</div>
            <div class="resource-footer">
              <a class="btn-open" href="${esc(resource.url)}" target="_blank" rel="noopener noreferrer">
                Watch ↗
              </a>
              <div class="mark-done-wrap" onclick="toggleDone('${esc(resource.id)}', event)">
                <div class="check-box${cbClass}" id="cb-${esc(resource.id)}"></div>
                <span id="cb-label-${esc(resource.id)}">${cbLabel}</span>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // Article / link card
    return `
      <div class="resource-card${doneClass}" id="card-${esc(resource.id)}">
        <div class="completed-check">✓</div>
        <div class="article-icon-area">
          <div class="article-icon">🔗</div>
        </div>
        <div class="resource-body">
          <span class="resource-type article">🔗 Article</span>
          <div class="resource-title">${esc(resource.title)}</div>
          <div class="resource-desc">${esc(resource.description || '')}</div>
          <div class="resource-footer">
            <a class="btn-open" href="${esc(resource.url)}" target="_blank" rel="noopener noreferrer">
              Read ↗
            </a>
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
// Toggle resource completion (called from inline onclick)
// ============================================================
function toggleDone(resourceId, event) {
  event.preventDefault();
  event.stopPropagation();

  const isNowDone = Progress.toggle(resourceId);

  // Update card class
  const card = document.getElementById(`card-${resourceId}`);
  if (card) card.classList.toggle('completed', isNowDone);

  // Update checkbox
  const cb = document.getElementById(`cb-${resourceId}`);
  if (cb) cb.classList.toggle('checked', isNowDone);

  // Update checkbox label
  const label = document.getElementById(`cb-label-${resourceId}`);
  if (label) label.textContent = isNowDone ? 'Done' : 'Mark done';

  // Find which track/phase owns this resource
  const path = Router.current();
  if (!path.startsWith('track/')) return;
  const trackId = path.split('/')[1];
  const found = findTrackWithPillar(trackId);
  if (!found) return;

  const { track } = found;

  // Update overall stats
  Views._updateTrackStats(trackId);

  // Update the phase that contains this resource
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
    if (lbl)  lbl.textContent  = `${stats.done}/${stats.total} completed`;
    if (pct)  pct.textContent  = `${stats.pct}%`;
    break;
  }
}

// ============================================================
// Boot
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  Router.init();
});
