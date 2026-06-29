# AI pages UX — "production console" direction (approved 2026-06-05)

Two pages: `/ai-agents-and-automation` and `/generative-ai-development`.
Goal: same brand tokens (Archivo display, mono labels, purple accent, hairlines, dot textures), NEW section architecture so the AI family does not read as the blockchain template. Direction chosen by founder from three options: **production console**.

## New primitives (added to `app/globals.css`, built only from existing tokens)

| Class | What it is | Used on |
|---|---|---|
| `.hero.ai` + `.heroai` | split hero: text left, console panel right; console wraps below text on mobile | both heroes |
| `.console` (+ `.chead`, `.cline`, `.tm`, `.okk`, `.hot`, `.cchip`) | dark ink panel with dot texture and mono "live" lines; agents page renders an agent run trace, genai page renders a cited answer | both heroes |
| `.offer` (+ `.ot`, `.ocol`) | accent-soft wash conversion block with the primary CTA inside it | agents §2 (ROI offer) |
| `.sigrows` / `.sigrow` (+ `.sig`) | use-case rows: workflow title + description + mono "signal" chip naming the automation-candidate signal | agents §3 |
| `.gapgrid` (+ `.demo`, `.pct`, `.prod`, `.gapitem`, `.gt`) | 20/80 split panel: dark "THE DEMO / 20%" cell left, production checklist ledger right | agents §4 (signature) |
| `.flow` (+ `.fnode`, `.fn`, `.fd`, `.fnode.hot`, `.farrow`, `.fnote`) | CSS pipeline diagram: bordered mono nodes joined by accent arrows; stacks vertically with rotated arrows on mobile | agents §5 (agent loop), genai §4 (RAG flow) |
| `.optcards` / `.opt` (+ `.ohead`, `.on2`, `.orow`, `.ok2`) | three vertical option panels (header band + attribute rows) — the model decision, deliberately NOT a `.pricetable` | genai §3 |
| `.kvs` / `.kv` (+ `.kt`) | mono-keyword ledger rows (keyword left, plain answer right) | genai §5 (where your data goes), genai §3 choice two |

## Section maps

### /ai-agents-and-automation
hero (`.hero.ai` split + trace `.console`) → 01 `.offer` ROI block → 02 `.sigrows` where agents earn their keep (anchor `#use-cases`) → 03 `.gapgrid` demo vs production → 04 `.flow` agent loop + short paragraph → 05 `.steps` assessment→pilot→harden→run → 06 recent work `.cols2 .card` → 07 `.pricetable` costs → 08 `Faq` → `.final` dark CTA (secondary tlink routes to sibling).

### /generative-ai-development
hero (`.hero.ai` split + cited-answer `.console`) → 01 `.practices` 6 build types (3x2) → 02 `.optcards` model decision + `.kvs`/prose for RAG-vs-fine-tune → 03 `.flow` RAG pipeline + short paragraph → 04 `.kvs` data privacy ledger → 05 `.steps` discovery→prototype→harden→ship → 06 recent work `.cols2 .card` → 07 `.pricetable` costs → 08 `Faq` → `.final` dark CTA (secondary tlink routes to sibling).

Shared-by-design (family glue, allowed): `.label` numbered rules, `.steps` process, `.pricetable` for actual price tables, `Faq`, `.final`. Signature sections per page never repeat across the family.

## Rules carried over
One primary CTA per page, repeated hero + final only. Tech tokens in mono. `[VERIFY]` → `[NEEDS-VALIDATION: founder]`. No em dashes, no invented numbers, FAQPage/Service/BreadcrumbList JSON-LD, markdown twin with path-only `url:` frontmatter.
