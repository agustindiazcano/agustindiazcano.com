// Summarize local Grok Build session updates for today and the previous 29 local calendar days.
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const now = new Date();
const start = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 29);
const stats = { sessions: 0, turns: 0, input: 0, cache: 0, output: 0 };
const models = {};
const daily = {};
const errors = [];
const sessionIds = new Set();
let updatesFiles = 0, withoutTokens = 0, first = null, last = null;

function scan(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const file = join(dir, entry.name);
    if (entry.isDirectory()) { scan(file); continue; }
    if (entry.name !== 'updates.jsonl') continue;
    updatesFiles++;
    try {
      for (const line of readFileSync(file, 'utf8').split('\n')) {
        if (!line.trim() || !line.includes('usage')) continue;
        const event = JSON.parse(line);
        if (event.method !== '_x.ai/session/update') continue;
        const update = event.params && event.params.update;
        const usage = update && update.usage;
        const agentMs = event.params && event.params._meta && event.params._meta.agentTimestampMs;
        const ms = typeof agentMs === 'number' ? agentMs : (typeof event.timestamp === 'number' ? event.timestamp * 1000 : NaN);
        const time = new Date(ms);
        if (Number.isNaN(time.getTime())) throw new Error('Invalid event timestamp');
        if (time < start || time > now) continue;
        const input = usage.inputTokens || 0, output = usage.outputTokens || 0;
        if (!input && !output) { withoutTokens++; continue; }
        for (const value of [input, output, usage.cachedReadTokens || 0, usage.cacheCreationTokens || 0]) {
          if (!Number.isSafeInteger(value) || value < 0) throw new Error('Invalid Grok token count');
        }
        const total = usage.totalTokens || (input + output);
        stats.turns++;
        stats.input += input;
        stats.output += output;
        stats.cache += (usage.cachedReadTokens || 0) + (usage.cacheCreationTokens || 0);
        for (const [model, mu] of Object.entries(usage.modelUsage || {})) {
          models[model] = (models[model] || 0) + (mu.totalTokens || ((mu.inputTokens || 0) + (mu.outputTokens || 0)));
        }
        sessionIds.add(event.params.sessionId || file);
        const day = `${time.getFullYear()}-${String(time.getMonth() + 1).padStart(2, '0')}-${String(time.getDate()).padStart(2, '0')}`;
        const row = daily[day] ??= { turns: 0, input: 0, cache: 0, output: 0 };
        row.turns++;
        row.input += input;
        row.cache += (usage.cachedReadTokens || 0) + (usage.cacheCreationTokens || 0);
        row.output += output;
        if (!first || time < first) first = time;
        if (!last || time > last) last = time;
      }
    } catch (error) { errors.push(`${file}: ${error.message}`); }
  }
}

const base = join(homedir(), '.grok', 'sessions');
if (!existsSync(base)) errors.push(`Missing Grok sessions directory: ${base}`);
else scan(base);
stats.sessions = sessionIds.size;
stats.total = stats.input + stats.output;
console.log(JSON.stringify({ start: start.toISOString(), end: now.toISOString(), stats, models, daily, updatesFiles, sessionsWithUsage: sessionIds.size, withoutTokens, first, last, errors }, null, 2));
if (errors.length) process.exitCode = 1;
