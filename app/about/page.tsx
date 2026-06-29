import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Backdrop from "@/components/Backdrop";
import Icon, { type IconName } from "@/components/Icon";
import PhotoSlot from "@/components/PhotoSlot";

const NV = "NEEDS-VALIDATION: founder";

export const metadata: Metadata = {
  title: "About LBM Solutions | Blockchain Engineering Team",
  description:
    "We build blockchain infrastructure for teams who cannot afford to get it wrong. Senior engineers, audit-first delivery, offices in India, the US, and the UK. Meet the team behind LBM Solutions.",
  alternates: { canonical: "https://www.lbmsolution.com/about" },
  openGraph: {
    title: "About LBM Solutions | Blockchain Engineering Team",
    description:
      "Senior engineers, audit-first delivery, building blockchain infrastructure since 2019. Meet the team behind LBM Solutions.",
    url: "https://www.lbmsolution.com/about",
    type: "website",
  },
};

function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="label">
      <span className="mono i">{index}</span>
      <span className="mono">{title}</span>
      <span className="rule" />
    </div>
  );
}

function Nv({ children }: { children: React.ReactNode }) {
  return (
    <span className="nv" title={NV}>
      {children}
    </span>
  );
}

const METRICS: { v: React.ReactNode; p: string }[] = [
  { v: "40+", p: "Production systems shipped" },
  { v: "2019", p: "Building blockchain since" },
  { v: "3", p: "Offices across 3 countries" },
  { v: "Audit-first", p: "Security designed in, not bolted on" },
];

const BELIEFS: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "seniors",
    title: "Seniors only, on your code",
    body: "No junior teams learning on your budget. The engineer who scopes your project is the one who builds it. Fewer people, more accountability.",
  },
  {
    icon: "auditFirst",
    title: "Security is the product",
    body: "For systems that hold real money, security is not a phase at the end. We threat-model before we write production code, and we audit before anything goes live.",
  },
  {
    icon: "ownership",
    title: "Fixed scope, plain English",
    body: "A written scope and a price before you commit. No it-depends billing, no jargon used to hide uncertainty. You own the code and the IP from day one.",
  },
];

