import ContactPageSections from "@/components/sections/contact/ContactPageSections";
import { siteConfig } from "@/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Visit, call, or message ${siteConfig.name}. The team replies to sales, partnership, and general questions.`,
};

export default async function ContactPage({
  searchParams,
}: Readonly<{
  searchParams: Promise<{ email?: string }>;
}>) {
  const params = await searchParams;
  const email = typeof params.email === "string" ? params.email : undefined;

  return <ContactPageSections initialEmail={email} />;
}
