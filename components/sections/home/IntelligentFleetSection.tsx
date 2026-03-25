"use client";

import Image from "next/image";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { cn } from "@/lib/utils";
import { homeIntelligentFleet } from "@/constants";

function RedDotGrid({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "grid grid-cols-6 gap-1.5 opacity-80",
        className,
      )}
      aria-hidden
    >
      {Array.from({ length: 36 }).map((_, i) => (
        <span
          key={i}
          className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#B71C1C]"
        />
      ))}
    </div>
  );
}

function MapPinIcon() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 shrink-0 text-[#B71C1C]"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M12 11.5C13.3807 11.5 14.5 10.3807 14.5 9C14.5 7.61929 13.3807 6.5 12 6.5C10.6193 6.5 9.5 7.61929 9.5 9C9.5 10.3807 10.6193 11.5 12 11.5Z"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M12 22C12 22 19 16 19 9C19 5.13401 15.866 2 12 2C8.13401 2 5 5.13401 5 9C5 16 12 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function IntelligentFleetSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14">
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
          <ScrollReveal>
            <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
              <RedDotGrid className="absolute -left-2 top-6 z-0 sm:left-0" />
              <RedDotGrid className="absolute bottom-10 right-2 z-0 sm:right-6" />

              <div className="relative z-[1] pt-8 pr-8 sm:pt-10 sm:pr-14">
                <div className="relative aspect-[4/3] w-[55%] lg:h-[400px] overflow-hidden rounded-2xl bg-neutral-100 shadow-lg ring-1 ring-neutral-200/80">
                  <Image
                    src={homeIntelligentFleet.collageTopImageSrc}
                    alt={homeIntelligentFleet.collageTopImageAlt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 45vw, 90vw"
                  />
                </div>
                <div className="absolute -bottom-2 right-0 z-[2] w-[50%] overflow-hidden rounded-2xl bg-neutral-100 shadow-xl ring-1 ring-neutral-200/80 md:-bottom-10">
                  <div className="relative aspect-[3/4] lg:h-[400px] w-full">
                    <Image
                      src={homeIntelligentFleet.collageBottomImageSrc}
                      alt={homeIntelligentFleet.collageBottomImageAlt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 45vw, 90vw"
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
                    <Image src="/map.svg" alt="Map Pin" width={20} height={20} />
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
