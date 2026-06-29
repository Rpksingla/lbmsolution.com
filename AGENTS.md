<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# LBM Solutions site — agent rules

Next.js 16 App Router + TypeScript. Enterprise marketing site for an AI + blockchain engineering agency.

## Read before coding (do NOT crawl pages to learn the project)
- `docs/WIREMAP.md` — every route, section, component, and data source.
- `docs/design-instructions.md` — the locked design system. Follow it exactly.

## Code rules (minimum code, no clutter)
1. **No inline CSS, no styled-jsx, no CSS-in-JS, no new styling systems.** Style ONLY with the token classes in `app/globals.css`. New styles go there, built from the existing `--tokens`.
2. Server components by default. `"use client"` only for real interactivity, kept to small leaf components.
3. Pages are **data-driven**: typed config arrays + small render maps (see `app/page.tsx`, `components/nav/menuData.ts`). Never hand-copy section markup between pages.
4. Reuse `components/` primitives (`Reveal`, `Faq`, `.btn`/`.btn-pri`, section classes). Check WIREMAP before writing a new component.
5. No new dependencies without explicit approval.
6. Nav/routes live ONLY in `components/nav/menuData.ts` — JSON-LD and the mega menu derive from it. Never hardcode nav links elsewhere. Zero `href="#"`.
7. Copy rules: US English, **no em dashes**, no hype words. Any number/client/stat you cannot verify = `[NEEDS-VALIDATION: founder]`. Never invent figures.

## New page checklist (all steps, same PR — SEO/LLM parity is not optional)
1. `app/<slug>/page.tsx` — sections from the design system, `export const metadata` (title, description, canonical).
2. `content/pages/<slug>.md` — the page's markdown twin (frontmatter: `title`, `url`, `description`).
3. Run `npm run llms` — regenerates `public/llms.txt`, `public/llms-full.txt`, `/​<slug>.md`, and the sitemap source.
4. If the page belongs in the nav: add it in `menuData.ts` (menu + JSON-LD update themselves).
5. Gates: `npx tsc --noEmit && npm run lint` must pass.

## Verification gotchas (learned the hard way)
- Turbopack does NOT see file writes made by external scripts: **restart `npm run dev` after scripted edits.**
- Do not trust `chrome --headless --screenshot` for visual checks (false missing-element artifacts). Use `puppeteer-core` (devDependency) against the installed Chrome.
- `position: fixed` breaks inside `.top` (backdrop-filter creates a containing block) — use `absolute` + `top: 100%` for header-anchored overlays.

## Subagents
Same rules apply. Give each subagent: this file, the two docs above, ONLY the files it owns (disjoint ownership — no two agents edit the same file), and its output path. Subagents read `docs/WIREMAP.md` instead of exploring the repo.
