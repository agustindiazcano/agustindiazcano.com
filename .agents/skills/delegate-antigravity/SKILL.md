---
name: delegate-antigravity
description: Delegate research, analysis, review, or explicitly scoped implementation work to Antigravity from Claude Code or Codex, including Google searches.
---

# Delegate to Antigravity

Follow [ANTIGRAVITY.md](../../../ANTIGRAVITY.md) for scope, permissions, source verification, and handoff. Antigravity is Gemini-based; its CLI and Gemini CLI are distinct. For Google search tasks, use Antigravity when available and permitted; use an alternative if it cannot perform the search, and report the limitation.

1. Use the installed Antigravity CLI `agy` on this Windows PC. Both plain interactive `agy` and a short noninteractive request returned an answer on November 1, 2026. Check `agy --help` when needed; do not assume web access, model selection, or authentication is unchanged.
2. Give it a focused prompt with the objective, working directory, permitted scope, relevant context, expected output, and validation. For search, request original source URLs and dates; avoid sharing secrets or unnecessary private content. Ask for read-only work unless edits are authorized.
3. For interactive delegation, start `agy` in an interactive terminal, wait for initialization, send the task, and wait for its answer. The observed session defaulted to an automatic edit mode; use an appropriate mode or limit the request to read-only work unless edits are authorized. For a focused noninteractive task, use `agy --sandbox --print-timeout 120s --print "Research the requested question; return primary-source URLs, dates, and uncertainties. Do not edit files."` from the relevant workspace. Wait for completion: a 60-second research timeout was inconclusive, while a short request succeeded. Respect sandbox restrictions and permission requests; never use blanket auto-approval or bypass flags. Follow host escalation rules if the sandbox blocks authentication. If it cannot access a required source, explain and use a permitted alternative.
4. Inspect and verify its findings against original sources or code. Review any authorized edits, run appropriate checks, and report changed files, tests, and limitations. The primary agent retains responsibility for the result.
