# Implementation Plan: Illustration-Based Portfolio Website

## Overview
Build a single-page React + TypeScript portfolio site per [protfolio.md](protfolio.md): Vite, Tailwind v4, `motion` animations, a typing hero, an EmailJS contact form, and seven stacked sections (Header → Hero → Skills → AboutMe → Projects → Contact → Footer). The repo is currently unscaffolded — the spec is the source of truth.

## Architecture Decisions
- **Content is centralized in `src/constants.ts`.** Every section is presentational and reads its data from constants. This is why each section "slice" below is thin: it's a component + its constants entry, not bespoke content logic.
- **Tailwind v4 via `@tailwindcss/vite` plugin** (no PostCSS, no `tailwind.config.js` content array). `index.css` is just `@import "tailwindcss";`.
- **Foundation-first, then vertical section slices.** Scaffold/config/types/constants/UI-primitives are shared by all sections, so they come first. After that, each section is independently buildable and verifiable in the running dev server.
- **EmailJS keys stay as placeholders** read from `VITE_`-prefixed env vars. The owner supplies the real `.env`. Never invent keys.
- **Defer `base` path + deploy.** Build/scaffold without a `base` (Vercel-friendly). Add GitHub Pages `base` only at the deploy task, since it couples the build to a repo name.

## Dependency Graph
```
Scaffold (Vite + TS)
    │
    ├── Vite config (react, tailwindcss, svgr)
    │       │
    │       └── index.css (@import tailwindcss)
    │
    ├── types/index.ts ──► constants.ts ──► (all sections consume)
    │
    └── UI primitives (SectionHeading, Button) ──► (all sections consume)
                                                        │
   Header ─ Hero ─ Skills ─ AboutMe ─ Projects ─ Contact ─ Footer  (each: component + constants)
                                                        │
                              MobileMenu context ◄── Header
                              motion animations ◄── all sections
                              EmailJS ◄── Contact
                                                        │
                                                   Deploy config
```
Build bottom-up: foundation → sections (any order, App order preferred) → cross-cutting polish → deploy.

---

## Task List

### Phase 1: Foundation

## Task 1: Scaffold project + configure Vite/Tailwind/svgr
**Description:** Create the Vite React-TS project and wire up the three required plugins so the dev server runs with Tailwind utilities and SVG-as-component imports working.

**Acceptance criteria:**
- [ ] `npm create vite@latest` React-TS project exists with all deps from the spec installed (`motion`, `react-type-animation`, `@emailjs/browser`; dev: `tailwindcss`, `@tailwindcss/vite`, `vite-plugin-svgr`, `gh-pages`).
- [ ] `vite.config.ts` registers `react()`, `tailwindcss()`, `svgr()`; no `base` set yet.
- [ ] `index.css` contains `@import "tailwindcss";` and a Tailwind utility class visibly renders.

**Verification:**
- [ ] `npm run dev` serves a page with a working Tailwind class (e.g. `text-red-500`).
- [ ] `npm run build` (`tsc -b && vite build`) succeeds.
- [ ] Importing one `.svg` as a React component compiles.

**Dependencies:** None
**Files likely touched:** `package.json`, `vite.config.ts`, `src/index.css`, `src/main.tsx`, `tsconfig*.json`
**Estimated scope:** S

## Task 2: Types + constants skeleton + App shell
**Description:** Define `Skill`/`Project` interfaces, create `constants.ts` with placeholder SKILLS/PROJECTS/SOCIALS + hero/about copy, and an `App.tsx` that renders the seven section placeholders in spec order with anchor ids.

**Acceptance criteria:**
- [ ] `src/types/index.ts` exports `Skill` and `Project` matching the spec's fields exactly.
- [ ] `src/constants.ts` exports typed SKILLS, PROJECTS, SOCIALS, and hero/about copy (placeholder content allowed).
- [ ] `App.tsx` renders Header→Hero→Skills→AboutMe→Projects→Contact→Footer placeholders with ids `#hero #skills #about #projects #contact`.

**Verification:**
- [ ] `npm run build` succeeds with constants imported and type-checked.
- [ ] Manual: anchor ids present in DOM in correct order.

**Dependencies:** Task 1
**Files likely touched:** `src/types/index.ts`, `src/constants.ts`, `src/App.tsx`
**Estimated scope:** S

