---
name: delegate-antigravity
description: Delegate research, analysis, review, or explicitly scoped implementation work to Antigravity from Claude Code or Codex, including Google searches.
---

# Delegate to Antigravity

Follow [ANTIGRAVITY.md](../../../ANTIGRAVITY.md) for scope, permissions, source verification, and handoff. Antigravity is Gemini-based; its CLI and Gemini CLI are distinct. For Google search tasks, use Antigravity when available and permitted; use an alternative if it cannot perform the search, and report the limitation.

1. Discover the actual integration and check its local help. On this Windows installation `agy.exe` was found on PATH and `agy --help` documented `--print` (`-p`), `--sandbox`, and `--print-timeout`; recheck before use. Do not assume web access, model selection, or authentication.
2. Give it a focused prompt with the objective, working directory, permitted scope, relevant context, expected output, and validation. For search, request original source URLs and dates; avoid sharing secrets or unnecessary private content. Ask for read-only work unless edits are authorized.
3. When the installed help confirms support, a noninteractive read-only example is `agy --sandbox --print-timeout 120s --print "Research the requested question; return primary-source URLs, dates, and uncertainties. Do not edit files."` Run it from the relevant workspace. Respect sandbox restrictions and permission requests; never use blanket auto-approval or bypass flags. If it fails or cannot access a required source, explain and use a permitted alternative.
4. Inspect and verify its findings against original sources or code. Review any authorized edits, run appropriate checks, and report changed files, tests, and limitations. The primary agent retains responsibility for the result.
