"use client";

import { useEffect } from "react";
import Link from "next/link";
import { GeistSans } from "geist/font/sans";
import { shantellSans } from "@/lib/fonts";
import { CONTACT_EMAIL } from "@/lib/site";
import "./globals.css";

// Last-resort error page: rendered when the root layout itself crashes, so
// it has to bring its own <html>, <body>, fonts, and theme handling.
export default function GlobalError({
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${shantellSans.variable} flex min-h-screen flex-col antialiased`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`,
          }}
        />
        <main className="flex flex-1 items-center">
          <div className="mx-auto w-full max-w-4xl px-6 py-16">
            <p className="font-display text-lg font-bold text-orchid">
              Something went wrong
            </p>
            <h1 className="font-display mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              The whole quilt came undone.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-ink-soft">
              Something broke badly enough that we couldn&rsquo;t even load the
              rest of the site. Give it another try, and if it keeps happening,
              email us at{" "}
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
          </div>
        </main>
      </body>
    </html>
  );
}