## Task 3: UI primitives (SectionHeading, Button)
**Description:** Build the shared `SectionHeading` (layered solid + outlined-word style) and `Button`, plus the design tokens (palette/spacing) every section reuses.

**Acceptance criteria:**
- [ ] `SectionHeading` renders the layered solid-over-outlined word effect (transparent fill + stroke).
- [ ] `Button` supports the primary black/white variant used across sections.
- [ ] Palette (`#000`, `#F5F5F5`, zinc grays, `~#EF4444`) applied via Tailwind theme/utilities.

**Verification:**
- [ ] Both primitives render in isolation in the dev server.
- [ ] `npm run build` succeeds.

**Dependencies:** Task 1
**Files likely touched:** `src/components/UI/SectionHeading.tsx`, `src/components/UI/Button.tsx`, `src/index.css`
**Estimated scope:** S

### Checkpoint: Foundation
- [ ] `npm run dev` and `npm run build` both clean
- [ ] App renders all seven sections in order (placeholders), primitives usable
- [ ] Review before building sections

---

### Phase 2: Section Slices (each = component + its constants)

## Task 4: Header (sticky nav + smooth scroll + mobile menu)
**Description:** Sticky header with logo, nav links (About/Skills/Projects/Contact), Resume button, and a hamburger menu under `md`. Includes the mobile-menu open/close context.
**Acceptance criteria:**
- [ ] Nav links smooth-scroll to the correct section ids.
- [ ] Hamburger toggles a menu under the `md` breakpoint via a context-held open/close state.
- [ ] Resume button links to the resume URL from constants.
**Verification:** [ ] Manual: links scroll correctly; menu opens/closes on mobile width; [ ] `npm run build` clean.
**Dependencies:** Tasks 2, 3
**Files likely touched:** `src/components/Header/*`, `src/contexts/` (mobile menu), `src/App.tsx`
**Estimated scope:** M

## Task 5: Hero (typing headline + bio + socials + illustration)
**Description:** Greeting, `react-type-animation` role headline, bio paragraph, social links, main illustration.
**Acceptance criteria:**
- [ ] Typing animation cycles the role strings from constants.
- [ ] Social links + bio render from constants; illustration displays.
- [ ] Stacks vertically on small screens.
**Verification:** [ ] Manual: typing visible, responsive stack works; [ ] build clean.
**Dependencies:** Tasks 2, 3
**Files likely touched:** `src/components/Hero/*`, `src/constants.ts`, `src/assets/`
**Estimated scope:** S

## Task 6: Skills (responsive tech-card grid)
**Description:** Responsive grid of light skill cards (icon + name) mapping over SKILLS.
**Acceptance criteria:**
- [ ] Grid maps over SKILLS; collapses columns on smaller breakpoints.
- [ ] Cards are light, rounded, subtle border per design.
**Verification:** [ ] Manual: grid reflows across breakpoints; [ ] build clean.
**Dependencies:** Tasks 2, 3
**Files likely touched:** `src/components/Skills/*`, `src/constants.ts`, `src/assets/`
**Estimated scope:** S

## Task 7: AboutMe (illustration + bio + outlined heading)
**Description:** About section with illustration, multi-paragraph bio, layered/outlined "About" heading.
**Acceptance criteria:**
- [ ] Renders 2–3 about paragraphs from constants.
- [ ] Uses `SectionHeading` outlined-word style.
**Verification:** [ ] Manual visual check; [ ] build clean.
**Dependencies:** Tasks 2, 3
**Files likely touched:** `src/components/AboutMe/*`, `src/constants.ts`, `src/assets/`
**Estimated scope:** S

## Task 8: Projects (numbered dark cards)
**Description:** Numbered project cards (01, 02, …) on dark background with title, description, pill tech tags, live/source links, screenshot.
**Acceptance criteria:**
- [ ] Maps over PROJECTS; large faded number labels render.
- [ ] Black cards / white text, pill-shaped (`rounded-full`) tech tags; live + source links work.
**Verification:** [ ] Manual: links open, cards styled per spec; [ ] build clean.
**Dependencies:** Tasks 2, 3
**Files likely touched:** `src/components/Projects/*`, `src/constants.ts`, `src/assets/`
**Estimated scope:** M

