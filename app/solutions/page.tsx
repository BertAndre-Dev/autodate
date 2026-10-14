import SolutionsPageSections from "@/components/sections/solutions/SolutionsPageSections";
import { siteConfig, solutionsPage } from "@/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions",
  description: `${solutionsPage.hero.description} ${siteConfig.name} brings fleet operations, compliance, safety, and enterprise data into one platform.`,
};

export default function SolutionsPage() {
  return <SolutionsPageSections />;
}
