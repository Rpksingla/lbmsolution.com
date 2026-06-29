# DEPLOY.md — Going live on Netlify

Deploy guide for **this** repo (`lbm-new-website`): the lbmsolution.com marketing
site. Next.js 16 App Router + TypeScript, server-rendered on Netlify via
`@netlify/plugin-nextjs`. Everything below is verified against the current code, not
copied from another project.

> Scope note: there is **no** custom image pipeline here (no Cloudflare Images, no
> `/.netlify/images`, no `cfImageLoader.js`, no `netlify.toml`). Images are plain
> `<img loading="lazy">` served from `media.worksbuddy.ai` with `?w=&h=` CDN resizing.
> That is intentional — nothing to configure for it on deploy.

---

## TL;DR checklist

- [ ] Set the **CMS** vars so the blog has data: `CMS_BASE_URL`, `CMS_API_KEY`.
- [ ] Set the **form webhooks** (else submissions are lost in prod — see §3): `CONTACT_WEBHOOK_URL`, `LEADS_WEBHOOK_URL`, `NEWSLETTER_WEBHOOK_URL`.
- [ ] Set `LEAD_API_KEY` and **rotate the hardcoded fallback** key in `app/api/lead/route.ts` (§4, security).
- [ ] Optional analytics (landing pages only): `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_ADS_ID`, `NEXT_PUBLIC_ADS_CONVERSION_LABEL`.
- [ ] Confirm Netlify build settings: build `npm run build`, the Next.js plugin enabled, Node 20+.
- [ ] Verify after deploy (§7): homepage, a blog post, robots/sitemap, a form POST reaching the CRM.

---

## 1. Stack and how it deploys

| Thing | Reality in this repo |
|---|---|
| Framework | Next.js `16.1.6`, App Router, TypeScript, React 19 |
| Hosting | Netlify SSR via `@netlify/plugin-nextjs` (devDependency, v5). No `netlify.toml` — config lives in the Netlify dashboard. |
| Node | Local is v22; use Node **20 or 22** on Netlify (no `engines` pin / `.nvmrc` — set `NODE_VERSION` in Netlify if you want to lock it). |
| Smooth scroll / UI | Lenis + GSAP `Reveal` (client). No server impact. |
| `@netlify/blobs` | Listed as a dependency but **not imported anywhere** in `app/`, `components/`, `lib/` — currently unused. |
| Output mode | Default (SSR). `output: 'export'` is NOT used; do not add it. |

There is no special Netlify infra step. Connect the repo, set env vars, and the Next.js
runtime plugin handles SSR, ISR, and the API routes.

---

## 2. Build and commands

