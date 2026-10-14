import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { servicesPage } from "@/constants";
import type { ServicesPageSection } from "@/types";

const shell =
  "mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14";

function HeroContours() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <svg
        className="absolute -left-14 top-0 h-64 w-52 text-[#E3E3E0] sm:h-80 sm:w-64"
        viewBox="0 0 220 420"
        fill="none"
      >
        <path
          d="M18 24c72 36 18 108 82 148s8 92 36 156"
          stroke="currentColor"
          strokeWidth="1.15"
        />
        <path
          d="M-8 78c84 28 28 118 94 158s-2 84 28 146"
          stroke="currentColor"
          strokeWidth="1.15"
        />
        <path
          d="M52 0c28 72-2 128 42 188s18 96 8 168"
          stroke="currentColor"
          strokeWidth="1.15"
        />
      </svg>
    </div>
  );
}

function MediaPair({
  images,
}: Readonly<{
  images: ServicesPageSection["images"];
}>) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
      {images.map((image) => (
        <Image
          key={`${image.src}-${image.alt}`}
          src={image.src}
          alt={image.alt}
          width={1140}
          height={600}
          sizes="(min-width: 1024px) 520px, 100vw"
          className="h-auto w-full"
        />
      ))}
    </div>
  );
}

function includedGridClass(count: number) {
  if (count >= 4) return "sm:grid-cols-2 lg:grid-cols-4";
  if (count === 3) return "sm:grid-cols-2 lg:grid-cols-3";
  if (count === 2) return "sm:grid-cols-2";
  return "grid-cols-1";
}

function IncludedList({ items }: Readonly<{ items: string[] }>) {
  return (
    <div>
      <h3 className="text-3xl font-semibold tracking-tight text-[#111111] sm:text-[2.05rem]">
        What&apos;s Included
      </h3>
      <ul
        className={`mt-8 grid gap-4 lg:gap-5 ${includedGridClass(items.length)}`}
      >
        {items.map((item) => (
          <li
            key={item}
            className="flex min-h-44 flex-col rounded-[1.15rem] border border-[#EFEFEF] bg-white px-5 pb-7 pt-5"
          >
              <Image src="/star.svg" alt="Check" width={24} height={24} />
            <p className="mt-8 text-md leading-6 text-[#8D8D8D]">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ServiceCta({ href, label }: Readonly<{ href: string; label: string }>) {
  return (
    <div className="flex justify-center">
      <Link
        href={href}
        className="inline-flex h-12 items-center justify-center rounded-lg bg-[#C4161C] px-7 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#A51218] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4161C]/40"
      >
        {label}
      </Link>
    </div>
  );
}

function ServiceBlock({ section }: Readonly<{ section: ServicesPageSection }>) {
  const media = <MediaPair images={section.images} />;

  return (
    <section
      id={section.id}
      className="scroll-mt-28 border-b border-[#F2F2F2] py-16 last:border-b-0 md:py-24"
    >
      <div className={shell}>
        <ScrollReveal>
          <div className="grid items-start gap-6 md:grid-cols-2 md:gap-x-16 lg:gap-x-24">
            <p className="order-2 max-w-md text-[15px] leading-7 text-[#2A2A2A] md:order-1 md:pt-1.5 md:text-base md:leading-8">
              {section.body}
            </p>
            <h2 className="order-1 text-[2.15rem] font-semibold leading-[1.15] tracking-tight text-[#3A3A3A] md:order-2 md:text-5xl md:leading-[1.12]">
              {section.title}
            </h2>
          </div>
        </ScrollReveal>

        {section.mediaFirst ? (
          <ScrollReveal delayMs={70}>
            <div className="mt-12 md:mt-16">{media}</div>
          </ScrollReveal>
        ) : null}

        {section.included?.length ? (
          <ScrollReveal delayMs={90}>
            <div className="mt-14 md:mt-20">
              <IncludedList items={section.included} />
            </div>
          </ScrollReveal>
        ) : null}

        {section.ctaLabel && section.ctaHref ? (
          <ScrollReveal delayMs={110}>
            <div className="mt-10 md:mt-12">
              <ServiceCta href={section.ctaHref} label={section.ctaLabel} />
            </div>
          </ScrollReveal>
        ) : null}

        {section.mediaFirst ? null : (
          <ScrollReveal delayMs={90}>
            <div className="mt-12 md:mt-16">{media}</div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}

export default function ServicesPageSections() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden pb-6 pt-14 md:pb-8 md:pt-20">
        <HeroContours />
        <div className={`relative ${shell}`}>
          <ScrollReveal>
            <header className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-semibold tracking-tight text-[#3A3A3A] sm:text-5xl">
                {servicesPage.hero.title}
              </h1>
              <p className="mt-4 text-balance text-base font-medium leading-7 text-[#1A1A1A] sm:text-lg">
                {servicesPage.hero.subtitle}
              </p>
            </header>
          </ScrollReveal>

          <ScrollReveal delayMs={80}>
            <Image
              src={servicesPage.hero.imageSrc}
              alt={servicesPage.hero.imageAlt}
              width={2400}
              height={1040}
              priority
              sizes="(min-width: 1152px) 1088px, 100vw"
              className="mt-10 h-auto w-full md:mt-12"
            />
          </ScrollReveal>
        </div>
      </section>

      {servicesPage.sections.map((section) => (
        <ServiceBlock key={section.id} section={section} />
      ))}
    </div>
  );
}
