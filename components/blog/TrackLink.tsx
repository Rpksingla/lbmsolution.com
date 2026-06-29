"use client";

import Link from "next/link";
import { track } from "@/lib/track";
import type { ReactNode } from "react";

/** next/link that fires an analytics event on click. */
export default function TrackLink({
  href,
  event,
  params = {},
  className,
  children,
}: {
  href: string;
  event: string;
  params?: Record<string, string | number>;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className={className} onClick={() => track(event, { target: href, ...params })}>
      {children}
    </Link>
  );
}
