"use client";

import { useEffect, useState } from "react";

type Theme = "system" | "light" | "dark";

const NEXT: Record<Theme, Theme> = {
  system: "light",
  light: "dark",
  dark: "system",
};

const LABEL: Record<Theme, string> = {
  system: "Theme: matching your system. Switch to light.",
  light: "Theme: light. Switch to dark.",
  dark: "Theme: dark. Switch to system.",
};

// The nav renders two of these (desktop and mobile), so the DOM attribute is
// the source of truth and a window event keeps every instance's icon in sync.
function currentTheme(): Theme {
  const t = document.documentElement.dataset.theme;
  return t === "light" || t === "dark" ? t : "system";
}

function applyTheme(theme: Theme) {
  if (theme === "system") {
    delete document.documentElement.dataset.theme;
    localStorage.removeItem("theme");
  } else {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }
  window.dispatchEvent(new Event("patchwork-theme"));
}

export default function ThemeToggle() {
  // Stays null until mounted so the server and first client render match;
  // the real value lives in the DOM/localStorage, which the server can't see.
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const sync = () => setTheme(currentTheme());
    sync();
    window.addEventListener("patchwork-theme", sync);
    return () => window.removeEventListener("patchwork-theme", sync);
  }, []);

  const cycle = () => applyTheme(NEXT[currentTheme()]);

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={theme ? LABEL[theme] : "Toggle theme"}
      title={theme ? LABEL[theme] : undefined}
      className="stitch flex h-9 w-9 items-center justify-center text-ink-soft transition-colors hover:text-grape"
    >
      {theme === "light" ? (
        /* sun */
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
          <circle cx="8" cy="8" r="3.25" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M8 1v1.75M8 13.25V15M15 8h-1.75M2.75 8H1m11.6-4.6-1.24 1.24M4.64 11.36 3.4 12.6m9.2 0-1.24-1.24M4.64 4.64 3.4 3.4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ) : theme === "dark" ? (
        /* moon */
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path
            d="M13.5 9.5A6 6 0 0 1 6.5 2.5a6 6 0 1 0 7 7Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        /* half sun / half moon for "match the system" */
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
          <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 2a6 6 0 0 1 0 12Z" fill="currentColor" />
        </svg>
      )}
    </button>
  );
}
