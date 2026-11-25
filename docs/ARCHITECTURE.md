# Technical Architecture — Makindye Women Traders

## 1. Architectural Principles

The project follows a **clean, modular frontend architecture** tailored to the actual scale of the application:

- **Separation of Content and Presentation**: All organisational copy, contact details, programmes, impact metrics, gallery metadata, and editorial stories live in typed data modules under `src/data/`.
- **Single Consistent Styling System**: Uses **Tailwind CSS v4** (`@tailwindcss/vite`) combined with semantic design tokens (`@theme`) and component classes in `src/styles/global.css`.
- **Zero Unnecessary Dependencies**: Relies purely on React 19, TypeScript, and Vite without heavy state managers or CSS-in-JS runtimes.
- **Design Fidelity**: Preserves the approved editorial aesthetic—Deep Forest (`#173f35`), Botanical Green (`#4a7c59`), Soft Sage (`#dce7db`), Warm Ivory (`#f8f6f0`), Earth Gold (`#c5a46d`), and Charcoal (`#202b27`), paired with `DM Serif Display` and `DM Sans`.

---

## 2. Directory Responsibilities

```text
src/
├── components/
│   ├── layout/       # Global page chrome (Header, Footer)
│   ├── sections/     # Individual homepage sections in visual order
│   └── ui/           # Shared presentational primitives (Arrow, LeafMark, SectionIntro)
├── data/             # Centralised typed content modules (organisation, programmes, gallery, news, photos)
├── hooks/            # Reusable stateful logic (useEscapeKey, useStaffPortalView)
├── pages/            # Page-level view containers (HomePage, StaffDashboardPage)
├── styles/           # Consolidated global stylesheet & Tailwind v4 @theme definitions
├── types/            # Shared TypeScript interfaces (content.ts)
├── utils/            # Pure helper functions (format.ts)
├── App.tsx           # Root view switcher (public site vs. #staff portal prototype)
├── index.css         # Stylesheet entrypoint imported by main.tsx
└── main.tsx          # React 19 DOM root mount
```

---

## 3. Component Hierarchy

```text
App
├── HomePage (default view)
│   ├── Header (LeafMark, Arrow, mobile menu drawer)
│   ├── main
│   │   ├── Hero
│   │   ├── AboutPreview (SectionIntro, Arrow)
│   │   ├── FlagshipInitiative (Arrow)
│   │   ├── Programmes (SectionIntro)
│   │   ├── Impact (SectionIntro)
│   │   ├── GalleryPreview (SectionIntro, Arrow, Lightbox dialog)
│   │   ├── Founder (SectionIntro)
│   │   ├── LatestNews (SectionIntro, Arrow, Article reader dialog)
│   │   ├── Collaborators
│   │   └── Partnership (Arrow, simulated enquiry form)
│   └── Footer (LeafMark, Staff Portal trigger)
│
└── StaffDashboardPage (active when URL hash is #staff or triggered from Footer)
    ├── Sign-In Concept View (LeafMark, Arrow)
    └── Workspace Concept View (Sidebar navigation, stats grid, recent content, quick actions, roles)
```

---

## 4. Data Layer Design

All domain models are defined in [`src/types/content.ts`](../src/types/content.ts):

- `NavItem`, `OrganisationInfo`, `ContactDetails`, `FounderProfile`, `Collaborator`
- `Programme`, `ImpactStat`
- `GalleryItem`, `NewsArticle`
- `DashboardStat`, `QuickActionItem`, `AccessRole`

Data modules in `src/data/` export strongly typed constants consumed by section components. When transitioning to a headless CMS or backend API in future phases, these data modules provide the exact schema contract required by the UI.

---

## 5. Styling Architecture

- **Entrypoint**: `src/main.tsx` imports `src/index.css`, which imports `src/styles/global.css`.
- **Fonts**: Google Fonts (`DM Sans` 400–700 and `DM Serif Display` regular/italic) are loaded at the top of `src/styles/global.css`.
- **Tailwind CSS v4 Theme Tokens**:
  - `--color-deep-forest: #173f35`
  - `--color-forest: #173f35`
  - `--color-botanical: #4a7c59`
  - `--color-soft-sage: #dce7db`
  - `--color-ivory: #f8f6f0`
  - `--color-earth-gold: #c5a46d`
  - `--color-charcoal: #202b27`
- **Cascade Layers**:
  - `@layer base`: Element defaults (`html`, `body`, `button`, `::selection`).
  - `@layer components`: Reusable editorial primitives (`.site-shell`, `.display`, `.eyebrow`, `.button`, `.button-gold`, `.button-outline`, `.button-dark`, `.text-link`).
  - Section & responsive layout rules: Scoped semantic classes (`.hero`, `.programme`, `.impact-stat`, `.gallery-grid`, `.lightbox`, `.article-modal`, `.contact-form`, `.dashboard`) with mobile overrides at `@media (max-width: 767px)` and reduced-motion accessibility rules at `@media (prefers-reduced-motion: reduce)`.

---

## 6. Vite & `.figma` Integration

`vite.config.ts` includes `@vitejs/plugin-react`, `@tailwindcss/vite`, and Figma Make integration plugins:

- `figmaSiteConfiguration`: Reads [`.figma/make/site.json`](../.figma/make/site.json) and injects the document language, `<title>`, meta description, OpenGraph tags, favicon link, `robots.txt` rules, and the accessible "Skip to content" bypass link into `index.html`.
- Path alias `@` resolves to `./src` in both `vite.config.ts` and `tsconfig.json`.
- **Important**: Do not delete `.figma/make/site.json`, as `vite.config.ts` imports it directly at build time.
