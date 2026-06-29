# Pre-launch pending list — LBM Solutions site

**Purpose:** single source of truth for everything that is still a placeholder (skeleton) and must be replaced with real, founder-verified data before the site goes live. Hand this to the dev team.

**Last audited:** 2026-06-09
**Audited by:** engineering (automated scan + manual review)

## How placeholders are marked in the code

| Token | Meaning | How it renders today |
|---|---|---|
| `[REAL: ...]` | A number/value the dev must replace with a founder-verified figure. | Shows the literal bracketed text on the page. **Blocks launch.** |
| `[NEEDS-VALIDATION: founder]` (constant `NV`) | A stat/claim awaiting founder sign-off. Used as a tooltip on `.nv` spans. | The value renders with a dotted purple underline; hovering shows the note. |
| `[X]` / `[X]+` / `▢` / `$▢` | Skeleton numeric placeholder. | Shows literally on the page. **Blocks launch.** |
| `// FOUNDER INPUT NEEDED` / `// DO NOT SHIP` | Build comment for the dev, not user-visible. | Not rendered. |

**Rule:** do not estimate. If a real figure cannot be sourced, delete the row/claim rather than guess. Every visible `[REAL:]`, `[X]`, and `▢` must be gone before launch.

---

## Priority list (do these in order)

### P0 — Visible literal placeholders (the page currently shows broken text)
These render as literal `[X]`, `▢`, or `[REAL:]` to real visitors. Highest urgency.

1. **`/stablecoin-payment-rails`** — replace all `[REAL: ...]` tokens (see page section below). 9 tokens.
2. **`/smart-contract-audits`** — track-record bar shows `$▢ in TVL secured` and `▢ contracts audited since 2019`, plus a `[NEEDS-VALIDATION]` checklist count. 9 `.nv` markers + 1 inline.
3. **`/about`** — hero metric shows `[X]+ Production systems shipped`.
4. **All 11 `/lp/*` landing pages** — every hero shows `[X]+ ...` trust stats (see LP table below).
5. **`/case-studies` and `/case-studies/[slug]`** — every metric, client name, quote, and timeline is `[X]` / `[NEEDS-VALIDATION]` (see Case studies section).

### P1 — Dotted-underline `.nv` stats on live service/industry pages
Verify or remove. Visible but less jarring (real-looking values with a dotted underline). Pages: `/defi-protocol-engineering` (7), `/industries/web3-protocols` (8), `/industries/fintech` (7), `/industries/b2b-saas` (6), `/generative-ai-development` (6), `/ai-agents-and-automation` (4), `/blockchain-engineering` (3).

### P2 — Images / brand assets
6. Footer review badges: only **Clutch** and **Trustpilot** ship; **G2** and **GoodFirms** are intentionally withheld pending white-background badge assets.
7. Case-study images: every case study uses **image-slot labels** (e.g. "Architecture diagram"), not real images.
8. Confirm OG share images render correctly (they are code-generated per page; no static `og/*.png` needed).

### P3 — Missing routes and integrations
9. **Legal pages do not exist.** Footer links `/legal/privacy`, `/legal/terms`, `/legal/cookies` → 404. Create the pages or remove the links.
10. **Footer entity / contact:** the registered legal name and contact values come from `lib/company.ts` — confirm they are correct for the legal footer.
11. **Form delivery + analytics env vars** must be set in the host (see Integrations section), or the forms capture nothing.

---

## Per-page pending detail

### `/stablecoin-payment-rails` (9 × `[REAL:]`)
File: `app/stablecoin-payment-rails/page.tsx`
- Comparison table (6 cells): `[REAL: card cost per transaction]`, `[REAL: wire/ACH cost per transaction]`, `[REAL: stablecoin cost per transaction]`, `[REAL: card settlement time]`, `[REAL: wire/ACH settlement time]`, `[REAL: stablecoin settlement time]`.
- Hero proof signal #2: `Live across All chains`.
- "Built for these flows" link: `See how we built [REAL: flow] for [REAL: client or vertical]` — also point the link at the real case study (currently `/case-studies`).
- Timeline note: `ships in [REAL: typical delivery window]`.
- **Verified already (do not touch):** `$100M` processed, `10+ countries`, Sumsub.

