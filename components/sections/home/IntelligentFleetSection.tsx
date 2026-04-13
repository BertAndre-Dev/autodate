"use client";

import Image from "next/image";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { cn } from "@/lib/utils";
import { homeIntelligentFleet } from "@/constants";

function RedDotGrid({
  className,
  cols,
  rows,
}: {
  className?: string;
  cols: number;
  rows: number;
}) {
  const count = cols * rows;
  return (
    <div
      className={cn("grid gap-1.5", className)}
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, auto))` }}
      aria-hidden
    >
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#B71C1C]/55"
        />
      ))}
    </div>
  );
}

export default function IntelligentFleetSection() {
  return (
    <section className="bg-white mb-8 md:mb-32 lg:mb-40">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14">
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
          <ScrollReveal className="hidden lg:block">
            <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
              <div className="relative pt-8 pr-8 sm:pt-10 sm:pr-14">
                <RedDotGrid
                  cols={5}
                  rows={9}
                  className="pointer-events-none absolute z-0 left-[40%] top-[2%] opacity-90 sm:left-[43%] sm:top-[3%] md:left-[44%]"
                />
                <RedDotGrid
                  cols={7}
                  rows={13}
                  className="pointer-events-none absolute z-0 left-[32%] top-[36%] sm:left-[39%] md:top-[78%]"
                />

                <div className="relative z-10 aspect-[4/3] w-[55%] overflow-hidden rounded-2xl bg-neutral-100 shadow-lg ring-1 ring-neutral-200/80 lg:h-[400px]">
                  <Image
                    src={homeIntelligentFleet.collageTopImageSrc}
                    alt={homeIntelligentFleet.collageTopImageAlt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 45vw, 90vw"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-2 right-0 z-20 w-[50%] overflow-hidden rounded-2xl bg-neutral-100 shadow-xl ring-1 ring-neutral-200/80 md:-bottom-10">
                  <div className="relative aspect-[3/4] lg:h-[400px] w-full">
                    <Image
                      src={homeIntelligentFleet.collageBottomImageSrc}
                      alt={homeIntelligentFleet.collageBottomImageAlt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 45vw, 90vw"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-6">
            <ScrollReveal>
              <span className="inline-flex rounded-full bg-neutral-100 px-4 py-2 text-xs font-semibold text-neutral-700 ring-1 ring-neutral-200">
                {homeIntelligentFleet.pill}
              </span>
            </ScrollReveal>
            <ScrollReveal delayMs={60}>
              <h2 className="text-balance text-2xl md:text-3xl font-semibold tracking-tight text-black">
                {homeIntelligentFleet.title}
              </h2>
            </ScrollReveal>
            <ScrollReveal delayMs={100}>
              <p className="max-w-xl text-pretty text-base leading-7 text-[#4C4C4C]">
                {homeIntelligentFleet.description}
              </p>
            </ScrollReveal>
            <ScrollReveal delayMs={140}>
              <h3 className="text-base font-semibold text-[#4C4C4C]">
                {homeIntelligentFleet.capabilitiesTitle}
              </h3>
            </ScrollReveal>
            <ScrollReveal delayMs={180}>
              <ul className="flex flex-col gap-4">
                {homeIntelligentFleet.capabilities.map((line) => (
                  <li key={line} className="flex gap-3">
                    <Image
                      src="/map.svg"
                      alt="Map pin"
                      width={20}
                      height={20}
                      loading="lazy"
                    />
                    <span className="text-sm font-medium leading-6 text-black md:text-base">
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}