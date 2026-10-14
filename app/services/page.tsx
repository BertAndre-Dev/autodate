import ServicesPageSections from "@/components/sections/services/ServicesPageSections";
import { servicesPage, siteConfig } from "@/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: `${servicesPage.hero.subtitle} ${siteConfig.name} covers purchase, maintenance, compliance, disposal, and the Smart Fleet platform.`,
};

export default function ServicesPage() {
  return <ServicesPageSections />;
}
