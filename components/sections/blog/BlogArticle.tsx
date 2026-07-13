import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/motion/ScrollReveal";
import type { BlogPost } from "@/types";
import { formatBlogDate } from "@/lib/blog";

export default function BlogArticle({ post }: { post: BlogPost }) {
  return (
    <article className="pb-16 md:pb-20">
      <div className="mx-auto w-full max-w-4xl px-4 pt-10 sm:px-6 md:px-8 lg:px-0 md:pt-14">
        <ScrollReveal>
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-medium text-[#4C4C4C] transition-colors hover:text-[#B71C1C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B71C1C]/40"
          >
            <span aria-hidden="true" className="mr-1.5">
              ←
            </span>
            Back to blog
          </Link>
        </ScrollReveal>

        <ScrollReveal delayMs={60}>
          <header className="mt-6">
            <p className="text-xs font-semibold tracking-wide text-[#B71C1C]">
              {formatBlogDate(post.publishedAt)}
              <span className="mx-2 text-neutral-300" aria-hidden="true">
                ·
              </span>
              <span className="text-[#4C4C4C]">{post.author}</span>
            </p>
            <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-black sm:text-4xl md:text-[2.75rem] md:leading-tight">
              {post.title}
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#4C4C4C]">
              {post.excerpt}
            </p>
          </header>
        </ScrollReveal>
      </div>

      <ScrollReveal delayMs={100}>
        <div className="mx-auto mt-8 w-full max-w-4xl px-4 sm:px-6 md:mt-10 md:px-8 lg:px-0">
          <div className="relative aspect-[21/9] overflow-hidden rounded-2xl bg-neutral-100">
            <Image
              src={post.coverImage}
              alt={post.coverImageAlt}
              fill
              priority
              sizes="(max-width: 1152px) 100vw, 1152px"
              className="object-cover"
            />
          </div>
        </div>
      </ScrollReveal>

      <div className="mx-auto mt-10 w-full max-w-4xl px-4 sm:px-6 md:mt-12 md:px-8 lg:px-0">
        <div className="space-y-10">
          {post.sections.map((section, index) => (
            <ScrollReveal key={section.heading ?? `section-${index}`} delayMs={40}>
              <section className="space-y-4">
                {section.heading ? (
                  <h2 className="text-balance text-2xl font-semibold tracking-tight text-black">
                    {section.heading}
                  </h2>
                ) : null}
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 48)}
                    className="text-base leading-8 text-[#4C4C4C] md:text-[1.0625rem]"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.list ? (
                  <ul className="space-y-3 pl-1">
                    {section.list.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-base leading-7 text-[#4C4C4C] md:text-[1.0625rem]"
                      >
                        <span
                          className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B71C1C]"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <aside className="mt-14 border-t border-neutral-200 pt-10">
            <p className="text-xs font-semibold tracking-wide text-[#B71C1C]">
              Next step
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-black">
              Ready to run a smarter, more sustainable fleet?
            </h2>
            <p className="mt-3 text-base leading-7 text-[#4C4C4C]">
              Talk with Autodate SmartFleet about gaining clearer visibility,
              stronger efficiency, and operations built for the long term.
            </p>
            <Link
              href="/#contact"
              className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-[#B71C1C] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#B71C1C]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B71C1C]/40"
            >
              Contact Us
            </Link>
          </aside>
        </ScrollReveal>
      </div>
    </article>
  );
}
