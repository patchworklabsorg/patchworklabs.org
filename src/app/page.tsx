import Image from "next/image";
import Link from "next/link";
import { SLACK_EMAIL, SLACK_URL } from "@/lib/site";

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
            or pedigree. It&rsquo;s a function of curiosity and tenacity. If
            you&rsquo;re 13 and up,{" "}
            <a
              href={SLACK_URL}
              className="font-medium text-grape underline hover:text-orchid"
            >
              come join us!
            </a>
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
          Our goal is to make making accessible and break down the barriers
          that keep you from finishing your next project. Be that grants for
          hardware, access to compute, or an amazing community of people,
          we&rsquo;ve got you :)
        </p>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">
          Patchwork Labs was founded in 2025 by Jasper Mayone, and the founding
          idea of access without gatekeeping is still the whole point.
        </p>
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
            A program giving makers access to compute, unblocking projects
            that would have otherwise been infeasible.
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
          own independent projects across robotics, security, and beyond, with
          more community-driven initiatives on the way.
        </p>
      </section>

      {/* Community */}
      <section className="py-12 pb-20">
        <h2 className="font-display text-3xl font-bold">Community</h2>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">
          We&rsquo;re a growing group of makers, currently 56 members strong on
          Slack, trading ideas, troubleshooting, and pushing each other&rsquo;s
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
          for an invite. A smoother flow is coming soon.
        </p>
      </section>

    </div>
  );
}
