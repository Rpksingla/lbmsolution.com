# Founder note — DRAFT, pending sign-off (DO NOT PUBLISH)

A first-person "Why I started LBM" note for the About page founder block. Drafted
from Rampawan's real profile so it is true and on-voice. **The four bracketed lines
are his to confirm or rewrite in his own words. Do not publish until he signs off.**

It is intended to replace the current third-person "Our story" block in
`app/about/page.tsx` once confirmed. It is NOT in the rendered page or in
`content/pages/about.md`, so it does not reach the site, sitemap, or llms.txt.

## ⚠️ Open conflict to resolve before publishing
- This draft says **"I started LBM Solutions in 2013 [CONFIRM YEAR]"**.
- The rest of the site says **2019** (hero metric "Building blockchain since 2019",
  the live founder block, the `Organization` JSON-LD `foundingDate`, and the About
  meta description).
- Pick one year. If 2013 is correct, the 2019 references across the site must be
  updated together (flag to whoever owns the site copy).

## Draft copy

> **Why I started LBM**
>
> I started LBM Solutions in 2013 [CONFIRM YEAR]. I'm an engineer by training, with a
> degree in information technology from IIT Delhi, and I built this company from the
> ground up because [the reason, in your words: what frustrated you about the work you
> saw, or what you wanted to build].
>
> Since then we've grown into a team working across blockchain, AI, and software,
> serving startups, enterprises, and governments. Along the way I also founded Teqo
> Solutions, our B2B growth firm in Vancouver, and WorksBuddy, an AI operating system
> built on a team of specialized agents.
>
> What I won't do is [what you refuse to do: ship code you wouldn't trust, take work
> outside your expertise, sell an audit you don't believe a client needs]. The work I
> want is [the work you want: serious teams building things that have to hold up under
> real money and real users].
>
> When a team finishes a project with us, I want them to feel [the feeling: that the
> engineering is solid and they don't have to think about it again].
>
> — Rampawan Kumar Singla, Founder and CEO

## Sign-off checklist
- [ ] Founding year resolved (2013 vs 2019) and made consistent across the site
- [ ] "the reason" line written in his words
- [ ] "what I won't do" line written in his words
- [ ] "the work I want" line written in his words
- [ ] "the feeling" line written in his words
- [ ] Then: swap into the founder block in `app/about/page.tsx`, mirror into
      `content/pages/about.md`, run `npm run llms`, voice-qa, and the gates.
