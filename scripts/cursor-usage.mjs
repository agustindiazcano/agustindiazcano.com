// Report local Cursor activity for the current local day and previous 29 days.
//
// Cursor tracks token usage server-side (cursor.com dashboard): no local artifact
// examined on this machine carries token counters — not the agent transcripts
// (~/.cursor/projects/*/agent-transcripts/*.jsonl, role/message only), not the
// tracking DB (~/.cursor/ai-tracking/ai-code-tracking.db, code attribution only),
// and not the editor state DBs (workspace/global state.vscdb, no usage keys).
// This script therefore reports local transcript activity as sessions evidence
// with zero token totals and localCoverage:false so the updater can carry the
// limitation through instead of failing or publishing zeros as real usage.
import { readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { homedir } from 'node:os';

const end = new Date();
const start = new Date(end.getFullYear(), end.getMonth(), end.getDate() - 29);
const sessions = new Set();
const errors = ['No local Cursor token counters: usage is tracked server-side (cursor.com dashboard); local transcripts carry no token data'];
let transcripts = 0;

function collect(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const file = join(dir, entry.name);
    if (entry.isDirectory()) { collect(file); continue; }
    if (!entry.name.endsWith('.jsonl')) continue;
    transcripts++;
    const mtime = statSync(file).mtime;
    if (mtime >= start && mtime <= end) sessions.add(join(dir, entry.name));
  }
}

const base = join(homedir(), '.cursor', 'projects');
if (!existsSync(base)) errors.push(`Missing Cursor projects directory: ${base}`);
else {
  for (const entry of readdirSync(base, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const t = join(base, entry.name, 'agent-transcripts');
    if (existsSync(t)) collect(t);
  }
}
console.log(JSON.stringify({
  start: start.toISOString(),
  end: end.toISOString(),
  localCoverage: false,
  sessions: sessions.size,
  transcripts,
  totals: { input_tokens: 0, output_tokens: 0, total_tokens: 0 },
  errors
}, null, 2));
