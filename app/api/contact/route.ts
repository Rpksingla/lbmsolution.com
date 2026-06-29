import { appendFileSync } from "node:fs";
import { join } from "node:path";

/**
 * Stores contact/brief submissions. Production: set CONTACT_WEBHOOK_URL
 * (CRM/inbox endpoint) [NEEDS-VALIDATION: ops]. Fallback: appends to a
 * gitignored jsonl so nothing is lost in dev.
 */
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const { email, company, budget, timeline, message } = body ?? {};
  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ ok: false, error: "invalid email" }, { status: 400 });
  }
  const record = {
    email,
    company: String(company ?? ""),
    budget: String(budget ?? ""),
    timeline: String(timeline ?? ""),
    message: String(message ?? "").slice(0, 4000),
    at: new Date().toISOString(),
  };

  const hook = process.env.CONTACT_WEBHOOK_URL;
  if (hook) {
    const r = await fetch(hook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(record),
    });
    if (!r.ok) return Response.json({ ok: false }, { status: 502 });
  } else {
    appendFileSync(join(process.cwd(), ".contact-submissions.jsonl"), JSON.stringify(record) + "\n");
  }
  return Response.json({ ok: true });
}
