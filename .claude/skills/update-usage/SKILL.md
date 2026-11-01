---
name: update-usage
description: Update this portfolio's Claude Code, Codex and Antigravity usage statistics for the latest 30 days.
---

# Update usage

Use this skill when asked to calculate or update the usage widget. Its data is in `src/data/claude-usage/current.json`. Keep the current widget design and existing fields unless asked otherwise.

1. Run `node scripts/codex-usage.mjs` on the user's machine (Node 24 or newer supports compressed rollouts). It scans local active and archived Codex session files, including compressed ones, and sums changes in cumulative token counts within the current local calendar day and previous 29 days. Cached input is part of input, and reasoning output is part of output: do not add them twice. Count session files with usage in the period. Check `errors` and the first recorded event; report incomplete coverage and never present local records as complete account-wide usage without evidence. Do not expose session contents or credentials.
2. Run `node scripts/antigravity-usage.mjs` for the same local calendar window. It reads `transcript.jsonl` under both `~/.gemini/antigravity/brain` and `~/.gemini/antigravity-cli/brain`, counting `MODEL` / `DONE` records with token counts. Antigravity's input is uncached, so add input, cache read and output for the total. Sessions are conversation transcripts with token activity; turns are records with token counts. Check errors, missing transcripts and records without token counts; local totals can be incomplete. The output includes a daily breakdown in local time. Never expose transcript contents.
3. Run `node scripts/claude-usage.mjs`. It combines the daily model token cache through `lastComputedDate` with newer local assistant message usage. Deduplicate repeated transcript entries by request and message ID, retaining the largest usage snapshot. Cached daily session counts and distinct live session IDs are an estimate of session activity, not guaranteed unique sessions across both sources. All services must use the same local date window.
4. Run `node scripts/update-usage.mjs` to calculate all three sources and update the JSON snapshot and combined totals. It stops on source errors or mismatched windows. Report local coverage limitations and preserve the distinction between Codex cached input (included in input) and Antigravity cache read (separate).
5. The scheduled `scripts/daily-usage-job.mjs` runs from a clean temporary clone, commits only the JSON and pushes to main. It writes diagnostics to `%LOCALAPPDATA%/AgustinWebUsage/daily.log`; never expose transcript contents or credentials. Check the widget and report the snapshot period and any limitations.
