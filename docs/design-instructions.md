# LBM design instructions (locked)

The approved system. Do not deviate without founder sign-off. Source of truth for tokens/classes: `app/globals.css`.

## Identity
Enterprise engineering agency. White-primary, confident, precise. NOT a crypto-startup aesthetic: no gradients-on-everything, no glassmorphism, no neon.

## Tokens (use vars, never hardcode hex)
| Token | Value | Use |
|---|---|---|
| `--bg` | #ffffff | page background (primary color of the brand) |
| `--bg-2` | #f4f4f6 | raised panels, alt sections, hover rows |
| `--ink` | #0c0c10 | headings, dark "moment" blocks |
| `--ink-soft` | #2a2a33 | lede body |
| `--gray` / `--gray-2` | #6b6b76 / #9a9aa4 | secondary / tertiary text |
| `--line` / `--line-2` | #e7e7ec / #dedee4 | hairline borders |
| `--accent` | #6c47ff | THE accent. Buttons, badges, mono labels, underlines |
| `--accent-d` / `--accent-soft` | #5734e0 / #f0ecff | hover / tint |

## Type (via next/font, mapped in globals.css)
- `--display` Archivo. Headlines 800–900. Hero = 900 uppercase, tight (-.025em), line-height .92. One filled-accent word + one outline-stroke word allowed per hero.
- `--body` Hanken Grotesk 400–600.
- `--mono` JetBrains Mono 500. ALL technical labels: uppercase, letter-spaced (`.mono` class). Section labels read `01 / WHAT WE BUILD`.
- Scale: hero clamp(3.2–7.2rem); section `.h2` clamp(2.2–3.7rem) two-tone (ink + `.g` gray tail); body 17px.

## Signature patterns (what makes it ours)
- **Numbered mono labels** + hairline rule before every section (`.label`).
- **Dot textures**: alt sections (`section.alt`), hero corner (`.dots`), dark cards. Radial-gradient dots only; no images.
- **Dark "moment" blocks**: final CTA section and menu featured cards = `--ink` bg + dot texture + white display type + purple CTA. Use sparingly (max 1–2 per page).
- **Spec-sheet lists**: indexed rows (`S.01`), title + descriptor, hover = `--accent-soft` bg + inset accent bar + arrow nudge.
- **Demand badges**: 20px rounded-square, `--accent-soft` bg, mono digit.
- Hairline borders everywhere; soft shadows ONLY for hover-lift and the menu panel.
- Buttons: `.btn-pri` (purple, mono uppercase) one per area; `.btn-ghost` secondary. Arrow `→` suffix.

## AI pages: production console patterns (approved 2026-06-05)
The two AI pages use a distinct section architecture built from the same tokens: `.hero.ai`/`.heroai` split hero with a dark `.console` mono trace panel, `.offer` accent-wash conversion block, `.sigrows` signal rows, `.gapgrid` 20/80 split, `.flow` pipeline diagrams, `.optcards` option panels, `.kvs` keyword ledgers. Spec: `docs/superpowers/specs/2026-06-05-ai-pages-ux-design.md`. Reserve these for the AI family; blockchain pages keep their own patterns.

## Industry pages: stakes-ledger patterns (approved 2026-06-06)
The three `/industries/*` hubs share a distinct section architecture from the same tokens: `.metricbar` trust strip, `.stakes` two-column "you can't / so we" ledger (struck fears resolve to answers), `.router` numbered service rail, `.proof` differentiator cards with mono stat chips. Spec: `docs/superpowers/specs/2026-06-06-industry-pages-ux-design.md`. Reserve for the industry family; do not reuse on service or AI pages.

## Backgrounds and imagery (founder-approved 2026-06-06)
A bounded, coded visual layer. Backgrounds are CSS/SVG only (zero image files), built from existing tokens. Spec: `docs/superpowers/specs/2026-06-06-visual-system-abstract-technical-design.md`.
- **`<Backdrop motif="...">`** (`components/Backdrop.tsx`) is the only way to add a background. Place it as the FIRST child of a `.bg-host` element. Motifs: `hero` (light blueprint grid + corner glow + accent nodes, for light heroes), `dots` (refined dot-matrix), `blueprint` (faint accent grid), `glow` (corner accent bloom), `beam` (diagonal accent beams, for the dark `.final` CTA only). All classes live under the "Abstract-technical backdrops" block in `globals.css`.
- **Heroes stay light** (white-primary holds). The only dark "moment" remains the `.final` CTA.
- **Per-page signature heroes** (so no two pages look the same): each landing hero uses a motif echoing its subject. `depth` = crypto exchange, `ring` = crypto wallet, `flow` = defi protocol, `scan` = smart contract audits, `rails` = stablecoin payment rails, `lattice` = tokenization/RWA. Homepage keeps the generic `hero` motif. Reuse a page's signature only on that page.
- **Restraint:** at most two textured white sections per page; never texture an `.alt` section (it has its own dots). Leave `.final` `dots2` in place; `beam` layers behind it.
- **Motion** is CSS-only (`bd-pulse`/`bd-drift`/`bd-sweep`), gated to `prefers-reduced-motion: no-preference` AND `min-width: 768px`.
- **OG / social images:** each page exports `opengraph-image.tsx` using the shared `lib/og.tsx` template (built-in `next/og`). Inline styles there are the Satori renderer's required API, not site styling.
- **Real-asset imagery** (client logos, team photos, case-study screenshots): do NOT fabricate. Add those components only once the founder supplies real files; never ship placeholder brand logos on a live page.

## Landing pages (paid traffic, founder-approved 2026-06-06)
ConversionLab-style paid landing pages live outside the marketing-site chrome: `components/lp/LpShell` (logo-only header, single CTA, no nav, minimal privacy footer), `components/lp/LeadForm` (reuses the Contact-page `ContactForm`: name, phone with country-code picker, email, service, industry, and arithmetic captcha; posts to `/api/lead` → WorksBuddy CRM and redirects to `/thank-you`; the page's `source` is forwarded as the CRM `from_page`; rendered inside `#lead-form` with the per-page trust panel beside it), and a `.lp-hero` split (copy left, form right). Each uses one animated WebGL background via `<LpBackground variant="...">` over a static `<Backdrop motif="hero">` fallback (mounts only on wide + motion-allowing viewports). Background set (reactbits-derived, OGL, themed to the accent palette, structural CSS in globals.css per the Cubes convention): `siderays` (3 origins), `aurora`, `threads`, `beams`, `silk` (`components/bg/`). Rotate variants so no two adjacent landing pages match. One conversion action per page, zero nav links, all unverifiable proof wrapped in `<Nv>` (`NEEDS-VALIDATION: founder`). `ogl` is an approved dependency for these.

## Motion
Subtle and few: hero CSS stagger (`.hr`), scroll reveal (`Reveal`/`.rv`), hover lifts, scroll progress bar, menu hover-intent. Always inside `prefers-reduced-motion` guards. No parallax, no marquee beyond the ticker.

## Hard DON'Ts
- No inline `style=` for visual design (layout one-offs like `maxWidth` in footer are tolerated, nothing else).
- No new fonts, colors, gradients, icon sets, or component libraries.
- No purple-on-white gradient hero cliche; no stock illustrations.
- No em dashes in copy; no invented stats (use `[NEEDS-VALIDATION: founder]`).
