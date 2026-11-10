// Read local Muse (Meta) session logs and report usage for the current local day and previous 29 days.
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { homedir } from 'node:os';

const base = join(homedir(), '.local', 'share', 'muse', 'sessions');
const end = new Date();
const start = new Date(end.getFullYear(), end.getMonth(), end.getDate() - 29);
const localDay = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

const totals = { input_tokens: 0, output_tokens: 0, cached_tokens: 0, cache_write_tokens: 0, cache_read_tokens: 0, reasoning_tokens: 0, total_tokens: 0 };
const models = {}, daily = {}, sessions = new Set();
const review = { calls: 0, total_tokens: 0 };
let events = 0, first = null, last = null;
const errors = [];

// Direct API calls are not in local CLI session logs. Add the manually
// reported figure from the tracked file next to this script; it must be
// updated or zeroed when the reported API total changes.
const api = { input_tokens: 0, output_tokens: 0, total_tokens: 0 };
try {
  const manual = JSON.parse(readFileSync(new URL('./meta-muse-api-usage.json', import.meta.url), 'utf8'));
  for (const [field, key] of [['inputTokens', 'input_tokens'], ['outputTokens', 'output_tokens']]) {
    const value = manual[field];
    if (typeof value !== 'number' || !Number.isSafeInteger(value) || value < 0) throw new Error(`Invalid ${field} in meta-muse-api-usage.json`);
    api[key] = value;
  }
  api.total_tokens = api.input_tokens + api.output_tokens;
  totals.input_tokens += api.input_tokens;
  totals.output_tokens += api.output_tokens;
  totals.total_tokens += api.total_tokens;
} catch (error) { errors.push(`meta-muse-api-usage.json: ${error.message}`); }

function sessionIdFor(file) {
  const parts = file.split(/[\\/]/);
  const i = parts.lastIndexOf('sessions');
  return i >= 0 && parts.length > i + 4 ? parts[i + 4] : null;
}

function addUsage(usage, model, day, time, sid) {
  const input = usage.input_tokens || 0, output = usage.output_tokens || 0;
  for (const [key, value] of Object.entries(usage)) {
    if (typeof value !== 'number' || !Number.isSafeInteger(value) || value < 0) throw new Error(`Invalid Muse token count in ${sid}`);
  }
  const total = input + output;
  totals.input_tokens += input;
  totals.output_tokens += output;
  totals.cached_tokens += usage.cached_tokens || 0;
  totals.cache_write_tokens += usage.cache_write_tokens || 0;
  totals.cache_read_tokens += usage.cache_read_tokens || 0;
  totals.reasoning_tokens += usage.reasoning_tokens || 0;
  totals.total_tokens += total;
  if (model) models[model] = (models[model] || 0) + total;
  daily[day] = (daily[day] || 0) + total;
  sessions.add(sid);
  events++;
  if (!first || time < first) first = time;
  if (!last || time > last) last = time;
}

function scan(dir) {
  if (!existsSync(dir)) throw new Error(`Missing Muse sessions directory: ${dir}`);
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const file = join(dir, entry.name);
    if (entry.isDirectory()) { scan(file); continue; }
    if (entry.name !== 'session.jsonl') continue;
    try {
      const sid = sessionIdFor(file) || file;
      for (const line of readFileSync(file, 'utf8').split('\n')) {
        if (!line.includes('"model_completed"') && !line.includes('"automated_review_completed"')) continue;
        const record = JSON.parse(line);
        const event = record.payload && record.payload.event;
        if (!event || !event.usage) continue;
        if (typeof record.recorded_at !== 'number' || Number.isNaN(new Date(record.recorded_at / 1000).getTime())) throw new Error(`Invalid timestamp in ${file}`);
        const time = new Date(record.recorded_at / 1000);
        if (time < start || time > end) continue;
        const day = localDay(time);
        if (event.kind === 'model_completed') {
          if (typeof event.model !== 'string' || !event.model) throw new Error(`Missing Muse model identity in ${file}`);
          addUsage(event.usage, event.model, day, time, sid);
        } else if (event.kind === 'automated_review_completed') {
          // Background safety reviews: real model calls, tracked separately so the
          // main total stays comparable with the other agents' agent-turn usage.
          const input = event.usage.input_tokens || 0, output = event.usage.output_tokens || 0;
          if (!Number.isSafeInteger(input) || input < 0 || !Number.isSafeInteger(output) || output < 0) throw new Error(`Invalid Muse review token count in ${file}`);
          review.calls++;
          review.total_tokens += input + output;
        }
      }
    } catch (error) { errors.push(`${file}: ${error.message}`); }
  }
}

try { scan(base); } catch (error) { errors.push(error.message); }
console.log(JSON.stringify({ start: start.toISOString(), end: end.toISOString(), sessions: sessions.size, events, totals, api, models, daily, review, first, last, errors }, null, 2));
if (errors.length) process.exitCode = 1;
