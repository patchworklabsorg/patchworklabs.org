import Image from "next/image";
import Link from "next/link";
import { SLACK_EMAIL, SLACK_URL } from "@/lib/site";

const offerings = [
  {
    title: "Hardware grants",
    body: "Grants for hardware and tools, so the parts list is never the reason a project stalls.",
    className: "bg-violet-soft patch-tilt-l",
  },
  {
    title: "Compute capacity",
    body: "Access to real compute for projects that need it — training runs, simulations, big builds.",
    className: "bg-sky-soft",
  },
  {
    title: "Community & mentors",
    body: "Makers and mentors who actually want to help you get unstuck, whatever hour it is.",
    className: "bg-teal-soft patch-tilt-r",
  },
];

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6">
      {/* Hero */}
      <section className="flex flex-col-reverse items-start gap-10 py-16 sm:flex-row sm:items-center sm:py-24">
        <div>
          <p className="font-display text-lg text-grape">
            rocket engines · scam detection · robotics · security · whatever
            you&rsquo;re making
          </p>
          <h1 className="font-display mt-4 text-4xl font-bold leading-tight sm:text-6xl">
            A community of makers, stitched together from around the world.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft">
            We believe innovation isn&rsquo;t a function of age, institution,
            or pedigree. It&rsquo;s a function of curiosity and follow-through.
            So we accept anyone 13 and up — and we get out of the way.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={SLACK_URL}
              className="stitch bg-grape px-5 py-2.5 font-medium text-paper transition-transform hover:-translate-y-0.5"
            >
              Join the Slack →
            </a>
            <Link
              href="/ganymede"
              className="stitch px-5 py-2.5 font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              Explore Project Ganymede
            </Link>
          </div>
        </div>
        <Image
          src="/logo.png"
          alt="Patchwork Labs logo: a quilted speech bubble with a needle and thread"
          width={220}
          height={220}
          className="patch patch-tilt-r shrink-0 rounded-2xl"
          priority
        />
      </section>

      {/* Mission */}
      <section className="py-12">
        <h2 className="font-display text-3xl font-bold">Our mission</h2>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">
          We want to make making accessible. That means grants for hardware,
          access to compute capacity, and a community of people who actually
          want to help you get unstuck — whether you&rsquo;re debugging a model
          or soldering a board at 1am.
        </p>
      </section>

      {/* What we offer */}
      <section className="py-12">
        <h2 className="font-display text-3xl font-bold">What we offer</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {offerings.map((o) => (
            <div key={o.title} className={`patch p-5 ${o.className}`}>
              <h3 className="font-display text-xl font-bold">{o.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{o.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects underway */}
      <section className="py-12">
        <h2 className="font-display text-3xl font-bold">Projects underway</h2>
        <div className="patch mt-8 bg-grape-soft p-6 sm:p-8">
          <p className="font-display text-sm font-bold uppercase tracking-wide text-orchid">
            First major initiative
          </p>
          <h3 className="font-display mt-2 text-2xl font-bold">
            Project Ganymede
          </h3>
          <p className="mt-3 max-w-2xl text-ink-soft">
            A program giving makers access to real GPU compute — no university
            affiliation or relocation required — so they can build serious
            technical projects and publish what they make.
          </p>
          <Link
            href="/ganymede"
            className="mt-5 inline-block font-medium text-grape hover:underline"
          >
            More on Project Ganymede →
          </Link>
        </div>
        <p className="mt-6 max-w-2xl text-ink-soft">
          Beyond Ganymede, individual Patchwork Labs members are pursuing their
          own independent projects across robotics, security, and beyond — with
          more community-driven initiatives on the way.
        </p>
      </section>

      {/* Community */}
      <section className="py-12">
        <h2 className="font-display text-3xl font-bold">Community</h2>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">
          We&rsquo;re a growing group of makers — currently 56 members strong on
          Slack — trading ideas, troubleshooting, and pushing each other&rsquo;s
          projects forward. If you&rsquo;re building something, this is a good
          place to not build it alone.
        </p>
        <a
          href={SLACK_URL}
          className="stitch mt-6 inline-block bg-teal px-5 py-2.5 font-medium text-paper transition-transform hover:-translate-y-0.5"
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
      </section>

      {/* Story */}
      <section className="py-12 pb-20">
        <h2 className="font-display text-3xl font-bold">Our story</h2>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">
          Patchwork Labs was founded in 2025 by Jasper Mayone, who set out to
          build something simpler: a place where young makers could get real
          resources and real support, without unnecessary restrictions on who
          gets to participate or what they&rsquo;re allowed to build. That
          founding idea — access without gatekeeping — is still the whole
          point.
        </p>
      </section>
    </div>
  );
}
