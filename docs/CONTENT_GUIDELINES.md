# Content & Media Guidelines — Makindye Women Traders

## 1. Editorial Principles

1. **Dignity and Agency**: Present women as leaders, organisers, educators, and decision-makers—never as passive subjects.
2. **Truthfulness and Transparency**:
   - The women-led recycling programme must be accurately framed as an **emerging flagship initiative** inviting partnership, not an overstated finished system.
   - Impact statistics must never be invented, extrapolated, or rounded up without explicit written verification from Makindye Women Traders leadership.
3. **Clear, Grounded Language**: Use warm, direct, editorial English (British/Ugandan spelling conventions: _organisation_, _programme_, _neighbourhood_, _centre_).

---

## 2. Updating Website Copy & Data

All public copy is centralised in `src/data/`:

| Content Area                                                      | Source File                                               | Key Exports                                                              |
| :---------------------------------------------------------------- | :-------------------------------------------------------- | :----------------------------------------------------------------------- |
| Organisation profile, contact details, founder bio, collaborators | [`src/data/organisation.ts`](../src/data/organisation.ts) | `organisationInfo`, `founderProfile`, `collaborators`, `navigationLinks` |
| Six core programmes & reported impact figures                     | [`src/data/programmes.ts`](../src/data/programmes.ts)     | `programmes`, `impactStats`, `impactVerificationNote`                    |
| Field photography gallery & captions                              | [`src/data/gallery.ts`](../src/data/gallery.ts)           | `galleryItems`                                                           |
| News stories & field notes                                        | [`src/data/news.ts`](../src/data/news.ts)                 | `newsArticles`                                                           |
| Centralised image paths                                           | [`src/data/photos.ts`](../src/data/photos.ts)             | `photos`                                                                 |

---

## 3. Photography Replacement Workflow

The prototype currently combines one local hero asset (`/images/hero/makindye-hero.png`) with seven temporary Unsplash placeholder URLs defined in [`src/data/photos.ts`](../src/data/photos.ts).

### Asset Directory Structure

When approved organisation photography is supplied, place the optimised image files into the corresponding subdirectory under `public/images/`:

| Category Folder             | Purpose                                    | Recommended Aspect Ratio & Resolution | Target Key in `src/data/photos.ts`                                                                        |
| :-------------------------- | :----------------------------------------- | :------------------------------------ | :-------------------------------------------------------------------------------------------------------- |
| `public/images/hero/`       | Primary homepage hero banner               | `16:10` / `16:9` (`1920 × 1200 px`)   | `photos.hero`                                                                                             |
| `public/images/about/`      | "Who we are" section portrait              | `4:5` portrait (`1200 × 1500 px`)     | `photos.women`                                                                                            |
| `public/images/programmes/` | Six programme cards & flagship split       | `4:3` landscape (`1200 × 900 px`)     | `photos.recycling`, `photos.trees`, `photos.women`, `photos.girls`, `photos.community`, `photos.outreach` |
| `public/images/gallery/`    | Bento gallery & full-screen lightbox       | `4:3` or `16:10` (`1600 × 1200 px`)   | `galleryItems` in `src/data/gallery.ts`                                                                   |
| `public/images/leadership/` | Founder & CEO portrait (`Namusoke Fatina`) | `4:5` portrait (`1200 × 1500 px`)     | `photos.founder`                                                                                          |
| `public/images/news/`       | Story & field note cover images            | `3:2` landscape (`1200 × 800 px`)     | `newsArticles` in `src/data/news.ts`                                                                      |

### Steps to Replace a Placeholder Image

1. Compress and export the approved photograph in WebP or JPEG format (`< 400 KB` for cards, `< 600 KB` for full-bleed hero/flagship images).
2. Save the file in the appropriate `public/images/<category>/` folder.
3. Update the path in `src/data/photos.ts` (e.g. `founder: '/images/leadership/namusoke-fatina.webp'`).
4. Update the descriptive `alt` attribute in the corresponding data file (`src/data/organisation.ts`, `src/data/programmes.ts`, `src/data/gallery.ts`, or `src/data/news.ts`).
5. Once all temporary photography in a section is replaced with approved photography, remove or update the `.photo-note` / `.image-label` prototype disclaimer badge in that section component.
