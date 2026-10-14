import AboutPageSections from "@/components/sections/about/AboutPageSections";
import { aboutPage, siteConfig } from "@/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: `${aboutPage.subtitle} ${siteConfig.name} supports vehicles from acquisition through disposal.`,
};

export default function AboutPage() {
  return <AboutPageSections />;
}
