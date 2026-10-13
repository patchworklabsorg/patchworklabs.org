import type { Metadata } from "next";
import { Link } from "next-view-transitions";
import { CONTACT_EMAIL, DATA_PAGE_PATH } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "What Patchwork Labs collects, why we collect it, and what we do with it. The short version: as little as possible, and we never sell it.",
  alternates: { canonical: "/privacy" },
};

const collected = [
  {
    title: "Email",
    body: "When you email us with a question, a donation, or a project pitch, we keep your name, address, and what you wrote so we can reply and follow through.",
    className: "bg-grape-soft patch-tilt-l",
  },
  {
    title: "The Slack",
    body: "Our community runs on Slack, so Slack's own privacy policy covers the platform itself. Anything you post in channels is visible to other members.",
    className: "bg-teal-soft patch-tilt-r",
  },
  {
    title: "Your Weave account",
    body: "Weave is our sign-in for the Slack and our apps. It keeps your name, email address, birthday and profile, and the groups and apps you use. We ask for your birthday because members must be 13 or older, and members under 18 need consent from a parent or guardian.",
    className: "bg-orchid-soft patch-tilt-l",
  },
  {
    title: "Project Ganymede",
    body: (
      <>
        To give you access to compute we ask for your name, email, and what
        you&rsquo;re building. Shared infrastructure keeps usage logs so we
        can keep it healthy and fairly shared. Program resources also need an
        ID check. Read{" "}
        <Link
          href={DATA_PAGE_PATH}
          className="font-medium text-grape hover:underline"
        >
          what we do with your data
        </Link>{" "}
        to see how the check works and what we keep.
      </>
    ),
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

const guardianRetention = [
  "We keep a consent and the parent or guardian's contact details while the member is under 18 and has an account. When the member turns 18 or deletes their account, we delete them.",
  "If a parent or guardian does not answer, we delete their name and email address 30 days after the link expires.",
  "A parent or guardian can take their consent back at any time from the link in their email.",
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
        <p className="mt-4 text-sm text-ink-soft">Last updated October 12, 2026.</p>
        <Link
          href={DATA_PAGE_PATH}
          className="patch group mt-8 block max-w-2xl bg-teal-soft p-6 transition-transform hover:-translate-y-0.5"
        >
          <p className="font-display text-xl font-bold">
            What we do with your data{" "}
            <span aria-hidden className="text-teal">
              →
            </span>
          </p>
          <p className="mt-2 text-ink-soft">
            The plain-English guide to ID checks, the video call (never
            recorded), your demographic answers, deleting your account, and
            the one thing we keep after you leave.
          </p>
        </Link>
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
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">
          Members under 18 need consent from a parent or guardian before they
          join the Slack or use our apps. We email the parent or guardian a
          link. When they give consent, we keep their name, email address and
          typed signature, encrypted. We also keep the time, their IP address,
          their browser and an identifier for their device, and use these only
          to check that the consent is real.
        </p>
        <ul className="mt-6 max-w-2xl space-y-3 text-ink-soft">
          {guardianRetention.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden className="select-none text-grape">
                ✦
              </span>
              {item}
            </li>
          ))}
        </ul>
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
