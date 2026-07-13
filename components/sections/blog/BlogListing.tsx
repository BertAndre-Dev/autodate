import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { blogPosts } from "@/constants";
import { formatBlogDate } from "@/lib/blog";

export default function BlogListing() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 md:px-8 md:py-16 lg:px-10 xl:px-14">
      <ScrollReveal>
        <header className="max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-[#EFEFEF] px-4 py-2 text-xs font-semibold text-[#B71C1C] ring-1 ring-black/5">
            Blog
          </span>
          <h1 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-black sm:text-4xl md:text-5xl">
            Insights for smarter fleet operations
          </h1>
          <p className="mt-4 text-base leading-7 text-[#4C4C4C] md:text-lg">
            Practical perspectives on efficiency, sustainability, and
            data-driven fleet management from Autodate SmartFleet.
          </p>
        </header>
      </ScrollReveal>

      <ul className="mt-12 space-y-10 md:mt-16">
        {blogPosts.map((post, index) => (
          <li key={post.slug}>
            <ScrollReveal delayMs={index * 80}>
              <article>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B71C1C]/40"
                >
                  <div className="relative aspect-[21/9] overflow-hidden rounded-2xl bg-neutral-100">
                    <Image
                      src={post.coverImage}
                      alt={post.coverImageAlt}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 1152px) 100vw, 1152px"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="mt-5 max-w-3xl">
                    <p className="text-xs font-semibold tracking-wide text-[#B71C1C]">
                      {formatBlogDate(post.publishedAt)}
                      <span className="mx-2 text-neutral-300" aria-hidden="true">
                        ·
                      </span>
                      <span className="text-[#4C4C4C]">{post.author}</span>
                    </p>
                    <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight text-black transition-colors group-hover:text-[#B71C1C] sm:text-3xl">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-base leading-7 text-[#4C4C4C]">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center text-sm font-semibold text-[#B71C1C]">
                      Read article
                      <span
                        className="ml-1 transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </article>
            </ScrollReveal>
          </li>
        ))}
      </ul>
    </div>
  );
}
