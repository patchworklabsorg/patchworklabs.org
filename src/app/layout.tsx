import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import localFont from "next/font/local";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

// All fonts are self-hosted: Geist ships from the `geist` npm package, and
// Shantell Sans (display) is vendored in src/fonts/ under the OFL — no
// Google Fonts dependency at build or runtime.
// The dafont stitch fonts (also in src/fonts/, license pending) were tried
// and shelved for now — wire them back the same way if they return.
const shantellSans = localFont({
  src: "../fonts/ShantellSans-latin-var.woff2",
  weight: "300 800",
  variable: "--font-shantell",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Patchwork Labs",
    template: "%s | Patchwork Labs",
  },
  description:
    "A community of makers from around the world, building everything from rocket engines to scam detection tools. Grants, compute, and a community for anyone 13 and up.",
  openGraph: {
    title: "Patchwork Labs",
    description:
      "Making making accessible: hardware grants, compute capacity, and a community of makers for anyone 13 and up.",
    url: SITE_URL,
    siteName: "Patchwork Labs",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${shantellSans.variable} flex min-h-screen flex-col antialiased`}
      >
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
