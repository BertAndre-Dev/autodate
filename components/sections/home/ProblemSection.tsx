import Image from "next/image";
import Link from "next/link";
import { problemSection } from "@/constants";

export default function ProblemSection() {
  return (
    <section className="bg-white py-6 md:py-10">
      <div className="mx-auto grid w-full max-w-6xl overflow-hidden rounded-2xl bg-[#171717] lg:grid-cols-2 lg:min-h-[520px]">
        <div className="relative min-h-[280px] sm:min-h-[360px]">
          <Image
            src={problemSection.imageSrc}
            alt={problemSection.imageAlt}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div className="flex flex-col justify-center px-6 py-10 sm:px-10 md:px-12 lg:py-14">
          <p className="text-sm font-medium text-[#D31510]">
            {problemSection.eyebrow}
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {problemSection.title}
          </h2>
          <div className="mt-6 space-y-4">
            {problemSection.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-sm leading-7 text-white/85 sm:text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <Link
            href={problemSection.ctaHref}
            className="mt-8 inline-flex h-11 w-fit items-center justify-center rounded-lg bg-[#B71C1C] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#8E1616] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            {problemSection.ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
