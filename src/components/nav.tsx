"use client";

import Image from "next/image";
import { Link } from "next-view-transitions";
import { useState } from "react";
import { SLACK_URL } from "@/lib/site";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="mx-auto w-full max-w-4xl px-6 py-6">
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/"
          onClick={close}
          className="font-display flex shrink-0 items-center gap-2.5 text-xl font-bold tracking-tight hover:text-grape"
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

        {/* Desktop links */}
        <nav className="hidden items-center gap-7 text-sm font-medium sm:flex">
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

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="stitch bg-grape-soft px-3 py-1.5 text-sm font-medium sm:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="patch mt-4 flex flex-col gap-4 bg-paper p-5 text-sm font-medium sm:hidden">
          <Link
            href="/ganymede"
            onClick={close}
            className="hover:text-grape hover:underline"
          >
            Project Ganymede
          </Link>
          <Link
            href="/team"
            onClick={close}
            className="hover:text-grape hover:underline"
          >
            Team
          </Link>
          <a
            href={SLACK_URL}
            onClick={close}
            className="stitch bg-grape-soft px-3 py-1.5 text-center text-ink transition-colors hover:bg-grape hover:text-paper"
          >
            Join the Slack
          </a>
        </nav>
      )}
    </header>
  );
}
