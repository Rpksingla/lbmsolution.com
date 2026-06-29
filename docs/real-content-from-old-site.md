# Real content extracted from the old site

Source: the production codebase at `/Users/rampawankumar/Downloads/lbm-website` (authoritative) plus live lbmsolution.com. Everything below is real, published company data and is safe to use on the new site now. Items needing confirmation are in `PENDING-FROM-FOUNDER.md`.

## Contact details (use as-is)

**Emails**
- General: info@lbmsolution.com
- Business: business@lbmsolution.com

**Phone numbers**
| Region | Number | tel: |
|---|---|---|
| US | +1 (218) 300-3442 | tel:+12183003442 |
| UK | +44 7458 081818 | tel:+447458081818 |
| India | +91 84484 43318 | tel:+918448443318 |
| UAE | +971 50 466 8497 | tel:+971504668497 |

**Offices (3)**
- British Columbia, Canada: 7404 King George Blvd, Suite 200, Surrey, British Columbia, V3W 1N6, Canada
- Mohali, India (HQ): Plot No E 275, 3rd Floor, Phase 8-A, Industrial Area, Sahibzada Ajit Singh Nagar (Mohali), Punjab 140308
- Bengaluru, India: Arakere, Bannerghatta Road, Bangalore, Karnataka 560076

> Note: offices are Canada and India. The new site currently markets US, UAE, Singapore, UK, and worldwide. The phone numbers cover US/UK/UAE/India. Confirm which office addresses to publish vs which are sales lines only (see pending doc).

## Social profiles (use as-is)
- LinkedIn: https://www.linkedin.com/company/lbm-solutions/
- X / Twitter: https://x.com/LBMsolutions_  (older handle https://twitter.com/lbm_solutions)
- Facebook: https://www.facebook.com/lbmsolutionspvtltd
- Instagram: https://www.instagram.com/lbmsolutions/
- YouTube: https://www.youtube.com/@LBMSolutions

## People (real, photos exist in old repo)

**Founder / leadership**
- Mr. Rampawan Kumar, Managing Director. Photo: `public/about_us/ramsir.png` (also `ramsir01.png`).

**Team members with real names (from the old team page)**
Manjit Parmar, Sahil Partyal, Charil Saini, Amanpreet Singh, Dimpal Thakur, Brahmjeet Singh, Samiksha Jagdev, Aman Chaudhary.

**Headshots available in the old repo (`public/about_us/`)**
`ramsir.png`, `manjit_parmar.webp`, `priya_sharma02.webp`, `sahil_partyal.webp`, `aryan.jpg/.webp`, `deepali_pandit04.webp`, `gagandeep.webp`, `recp01.webp`, `business.webp`, `d_leader01.webp`.

> Roles/titles are NOT in the old data (names + photos only). Roles + one-line credentials are pending (see pending doc). This directly fills `lib/authors.ts` and the team section.

## Credibility signals (real presence, details to confirm)
- Review platforms referenced on the old site: Clutch, GoodFirms, Trustpilot. (The spam-directory badges were removed in emergency fix EF-13.)
- Experience claim on the old About page: "more than 5 years" (implies founding around 2019 to 2020). This CONTRADICTS the "Since 2015" placeholder currently on the new site. Confirm the real founding year.

## Where this maps in the new site
| Real content | New site target |
|---|---|
| Phones, emails, 3 offices | `/contact` page + `components/Footer.tsx` + Organization JSON-LD in `app/layout.tsx` |
| Social profiles | `Footer` + Organization `sameAs` array |
| Rampawan Kumar (MD) + photo | `/about` founder block, Organization `founder` |
| Team names + headshots | `/about` team section, blog `lib/authors.ts` byline roles |
| Clutch / GoodFirms / Trustpilot | trust strip + Review/AggregateRating schema (once ratings confirmed) |

## Build steps once the pending items land
1. Add a typed `lib/company.ts` (single source: name, phones, emails, offices, socials, founding year) and reference it from Footer, Contact, and the Organization JSON-LD.
2. Drop the confirmed founding year into the footer/hero "since" line (remove the "Since 2015" placeholder).
3. Migrate the real headshots into `public/team/` (re-export to WebP via the existing image pipeline) and wire the team section + author bylines.
4. Replace hero ticker / counter stats with confirmed real numbers, or remove the unconfirmed ones.
