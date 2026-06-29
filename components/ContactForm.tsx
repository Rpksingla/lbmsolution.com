"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { track } from "@/lib/track";
import countryNumbers from "@/lib/contactNumber.json";
import { INDUSTRY_CARDS } from "@/components/nav/menuData";

type Country = { country_code: string; country_name: string; flag: string; phone_number_length: number };
const COUNTRIES = countryNumbers as Country[];

const SERVICES = [
  "Blockchain",
  "AI",

];

// Options here are the services listed under each industry in the nav mega menu
// (single source of truth: INDUSTRY_CARDS). Deduped, since some services appear
// under more than one industry. Updates automatically if menuData changes.
const INDUSTRIES = [...new Set(INDUSTRY_CARDS.flatMap((c) => c.services.map((s) => s.label)))];

const OPERATORS = ["+", "-", "*"] as const;
const rand = () => Math.floor(Math.random() * 10);
const flagSrc = (cc: string) => `https://purecatamphetamine.github.io/country-flag-icons/3x2/${cc}.svg`;

/** IP geo-lookup with a fallback, mirrors the existing site's contact form. */
async function fetchLocationSafe(): Promise<string> {
  try {
    const res = await fetch("https://ipapi.co/json/");
    if (res.ok) {
      const d = await res.json();
      return `${d.ip} (${d.city}, ${d.region}, ${d.country_name})`;
    }
    throw new Error();
  } catch {
    try {
      const res = await fetch("https://ipwho.is/");
      const d = await res.json();
      if (d.success) return `${d.ip} (${d.city}, ${d.region}, ${d.country})`;
      throw new Error();
    } catch {
      return "Location unavailable";
    }
  }
}

function parseLocation(s: string) {
  const m = s.match(/\((.*?)\)/);
  if (!m) return { city: null, state: null, country: null };
  const [city = null, state = null, country = null] = m[1].split(",").map((p) => p.trim());
  return { city, state, country };
}

