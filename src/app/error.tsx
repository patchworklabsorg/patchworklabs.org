"use client";

import { useEffect } from "react";
import { Link } from "next-view-transitions";
import { CONTACT_EMAIL } from "@/lib/site";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto w-full max-w-4xl px-6">
      <section className="py-16 sm:py-24">
        <p className="font-display text-lg font-bold text-orchid">
          Something went wrong
        </p>
        <h1 className="font-display mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          We dropped a stitch.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-soft">
          Something broke while loading this page. That&rsquo;s on us, not you.
          Give it another try, and if it keeps happening, email us at{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-medium text-grape hover:underline"
          >
            {CONTACT_EMAIL}
          </a>{" "}
          so we can mend it.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <button
            type="button"
            onClick={reset}
            className="stitch cursor-pointer bg-grape px-5 py-2.5 font-medium text-paper transition-transform hover:-translate-y-0.5"
          >
            Try again
          </button>
          <Link
            href="/"
            className="stitch px-5 py-2.5 font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            Back to the homepage
          </Link>
        </div>
        {error.digest && (
          <p className="mt-6 text-sm text-ink-soft">
            Error reference: <code>{error.digest}</code>
          </p>
        )}
      </section>
    </div>
  );
}
