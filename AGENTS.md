# AGENTS.md — Permanent Engineering & Architecture Instructions

## Project Identity

- **Project**: Makindye Women Traders (`makindye-women-traders`)
- **Production Domain**: `makindyewomentraders.org`
- **Repository**: `https://github.com/Wasswa-Phen/makindye_women_traders`
- **Developer**: Wasswa Makubuya Stephen (`https://www.wasswastephen.online/`)
- **Stack**: React 19, TypeScript 5.7+, Vite 8, Tailwind CSS v4 (`@tailwindcss/vite`), `pnpm`

---

## Development Server

- A Vite development server runs on `$PORT` (default `8443`).
- Hot Module Replacement (HMR) reflects changes to `src/` immediately.
- Do not delete `.figma/make/site.json` or `.figma/make/*` scripts; `vite.config.ts` imports `./.figma/make/site.json` to configure the HTML shell (`<!-- figma:lang -->`, `<!-- figma:title -->`, meta description, favicon, and bypass links).

---

## Project Architecture

Maintain the modular directory layout below. Do not collapse components back into a single file or introduce empty directories:

- `src/main.tsx` — React DOM entrypoint; imports `src/index.css` and mounts `src/App.tsx`.
- `src/index.css` — Global CSS entrypoint; imports `src/styles/global.css`.
- `src/styles/global.css` — Google Fonts (`DM Sans`, `DM Serif Display`), Tailwind CSS v4 `@import 'tailwindcss'`, `@theme` color/font tokens, `@layer base`, `@layer components`, and section layout rules.
- `src/App.tsx` — Top-level view switcher between `HomePage` and `StaffDashboardPage` (via `useStaffPortalView`).
- `src/pages/` — Page-level compositions (`HomePage.tsx`, `StaffDashboardPage.tsx`).
- `src/components/layout/` — Global layout chrome (`Header.tsx`, `Footer.tsx`).
- `src/components/sections/` — Individual homepage sections (`Hero.tsx`, `AboutPreview.tsx`, `FlagshipInitiative.tsx`, `Programmes.tsx`, `Impact.tsx`, `GalleryPreview.tsx`, `Founder.tsx`, `LatestNews.tsx`, `Collaborators.tsx`, `Partnership.tsx`).
- `src/components/ui/` — Shared UI primitives (`Arrow.tsx`, `LeafMark.tsx`, `SectionIntro.tsx`).
- `src/data/` — Centralised typed data files (`organisation.ts`, `programmes.ts`, `gallery.ts`, `news.ts`, `photos.ts`).
- `src/types/` — Shared TypeScript interfaces (`content.ts`).
- `src/hooks/` — Custom React hooks (`useEscapeKey.ts`, `useStaffPortalView.ts`).
- `src/utils/` — Pure helper utilities (`format.ts`).
- `public/images/` — Categorised static image folders (`hero/`, `about/`, `programmes/`, `gallery/`, `leadership/`, `news/`, `icons/`).
- `docs/` — Project documentation (`PROJECT_OVERVIEW.md`, `ARCHITECTURE.md`, `CONTENT_GUIDELINES.md`, `DEVELOPMENT_ROADMAP.md`, `DEPLOYMENT.md`).

---

## Design Preservation & Styling Standards

The current visual design is the **approved working design direction** and must be preserved:

1. **Color Palette (`@theme` in `src/styles/global.css`)**:
   - Deep Forest: `#173f35` (`--color-deep-forest` / `--color-forest`)
   - Botanical Green: `#4a7c59` (`--color-botanical`)
   - Soft Sage: `#dce7db` (`--color-soft-sage`)
   - Warm Ivory: `#f8f6f0` (`--color-ivory`)
   - Earth Gold: `#c5a46d` (`--color-earth-gold`)
   - Charcoal: `#202b27` (`--color-charcoal`)
2. **Typography**:
   - Headings & Editorial Accents: `'DM Serif Display', serif`
   - Body & UI Controls: `'DM Sans', sans-serif`
3. **Tailwind CSS v4 Cascade Discipline**:
   - Keep `@import` statements first in `src/styles/global.css`.
   - Keep global element defaults inside `@layer base { ... }` so Tailwind utility classes can override them cleanly.
   - Maintain a single consistent styling system; do not install competing CSS libraries (e.g. Styled Components, Emotion, Bootstrap, Material UI).

---

## Coding Standards & Content Integrity

1. **TypeScript**:
   - Maintain strict typing (`"strict": true` in `tsconfig.json`). Avoid `any`.
   - Use the `@/` path alias for imports across `src/` directories.
   - Define shared data shapes in `src/types/content.ts` and keep content arrays/objects in `src/data/`.
2. **Content Honesty**:
   - Never invent or inflate impact statistics for Makindye Women Traders.
   - Frame the women-led recycling programme accurately as an emerging flagship initiative until instructed otherwise by the client.
   - Never claim that simulated prototype features (the contact form submission state or the `#staff` portal concept) are connected to production authentication or a database unless a real backend has been implemented.
3. **Package Management**:
   - Use `pnpm` exclusively. Preserve `pnpm-lock.yaml`. Never introduce `package-lock.json` or `yarn.lock`.

---

## Accessibility, Security & Verification

1. **Accessibility**:
   - Every interactive modal or drawer (`Header` mobile menu, `GalleryPreview` lightbox, `LatestNews` reader modal) must support closing via the `Escape` key (`useEscapeKey`) and provide appropriate ARIA attributes (`role="dialog"`, `aria-modal="true"`, `aria-label`).
   - All images must have accurate `alt` text.
   - All `<button>` elements must specify an explicit `type` (`"button"` or `"submit"`).
2. **Security**:
   - Never commit secrets, API keys, or `.env` files.
   - Always include `rel="noopener noreferrer"` on external links using `target="_blank"`.
3. **Verification Before Completion**:
   - Run `pnpm run typecheck` (`tsc --noEmit`) and `pnpm run build` (`vite build`) after changes to confirm zero TypeScript or bundler regressions.