### `/smart-contract-audits` (`$▢`, `▢`, + 9 `.nv`)
File: `app/smart-contract-audits/page.tsx`
- Track-record bar: `$▢ in TVL secured`, `▢ contracts audited since 2019`, plus a geo claim (Series A–C, US/UAE/Singapore/UK).
- Pre-mainnet checklist: "`[NEEDS-VALIDATION]` items" count.
- Remaining `.nv` stats lower on the page — verify each figure.

### `/about` (1 × `[X]`)
File: `app/about/page.tsx` — metric `[X]+ Production systems shipped`. (`2019`, `3 offices`, `Audit-first` are real and can stay.)

### `/defi-protocol-engineering` (7 `.nv`), `/generative-ai-development` (6 `.nv` + 7 NV), `/ai-agents-and-automation` (4 `.nv`), `/blockchain-engineering` (3 `.nv`)
Each has a stats/proof band and one "where are you based / how fast" FAQ line marked `[NEEDS-VALIDATION: founder]`. Replace the numbers; confirm the geography/SLA lines.

### `/industries/fintech` (7), `/industries/web3-protocols` (8), `/industries/b2b-saas` (6)
File: `app/industries/*/page.tsx` and their `content/pages/industries-*.md` twins. Proof stats and client/outcome claims are `.nv`. **Note:** update both the page AND its markdown twin so `llms.txt` stays accurate (run `npm run llms` after).

### `/lp/*` landing pages (11 pages, hero stat each)
Files: `app/lp/<slug>/page.tsx`. Every hero ships three `[X]+` trust stats. Replace with real figures or cut the band.

| LP page | Placeholder hero stats |
|---|---|
| `/lp/layer-1-blockchain-development` | `[X]+ chains architected`, `[X]+ years on consensus-layer systems`, + 1 |
| `/lp/layer-2-development` | `[X]+ rollups deployed`, `[X]+ TVL secured on L2`, `[X]+ years on scaling systems` |
| `/lp/zk-rollup-development` | 3 × `[X]+` |
| `/lp/optimistic-rollup-development` | 3 × `[X]+` |
| `/lp/sidechain-and-appchain-development` | 2 × `[X]+` |
| `/lp/enterprise-blockchain-development` | 2 × `[X]+` |
| `/lp/cross-chain-bridge-development` | 2 × `[X]+` |
| `/lp/blockchain-node-infrastructure` | `[X]+ validators run`, `[X]+ years on chain infrastructure`, + 1 |
| `/lp/oracle-integration` | `[X]+ integrations shipped` |
| `/lp/supply-chain-traceability` | `[X]+ years on traceability systems`, + 1 |
| `/lp/blockchain-identity-did` | 2 × `[X]+` |

### Case studies (`lib/caseStudies.ts`)
Populated with three real, client-approved studies adapted from LBM's published write-ups: `minati`, `poxscan`, and `aimintz`. All figures, quotes, and tech stacks come from those source materials. The index hero copy and aggregate metrics in `app/case-studies/page.tsx` now reflect the real studies. Per-study imagery reuses the generic `public/case-studies/cs*.jpg` visuals; swap in project-specific art when available.

---

## Images / assets pending

| Asset | Where | Status |
|---|---|---|
| G2 review badge | footer (`components/Footer.tsx`, `BADGES`) | withheld — needs white-bg badge asset + profile link |
| GoodFirms review badge | footer | withheld — same |
| Case-study hero images | `lib/caseStudies.ts` `heroSrc` | generic `cs*.jpg` reused; project-specific art optional |
| Case-study body images | `lib/caseStudies.ts` `bodyImages` | generic `cs*.jpg` reused; project-specific art optional |
| Blog post images | CMS (`imagedelivery.net`) | depends on CMS being connected (see env) |

**Present and good:** `lbm-logo.png`, `lbm-logo-white.png`, `lbm-mark.png`, `badges/clutch.png`, `badges/trustpilot.png`. Per-page OG images are generated by `opengraph-image.tsx` (no static files needed).

---

## Integrations / environment variables (set in the host, e.g. Vercel)

