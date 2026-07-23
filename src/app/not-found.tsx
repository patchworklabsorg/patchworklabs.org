import type { Metadata } from "next";
import { Link } from "next-view-transitions";
import { SLACK_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found",
};

// A little quilt with one patch missing: the page you were looking for.
const PATCHES = [
  "bg-grape-soft",
  "bg-sky-soft",
  "bg-violet-soft",
  "bg-teal-soft",
  null, // the missing patch
  "bg-orchid-soft",
  "bg-violet-soft",
  "bg-grape-soft",
  "bg-sky-soft",
] as const;

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6">
      <section className="flex flex-col-reverse items-start gap-10 py-16 sm:flex-row sm:items-center sm:py-24">
        <div>
          <p className="font-display text-lg font-bold text-grape">404</p>
          <h1 className="font-display mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            This patch isn&rsquo;t on the quilt.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft">
            We checked every square and couldn&rsquo;t find that page. The link
            might have a typo, or the page may have moved somewhere else.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/"
              className="stitch bg-grape px-5 py-2.5 font-medium text-paper transition-transform hover:-translate-y-0.5"
            >
              Back to the homepage
            </Link>
            <a
              href={SLACK_URL}
              className="stitch px-5 py-2.5 font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              Tell us what broke
            </a>
          </div>
        </div>
        <div
          aria-hidden
          className="patch patch-tilt-r grid shrink-0 grid-cols-3 gap-2 bg-paper p-4"
        >
          {PATCHES.map((bg, i) =>
            bg ? (
              <div
                key={i}
                className={`h-12 w-12 rounded-lg border-2 border-dashed border-ink-soft sm:h-14 sm:w-14 ${bg}`}
              />
            ) : (
              <div
                key={i}
                className="h-12 w-12 rounded-lg border-2 border-dashed border-ink-soft opacity-30 sm:h-14 sm:w-14"
              />
            ),
          )}
        </div>
      </section>
    </div>
  );
}
