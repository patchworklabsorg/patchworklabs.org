import type { Metadata, Viewport } from "next";
import { ViewTransitions } from "next-view-transitions";
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
    "A community of makers from around the world, building everything from rocket engines to scam detection tools. Grants, compute, and people who help each other build.",
  openGraph: {
    title: "Patchwork Labs",
    description:
      "Making making accessible: hardware grants, compute, and a community of makers who help each other build.",
    url: SITE_URL,
    siteName: "Patchwork Labs",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Patchwork Labs: a community of makers, stitched together from around the world.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Patchwork Labs",
    description:
      "Making making accessible: hardware grants, compute, and a community of makers who help each other build.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f5fb" },
    { media: "(prefers-color-scheme: dark)", color: "#16112a" },
  ],
};

// Nonprofit structured data for search engines.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Patchwork Labs",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  email: "team@patchworklabs.org",
  foundingDate: "2025",
  founder: {
    "@type": "Person",
    name: "Jasper Mayone",
  },
  nonprofitStatus: "Nonprofit501c3",
  taxID: "39-3310316",
  description:
    "A community of makers from around the world. Grants for hardware, access to compute, and people who help each other build.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${GeistSans.variable} ${shantellSans.variable} flex min-h-screen flex-col antialiased`}
        >
          {/* Applies a stored light/dark choice before first paint so there's
              no flash. With no stored choice, CSS follows the system theme. */}
          <script
            dangerouslySetInnerHTML={{
              __html: `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`,
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(organizationJsonLd),
            }}
          />
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}
