import type { Metadata } from "next";
import { CONTACT_EMAIL, DONATE_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Code of Conduct",
  description:
    "The Patchwork Labs code of conduct: how we treat each other in the Slack, on Ganymede infrastructure, and everywhere the community gathers.",
};

const expectations = [
  {
    title: "Be kind and patient",
    body: "People here range from first-timers to seasoned builders, and from 13-year-olds to adults. Explain generously, ask honestly, and remember there's a person on the other end.",
    className: "bg-grape-soft patch-tilt-l",
  },
  {
    title: "Help people get unstuck",
    body: "That's the whole point of Patchwork. Answer questions when you can, share what you learn, and celebrate other people's projects.",
    className: "bg-teal-soft patch-tilt-r",
  },
  {
    title: "Keep it appropriate",
    body: "Many members are minors. Keep content and conversation appropriate for a community that includes 13-year-olds — if you'd hesitate to say it in front of someone's parents, don't post it.",
    className: "bg-sky-soft patch-tilt-r",
  },
  {
    title: "Respect the resources",
    body: "Compute, grants, and infrastructure are shared and donated. Use them for the projects they were granted for, and don't abuse access.",
    className: "bg-violet-soft patch-tilt-l",
  },
];

const unacceptable = [
  "Harassment, bullying, or personal attacks of any kind.",
  "Discrimination or hateful conduct based on race, gender, sexuality, disability, religion, age, or anything else.",
  "Sharing someone's private information (doxxing), or sharing private conversations without consent.",
  "Sexual or otherwise adult content — this is a community that includes minors.",
  "Using Patchwork Labs infrastructure for anything illegal, malicious, or outside your approved project.",
  "Spam, scams, or self-promotion that drowns out the community.",
];

export default function Conduct() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6">
      <section className="py-16 sm:py-20">
        <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
          Code of conduct
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-soft">
          The short version: be kind, build cool things, and don&rsquo;t make
          this a worse place to be. Patchwork Labs is a community of makers
          aged 13 and up from all over the world — this page is how we keep it
          a good one.
        </p>
      </section>

      {/* Expectations */}
      <section className="py-8">
        <h2 className="font-display text-3xl font-bold">What we expect</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {expectations.map((e) => (
            <div key={e.title} className={`patch p-6 ${e.className}`}>
              <h3 className="font-display text-xl font-bold">{e.title}</h3>
              <p className="mt-2 text-ink-soft">{e.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Unacceptable */}
      <section className="py-12">
        <h2 className="font-display text-3xl font-bold">
          What we won&rsquo;t tolerate
        </h2>
        <ul className="mt-6 max-w-2xl space-y-3 text-ink-soft">
          {unacceptable.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden className="select-none text-grape">
                ✦
              </span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Scope */}
      <section className="py-12">
        <h2 className="font-display text-3xl font-bold">Where this applies</h2>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">
          Everywhere the community gathers: the Slack, Project Ganymede
          infrastructure and project spaces, community events, and anywhere
          you&rsquo;re representing Patchwork Labs.
        </p>
      </section>

      {/* Reporting */}
      <section className="py-12 pb-20">
        <h2 className="font-display text-3xl font-bold">Reporting a problem</h2>
        <div className="patch mt-8 max-w-2xl bg-orchid-soft p-6 sm:p-8">
          <p className="text-ink-soft">
            If someone makes you uncomfortable or you see behavior that
            breaks this code, tell us — even if you&rsquo;re not sure it
            &ldquo;counts.&rdquo; Email{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-medium text-grape hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
            , or reach Jasper directly at{" "}
            <a
              href={`mailto:${DONATE_EMAIL}`}
              className="font-medium text-grape hover:underline"
            >
              {DONATE_EMAIL}
            </a>{" "}
            if the report involves a member of the team. Reports are handled
            confidentially.
          </p>
          <p className="mt-4 text-ink-soft">
            Depending on severity, responses range from a conversation to a
            warning to removal from the community and its infrastructure.
            We&rsquo;d rather talk early than ban late — but keeping the
            community safe comes first, always.
          </p>
        </div>
      </section>
    </div>
  );
}