| Variable | Used by | Effect if unset |
|---|---|---|
| `CONTACT_WEBHOOK_URL` | `/api/contact` | contact form submissions are not forwarded (only logged locally in dev) |
| `LEADS_WEBHOOK_URL` | `/api/leads` | lead/scoping submissions not forwarded |
| `NEWSLETTER_WEBHOOK_URL` | `/api/newsletter` | newsletter signups not forwarded |
| `CMS_BASE_URL` | `lib/blog.ts` | blog has no content / build fetch fails |
| `CMS_API_KEY` | `lib/blog.ts` | blog CMS auth fails |
| `NEXT_PUBLIC_ADS_ID` | analytics/track | Google Ads conversion tracking off |
| `NEXT_PUBLIC_ADS_CONVERSION_LABEL` | analytics/track | conversion label missing |

---

## Missing routes

- `/legal/privacy`, `/legal/terms`, `/legal/cookies` — linked in the footer, **no pages exist** (404). Create them or remove the links before launch.

---

## Verification workflow for the dev team

1. After editing any `content/pages/*.md` twin, run `npm run llms` so `public/llms.txt` and `llms-full.txt` regenerate.
2. Search the repo for leftover tokens before shipping — all of these must return **zero** matches in shipped pages:
   ```
   grep -rn '\[REAL:\|\[X\]\|▢\|NEEDS-VALIDATION\|FOUNDER INPUT NEEDED\|DO NOT SHIP' app lib content
   ```
3. Run the gates: `npx tsc --noEmit && npm run lint`.
4. Confirm forms deliver end-to-end with the webhook env vars set.

---

## Full page inventory

**28 concrete pages + 4 dynamic templates + 4 API routes.** "Pending" = has placeholders to fix from the lists above.

### Core (5)
| Route | Pending |
|---|---|
| `/` (home) | clean (hero cubes, copy verified) |
| `/about` | `[X]+ production systems shipped` |
| `/contact` | confirm form delivery env var |
| `/case-studies` | all 3 study cards skeleton |
| `/blog` | needs CMS env vars connected |

### Solutions / service pages (9)
| Route | Pending |
|---|---|
| `/smart-contract-audits` | `$▢` TVL, `▢` contracts, checklist count |
| `/stablecoin-payment-rails` | 9 × `[REAL:]` |
| `/tokenization-and-rwa` | verify (no visible `.nv` found; recheck copy) |
| `/defi-protocol-engineering` | 7 `.nv` stats |
| `/ai-agents-and-automation` | 4 `.nv` stats |
| `/generative-ai-development` | 6 `.nv` stats |
| `/blockchain-engineering` | 3 `.nv` stats + "based" FAQ line |
| `/crypto-wallet-development` | verify (recheck copy) |
| `/crypto-exchange-development` | verify (recheck copy) |

### Industries (3)
| Route | Pending |
|---|---|
| `/industries/fintech` | 7 `.nv` (+ update `.md` twin) |
| `/industries/b2b-saas` | 6 `.nv` (+ update `.md` twin) |
| `/industries/web3-protocols` | 8 `.nv` (+ update `.md` twin) |

### Landing pages `/lp/*` (11) — all have `[X]+` hero stats
`/lp/layer-1-blockchain-development`, `/lp/layer-2-development`, `/lp/zk-rollup-development`, `/lp/optimistic-rollup-development`, `/lp/sidechain-and-appchain-development`, `/lp/enterprise-blockchain-development`, `/lp/cross-chain-bridge-development`, `/lp/blockchain-node-infrastructure`, `/lp/oracle-integration`, `/lp/supply-chain-traceability`, `/lp/blockchain-identity-did`

### Dynamic templates (4)
`/case-studies/[slug]` (3 live studies: minati, poxscan, aimintz) · `/blog/[slug]` · `/blog/category/[slug]` · `/blog/page/[n]` (all blog routes depend on the CMS env vars)

### API routes (not user pages, 4)
`/api/contact` · `/api/leads` · `/api/newsletter` · `/api/blog-index`

### Linked but NOT built (confirmed 404 — create the page or remove the link)
| Route | Linked from |
|---|---|
| `/legal/privacy`, `/legal/terms`, `/legal/cookies` | footer |
| `/careers` | footer |
| `/solutions`, `/resources` | mega nav (`components/nav/menuData.ts`) |
| `/custom-software-development` | nav + `/industries/fintech` |
| `/crm-engineering` | nav + `/industries/b2b-saas` |
