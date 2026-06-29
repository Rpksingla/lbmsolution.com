# Industry pages UX — "stakes ledger" direction (approved 2026-06-06)

Three pages, one shared family UX, built once: `/industries/fintech`, `/industries/b2b-saas`, `/industries/web3-protocols`.
Same brand tokens (Archivo display, mono labels, purple accent, hairlines, dot textures). NEW section architecture so the industry family reads as neither the blockchain service pages nor the AI console pages. Direction chosen by founder: **stakes ledger**.

Page type note (from spec): organic industry hubs, not paid-ad landers. They carry the site nav and curated internal links (service router + case studies + pricing). The PRIMARY CTA is still singular and repeated (hero + close). Headlines match search intent / buyer self-description.

## New primitives (added to `app/globals.css`, tokens only)

| Class | What it is | Used in |
|---|---|---|
| `.metricbar` (+ `.in`, `.mx`, `.mv`, `.ml`, `.geo`) | horizontal trust strip: big display metric values with mono labels, geography proof on the right; sits directly under hero like `.trustbar` does | §2 trust strip |
| `.stakes` (+ `.shead`, `.scol`, `.cant`, `.cx`, `.cantq`, `.does`) | the signature: two-column ledger. Left "YOU CANT" column of struck-through buyer fears with a red/accent `.cx` cross marker; right "SO WE" column of LBM answers. Rows align so each fear resolves to an answer. | §3 problem-aware framing |
| `.router` (+ `.rrow`, `.rn`, `.rt`, `.rd`, `.rar`) | numbered service-router rail: `S.01` mono index + bold title + descriptor + arrow; whole row is a Link to the service page. Distinct from `.spec` (different index treatment, lighter rule, descriptor inline). | §5 what we build |
| `.proof` (+ `.pcard`, `.pstat`, `.ph`, `.pp2`) | differentiator cards each carrying a mono proof-stat chip (e.g. `200+ CONTRACTS`) above the heading; chips marked `.nv` when `[VERIFY]` | §6 differentiators with proof |

Pillars (§4) reuse `.practices` 3-up (allowed family glue, but content is industry-specific). Case studies (§7) reuse `.cols2 .card`. Hero reuses `.hero` + `.heroflex`/`.ctacol` with `.reassure` microcopy and a `.tlink` secondary. Close (§8) reuses `.final` dark CTA. `.label` numbered rules, `Faq` not used here (specs have no FAQ), `.pricetable` not used.

## Shared section map (all three pages)
hero (`.hero`, crumbs, h1 outcome headline, lede, `.btn-pri` + `.reassure` + secondary `.tlink`) → `.metricbar` trust strip → 01 `.stakes` problem-aware ledger (`section.alt`) → 02 `.practices` 3 solution pillars → 03 `.router` service rail (anchor target of any "what we build" link) → 04 `.proof` differentiator cards (`section.alt`) → 05 case studies `.cols2 .card` + "View {industry} case studies" link → `.final` close CTA.

Per-page differences are CONTENT only (headline, fears, pillars, which services in the router, proof). Same primitives, so the three read as one family, distinct from the other two families.

## Hard rules carried over
One primary CTA per page, repeated hero + close only (fintech/saas/web3 each have their own CTA label from the spec). Reassurance microcopy under every primary CTA. Secondary action is a low-weight `.tlink`. Tech/metric tokens in mono. Every `[VERIFY]` number/client/geo/"zero exploits" claim → `[NEEDS-VALIDATION: founder]` (rendered with `.nv`); never invent. No em dashes, US English, no hype words. JSON-LD: Service + BreadcrumbList per page (no FAQ on these). Markdown twin with path-only `url:` frontmatter. All internal links via next/link `<Link>`. Zero bare `href="#"`.

Routes the router links to may be planned (not yet built) — that is consistent with the rest of the site and fine. Links: fintech → /stablecoin-payment-rails, /tokenization-and-rwa, /crypto-wallet-development, /smart-contract-audits, /ai-agents-and-automation, /custom-software-development. saas → /ai-agents-and-automation, /generative-ai-development, /custom-software-development, /crm-engineering. web3 → /smart-contract-audits, /defi-protocol-engineering, /crypto-exchange-development, /crypto-wallet-development, /tokenization-and-rwa, /learn/token-launch-guide.
