import Image from "next/image";
import Link from "next/link";
import { SLACK_URL } from "@/lib/site";

export default function Nav() {
  return (
    <header className="mx-auto flex w-full max-w-4xl items-center justify-between gap-4 px-6 py-6">
      <Link
        href="/"
        className="font-display flex items-center gap-2.5 text-xl font-bold tracking-tight hover:text-grape"
      >
        <Image
          src="/logo.png"
          alt=""
          width={36}
          height={36}
          className="rounded-lg"
          priority
        />
        Patchwork&nbsp;Labs
      </Link>
      <nav className="flex items-center gap-5 text-sm font-medium sm:gap-7">
        <Link href="/ganymede" className="hover:text-grape hover:underline">
          Project Ganymede
        </Link>
        <Link href="/team" className="hover:text-grape hover:underline">
          Team
        </Link>
        <a
          href={SLACK_URL}
          className="stitch bg-grape-soft px-3 py-1.5 text-ink transition-colors hover:bg-grape hover:text-paper"
        >
          Join the Slack
        </a>
      </nav>
    </header>
  );
}
