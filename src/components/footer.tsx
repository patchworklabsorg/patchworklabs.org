import { Link } from "next-view-transitions";
import { CONTACT_EMAIL, DONATE_EMAIL, SLACK_URL } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t-2 border-dashed border-ink-soft/40">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-10 text-sm text-ink-soft sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-md space-y-2">
          <p className="font-display text-base font-bold text-ink">
            Patchwork Labs
          </p>
          <p>
            A registered 501(c)(3) nonprofit organization (EIN: 39-3310316),
            founded in 2025.
          </p>
          <p>
            Questions, partnerships, or funding inquiries:{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-medium text-grape hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
          <p>
            Making a financial contribution, or want to work on a project with
            us? Email Jasper directly:{" "}
            <a
              href={`mailto:${DONATE_EMAIL}`}
              className="font-medium text-grape hover:underline"
            >
              {DONATE_EMAIL}
            </a>
          </p>
        </div>
        <nav className="flex flex-col gap-2">
          <Link href="/" className="hover:text-grape hover:underline">
            Home
          </Link>
          <Link href="/ganymede" className="hover:text-grape hover:underline">
            Project Ganymede
          </Link>
          <Link href="/team" className="hover:text-grape hover:underline">
            Team
          </Link>
          <Link href="/conduct" className="hover:text-grape hover:underline">
            Code of conduct
          </Link>
          <Link href="/privacy" className="hover:text-grape hover:underline">
            Privacy policy
          </Link>
          <a href={SLACK_URL} className="hover:text-grape hover:underline">
            Slack community
          </a>
        </nav>
      </div>
    </footer>
  );
}
