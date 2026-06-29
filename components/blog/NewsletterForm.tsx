"use client";

import { useState } from "react";
import { track } from "@/lib/track";

export default function NewsletterForm({ source }: { source: string }) {
  const [state, setState] = useState<"idle" | "busy" | "ok" | "err">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email") as string;
    setState("busy");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      if (!res.ok) throw new Error();
      setState("ok");
      track("newsletter_signup", { source });
    } catch {
      setState("err");
    }
  }

  if (state === "ok") {
    return <p className="nl-ok">You are subscribed. One email a month, no noise.</p>;
  }

  return (
    <form className="nl" onSubmit={onSubmit} aria-label="Newsletter signup">
      <input
        type="email"
        name="email"
        required
        placeholder="Work email"
        aria-label="Work email"
        autoComplete="email"
      />
      <button type="submit" className="btn btn-pri" disabled={state === "busy"}>
        {state === "busy" ? "Subscribing..." : "Subscribe"}
      </button>
      {state === "err" ? <p className="nl-err">That did not work. Try again.</p> : null}
    </form>
  );
}
