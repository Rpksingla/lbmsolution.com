/**
 * Single source of truth for LBM Solutions company data.
 * Every value here is real, carried over from the production site
 * (see docs/real-content-from-old-site.md). Footer, /contact, and the
 * Organization JSON-LD all read from this file. Do not hardcode these elsewhere.
 */

export type Phone = { region: string; display: string; tel: string };
export type Office = {
  city: string;
  region: string;
  country: string;
  street: string;
  postal: string;
  hq?: boolean;
};

export const COMPANY = {
  name: "LBM Solutions",
  // Implied by the registered social handle (facebook.com/lbmsolutionspvtltd).
  legalName: "LBM Solutions Pvt. Ltd.",
  url: "https://www.lbmsolution.com",
  logo: "https://www.lbmsolution.com/lbm-logo.png",
  founder: "Rampawan Kumar",
  founderTitle: "Managing Director",
  tagline:
    "Custom AI and blockchain engineering for B2B SaaS scale-ups and fintech teams.",

  emails: {
    general: "info@lbmsolution.com",
    business: "business@lbmsolution.com",
  },

  phones: [
    { region: "US", display: "+1 (218) 300-3442", tel: "+12183003442" },
    { region: "UK", display: "+44 7458 081818", tel: "+447458081818" },
    { region: "India", display: "+91 84484 43318", tel: "+918448443318" },
    { region: "UAE", display: "+971 50 466 8497", tel: "+971504668497" },
  ] as Phone[],

  offices: [
    {
      city: "Mohali",
      region: "Punjab",
      country: "India",
      street:
        "Plot No E 275, 3rd Floor, Phase 8-A, Industrial Area, Sahibzada Ajit Singh Nagar",
      postal: "140308",
      hq: true,
    },
    {
      city: "Surrey",
      region: "British Columbia",
      country: "Canada",
      street: "7404 King George Blvd, Suite 200",
      postal: "V3W 1N6",
    },
    {
      city: "Bengaluru",
      region: "Karnataka",
      country: "India",
      street: "Arakere, Bannerghatta Road",
      postal: "560076",
    },
  ] as Office[],

  socials: {
    linkedin: "https://www.linkedin.com/company/lbm-solutions/",
    x: "https://x.com/LBMsolutions_",
    facebook: "https://www.facebook.com/lbmsolutionspvtltd",
    instagram: "https://www.instagram.com/lbmsolutions/",
    youtube: "https://www.youtube.com/@LBMSolutions",
  },
} as const;

export const SAME_AS: string[] = Object.values(COMPANY.socials);
export const PRIMARY_PHONE: Phone = COMPANY.phones[0];
export const PRIMARY_EMAIL = COMPANY.emails.general;
