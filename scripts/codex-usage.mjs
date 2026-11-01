// Read local Codex rollouts and report usage for the current local day and previous 29 days.
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { homedir } from 'node:os';
import { zstdDecompressSync } from 'node:zlib';

const root = process.env.CODEX_HOME || join(homedir(), '.codex');
const end = new Date();
const start = new Date(end.getFullYear(), end.getMonth(), end.getDate() - 29);
const totals = {};
let sessions = 0, events = 0, first = null, last = null;
const errors = [];

function scan(dir) {
  if (!existsSync(dir)) return;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const file = join(dir, entry.name);
    if (entry.isDirectory()) { scan(file); continue; }
    if (!entry.name.endsWith('.jsonl') && !entry.name.endsWith('.jsonl.zst')) continue;
    try {
      const bytes = readFileSync(file);
      const contents = (file.endsWith('.zst') ? zstdDecompressSync(bytes) : bytes).toString('utf8');
      let previous = {}, active = false;
      for (const line of contents.split('\n')) {
        if (!line.includes('token_count')) continue;
        let event;
        try { event = JSON.parse(line); } catch { throw new Error('Invalid JSON in token event'); }
        const usage = event.payload?.info?.total_token_usage;
        if (!usage) continue;
        const reset = usage.total_tokens < (previous.total_tokens || 0);
        const delta = Object.fromEntries(Object.entries(usage).map(([key, value]) => [key, value - (reset ? 0 : (previous[key] || 0))]));
        previous = usage;
        const time = new Date(event.timestamp);
        if (time < start || time > end || !(delta.total_tokens > 0)) continue;
        active = true;
        events++;
        if (!first || time < first) first = time;
        if (!last || time > last) last = time;
        for (const [key, value] of Object.entries(delta)) totals[key] = (totals[key] || 0) + value;
      }
      if (active) sessions++;
    } catch (error) { errors.push(`${file}: ${error.message}`); }
  }
}
scan(join(root, 'sessions'));
scan(join(root, 'archived_sessions'));
console.log(JSON.stringify({ start: start.toISOString(), end: end.toISOString(), sessions, events, totals, first, last, errors }, null, 2));
if (errors.length) process.exitCode = 1;
