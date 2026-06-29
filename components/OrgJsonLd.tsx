import { COMPANY, SAME_AS } from "@/lib/company";

/** Sitewide Organization schema (real data). Rendered once in the root layout. */
export default function OrgJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    url: COMPANY.url,
    logo: COMPANY.logo,
    description: COMPANY.tagline,
    founder: { "@type": "Person", name: COMPANY.founder, jobTitle: COMPANY.founderTitle },
    email: COMPANY.emails.general,
    sameAs: SAME_AS,
    address: COMPANY.offices.map((o) => ({
      "@type": "PostalAddress",
      streetAddress: o.street,
      addressLocality: o.city,
      addressRegion: o.region,
      postalCode: o.postal,
      addressCountry: o.country,
    })),
    contactPoint: COMPANY.phones.map((p) => ({
      "@type": "ContactPoint",
      telephone: p.tel,
      contactType: "sales",
      areaServed: p.region,
      email: COMPANY.emails.business,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
