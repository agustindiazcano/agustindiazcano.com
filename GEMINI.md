# Agustin Diaz-Cano - Portfolio (`agustinweb`)

## 📌 Project Description
Personal website and portfolio of **Agustin Diaz-Cano**, Software Engineer and MSc Candidate.

- **Production URL**: [agustindiazcano.com](https://www.agustindiazcano.com)
- **Deployment**: Vercel

---

## 🛠️ Tech Stack

- **Framework**: [Astro 5](https://astro.build/) (SSG / SSR)
- **Interactive Components**: React 19 (`@astrojs/react`)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Animations**: Framer Motion
- **Typography**: JetBrains Mono, Inter, Josefin Sans (`@fontsource/*`)
- **Languages**: TypeScript / JavaScript

---

## 📂 Project Structure

```text
/
├── public/                 # Static public assets (llms.txt, images, favicon, etc.)
├── src/
│   ├── components/         # Astro and React components (.jsx / .tsx / .astro)
│   ├── layouts/            # Base page layouts
│   ├── pages/              # File-based routing
│   │   ├── index.astro     # Home page
│   │   ├── profile.astro   # Profile and background
│   │   ├── projects.astro  # Projects showcase
│   │   ├── cv.astro        # Curriculum Vitae / Summary
│   │   ├── writing.astro   # Articles and publications
│   │   ├── projects/       # Individual project detail pages
│   │   └── writing/        # In-depth writing / blog articles
│   └── styles/             # Global styles and CSS tokens
├── astro.config.mjs        # Astro configuration and integrations
├── vercel.json             # Vercel deployment configuration and headers
└── package.json            # Dependencies and scripts
```

---

## 💻 Development Commands

- `npm run dev` - Starts the local development server (default port: `http://localhost:4321`)
- `npm run build` - Generates production build in `./dist/`
- `npm run preview` - Previews the production build locally

---

## 🎯 Assistant Guidelines & Instructions

1. **Language & Communication**:
   - Always communicate, explain, and reply in **English**.

2. **Visual Aesthetics & Design Philosophy**:
   - Respect color palette and monospace/technical accents (`JetBrains Mono` for code or technical labels).
   - Maintain dark/light mode consistency with high contrast and legibility.

3. **Component Architecture**:
   - Use Astro components by default for static content (zero unnecessary client-side JavaScript for optimal performance).
   - Use React components (`client:load`, `client:idle`, or `client:visible`) only when client-side reactivity, state, or complex animations (Framer Motion) are needed.

4. **Code Quality & Best Practices**:
   - Keep code modular, declarative, and properly typed.
   - Respect Tailwind CSS v4 configuration and avoid redundant CSS styles.
   - Preserve routing structure and link integrity across the application.

5. **Custom Workflow Commands**:
   - **/commit**: Inspect staged/unstaged changes, draft conventional commit message, commit locally, and **never push**.
   - **/ship**: Inspect changes, draft conventional commit, commit, run `npm run build` verification (abort if fails), and `git push origin main`.

6. **SEO & Branding Rules**:
   - "Agustin Diaz Cano" must ALWAYS be written with a hyphen as "**Agustin Diaz-Cano**".
   - All pages across the site (projects, profile, writing, etc.) must be optimized to rank well when someone searches for "Agustin Diaz-Cano" on Google. Ensure this exact string is included in titles and meta descriptions.

7. **Icons Rule**:
   - EMOJIS ARE NOT ALLOWED