import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync, renameSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const run = script => JSON.parse(execFileSync(process.execPath, [fileURLToPath(new URL(script, import.meta.url))], { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 }));
const claude = run('./claude-usage.mjs');
const codex = run('./codex-usage.mjs');
const antigravity = run('./antigravity-usage.mjs');
if (codex.errors.length || antigravity.errors.length || !claude.total || !codex.totals.total_tokens || !antigravity.stats.total) throw new Error('Missing or incomplete usage source');
const localDay = d => { const date = new Date(d); return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`; };
if (claude.firstDay !== localDay(codex.start) || claude.firstDay !== localDay(antigravity.start) || claude.today !== localDay(codex.end) || claude.today !== localDay(antigravity.end)) throw new Error('Usage sources have different date windows');
const file = new URL('../src/data/claude-usage/current.json', import.meta.url);
const data = JSON.parse(readFileSync(file, 'utf8'));
const format = n => n >= 1e9 ? `${(n / 1e9).toFixed(2)}b` : `${(n / 1e6).toFixed(1)}m`;
const activityDays = Object.keys(claude.daily).filter(d => claude.daily[d] > 0).sort();
let longest = 0, streak = 0, previous = null;
for (const day of activityDays) { const time = Date.parse(`${day}T00:00:00Z`); streak = previous !== null && time - previous === 86400000 ? streak + 1 : 1; longest = Math.max(longest, streak); previous = time; }
const daysSinceLast = activityDays.length ? (Date.parse(`${claude.today}T00:00:00Z`) - previous) / 86400000 : 99;
data.period = `${claude.firstDay.slice(5)} to ${claude.today.slice(5)}`;
data.totalTokens = format(claude.total);
data.claudeTotalTokens = claude.total;
data.sessions = claude.sessions;
data.favoriteModel = Object.entries(claude.models).filter(([model]) => model !== '<synthetic>').sort((a, b) => b[1] - a[1])[0]?.[0] || 'Unknown';
data.activeDays = `${activityDays.length}/30`;
data.longestStreak = `${longest} days`;
data.currentStreak = `${daysSinceLast <= 1 ? streak : 0} days`;
data.codex = { totalTokens: codex.totals.total_tokens, sessions: codex.sessions, inputTokens: codex.totals.input_tokens, cachedInputTokens: codex.totals.cached_input_tokens, outputTokens: codex.totals.output_tokens, recordedSince: localDay(codex.first).slice(5) };
data.antigravity = { totalTokens: antigravity.stats.total, sessions: antigravity.stats.sessions, turns: antigravity.stats.turns, inputTokens: antigravity.stats.input, cachedInputTokens: antigravity.stats.cache, outputTokens: antigravity.stats.output };
data.combined = { totalTokens: format(claude.total + codex.totals.total_tokens + antigravity.stats.total), sessions: claude.sessions + codex.sessions + antigravity.stats.sessions };
const tmp = new URL('./current.json.tmp', file);
writeFileSync(tmp, `${JSON.stringify(data, null, 2)}\n`);
renameSync(tmp, file);

const combinedTotal = claude.total + codex.totals.total_tokens + antigravity.stats.total;
const monthsMedian = Math.round(combinedTotal / 51e6);
const yearsMedian = (combinedTotal / 51e6 / 12).toFixed(1);
const monthsPower = Math.round(combinedTotal / 380e6);
const yearsPower = (combinedTotal / 380e6 / 12).toFixed(1);
const teamSize = monthsMedian;

const section = `## AI Agent Usage (Last 30 Days)
- **Combined Total**: ~${(combinedTotal / 1e9).toFixed(2)} Billion tokens across ${data.combined.sessions} sessions (${claude.firstDay} to ${claude.today}).
- **Per-Agent Breakdown**: Claude Code (~${(claude.total / 1e9).toFixed(2)}B tokens, ${claude.sessions} sessions) | Antigravity (~${(antigravity.stats.total / 1e6).toFixed(1)}M tokens, ${antigravity.stats.sessions} sessions) | Codex (~${(codex.totals.total_tokens / 1e6).toFixed(1)}M tokens, ${codex.sessions} sessions).
- **Reference Comparisons**: The combined count is approximately ${monthsMedian} months (~${yearsMedian} years) at 51M tokens/month, or ${monthsPower} months (~${yearsPower} years) at 380M tokens/month. It is numerically comparable to one month at the median rate for ~${teamSize} developers.
- **Benchmark Source**: [Jellyfish Q1 2026 study](https://jellyfish.co/blog/is-tokenmaxxing-cost-effective-new-data-from-jellyfish-explains/) reported 51M tokens/month at the median and 380M at the 90th percentile among 12,000 developers at 200 companies. These are reference rates, not a global ranking; accounting methods and coverage may differ.\n`;

for (const relPath of ['../public/llms.txt', '../public/llms-full.txt']) {
  const url = new URL(relPath, import.meta.url);
  let content = readFileSync(url, 'utf8');
  const regex = /## AI Agent Usage \(Last 30 Days\)[\s\S]*?(?=\r?\n## About)/;
  if (!regex.test(content)) throw new Error(`Usage section not found in ${relPath}`);
  content = content.replace(regex, section);
  writeFileSync(url, content, 'utf8');
}

console.log(JSON.stringify({ period: data.period, claude: { totalTokens: claude.total, sessions: claude.sessions }, codex: data.codex, antigravity: data.antigravity, combined: data.combined, warnings: { codexFirst: codex.first, antigravityMissingTranscripts: antigravity.missingTranscripts, antigravityWithoutTokens: antigravity.withoutTokens } }, null, 2));
