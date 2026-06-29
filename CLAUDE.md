@AGENTS.md

# Claude Code operating guide (this repo)

## What this is
Greenfield rebuild of lbmsolution.com (enterprise AI + blockchain engineering agency). Next.js 16 App Router + TS, custom token-CSS design system (NOT Tailwind utilities). Status: homepage + mega nav live; 21 pages planned — routes, copy sources, and section maps are in `docs/WIREMAP.md`. Design system is locked in `docs/design-instructions.md`. Read both before any task; do not explore the repo to relearn structure.

## Commands
- Dev: `PORT=3005 npm run dev` (3000 is the OLD site's repo)
- Gates (must pass before claiming done): `npx tsc --noEmit && npm run lint`
- LLM/SEO regen: `npm run llms` (after adding/editing `content/pages/*.md`; also runs on prebuild)
- Voice gate for any new copy: `bash /Users/rampawankumar/Downloads/lbm-execution/phase-06-voice/voice-qa.sh <file>`

## Verification workflow (do not skip, do not trust eyes-off claims)
1. After ANY scripted/external file write: **restart the dev server** (Turbopack does not watch external writes): `lsof -nP -iTCP:3005 -sTCP:LISTEN -t | xargs kill -9; rm -rf .next; PORT=3005 npm run dev &`
2. Visual checks: use `puppeteer-core` (devDependency) against installed Chrome (`/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`). Never `chrome --headless --screenshot` (false missing-element artifacts).
3. Mega menu test hooks (dev only): open panels via `#nav-solutions` / `#nav-industries` URL hash.
4. SSR checks: `curl -s localhost:3005/<route>` and grep — confirm content/JSON-LD/zero `href="#"` in source, not just in the browser.

## Definition of done for a new page
`app/<slug>/page.tsx` (+metadata) AND `content/pages/<slug>.md` AND `npm run llms` AND nav entry in `menuData.ts` (if in nav) AND both gates pass AND voice-qa passes on the copy. Partial = not done.

## Dispatching subagents
- One page or one concern per agent; **disjoint file ownership** (no two agents touch the same file — shared files like `globals.css`/`menuData.ts` are edited only by the orchestrator).
- Hand each agent: `AGENTS.md`, `docs/WIREMAP.md`, `docs/design-instructions.md`, its copy source path (from WIREMAP), its exact output paths, and the QA commands above.
- Tell agents to write files early, return a short summary (no file dumps), and self-run the gates.
- Approved page copy lives in `/Users/rampawankumar/Downloads/lbm-execution/phase-03-content/` — agents adapt it, never invent stats (`[NEEDS-VALIDATION: founder]`).

## Don't
- Don't add deps, fonts, colors, or styling systems. Don't write inline CSS.
- Don't put nav links anywhere except `components/nav/menuData.ts`.
- Don't ship em dashes or invented numbers in copy.
- Don't trust `chrome --headless --screenshot`; don't skip the dev-server restart after scripted writes.
