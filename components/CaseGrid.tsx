"use client";

import { useState } from "react";
import Link from "next/link";
import PhotoSlot from "@/components/PhotoSlot";
import {
  caseStudies,
  SERVICE_LABELS,
  SERVICES_IN_USE,
  type CaseService,
} from "@/lib/caseStudies";

/* Case-studies browsing grid with instant client-side filtering by service.
   "All" is the default; the active filter is clearly marked. Strongest cases
   (weight "lg") span wider so the grid is not a flat uniform wall. Each card
   leads with ONE large outcome metric so results are scannable in seconds. */

export default function CaseGrid() {
  const [filter, setFilter] = useState<CaseService | "all">("all");
  const shown = filter === "all" ? caseStudies : caseStudies.filter((c) => c.service === filter);

  return (
    <>
      <div className="cs-filter" role="tablist" aria-label="Filter case studies by service">
        <button
          type="button"
          role="tab"
          aria-selected={filter === "all"}
          className={filter === "all" ? "on" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        {SERVICES_IN_USE.map((s) => (
          <button
            type="button"
            role="tab"
            aria-selected={filter === s}
            className={filter === s ? "on" : ""}
            onClick={() => setFilter(s)}
            key={s}
          >
            {SERVICE_LABELS[s]}
          </button>
        ))}
      </div>

      <div className="cs-grid">
        {shown.map((c) => (
          <Link href={`/case-studies/${c.slug}`} className={`cs-card ${c.weight}`} key={c.slug}>
            <PhotoSlot kind={c.heroKind} ratio="16/9" src={c.heroSrc} alt={`${c.client}: ${c.problem}`} />
            <div className="cs-card-body">
              <div className="cs-tags">
                <span className="cs-tag mono ">{SERVICE_LABELS[c.service]}</span>
                <span className="cs-region mono">{c.region}</span>
              </div>
              <p className="cs-client">{c.client}</p>
              <p className="cs-problem">{c.problem}</p>
              <p className="cs-metric">{c.headlineMetric}</p>
              <span className="cs-more mono">Read the case study →</span>
            </div>
          </Link>
        ))}
      </div>

      {shown.length === 0 && <p className="cs-empty">No case studies match that filter yet.</p>}
    </>
  );
}
