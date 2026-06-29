import type { ReactNode } from "react";

/* Hand-built inline line-icons (no icon-library dependency, per design rules).
   24x24 grid, 1.5 stroke, currentColor so they inherit the accent via CSS.
   Decorative by default (aria-hidden); pass a label to expose to AT. */
export type IconName =
  | "audit"
  | "blocks"
  | "ai"
  | "seniors"
  | "auditFirst"
  | "uptime"
  | "ownership"
  | "fintech"
  | "saas"
  | "web3"
  | "mail"
  | "phone"
  | "pin"
  | "linkedin"
  | "instagram"
  | "x"
  | "github";

const PATHS: Record<IconName, ReactNode> = {
  // magnifier over work = audit / inspection
  audit: (
    <>
      <circle cx="11" cy="11" r="6" />
      <line x1="15.5" y1="15.5" x2="20" y2="20" />
    </>
  ),
  // isometric cube = blockchain
  blocks: (
    <>
      <path d="M12 3 20 7.5 12 12 4 7.5Z" />
      <path d="M4 7.5V16.5L12 21V12" />
      <path d="M20 7.5V16.5L12 21" />
    </>
  ),
  // sparkle = AI / generative
  ai: <path d="M12 3.5 13.4 10.6 20.5 12 13.4 13.4 12 20.5 10.6 13.4 3.5 12 10.6 10.6Z" />,
  // person + check = senior engineers
  seniors: (
    <>
      <circle cx="9.5" cy="8" r="3.3" />
      <path d="M4 19a5.5 5.5 0 0 1 11 0" />
      <path d="M15.5 12.5 17.5 14.5 21 11" />
    </>
  ),
  // shield + check = audit-first
  auditFirst: (
    <>
      <path d="M12 3 19 6V11c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6Z" />
      <path d="M9 12 11 14 15 10" />
    </>
  ),
  // heartbeat = uptime / we stay through launch
  uptime: <path d="M3 12h4l2.5-6 4 12 2.5-6H21" />,
  // key = you own everything
  ownership: (
    <>
      <circle cx="7.5" cy="15.5" r="3.5" />
      <path d="M10 13 20 3" />
      <path d="M15.5 7.5 18.5 10.5" />
      <path d="M13 10 16 13" />
    </>
  ),
  // card = fintech
  fintech: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <line x1="6.5" y1="14.5" x2="10.5" y2="14.5" />
    </>
  ),
  // stacked layers = b2b saas / platform
  saas: (
    <>
      <path d="M12 3 21 8 12 13 3 8Z" />
      <path d="M3 12.5 12 17.5 21 12.5" />
    </>
  ),
  // connected nodes = web3 protocols
  web3: (
    <>
      <circle cx="12" cy="5" r="2.2" />
      <circle cx="5" cy="18" r="2.2" />
      <circle cx="19" cy="18" r="2.2" />
      <path d="M10.5 6.6 6.5 16" />
      <path d="M13.5 6.6 17.5 16" />
      <path d="M7.2 18h9.6" />
    </>
  ),
  // envelope
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 7 12 13 20.5 7" />
    </>
  ),
  // handset
  phone: (
    <path d="M21 16.9v2.5a1.6 1.6 0 0 1-1.8 1.6 17.6 17.6 0 0 1-7.7-2.7 17.3 17.3 0 0 1-5.3-5.3A17.6 17.6 0 0 1 3.5 5.3 1.6 1.6 0 0 1 5.1 3.5h2.5a1.6 1.6 0 0 1 1.6 1.4c.1.8.3 1.6.6 2.4a1.6 1.6 0 0 1-.4 1.7L8.3 10a14 14 0 0 0 5.3 5.3l1-1.1a1.6 1.6 0 0 1 1.7-.4c.8.3 1.6.5 2.4.6A1.6 1.6 0 0 1 21 16.9Z" />
  ),
  // map pin = office location
  pin: (
    <>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  // linkedin glyph (in)
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="7" y1="11" x2="7" y2="16.5" />
      <circle cx="7" cy="7.2" r="0.9" fill="currentColor" stroke="none" />
      <line x1="11" y1="16.5" x2="11" y2="11" />
      <path d="M11 13.2a2.5 2.5 0 0 1 5 0v3.3" />
    </>
  ),
  // instagram
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="16.7" cy="7.3" r="0.9" fill="currentColor" stroke="none" />
    </>
  ),
  // X (twitter) wordmark
  x: <path d="M3.2 3h4.1l4.2 5.7L16.5 3h3.3l-6.3 7.6L21 21h-4.1l-4.6-6.2L7.1 21H3.8l6.7-8.1L3.2 3z" fill="currentColor" stroke="none" />,
  // github mark
  github: (
    <path d="M12 2.2a9.8 9.8 0 0 0-3.1 19.1c.5.1.67-.21.67-.47v-1.65c-2.73.6-3.3-1.32-3.3-1.32-.45-1.14-1.1-1.44-1.1-1.44-.9-.62.07-.6.07-.6 1 .07 1.52 1.03 1.52 1.03.88 1.5 2.3 1.07 2.87.82.09-.64.35-1.07.63-1.32-2.18-.25-4.47-1.1-4.47-4.86 0-1.07.38-1.95 1.02-2.64-.1-.25-.45-1.26.1-2.62 0 0 .83-.27 2.72 1.01a9.4 9.4 0 0 1 4.95 0c1.89-1.28 2.72-1.01 2.72-1.01.55 1.36.2 2.37.1 2.62.64.69 1.02 1.57 1.02 2.64 0 3.77-2.3 4.6-4.49 4.85.36.31.67.92.67 1.85v2.74c0 .26.18.58.69.48A9.8 9.8 0 0 0 12 2.2z" fill="currentColor" stroke="none" />
  ),
};

export default function Icon({
  name,
  className,
  label,
}: {
  name: IconName;
  className?: string;
  label?: string;
}) {
  return (
    <svg
      className={`ico${className ? ` ${className}` : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      focusable="false"
    >
      {PATHS[name]}
    </svg>
  );
}
