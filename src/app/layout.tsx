import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import TopBar from "@/components/layout/TopBar";
import Footer from "@/components/layout/Footer";
import StickyMobileActions from "@/components/layout/StickyMobileActions";
import { siteConfig } from "@/lib/config";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-worksans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Transport, Tours, Safaris & Accommodation in Kenya`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "JoseAli Safaris",
    "JoseAli Tours",
    "Mombasa airport transfer",
    "SGR transfer Mombasa",
    "Kenya safari",
    "Diani tours",
    "Kenya travel agency",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Transport, Tours, Safaris & Accommodation in Kenya`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Transport, Tours, Safaris & Accommodation in Kenya`,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phoneE164,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mombasa",
      addressCountry: "KE",
    },
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram, siteConfig.social.youtube],
  };

  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${workSans.variable} antialiased bg-sand-50 text-ink-900`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[999] focus:rounded-sm focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-forest-950 focus:shadow-lg"
        >
          Skip to main content
        </a>
        <TopBar />
        <Header />
        <main id="main-content" className="pb-16 lg:pb-0">
          {children}
        </main>
        <Footer />
        <StickyMobileActions />
      </body>
    </html>
  );
}
