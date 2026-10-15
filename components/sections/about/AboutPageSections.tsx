import Image from "next/image";
import ScrollReveal from "@/components/motion/ScrollReveal";
import LocationMap from "@/components/sections/about/LocationMap";
import { aboutPage } from "@/constants";

function EdgeContours() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <Image
        src="/line.png"
        alt=""
        width={605}
        height={1362}
        className="absolute -left-28 top-2 h-112 w-auto max-w-none sm:-left-20 sm:h-144 lg:-left-16 lg:h-168"
        style={{ width: "auto", filter: "brightness(0) invert(74%)" }}
      />
      <Image
        src="/line.png"
        alt=""
        width={605}
        height={1362}
        className="absolute -right-28 top-8 h-104 w-auto max-w-none -scale-x-100 sm:-right-20 sm:h-136 lg:-right-16 lg:h-160"
        style={{ width: "auto", filter: "brightness(0) invert(74%)" }}
      />
    </div>
  );
}

function SinceMark({ label, year }: Readonly<{ label: string; year: string }>) {
  const text = `${label} ${year}`;

  return (
    <p className="mt-8 w-full sm:mt-10">
      <svg
        viewBox="0 0 1000 196"
        role="img"
        aria-label={text}
        className="block h-auto w-full overflow-visible"
      >
        <text
          x="500"
          y="158"
          textAnchor="middle"
          fill="none"
          stroke="#E35353"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
          strokeLinejoin="round"
          fontFamily="Arial, Helvetica, sans-serif"
          fontWeight="400"
          fontSize="168"
          textLength="972"
          lengthAdjust="spacing"
        >
          {text}
        </text>
      </svg>
    </p>
  );
}

export default function AboutPageSections() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#F7F7F5] pb-16 pt-14 md:pb-24 md:pt-20">
        <EdgeContours />
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-0">
          <ScrollReveal>
            <header className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-semibold tracking-tight text-[#4C4C4C] sm:text-5xl">
                {aboutPage.title}
              </h1>
              <p className="mt-4 text-balance text-base font-medium leading-7 text-[#000000] sm:text-lg">
                {aboutPage.subtitle}
              </p>
            </header>
          </ScrollReveal>

          <ScrollReveal delayMs={80}>
            <div className="relative mt-10 aspect-[2.05/1] overflow-hidden rounded-[1.75rem] bg-neutral-200">
              <Image
                src={aboutPage.imageSrc}
                alt={aboutPage.imageAlt}
                fill
                priority
                sizes="(min-width: 1152px) 1152px, 100vw"
                className="object-cover"
              />
            </div>
          </ScrollReveal>

          <SinceMark label={aboutPage.sinceLabel} year={aboutPage.sinceYear} />
        </div>
      </section>

      <section className="bg-[#141414] py-20 text-white md:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-0">
          <ScrollReveal>
            <header className="mx-auto max-w-4xl text-center">
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                {aboutPage.whoTitle}
              </h2>
              <p className="mt-6 text-pretty text-base font-regular leading-8 text-white sm:leading-8">
                {aboutPage.whoBody}
              </p>
            </header>
          </ScrollReveal>

          <div className="mx-auto mt-16 grid max-w-5xl gap-14 md:mt-20 md:grid-cols-2 md:gap-20">
            {[aboutPage.mission, aboutPage.vision].map((item, index) => (
              <ScrollReveal key={item.title} delayMs={index * 80}>
                <Image
                  src={item.icon}
                  alt=""
                  width={44}
                  height={48}
                  className="h-11 w-auto"
                  style={{ width: "auto", height: "2.75rem" }}
                />
                <h3 className="mt-5 text-3xl font-regular tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-sm text-base font-regular leading-7 text-white">
                  {item.body}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F6F6F4] py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-0">
          <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
            <ScrollReveal>
              <article className="h-full rounded-[1.35rem] border border-[#E7E7E7] bg-white px-7 py-9 sm:px-9 sm:py-11">
                <h2 className="text-3xl font-regular tracking-tight text-black sm:text-[2rem]">
                  {aboutPage.approachTitle}
                </h2>
                <p className="mt-5 text-base font-regular leading-8 text-[#1A1A1A]">
                  {aboutPage.approachBody}
                </p>
              </article>
            </ScrollReveal>

            <ScrollReveal delayMs={80}>
              <article className="h-full rounded-[1.35rem] border border-[#E7E7E7] bg-white px-7 py-9 sm:px-9 sm:py-11">
                <h2 className="text-3xl font-regular tracking-tight text-black sm:text-[2rem]">
                  {aboutPage.focusTitle}
                </h2>
                <ul className="mt-5 list-disc space-y-4 pl-5 text-base font-regular   leading-7 text-[#1A1A1A] marker:text-black">
                  {aboutPage.focus.map((item) => (
                    <li key={item.label}>
                      <span className="font-semibold">{item.label}:</span>{" "}
                      {item.text}
                    </li>
                  ))}
                </ul>
              </article>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="mt-20 md:mt-28">
              <h2 className="text-4xl font-regular tracking-tight text-black sm:text-5xl">
                {aboutPage.locationTitle}
              </h2>
              <p className="mt-4 max-w-4xl text-base font-regular leading-7 text-black sm:text-lg">
                {aboutPage.locationBody}
              </p>
            </div>
          </ScrollReveal>
          <div className="mt-8 overflow-hidden rounded-md">
            <LocationMap />
          </div>
        </div>
      </section>
    </>
  );
}
