import type { Metadata } from "next";
import BlogListing from "@/components/sections/blog/BlogListing";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Blog",
  description:
    "Insights on fleet efficiency, sustainability, and data-driven operations from AutoDate Smart Fleet.",
  path: "/blog",
});

export default function BlogPage() {
  return <BlogListing />;
}
