---
description: Commit staged changes, run tests, and push.
---
1. Run `git status` and `git diff --staged` to see what's staged.
2. Write a conventional commit message (feat/fix/chore/refactor/docs + summary under 50 chars, body if needed).
3. Run `git commit -m "..."`.
4. Run the test/build suite (`npm run build` / `npx astro check`) — do NOT proceed to step 5 if checks fail.
5. `git push`.
