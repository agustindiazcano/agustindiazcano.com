// Summarize local Antigravity transcripts for today and the previous 29 local calendar days.
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const now = new Date();
const start = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 29);
const stats = { sessions: 0, turns: 0, input: 0, cache: 0, output: 0 };
const daily = {};
const errors = [];
let transcripts = 0, missingTranscripts = 0, withoutTokens = 0;
for (const app of ['antigravity', 'antigravity-cli']) {
  const base = join(homedir(), '.gemini', app, 'brain');
  if (!existsSync(base)) continue;
  for (const entry of readdirSync(base, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const file = join(base, entry.name, '.system_generated', 'logs', 'transcript.jsonl');
    if (!existsSync(file)) { missingTranscripts++; continue; }
    transcripts++;
    try {
      let active = false;
      for (const line of readFileSync(file, 'utf8').split('\n')) {
        if (!line.trim()) continue;
        const event = JSON.parse(line);
        if (event.source !== 'MODEL' || event.status !== 'DONE' || !event.created_at) continue;
        const time = new Date(event.created_at);
        if (Number.isNaN(time.getTime())) throw new Error('Invalid event timestamp');
        if (time < start || time > now) continue;
        const input = event.input_tokens || 0, cache = event.cache_read_tokens || 0, output = event.output_tokens || 0;
        if (!input && !cache && !output) { withoutTokens++; continue; }
        active = true;
        const day = `${time.getFullYear()}-${String(time.getMonth() + 1).padStart(2, '0')}-${String(time.getDate()).padStart(2, '0')}`;
        const row = daily[day] ??= { turns: 0, input: 0, cache: 0, output: 0 };
        for (const result of [stats, row]) { result.turns++; result.input += input; result.cache += cache; result.output += output; }
      }
      if (active) stats.sessions++;
    } catch (error) { errors.push(`${file}: ${error.message}`); }
  }
}
stats.total = stats.input + stats.cache + stats.output;
console.log(JSON.stringify({ start: start.toISOString(), end: now.toISOString(), stats, daily, transcripts, missingTranscripts, withoutTokens, errors }, null, 2));
if (errors.length) process.exitCode = 1;
