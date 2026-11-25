# Deployment Guide — Makindye Women Traders

This document details how to build, verify, and deploy the **Makindye Women Traders** web application to its production domain **`makindyewomentraders.org`**.

---

## 1. Pre-Deployment Checklist

Before deploying to production:

1. **Enable Search Engine Indexing**:
   In [`.figma/make/site.json`](../.figma/make/site.json), change `"robots": { "index": false }` to:
   ```json
   "robots": {
     "index": true
   }
   ```
   _(While `"index": false` is set, the Vite plugin injects `<meta name="robots" content="noindex, nofollow">` and emits a `robots.txt` with `Disallow: /` to prevent search engines from indexing staging builds.)_
2. **Verify Photography & Impact Figures**:
   Confirm whether prototype disclaimers should remain visible (for soft launch/partner preview) or be replaced with final verified photography and impact numbers.
3. **Run Quality Gates**:
   ```bash
   pnpm install --frozen-lockfile
   pnpm run typecheck
   pnpm run build
   ```

---

## 2. Build Configuration

| Setting              | Value                            |
| :------------------- | :------------------------------- |
| **Package Manager**  | `pnpm` (`10.x`)                  |
| **Node.js Version**  | `22.x` (defined in `.mise.toml`) |
| **Install Command**  | `pnpm install --frozen-lockfile` |
| **Build Command**    | `pnpm run build`                 |
| **Output Directory** | `dist`                           |
| **Framework Preset** | Vite                             |

---

## 3. Hosting Platforms

Because `pnpm run build` produces a self-contained static bundle in `dist/`, the site can be deployed on any modern static/CDN host:

### Option A: Cloudflare Pages / Vercel / Netlify (Recommended)

1. Connect the GitHub repository [`https://github.com/Wasswa-Phen/makindye_women_traders`](https://github.com/Wasswa-Phen/makindye_women_traders).
2. Set the build command to `pnpm run build` and the output directory to `dist`.
3. Set the `NODE_VERSION` environment variable to `22`.
4. Attach the custom domain `makindyewomentraders.org` and `www.makindyewomentraders.org`.
5. Enable automatic HTTPS / SSL provisioning and redirect `www.makindyewomentraders.org` → `https://makindyewomentraders.org`.

### Option B: Figma Make Native Preview / Publish

The `.figma/make/` directory is preserved so the repository continues to work seamlessly inside Figma Make:

- `.figma/make/deploy` runs `pnpm run build` and publishes `dist/`.
- `.figma/make/deploy-preview` runs `pnpm run build --mode development` with inline sourcemaps.

---

## 4. Recommended HTTP Security Headers

When configuring production hosting (via `_headers` on Cloudflare Pages/Netlify or `vercel.json` on Vercel), apply standard security headers:

```text
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```
