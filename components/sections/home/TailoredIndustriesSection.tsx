"use client";

import Image from "next/image";
import { useState } from "react";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { cn } from "@/lib/utils";
import {
  homeTailoredIndustries,
  homeTailoredSection,
} from "@/constants";

export default function TailoredIndustriesSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const openIndustry = openId
    ? homeTailoredIndustries.find((item) => item.id === openId)
    : undefined;

  const heroSrc =
    openIndustry?.panelImageSrc ?? homeTailoredSection.heroImageSrc;
  const heroAlt = openIndustry?.imageAlt ?? homeTailoredSection.heroImageAlt;

  return (
    <section
      id="solutions"
      className="relative scroll-mt-24 overflow-hidden bg-neutral-50 py-16 md:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
      >
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-neutral-200/60 blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 h-48 w-48 rounded-full bg-neutral-200/40 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:items-start lg:gap-14">
          <div className="order-2 flex flex-col gap-8 lg:order-1">
            <div>
              <ScrollReveal>
                <span className="inline-flex rounded-full bg-[#EFEFEF] px-4 py-2 text-xs md:text-base font-normal text-[#4C4C4C] ring-1 ring-neutral-200">
                  {homeTailoredSection.pill}
                </span>
              </ScrollReveal>
              <ScrollReveal delayMs={60}>
                <h2 className="mt-5 text-balance text-2xl md:text-3xl font-semibold tracking-tight text-black">
                  {homeTailoredSection.title}
                </h2>
              </ScrollReveal>
              <ScrollReveal delayMs={100}>
                <p className="mt-4 lg:max-w-xl text-pretty text-base leading-7 text-[#4C4C4C]">
                  {homeTailoredSection.description}
                </p>
              </ScrollReveal>
            </div>

            <ul className="flex flex-col gap-3">
              {homeTailoredIndustries.map((item, idx) => {
                const isOpen = openId === item.id;

                return (
                  <ScrollReveal key={item.id} delayMs={idx * 40}>
                    <li>
                      <div
                        className={cn(
                          "overflow-hidden rounded-xl bg-white shadow-md shadow-neutral-900/5 ring-1 ring-neutral-200/80 transition-shadow",
                          isOpen && "ring-2 ring-[#B71C1C]",
                        )}
                      >
                        {isOpen ? (
                          <button
                            type="button"
                            className="flex w-full items-center gap-4 px-4 py-4 text-left"
                            onClick={() =>
                              setOpenId((prev) =>
                                prev === item.id ? null : item.id,
                              )
                            }
                            aria-expanded="true"
                            aria-controls={`tailored-panel-${item.id}`}
                            id={`tailored-trigger-${item.id}`}
                          >
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#D3151014]">
                            <Image
                              src={item.iconSrc}
                              alt={`${item.label} icon`}
                              width={24}
                              height={24}
                              className="h-7 w-7 object-contain"
                              loading="lazy"
                            />
                          </span>
                          <span className="min-w-0 flex-1 text-sm font-normal text-black md:text-base">
                            {item.label}
                          </span>
                          <span
                            className={cn(
                              "inline-flex h-9 w-9 shrink-0 items-center justify-center text-neutral-400 transition-transform",
                              isOpen && "rotate-180",
                            )}
                            aria-hidden
                          >
                            <svg
                              className="h-5 w-5"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6 9L12 15L18 9"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="flex w-full items-center gap-4 px-4 py-4 text-left"
                            onClick={() =>
                              setOpenId((prev) =>
                                prev === item.id ? null : item.id,
                              )
                            }
                            aria-expanded="false"
                            aria-controls={`tailored-panel-${item.id}`}
                            id={`tailored-trigger-${item.id}`}
                          >
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#D3151014]">
                              <Image
                                src={item.iconSrc}
                                alt={`${item.label} icon`}
                                width={24}
                                height={24}
                                className="h-7 w-7 object-contain"
                                loading="lazy"
                              />
                            </span>
                            <span className="min-w-0 flex-1 text-sm font-normal text-black md:text-base">
                              {item.label}
                            </span>
                            <span
                              className={cn(
                                "inline-flex h-9 w-9 shrink-0 items-center justify-center text-neutral-400 transition-transform",
                                isOpen && "rotate-180",
                              )}
                              aria-hidden
                            >
                              <svg
                                className="h-5 w-5"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6 9L12 15L18 9"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          </button>
                        )}
                        {isOpen ? (
                          <section
                            id={`tailored-panel-${item.id}`}
                            aria-labelledby={`tailored-trigger-${item.id}`}
                            className="border-t border-neutral-100 px-4 pb-4 pt-0"
                          >
                            <p className="pt-3 text-sm leading-7 text-neutral-600">
                              {item.body}
                            </p>
                          </section>
                        ) : null}
                      </div>
                    </li>
                  </ScrollReveal>
                );
              })}
            </ul>
          </div>

          <div className="order-1 lg:order-2">
            <ScrollReveal>
              <div className="relative mx-auto h-[300px] lg:h-[850px] w-full max-w-md overflow-hidden rounded-lg bg-neutral-200 shadow-lg shadow-neutral-900/10 ring-1 ring-neutral-200/80 lg:mx-0 lg:max-w-none lg:sticky lg:top-28">
                <Image
                  key={heroSrc}
                  src={heroSrc}
                  alt={heroAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
