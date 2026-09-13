import fs from 'fs';

function main() {
  let input = '';
  try {
    input = fs.readFileSync(0, 'utf-8');
  } catch (err) {
    // If no stdin or error reading stdin, allow to prevent locking agent
    console.log(JSON.stringify({ decision: 'allow' }));
    return;
  }

  if (!input || !input.trim()) {
    console.log(JSON.stringify({ decision: 'allow' }));
    return;
  }

  let event;
  try {
    event = JSON.parse(input);
  } catch (err) {
    console.log(JSON.stringify({ decision: 'allow' }));
    return;
  }

  const toolName = event?.toolCall?.name || '';
  const args = event?.toolCall?.args || {};

  // 1. Guard against destructive terminal commands
  if (toolName === 'run_command') {
    const cmd = (args.CommandLine || '').trim();
    const cmdLower = cmd.toLowerCase();

    // Destructive Git commands
    const destructiveGitPatterns = [
      /git\s+push\s+.*(--force|-f)\b/,
      /git\s+reset\s+--hard\b/,
      /git\s+clean\s+.*(-f|-fd|-xdf)\b/,
      /git\s+branch\s+(-D|--delete\s+--force)\b/
    ];

    for (const pattern of destructiveGitPatterns) {
      if (pattern.test(cmdLower)) {
        console.log(JSON.stringify({
          decision: 'deny',
          reason: `Blocked by safety hook: destructive git command "${cmd}" is forbidden.`
        }));
        return;
      }
    }

    // Dangerous filesystem deletion
    const dangerousFsPatterns = [
      /\brm\s+-(rf|fr|r)\s+(\/|~|\.|\.\.|\*)\b/,
      /\b(del|rmdir)\s+\/(s|q)\b/i,
      /\bformat\s+[a-z]:/i
    ];

    for (const pattern of dangerousFsPatterns) {
      if (pattern.test(cmdLower)) {
        console.log(JSON.stringify({
          decision: 'deny',
          reason: `Blocked by safety hook: destructive filesystem deletion command "${cmd}" is forbidden.`
        }));
        return;
      }
    }

    // Package publishing or production deploys: Require user approval (force_ask)
    if (cmdLower.includes('npm publish') || cmdLower.includes('pnpm publish')) {
      console.log(JSON.stringify({
        decision: 'deny',
        reason: 'Blocked by safety hook: publishing npm packages from the agent is forbidden.'
      }));
      return;
    }

    if (cmdLower.includes('vercel --prod') || cmdLower.includes('vercel deploy --prod')) {
      console.log(JSON.stringify({
        decision: 'force_ask',
        reason: 'Deploying directly to Vercel production requires manual confirmation.'
      }));
      return;
    }
  }

  // 2. Guard against modifying sensitive or secret files
  if (
    toolName === 'write_to_file' ||
    toolName === 'replace_file_content' ||
    toolName === 'multi_replace_file_content'
  ) {
    const targetFile = (args.TargetFile || '').replace(/\\/g, '/').toLowerCase();

    // Sensitive files regex
    const sensitiveFilePatterns = [
      /(^|\/)\.env(\.[a-z0-9_-]+)?$/, // .env, .env.local, .env.production, etc.
      /(^|\/)id_rsa(\.pub)?$/,
      /\.(pem|key|pfx|p12|keystore)$/,
      /(^|\/)(secrets|credentials)\.json$/,
      /(^|\/)\.git\// // Direct edits inside .git directory
    ];

    for (const pattern of sensitiveFilePatterns) {
      if (pattern.test(targetFile)) {
        console.log(JSON.stringify({
          decision: 'deny',
          reason: `Blocked by safety hook: editing sensitive credentials/config file "${args.TargetFile}" is forbidden.`
        }));
        return;
      }
    }
  }

  // Default: Allow normal operations
  console.log(JSON.stringify({ decision: 'allow' }));
}

main();
