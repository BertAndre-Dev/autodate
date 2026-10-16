import type { Metadata } from "next";
import { siteConfig } from "@/constants";
import SiteJsonLd from "@/components/seo/SiteJsonLd";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/motion/PageTransition";
import CookieConsentBanner from "@/components/compliance/CookieConsentBanner";
import { GoogleAnalytics } from "@next/third-parties/google";

const baseUrl = siteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: siteConfig.title,
    template: `%s | ${process.env.NEXT_PUBLIC_SITE_NAME ?? siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: baseUrl }],
  creator: siteConfig.name,
  category: "Fleet management",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/Logo (14).svg",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: baseUrl,
    siteName: process.env.NEXT_PUBLIC_SITE_NAME ?? siteConfig.name,
    type: "website",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased bg-white"
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SiteJsonLd />
        <Navbar />
        <PageTransition>
          <main className="flex-1 bg-white">{children}</main>
        </PageTransition>
        <CookieConsentBanner />
        <GoogleAnalytics gaId="G-5HF6CZ7YXL" />
        <Footer />
      </body>
    </html>
  );
}
