import type { Metadata } from "next";
import { Link } from "next-view-transitions";
import DeletionPipeline from "@/components/your-data/deletion-pipeline";
import KnotDiagram from "@/components/your-data/knot-diagram";
import RetentionTable from "@/components/your-data/retention-table";
import RetentionTimeline from "@/components/your-data/retention-timeline";
import VerificationFlow from "@/components/your-data/verification-flow";
import {
  CONTACT_EMAIL,
  DATA_PAGE_PATH,
  SITE_URL,
  SLACK_URL,
} from "@/lib/site";

// Public, plain-English version of how Weave handles ID checks and personal
// data. Use <Placeholder> (components/your-data/placeholder) for a number
// that is not decided yet: it blocks a production deploy until it is replaced.

const description =
  "How we check IDs for program resources, what we collect and why, and what happens to your data when you delete your account. Written for members and their parents or guardians.";

// Page-level openGraph/twitter replace the layout's objects wholesale, so the
// shared image and site fields are repeated here.
export const metadata: Metadata = {
  title: "What we do with your data",
  description,
  alternates: { canonical: DATA_PAGE_PATH },
  openGraph: {
    title: "What we do with your data | Patchwork Labs",
    description,
    url: `${SITE_URL}${DATA_PAGE_PATH}`,
    siteName: "Patchwork Labs",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Patchwork Labs: a community of makers, stitched together from around the world.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What we do with your data | Patchwork Labs",
    description,
    images: ["/og.png"],
  },
};

const sections = [
  { id: "open", label: "The community is open" },
  { id: "id-check", label: "The ID check" },
  { id: "collect", label: "What we collect" },
  { id: "under-18", label: "Members under 18" },
  { id: "demographics", label: "Demographics" },
  { id: "id-images", label: "Your ID images" },
  { id: "delete", label: "Download or delete" },
  { id: "what-delete-deletes", label: "What delete deletes" },
  { id: "knot", label: "The Knot" },
];

const collected = [
  {
    title: "Your ID",
    body: "A photo or scan of an ID, like a passport or ID card. We use it to check that you are a real person, and to confirm your age and where you live. We use it for the ID check and nothing else.",
    className: "bg-grape-soft patch-tilt-l",
  },
  {
    title: "The call record",
    body: "Who was on your video call, when it happened, which ID we looked at, the result, and the reason. The person who did the call writes this down. There is no video or audio.",
    className: "bg-teal-soft patch-tilt-r",
  },
  {
    title: "US residency",
    body: "Whether you live in the US, the US state, the type of document that showed it, and the date. Some compute partners are open only to people who live in the US. We never ask about citizenship. If your ID does not show a US address, you can send a school enrollment record or a parent's or guardian's ID and address. That document follows the same rules as your ID images. The result is good for 12 months, or until you move to another state or country.",
    className: "bg-teal-soft patch-tilt-l",
  },
  {
    title: "Demographic answers",
    body: "Things like your age range and gender, which you tell us yourself. Funders ask us for totals, so we ask you. Only the totals ever leave the vault.",
    className: "bg-sky-soft patch-tilt-l",
  },
  {
    title: "Parent or guardian contact",
    body: "For members under 18, the name and email address of a parent or guardian, and their consent.",
    className: "bg-orchid-soft patch-tilt-r",
  },
  {
    title: "Grant records",
    body: "Which grants you got, and the money records that tax law and our funders make us keep.",
    className: "bg-violet-soft patch-tilt-l",
  },
  {
    title: "The Knot",
    body: "A one-way fingerprint made at your ID check. It stops one person from getting the same grant twice under a new name. More about it below.",
    className: "bg-grape-soft patch-tilt-r",
  },
];

