import type { Metadata } from "next";
import { siteConfig } from "@/constants";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/motion/PageTransition";
import CookieConsentBanner from "@/components/compliance/CookieConsentBanner";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  icons: {
    icon: "/Logo (14).svg",
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
