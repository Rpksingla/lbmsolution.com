import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Backdrop from "@/components/Backdrop";
import { COMPANY, PRIMARY_EMAIL } from "@/lib/company";

const EMAIL = PRIMARY_EMAIL;
const PHONE = COMPANY.phones.find((p) => p.region === "India") ?? COMPANY.phones[0];
const UPDATED = "June 9, 2026";

export const metadata: Metadata = {
  title: "Privacy Policy | LBM Solutions",
  description:
    "How LBM Solutions collects, uses, protects, and handles personal and business data across our website and service delivery. Your rights, our security measures, and how to reach us.",
  alternates: { canonical: "https://www.lbmsolution.com/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | LBM Solutions",
    description:
      "How LBM Solutions collects, uses, protects, and handles personal and business data across our website and service delivery.",
    url: "https://www.lbmsolution.com/privacy-policy",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy",
  url: "https://www.lbmsolution.com/privacy-policy",
  description:
    "How LBM Solutions collects, uses, protects, and handles personal and business data across our website and service delivery.",
  publisher: { "@type": "Organization", name: "LBM Solutions", url: "https://www.lbmsolution.com" },
};

export default function PrivacyPolicy() {
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
              <h1>Privacy Policy</h1>
              <p className="lede">
                LBM Solutions values the privacy of every visitor, client, and partner. This policy
                explains how we collect, use, protect, and handle personal and business-related data
                across our website and service delivery systems.
              </p>
              <p className="mono legaldate">LAST UPDATED: {UPDATED}</p>
            </Reveal>
          </div>
        </section>

        <section>
          <div className="wrap legalbody">
            <Reveal>
              <div className="prose">
                <h2>1. Introduction</h2>
                <p>
                  LBM Solutions values the privacy of every visitor, client, and partner. This Privacy
                  Policy outlines how we collect, use, protect, and handle personal and business-related
                  data through our website and service delivery systems. This policy applies to all users
                  interacting with our platform and using our digital services, including but not limited
                  to blockchain development, mobile applications, websites, and software solutions.
                </p>

                <h2>2. Information Collection</h2>
                <p>
                  We collect information through our website, forms, emails, client meetings, and service
                  interactions. Information falls under the following categories:
                </p>
                <ul>
                  <li>
                    <strong>Personal Identifiable Information (PII):</strong> This includes name, email,
                    contact number, company name, job title, and location. We use this data to build
                    proper communication and business connections. Each item collected serves a specific
                    purpose.
                  </li>
                  <li>
                    <strong>Project-Specific Information:</strong> This includes details about your app,
                    software, or website requirements. Our team uses this to understand the technical
                    scope. This helps to keep the project clear and aligned with your goal.
                  </li>
                  <li>
                    <strong>Technical and Usage Data:</strong> IP address, browser, operating system,
                    visited pages, session time, and cookies. These details give us insights into how
                    users move through the website. We do not match this with personal identity.
                  </li>
                  <li>
                    <strong>Communications Data:</strong> Emails, chats, call notes, and messages shared
                    through official channels. These records support project progress and reduce
                    confusion. We protect this information like other private data.
                  </li>
                </ul>

                <h2>3. Purpose of Data Usage</h2>
                <p>
                  Data collected is used for operational, analytical, legal, and business development
                  purposes:
                </p>
                <ul>
                  <li>
                    <strong>Service Fulfillment:</strong> Data helps us take requests, start work, share
                    updates, and manage accounts. This gives a smooth flow from the first step to project
                    delivery. You stay informed at each stage.
                  </li>
                  <li>
                    <strong>Client Communication:</strong> We share timelines, support info, bills, and
                    project updates. This keeps things clear and helps you stay aware of the progress. No
                    message is sent without reason.
                  </li>
                  <li>
                    <strong>Performance Improvement:</strong> Data helps us improve our site, fix issues,
                    and follow user patterns. We look at simple numbers, not user identities. No personal
                    tracking takes place.
                  </li>
                  <li>
                    <strong>Marketing and Outreach:</strong> Newsletters, updates, or special offers may
                    reach your inbox. You can choose to stop these at any time. We do not flood emails or
                    send unrelated content.
                  </li>
                  <li>
                    <strong>Legal Compliance:</strong> Data is used to meet tax rules, legal checks, or
                    official requests. We follow laws without storing more than required. Your rights
                    remain in place during all legal steps.
                  </li>
                </ul>
                <p>No data is used for unlawful profiling or decision-making.</p>

                <h2 id="cookies">4. Cookies and Tracking Technologies</h2>
                <p>
                  Our website uses cookies and related technologies to improve the user experience. These
                  include:
                </p>
                <ul>
                  <li>
                    <strong>Session Cookies:</strong> These store settings for a short time during your
                    visit. After you leave the page, they get cleared automatically. These cookies do not
                    record private data.
                  </li>
                  <li>
                    <strong>Persistent Cookies:</strong> To retain information like language preferences
                    and login sessions. You can delete them anytime from your browser. These are placed
                    only for ease of use.
                  </li>
                  <li>
                    <strong>Analytics Tools:</strong> We use tools like Google Analytics and Meta Pixel to
                    understand traffic behavior, geographic insights, and content interaction. The tools
                    collect data in a group form. No single person gets tracked.
                  </li>
                </ul>
                <p>
                  Users can disable cookies from their browser settings without affecting core site
                  functionalities.
                </p>

                <h2>5. Data Sharing and Third Parties</h2>
                <p>
                  We do not sell, lease, or rent your personal information to third parties. However, in
                  certain scenarios, limited data is shared with third-party partners under strict
                  confidentiality:
                </p>
                <ul>
                  <li>
                    <strong>Cloud Storage Providers</strong> like AWS or Google Cloud store project data.
                    These systems have strict rules. Only our team gets access to this data.
                  </li>
                  <li>
                    <strong>Marketing Platforms</strong> such as Mailchimp, Meta, or LinkedIn support our
                    client messages. Your email may be used for updates or offers. We never send spam or
                    share contact lists.
                  </li>
                  <li>
                    <strong>CRM and Project Management Tools</strong> are used for project updates and
                    client onboarding. Only trained staff manage these tools. No personal use takes place.
                  </li>
                  <li>
                    <strong>Compliance Services,</strong> such as payment processors, tax auditors, or
                    legal advisors, may view data when rules demand. Contracts hold them to privacy. No
                    misuse can happen through these links.
                  </li>
                </ul>
                <p>
                  All partners are contractually obligated to maintain the confidentiality and security of
                  your data.
                </p>

                <h2>6. Data Storage and Retention</h2>
                <p>
                  Your data is stored in secure cloud servers with restricted access. All data
                  transmission is encrypted using SSL protocols. Access is granted only to authorized
                  personnel working on active engagements. Data is retained as long as needed to fulfill
                  the purpose it was collected for, including:
                </p>
                <ul>
                  <li>Completion of the project</li>
                  <li>Legal and accounting requirements</li>
                  <li>Ongoing service or maintenance agreements</li>
                </ul>
                <p>
                  Redundant data is permanently deleted from our systems during scheduled clean-up cycles.
                </p>

                <h2>7. Your Rights as a Data Subject</h2>
                <p>
                  You retain full control over your personal information. As per GDPR and other privacy
                  frameworks, you have the right to:
                </p>
                <ul>
                  <li>
                    <strong>Access Your Data:</strong> Request a copy of the information stored by us.
                  </li>
                  <li>
                    <strong>Rectify Errors:</strong> Correct any inaccurate or outdated details.
                  </li>
                  <li>
                    <strong>Erase Data:</strong> Request deletion of your data, subject to legal
                    constraints.
                  </li>
                  <li>
                    <strong>Withdraw Consent:</strong> Revoke any previously given permissions for data
                    use.
                  </li>
                  <li>
                    <strong>Limit Processing:</strong> Object to or limit how your data is processed in
                    certain scenarios.
                  </li>
                </ul>
                <p>
                  Requests can be made by contacting our Data Protection Officer (DPO) at the address
                  below.
                </p>

                <h2>8. International Data Transfers</h2>
                <p>
                  Our infrastructure may be hosted or backed up across different regions, including servers
                  located in the United States, Europe, or Asia. If your data is processed outside your
                  country, it remains protected under applicable international data protection regulations
                  such as GDPR, and Standard Contractual Clauses are applied where required.
                </p>

                <h2>9. Data Security</h2>
                <p>We follow industry best practices to secure user data. Security measures include:</p>
                <ul>
                  <li>Encrypted storage of sensitive data</li>
                  <li>Role-based access control (RBAC)</li>
                  <li>Periodic vulnerability scans and penetration testing</li>
                  <li>Multi-factor authentication for internal systems</li>
                  <li>Firewall and intrusion detection systems</li>
                </ul>
                <p>
                  Despite strong safeguards, no system is completely immune from breaches. In case of a
                  data breach, you will be notified in accordance with applicable laws.
                </p>

                <h2>10. Children&apos;s Privacy</h2>
                <p>
                  Our services are intended for businesses and individuals aged 18 or older. We do not
                  knowingly collect or store data from children under the age of 18. If you believe that a
                  minor has submitted information to us, please contact us for immediate removal.
                </p>

                <h2>11. Policy Updates</h2>
                <p>
                  This Privacy Policy may be updated from time to time to reflect changes in technology,
                  legal requirements, or business practices. Any changes will be posted on this page along
                  with an updated effective date. You are advised to review this page regularly.
                  Significant changes will be communicated through email or a notification on our website.
                </p>

                <h2>12. Contact Us</h2>
                <p>For questions, feedback, or data-related requests, please reach out to:</p>
                <ul>
                  <li>
                    Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                  </li>
                  <li>
                    Phone: <a href={`tel:${PHONE.tel}`}>{PHONE.display}</a>
                  </li>
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
