import type { Metadata } from "next";
import Link from "next/link";
import { GANYMEDE_EMAIL, SLACK_EMAIL, SLACK_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Project Ganymede",
  description:
    "Serious compute for anyone with a good idea and the drive to build it.",
};

const steps = [
  {
    name: "Submit",
    body: "Student submits a project idea.",
    className: "bg-grape-soft",
  },
  {
    name: "Approve",
    body: "Reviewed by volunteer reviewers for speed and consistency.",
    className: "bg-orchid-soft",
  },
  {
    name: "Budget",
    body: "Approved projects are assigned a compute budget.",
    className: "bg-sky-soft",
  },
  {
    name: "Develop",
    body: "Student gets server access and builds, with community and mentor support available.",
    className: "bg-violet-soft",
  },
  {
    name: "Publish",
    body: "Finished work is open-sourced and posted publicly.",
    className: "bg-teal-soft",
  },
];

const criteria = [
  {
    name: "Uniqueness",
    body: "Is this actually novel, or already done to death?",
    className: "bg-grape-soft patch-tilt-l",
  },
  {
    name: "Efficiency",
    body: "Is the proposed implementation a reasonable use of compute?",
    className: "bg-sky-soft",
  },
  {
    name: "Impact",
    body: "Could this matter — or at least make people say “whoa”?",
    className: "bg-teal-soft patch-tilt-r",
  },
];

const safeguards: React.ReactNode[] = [
  "Guardian sign-off at signup for participants under 18.",
  "An acceptable use policy for the server environment, agreed to at onboarding.",
  "Elevated review for projects in sensitive dual-use areas (like biology or cybersecurity) — an extra check on intent and safeguards before a budget is granted.",
  <>
    A{" "}
    <Link href="/conduct" className="font-medium text-grape hover:underline">
      code of conduct
    </Link>{" "}
    for the community, with a clear way to report issues.
  </>,
  "A pre-publication check before findings are open-sourced.",
];

