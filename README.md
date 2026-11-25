# Makindye Women Traders

Official web platform and content management prototype for **Makindye Women Traders**, a women-led Community Based Organisation (CBO) registered with Kampala Capital City Authority (KCCA) in Makindye Division, Kampala, Uganda.

- **Production Domain**: [makindyewomentraders.org](https://makindyewomentraders.org)
- **Repository**: [https://github.com/Wasswa-Phen/makindye_women_traders](https://github.com/Wasswa-Phen/makindye_women_traders)
- **Developer**: Wasswa Makubuya Stephen ([https://www.wasswastephen.online/](https://www.wasswastephen.online/))

---

## Organisational Purpose

Makindye Women Traders builds a grassroots, women-led movement around **recycling, environmental conservation, and economic dignity** in Kampala and across Uganda. Founded and led by **Namusoke Fatina** (Founder & Chief Executive Officer), the organisation positions women not merely as beneficiaries of climate and environmental programmes, but as community organisers, educators, earners, and stewards who carry sustainable practices into the next generation.

Core areas of work include:

1. **Recycling & Waste Management** (_Flagship emerging initiative_)
2. **Tree Growing & Conservation**
3. **Women's Empowerment & Livelihoods**
4. **Mentorship & Girls' Leadership**
5. **School Environmental Clubs**
6. **Community Outreach**

---

## Project Objectives

1. **Public Presence & Credibility**: Establish an authoritative, editorial digital presence at `makindyewomentraders.org` reflecting the dignity and practical impact of the organisation's work.
2. **Partnership Mobilisation**: Connect technical, funding, market, and volunteering partners with the emerging women-led recycling flagship initiative and ongoing conservation programmes.
3. **Transparent Impact Reporting**: Communicate verified field achievements clearly without inflating or inventing unverified statistics.
4. **Future Content Autonomy**: Lay the frontend foundation for an internal Staff Portal where leadership and editors can manage stories, field photography albums, and organisational updates.

---

## Current Prototype Status

> **Important Status Notice**
>
> This repository currently contains an **approved interactive frontend prototype** refactored into a modular production-ready React + TypeScript architecture:
>
> - **Public Website**: Fully structured, responsive, and interactive (mobile navigation, gallery bento grid with accessible keyboard lightbox, editorial story reader modal, and partnership enquiry interface).
> - **Partnership Contact Form**: **Simulated UI state only**. Submitting the form displays an acknowledgement message in the browser; no personal data is transmitted or stored on a backend server yet.
> - **Staff Portal (`#staff`)**: **Simulated UI concept only**. The sign-in screen and workspace dashboard demonstrate the planned editorial workflow and role structure (`Administrator`, `Editor`, `Contributor`). Production authentication, database persistence, and CMS APIs have **not** yet been implemented.
> - **Photography & Impact Metrics**: The prototype combines local concept assets in `public/images/` (`hero/makindye-hero.png`, `about/women-community.png`, and `programmes/*` with optimised `.webp` variants), a neutral founder placeholder (`leadership/founder-placeholder.svg`) pending client portrait permission, and three Wikimedia Commons Ugandan/East African illustrative photographs (`Mentorship`, `Conservation`, `Outreach`) with automatic local WebP fallbacks. Reported impact figures (`200 trees planted`, `30+ volunteers`, `2024 Northern Uganda outreach`) remain subject to final client verification prior to public launch.

---

## Technology Stack

| Layer               | Technology                            | Version              | Purpose                                        |
| :------------------ | :------------------------------------ | :------------------- | :--------------------------------------------- |
| **UI Framework**    | React & React DOM                     | `^19.0.0` (`19.2.4`) | Component-based user interface                 |
| **Language**        | TypeScript                            | `^5.7.0` (`5.9.3`)   | Strict static typing for components and data   |
| **Build Tool**      | Vite                                  | `^8.1.7`             | Fast HMR dev server and production bundler     |
| **Styling**         | Tailwind CSS v4 (`@tailwindcss/vite`) | `^4.0.0` (`4.2.2`)   | Utility-first styling + custom `@theme` tokens |
| **Formatting**      | `oxfmt`                               | `^0.76.0`            | High-speed source code formatting              |
| **Package Manager** | `pnpm`                                | `10.x`               | Deterministic dependency management            |

---

## Prerequisites

- **Node.js**: `v22.x` or newer (see [`.mise.toml`](.mise.toml))
- **pnpm**: `v10.x` or newer (`corepack enable pnpm` or `npm install -g pnpm`)

> **Lockfile Policy**: Always use `pnpm`. Do not use `npm install` or `yarn`, and never commit `package-lock.json` or `yarn.lock`.

---

## Installation Instructions

Clone the repository and install dependencies using `pnpm`:

```bash
git clone https://github.com/Wasswa-Phen/makindye_women_traders.git
cd makindye_women_traders
pnpm install --frozen-lockfile
```

---

## Local Development Commands

| Command              | Description                                                                   |
| :------------------- | :---------------------------------------------------------------------------- |
| `pnpm run dev`       | Starts the local Vite development server (defaults to port `8443` or `$PORT`) |
| `pnpm run typecheck` | Runs TypeScript compiler validation (`tsc --noEmit`) with zero output emit    |
| `pnpm run format`    | Formats source files using `oxfmt`                                            |

---

## Production Build Commands

```bash
# 1. Verify TypeScript types
pnpm run typecheck

# 2. Build static production bundle into dist/
pnpm run build

# 3. Preview the production bundle locally
pnpm run preview
```

---

## Project Directory Structure

```text
makindye_women_traders/
├── .figma/                         # Figma Make build & site configuration metadata
│   ├── make/
│   │   ├── site.json               # Document title, SEO meta, robots & accessibility settings
│   │   └── ...                     # Figma Make preview/deployment helper scripts
│   └── README.md
├── docs/                           # Project & technical documentation suite
│   ├── PROJECT_OVERVIEW.md         # Organisational context, mission & scope
│   ├── ARCHITECTURE.md             # Component hierarchy, data layer & styling design
│   ├── CONTENT_GUIDELINES.md       # Editorial rules, photo replacement specs & verification policy
│   ├── DEVELOPMENT_ROADMAP.md      # Phased engineering roadmap (Static -> Form API -> CMS)
│   └── DEPLOYMENT.md               # Production hosting & domain guide for makindyewomentraders.org
├── public/                         # Static public assets served at root URL path (/)
│   ├── images/
│   │   ├── hero/                   # Hero banner photography (makindye-hero.png)
│   │   ├── about/                  # Organisation overview & leadership photography
│   │   ├── programmes/             # Photography for the 6 core programmes
│   │   ├── gallery/                # High-resolution field albums for lightbox display
│   │   ├── leadership/             # Founder & executive portraits
│   │   ├── news/                   # Editorial & field note article imagery
│   │   └── icons/                  # Standalone SVG brand marks and UI icons
│   └── favicon.png                 # Browser favicon
├── src/                            # Application source code
│   ├── components/
│   │   ├── layout/                 # Header.tsx, Footer.tsx
│   │   ├── sections/               # Hero, AboutPreview, FlagshipInitiative, Programmes,
│   │   │                           # Impact, GalleryPreview, Founder, LatestNews,
│   │   │                           # Collaborators, Partnership
│   │   └── ui/                     # Reusable UI primitives (Arrow, LeafMark, SectionIntro)
│   ├── data/                       # Centralised typed content & configuration modules
│   │   ├── gallery.ts              # Gallery items & captions
│   │   ├── news.ts                 # Editorial field notes & article previews
│   │   ├── organisation.ts         # Contact info, founder profile, collaborators & nav links
│   │   ├── photos.ts               # Centralised image path/URL registry
│   │   └── programmes.ts           # Six core programmes & reported impact figures
│   ├── hooks/                      # Custom React hooks
│   │   ├── useEscapeKey.ts         # Keyboard Escape handler for modals & menus
│   │   └── useStaffPortalView.ts   # Hash-synchronised toggle (#staff) for Staff Portal view
│   ├── pages/                      # Top-level view compositions
│   │   ├── HomePage.tsx            # Public website landing page
│   │   └── StaffDashboardPage.tsx  # Simulated Staff Portal login & workspace view
│   ├── styles/
│   │   └── global.css              # Design tokens (@theme), base rules & component styles
│   ├── types/
│   │   └── content.ts              # Domain TypeScript interfaces
│   ├── utils/
│   │   └── format.ts               # Lightbox counter & cyclic index helpers
│   ├── App.tsx                     # Root application router between HomePage & StaffDashboardPage
│   ├── index.css                   # Global CSS entrypoint importing styles/global.css
│   ├── main.tsx                    # React DOM root mount
│   └── vite-env.d.ts               # Vite client type declarations
├── .gitignore
├── .mise.toml                      # Node 22 & pnpm toolchain pin
├── AGENTS.md                       # AI coding agent architectural & design rules
├── CLAUDE.md                       # Reconciled Claude agent guidance referencing AGENTS.md
├── index.html                      # HTML document shell
├── package.json                    # Scripts and dependencies
├── pnpm-lock.yaml                  # Locked pnpm dependency graph
├── tsconfig.json                   # Strict TypeScript configuration with @/* path alias
└── vite.config.ts                  # Vite bundler & HTML metadata injection plugins
```

---

## Deployment Instructions

The application compiles into a static bundle inside `dist/` via `pnpm build` and includes [`netlify.toml`](netlify.toml) pre-configured for temporary Netlify client-review deployment:

- **Build command**: `pnpm build`
- **Publish directory**: `dist`
- **Branch**: `main`
- **SPA fallback**: Redirects `/*` to `/index.html` (`200`)
- **Search-engine indexing prevention**: `.figma/make/site.json` sets `"robots": { "index": false }` (`noindex, nofollow` meta tag + `robots.txt` disallow) and `netlify.toml` sets `X-Robots-Tag = "noindex, nofollow"` so temporary review URLs are not indexed.

Before launching the live site on **`makindyewomentraders.org`**:

1. Open [`.figma/make/site.json`](.figma/make/site.json) and change `"robots": { "index": false }` to `"robots": { "index": true }`, and remove `X-Robots-Tag` from [`netlify.toml`](netlify.toml).
2. Replace illustrative concept assets and the neutral founder placeholder in [`src/data/photos.ts`](src/data/photos.ts) with approved client photography stored in `public/images/<category>/`.
3. Confirm final client sign-off on reported impact metrics in [`src/data/programmes.ts`](src/data/programmes.ts).

See [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) for comprehensive DNS, SSL, and CI/CD configuration details.

---

## Content Management Roadmap

1. **Phase 1 — Modular Static Architecture (Complete)**: Structured React + TypeScript codebase with centralised typed content in `src/data/`.
2. **Phase 2 — Verified Media & Editorial Asset Integration**: Replace prototype photography and confirm verified impact metrics with Makindye Women Traders leadership.
3. **Phase 3 — Partnership Form Backend Integration**: Connect `Partnership.tsx` to a transactional email/webhook service with server-side validation, spam protection, and rate limiting.
4. **Phase 4 — Authenticated Staff Portal & Headless CMS**: Replace the simulated `StaffDashboardPage.tsx` state with real authentication (e.g. Supabase Auth / NextAuth / Clerk) and persistent storage for stories and gallery albums.

See [`docs/DEVELOPMENT_ROADMAP.md`](docs/DEVELOPMENT_ROADMAP.md) for detailed milestone specifications.

---

## Accessibility and Security Considerations

### Accessibility

- **Skip Navigation**: Configured via `.figma/make/site.json` (`"addBypassLinks": true`) to inject a focusable "Skip to content" bypass link.
- **Keyboard Navigation**:
  - Mobile navigation drawer, gallery lightbox, and news reader modal all close via the `Escape` key (`useEscapeKey`).
  - Gallery lightbox supports `ArrowLeft` and `ArrowRight` keyboard navigation.
- **Semantic Markup & ARIA**: Dialogs use `role="dialog"` and `aria-modal="true"`, buttons specify explicit `type="button"` or `type="submit"`, and all imagery includes descriptive `alt` text.
- **Reduced Motion**: Respects `@media (prefers-reduced-motion: reduce)` in `src/styles/global.css`.

### Security

- **No Exposed Secrets**: No API keys, credentials, or private tokens are stored in source files. `.env*` files are excluded via `.gitignore`.
- **External Link Safety**: External links opening in new tabs (`target="_blank"`) enforce `rel="noopener noreferrer"`.
- **Simulated Auth Disclaimer**: The prototype Staff Portal (`#staff`) performs no real authentication and stores no sensitive data. Production authentication must be implemented server-side before onboarding staff accounts.

---

## Project Ownership and Licensing

**Copyright © Makindye Women Traders. All rights reserved.**

Project intellectual property ownership, content rights, and software licensing terms are **pending formal client agreement**. No open-source licence is assigned or implied. Unauthorized redistribution or commercial reuse of the organisation's brand identity, copy, or photography is prohibited.

---

## Developer & Repository Information

- **Lead Architect & Frontend Engineer**: Wasswa Makubuya Stephen
- **Developer Portfolio**: [https://www.wasswastephen.online/](https://www.wasswastephen.online/)
- **Source Repository**: [https://github.com/Wasswa-Phen/makindye_women_traders](https://github.com/Wasswa-Phen/makindye_women_traders)
- **Production Domain**: [https://makindyewomentraders.org](https://makindyewomentraders.org)
