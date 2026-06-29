# Homepage rebuild — design spec (2026-06-05)

Rebuild `/` to match the approved homepage content document (12 sections, Option A wedge:
"Blockchain and AI engineering for fintech and B2B SaaS founders"). Approach: **reuse-first
with minimal new CSS** — map sections onto existing token classes; new classes only where no
primitive fits, built from existing `--tokens` in `app/globals.css`.

## Decisions (approved)

- All 12 sections ship. Every unverified figure carries the existing
  `[NEEDS-VALIDATION: founder]` / `.nv` dotted-underline marker (same pattern as the hero
  ticker). Nothing invented, nothing silently dropped.
- Primary CTA everywhere: **"Book a 30-minute architecture review"** → `/contact`.
- Em dashes in the source doc are rewritten with colons or periods (repo ban).
- Sentence case headings, US English, no hype words.

## Files touched

| File | Change |
|---|---|
| `components/Hero.tsx` | New kicker, H1, lede, CTA, reassurance microcopy, secondary link. Ticker stays. |
| `app/page.tsx` | Full section rewrite as typed config arrays + render maps. FAQPage JSON-LD. |
| `components/Faq.tsx` | Accepts `items: {q, a}[]` prop (data moves to `page.tsx` so JSON-LD derives from the same array). |
| `app/globals.css` | New classes from existing tokens: `.reassure`, `.trustbar`, `.stats`, `.pricetable`, `.quotes`. |
| `app/layout.tsx` | Root metadata updated to the doc's SEO block (title, description, OG). |
| `content/pages/home.md` | Markdown twin rewritten to mirror the new copy. |
| `docs/WIREMAP.md` | Homepage section order row updated. |

No new dependencies, fonts, colors, or styling systems. No inline CSS.

## Section map (doc → page)

1. **Hero** (`Hero.tsx`)
   - Kicker: ` Blockchain and AI engineering since 2014 ` (mono bracket style).
   - H1 (900 uppercase, real text): "We build **production** blockchain and AI *systems*
     for fintech and SaaS teams" — `production` = `.pp` accent word, `systems` = `.ol`
     outline word (one of each, per locked hero rules).
   - Lede: "Senior engineers only. Audit-first delivery. We stay through launch and beyond.
     Most engagements ship in 6 to 12 weeks at $80K to $250K, and you own the code."
   - CTA `.btn-pri`: "Book a 30-minute architecture review →" → `/contact`.
   - `.reassure` microcopy under the button: "We review your project, suggest the right
     approach, and give you a price range. No sales pitch. If we are not the right fit,
     we will tell you who is."
   - Secondary text link: "See how we work →" → `#how-we-work`.
   - Ticker + `.nvnote` unchanged.
2. **Trust bar** (`page.tsx`, directly under `<Hero/>`)
   - New `.trustbar` strip: mono label "Reviewed on" + Clutch · GoodFirms · G2 · Trustpilot
     (text only, no logo assets) + rating figure marked `[NEEDS-VALIDATION: founder]` `.nv`.
3. **01 / What we build** — `.practices` 3-up:
   - Smart contract audits (manual review + Slither, Mythril, Echidna, Foundry; from $50K)
     → link "Get a smart contract audit ↗" `/smart-contract-audits`
   - Blockchain engineering (Ethereum, Base, Arbitrum, Optimism, Solana, Polygon;
     tokenization/RWA, DeFi, exchanges, stablecoin rails; $80K to $250K, 6 to 12 weeks)
     → "Scope a blockchain build ↗" `/blockchain-engineering`
   - AI agents and automation (LangGraph, CrewAI, LangChain + observability;
     $40K to $150K) → "Scope an AI build ↗" `/ai-agents-and-automation`
   - One-line footer note: "Custom software, CRM engineering, and white-label products are
     also part of what we do. Ask us on the call."
