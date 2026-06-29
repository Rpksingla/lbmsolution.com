/**
 * Lead proxy → WorksBuddy CRM (same endpoint the existing site's contact form
 * uses). The client posts the exact same payload here; we forward it with the
 * X-API-KEY server-side (so the key never ships in the browser bundle) and
 * mirror the CRM's status + JSON body back, so success/error handling and
 * responses stay identical to the original implementation.
 */
const LEAD_URL = "https://api-lio.worksbuddy.ai/api/v1/lead/";
const LEAD_API_KEY =
  process.env.LEAD_API_KEY ??
  "CRM_6f977cc4390eb49b9b77c640704331c7f5d3f73696854e085a34fb4f2456fceb78c965baa9215e32162d211b59d4c92e";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  try {
    const r = await fetch(LEAD_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-API-KEY": LEAD_API_KEY },
      body: JSON.stringify(body),
    });
    const data = await r.json().catch(() => ({}));
    return Response.json(data, { status: r.status });
  } catch {
    return Response.json({ status: "error", msg: "Submission failed" }, { status: 502 });
  }
}
