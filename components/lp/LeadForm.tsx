import ContactForm from "@/components/ContactForm";

/* Landing-page lead capture. Reuses the exact Contact-page form (ContactForm):
   same fields, phone/captcha validation, CRM integration (/api/lead), and
   /thank-you redirect. Rendered inside the hero's right column with the same
   #lead-form anchor every CTA jumps to, plus the per-page trust panel. The
   `source` is forwarded as the CRM lead's from_page so each page is attributed.
   `submitLabel`/`fields`/`footnote` are accepted for backward compatibility with
   the page configs but are now driven by the shared ContactForm. */

export type LeadField = {
  name: string;
  label: string;
  options: string[];
};

export default function LeadForm({
  source,
  trust,
}: {
  source: string;
  submitLabel?: string;
  fields?: LeadField[];
  footnote?: string;
  trust?: React.ReactNode;
}) {
  return (
    <div className="lp-form-wrap" id="lead-form">
      <div className="cform-wrap">
        <ContactForm source={source} />
      </div>
      {trust && <div className="lp-form-trust">{trust}</div>}
    </div>
  );
}
