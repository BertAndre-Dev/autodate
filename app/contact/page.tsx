import ContactPageSections from "@/components/sections/contact/ContactPageSections";
import { contactPage, siteConfig } from "@/constants";
import { pageMetadata } from "@/lib/page-metadata";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description: `Book a demo or message ${siteConfig.name} at ${contactPage.email.address} or ${contactPage.call.phone}. ${contactPage.visit.body}.`,
  path: "/contact",
});

export default async function ContactPage({
  searchParams,
}: Readonly<{
  searchParams: Promise<{ email?: string }>;
}>) {
  const params = await searchParams;
  const email = typeof params.email === "string" ? params.email : undefined;

  return <ContactPageSections initialEmail={email} />;
}
