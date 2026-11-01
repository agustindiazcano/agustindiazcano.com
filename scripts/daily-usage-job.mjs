// Scheduled by Windows; works in a disposable clone and only commits the usage snapshot.
import { execFileSync, spawnSync } from 'node:child_process';
import { appendFileSync, mkdirSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname, resolve } from 'node:path';

const repo = 'https://github.com/agustindiazcano/agustindiazcano.com.git';
const logDir = join(process.env.LOCALAPPDATA || tmpdir(), 'AgustinWebUsage');
mkdirSync(logDir, { recursive: true });
const log = message => appendFileSync(join(logDir, 'daily.log'), `${new Date().toISOString()} ${message}\n`);
const env = { ...process.env, GIT_TERMINAL_PROMPT: '0', GCM_INTERACTIVE: 'Never', GIT_CONFIG_COUNT: '2', GIT_CONFIG_KEY_0: 'credential.helper', GIT_CONFIG_VALUE_0: '', GIT_CONFIG_KEY_1: 'credential.helper', GIT_CONFIG_VALUE_1: '!gh auth git-credential' };
const run = (cmd, args, cwd) => execFileSync(cmd, args, { cwd, env, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], timeout: 300000, maxBuffer: 10 * 1024 * 1024 });
let work;
try {
  work = mkdtempSync(join(tmpdir(), 'agustinweb-usage-'));
  log('Starting daily usage update');
  run('git', ['clone', '--quiet', '--single-branch', '--branch', 'main', '--', repo, work]);
  const result = run(process.execPath, [join(work, 'scripts', 'update-usage.mjs')], work);
  log(`Calculated: ${JSON.stringify(JSON.parse(result))}`);
  const changed = spawnSync('git', ['diff', '--quiet', '--', 'src/data/claude-usage/current.json'], { cwd: work, env, timeout: 300000 });
  if (changed.status === 0) log('No changes');
  else {
    if (changed.status !== 1) throw new Error('Unable to inspect usage changes');
    if (process.argv.includes('--dry-run')) { log('Dry run: usage changed; no commit or push'); process.exitCode = 0; }
    else {
    run('git', ['add', '--', 'src/data/claude-usage/current.json'], work);
    run('git', ['commit', '-m', 'chore: update AI usage stats'], work);
    run('git', ['push', 'origin', 'HEAD:main'], work);
    log('Committed and pushed usage update to main');
    }
  }
} catch (error) {
  log(`FAILED: ${error.message}\n${error.stderr?.toString() || ''}`);
  process.exitCode = 1;
} finally {
  if (work && dirname(resolve(work)) === resolve(tmpdir()) && work.startsWith(join(tmpdir(), 'agustinweb-usage-'))) rmSync(work, { recursive: true, force: true });
}
