import { appendFileSync } from "node:fs";
import { join } from "node:path";

/**
 * Stores newsletter signups with their source.
 * Production: set NEWSLETTER_WEBHOOK_URL (ESP/CRM endpoint) [NEEDS-VALIDATION: ops].
 * Fallback: appends to .newsletter-signups.jsonl (gitignored) so no signup is lost in dev.
 */
export async function POST(req: Request) {
  const { email, source } = await req.json().catch(() => ({}));
  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ ok: false, error: "invalid email" }, { status: 400 });
  }
  const record = { email, source: String(source ?? "unknown"), at: new Date().toISOString() };

  const hook = process.env.NEWSLETTER_WEBHOOK_URL;
  if (hook) {
    const r = await fetch(hook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(record),
    });
    if (!r.ok) return Response.json({ ok: false }, { status: 502 });
  } else {
    appendFileSync(join(process.cwd(), ".newsletter-signups.jsonl"), JSON.stringify(record) + "\n");
  }
  return Response.json({ ok: true });
}
