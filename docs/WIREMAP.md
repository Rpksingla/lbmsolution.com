# WIREMAP — routes, sections, components, data

Read this instead of exploring the repo. Update it in the same PR as any structural change.

## Routes

| URL | Status | Source of copy | Nav |
|---|---|---|---|
| `/` | ✅ live | `content/pages/home.md` (+ inline arrays in `app/page.tsx`) | brand |
| `/smart-contract-audits` | ✅ live (flagship) | `docs/landing-p/smart-contract-audits.md` | Solutions #1 |
| `/ai-agents-and-automation` | ✅ live (AI hub) | `docs/landing-p/ai-agents-and-automation.md` | Solutions #2 |
| `/stablecoin-payment-rails` | ✅ live | `docs/landing-p/stablecoin-payment-rails.md` | Solutions #3 |
| `/tokenization-and-rwa` | ✅ live | `docs/landing-p/tokenization-and-rwa.md` | Solutions #4 |
| `/generative-ai-development` | ✅ live | `docs/landing-p/generative-ai-development.md` | Solutions #5 |
| `/defi-protocol-engineering` | ✅ live | `docs/landing-p/defi-protocol-engineering.md` | Solutions #6 |
| `/crypto-wallet-development` · `/crypto-exchange-development` | ✅ live | `docs/landing-p/crypto-wallet-development.md` / `docs/landing-p/crypto-exchange-development.md` | Solutions secondary |
| `/custom-software-development` · `/crm-engineering` | planned | sprint-04 | not in nav (removed from Solutions menu; service mentions link to `/contact` until built) |
| `/blockchain-engineering` | ✅ live (hub) | `docs/landing-p/blockchain-engineering.md` | Solutions col header |
| `/solutions` · `/resources` | planned (hubs) | new | panel footer |
| `/industries/fintech` · `/industries/b2b-saas` · `/industries/web3-protocols` | ✅ live | `docs/landing-p/` industry block / "stakes ledger" UX | Industries |
| `/case-studies` · `/case-studies/[slug]` | ✅ live | `lib/caseStudies.ts` (3 studies: minati, poxscan, aimintz) | top level |
| `/pricing` · `/about` · `/contact` | planned | sprint-05 / sprint-01 | top level |
| `/learn/token-launch-guide` · `/learn/crm-buyers-guide` · `/learn/blockchain-cost-guide` | planned (pillars) | sprint-05 | footer only |
| `/legal/privacy` · `/legal/terms` | ✅ live | `content/pages/legal-privacy.md` / `legal-terms.md` (copy from old site) | footer legal |

All 22 page drafts (QA-passed copy) live in `/Users/rampawankumar/Downloads/lbm-execution/phase-03-content/`.

## Homepage section order (`app/page.tsx`)
`Header` → `Hero` (kicker, sentence-case h1, `.herostack` > lede + single CTA + `.reassure` + `.tlink`, `.dots`, ticker) → `.trustbar` (platform names only, no rating) → `01 services` (`.practices` 3-up + `.secnote`) → `02 how-we-work` (`section.alt`, `.why` grid, anchor `#how-we-work`) → `03 industries` (`.practices` as links) → `04 pricing` (`section.alt`, `.tablewrap` > `.pricetable` + `.tlink`) → `05 faq` (`Faq items={...}` + FAQPage JSON-LD) → `.final` dark CTA ("Your roadmap could move next week" + `.micro`) → `Footer`. FAQ data lives in `page.tsx` (`FAQ_ITEMS`); `Faq` takes an `items` prop. Proof stats, selected results, products, and client quotes sections are HIDDEN pending founder data (see `FOUNDER INPUT NEEDED` comments in `page.tsx`/`Hero.tsx`).

## Components (`components/`)
| Component | Type | Purpose |
|---|---|---|
| `Header` | server | brand + `MegaMenu` + SiteNavigationElement JSON-LD |
| `nav/MegaMenu` | client | desktop panels (hover-intent, a11y), mobile accordion, backdrop |
| `nav/menuData` | data | **single source for all nav routes, panels, JSON-LD** |
| `Hero` | server | hero + ticker (items array inside) |
| `Reveal` | client | GSAP ScrollTrigger fade-up wrapper (`.rv`); `stagger` prop cascades direct children (`.rv-stagger`); reduced-motion safe |
| `Faq` | client | accordion (data array inside) |
| `ScrollProgress` | client | top progress bar |
| `Footer` | server | link columns (data array inside) |

## SEO / LLM pipeline
- `content/pages/<slug>.md` = markdown twin of every live page (frontmatter: `title`, `url`, `description`). **A page is "live" when both `app/<slug>/page.tsx` and its content file exist.**
- `npm run llms` (`scripts/build-llms.mjs`) generates from `content/pages/`: `public/llms.txt`, `public/llms-full.txt`, and `public/<slug>.md` (served at `/<slug>.md`). Runs automatically on `prebuild`.
- `app/sitemap.ts` builds from `content/pages/` frontmatter (same single source).
- `app/robots.ts` allows all + named AI crawlers, points at the sitemap.
- Per-page JSON-LD: Organization is global (todo in layout); Service/FAQ schema per service page when built.

## Key paths outside this repo
- Approved copy: `/Users/rampawankumar/Downloads/lbm-execution/phase-03-content/`
- Voice gate: `/Users/rampawankumar/Downloads/lbm-execution/phase-06-voice/voice-qa.sh` (run on new copy)
- Old production site (reference only): `/Users/rampawankumar/Downloads/lbm-website`
