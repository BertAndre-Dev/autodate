import type { Metadata } from "next";
import BlogListing from "@/components/sections/blog/BlogListing";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on fleet efficiency, sustainability, and data-driven operations from Autodate SmartFleet.",
  openGraph: {
    title: "Blog | Autodate SmartFleet",
    description:
      "Insights on fleet efficiency, sustainability, and data-driven operations from Autodate SmartFleet.",
    type: "website",
  },
};

export default function BlogPage() {
  return <BlogListing />;
}
