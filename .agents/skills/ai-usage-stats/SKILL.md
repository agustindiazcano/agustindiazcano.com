---
name: ai-usage-stats
description: Calculate, update, and display the multi-model AI agent token usage statistics table across Claude Code, Antigravity, Codex, Meta Muse, Grok, and Cursor.
---

# AI Usage Stats (`ai-usage-stats`)

Use this skill whenever the user asks for AI agent token usage, consumption across all models, runs or checks usage scripts, or wants to display the usage statistics table.

## Quick Execution

To calculate the 30-day rolling usage across all configured assistants and update the site metrics:

```bash
node scripts/update-usage.mjs
```

This master script executes the individual platform collectors in parallel/sequence:
1. `node scripts/claude-usage.mjs`: Aggregates Claude Code session transcripts and cache snapshots.
2. `node scripts/codex-usage.mjs`: Computes Codex session deltas from active/archived rollouts (includes cached input in input; output includes reasoning).
3. `node scripts/antigravity-usage.mjs`: Reads `transcript.jsonl` under Antigravity brain directories (`~/.gemini/antigravity/brain` and `~/.gemini/antigravity-cli/brain`). Note that input and cache reads are separate in Antigravity (Total = input + cache + output).
4. `node scripts/meta-muse-usage.mjs`: Scans `model_completed` session events in `~/.local/share/muse/sessions`. Input includes cache reads; output includes reasoning. Background reviews are tracked separately.
5. `node scripts/grok-usage.mjs`: Scans turn snapshots from `~/.grok/sessions/**/updates.jsonl`. Input includes cache reads; output includes reasoning.
6. `node scripts/cursor-usage.mjs`: Validates that Cursor metrics remain server-side only (`localCoverage: false`, 0 local tokens).

And automatically synchronizes:
- `src/data/claude-usage/current.json`
- `public/llms.txt`
- `public/llms-full.txt`

## Presentation Guidelines

When presenting the results to the user, display a clean Markdown breakdown table with the following structure:

```markdown
### Summary (Last 30 Days: MM-DD to MM-DD)
- **Combined Total**: ~X.XX Billion tokens across Y sessions.

### Multi-Model Breakdown

| Assistant / Environment | Total Tokens | Sessions | Input Tokens | Cache Read | Output Tokens | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | ... | ... | ... | ... | ... | ... |
| **Antigravity** | ... | ... | ... | ... | ... | ... |
| **Codex** | ... | ... | ... | ... | ... | ... |
| **Meta Muse** | ... | ... | ... | ... | ... | ... |
| **Grok** | ... | ... | ... | ... | ... | ... |
| **Cursor** | 0 | ... | - | - | - | Server-side only (cursor.com) |
```

### Essential Rules & Disclaimers

1. **No Emojis**: Strictly adhere to the project rule prohibiting emojis in messages and markdown documents.
2. **Local Coverage vs Account Total**: Local sessions may not represent account-wide totals (e.g. Cursor is server-side only; Antigravity might have sessions without tokens or unindexed transcripts; Codex started recording on its initial rollout date). Always report limitations transparently.
3. **Cache Accounting Nuance**:
   - In Codex, Meta Muse, and Grok, cached input is already included in the input count.
   - In Antigravity, uncached input and cache reads are reported separately (Total = input + cache + output).
4. **Privacy**: Never expose private transcript text, session paths containing sensitive information, or credentials.
