# Development Roadmap — Makindye Women Traders

This roadmap outlines the engineering milestones required to transition **Makindye Women Traders** (`makindyewomentraders.org`) from an approved interactive frontend prototype into a full-featured production platform.

---

## Phase 1 — Codebase Modularisation & Technical Baseline (Complete)

- [x] Audit exported Figma Make prototype and establish clean Git baseline.
- [x] Refactor monolithic `src/App.tsx` into modular layout, section, UI, and page components.
- [x] Extract hardcoded strings, programmes, impact figures, gallery items, and news previews into strongly typed data modules (`src/data/` and `src/types/`).
- [x] Organise `public/images/` into domain subdirectories (`hero/`, `about/`, `programmes/`, `gallery/`, `leadership/`, `news/`, `icons/`).
- [x] Enhance accessibility (`Escape` and arrow-key modal handlers, skip-to-content bypass link, semantic ARIA attributes, descriptive image alt text).
- [x] Establish comprehensive technical documentation (`README.md`, `docs/*`, `AGENTS.md`, `CLAUDE.md`).

---

## Phase 2 — Verified Content & Photography Integration (Next Milestone)

- [ ] Collect and optimise approved field photography from Makindye Women Traders leadership across all 6 programme pillars.
- [ ] Replace external Unsplash URLs in `src/data/photos.ts` with local assets under `public/images/`.
- [ ] Verify reported impact metrics (`200 trees planted`, `30+ volunteers`, `2024 Northern Uganda`) with client leadership and remove prototype disclaimer notes once signed off.
- [ ] Add official partner logos for **Kaazi Tree Grow Project** and **Sanctuary Church Gulu** in `Collaborators.tsx`.
- [ ] Add dedicated Privacy Policy content or modal for the footer `#privacy` link.

---

## Phase 3 — Partnership Form & Communications Backend

- [ ] Integrate the `Partnership.tsx` enquiry form with a production form endpoint or serverless API route (e.g. Cloudflare Workers + Resend, Formspree, or Supabase Edge Functions) delivering enquiries to `mwomentraders@gmail.com`.
- [ ] Add client-side and server-side input validation (schema validation with field-level error messages).
- [ ] Implement spam protection and rate limiting.
- [ ] Configure automated email confirmation receipts for prospective partners.

---

## Phase 4 — Authenticated Staff Portal & Content Management System

- [ ] Replace the simulated `StaffDashboardPage.tsx` login with real authentication and role-based access control (`Administrator`, `Editor`, `Contributor`).
- [ ] Provision a database and media storage backend (e.g. Supabase PostgreSQL + Storage or a headless CMS such as Sanity / Payload).
- [ ] Build CRUD workflows in the Staff Portal for:
  - Creating, saving drafts, editing, and publishing News & Field Notes.
  - Uploading field photographs and curating Gallery Albums.
  - Updating verified impact counters.
- [ ] Connect public sections (`LatestNews`, `GalleryPreview`, `Impact`) to live published CMS records with static/ISR caching.