4. **02 / What eleven years of shipping looks like** — new `.stats` 4-up grid
   (display-weight number + gray caption):
   - `[NEEDS-VALIDATION: founder]` smart contracts deployed (`.nv`) — "shipped to mainnet,
     not just testnet"
   - `[NEEDS-VALIDATION: founder]` in TVL secured (`.nv`)
   - 200+ projects delivered since 2014 (stated as-is in the approved doc, no marker)
   - 50+ clients across the US, UAE, Singapore, the UK, and Canada (as-is, no marker)
5. **03 / Selected results** — one `.card` (template entry, all figures `.nv`-marked:
   client, contract count, LOC, findings, weeks, fee) + text link
   "Read the case studies →" `/case-studies`.
6. **04 / How we work** — `section.alt` + `.why` grid, `id="how-we-work"`:
   Senior engineers only / Audit-first / We stay through launch / You own everything.
7. **05 / Products we have shipped** — `.spec`-style indexed rows: FoodFleet, Vroom,
   RetailNest; each description `[NEEDS-VALIDATION: founder]`; footer note "Available as
   white-label builds. Ask on the call." Rows link to `/case-studies` (no `href="#"`).
8. **06 / Who we build for** — `.practices` 3-up cards linking to `/industries/fintech`,
   `/industries/b2b-saas`, `/industries/web3-protocols`.
9. **07 / What clients say** — new `.quotes` 2-up blockquotes (Venture Gold, NSF Token);
   pull quotes + names `[NEEDS-VALIDATION: founder]`.
10. **08 / What engagements cost** — new `.pricetable` (hairline borders, mono headers):
    audit from $50K, 2 to 4 weeks; blockchain build $80K to $250K, 6 to 12 weeks; AI
    $40K to $150K, 6 to 12 weeks. Note: fixed-fee discovery scope. Link
    "See engagement models →" `/pricing`.
11. **09 / Questions buyers ask** — `Faq` with the doc's six Q&As. Start-window figure and
    primary location marked `[NEEDS-VALIDATION: founder]`. FAQPage JSON-LD rendered in
    `page.tsx` from the same array.
12. **Final CTA** — existing `.final` dark block: "Book a 30-minute architecture review",
    doc's reassurance copy, `.btn-pri` → `/contact`. Secondary ghost → `/pricing`.

## New CSS (all from existing tokens, in `globals.css`)

- `.reassure` — mono-adjacent small gray text, max-width ~52ch.
- `.trustbar` — slim hairline-bordered strip, mono label + inline source list.
- `.stats` — 4-col grid (2-col mobile), display-weight figure + gray caption, hairline rules.
- `.pricetable` — full-width table, mono uppercase headers, hairline row borders,
  hover row `--bg-2`.
- `.quotes` — 2-col grid of bordered blockquotes, mono attribution line.

## SEO / metadata

- `layout.tsx` title: "Blockchain & AI Engineering for Fintech | LBM Solutions".
- Description: "We build and audit production blockchain and AI systems for fintech and
  B2B SaaS teams. Senior engineers, audit-first, shipped in 6 to 12 weeks. Book a
  30-minute architecture review."
- OG image left as-is (no `/og/home.png` asset exists; noted as founder todo, not invented).
- Schema: FAQPage JSON-LD on the homepage (derived from the FAQ array). Organization
  JSON-LD remains the global layout todo per WIREMAP; Service schema stays per-service-page.

## Error handling / edge cases

- All links resolve to routes that exist in WIREMAP (planned routes 404 until built —
  consistent with the current live page, which already links to them).
- `Faq` keeps its default-closed accordion behavior; prop change is backward-shaped
  (required prop, single call site).

## Verification

1. `npx tsc --noEmit && npm run lint`
2. `npm run llms` after rewriting `content/pages/home.md`
3. `bash /Users/rampawankumar/Downloads/lbm-execution/phase-06-voice/voice-qa.sh content/pages/home.md`
4. Dev server restart (`lsof ... kill; rm -rf .next; PORT=3005 npm run dev &`), then
   puppeteer-core screenshot against installed Chrome (desktop + 390px mobile: H1, subhead,
   CTA above the fold).
5. `curl -s localhost:3005/ | grep` — real-text H1, FAQPage JSON-LD present, zero `href="#"`,
   no em dashes.
