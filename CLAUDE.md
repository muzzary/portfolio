# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Current State

**The project has not been scaffolded yet.** The only file is [protfolio.md](protfolio.md) — a complete build spec for a single-page React portfolio website. The first task is to scaffold the Vite project per that spec; everything below is the intended target architecture, not existing code. Read [protfolio.md](protfolio.md) in full before starting — it is the source of truth and contains content/data details (palette, data model, section copy) not repeated here.

## Tech Stack (use exactly this)

- **Vite** + **React + TypeScript**
- **Tailwind CSS v4** via the `@tailwindcss/vite` plugin (not PostCSS). `index.css` uses `@import "tailwindcss";` — there is no `tailwind.config.js` content array in v4.
- **motion** (`motion/react`) for scroll/fade animations
- **react-type-animation** for the hero typing headline
- **vite-plugin-svgr** — SVGs are imported as React components
- **@emailjs/browser** for the contact form (client-side, no backend)

## Setup / Commands

Scaffold (run once, from repo root — note the spec uses `my-portfolio` as the subdir name):
```bash
npm create vite@latest my-portfolio -- --template react-ts
cd my-portfolio
npm install
npm install motion react-type-animation @emailjs/browser
npm install -D tailwindcss @tailwindcss/vite vite-plugin-svgr gh-pages
```

Once scaffolded, the package.json scripts are:
- `npm run dev` — Vite dev server
- `npm run build` — `tsc -b && vite build` (type-check then build)
- `npm run deploy` — `vite build && gh-pages -d dist`

There is no test setup in the spec.

## Architecture

Single-page app. `App.tsx` assembles sections in a fixed order, each an anchor target for the sticky nav's smooth-scroll links:

```
Header (sticky) → Hero (#hero) → Skills (#skills) → AboutMe (#about) → Projects (#projects) → Contact (#contact) → Footer
```

Key structural conventions:
- **All content lives in `src/constants.ts`** (SKILLS, PROJECTS, SOCIALS, hero/about copy). Components are presentational and read from constants — do not hardcode content inside components.
- **Types in `src/types/index.ts`** — `Skill` and `Project` interfaces drive the data shape (see spec for exact fields).
- Each section is its own folder under `src/components/`; shared pieces (`SectionHeading`, `Button`, custom blend-mode cursor) live in `src/components/UI/`.
- Mobile menu open/close state is held in a context under `src/contexts/`; custom-cursor and scroll behavior live in `src/hooks/`.

## Critical Config Notes

- **`vite.config.ts`** must register `react()`, `tailwindcss()`, and `svgr()`. Set `base: '/my-portfolio/'` **only** for GitHub Pages deployment (must match the repo name); omit `base` for Vercel/Netlify.
- **EmailJS keys** are read from `VITE_`-prefixed env vars (`VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`) in a `.env` file the owner provides. Leave them as placeholders — do not invent values. Use `sendForm` from `@emailjs/browser`.

## Design System (summary — see spec for full detail)

- Black (`#000`) text on off-white (`#F5F5F5`) background, zinc/gray secondary text, single red accent (`~#EF4444`) for errors.
- Skills cards: light, rounded, subtle border. Project cards: black bg / white text, large rounded corners, big faded numeric labels (`01`, `02`...).
- Section titles use a layered look: one solid word overlapping one outlined (transparent fill + stroke) word.
- Mobile-first; hamburger menu under the `md` breakpoint.

## Attribution

The design replicates Jhanvi Shah's "Illustration Based Portfolio Website Template" (reference: https://inttolong.github.io/portfolio/). Keep the designer credit (Jhanvi Shah) in the Footer if reusing the original illustrations.
