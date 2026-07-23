import localFont from "next/font/local";

// All fonts are self-hosted: Geist ships from the `geist` npm package, and
// Shantell Sans (display) is vendored in src/fonts/ under the OFL — no
// Google Fonts dependency at build or runtime.
// The dafont stitch fonts (also in src/fonts/, license pending) were tried
// and shelved for now — wire them back the same way if they return.
// Lives here (not layout.tsx) so global-error.tsx, which replaces the root
// layout entirely, can load the same fonts.
export const shantellSans = localFont({
  src: "../fonts/ShantellSans-latin-var.woff2",
  weight: "300 800",
  variable: "--font-shantell",
});
