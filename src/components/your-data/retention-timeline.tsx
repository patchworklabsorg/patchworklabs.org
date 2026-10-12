// How long each kind of sensitive data lives, drawn as bars on one shared
// timeline, with the moment you delete your account marked across all of
// them. The bars show order and shape only, not real lengths of time.

const DELETE_AT = 55; // percent along the track

const rows = [
  {
    label: "Your ID images",
    end: 7,
    bar: "bg-orchid",
    note: "deleted soon after you pass",
  },
  {
    label: "Guardian contact",
    end: 38,
    bar: "bg-violet",
    note: "until you turn 18 or leave the program",
  },
  {
    label: "Demographic answers",
    end: DELETE_AT,
    bar: "bg-grape",
    note: "encrypted, only totals ever come out",
  },
  {
    label: "ID check records",
    end: 78,
    bar: "bg-sky",
    note: "kept for a set time after you leave, then destroyed",
  },
  {
    label: "The Knot",
    end: 100,
    bar: "bg-ink",
    note: "a fingerprint, stays after you delete",
    open: true,
  },
];

export default function RetentionTimeline() {
  return (
    <figure className="patch mt-8 bg-paper p-5 sm:p-6">
      <div className="relative">
        {/* the delete moment, across every row */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 right-0 sm:left-44"
        >
          <div
            className="absolute inset-y-0 border-l-2 border-dashed border-orchid"
            style={{ left: `${DELETE_AT}%` }}
          />
        </div>

        <ul className="relative space-y-4">
          {rows.map((row) => (
            <li key={row.label} className="sm:flex sm:items-start">
              <p className="font-display text-sm font-bold sm:w-44 sm:shrink-0 sm:pt-0.5">
                {row.label}
              </p>
              <div className="mt-1 flex-1 sm:mt-0">
                <div className="h-4 w-full">
                  <div
                    className={`h-4 rounded-full ${row.bar} ${
                      row.open ? "rounded-r-none" : ""
                    }`}
                    style={{ width: `${row.end}%` }}
                  />
                </div>
                <p className="mt-1 text-xs text-ink-soft">{row.note}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <figcaption className="mt-5 text-sm text-ink-soft sm:pl-44">
        <span className="font-semibold text-orchid">Dashed line:</span> you
        delete your account. Your readable data goes. Only what a law or a funder
        contract makes us keep, and the Knot, stay. The bars show the order, not real lengths of time.
      </figcaption>
    </figure>
  );
}
