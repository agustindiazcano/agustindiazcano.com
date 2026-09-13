---
name: commit
description: >-
  Stage review and create a git commit with a conventional commit message.
  Use when the user types /commit or requests to commit changes locally without pushing.
---

# Local Commit Workflow (`/commit`)

Follow these steps when committing local changes without pushing to remote:

1. **Check Working State**:
   Run `git status` and `git diff --staged` to inspect currently staged files.
2. **Handle Unstaged Changes**:
   If nothing is staged, run `git diff` to identify modified files, present them to the user, and ask whether to stage them.
3. **Draft Conventional Commit**:
   Formulate a concise conventional commit message:
   - Format: `<type>(<scope>): <summary under 50 chars>`
   - Types: `feat`, `fix`, `chore`, `refactor`, `docs`, `style`, `test`
4. **Execute Commit**:
   Run `git commit -m "..."`.
5. **Never Push**:
   Do **NOT** run `git push`. Leave changes local.
