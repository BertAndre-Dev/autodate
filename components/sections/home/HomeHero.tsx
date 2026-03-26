"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { homeHeroLanding } from "@/constants";
import { cn } from "@/lib/utils";

function TopoPattern({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
      aria-hidden
    >
      <svg
        className="h-full w-full text-neutral-300/35"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="hero-topo"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="0.7"
              d="M0 60 Q30 40 60 60 T120 60 M0 30 Q40 10 80 30 T160 30 M0 90 Q35 70 70 90 T140 90"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-topo)" />
      </svg>
    </div>
  );
}

type TwState = { wi: number; len: number; del: boolean };

function useTypewriter(
  words: readonly string[],
  enabled: boolean,
): { text: string; showCursor: boolean } {
  const [s, setS] = useState<TwState>({ wi: 0, len: 0, del: false });

  useEffect(() => {
    if (!enabled || words.length === 0) return;

    const word = words[s.wi % words.length] ?? "";
    const atFull = !s.del && s.len >= word.length && word.length > 0;
    const atEmpty = s.del && s.len <= 0;
    const delay = atFull ? 1500 : atEmpty ? 450 : s.del ? 42 : 78;

    const t = window.setTimeout(() => {
      if (atFull) {
        setS((x) => ({ ...x, del: true }));
      } else if (atEmpty) {
        setS((x) => ({ wi: (x.wi + 1) % words.length, len: 0, del: false }));
      } else if (s.del) {
        setS((x) => ({ ...x, len: Math.max(0, x.len - 1) }));
      } else {
        setS((x) => ({ ...x, len: Math.min(word.length, x.len + 1) }));
      }
    }, delay);

    return () => window.clearTimeout(t);
  }, [enabled, s, words]);

  if (!enabled) return { text: words[0] ?? "", showCursor: true };

  const word = words[s.wi % words.length] ?? "";
  return { text: word.slice(0, s.len), showCursor: true };
}

export default function HomeHero() {
  const reducedMotion = useReducedMotion();
  const animateTitle = !reducedMotion;
  const { text: typed, showCursor } = useTypewriter(
    homeHeroLanding.rotatingWords,
    animateTitle,
  );

  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden bg-white pb-16 pt-10 md:pb-20 md:pt-14 lg:pt-16"
    >
      <TopoPattern />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-0">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-0">

          {/* ── Text column ── */}
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit rounded-full bg-neutral-100 px-4 py-2 text-xs font-semibold text-neutral-700 ring-1 ring-neutral-200">
              {homeHeroLanding.pill}
            </span>

            <h1 className="text-balance text-3xl font-semibold tracking-tight text-black sm:text-4xl md:text-5xl lg:text-[2.65rem] lg:leading-[1.12]">
              <span className="block text-black">{homeHeroLanding.titleLine1}</span>
              <span className="mt-1 block sm:mt-1.5">
                <span className="text-black">{homeHeroLanding.titleLine2Prefix}</span>
                <span className="text-[#B71C1C]">{typed}</span>
                <motion.span
                  className="ml-0.5 inline-block w-[2px] translate-y-0.5 bg-[#B71C1C] align-middle"
                  animate={
                    animateTitle && showCursor
                      ? { opacity: [1, 0, 1] }
                      : { opacity: 1 }
                  }
                  transition={
                    animateTitle
                      ? { duration: 0.9, repeat: Infinity, ease: "easeInOut" }
                      : undefined
                  }
                  style={{ height: "0.95em" }}
                  aria-hidden
                />
              </span>
            </h1>

            <p className="max-w-lg text-pretty text-base leading-7 text-[#4C4C4C] md:text-lg md:leading-8">
              {homeHeroLanding.description}
            </p>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
              <div className="flex items-center gap-3">
                <Image src="/mission.svg" alt="Mission" width={36} height={36} className="shrink-0 mt-0.5" />
                <div>
                  <p className="text-base font-bold text-black md:text-[18px]">
                    {homeHeroLanding.mission.title}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#4C4C4C]">
                    {homeHeroLanding.mission.body}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Image src="/vission.svg" alt="Vision" width={36} height={36} className="shrink-0 mt-0.5" />
                <div>
                  <p className="text-base font-bold text-black md:text-[18px]">
                    {homeHeroLanding.vision.title}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#4C4C4C]">
                    {homeHeroLanding.vision.body}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Link
                href={homeHeroLanding.ctaHref}
                className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-[#B71C1C] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#B71C1C]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B71C1C]/40 sm:w-auto sm:min-w-[180px]"
              >
                {homeHeroLanding.ctaLabel}
              </Link>
            </div>
          </div>

          {/* ── Image column — hidden on mobile/tablet, visible lg+ ── */}
          <div className="hidden lg:block">
            <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
              <div className="relative aspect-[4/5] min-h-[520px] w-full lg:aspect-[5/6]">
                <div className="absolute right-0 top-10 z-[1] h-[78%] w-[68%] overflow-hidden rounded-3xl bg-neutral-100 shadow-lg ring-1 ring-neutral-200/80">
                  <Image
                    src={homeHeroLanding.mainImageSrc}
                    alt={homeHeroLanding.mainImageAlt}
                    fill
                    className="object-cover"
                    sizes="42vw"
                    priority
                  />
                </div>

                <div className="absolute bottom-7 right-70">
                  <Image src="/circle.svg" alt="Circle" width={260} height={260} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}