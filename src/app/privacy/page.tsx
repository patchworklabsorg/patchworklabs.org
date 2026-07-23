import type { Metadata } from "next";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "What Patchwork Labs collects, why we collect it, and what we do with it. The short version: as little as possible, and we never sell it.",
  alternates: { canonical: "/privacy" },
};

const collected = [
  {
    title: "Email",
    body: "When you email us for a Slack invite, a question, a donation, or a project pitch, we keep your name, address, and what you wrote so we can reply and follow through.",
    className: "bg-grape-soft patch-tilt-l",
  },
  {
    title: "The Slack",
    body: "Our community runs on Slack, so Slack's own privacy policy covers the platform itself. Anything you post in channels is visible to other members.",
    className: "bg-teal-soft patch-tilt-r",
  },
  {
    title: "Project Ganymede",
    body: "To give you access to compute we ask for your name, email, and what you're building. Shared infrastructure keeps usage logs so we can keep it healthy and fairly shared.",
    className: "bg-sky-soft patch-tilt-r",
  },
  {
    title: "Hardware grants",
    body: "Shipping parts to you requires a shipping address. We use it to send the grant and share it only with the carrier delivering it.",
    className: "bg-violet-soft patch-tilt-l",
  },
];

const promises = [
  "We never sell or rent your information to anyone.",
  "We don't run ads or ad trackers, here or anywhere else.",
  "We share information only with the services that keep things running (like our web host, Slack, or a shipping carrier), or if the law requires it.",
  "We only ask for what a program actually needs to work.",
];

export default function Privacy() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6">
      <section className="py-12 sm:py-14">
        <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
          Privacy policy
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-soft">
          The short version: we collect as little as we can, we never sell it,
          and you can email us any time to see or delete what we have. Here is
          the longer version, in plain English.
        </p>
        <p className="mt-4 text-sm text-ink-soft">Last updated July 22, 2026.</p>
      </section>

      {/* This website */}
      <section className="py-8">
        <h2 className="font-display text-3xl font-bold">This website</h2>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">
          patchworklabs.org has no accounts, no analytics, no ads, and no
          tracking cookies. Our hosting provider (Vercel) keeps standard server
          logs, things like IP addresses and browser info, for a short time to
          keep the site online and secure. That&rsquo;s it.
        </p>
      </section>

      {/* What we collect */}
      <section className="py-8">
        <h2 className="font-display text-3xl font-bold">
          What we collect, and why
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {collected.map((c) => (
            <div key={c.title} className={`patch p-6 ${c.className}`}>
              <h3 className="font-display text-xl font-bold">{c.title}</h3>
              <p className="mt-2 text-ink-soft">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What we won't do */}
      <section className="py-8">
        <h2 className="font-display text-3xl font-bold">What we promise</h2>
        <ul className="mt-6 max-w-2xl space-y-3 text-ink-soft">
          {promises.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden className="select-none text-grape">
                ✦
              </span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Minors */}
      <section className="py-8">
        <h2 className="font-display text-3xl font-bold">
          Members under 18
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">
          Many of our members are minors, and we take that seriously. We
          collect only what a program needs, and nothing here is ever used for
          advertising. If you&rsquo;re a parent or guardian, you can email us
          any time to see what we have about your kid, or ask us to delete it.
        </p>
      </section>

      {/* Your choices */}
      <section className="py-8 pb-16">
        <h2 className="font-display text-3xl font-bold">Questions and requests</h2>
        <div className="patch mt-8 max-w-2xl bg-orchid-soft p-6 sm:p-8">
          <p className="text-ink-soft">
            Want to see what we have about you, fix something, or have it
            deleted? Email{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-medium text-grape hover:underline"
            >
              {CONTACT_EMAIL}
            </a>{" "}
            and we&rsquo;ll take care of it. We&rsquo;re a small team of
            volunteers, but we answer.
          </p>
          <p className="mt-4 text-ink-soft">
            If this policy changes, we&rsquo;ll update this page and the date
            at the top. Big changes get announced in the Slack.
          </p>
        </div>
      </section>
    </div>
  );
}
