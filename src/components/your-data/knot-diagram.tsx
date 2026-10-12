// The Knot: what goes into the one-way fingerprint, what we keep after you
// delete your account, and the only two things a match can do.

function KnotGlyph({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 40"
      aria-hidden
      className={className}
      fill="none"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M2 30 H20 C28 30 33 25 33 18 C33 10 27 6 21 9 C15 12 18 25 29 29 C35 31 42 30 62 30"
        className="stroke-grape"
      />
    </svg>
  );
}

const inputs = [
  {
    text: "The number and type of the ID you show us",
    tag: "strong",
  },
  {
    text: "Your national ID number, if your country gives you one for life",
    tag: "strong",
  },
  {
    text: "Your legal name and birthday",
    tag: "soft",
  },
];

export default function KnotDiagram() {
  return (
    <figure className="mt-8 space-y-6">
      <div className="grid items-stretch gap-4 sm:grid-cols-[1fr_auto_1fr]">
        {/* What goes in */}
        <div className="patch bg-sky-soft p-5 patch-tilt-l">
          <p className="font-display text-lg font-bold">What goes in</p>
          <p className="text-sm text-ink-soft">once, at your ID check</p>
          <ul className="mt-4 space-y-3 text-sm">
            {inputs.map((input) => (
              <li key={input.text} className="flex items-start gap-2">
                <span
                  className={`mt-0.5 shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold ${
                    input.tag === "strong"
                      ? "bg-grape text-paper"
                      : "border border-dashed border-grape text-grape"
                  }`}
                >
                  {input.tag}
                </span>
                <span>{input.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* one-way */}
        <div className="flex flex-col items-center justify-center gap-1 py-2 text-center">
          <KnotGlyph className="h-14 w-24 rotate-90 sm:rotate-0" />
          <p className="font-display text-sm font-bold text-grape">one-way</p>
          <p className="max-w-[9rem] text-xs text-ink-soft">
            can&rsquo;t be turned back into your details
          </p>
        </div>

        {/* What we keep */}
        <div className="patch bg-violet-soft p-5 patch-tilt-r">
          <p className="font-display text-lg font-bold">What we keep</p>
          <p className="text-sm text-ink-soft">even after you delete</p>
          <div className="mt-4 space-y-1 font-mono text-xs text-ink-soft">
            <p aria-hidden>7f3a&hellip;c91e</p>
            <p aria-hidden>b20d&hellip;4a77</p>
            <p aria-hidden>e95c&hellip;0d12</p>
            <p className="sr-only">A small set of fingerprints.</p>
          </div>
          <dl className="mt-4 space-y-2 rounded-lg border-2 border-dashed border-grape bg-paper p-3 text-sm">
            <div className="flex justify-between gap-3">
              <dt className="text-ink-soft">Blocked from our programs?</dt>
              <dd className="font-semibold">yes or no</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="text-ink-soft">Grants you got</dt>
              <dd className="font-semibold">for example, Ganymede</dd>
            </div>
          </dl>
          <p className="mt-3 text-xs text-ink-soft">
            No name. No reason. No history.
          </p>
        </div>
      </div>

      <div>
        <p className="font-display text-lg font-bold">
          If someone comes back and verifies again
        </p>
        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          <div className="patch bg-grape-soft p-5">
            <p className="font-display font-bold">A strong match</p>
            <p className="mt-1 text-sm text-ink-soft">
              It&rsquo;s the same person. Any limit on grants per person
              still applies. If the flag is &ldquo;no&rdquo;, you just verify
              again like anyone else. If the flag is &ldquo;yes&rdquo;, the
              verification team looks more closely.
            </p>
          </div>
          <div className="patch bg-teal-soft p-5">
            <p className="font-display font-bold">
              Only the name and birthday match
            </p>
            <p className="mt-1 text-sm text-ink-soft">
              Two different people can share a name and birthday. So a second
              person joins your call and takes a closer look. That is all it
              can do. It can never turn you away on its own.
            </p>
          </div>
        </div>
      </div>
    </figure>
  );
}
