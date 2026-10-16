import AboutPageSections from "@/components/sections/about/AboutPageSections";
import { aboutPage } from "@/constants";
import { pageMetadata } from "@/lib/page-metadata";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description: `${aboutPage.whoBody}`,
  path: "/about",
});

export default function AboutPage() {
  return <AboutPageSections />;
}
