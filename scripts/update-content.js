// ============================================================
// AQL Learn — Monthly Content Updater
// Uses Claude API to suggest new learning resources per track,
// validates them, and inserts them into content.js with today's date.
//
// Usage: ANTHROPIC_API_KEY=... node update-content.js
// ============================================================

import Anthropic from '@anthropic-ai/sdk';
import { readFileSync, writeFileSync } from 'fs';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import path from 'path';
import vm from 'vm';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONTENT_PATH = path.join(__dirname, '..', 'content.js');
const TODAY = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
const DELAY_MS = 1500; // between Claude API calls

const client = new Anthropic();

// ── Parse content.js ────────────────────────────────────────
function loadContent(raw) {
  // Evaluate the JS file and capture the CONTENT variable
  return vm.runInNewContext(raw + '\nCONTENT', {});
}

// ── Build sets of existing URLs and IDs ─────────────────────
function buildExistingSets(content) {
  const urls = new Set();
  const ids = new Set();
  for (const pillar of content.pillars) {
    for (const track of pillar.subtracks) {
      for (const phase of track.phases) {
        for (const r of phase.resources) {
          ids.add(r.id);
          if (r.url) urls.add(r.url.toLowerCase());
        }
      }
    }
  }
  return { urls, ids };
}

// ── Validate a URL is reachable ──────────────────────────────
async function validateUrl(url) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const res = await fetch(url, {
      method: 'HEAD',
      redirect: 'follow',
      signal: controller.signal,
      headers: { 'User-Agent': 'AQL-Learn-Updater/1.0' },
    });
    clearTimeout(timeout);
    return res.ok;
  } catch {
    return false;
  }
}

// ── Validate a YouTube URL has a real-looking video ID ───────
function isValidYouTubeUrl(url) {
  const m = url.match(/[?&]v=([A-Za-z0-9_-]{11})/);
  if (!m) return false;
  if (/ADD_VIDEO_HERE|PLACEHOLDER/i.test(m[1])) return false;
  return true;
}

// ── Generate a unique resource ID ───────────────────────────
function generateId(trackId, phaseIndex, resourceCount, existingIds) {
  let id = `${trackId}-${phaseIndex}-${resourceCount}`;
  let suffix = 0;
  while (existingIds.has(id)) {
    suffix++;
    id = `${trackId}-${phaseIndex}-${resourceCount}-${suffix}`;
  }
  existingIds.add(id);
  return id;
}

// ── Serialize a resource object to JS source ─────────────────
function serializeResource(r, indent) {
  const i = ' '.repeat(indent);
  const lines = [
    `${i}{`,
    `${i}  id: ${JSON.stringify(r.id)},`,
    `${i}  dateAdded: ${JSON.stringify(r.dateAdded)},`,
    `${i}  type: ${JSON.stringify(r.type)},`,
    `${i}  title: ${JSON.stringify(r.title)},`,
    `${i}  url: ${JSON.stringify(r.url)},`,
  ];
  if (r.type === 'youtube' && r.duration) {
    lines.push(`${i}  duration: ${JSON.stringify(r.duration)},`);
  }
  lines.push(`${i}  description: ${JSON.stringify(r.description)}`);
  lines.push(`${i}}`);
  return lines.join('\n');
}

// ── Insert new resources into the raw file string ────────────
function insertResourcesIntoPhase(fileContent, phaseId, newResources, indent) {
  const phaseMarker = `id: ${JSON.stringify(phaseId)}`;
  const phaseStart = fileContent.indexOf(phaseMarker);
  if (phaseStart === -1) throw new Error(`Phase "${phaseId}" not found in file`);

  const resourcesMarker = 'resources: [';
  const resourcesStart = fileContent.indexOf(resourcesMarker, phaseStart);
  if (resourcesStart === -1) throw new Error(`resources array not found in phase "${phaseId}"`);

  // Walk forward to find the matching closing ]
  let depth = 0;
  let i = resourcesStart + resourcesMarker.length - 1; // position of '['
  for (; i < fileContent.length; i++) {
    if (fileContent[i] === '[') depth++;
    else if (fileContent[i] === ']') {
      depth--;
      if (depth === 0) break;
    }
  }

  const insertion = newResources
    .map(r => ',\n' + serializeResource(r, indent))
    .join('');

  return fileContent.slice(0, i) + insertion + fileContent.slice(i);
}

