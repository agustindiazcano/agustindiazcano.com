---
name: deploy-check
description: >-
  Run verification and validation checks before deploying to production.
  Use this skill whenever building, testing, or verifying the site before release.
---

# Deploy Verification Skill (`deploy-check`)

This skill provides a standardized, automated runbook to verify that the website builds without errors, passes type checking, and generates all required public assets before deploying to Vercel.

---

## Verification Steps

### 1. Run Type Checking
Run the Astro type checker to ensure there are no TypeScript or JSX errors in pages and components:

```bash
npx astro check
```

*Criteria*: Must exit with 0 errors.

---

### 2. Run Production Build
Generate the production bundle in `./dist/` to catch any static site generation (SSG) or bundling issues:

```bash
npm run build
```

*Criteria*: The build must complete successfully without bundling failures.

---

### 3. Verify Generated Output Artifacts
Inspect the generated `./dist/` folder to confirm critical assets and pages are present:

- `dist/index.html` (Home page)
- `dist/profile/index.html` (Profile page)
- `dist/projects/index.html` (Projects showcase)
- `dist/writing/index.html` (Articles)
- `dist/sitemap-index.xml` (SEO sitemap)
- `dist/llms.txt` (AI/LLM context file)

---

### 4. Summary & Health Report
Provide a brief checklist of the results:
- [ ] Type check passed
- [ ] Production build passed
- [ ] Essential routes & SEO files present
- [ ] Ready for Vercel deployment
