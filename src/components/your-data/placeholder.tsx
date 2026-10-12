// Undecided values on /your-data (retention windows, response times,
// thresholds) render as loud bracketed markers, never as a guessed number.
//
// Guard: a Vercel production build fails while any marker is still on the
// page, so a placeholder cannot ship by accident. Local builds and preview
// deploys still render the markers so they are easy to spot. To list every
// open marker: grep -rn "<Placeholder" src
type Kind = "WINDOW" | "SLA" | "NUMBER" | "DECISION" | "DATE";

export default function Placeholder({
  kind,
  children,
}: {
  kind: Kind;
  children: string;
}) {
  const label = `[${kind}: ${children}]`;

  if (process.env.VERCEL_ENV === "production") {
    throw new Error(
      `Unresolved placeholder on the data page: ${label}. Replace it with the decided value before a production deploy.`,
    );
  }

  return (
    <mark
      data-placeholder={kind}
      className="rounded border border-dashed border-orchid bg-orchid-soft px-1 font-mono text-[0.85em] font-semibold text-ink"
    >
      {label}
    </mark>
  );
}