// ── Ask Claude for new resource suggestions ──────────────────
async function getSuggestions(pillarName, track) {
  const existingList = track.phases
    .flatMap(p => p.resources)
    .map((r, i) => `${i + 1}. ${r.title} — ${r.url}`)
    .join('\n');

  const prompt = `You are a learning content curator for AQL Learn, an AI education platform.

Track: ${track.name} (${pillarName} pillar)
Track description: ${track.description}

Existing resources — do NOT suggest these again:
${existingList}

Today's date: ${TODAY}

Suggest 2–3 NEW, high-quality learning resources for this track. Focus on resources that are current and highly relevant to practitioners in ${new Date().getFullYear()}.

Return ONLY a valid JSON array, no other text, no markdown fences:
[
  {
    "type": "youtube",
    "title": "...",
    "url": "https://www.youtube.com/watch?v=REAL_VIDEO_ID",
    "duration": "X min",
    "description": "1–2 sentence description of what learners will get from this."
  }
]

Rules:
- YouTube URLs must be real youtube.com/watch?v=XXXXXXXXXXX URLs with actual 11-character video IDs
- Article URLs must be real, publicly accessible URLs
- No placeholder text — only real, existing content
- No duplicates with the list above
- For articles omit the "duration" field entirely`;

  const response = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 1024,
    messages: [{ role: 'user', content: prompt }],
  });

  const text = response.content[0].text.trim()
    .replace(/^```json\s*/i, '')
    .replace(/\s*```$/, '')
    .trim();

  return JSON.parse(text);
}

// ── Main ─────────────────────────────────────────────────────
async function main() {
  console.log(`\n🔄 AQL Learn — Monthly Content Refresh (${TODAY})\n`);

  const originalContent = readFileSync(CONTENT_PATH, 'utf8');
  let fileContent = originalContent;
  const parsed = loadContent(originalContent);
  const { urls: existingUrls, ids: existingIds } = buildExistingSets(parsed);

  let totalAdded = 0;

  for (const pillar of parsed.pillars) {
    for (const track of pillar.subtracks) {
      console.log(`\n📚 Processing: ${track.name}`);

      // Collect existing titles/URLs for this track for the prompt
      let suggestions = [];
      try {
        suggestions = await getSuggestions(pillar.name, track);
        if (!Array.isArray(suggestions)) throw new Error('Response is not an array');
        suggestions = suggestions.slice(0, 3); // cap at 3
        console.log(`  Claude suggested ${suggestions.length} resource(s)`);
      } catch (err) {
        console.error(`  ⚠️  Claude call failed for "${track.name}": ${err.message}`);
        await new Promise(r => setTimeout(r, DELAY_MS));
        continue;
      }

      const lastPhase = track.phases[track.phases.length - 1];
      const newResources = [];

      for (const s of suggestions) {
        // Deduplicate
        if (existingUrls.has(s.url?.toLowerCase())) {
          console.log(`  ⏭  Skipped (duplicate URL): ${s.title}`);
          continue;
        }

        // Validate
        if (s.type === 'youtube') {
          if (!isValidYouTubeUrl(s.url)) {
            console.log(`  ⏭  Skipped (invalid YouTube ID): ${s.title}`);
            continue;
          }
        } else {
          const live = await validateUrl(s.url);
          if (!live) {
            console.log(`  ⏭  Skipped (URL unreachable): ${s.title}`);
            continue;
          }
        }

        const resourceIndex = lastPhase.resources.length + newResources.length + 1;
        const phaseIndex = track.phases.length;
        const id = generateId(track.id, phaseIndex, resourceIndex, existingIds);

        const resource = {
          id,
          dateAdded: TODAY,
          type: s.type,
          title: s.title,
          url: s.url,
          ...(s.type === 'youtube' && s.duration ? { duration: s.duration } : {}),
          description: s.description,
        };

        newResources.push(resource);
        existingUrls.add(s.url.toLowerCase());
        console.log(`  ✅ Queued: ${s.title}`);
      }

      if (newResources.length > 0) {
        try {
          fileContent = insertResourcesIntoPhase(fileContent, lastPhase.id, newResources, 18);
          totalAdded += newResources.length;
        } catch (err) {
          console.error(`  ⚠️  Insert failed for "${track.name}": ${err.message}`);
        }
      }

      // Rate-limit between API calls
      await new Promise(r => setTimeout(r, DELAY_MS));
    }
  }

  if (fileContent !== originalContent) {
    writeFileSync(CONTENT_PATH, fileContent, 'utf8');
    console.log(`\n✅ Done — added ${totalAdded} new resource(s) to content.js`);
  } else {
    console.log('\nℹ️  No new resources added (all suggestions were duplicates or invalid)');
  }
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
