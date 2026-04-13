import type { Metadata } from "next";
import { siteConfig } from "@/constants";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/motion/PageTransition";
import CookieConsentBanner from "@/components/compliance/CookieConsentBanner";
import { GoogleAnalytics } from "@next/third-parties/google";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(
  /\/$/,
  "",
);

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.title,
    template: `%s | ${process.env.NEXT_PUBLIC_SITE_NAME ?? siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/Logo (14).svg",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteUrl,
    siteName: process.env.NEXT_PUBLIC_SITE_NAME ?? siteConfig.name,
    type: "website",
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
