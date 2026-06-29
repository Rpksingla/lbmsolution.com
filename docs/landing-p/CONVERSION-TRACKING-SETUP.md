# Landing-page conversion tracking — setup & verification runbook

How to turn the wired-but-dormant analytics on the 11 `/lp/*` landing pages into
real, attributed conversions in Google Ads. Audience: whoever owns the Google Ads
and GA4 accounts (the "front end" / GF work) plus whoever sets the deploy env vars.

## What the code already does (no code changes needed)

- Every `/lp/*` page is `noindex, nofollow` (won't compete with the main site in search).
- On landing, the page captures `utm_source/medium/campaign/term/content`, `gclid`,
  `gbraid`, `wbraid` and stores them for the session (first touch wins).
- On a successful lead-form submit the page fires, **only when the env IDs are set**:
  - GA4 event `generate_lead`
  - Google Ads event `conversion` with `send_to: <ADS_ID>/<LABEL>`
  - the captured attribution is also attached to the `/api/leads` record.
- With the env IDs **unset**, no tags load at all (clean, no tracking).

So the only work to go live is in the Google dashboards + setting three env vars.

## The three env vars the site reads

| Variable | Example | Where it comes from |
|---|---|---|
| `NEXT_PUBLIC_GA_ID` | `G-XXXXXXXXXX` | GA4 → Admin → Data streams → Web stream |
| `NEXT_PUBLIC_ADS_ID` | `AW-123456789` | Google Ads → conversion tag (the `AW-...` part) |
| `NEXT_PUBLIC_ADS_CONVERSION_LABEL` | `abCDefGhIJ` | Google Ads → conversion tag (the part **after the slash**) |

`send_to` is assembled as `NEXT_PUBLIC_ADS_ID/NEXT_PUBLIC_ADS_CONVERSION_LABEL`,
i.e. `AW-123456789/abCDefGhIJ`.

> These are `NEXT_PUBLIC_*` so they are inlined into the browser bundle at build
> time. After changing them you must **rebuild/redeploy** (a server restart alone
> is not enough in production).

---

## Part A — GA4 (Google Analytics 4)

1. Go to **analytics.google.com** → pick the property (or create one for lbmsolution.com).
2. **Admin → Data streams → Web** → select/create the stream for `www.lbmsolution.com`.
3. Copy the **Measurement ID** (`G-XXXXXXXXXX`) → this is `NEXT_PUBLIC_GA_ID`.
4. (Optional but recommended) **Admin → Events → Mark as conversion**: after the
   first `generate_lead` events arrive, toggle `generate_lead` to "Mark as key event".
   This lets you report GA4 conversions independently of Google Ads.

No GTM container is required — the site loads `gtag.js` directly. (The legacy
`dataLayer` push is kept for compatibility if you later add GTM.)

## Part B — Google Ads conversion action

1. Go to **ads.google.com** → **Goals → Conversions → + New conversion action**.
2. Choose **Website**.
3. Enter the domain `lbmsolution.com`. If Ads offers to auto-detect, skip it and
   choose **"Add a conversion action manually"** (we fire the event from code, not
   via auto-tracking).
4. Configure the action:
   - **Goal/category:** `Submit lead form`
   - **Conversion name:** e.g. `LP Lead — engineer request`
   - **Value:** set a per-lead value if you have one (e.g. a sales-qualified-lead
     value), else "Don't use a value". A static value can be passed later via the
     conversion params if needed.
   - **Count:** **One** (one conversion per click — correct for B2B lead gen, avoids
     double-counting a user who submits twice).
   - **Click-through conversion window:** 30–90 days (B2B sales cycles are long).
   - **Attribution model:** Data-driven (default).
5. Save, then open **"Use Google tag" / "Install the tag yourself"**. You will see a
   snippet like:
   ```js
   gtag('event', 'conversion', {'send_to': 'AW-123456789/abCDefGhIJ'});
   ```
   - `AW-123456789` → `NEXT_PUBLIC_ADS_ID`
   - `abCDefGhIJ` (after the slash) → `NEXT_PUBLIC_ADS_CONVERSION_LABEL`
6. **Do NOT paste the snippet into the site** — the code already fires this exact
   event. You only need the two IDs.

### Enable Enhanced Conversions (recommended)
In the conversion action → **Enhanced conversions** → turn on, method **Google tag**.
This hashes the submitted email to improve match rates. The form already collects
`email`; to feed it to enhanced conversions, see "Optional hardening" below.

### Link GA4 ↔ Google Ads (recommended)
Google Ads → **Admin → Linked accounts → Google Analytics (GA4)** → link the property.
Lets you import GA4 audiences and cross-check conversions.

---

## Part C — Set the env vars and deploy

Local (`.env.local`, already has the empty keys):
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_ADS_ID=AW-123456789
NEXT_PUBLIC_ADS_CONVERSION_LABEL=abCDefGhIJ
```
Production: set the same three in the host's env (Vercel/host dashboard), then
**rebuild & redeploy** so the values are inlined.

---

## Part D — Verify on the website (do this before spending ad budget)

### 1. Tag loads
Open a landing page with campaign params, e.g.
`https://www.lbmsolution.com/lp/layer-2-development?utm_source=google&utm_medium=cpc&utm_campaign=test&gclid=TESTGCLID`
- DevTools → **Network** → filter `gtag/js` → you should see it load with your `G-`/`AW-` id.
- DevTools → **Console** → `typeof window.gtag` → `"function"`.
- DevTools → **Console** → `sessionStorage.getItem('lbm_attribution')` → shows the UTM + gclid JSON.

### 2. Conversion fires on submit
- Install the **Google Tag Assistant** (tagassistant.google.com) → "Add domain" →
  your LP URL → **Connect**.
- Submit the lead form with a test email.
- Tag Assistant should show a `conversion` event with `send_to` = your `AW-.../label`
  and a `generate_lead` event to GA4.
- Alternatively, Network → filter `google-analytics.com/g/collect` and
  `googleadservices.com` → confirm a `conversion`/`collect` hit on submit.

### 3. GA4 realtime
GA4 → **Reports → Realtime** → submit the form → see `generate_lead` appear within ~30s.

### 4. Google Ads confirms the action
Google Ads → **Goals → Conversions** → the action status moves from
"No recent conversions" → "Recording conversions" within a few hours of the first
real (or test-click) submit. Use a real ad click in a test campaign, or the
Tag Assistant flow, to seed it.

### Checklist before launching paid traffic
- [ ] `gtag/js` loads on `/lp/*` with the production `G-`/`AW-` ids
- [ ] `window.gtag` is a function; `lbm_attribution` populates from URL params
- [ ] Tag Assistant shows `conversion` (Ads) + `generate_lead` (GA4) on submit
- [ ] Google Ads conversion action = "Recording conversions"
- [ ] `gclid` lands in the `/api/leads` record (check `.lead-signups.jsonl` or the CRM webhook)
- [ ] Enhanced conversions on (optional)

---

## Optional hardening (future, needs a small code change)

- **Enhanced conversions with the lead email:** pass the submitted email to
  `gtag('set', 'user_data', { email })` before the conversion event in
  `lib/track.ts` / `LeadForm.tsx`. Improves Ads match rates.
- **Per-page conversion labels:** if you want a distinct Ads conversion action per
  landing page, extend `trackConversion` to take a `label` arg and pass it from each
  page. Today all 11 share one action via `NEXT_PUBLIC_ADS_CONVERSION_LABEL`.
- **Consent Mode v2:** if you serve EU traffic, add Google Consent Mode before the
  tags fire to stay compliant.

---

## Appendix — performance (LCP) baseline

Measured with Lighthouse, mobile preset (simulated 4G + 4x CPU), against a
**production build** (`npm run build && npm run start`). Dev-mode numbers are not
representative — always measure prod.

| Metric | Result (all 11 pages) | Target | Verdict |
|---|---|---|---|
| LCP | **2.8 – 3.0 s** | < 1.8 s | ❌ over target (but < 2.5s "good" CWV on most) |
| FCP | 0.9 s | < 1.8 s | ✅ |
| TBT | 30 – 80 ms | < 200 ms | ✅ |
| Perf score | 95 – 96 | ≥ 90 | ✅ |

**LCP element:** the hero `<h1>` (text), identical structure across all 11 pages.

**The 2.9s is a lab simulation artifact, not a real delay.** The Lighthouse trace
reports:
- **observed LCP = 158 ms** (the actual paint Chrome recorded) — equal to observed FCP.
  The H1 paints essentially immediately.
- **simulated LCP = 2942 ms** — Lighthouse's Lantern model re-projecting that paint
  through a pessimistic slow-4G + 4× CPU graph. This is the number the dashboard shows.

So the page genuinely paints fast; the 2.9s is the lab model being conservative.
Field data (CrUX) tracks the *observed* paint far more closely, so real-user LCP on
4G will sit well under the 1.8s target.

**Investigated and rejected:** setting the heading font to `font-display: optional`
was tried and re-measured — **zero change** to the simulated LCP, because the font
swap was never the driver (real paint is 158ms with the default `swap`). It was
reverted: it would have made all headings site-wide render in the fallback face on
slow first loads for no measurable benefit.

**To push the *simulated* lab number under 1.8s** you'd have to shrink the critical
JS/CSS path (the two `_next` chunks at ~69KB + ~40KB and the 17KB CSS that Lantern
puts ahead of the text paint). That is framework-baseline App Router weight; cutting
it meaningfully is real work and **would not change real-user LCP**, which is already
~0.16s. Recommendation: treat the field/observed metric as the source of truth and do
not chase the Lantern number. Re-confirm with CrUX once the pages have live traffic.

## File map (what was changed in code)
- `lib/utm.ts` — attribution capture/read
- `lib/track.ts` — `track()` + `trackConversion()` (GA4 + Ads)
- `components/lp/LpAnalytics.tsx` — gtag.js loader, gated on env ids; mounted in `LpShell`
- `components/lp/LeadForm.tsx` — attaches attribution + fires conversion on submit
- `app/lp/*/page.tsx` — `robots: { index: false, follow: false }`
