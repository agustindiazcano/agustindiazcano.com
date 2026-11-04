import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const base = join(homedir(), '.claude');
const cache = JSON.parse(readFileSync(join(base, 'stats-cache.json'), 'utf8'));
const now = new Date(), start = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 29);
const localDay = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const firstDay = localDay(start), today = localDay(now), lastCached = cache.lastComputedDate;
if (!lastCached || lastCached > today || !Array.isArray(cache.dailyModelTokens) || !Array.isArray(cache.dailyActivity)) throw new Error('Invalid Claude usage cache');
const daily = {}, models = {}, sessionsByDay = {};
for (const row of cache.dailyModelTokens) {
  if (row.date < firstDay || row.date > today || row.date > lastCached) continue;
  for (const [model, value] of Object.entries(row.tokensByModel || {})) {
    if (!Number.isSafeInteger(value) || value < 0) throw new Error('Invalid cached token count');
    models[model] = (models[model] || 0) + value;
    daily[row.date] = (daily[row.date] || 0) + value;
  }
}
for (const row of cache.dailyActivity) if (row.date >= firstDay && row.date <= today && row.date <= lastCached) sessionsByDay[row.date] = row.sessionCount || 0;
const live = new Map(), liveSessions = new Set();
const warnings = [];
function scan(dir) {
  if (!existsSync(dir)) throw new Error(`Missing Claude projects directory: ${dir}`);
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const file = join(dir, entry.name);
    if (entry.isDirectory()) { scan(file); continue; }
    if (!entry.name.endsWith('.jsonl')) continue;
    let contents;
    try { contents = readFileSync(file, 'utf8'); }
    catch (error) { warnings.push(`${file}: skipped (${error.code || error.message})`); continue; }
    for (const line of contents.split('\n')) {
      if (!line.includes('"usage"')) continue;
      const event = JSON.parse(line);
      if (event.type !== 'assistant' || !event.message?.usage || !event.timestamp) continue;
      const date = new Date(event.timestamp);
      if (Number.isNaN(date.getTime())) throw new Error(`Invalid timestamp in ${file}`);
      const day = localDay(date);
      if (day < firstDay || day > today || day <= lastCached || date > now) continue;
      const usage = event.message.usage, model = event.message.model;
      if (!model || !event.message.id) throw new Error(`Missing Claude message identity in ${file}`);
      const total = ['input_tokens', 'cache_creation_input_tokens', 'cache_read_input_tokens', 'output_tokens'].reduce((sum, key) => sum + (usage[key] || 0), 0);
      if (!Number.isSafeInteger(total) || total < 0) throw new Error(`Invalid Claude token count in ${file}`);
      const key = `${event.requestId || ''}:${event.message.id}`;
      const old = live.get(key);
      if (!old || total >= old.total) live.set(key, { day, model, total });
      if (event.sessionId && total) liveSessions.add(event.sessionId);
    }
  }
}
scan(join(base, 'projects'));
for (const { day, model, total } of live.values()) { models[model] = (models[model] || 0) + total; daily[day] = (daily[day] || 0) + total; }
const total = Object.values(models).reduce((a, b) => a + b, 0);
const sessions = Object.values(sessionsByDay).reduce((a, b) => a + b, 0) + liveSessions.size;
console.log(JSON.stringify({ firstDay, today, lastCached, total, sessions, models, daily, liveMessages: live.size, liveSessions: liveSessions.size, warnings }, null, 2));
