
// What happens after you ask us to delete your account: one human check,
// then four steps in a fixed order. Steps 1 and 2 need to know who you are,
// so the link to you is cut only at step 3.

const steps = [
  {
    title: "Add you to the totals",
    body: "We add general facts about you, like your age range and region, to the running totals we report to funders. Never exact details.",
  },
  {
    title: "Tie off the Knot",
    body: "We save two things on your Knot: a yes/no flag for whether you are blocked from our programs, and which program grants you got.",
  },
  {
    title: "Cut the thread",
    body: "We delete everything that can be read as you, and cut the link between you and what is left.",
  },
  {
    title: "Send your receipt",
    body: "You get a list of what we deleted, what we kept, and the rule or law that makes us keep it.",
  },
];

export default function DeletionPipeline() {
  return (
    <figure className="mt-8">
      <div className="patch flex flex-col gap-3 bg-violet-soft p-5 sm:flex-row sm:items-center sm:gap-6">
        <p className="font-display shrink-0 text-lg font-bold">
          You ask to delete
        </p>
        <span aria-hidden className="hidden text-2xl text-grape sm:block">
          →
        </span>
        <p className="text-ink-soft">
          A person checks that the request really comes from you. That is all
          they check. They do not decide if you are allowed to leave. They do
          this check within 14 days, and the deletion is complete within 30
          days of your request.
        </p>
      </div>

      <p aria-hidden className="py-2 text-center text-2xl text-grape">
        ↓
      </p>

      <div className="relative">
        {/* the thread that joins the four steps on wide screens */}
        <span
          aria-hidden
          className="absolute left-[12%] right-[12%] top-10 hidden border-t-2 border-dashed border-grape sm:block"
        />
        <ol className="relative grid gap-4 sm:grid-cols-4">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="patch relative flex gap-4 bg-paper p-5 sm:flex-col sm:gap-3"
            >
              <span
                aria-hidden
                className={`font-display flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-grape text-lg font-bold ${
                  i === 2 ? "bg-grape text-paper" : "bg-grape-soft text-grape"
                }`}
              >
                {i + 1}
              </span>
              <div>
                <p className="font-display font-bold">
                  <span className="sr-only">Step {i + 1}: </span>
                  {step.title}
                </p>
                <p className="mt-1 text-sm text-ink-soft">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <figcaption className="mt-4 text-sm text-ink-soft">
        The order matters. Steps 1 and 2 need to know who you are. So we cut the
        link to you only after they are done, and never first.
      </figcaption>
    </figure>
  );
}