export default function ContactForm({ source = "" }: { source?: string } = {}) {
  const router = useRouter();

  const [form, setForm] = useState({ name: "", mobile: "", email: "", service: "", industry: "" });
  const [flagsCode, setFlagsCode] = useState<{ flag: string; code: string }>({ flag: "IN", code: "+91" });
  const [checkNumberLength, setCheckNumberLength] = useState(10);
  const [showFlags, setShowFlags] = useState(false);
  const [search, setSearch] = useState("");
  const [numberError, setNumberError] = useState("");
  const [loader, setLoader] = useState(false);
  const [userLocation, setUserLocation] = useState("");
  const fromPage = useRef("");
  const pickRef = useRef<HTMLDivElement>(null);

  // captcha (set on mount to avoid SSR/hydration mismatch)
  const [cap, setCap] = useState({ a: 0, b: 0, op: "+" as (typeof OPERATORS)[number] });
  const [capInput, setCapInput] = useState("");
  const [capError, setCapError] = useState("");
  const resetCaptcha = () => {
    setCap({ a: rand(), b: rand(), op: OPERATORS[Math.floor(Math.random() * OPERATORS.length)] });
    setCapInput("");
  };
  const captchaResult = () => {
    if (cap.op === "+") return cap.a + cap.b;
    if (cap.op === "-") return Math.max(cap.a, cap.b) - Math.min(cap.a, cap.b);
    return cap.a * cap.b;
  };

  useEffect(() => {
    resetCaptcha();
    fromPage.current =
      source || (typeof window !== "undefined" && window.localStorage.getItem("fromPage")) || "";
    fetchLocationSafe().then(setUserLocation);
  }, []);

  // close country dropdown on outside click
  useEffect(() => {
    const onDown = (e: PointerEvent) => {
      if (pickRef.current && !pickRef.current.contains(e.target as Node)) setShowFlags(false);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onMobile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, "");
    setForm((p) => ({ ...p, mobile: digits }));
    setNumberError(
      digits.length > 0 && digits.length !== checkNumberLength
        ? `Phone number must be exactly ${checkNumberLength} digits`
        : "",
    );
  };

  const pickCountry = (c: Country) => {
    setCheckNumberLength(c.phone_number_length);
    setFlagsCode({ flag: c.flag, code: c.country_code });
    setShowFlags(false);
    setNumberError(
      form.mobile.length > 0 && form.mobile.length !== c.phone_number_length
        ? `Phone number must be exactly ${c.phone_number_length} digits`
        : "",
    );
  };

  const filtered = COUNTRIES.filter(
    (c) => c.country_code !== "+00" && c.country_name.toLowerCase().includes(search.toLowerCase()),
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (parseInt(capInput) !== captchaResult()) {
      setCapError("Captcha calculation is incorrect");
      resetCaptcha();
      return;
    }
    setCapError("");

    if (!flagsCode?.code) {
      setNumberError("Please select country code");
      return;
    }

    setLoader(true);
    const { city, state, country } = parseLocation(userLocation);

    const data = {
      title: "LBM Solution",
      first_name: form.name,
      last_name: "Last_Name",
      email: form.email,
      phone_number: `${flagsCode.code} ${form.mobile}`,
      from_page: fromPage.current,
      industry: form.industry,
      // CRM has no dedicated Service/Industry field in this workspace, so mirror
      // them into notes (a displayed field) until they're added on the CRM side.
      // notes: `Service: ${form.service} | Industry: ${form.industry}`,
      city,
      state,
      country,
      custom_fields: {"Service": form.service},
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await res.json().catch(() => ({}));
      if (body?.status === "success" || res.status === 201) {
        if (typeof window !== "undefined") window.localStorage.removeItem("fromPage");
        resetCaptcha();
        track("contact_submit", { service: form.service });
        router.replace("/thank-you");
      } else {
        const reason =
          res.status === 409 || body?.status_code === 409
            ? "This email or phone number is already registered with us."
            : body?.message || body?.msg || "Submission failed";
        setNumberError(reason);
        setLoader(false);
      }
    } catch {
      setNumberError("An error occurred, please try again.");
      setLoader(false);
    }
  }

  const capA = cap.op === "-" ? Math.max(cap.a, cap.b) : cap.a;
  const capB = cap.op === "-" ? Math.min(cap.a, cap.b) : cap.b;

  return (
    <form className="cform" onSubmit={onSubmit} aria-label="Project brief">
      <label className="full">
       Contact Name *
        <input type="text" name="name" value={form.name} onChange={onChange} required placeholder="Enter your name" />
      </label>

      <div className="full">
        <span className="cf-lbl">Phone number *</span>
        <div className="tel" ref={pickRef}>
          <button type="button" className="flag-pick" onClick={() => setShowFlags((v) => !v)} aria-label="Select country code">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={flagSrc(flagsCode.flag)} alt={flagsCode.flag} />
            <span>{flagsCode.code}</span>
            <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 6l4 4 4-4" /></svg>
          </button>
          <input
            type="text"
            name="mobile"
            inputMode="numeric"
            value={form.mobile}
            onChange={onMobile}
            required
            maxLength={checkNumberLength}
            placeholder="Enter your mobile"
          />
          {showFlags ? (
            <div className="flag-menu">
              <div className="search">
                <input type="text" placeholder="Search country" value={search} onChange={(e) => setSearch(e.target.value)} />
              </div>
              {filtered.length === 0 ? (
                <p className="none">No data found</p>
              ) : (
                filtered.map((c) => (
                  <button type="button" key={`${c.flag}-${c.country_code}`} onClick={() => pickCountry(c)}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={flagSrc(c.flag)} alt={c.flag} />
                    <span>{c.country_code} ({c.country_name})</span>
                  </button>
                ))
              )}
            </div>
          ) : null}
        </div>
        {numberError ? <p className="form-err">{numberError}</p> : null}
      </div>

      <label className="full">
        Email address *
        <input type="email" name="email" value={form.email} onChange={onChange} required autoComplete="email" placeholder="Enter your email address" />
      </label>

      <label>
        Service *
        <select name="service" value={form.service} onChange={onChange} required>
          <option value="" disabled>Select a service</option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </label>

      <label>
        Industry *
        <select name="industry" value={form.industry} onChange={onChange} required>
          <option value="" disabled>Select industry</option>
          {INDUSTRIES.map((i) => (
            <option key={i} value={i}>{i}</option>
          ))}
        </select>
      </label>

      <div className="captcha-row">
        <span className="captcha-q">{capA} {cap.op} {capB} = ?</span>
        <input type="text" inputMode="numeric" value={capInput} onChange={(e) => setCapInput(e.target.value.replace(/\D/g, ""))} required aria-label="Captcha answer" />
        <button type="submit" className="btn btn-pri" disabled={loader}>
          {loader ? "Sending..." : "Submit"}
        </button>
      </div>
      {capError ? <p className="form-err">{capError}</p> : null}
    </form>
  );
}
