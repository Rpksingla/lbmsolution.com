import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Backdrop from "@/components/Backdrop";
import { COMPANY, PRIMARY_EMAIL } from "@/lib/company";

const EMAIL = PRIMARY_EMAIL;
const PHONE = COMPANY.phones.find((p) => p.region === "India") ?? COMPANY.phones[0];
const HQ = COMPANY.offices.find((o) => o.hq) ?? COMPANY.offices[0];
const ADDRESS = `${HQ.street}, ${HQ.city}, ${HQ.region}, ${HQ.country} ${HQ.postal}`;
const UPDATED = "June 9, 2026";

export const metadata: Metadata = {
  title: "Terms and Conditions | LBM Solutions",
  description:
    "The agreement between you and LBM Solutions when you use our website or services: who can work with us, what you get, payments, confidentiality, and how we end an engagement.",
  alternates: { canonical: "https://www.lbmsolution.com/terms-and-conditions" },
  openGraph: {
    title: "Terms and Conditions | LBM Solutions",
    description:
      "The agreement between you and LBM Solutions when you use our website or services.",
    url: "https://www.lbmsolution.com/terms-and-conditions",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Terms and Conditions",
  url: "https://www.lbmsolution.com/terms-and-conditions",
  description:
    "The agreement between you and LBM Solutions when you use our website or services.",
  publisher: { "@type": "Organization", name: "LBM Solutions", url: "https://www.lbmsolution.com" },
};

export default function TermsAndConditions() {
  return (
    <>
      <Header />
      <main>
        <section className="hero bg-host">
          <Backdrop motif="hero" />
          <div className="wrap legalbody">
            <Reveal>
              <div className="kick mono">
                <span>
                  <span className="acc"></span> Legal <span className="acc"></span>
                </span>
              </div>
              <h1>Terms and Conditions</h1>
              <p className="lede">
                These terms explain the agreement between you and LBM Solutions when you visit our
                website or use our services. Your visit here means you accept everything written below.
              </p>
              <p className="mono legaldate">LAST UPDATED: {UPDATED}</p>
            </Reveal>
          </div>
        </section>

        <section>
          <div className="wrap legalbody">
            <Reveal>
              <div className="prose">
                <h2>1. About This Page</h2>
                <p>
                  This page explains the agreement between you and LBM Solutions when you visit our
                  website or use our services. These terms describe the rules that apply when you ask us
                  to build your software, website, app, or blockchain platform. If any part of this page
                  feels unclear, you can always reach out. Your visit here means you accept everything
                  written below.
                </p>

                <h2>2. The Parties Involved</h2>
                <ul>
                  <li>
                    We/Our means our team: designers, coders, project managers, and everyone who keeps
                    things moving behind the scenes.
                  </li>
                  <li>You point to the people and businesses using our services.</li>
                  <li>
                    Service refers to everything we offer: blockchain builds, mobile apps, websites,
                    backend systems, and ongoing support.
                  </li>
                </ul>

                <h2>3. Who Can Work With Us</h2>
                <p>
                  Only people aged 18 and above can contact us for project collaboration. If you represent
                  a company, you must have the authority to make business decisions on its behalf. This
                  way, we know both sides are ready to move forward.
                </p>

                <h2>4. What You Get</h2>
                <p>
                  Our services include development for mobile apps, websites, custom software, and
                  blockchain platforms. Once we agree on a project, we build it as per the shared scope.
                  You receive the output under the project contract. You get a license to use the product.
                  It stays limited to what we agreed. You cannot resell, replicate, or hand over your code
                  to others without written permission.
                </p>

                <h2>5. Your Commitments</h2>
                <ul>
                  <li>Provide clear information about your requirements.</li>
                  <li>Stay responsive to project updates.</li>
                  <li>Share access to the tools or platforms we need to complete the job.</li>
                  <li>Respect the timeline we set together.</li>
                  <li>Use the product only for legal business purposes.</li>
                </ul>
                <p>
                  Skipping any of these may impact the outcome. We stay transparent, and we expect the
                  same in return.
                </p>

                <h2>6. Payments and Pricing</h2>
                <p>
                  Once you approve the proposal, we will share the cost breakdown and payment terms. You
                  are expected to clear payments on the agreed dates. Missed payments may pause the
                  project. We reserve the right to revise our pricing with prior notice, especially if new
                  tasks are added or external factors shift the workload. Refunds are not a default option
                  unless discussed beforehand.
                </p>

                <h2>7. Confidentiality and Ownership</h2>
                <p>
                  Your business idea, documents, and designs stay safe with us. We don&apos;t share your
                  data with outsiders. Once the project wraps up and you&apos;ve paid in full, we hand over
                  the agreed deliverables. Code ownership terms stay defined in the contract. Any
                  pre-existing tools, libraries, or modules we use still belong to us.
                </p>

                <h2>8. Data Collection on Website</h2>
                <p>
                  When you browse our website, some technical details such as IP address, browser type, and
                  session activity get logged. This happens only to improve the browsing experience or
                  respond to your queries. We do not use your data for unrelated marketing. Your
                  information stays private unless required by law.
                </p>

                <h2>9. Software and Blockchain Usage</h2>
                <p>
                  If you ask us to create a blockchain solution or smart contract, your team remains
                  responsible for its usage. Every blockchain project carries legal, financial, and
                  technical risks. Our role ends after development and testing. Any misuse of the tool or
                  legal challenge after delivery will be outside our responsibility.
                </p>

                <h2>10. Ending the Relationship</h2>
                <p>
                  You may stop the project anytime by notifying us in writing. We can also stop work if
                  payments are missed, communication stops, or misuse occurs. You will receive the
                  completed work up to that point. Partial refunds depend on how far the project has
                  progressed. Both sides deserve closure and clarity.
                </p>

                <h2>11. No Promises on Outcomes</h2>
                <p>
                  We don&apos;t make promises that everything will work forever without updates. Bugs may
                  arise. Features may evolve. Tech platforms may update their terms. You will always get
                  clean, reviewed code, but no tool can avoid future changes. That&apos;s the nature of
                  tech. We support post-launch needs under separate contracts.
                </p>

                <h2>12. Updates to This Page</h2>
                <p>
                  As our services grow, we may update this page. You won&apos;t get spammed with alerts,
                  but important changes will be highlighted. Visiting the website after an update means you
                  agree to the new version.
                </p>

                <h2>13. Contact for Questions</h2>
                <p>
                  Still curious about anything here? Want to clarify something before starting your
                  project? Reach out anytime:
                </p>
                <ul>
                  <li>
                    Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                  </li>
                  <li>
                    Phone: <a href={`tel:${PHONE.tel}`}>{PHONE.display}</a>
                  </li>
                  <li>Address: {ADDRESS}</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
