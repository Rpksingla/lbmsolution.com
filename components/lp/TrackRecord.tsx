/* Track-record stat band for landing pages: a labeled row of big numbers with
   an accent suffix and a short label under each, divided into columns. One row
   on desktop, 2-per-row on tablet/mobile. Server component. */

export type TrackStat = { n: string; suffix?: string; label: string };

export default function TrackRecord({
  label = "Track record",
  stats,
}: {
  label?: string;
  stats: TrackStat[];
}) {
  return (
    <div className="lptr">
      <div className="in">
        <div className="lptr-label">
          <span className="dot" aria-hidden="true" />
          <span className="mono">{label}</span>
          <span className="rule" aria-hidden="true" />
        </div>
        <div className="lptr-grid">
          {stats.map((s) => (
            <div className="lptr-stat" key={s.label}>
              <p className="v">
                {s.n}
                {s.suffix ? <span className="acc">{s.suffix}</span> : null}
              </p>
              <p className="d">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
