# Usage statistics

For updates to the usage widget, follow the shared [update-usage skill](.claude/skills/update-usage/SKILL.md) for Claude Code, Codex and Antigravity. Calculate Codex usage for the current local calendar day and previous 29 days with `node scripts/codex-usage.mjs`; use timestamped changes in cumulative local session counters, including archived and compressed sessions. Cached input is already included in Codex input. Calculate Antigravity for the same period with `node scripts/antigravity-usage.mjs`; its input and cache read are separate. Report missing local coverage and do not treat local results as account-wide usage without evidence.

# Antigravity and Gemini

Antigravity is a Gemini-based assistant and can act as a subagent. On this PC, `agy` starts its interactive CLI; a noninteractive `agy --print` request was also verified. Follow [ANTIGRAVITY.md](ANTIGRAVITY.md) and use the [delegate-antigravity skill](.agents/skills/delegate-antigravity/SKILL.md) when delegating to it. For Google search tasks, always delegate to Antigravity when available and permitted; if it cannot perform the search, use an available alternative and explain the limitation. Verify important claims against their sources. Antigravity and Gemini CLI are separate tools.
