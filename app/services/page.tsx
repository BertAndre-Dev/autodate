import ServicesPageSections from "@/components/sections/services/ServicesPageSections";
import { servicesPage, siteConfig } from "@/constants";
import { pageMetadata } from "@/lib/page-metadata";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description: `${servicesPage.hero.title}. ${servicesPage.hero.subtitle} ${siteConfig.name} covers purchase, maintenance, compliance, disposal, and the Smart Fleet platform.`,
  path: "/services",
});

export default function ServicesPage() {
  return <ServicesPageSections />;
}
