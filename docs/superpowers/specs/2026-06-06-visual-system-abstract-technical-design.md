# Abstract-Technical Visual System — Design Spec

**Date:** 2026-06-06
**Status:** Implemented 2026-06-06 (backdrops + OG across homepage + 6 landing pages, gates green, SSR + visual verified). Real-asset components (logo wall / team / case-study) intentionally deferred: not shipped with placeholders, because fabricating client/brand assets violates the project's no-fabrication rule. They land when the founder supplies real files.
**Owner:** Founder (Rampawan)

## Goal

Add a "highly professional" visual layer (backgrounds + supporting imagery) to the LBM
site as a **bounded, founder-approved evolution** of the locked design system. The site is
currently intentionally image-free (white-primary, typographic, CSS dot-textures). This work
widens that vocabulary with a *coded* "abstract technical" treatment — reading as serious
engineering, not crypto-startup — while preserving the bans that define the brand.

## Scope

**In scope (this pass):**
- The 5 selected background motifs, built as CSS/SVG from existing tokens.
- Subtle CSS-only motion (drift/pulse/sweep), guarded.
- Programmatic OG / social-share images (built-in `next/og`, no new dep).
- Three real-asset components built with on-brand placeholders: client logo wall, team grid,
  case-study screenshot frame.
- `design-instructions.md` updated to document the new vocabulary (keeps the system "locked").
- Applied to: **homepage + 6 landing pages** — `crypto-exchange-development`,
  `crypto-wallet-development`, `defi-protocol-engineering`, `smart-contract-audits`,
  `stablecoin-payment-rails`, `tokenization-and-rwa`.

**Out of scope (later passes):**
- The 2 AI pages and `blockchain-engineering` (distinct console architecture — left untouched).
- The remaining unbuilt routes in WIREMAP.
- Replacing placeholder assets with real logos/photos/screenshots (founder supplies later;
  drop-in, no code changes).
- Dropped motifs: gradient mesh wash, concentric radar, topographic contours.

## Hard constraints (unchanged from AGENTS.md / design-instructions.md)

- No inline CSS / styled-jsx / CSS-in-JS. All styling = token classes in `globals.css`,
  built only from existing `--tokens`. No new colors, fonts, gradients-as-brand, icon sets.
- Server components by default; `"use client"` only for real interactivity.
- No new dependencies. (`next/og` and `next/image` are built into Next.js 16.)
- No stock-photo heroes, no glassmorphism, no neon, no parallax, no marquee.
- Motion always inside `@media (prefers-reduced-motion: no-preference)`.
- Copy: US English, no em dashes, no invented stats (`[NEEDS-VALIDATION: founder]`).

## The 5 background motifs

All are pure CSS/SVG (layered `<div>`s with gradients + `mask-image`), zero image files,
built from `--ink`, `--accent`, `--accent-soft`, `--line`, `--line-2`.

| Motif | Recipe | Surface |
|---|---|---|
| `bg-net` — node network + glow | layered hairline grids + radial `--accent` glow + accent nodes/connection lines, masked fade | dark heroes |
| `bg-beam` — light beams | blurred diagonal `--accent` gradient streaks over `--ink` | dark CTA "moment" blocks |
| `bg-dots` — dot-matrix (refined) | existing radial-dot texture + directional `mask-image` fade | white sections |
| `bg-blueprint` — blueprint grid | faint `--accent` grid + small schematic marks, masked | white sections / cards |
| `bg-glow` — corner accent glow | single soft `--accent-soft` radial bloom in a corner | white sections / cards |

### Component: `Backdrop`
A small **server** component that renders the correct motif markup from a `motif` prop via a
render map — so motif markup is authored once and never hand-copied between pages (data-driven
rule). Signature (final shape decided in plan):
`<Backdrop motif="net" />` placed as the first child of a `position: relative` section.
Each motif is `position:absolute; inset:0; pointer-events:none; z-index:0`; content sits above.

### Motion
CSS `@keyframes` in `globals.css` only (no JS): slow node drift, glow pulse, beam sweep.
Wrapped in `@media (prefers-reduced-motion: no-preference)` **and** disabled below a mobile
breakpoint. Default paint is the static state, so reduced-motion/mobile lose nothing.

## OG / social-share images

- Shared template `lib/og.tsx` using built-in `next/og` `ImageResponse`: `--ink` background,
  one `bg-net`-style motif, accent mono label, page title in display type — all from tokens.
- Per-route `app/<slug>/opengraph-image.tsx` (and root `app/opengraph-image.tsx`) feed the
  template their title/label. Reuse for Twitter image.
- Verify via `curl` that rendered HTML exposes the `og:image` meta tags.

## Real-asset components (placeholders now)

Built with built-in `next/image`, on-brand placeholders, `[NEEDS-VALIDATION: founder]` markers.
Founder later replaces files only — no code change.

| Component | Placeholder | Asset dir |
|---|---|---|
| `LogoWall` | greyscale SVG wordmarks, color-on-hover | `public/logos/` |
| Team grid | neutral silhouette tiles | `public/team/` |
| Case-study frame | mock UI in browser chrome | `public/cases/` |

(Which of these actually land on the homepage / 6 pages is decided per WIREMAP section maps
during planning; the components are built regardless so they're ready to place.)

## Architecture summary

```
globals.css        +5 motif classes, +keyframes, +real-asset component styles (orchestrator-owned)
components/
  Backdrop.tsx     server; motif render map
  LogoWall.tsx     server; next/image + placeholders
  TeamGrid.tsx     server; next/image + placeholders
  CaseFrame.tsx    server; next/image + placeholders
lib/og.tsx         shared OG template (next/og)
app/opengraph-image.tsx                 root OG
app/<slug>/opengraph-image.tsx          per-page OG (homepage + 6)
app/page.tsx + 6 landing page.tsx       apply <Backdrop> to hero/sections/CTA (per-page, disjoint)
docs/design-instructions.md             document new vocabulary
public/logos|team|cases/                placeholder assets
```

## Rollout & ownership

1. Orchestrator builds the shared layer first: `globals.css` motifs+motion, `Backdrop`,
   `lib/og.tsx`, the 3 asset components, root OG. This is the reference implementation,
   validated on the **homepage** before fan-out.
2. The 6 landing pages then get `<Backdrop>` + OG applied. These edits touch **disjoint files**
   (one page each) and may be parallelized per CLAUDE.md subagent rules. Shared files
   (`globals.css`, components) are edited only by the orchestrator.
3. `design-instructions.md` updated once, by the orchestrator.

## Verification (Definition of Done)

- `npx tsc --noEmit && npm run lint` pass.
- Dev-server restarted after any scripted writes (Turbopack does not watch external writes).
- Visual checks via `puppeteer-core` against installed Chrome — never `chrome --headless --screenshot`.
- `curl -s localhost:3005/<route>` confirms: motif markup in SSR output, `og:image` meta present,
  zero `href="#"`.
- Motion verified to disappear under `prefers-reduced-motion: reduce` and mobile width.
- `npm run llms` re-run if any `content/pages/*.md` copy changes (backgrounds alone don't, but
  any new copy for logo/team/case sections does).
- No new dependencies in `package.json`; no inline CSS introduced.

## Open questions / assumptions

- Assumed founder sign-off to update `design-instructions.md` is granted (it is the founder
  driving this). If not, the motifs still ship; only the doc update is held.
- Exact placement of logo wall / team / case components on each page follows WIREMAP section
  maps and is finalized in the implementation plan.