function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="mt-6 max-w-2xl space-y-3 text-ink-soft">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span aria-hidden className="select-none text-grape">
            ✦
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function YourData() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6">
      {/* Hero */}
      <section className="py-12 sm:py-14">
        <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
          What we do with your data
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-soft">
          The short version: anyone can join the community without an ID.
          Before you get program resources, like compute or grant money, we
          check your ID on a live video call that is never recorded. We delete
          your ID images soon after you pass. Nobody here can read your
          demographic answers. When you delete your account, your readable
          data goes, and we tell you exactly what stays and why.
        </p>
        <p className="mt-4 max-w-2xl text-ink-soft">
          This page is for members, and for parents and guardians of members
          under 18. Our{" "}
          <Link
            href="/privacy"
            className="font-medium text-grape hover:underline"
          >
            privacy policy
          </Link>{" "}
          covers everything else we collect.
        </p>
        <p className="mt-4 text-sm text-ink-soft">
          Last updated October 23, 2026.
        </p>

        <nav
          aria-label="On this page"
          className="patch mt-8 max-w-2xl bg-paper p-5 text-sm"
        >
          <p className="font-display font-bold">On this page</p>
          <ul className="mt-3 grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-grape hover:underline"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      {/* The community is open */}
      <section id="open" className="scroll-mt-6 py-8">
        <h2 className="font-display text-3xl font-bold">
          The community is open
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="patch bg-teal-soft p-6 patch-tilt-l">
            <h3 className="font-display text-xl font-bold">
              No ID to join or talk
            </h3>
            <p className="mt-2 text-ink-soft">
              You can{" "}
              <a
                href={SLACK_URL}
                className="font-medium text-grape hover:underline"
              >
                join the Slack
              </a>
              , ask questions, and share what you build. You never show us an
              ID for that.
            </p>
          </div>
          <div className="patch bg-grape-soft p-6 patch-tilt-r">
            <h3 className="font-display text-xl font-bold">
              An ID check for program resources
            </h3>
            <p className="mt-2 text-ink-soft">
              Compute, server access, and grant money are real resources. So
              before you get them, we check that you are a real person, how old
              you are, and where you live. Some of this is the law. Some of it
              stops one person from collecting the same grant twice.
            </p>
          </div>
        </div>
      </section>

      {/* The ID check */}
      <section id="id-check" className="scroll-mt-6 py-8">
        <h2 className="font-display text-3xl font-bold">How the ID check works</h2>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">
          Everyone goes through the same steps. Our own team does too. There
          are no shortcuts, because shortcuts are where fraud gets in.
        </p>

        <VerificationFlow />

        <ol className="mt-8 max-w-2xl space-y-4 text-ink-soft">
          <li>
            <span className="font-semibold text-ink">1. Send your ID.</span>{" "}
            Before the call, you send a photo or scan of your ID.
          </li>
          <li>
            <span className="font-semibold text-ink">2. We check it.</span> A
            person on our small verification team looks at it. If there is a
            problem, like a blurry photo, we tell you what to fix and you send
            it again.
          </li>
          <li>
            <span className="font-semibold text-ink">3. A live video call.</span>{" "}
            You hold up your ID, and we check that your face matches it. A live
            call is much harder to fake than a photo.
          </li>
          <li>
            <span className="font-semibold text-ink">4. A decision.</span> Pass
            or not, the person on the call writes down the result and the
            reason.
          </li>
        </ol>

        <div className="patch mt-8 max-w-2xl bg-orchid-soft p-6 sm:p-8">
          <h3 className="font-display text-2xl font-bold">
            We never record the call
          </h3>
          <p className="mt-3 text-ink-soft">
            No video. No audio. No screenshots. The only thing we keep is what
            the person on the call writes down: who was there, when, which ID
            we looked at, the result, and the reason. A video we never saved
            can&rsquo;t be leaked, stolen, or handed over.
          </p>
        </div>

        <h3 className="font-display mt-10 text-2xl font-bold">
          If you don&rsquo;t pass
        </h3>
        <Bullets
          items={[
            <>
              It isn&rsquo;t the end. After a wait of 14 days, you can start
              again from step 1.
            </>,
            "Your next try is always with a different person. No one person can fail you again and again, or pass you again and again.",
            "If a second call does not pass, the verification team lead looks at the whole history together, so you are not stuck in a loop.",
            "Every try is written down and linked to the one before it, so if you disagree with a result, we can look at what really happened.",
          ]}
        />

        <h3 className="font-display mt-10 text-2xl font-bold">
          How long a pass lasts
        </h3>
        <Bullets
          items={[
            "A pass has no time limit. You don’t check again every year.",
            "We ask for a new check only if your birthday or your legal name changes on your account, or after we review a block flag on your record. We tell you why.",
          ]}
        />
      </section>

      {/* What we collect */}
      <section id="collect" className="scroll-mt-6 py-8">
        <h2 className="font-display text-3xl font-bold">
          What we collect, and why
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">
          This is the data that the ID check and our programs add to your account. Every piece
          has an answer to three questions: can you download it, can you
          delete it, and if not, which rule makes us keep it and for how long.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {collected.map((c) => (
            <div key={c.title} className={`patch p-6 ${c.className}`}>
              <h3 className="font-display text-xl font-bold">{c.title}</h3>
              <p className="mt-2 text-ink-soft">{c.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-ink-soft">
          Sensitive data is encrypted when we store it. We never sell any of
          it, and we never use it for ads.
        </p>
      </section>

      {/* Minors */}
      <section id="under-18" className="scroll-mt-6 py-8">
        <h2 className="font-display text-3xl font-bold">Members under 18</h2>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">
          Members must be 13 or older. If you are under 18, you can&rsquo;t
          sign agreements on your own, so a parent or guardian gives consent
          first. We keep their contact details on file while you take part.
        </p>
        <Bullets
          items={[
            "A parent or guardian must be on the video call with you. You can’t pass the check without them.",
            "We keep the guardian contact until you turn 18 or leave the program. When you delete your account, we delete it.",
            <>
              Parents and guardians can email{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-medium text-grape hover:underline"
              >
                {CONTACT_EMAIL}
              </a>{" "}
              any time to ask what we have, or to ask us to delete it.
            </>,
          ]}
        />
      </section>

      {/* Demographics */}
      <section id="demographics" className="scroll-mt-6 py-8">
        <h2 className="font-display text-3xl font-bold">
          Your demographic answers
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">
          Funders want to know who our programs reach, like how many members
          are in each age range. So we ask you some questions about yourself.
          Here is how we protect your answers.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="patch bg-sky-soft p-6 patch-tilt-l">
            <h3 className="font-display text-xl font-bold">
              Your answers come from you
            </h3>
            <p className="mt-2 text-ink-soft">
              No ID ever changes what you tell us
              about yourself. On the call, we only check that the age and
              region you gave don&rsquo;t clash with your ID. We write down
              &ldquo;yes&rdquo; or &ldquo;no&rdquo;, and we never copy anything
              from your ID into your answers. We never check gender against an
              ID. You know who you are.
            </p>
          </div>
          <div className="patch bg-violet-soft p-6 patch-tilt-r">
            <h3 className="font-display text-xl font-bold">
              Nobody can read your answers
            </h3>
            <p className="mt-2 text-ink-soft">
              Your answers are locked in an encrypted vault. No screen shows
              them, and no export includes them. Nobody at Patchwork Labs can
              read one person&rsquo;s answers. Not our staff, not our admins,
              not anyone.
            </p>
          </div>
        </div>
        <Bullets
          items={[
            "The only thing that comes out of the vault is totals, like “40 members aged 13 to 15”.",
            <>
              If a group is very small, we hide it, so nobody can work out who
              is in it. A group needs at least 10 people before we show it.
            </>,
            "When you delete your account, your answers are added to the totals as general ranges, and your encrypted record is destroyed. Until our next report run, those ranges wait in sealed form with no link to you.",
          ]}
        />
      </section>

      {/* ID images */}
      <section id="id-images" className="scroll-mt-6 py-8">
        <h2 className="font-display text-3xl font-bold">Your ID images</h2>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">
          We delete your ID images 7 days after you pass. If you don&rsquo;t
          pass, or we ask you for a new photo, we delete them 30 days after
          that check ends. A document that shows where you live (for the US
          residency check) follows the same rules. Until then, they are locked away. The one person who checks your ID
          before the call can see it only until that check ends, and every
          look is logged. Then we seal it, and only two of our three key
          holders together can open it.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <div className="patch bg-grape-soft p-5 patch-tilt-l">
            <p className="font-display text-3xl font-bold text-grape">2 of 3</p>
            <h3 className="font-display mt-1 text-lg font-bold">key holders</h3>
            <p className="mt-2 text-sm text-ink-soft">
              Three named people hold hardware keys. After the check before the
              call, a sealed ID image opens only when two of them use their keys
              together. Nobody can open one alone. There is no folder of IDs to browse.
            </p>
          </div>
          <div className="patch bg-teal-soft p-5">
            <p className="font-display text-3xl font-bold text-teal">
              Every
            </p>
            <h3 className="font-display mt-1 text-lg font-bold">
              access is logged
            </h3>
            <p className="mt-2 text-sm text-ink-soft">
              If anyone opens a stored image, the key holders who approved it
              and the verification team lead are told right away. Our board
              sees every one in its regular report.
            </p>
          </div>
          <div className="patch bg-orchid-soft p-5 patch-tilt-r">
            <p className="font-display text-3xl font-bold text-orchid">You</p>
            <h3 className="font-display mt-1 text-lg font-bold">are told</h3>
            <p className="mt-2 text-sm text-ink-soft">
              We tell you within 72 hours. The only exception is an active
              fraud investigation. Then an owner or our verification team lead
              must agree to the wait (never the person who asked for it), and
              we still tell you at most 30 days later.
            </p>
          </div>
        </div>
      </section>

      {/* Download or delete */}
      <section id="delete" className="scroll-mt-6 py-8">
        <h2 className="font-display text-3xl font-bold">
          Download or delete your data
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">
          You can download a copy of your data from your account. You can also
          delete your account and everything we don&rsquo;t have to keep by
          law. This is real deletion, not just hiding your account. It follows
          the same written steps every time, and every run is logged.
        </p>
        <p className="mt-4 max-w-2xl text-ink-soft">
          If you don&rsquo;t sign in for 5 years, we delete your account with
          the same steps. We email you 60 days and 7 days before. Any sign-in
          resets the clock.
        </p>

        <DeletionPipeline />

        <div className="patch mt-8 max-w-2xl bg-teal-soft p-6">
          <h3 className="font-display text-xl font-bold">Your deletion receipt</h3>
          <p className="mt-2 text-ink-soft">
            At the end you get a receipt. It lists what we deleted, what we
            kept, and the rule or law that makes us keep each thing. No
            surprises.
          </p>
        </div>
      </section>

      {/* What delete actually deletes */}
      <section id="what-delete-deletes" className="scroll-mt-6 py-8">
        <h2 className="font-display text-3xl font-bold">
          What delete actually deletes
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">
          Here is every kind of data, and what happens to it when you delete
          your account. Each one is deleted, added to anonymous totals, or kept
          for a set time because a rule or law makes us.
        </p>

        <RetentionTable />

        <p className="mt-6 max-w-2xl text-ink-soft">
          About the totals: they are just counts, like &ldquo;12 members from
          Europe got a grant in 2026&rdquo;. They have no names and no rows
          for single people, so nothing in them can be traced back to you.
          Small groups stay hidden here too.
        </p>

        <RetentionTimeline />
      </section>

      {/* The Knot */}
      <section id="knot" className="scroll-mt-6 py-8">
        <h2 className="font-display text-3xl font-bold">
          The Knot: the one thing we keep
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">
          When you cut a thread, the knot stays tied. We want deleting your
          account to be real. We also need to stop someone from deleting
          everything, coming back as a &ldquo;new&rdquo; person, and getting
          the same grant again. The Knot lets us do both.
        </p>

        <KnotDiagram />

        <h3 className="font-display mt-10 text-2xl font-bold">
          What the Knot is
        </h3>
        <Bullets
          items={[
            "At your ID check, we turn a few details from your ID into fingerprints with a one-way function. We can check if a new fingerprint matches an old one. We can’t turn a fingerprint back into your name or ID number.",
            "Some fingerprints are strong: they come from an ID number, so a match means the same person. One is soft: it comes from your legal name and birthday, which two different people can share.",
            "If you verify again with a new ID while your account is open, the new fingerprint joins your set.",
            "If your legal name changes, you show us the new document. Two of our team sign off, the new fingerprints join your set, and you keep your standing.",
          ]}
        />

        <h3 className="font-display mt-10 text-2xl font-bold">
          What it holds, and what it never does
        </h3>
        <Bullets
          items={[
            "The Knot holds only two things: a yes/no flag for whether you are blocked from our programs, and which program grants you got.",
            <>
              The grant list is how we keep grant limits fair: one grant per
              person per program, for life. In a rare case, the program lead
              can approve one more, with sign-off from a board member and a
              written reason.
            </>,
            "It holds no name, no reason, and no history. Reasons live in the ID check records, and those are destroyed when their time is up.",
            "If you come back in good standing, you simply verify again like anyone else. You start fresh.",
            "A name and birthday match can only bring in a second person to take a closer look. It can never deny you on its own. A birthday can call a human, but it can’t decide anything.",
            "Honest note: a fingerprint can’t be reversed. We make the fingerprints with a secret key that we keep apart from the database. But someone who had that key and already knew your details could make the same fingerprint and compare. That is why we protect the Knot as carefully as everything else.",
          ]}
        />
      </section>

      {/* Questions */}
      <section className="py-8 pb-16">
        <h2 className="font-display text-3xl font-bold">Questions</h2>
        <div className="patch mt-8 max-w-2xl bg-orchid-soft p-6 sm:p-8">
          <p className="text-ink-soft">
            Something here unclear, or something you want to check? Email{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-medium text-grape hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
            . Parents and guardians are welcome to ask too. If we change how
            we handle your data, we update this page and the date at the top,
            and big changes get announced in the Slack.
          </p>
        </div>
      </section>
    </div>
  );
}
