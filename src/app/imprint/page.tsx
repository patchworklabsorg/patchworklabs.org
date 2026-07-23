import type { Metadata } from "next";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Imprint",
  description:
    "Legal notice (Impressum) for Patchwork Labs in accordance with § 5 DDG: operator identification, representative, and contact details.",
  alternates: { canonical: "/imprint" },
};

export default function Imprint() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6">
      <section className="py-12 sm:py-14">
        <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
          Imprint
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-soft">
          Legal notice (Impressum) in accordance with § 5 DDG
          (Digitale-Dienste-Gesetz).
        </p>
      </section>

      <section className="py-8">
        <h2 className="font-display text-3xl font-bold">Service provider</h2>
        <div className="patch mt-8 max-w-2xl bg-grape-soft p-6 sm:p-8">
          <p className="font-display text-xl font-bold">Patchwork Labs</p>
          <p className="mt-2 text-ink-soft">
            A registered 501(c)(3) nonprofit organization (EIN: 39-3310316),
            incorporated in the United States.
          </p>
          <p className="mt-4 text-ink-soft">
            36 Old Quarry Road
            <br />
            Fayston, VT 05673
            <br />
            United States
          </p>
          <p className="mt-4 text-ink-soft">
            Represented by: Jasper Mayone, Founder &amp; Operations Director
          </p>
        </div>
      </section>

      <section className="py-8">
        <h2 className="font-display text-3xl font-bold">Contact</h2>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">
          Email:{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-medium text-grape hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
      </section>

      <section className="py-8 pb-16">
        <h2 className="font-display text-3xl font-bold">
          Responsible for content
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">
          Responsible for content in accordance with § 18 Abs. 2 MStV: Jasper
          Mayone, address as above.
        </p>
      </section>
    </div>
  );
}
