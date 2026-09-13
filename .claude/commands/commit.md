---
description: Stage review and create a commit with a conventional commit message.
---
1. Run `git status` and `git diff --staged` to see what's staged.
2. If nothing is staged, run `git diff` to show unstaged changes and ask whether to stage them.
3. Write a conventional commit message (feat/fix/chore/refactor/docs + summary under 50 chars, body if needed).
4. Run `git commit -m "..."`.
5. Do NOT push.
