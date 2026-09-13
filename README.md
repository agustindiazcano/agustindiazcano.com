# agustindiazcano.com

Personal portfolio and blog - built with Astro. Showcases my work in 
backend development, AI engineering, and independent research projects 
in physics-based simulation and robotics.

Live site: [agustindiazcano.com](https://agustindiazcano.com)

## Project Structure

```text
/
├── public/                 # Static assets (images, favicon, llms.txt)
├── src/
│   ├── components/         # Astro and React components
│   ├── layouts/            # Page layouts
│   ├── pages/              # File-based routing
│   │   ├── cv.astro        # Curriculum Vitae / Summary
│   │   ├── index.astro     # Home page
│   │   ├── profile.astro   # Profile and background
│   │   ├── projects.astro  # Projects catalog
│   │   ├── writing.astro   # Articles and publications
│   │   ├── projects/       # Individual project detail pages
│   │   └── writing/        # In-depth technical articles
│   └── styles/             # Global CSS and Tailwind styles
├── astro.config.mjs        # Astro configuration
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── vercel.json             # Vercel deployment and security headers
```

- `src/pages/projects/` — individual project pages (Men of War Zombie Mod, 
  MSc engineering coursework, robotics simulations, etc.)
- `src/pages/writing/` — technical articles and notes
- `vercel.json` — deployment config, including canonical domain redirects 
  and security headers

## Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build production site to `./dist/`               |
| `npm run preview`         | Preview build locally before deploying           |

## Stack

Astro · Vercel · deployed with canonical domain enforcement (non-www) and 
CSP/HSTS security headers.

## Contact

- LinkedIn: [linkedin.com/in/agustindiazcano](https://linkedin.com/in/agustindiazcano)
- GitHub: [github.com/agustindiazcano](https://github.com/agustindiazcano)