export default function Ganymede() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6">
      {/* Hero */}
      <section className="py-16 sm:py-24">
        <p className="font-display text-lg text-teal">
          A program of{" "}
          <Link href="/" className="underline hover:text-grape">
            Patchwork Labs
          </Link>
          , a registered 501(c)(3) nonprofit
        </p>
        <h1 className="font-display mt-4 text-4xl font-bold leading-tight sm:text-6xl">
          Project Ganymede
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-soft">
          Serious compute for anyone locked out of institutional resources —
          just a good idea and the drive to build it.
        </p>
        <div className="patch mt-8 inline-block bg-orchid-soft px-4 py-2 text-sm font-medium">
          Current status: early stages — pilot underway
        </div>
      </section>

      {/* Our focus */}
      <section className="py-12">
        <h2 className="font-display text-3xl font-bold">Our focus</h2>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">
          High-performance compute is abundant for university researchers and
          industry, but almost entirely out of reach for everyone else —
          especially high schoolers. Nearly every existing research
          opportunity for pre-college students runs through a university:
          programs like MIT PRIMES, NYU ARISE, and Clark Scholars pair
          students with faculty mentors on campus. That model works well for
          the students who get in, but it&rsquo;s constrained by the number of
          faculty and often requires relocating near the university for the
          summer. Students without a research university nearby — or without
          the profile to win one of a few dozen national seats — are largely
          locked out.
        </p>
      </section>

      {/* Mission */}
      <section className="py-12">
        <h2 className="font-display text-3xl font-bold">Our mission</h2>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">
          Give capable, curious students access to compute, let them pursue
          ambitious project ideas, and support them through to a finished,
          shared result. The bet is simple: hand students real resources and
          they&rsquo;ll build genuinely innovative things — and even when a
          project doesn&rsquo;t pan out, they&rsquo;ll learn far more than
          they would have otherwise. Either outcome is a win.
        </p>
      </section>

      {/* Theory of change */}
      <section className="py-12">
        <h2 className="font-display text-3xl font-bold">
          Why we think it works
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">
          Access to real compute leads to a real project, and a finished
          project produces one of two outcomes:
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="patch bg-grape-soft p-6 patch-tilt-l">
            <h3 className="font-display text-xl font-bold">
              The innovation case
            </h3>
            <p className="mt-2 text-ink-soft">
              A genuinely novel result — a working model, a dataset, a
              technique.
            </p>
          </div>
          <div className="patch bg-teal-soft p-6 patch-tilt-r">
            <h3 className="font-display text-xl font-bold">
              The learning case
            </h3>
            <p className="mt-2 text-ink-soft">
              Deep, hands-on technical skill and confidence, even if the
              project doesn&rsquo;t pan out.
            </p>
          </div>
        </div>
        <p className="mt-6 max-w-2xl text-lg text-ink-soft">
          Both outcomes compound. Completed projects become public proof-of-work
          students can point to — for college applications, portfolios, and
          future research — and every open-sourced result adds to a growing
          public library other students can build on.
        </p>
      </section>

      {/* Why Ganymede */}
      <section className="py-12">
        <h2 className="font-display text-3xl font-bold">
          Why &ldquo;Ganymede&rdquo;
        </h2>
        <div className="mt-4 max-w-2xl space-y-4 text-lg text-ink-soft">
          <p>
            In Greek mythology, Ganymede was a mortal youth — a shepherd, not a
            noble by birth or institution — whose exceptional promise caught
            Zeus&rsquo;s attention. He was taken up to Olympus and given a
            permanent place among the gods as their cupbearer: access to a
            world he had no formal path into otherwise.
          </p>
          <p>
            A student doesn&rsquo;t need to attend the right university or win
            one of a handful of national seats — they need a good idea and the
            drive to see it through. Ganymede provides real compute, real
            infrastructure, and a seat at a table they couldn&rsquo;t
            otherwise reach.
          </p>
          <p>
            Fittingly, Ganymede is also the largest moon in the solar system —
            bigger than the planet Mercury. A nod to the scale of potential we
            think is sitting untapped in students who&rsquo;ve simply never
            been given the resources to show what they can do.
          </p>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-12">
        <h2 className="font-display text-3xl font-bold">Who it&rsquo;s for</h2>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">
          Students work independently or in small, self-organized groups. Our
          priority audience is high school students, who
          currently have almost no access to programs like this. Minimum age is
          13. As the program grows, we plan to open up to anyone without access
          to university-level resources — community college students,
          self-taught learners, and others outside traditional academic
          pipelines. Access is equal and merit-based: every applicant is
          evaluated on the same criteria, and nothing matters beyond the
          quality of the project.
        </p>
      </section>

      {/* How it works */}
      <section className="py-12">
        <h2 className="font-display text-3xl font-bold">How it works</h2>
        <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.name} className={`patch p-5 ${step.className}`}>
              <p className="font-display text-sm font-bold text-ink-soft">
                Step {i + 1}
              </p>
              <h3 className="font-display mt-1 text-xl font-bold">
                {step.name}
              </h3>
              <p className="mt-2 text-sm text-ink-soft">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Approval criteria */}
      <section className="py-12">
        <h2 className="font-display text-3xl font-bold">
          What makes a good pitch
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">
          Reviewers optimize for fast turnaround, judging each idea on three
          things:
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {criteria.map((c) => (
            <div key={c.name} className={`patch p-5 ${c.className}`}>
              <h3 className="font-display text-xl font-bold">{c.name}</h3>
              <p className="mt-2 text-sm text-ink-soft">{c.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 max-w-2xl space-y-2 text-ink-soft">
          <p>
            <span className="font-semibold text-ink">Great pitches:</span>{" "}
            training an RL model for a combat robot; identifying individual
            animals (not just species) from neighborhood trail-cam footage; a
            model that learns your school&rsquo;s slang from anonymized group
            chats.
          </p>
          <p>
            <span className="font-semibold text-ink">Not so much:</span>{" "}
            calculating digits of pi; running a game server; rendering a
            personal film.
          </p>
        </div>
      </section>

      {/* Community & mentorship */}
      <section className="py-12">
        <h2 className="font-display text-3xl font-bold">
          Community &amp; mentorship
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">
          Ganymede students are part of the wider Patchwork Labs Slack
          community, where they can get help from peers working on their own
          projects. We&rsquo;re also building out a network of mentor
          volunteers to provide guidance beyond peer support.
        </p>
      </section>

      {/* Compute + publication */}
      <section className="grid gap-6 py-12 sm:grid-cols-2">
        <div className="patch bg-sky-soft p-6 patch-tilt-l">
          <h2 className="font-display text-2xl font-bold">Compute</h2>
          <p className="mt-3 text-ink-soft">
            Ganymede currently runs on compute sourced opportunistically from
            cloud providers. The target: self-hosted servers, built from
            in-kind hardware donations.
          </p>
        </div>
        <div className="patch bg-violet-soft p-6 patch-tilt-r">
          <h2 className="font-display text-2xl font-bold">Publication</h2>
          <p className="mt-3 text-ink-soft">
            Every completed project is open-sourced, with findings posted
            publicly. We&rsquo;re also working toward a path to formal
            publication for standout projects down the line.
          </p>
        </div>
      </section>

      {/* Safety */}
      <section className="py-12">
        <h2 className="font-display text-3xl font-bold">
          Safety &amp; responsible use
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">
          Most Ganymede participants are minors, so the program is built with
          basic due diligence in mind — enough to keep everyone safe without
          burying makers in bureaucracy:
        </p>
        <ul className="mt-6 max-w-2xl space-y-3 text-ink-soft">
          {safeguards.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span aria-hidden className="select-none text-grape">
                ✦
              </span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Get involved */}
      <section className="py-12 pb-20">
        <h2 className="font-display text-3xl font-bold">Get involved</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="patch bg-grape-soft p-6 patch-tilt-l">
            <h3 className="font-display text-xl font-bold">Students</h3>
            <p className="mt-3 text-ink-soft">
              Our pilot is currently invite-only, but the best way to
              introduce yourself is to join the Patchwork Labs Slack community
              — or email your project pitch straight to{" "}
              <a
                href={`mailto:${GANYMEDE_EMAIL}`}
                className="font-medium text-grape hover:underline"
              >
                {GANYMEDE_EMAIL}
              </a>
              .
            </p>
            <a
              href={SLACK_URL}
              className="stitch mt-5 inline-block bg-grape px-5 py-2.5 font-medium text-paper transition-transform hover:-translate-y-0.5"
            >
              Join our Slack →
            </a>
            <p className="mt-3 text-sm text-ink-soft">
              For now, email{" "}
              <a
                href={SLACK_URL}
                className="font-medium text-grape hover:underline"
              >
                {SLACK_EMAIL}
              </a>{" "}
              for an invite — a smoother flow is coming soon.
            </p>
          </div>
          <div className="patch bg-teal-soft p-6 patch-tilt-r">
            <h3 className="font-display text-xl font-bold">
              Companies &amp; partners
            </h3>
            <p className="mt-3 text-ink-soft">
              We&rsquo;re seeking in-kind donations of GPUs, servers,
              networking equipment, and storage — retired clusters and
              engineering samples very much included. We&rsquo;d rather give
              your hardware a home doing real science than see it go to a
              reseller or recycler, and as a registered 501(c)(3) we can
              provide tax documentation for donations.
            </p>
            <a
              href={`mailto:${GANYMEDE_EMAIL}`}
              className="stitch mt-5 inline-block bg-teal px-5 py-2.5 font-medium text-paper transition-transform hover:-translate-y-0.5"
            >
              Email {GANYMEDE_EMAIL} →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
