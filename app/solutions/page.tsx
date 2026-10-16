import SolutionsPageSections from "@/components/sections/solutions/SolutionsPageSections";
import { siteConfig, solutionsPage } from "@/constants";
import { pageMetadata } from "@/lib/page-metadata";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: "Solutions",
  description: `${solutionsPage.hero.description} ${siteConfig.name} brings fleet operations, compliance, safety, and enterprise data into one platform.`,
  path: "/solutions",
});

export default function SolutionsPage() {
  return <SolutionsPageSections />;
}
