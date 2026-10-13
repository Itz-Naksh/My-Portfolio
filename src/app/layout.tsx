import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { personal, socials, timeline } from "@/data/portfolio";
import MotionProvider from "@/components/MotionProvider";
import BackToTop from "@/components/ui/BackToTop";

// Body font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Heading font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const title = `${personal.name} | ${personal.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(personal.siteUrl),
  title: {
    default: title,
    template: `%s | ${personal.name}`,
  },
  description: `${personal.tagline} ${personal.bio[0]}`,
  keywords: [personal.name, personal.role, "portfolio", "web developer", "Next.js", "React"],
  authors: [{ name: personal.name, url: personal.siteUrl }],
  creator: personal.name,
  openGraph: {
    type: "website",
    url: personal.siteUrl,
    title,
    description: personal.tagline,
    siteName: personal.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: personal.tagline,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#7C5CBF",
};

// Structured data so search engines understand who this site is about
const currentJob = timeline.find((t) => t.type === "work");
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personal.name,
  jobTitle: personal.role,
  url: personal.siteUrl,
  email: `mailto:${personal.email}`,
  image: `${personal.siteUrl}${personal.profileImage}`,
  address: { "@type": "PostalAddress", addressLocality: personal.location },
  ...(currentJob && { worksFor: { "@type": "Organization", name: currentJob.organization } }),
  sameAs: socials.filter((s) => s.platform !== "email").map((s) => s.href),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        {/* Skip link for keyboard and screen-reader users */}
        <a
          href="#main"
          className="sr-only rounded-xl bg-primary px-4 py-2 text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100]"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          // Escape "<" so the JSON can never close the script tag early
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
        />
        <MotionProvider>
          {children}
          <BackToTop />
        </MotionProvider>
      </body>
    </html>
  );
}
