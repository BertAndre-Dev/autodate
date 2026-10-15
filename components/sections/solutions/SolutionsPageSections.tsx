import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { solutionsPage } from "@/constants";

const shell =
  "mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14";

function PillarContours() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <svg
        className="absolute -left-16 top-8 h-72 w-56 text-[#E6E6E3]"
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
      </svg>
      <svg
        className="absolute -right-16 bottom-0 h-72 w-56 text-[#E6E6E3]"
        viewBox="0 0 220 420"
        fill="none"
      >
        <path
          d="M200 40c-70 40-16 120-78 160s-6 96-28 150"
          stroke="currentColor"
          strokeWidth="1.15"
        />
        <path
          d="M220 110c-80 28-24 120-90 160"
          stroke="currentColor"
          strokeWidth="1.15"
        />
      </svg>
    </div>
  );
}

export default function SolutionsPageSections() {
  const { hero } = solutionsPage;

  return (
    <div className="bg-white">
      <section className="bg-[#141414] pt-14 text-white md:pt-20">
        <div className={shell}>
          <ScrollReveal>
            <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(16rem,0.65fr)] lg:gap-10">
              <div>
                <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.15rem]">
                  <span className="block">{hero.title}</span>
                  <span className="mt-2 block">{hero.subtitle}</span>
                </h1>
                <Link
                  href={hero.ctaHref}
                  className="mt-8 inline-flex h-12 items-center justify-center rounded-lg bg-[#C4161C] px-7 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#A51218] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  {hero.ctaLabel}
                </Link>
              </div>
              <p className="max-w-xs text-base leading-7 text-white lg:mt-16 lg:justify-self-end">
                {hero.description}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={80}>
            <Image
              src={hero.imageSrc}
              alt={hero.imageAlt}
              width={1000}
              height={570}
              priority
              sizes="(min-width: 1152px) 1088px, 100vw"
              className="mt-12 h-auto w-full md:mt-16"
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 md:py-24">
        <PillarContours />
        <div className={`relative ${shell}`}>
          <ScrollReveal>
            <h2 className="text-center text-3xl font-regular tracking-tight text-[#111111] sm:text-4xl">
              {solutionsPage.pillarsTitle}
            </h2>
          </ScrollReveal>

          <div className="mt-10 grid gap-5 md:mt-12 lg:grid-cols-2 lg:gap-6">
            {solutionsPage.pillars.map((pillar, index) => (
              <ScrollReveal key={pillar.title} delayMs={index * 40}>
                <article className="flex h-full flex-col gap-6 rounded-[1.4rem] border border-[#F2F2F2] bg-white p-5 shadow-[0_10px_30px_rgba(17,17,17,0.04)] sm:flex-row sm:items-center sm:p-6">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-bold leading-snug tracking-tight text-[#111111]">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#8D8D8D]">
                      {pillar.body}
                    </p>
                  </div>
                  <Image
                    src={pillar.imageSrc}
                    alt={pillar.imageAlt}
                    width={528}
                    height={502}
                    sizes="(min-width: 1024px) 240px, 80vw"
                    className="h-auto w-full rounded-2xl sm:w-[46%] sm:max-w-56"
                  />
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#141414] py-16 text-white md:py-24">
        <div className={shell}>
          <ScrollReveal>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {solutionsPage.capabilitiesTitle}
            </h2>
          </ScrollReveal>
          <ul className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-5">
            {solutionsPage.capabilities.map((item) => (
              <li
                key={item}
                className="flex min-h-32 w-full flex-col rounded-2xl bg-white px-5 pb-6 pt-5 sm:w-[calc(50%-0.625rem)] lg:w-[calc(25%-0.9375rem)]"
              >
                <Image
                  src="/star.svg"
                  alt=""
                  width={22}
                  height={22}
                  className="h-[22px] w-[22px]"
                />
                <p className="mt-6 text-md font-normal text-[#1A1A1A]">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className={shell}>
          <ScrollReveal>
            <h2 className="text-center text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl md:text-[2.6rem]">
              {solutionsPage.comparisonTitle}
            </h2>
          </ScrollReveal>

          <ScrollReveal delayMs={60}>
            <div className="mx-auto mt-10 max-w-5xl rounded-[1.6rem] border border-[#F0F0F0] bg-white p-3 shadow-[0_8px_30px_rgba(17,17,17,0.04)] sm:p-4 md:mt-12">
              <table className="w-full border-separate border-spacing-x-3 border-spacing-y-0 text-center">
                <thead>
                  <tr>
                    <th className="rounded-xl bg-[#F4F4F4] px-4 py-4 text-md font-normal text-[#1A1A1A] sm:text-base">
                      {solutionsPage.comparisonWithoutLabel}
                    </th>
                    <th className="rounded-xl bg-[#F4F4F4] px-4 py-4 text-md font-normal text-[#1A1A1A] sm:text-base">
                      {solutionsPage.comparisonWithLabel}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {solutionsPage.comparisonRows.map((row) => (
                    <tr key={row.without}>
                      <td className="px-3 py-5 text-md leading-6 text-[#1A1A1A] sm:py-6 sm:text-[15px]">
                        {row.without}
                      </td>
                      <td className="px-3 py-5 text-md leading-6 text-[#1A1A1A] sm:py-6 sm:text-[15px]">
                        {row.with}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
