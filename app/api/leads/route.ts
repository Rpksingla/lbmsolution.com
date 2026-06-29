import { appendFileSync } from "node:fs";
import { join } from "node:path";

/**
 * Stores landing-page lead-form submissions with their source page.
 * Production: set LEADS_WEBHOOK_URL (CRM endpoint) [NEEDS-VALIDATION: ops].
 * Fallback: appends to .lead-signups.jsonl (gitignored) so no lead is lost in dev.
 *
 * Accepts a flexible field set (email is required); the rest are the per-page
 * qualifier dropdowns defined in each landing page's LeadForm.
 */
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const email = body?.email;
  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ ok: false, error: "invalid email" }, { status: 400 });
  }
  const { source, ...fields } = body;
  const record = {
    email,
    source: String(source ?? "unknown"),
    fields,
    at: new Date().toISOString(),
  };

  const hook = process.env.LEADS_WEBHOOK_URL;
  if (hook) {
    const r = await fetch(hook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(record),
    });
    if (!r.ok) return Response.json({ ok: false }, { status: 502 });
  } else {
    appendFileSync(join(process.cwd(), ".lead-signups.jsonl"), JSON.stringify(record) + "\n");
  }
  return Response.json({ ok: true });
}
