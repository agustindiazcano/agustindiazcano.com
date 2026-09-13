---
name: ship
description: >-
  Commit staged changes, run the validation/build suite, and push to GitHub.
  Use when the user types /ship or asks to ship/deploy changes.
---

# Ship Workflow (`/ship`)

Follow these steps when committing, verifying, and pushing to production:

1. **Check Working State**:
   Run `git status` and `git diff --staged` to verify what is being included.
2. **Draft Conventional Commit**:
   Formulate a conventional commit message (`feat`, `fix`, `chore`, `docs`, etc.) with a summary under 50 characters.
3. **Execute Commit**:
   Run `git commit -m "..."`.
4. **Run Verification Suite**:
   Execute the verification checks:
   ```bash
   npm run build
   ```
   **CRITICAL**: If the build or type check fails, abort immediately, report the errors, and do **NOT** proceed to step 5.
5. **Push to Remote**:
   If verification succeeds, run:
   ```bash
   git push origin main
   ```