## Task 9: Contact (EmailJS form) + Footer
**Description:** "Let's talk" contact section with EmailJS `sendForm` (Name/Email/Subject/Message + Get In Touch), success/error + required-field validation; plus Footer with copyright and Jhanvi Shah credit.
**Acceptance criteria:**
- [ ] Form uses `sendForm` with keys from `VITE_EMAILJS_*` env vars (placeholders, not hardcoded).
- [ ] Required-field validation + visible success/error states.
- [ ] Footer shows copyright + designer credit.
**Verification:** [ ] Manual: validation blocks empty submit; submit path wired (real send needs owner's keys); [ ] build clean.
**Dependencies:** Tasks 2, 3
**Files likely touched:** `src/components/Contact/*`, `src/components/Footer/*`, `src/constants.ts`, `.env.example`
**Estimated scope:** M

### Checkpoint: Core Features
- [ ] All seven sections render with real layout end-to-end
- [ ] Nav scrolls through every section; mobile menu works
- [ ] `npm run build` clean
- [ ] Review before polish

---

### Phase 3: Polish & Deploy

## Task 10: motion animations + optional custom cursor
**Description:** Add `motion/react` fade/slide-in-on-scroll to sections, hero fade-in on load, and the optional `mix-blend-mode: exclusion` custom cursor that scales on hover.
**Acceptance criteria:**
- [ ] Sections fade/slide in on scroll; hero fades in on load.
- [ ] Custom cursor (if included) uses blend mode + hover scaling via a hook.
**Verification:** [ ] Manual: scroll animations fire once, no jank; [ ] build clean.
**Dependencies:** Tasks 4–9
**Files likely touched:** all `src/components/*`, `src/hooks/`, `src/components/UI/`
**Estimated scope:** M

## Task 11: Responsive pass + deploy config
**Description:** Final mobile-first audit across breakpoints, then configure deployment.
**Acceptance criteria:**
- [ ] No layout breakage from mobile → desktop across all sections.
- [ ] Deploy chosen: Vercel/Netlify (no `base`) OR GitHub Pages (`base: '/<repo>/'` + `npm run deploy`).
**Verification:** [ ] Manual responsive sweep; [ ] `npm run build` clean; [ ] deploy succeeds (if GH Pages, `npm run deploy` publishes `dist`).
**Dependencies:** Task 10
**Files likely touched:** `vite.config.ts`, `package.json`, responsive tweaks across `src/components/*`
**Estimated scope:** M

### Checkpoint: Complete
- [ ] All acceptance criteria met, build clean, responsive verified
- [ ] EmailJS placeholders documented for owner to fill
- [ ] Ready for review

---

## Risks and Mitigations
| Risk | Impact | Mitigation |
|------|--------|------------|
| Tailwind v4 setup differs from v3 muscle memory (no PostCSS/config array) | High | Follow v4 plugin path exactly; verify a utility renders in Task 1 before proceeding |
| EmailJS keys absent during dev | Med | Build/validate the form with placeholders + `.env.example`; defer real send to owner |
| GitHub Pages `base` breaks asset paths if set too early | Med | Keep `base` unset until Task 11; prefer Vercel for zero-config |
| Illustration/icon assets not yet sourced | Med | Use placeholders (unDraw/Storyset) so layout isn't blocked; swap real assets later |
| SVG-as-component (svgr) import misconfig | Low | Verify one svgr import compiles in Task 1 |

## Open Questions (need owner input)
- Deploy target: **Vercel/Netlify** (simpler, no `base`) or **GitHub Pages**? Affects Task 11 and `vite.config.ts`.
- Are real illustrations/icons available, or should placeholders be used (and is the Jhanvi Shah credit required)?
- Real content for SKILLS / PROJECTS / hero + about copy — or proceed with placeholders for now?

## Parallelization
- **Sequential:** Tasks 1→2→3 (foundation), and Task 10/11 last.
- **Safe to parallelize after foundation:** Tasks 5–8 (Hero/Skills/AboutMe/Projects) are independent slices. Task 4 (Header) and Task 9 (Contact/Footer) are also independent but each touch shared files (`App.tsx`, context) — coordinate those merges.