// Order: founder, then technology leadership and senior engineers, then the rest.
// One credential line each (real profiles); long bios dropped per the brief.
const TEAM: { name: string; role: string; cred: string; linkedin: string; alt: string; src?: string }[] = [
  {
    name: "Rampawan Kumar Singla",
    role: "Founder and CEO",
    cred: "IIT Delhi. Also founded WorksBuddy and Teqo Solutions, and chairs the FICCI CMSME Punjab committee.",
    linkedin: "https://www.linkedin.com/in/rampawan-kumar/",
    alt: "Rampawan Kumar Singla, Founder and CEO, LBM Solutions",
    src: "https://media.worksbuddy.ai/1781673244677-69884e38ad21-Ram_sir.png?w=339&h=508",
  },
  {
    name: "Manjit Parmar",
    role: "Chief Technology Officer",
    cred: "15+ years in software, at LBM since 2019. MCA, certified in building with Claude, agent skills, and MCP.",
    linkedin: "https://www.linkedin.com/in/manjit-parmar-024a06342/",
    alt: "Manjit Parmar, Chief Technology Officer, LBM Solutions",
    // src: "https://www.lbmsolution.com/about_us/manjit_parmar.webp",
    src: "https://media.worksbuddy.ai/1781682229042-3e82341bcd48-Manjit_Sir.png?w=339&h=508",
  },
  {
    name: "Priya Sharma",
    role: "PRODUCT MANAGER",
    cred: "Leads product strategy and execution across SaaS solutions. MCA, Punjabi University. Focused on delivering customer-centric and scalable products.",
    linkedin: "https://www.linkedin.com/in/priya-sharma-samwri/",
        // src: "https://www.lbmsolution.com/about_us/priya_sharma02.webp",
    src: "https://media.worksbuddy.ai/1781682246630-aa57acef3ec8-Priya_Mam.png?w=339&h=508",
    alt: "Priya Sharma, Product Manager, LBM Solutions",
  },
  {
    name: "Deepali Pandit",
    role: "Senior HR Manager",
    cred: "Owns talent, performance, and compliance. 8+ years in HR, POSH-certified. MBA in HR.",
    linkedin: "https://www.linkedin.com/in/deepali-pandit-hr-specialist/",
    alt: "Deepali Pandit, Senior HR Manager, LBM Solutions",
    // src: "https://www.lbmsolution.com/about_us/deepali_pandit04.webp",
    src: "https://media.worksbuddy.ai/1781682185239-ceccef23e2e9-Deepali_Mam.png?w=339&h=508",
  },
  {
    name: "Parth Panchal",
    role: "Senior Full Stack Engineer",
    cred: "6+ years building production web applications on MERN and Python Django. MSc Computer Science, Kurukshetra University.",
    linkedin: "https://www.linkedin.com/in/parth-panchal-6a453a234",
    alt: "Parth Panchal, Senior Full Stack Engineer, LBM Solutions",
    src: "https://media.worksbuddy.ai/1781682229030-6a7f6052942a-Parth_Sir.png?w=339&h=508",
  },
  {
    name: "Deepak",
    role: "Senior Flutter Developer, Team Lead",
    cred: "4+ years building production apps with Flutter, Firebase, and Web3. BTech, Punjab Technical University.",
    linkedin: "https://www.linkedin.com/in/deepak-b7a176199/",
    alt: "Deepak, Senior Flutter Developer and Team Lead, LBM Solutions",
    src: "https://media.worksbuddy.ai/1781682185211-9cab9361a415-Deepak_Sir.png?w=339&h=508",
  },
  {
    name: "Aman Kumar",
    role: "Business Development, UAE",
    cred: "Builds acquisition systems and partnerships for growth-stage clients. Based in Dubai, covering the UAE market. MBA, Chandigarh University.",
    linkedin: "https://www.linkedin.com/in/aman-kumar-07a158193/",
    alt: "Aman Kumar, Business Development for the UAE, LBM Solutions",
    src: "https://media.worksbuddy.ai/1781682144602-35d8b6449d7e-Aman_Sir.png?w=339&h=508",
  },

  // {
  //   name: "Shreya Narula",
  //   role: "Project Coordinator",
  //   cred: "Keeps SaaS delivery on track across product and engineering. MBA, LM Thapar School of Management.",
  //   linkedin: "https://www.linkedin.com/in/shreyaa009",
  //   src: "https://media.worksbuddy.ai/1781093503045-50a80ca52f8e-Shreya_Mam.png?w=339&h=501",
  //   alt: "Shreya Narula, Project Coordinator, LBM Solutions",
  // },

];

// Real LBM team and office photos (hosted on media.worksbuddy.ai).
// Captions match what each photo actually shows.
const GALLERY: { kind: string; ratio: "16/9" | "1/1" | "3/2" | "4/3"; caption: string; src: string }[] = [
  { kind: "Engineering floor", ratio: "3/2", caption: "On the Mohali engineering floor", src: "https://media.worksbuddy.ai/1781092879137-aa03cf3dbeb0-image.jpg?w=1280&h=853" },
  { kind: "Team review", ratio: "1/1", caption: "Heads together on a review", src: "https://media.worksbuddy.ai/1781093163419-9502e6e75fe8-meet.jpg?w=2268&h=4032" },
  { kind: "Reception", ratio: "4/3", caption: "Reception at the Mohali office", src: "https://media.worksbuddy.ai/1781092910235-194c4a2d751b-two.png?w=526&h=793" },
  { kind: "Team celebration", ratio: "1/1", caption: "Celebrating together at the office", src: "https://media.worksbuddy.ai/1781093225013-1b5a39d518fe-team-event.jpg?w=1280&h=853" },
  { kind: "Festival", ratio: "16/9", caption: "Festival celebrations at the office", src: "https://media.worksbuddy.ai/1781093075579-61c8ce471769-team-event__1_.jpg?w=1280&h=853" },
  { kind: "Team photo", ratio: "3/2", caption: "The LBM Solutions team", src: "https://media.worksbuddy.ai/1781093004987-38aa2f7058ac-pair-review.jpg?w=1280&h=854" },
];

