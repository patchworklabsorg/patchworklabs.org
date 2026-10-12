// The ID check, in four steps, with its two "go back" paths: a problem with
// the ID loops back to step 1, and a failed call loops back to step 1 with a
// different person. Wide screens get the drawn diagram; phones get the same
// thing as a stacked list, so the text never shrinks below reading size.

const steps = [
  {
    title: "Send your ID",
    note: "a photo or scan, before the call",
  },
  {
    title: "We check it",
    note: "a person looks at the ID",
  },
  {
    title: "Live video call",
    note: "never recorded",
    highlight: true,
  },
  {
    title: "Decision",
    note: "written down, pass or not",
  },
];

function Wide() {
  const xs = [100, 300, 500, 700];
  return (
    <svg
      viewBox="0 0 850 262"
      role="img"
      aria-label="The ID check in four steps. 1: send your ID. 2: a person checks it. 3: a live video call, which is never recorded. 4: a decision, written down either way. A pass means you are verified. A problem with the ID at step 2 goes back to step 1. A fail at step 4 goes back to step 1 after a wait, with a different person on the call."
      className="hidden h-auto w-full sm:block"
    >
      <defs>
        <marker
          id="vf-arrow-sky"
          viewBox="0 0 10 10"
          refX="6"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto"
        >
          <path d="M0,0 L10,5 L0,10 z" className="fill-sky" />
        </marker>
        <marker
          id="vf-arrow-orchid"
          viewBox="0 0 10 10"
          refX="6"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto"
        >
          <path d="M0,0 L10,5 L0,10 z" className="fill-orchid" />
        </marker>
      </defs>

      {/* the thread through the steps */}
      <path
        d="M40,110 L740,110"
        className="stroke-ink-soft"
        strokeOpacity={0.5}
        strokeWidth={2}
        strokeDasharray="6 6"
      />

      {steps.map((step, i) => (
        <g key={step.title}>
          <text
            x={xs[i]}
            y={52}
            textAnchor="middle"
            fontSize={17}
            fontWeight={700}
            className="font-display fill-ink"
          >
            {step.title}
          </text>
          <text
            x={xs[i]}
            y={74}
            textAnchor="middle"
            fontSize={13}
            fontWeight={step.highlight ? 700 : 400}
            className={step.highlight ? "fill-orchid" : "fill-ink-soft"}
          >
            {step.note}
          </text>
          <circle
            cx={xs[i]}
            cy={110}
            r={28}
            strokeWidth={2}
            className={
              step.highlight
                ? "fill-grape stroke-grape"
                : "fill-grape-soft stroke-grape"
            }
          />
          <text
            x={xs[i]}
            y={117}
            textAnchor="middle"
            fontSize={20}
            fontWeight={700}
            className={
              step.highlight ? "font-display fill-paper" : "font-display fill-grape"
            }
          >
            {i + 1}
          </text>
        </g>
      ))}

      {/* pass */}
      <path d="M728,110 L768,110" className="stroke-teal" strokeWidth={3} />
      <rect x={768} y={96} width={78} height={28} rx={14} className="fill-teal" />
      <text
        x={807}
        y={115}
        textAnchor="middle"
        fontSize={13}
        fontWeight={700}
        className="fill-paper"
      >
        verified
      </text>

      {/* problem with the ID: back to step 1 */}
      <path
        d="M300,140 C300,176 150,176 116,142"
        fill="none"
        className="stroke-sky"
        strokeWidth={2}
        strokeDasharray="5 5"
        markerEnd="url(#vf-arrow-sky)"
      />
      <text
        x={208}
        y={196}
        textAnchor="middle"
        fontSize={13}
        className="fill-sky"
      >
        problem with the ID? fix it and send it again
      </text>

      {/* did not pass: back to step 1, with a different person */}
      <path
        d="M700,140 C700,226 520,226 380,226 L170,226 C112,226 86,196 84,146"
        fill="none"
        className="stroke-orchid"
        strokeWidth={2}
        strokeDasharray="6 5"
        markerEnd="url(#vf-arrow-orchid)"
      />
      <text
        x={440}
        y={252}
        textAnchor="middle"
        fontSize={13}
        className="fill-orchid"
      >
        did not pass? wait, then start again with a different person
      </text>
    </svg>
  );
}

function Stacked() {
  return (
    <ol className="space-y-3 sm:hidden">
      {steps.map((step, i) => (
        <li key={step.title}>
          <div className="flex items-center gap-4">
            <span
              aria-hidden
              className={`font-display flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-grape text-lg font-bold ${
                step.highlight ? "bg-grape text-paper" : "bg-grape-soft text-grape"
              }`}
            >
              {i + 1}
            </span>
            <div>
              <p className="font-display font-bold">{step.title}</p>
              <p
                className={`text-sm ${
                  step.highlight ? "font-bold text-orchid" : "text-ink-soft"
                }`}
              >
                {step.note}
              </p>
            </div>
          </div>
          {i === 1 && (
            <p className="ml-14 mt-2 rounded-lg border-2 border-dashed border-sky px-3 py-2 text-sm text-sky">
              ← Problem with the ID? Fix it and go back to step 1.
            </p>
          )}
          {i === 3 && (
            <div className="ml-14 mt-2 space-y-2 text-sm">
              <p className="inline-block rounded-full bg-teal px-3 py-1 font-bold text-paper">
                Pass: verified
              </p>
              <p className="rounded-lg border-2 border-dashed border-orchid px-3 py-2 text-orchid">
                ← Did not pass? Wait, then start again at step 1 with a
                different person.
              </p>
            </div>
          )}
        </li>
      ))}
    </ol>
  );
}

export default function VerificationFlow() {
  return (
    <figure className="patch mt-8 bg-paper p-5 sm:p-6">
      <Wide />
      <Stacked />
    </figure>
  );
}
