import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import { COMPANY } from "@/lib/company";

const BASE = "https://www.lbmsolution.com";

// Short 2-letter badge codes for the phone list. Data keeps full region names
// (used by OrgJsonLd areaServed); these are display-only.
const REGION_CODE: Record<string, string> = { US: "US", UK: "UK", India: "IN", UAE: "AE" };

export const metadata: Metadata = {
  title: "Contact LBM Solutions | Book an architecture review",
  description:
    "Talk to the engineers who build and audit AI and blockchain systems. Offices in Canada and India, serving fintech and B2B SaaS teams worldwide.",
  alternates: { canonical: `${BASE}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="contact">
        <div className="wrap">
          <section className="contact-top">
            <div className="ctop-copy">
              <span className="kick mono">
                <span className="br"></span> Contact <span className="br"></span>
              </span>
              <h1>Talk to the engineers who build and audit these systems</h1>
              <p className="subh">
                Send a short brief. We reply within one business day with next steps or a scoping
                call slot. No sales sequence.
              </p>

              <div className="cmeta !hidden lg:!inline-flex">
                <div>
                  <span className="mono lbl">Email</span>
                  <a href={`mailto:${COMPANY.emails.general}`}>
                    <span className="cm-ic !border-0 "><Icon name="mail" /></span>
                    {COMPANY.emails.general}
                  </a>
                  <a href={`mailto:${COMPANY.emails.business}`}>
                    <span className="cm-ic !border-0"><Icon name="mail" /></span>
                    {COMPANY.emails.business}
                  </a>
                </div>
                <div>
                  <span className="mono lbl">Phone</span>
                  {COMPANY.phones.map((p) => (
                    <a key={p.tel} href={`tel:${p.tel}`}>
                      <span className="cm-badge mono">{REGION_CODE[p.region] ?? p.region}</span>
                      {p.display}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="cform-wrap">
              <ContactForm />
            </div>
          </section>

          <section className="offices" aria-label="Offices">
            <div className="bsec-head">
              <span className="mono lbl">Offices</span>
              <span className="rule" />
            </div>
            <div className="office-grid">
              {COMPANY.offices.map((o) => (
                <div className="office" key={`${o.city}-${o.postal}`}>
                  <div className="office-top">
                    <span className="office-ic"><Icon name="pin" /></span>
                    {o.hq ? <span className="hq mono">HQ</span> : null}
                  </div>
                  <h3>{o.city}</h3>
                  <p className="ctry mono">{o.country}</p>
                  <p>{o.street}</p>
                  <p>
                    {o.region} {o.postal}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
