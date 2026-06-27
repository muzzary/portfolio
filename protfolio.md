# Portfolio Website — Build Spec

## Goal
Build a single-page personal portfolio website in React, replicating the layout of the
"Illustration Based Portfolio Website Template" (designed by Jhanvi Shah) and its reference
implementation at https://inttolong.github.io/portfolio/.

## Tech Stack (use exactly this)
- Build tool: Vite
- Framework: React + TypeScript
- Styling: Tailwind CSS (v4, via @tailwindcss/vite plugin)
- Animations: `motion` (motion/react) for fade-ins and scroll effects
- Typing effect: `react-type-animation` for the hero headline
- SVG handling: `vite-plugin-svgr` (import SVGs as React components)
- Contact form: `@emailjs/browser` (client-side, no backend)
- Deployment: GitHub Pages via `gh-pages` (or Vercel)

## Setup Commands
\`\`\`bash
npm create vite@latest my-portfolio -- --template react-ts
cd my-portfolio
npm install
npm install motion react-type-animation @emailjs/browser
npm install -D tailwindcss @tailwindcss/vite vite-plugin-svgr gh-pages
\`\`\`

## vite.config.ts
- Register `react()`, `tailwindcss()`, and `svgr()` plugins.
- Set `base: '/my-portfolio/'` to match the GitHub repo name (omit if deploying to Vercel/Netlify).

## index.css
- Add `@import "tailwindcss";` at the top.

## Folder Structure
\`\`\`
src/
  assets/        # SVG illustrations, tech icons, project screenshots
  components/
    Header/      # sticky nav: logo, links (About/Skills/Projects/Contact), Resume button, mobile hamburger menu
    Hero/        # greeting + typing animation + bio + social links + main illustration
    Skills/      # responsive grid of tech cards (icon + name)
    AboutMe/     # illustration + multi-paragraph bio, "About" heading with outlined word style
    Projects/    # numbered project cards (01, 02, 03...) on dark background
    Contact/     # "Let's talk for Something special" + EmailJS form + social links
    Footer/      # copyright + designer acknowledgment (credit Jhanvi Shah)
    UI/          # shared: SectionHeading, Button, custom blend-mode cursor
  contexts/      # mobile menu open/close state
  hooks/         # custom cursor hook, scroll-based hooks
  types/         # TypeScript interfaces
  constants.ts   # ALL content data (skills, projects, socials)
  App.tsx        # assembles sections in order
  main.tsx
\`\`\`

## Section Order (in App.tsx)
Header (sticky) -> Hero (#hero) -> Skills (#skills) -> AboutMe (#about) ->
Projects (#projects) -> Contact (#contact) -> Footer
Nav links use anchor hrefs (#about, #skills, #projects, #contact) with smooth scrolling.

## Design / Visual Style
- Palette: Primary black (#000) on off-white background (#F5F5F5); a zinc/gray scale for
  secondary text; one red accent (~#EF4444) for errors/highlights.
- Cards: Skills cards are light with rounded corners + subtle border; Project cards are
  black with white text, large rounded corners, big faded number labels.
- Typography: Bold display headings; section titles use a layered look where one word is
  solid and an overlapping word is outlined (transparent fill, stroke only).
- Tech tags: Pill-shaped (rounded-full), white bg on dark cards.
- Cursor (optional flair): custom circular cursor using CSS `mix-blend-mode: exclusion`,
  scaling up on hover over interactive elements.
- Responsive: Mobile-first; hero stacks vertically on small screens; skills grid collapses
  from multi-column to fewer columns; hamburger menu under md breakpoint.
- Animations: Sections fade/slide in on scroll using motion; hero text fades in on load.

## Data Model (src/types/index.ts)
\`\`\`ts
export interface Skill { name: string; icon: string }
export interface Project {
  id: string            // "01", "02", ...
  title: string
  description: string
  technologies: string[]
  liveUrl: string
  sourceUrl: string
  image: string
}
\`\`\`

## Content to fill in (src/constants.ts)
- SKILLS: array of { name, icon } — e.g. HTML5, CSS3, JavaScript, TypeScript, React, Redux,
  Next.js, Tailwind, Jest, Git (replace with mine).
- PROJECTS: array of Project (id, title, description, technologies[], liveUrl, sourceUrl, image).
- SOCIALS: { github, linkedin, email } and a resume URL.
- HERO copy: name, role(s) for typing animation, bio paragraph.
- ABOUT copy: 2–3 paragraphs.

## Contact Form (EmailJS)
- Use `@emailjs/browser`'s `sendForm`.
- Read keys from env vars with the VITE_ prefix:
  VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
- Form fields: Name, Email, Subject, Message + "Get In Touch" submit button.
- Show success/error state; validate required fields.
- NOTE: I (the owner) will create the EmailJS account and add the keys to a `.env` file myself.

## package.json scripts
- "dev": "vite"
- "build": "tsc -b && vite build"
- "deploy": "vite build && gh-pages -d dist"

## Deployment
- GitHub Pages: set `base` in vite.config to repo name, run `npm run deploy`.
- OR Vercel/Netlify: zero-config, no `base` needed (preferred for simplicity).

## Assets
- Export illustrations + icons from the Figma template, OR use free sources (unDraw, Storyset).
- Place them in `src/assets`. Keep a designer credit (Jhanvi Shah) in the footer if reusing
  the original illustrations.

## Build Order Suggestion for Claude Code
1. Scaffold project + configure Vite/Tailwind/svgr.
2. Set up types/, constants.ts (with placeholder content), App.tsx skeleton.
3. Build UI/ shared components (SectionHeading, Button).
4. Build Header (with mobile menu + smooth scroll).
5. Build Hero, Skills, AboutMe, Projects, Contact, Footer.
6. Add motion animations + optional custom cursor.
7. Wire up EmailJS form (leave env keys as placeholders).
8. Add responsive breakpoints + polish.
9. Configure deploy script.