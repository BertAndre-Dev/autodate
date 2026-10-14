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
      <svg
        className="absolute -left-10 top-6 h-[72%] w-44 text-[#D5D5D2] sm:w-56"
        viewBox="0 0 200 640"
        fill="none"
      >
        <path
          d="M30 10c50 70 8 120 48 180s-6 110 36 170-16 120 24 190"
          stroke="currentColor"
          strokeWidth="1.1"
        />
        <path
          d="M8 70c60 50 16 130 64 190s-4 120 40 190"
          stroke="currentColor"
          strokeWidth="1.1"
        />
        <path
          d="M52 0c24 80-4 140 28 210s8 130 16 210"
          stroke="currentColor"
          strokeWidth="1.1"
        />
      </svg>
      <svg
        className="absolute -right-12 top-10 h-[68%] w-52 text-[#D5D5D2] sm:w-64"
        viewBox="0 0 220 640"
        fill="none"
      >
        <path
          d="M190 20c-60 60-10 130-58 190s8 120-28 190 20 130-16 190"
          stroke="currentColor"
          strokeWidth="1.1"
        />
        <path
          d="M210 90c-70 50-20 140-72 200s6 130-36 200"
          stroke="currentColor"
          strokeWidth="1.1"
        />
        <path
          d="M160 0c-20 90 8 150-24 230s-10 140-18 220"
          stroke="currentColor"
          strokeWidth="1.1"
        />
      </svg>
    </div>
  );
}

export default function AboutPageSections() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#F7F7F5] pb-16 pt-14 md:pb-24 md:pt-20">
        <EdgeContours />
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-0">
          <ScrollReveal>
            <header className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-semibold tracking-tight text-[#3A3A3A] sm:text-5xl">
                {aboutPage.title}
              </h1>
              <p className="mt-4 text-balance text-base font-medium leading-7 text-[#1A1A1A] sm:text-lg">
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

          <p
            className="mt-8 flex justify-center text-[2.65rem] font-light leading-none tracking-[-0.04em] text-transparent min-[420px]:text-5xl sm:mt-10 sm:text-7xl md:text-8xl lg:text-[8.5rem]"
            style={{ WebkitTextStroke: "1.5px #E35353" }}
          >
            <span>{aboutPage.sinceLabel} {aboutPage.sinceYear}</span>
          </p>
        </div>
      </section>

      <section className="bg-[#141414] py-20 text-white md:py-28">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-0">
          <ScrollReveal>
            <header className="mx-auto max-w-4xl text-center">
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                {aboutPage.whoTitle}
              </h2>
              <p className="mt-6 text-pretty text-base leading-8 text-white sm:text-lg sm:leading-8">
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
                <h3 className="mt-5 text-3xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-sm text-base leading-7 text-white">
                  {item.body}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F6F6F4] py-16 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-0">
          <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
            <ScrollReveal>
              <article className="h-full rounded-[1.35rem] border border-[#E7E7E7] bg-white px-7 py-9 sm:px-9 sm:py-11">
                <h2 className="text-3xl font-bold tracking-tight text-black sm:text-[2rem]">
                  {aboutPage.approachTitle}
                </h2>
                <p className="mt-5 text-base leading-8 text-[#1A1A1A]">
                  {aboutPage.approachBody}
                </p>
              </article>
            </ScrollReveal>

            <ScrollReveal delayMs={80}>
              <article className="h-full rounded-[1.35rem] border border-[#E7E7E7] bg-white px-7 py-9 sm:px-9 sm:py-11">
                <h2 className="text-3xl font-bold tracking-tight text-black sm:text-[2rem]">
                  {aboutPage.focusTitle}
                </h2>
                <ul className="mt-5 list-disc space-y-4 pl-5 text-base leading-7 text-[#1A1A1A] marker:text-black">
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
              <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
                {aboutPage.locationTitle}
              </h2>
              <p className="mt-4 max-w-4xl text-base font-semibold leading-7 text-black sm:text-lg">
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