| Command | What it does |
|---|---|
| `npm run build` | `next build`. Compiles in seconds and prerenders ~62 pages. **Verified: build succeeds.** |
| `npm run start` | `next start` (production server; Netlify runs this via the plugin). |
| `PORT=3005 npm run dev` | Local dev (port 3000 is the OLD site's repo). |
| `npx tsc --noEmit` | Type-check. **Passes.** |
| `npm run lint` | `eslint`. **Currently broken** (see §8) — but it does **not** block `next build`. |

---

## 3. Environment variables (Netlify → Site config → Environment variables)

### CMS / blog (server)
| Variable | Used in | If missing |
|---|---|---|
| `CMS_BASE_URL` | `lib/blog.ts` | Blog fetches degrade gracefully to **empty lists** (pages still render, just no posts). No crash. |
| `CMS_API_KEY` | `lib/blog.ts` (`x-api-key` header) | CMS returns 401 → same graceful-empty fallback. |

### Form / lead webhooks (server) — **set these in production**
| Variable | Used in | If missing |
|---|---|---|
| `CONTACT_WEBHOOK_URL` | `app/api/contact/route.ts` | Falls back to appending a local `.jsonl` file. **On Netlify the filesystem is ephemeral, so the submission is effectively lost.** |
| `LEADS_WEBHOOK_URL` | `app/api/leads/route.ts` | Same ephemeral-file fallback → lead lost in prod. |
| `NEWSLETTER_WEBHOOK_URL` | `app/api/newsletter/route.ts` | Same ephemeral-file fallback → signup lost in prod. |
| `LEAD_API_KEY` | `app/api/lead/route.ts` (posts to `api-lio.worksbuddy.ai`, `X-API-KEY`) | Falls back to a **hardcoded key committed in source** — works, but insecure. See §4. |

> The file fallbacks (`.contact-submissions.jsonl`, `.lead-signups.jsonl`,
> `.newsletter-signups.jsonl`) are a **dev convenience only**. Serverless functions
> don't keep a writable disk between invocations, so production needs the webhooks.

### Analytics (public, landing pages only)
| Variable | Used in | If missing |
|---|---|---|
| `NEXT_PUBLIC_GA_ID` | `components/lp/LpAnalytics.tsx` | gtag/GA4 simply doesn't load. |
| `NEXT_PUBLIC_ADS_ID` | `components/lp/LpAnalytics.tsx` | Google Ads tag doesn't load. |
| `NEXT_PUBLIC_ADS_CONVERSION_LABEL` | LP conversion tracking | Conversion event not fired. |

> `NEXT_PUBLIC_*` are inlined at **build time** — change them and you must rebuild.
> Analytics only loads on the `/lp/*` landing pages; the main site has no GA/GTM wired.

`NODE_ENV=production` is set automatically by Netlify — don't set it yourself.

---

## 4. Security: rotate the committed lead key

`app/api/lead/route.ts` contains a **plaintext fallback `LEAD_API_KEY`** (a LIO CRM
key) committed to the repo. Treat it as exposed:

1. Set a fresh `LEAD_API_KEY` in Netlify env so the fallback is never used.
2. Rotate / revoke the committed key in the LIO CRM, and remove the hardcoded literal
   from the source in a follow-up change.

---

## 5. Render modes and freshness

- Most pages are **static** (prerendered at build).
- Blog routes (`/blog`, `/blog/page/[n]`, `/blog/category/[slug]`, `/blog/[slug]`) use
  **ISR** — every one exports `revalidate = 300` (5 min). Categories cache for 1 h
  (`lib/blog.ts`). New/edited posts appear within ~5 minutes.
- `sitemap.xml` and `robots.txt` are generated (`app/sitemap.ts`, `app/robots.ts`).
- `metadataBase` is `https://www.lbmsolution.com` (canonical host).

---

## 6. SEO / LLM artifacts

`public/llms.txt` / `llms-full.txt` and the sitemap source are produced by
`scripts/build-llms.mjs`. **Note:** there is currently **no `npm run llms` alias and no
`prebuild` hook** in `package.json` (despite older notes saying so) — run it manually
when you change `content/pages/*.md`:

```bash
node scripts/build-llms.mjs     # regenerate LLM/SEO files (commit the output)
node scripts/voice-lint.mjs     # optional copy/voice check
```

---

## 7. Post-deploy verification

Run against the live production URL.

```bash
# 1. Homepage renders (SSR) and has real content
curl -s https://www.lbmsolution.com/ | grep -o "<title>.*</title>"

# 2. A blog post renders (needs CMS_* set); otherwise the list is gracefully empty
curl -sI https://www.lbmsolution.com/blog | grep -i "HTTP/"
curl -s  https://www.lbmsolution.com/blog | grep -ci "article\|post"

# 3. SEO endpoints serve
curl -sI https://www.lbmsolution.com/sitemap.xml | grep -i "content-type"
curl -sI https://www.lbmsolution.com/robots.txt  | grep -i "HTTP/"

# 4. A form route accepts POSTs (then confirm it reached the CRM/webhook,
#    since the file fallback does NOT persist on Netlify)
curl -s -o /dev/null -w "%{http_code}\n" -X POST \
  https://www.lbmsolution.com/api/newsletter \
  -H "Content-Type: application/json" -d '{"email":"test@example.com"}'
```

Also sanity-check in a browser: open a landing page (`/lp/...`) with analytics env set
and confirm `gtag/js` loads in DevTools → Network; submit the contact form and confirm
the lead shows up in the CRM (not just a 200).

---

## 8. Known issues (pre-existing, not deploy blockers)

- **`npm run lint` fails.** `eslint-config-next@0.2.4` is incompatible with `eslint@10`
  (it can't resolve `eslint-config-next/core-web-vitals`). This does **not** block
  `next build` or deploy. Fix later by aligning the eslint / eslint-config-next versions.
- **`@netlify/blobs`** is installed but unused — safe to leave or remove.
- **Hardcoded lead key** in `app/api/lead/route.ts` (see §4).

---

## 9. Quick rollback

Netlify keeps every deploy. To roll back: Netlify dashboard → Deploys → pick the last
good deploy → **Publish deploy**. No code change needed.
