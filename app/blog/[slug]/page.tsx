import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogArticle from "@/components/sections/blog/BlogArticle";
import { blogPosts, getBlogPostBySlug, siteConfig } from "@/constants";
import { siteUrl } from "@/lib/site-url";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Article not found" };
  }

  const path = `/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: path },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: path,
      type: "article",
      publishedTime: post.publishedAt,
      images: [{ url: post.coverImage, alt: post.coverImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const base = siteUrl();
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    image: new URL(post.coverImage, base).toString(),
    mainEntityOfPage: `${base}/blog/${post.slug}`,
    author: {
      "@type": "Organization",
      name: post.author,
      url: base,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: base,
      logo: {
        "@type": "ImageObject",
        url: `${base}/logo.svg`,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />
      <BlogArticle post={post} />
    </>
  );
}