const OFFICES = [
  { role: "HQ", city: "Mohali, Punjab, India", body: "Engineering and delivery. Where the systems get designed, built, and audited." },
  { role: "Client", city: "United States", body: "Client and sales. Close to North American founders and their working hours." },
  { role: "Client", city: "United Kingdom", body: "Client and sales. Coverage for UK, EU, and Middle East time zones." },
];

const WORK = [
  "Series A fintech, Singapore",
  "DeFi protocol, UAE",
  "Tokenization platform, UK",
  "Payments infrastructure, US",
  "Exchange operator, MENA",
  "Enterprise consortium, UK",
];

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LBM Solutions",
  url: "https://www.lbmsolution.com",
  foundingDate: "2019",
  founder: { "@type": "Person", name: "Rampawan Kumar Singla" },
  description:
    "Blockchain engineering firm building production systems for fintech and protocol teams. Senior engineers, audit-first delivery.",
  address: [
    { "@type": "PostalAddress", addressLocality: "Mohali", addressRegion: "Punjab", addressCountry: "IN" },
    { "@type": "PostalAddress", addressCountry: "US" },
    { "@type": "PostalAddress", addressCountry: "GB" },
  ],
};

export default function About() {
  return (
    <>
      <Header />
      <main>
        {/* 1 + 2 — Hero with outcome H1 + metrics */}
        <section className="hero bg-host abouthero relative">

           <img src="https://media.worksbuddy.ai/1781683578817-e16e42d4c2c1-teamHeading.png?w=900&h=705" alt="" className="absolute top-0 right-0 w-[800px] object-cover" />
          <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-t from-white via-white/80 to-transparent backdrop-blur-sm xl:hidden"></div>


          {/* <Backdrop motif="hero" /> */}
          <div className="wrap">
            <Reveal>
              <div className="kick mono">
                <span>
                  <span className="acc"></span> About LBM Solutions <span className="acc"></span>
                </span>
              </div>
              <h1>
                We build blockchain infrastructure for teams who{" "}
                <span className="pp">can&apos;t afford to get it wrong</span>
              </h1>
              <p className="lede !mt-6">
                Funded fintech and protocol teams come to us when the thing they are building has to
                hold real money on day one. We are senior engineers, audit-first, with delivery out of
                India and client teams in the US and the UK.
              </p>
              <div className="stats abtmetrics">
                {METRICS.map((m, i) => (
                  <div className="stat" key={i}>
                    <div className="v">{m.v}</div>
                    <p>{m.p}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 3 — Founder story */}
        <section className="alt">
          <div className="wrap ">
            <Reveal>
              <SectionLabel index="01" title="Our story" />
              <div className="founder">
                <div className="founder-photo">
                  <PhotoSlot kind="Founder portrait" ratio="4/5" src="https://media.worksbuddy.ai/1781005974537-449a292020e4-MAIN_IMAGE.png?w=600&h=750" alt="Rampawan Kumar Singla, Founder and CEO, LBM Solutions" />
                </div>
                <div className="founder-text">
                  {/*
                    FOUNDER NOTE: a first-person "Why I started LBM" rewrite of this block is
                    drafted and PENDING SIGN-OFF. Do not publish until Rampawan confirms the
                    bracketed lines. Draft + open conflict (draft says founded 2013; the rest of
                    this site says 2019) live in docs/founder-note-DRAFT.md.
                  */}
                  <h2 className="h2">
                    Started in 2019, <span className="g">for one reason.</span>
                  </h2>
                  <p>
                    LBM Solutions began because too many blockchain projects were being shipped by teams
                    who had never carried one to mainnet. Founder Rampawan Kumar Singla had watched good
                    ideas fail not on the idea, but on the engineering: a consensus bug found too late, an
                    unaudited contract drained, a vendor gone at handoff.
                  </p>
                  <blockquote className="founder-quote">
                    Most teams do not need to be told blockchain is the future. They need someone who has
                    shipped it before, will tell them what not to build, and will still be there when the
                    first incident hits production.
                  </blockquote>
                  <p>
                    That is the company we built: small, senior, and accountable for the work after launch,
                    not just up to it.
                  </p>
                  <p className="founder-sign">
                    Rampawan Kumar Singla
                    <span className="founder-role">Founder and CEO</span>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 4 — How we operate (bento, 3 beliefs) */}
        <section>
          <div className="wrap">
            <Reveal>
              <SectionLabel index="02" title="How we operate" />
              <h2 className="h2">
                Three things we will not <span className="g">compromise on.</span>
              </h2>
              <div className="bento">
                {BELIEFS.map((b) => (
                  <div className="bento-card" key={b.title}>
                    <Icon name={b.icon} className="cardico" />
                    <h3>{b.title}</h3>
                    <p>{b.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 5 — Team (chroma grid) */}
        <section className="alt">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="03" title="The team" />
              <h2 className="h2">
                The people who do <span className="g">the work.</span>
              </h2>
              <p className="subh">
                The senior team behind the engineering, with profiles you can verify on LinkedIn. Not a
                bench of contractors.
              </p>
              <div className="team">
                {TEAM.map((m) => (
                  <div className="tcard" key={m.name}>
                    <PhotoSlot kind="Team headshot" ratio="4/5" src={m.src} alt={m.alt} />
                    <h3>{m.name}</h3>
                    <p className="trole mono font-bold !text-[11px]">{m.role}</p>
                    <p className="tbio">{m.cred}</p>
                    <div className="tlinks">
                      <a
                        href={m.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${m.name} on LinkedIn`}
                      >
                        <Icon name="linkedin" /> LinkedIn
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 6 — Inside LBM (masonry gallery) */}
        <section>
          <div className="wrap">
            <Reveal>
              <SectionLabel index="04" title="Inside LBM" />
              <h2 className="h2">
                What it looks like <span className="g">from the inside.</span>
              </h2>
              <div className="masonry">
                {GALLERY.map((g, i) => (
                  <PhotoSlot key={i} kind={g.kind} ratio={g.ratio} src={g.src} alt={g.caption} caption={g.caption} className="masonry-item" />
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 7 — Offices */}
        <section className="alt">
          <div className="wrap">
            <Reveal>
              <SectionLabel index="05" title="Where we are" />
              <h2 className="h2">
                Three offices, <span className="g">one delivery standard.</span>
              </h2>
              <div className="practices">
                {OFFICES.map((o) => (
                  <div className="practice" key={o.city}>
                    <span className="mono officerole">{o.role}</span>
                    <h3>{o.city}</h3>
                    <p>{o.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 8 — Work / logo wall */}
        <section>
          <div className="wrap">
            <Reveal>
              <SectionLabel index="06" title="Who we build for" />
              <h2 className="h2">
                Funded teams, <span className="g">serious systems.</span>
              </h2>
              <p className="subh">
                We work under NDA, so most engagements are described, not named. <Nv>Real or
                  client-approved logos replace these descriptors before launch.</Nv>
              </p>
              <div className="logowall">
                {WORK.map((w) => (
                  <div className="logocell" key={w}>
                    <Nv>{w}</Nv>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 9 — Soft dual CTA (NOT a forced 1:1 conversion) */}
        <section className="softcta">
          <div className="wrap">
            <Reveal>
              <h2 className="h2">
                Want to go deeper? <span className="g">Two ways from here.</span>
              </h2>
              <p className="subh">
                No forms, no pressure. Talk to an engineer, or look at the work first. Whatever helps you
                decide.
              </p>
              <div className="softcta-row">
                <a href="/contact" className="btn btn-pri">
                  Book a 30-minute call
                </a>
                <Link href="/case-studies" className="btn btn-ghost">
                  See our work
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
    </>
  );
}
