# Pending from the founder

Everything the new site needs from you to remove placeholders and ship without invented content. The old site gave us contact details, social links, the founder, team names, and headshots (see `real-content-from-old-site.md`). The items below are the gaps. Nothing here is invented; every blank is marked so the site never ships a fake number or a fake logo.

Priority key: P0 = blocks an honest launch, P1 = needed for full credibility, P2 = polish.

---

## 1. Real numbers (P0) — replaces every placeholder stat

The new site shows several metrics that are currently flagged `[NEEDS-VALIDATION]` or carry a validation marker. Give the real figure, or tell us to remove the claim. Do NOT guess; an unsourced number is worse than no number.

| Where it shows | Current placeholder | Need from you |
|---|---|---|
| Hero ticker | "$400M+ TVL secured" | Real total TVL audited/secured, or remove |
| Hero ticker | "200+ contracts shipped" | Real count of contracts shipped/audited, or remove |
| Hero ticker | "48hr audit quotes", "4hr response on new briefs", "Zero post-launch exploits" | Confirm each is true, or remove |
| Footer / hero "since" line | "Since 2015" (placeholder) | The real founding year. The old About says "more than 5 years" which suggests ~2019 to 2020, NOT 2015. Confirm. |
| About / counters | old site showed "0+ years", "0+ projects", "0+ clients" | Real numbers: years in operation, projects delivered, smart contracts deployed, clients served, employees |
| Smart contract audits page | "From $20K", audit counts, TVL | Confirm the entry price and any audit-volume stat |

## 2. Pricing approval (P0)

The pricing page and several CTAs quote ranges from the content drafts: roughly $40K for a scoped build up to $250K for a multi-quarter platform, $50K minimum anchor, $20K starting audit. These are unconfirmed.
- [ ] Approve or correct each dollar figure and the $50K minimum.

## 3. Team roles, bios, and credentials (P1)

We have real names and headshots but no titles. Needed for the `/about` team section and blog author bylines (`lib/authors.ts`, currently `{{PLACEHOLDER}}`).

For each person below, provide: role/title, one-line credential tied to proof (for example "audited contracts securing $Xm in TVL", "shipped N production systems"), and a bio link (LinkedIn) if public.
- [ ] Rampawan Kumar — Managing Director (confirmed). Credential line + LinkedIn?
- [ ] Manjit Parmar — role? credential? (he is the byline on most blog posts, so this is high priority)
- [ ] Sahil Partyal, Charil Saini, Amanpreet Singh, Dimpal Thakur, Brahmjeet Singh, Samiksha Jagdev, Aman Chaudhary — role each
- [ ] Confirm which of these people should appear publicly on the new site

## 4. Founder story (P1)

The `/about` page has a first-person founder-story block waiting for your words (marked `[FOUNDER TO FILL]`). Six to eight sentences from Rampawan: why LBM exists, what you refuse to do, the kind of work you want. We will voice-edit, not rewrite the meaning.

## 5. Images and assets (P1/P2)

| Asset | Status | Need |
|---|---|---|
| Team headshots | Several exist in the old repo (Rampawan, Manjit, Priya, Sahil, Aryan, Deepali, Gagandeep) | Confirm we may reuse them; supply fresh photos for anyone missing or outdated, ideally square, 600x600+ |
| Logo | `lbm-logo.png` in use in the header | Supply a clean SVG logo (and a white version for dark sections) if you have one |
| OG / social share images | Generated per page from a coded template | Fine as-is, or supply a branded master if you prefer |
| Blog post thumbnails | The 330 CMS posts have headlines baked into clipart art | To look like an engineering firm, replace with real product screenshots or clean abstract art. Until then we mute them. This is a CMS-side content task. |
| Client logos | None found | If any clients allow logo use, send the files plus written permission |
| Case-study screenshots | None | Real UI screenshots for the case studies you approve (see item 6) |

## 6. Case studies (P0 for the trust gate)

The site references case studies but has none real. Per the build plan, three real case studies are a launch gate. For each, we need: client name (or an agreed anonymized label such as "a Series B fintech"), the problem, what we built, one real result metric, and written permission to publish.
- [ ] Case study 1
- [ ] Case study 2
- [ ] Case study 3
The Phase 5 outreach email templates are ready to send once you pick the clients.

## 7. Credibility platforms (P1)

- [ ] Clutch profile URL + current rating and review count
- [ ] GoodFirms profile URL + rating
- [ ] Trustpilot profile URL + rating
- [ ] Any real certifications (ISO, partner status) with proof, or confirm there are none so we do not imply them

## 8. Contact and operations (P1)

- [ ] Which office addresses to publish (Canada + the two India offices), and which are sales lines only
- [ ] The new site markets US, UAE, Singapore, UK, and worldwide, but the offices are Canada and India. Confirm how to present geography honestly (for example "teams across ... , offices in Canada and India")
- [ ] Where contact-form submissions should route (email inbox, CRM, or webhook) for `/api/newsletter` and the contact form
- [ ] Newsletter: the ESP/CRM endpoint to store signups (currently logged locally in dev)

## 9. Voice / content cleanup on the CMS (P2)

From the 330-post audit (`docs/blog-content-audit.md`):
- [ ] 10 banned-word occurrences in post titles/meta (slug list in the audit) need editing in the CMS
- [ ] 210 posts have over-long paragraphs; top 15 worst are listed for a first editing pass
- [ ] Any blog metric that cannot be sourced should be removed or corrected

---

## What is already handled (no action needed)
- Phones, emails, 3 offices, 5 social profiles: extracted and ready to wire.
- Founder name and title (Rampawan Kumar, Managing Director): confirmed.
- Em dashes, duplicate hero images, the empty-blog-index crawler bug, the leaked API key, broken nav: all fixed in code.
- The site never displays an invented number or a fake logo; every gap above renders as a clearly marked placeholder until you fill it.
