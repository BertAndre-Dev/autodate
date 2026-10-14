"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  homeTailoredIndustries,
  homeTailoredSection,
} from "@/constants";
import type { TailoredIndustryItem } from "@/types";

function IndustryList({
  items,
  openId,
  onToggle,
}: {
  items: readonly TailoredIndustryItem[];
  openId: string | null;
  onToggle: (id: string) => void;
}) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => {
        const isOpen = openId === item.id;

        return (
          <li key={item.id}>
            <button
              type="button"
              className="flex w-full items-center gap-4 rounded-xl bg-[#2A2A2A] px-4 py-4 text-left transition-colors hover:bg-[#333333] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B71C1C]"
              onClick={() => onToggle(item.id)}
              aria-expanded={isOpen}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#B71C1C]/15">
                <Image
                  src={item.iconSrc}
                  alt=""
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain"
                />
              </span>
              <span className="min-w-0 flex-1 text-sm font-medium text-white md:text-base">
                {item.label}
              </span>
              <span
                className={cn(
                  "inline-flex h-8 w-8 shrink-0 items-center justify-center text-white/70 transition-transform",
                  isOpen && "rotate-180",
                )}
                aria-hidden
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
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
            {isOpen ? (
              <p className="px-4 pt-3 text-sm leading-6 text-white/70">
                {item.body}
              </p>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}

function IndustryImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative min-h-[260px] overflow-hidden rounded-2xl bg-neutral-800 sm:min-h-[320px] lg:min-h-full",
        className,
      )}
    >
      <Image
        key={src}
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 50vw, 100vw"
      />
    </div>
  );
}

export default function TailoredIndustriesSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const topIndustries = homeTailoredIndustries.slice(0, 3);
  const bottomIndustries = homeTailoredIndustries.slice(3);

  const openIndustry = homeTailoredIndustries.find((item) => item.id === openId);
  const automotive = bottomIndustries.find((item) => item.id === "automotive");
  const topImage = topIndustries.some((item) => item.id === openId)
    ? openIndustry
    : topIndustries[0];
  const bottomImage = bottomIndustries.some((item) => item.id === openId)
    ? openIndustry
    : automotive;

  function toggle(id: string) {
    setOpenId((current) => (current === id ? null : id));
  }

  return (
    <section
      id="solutions"
      className="scroll-mt-24 bg-[#141414] py-16 text-white md:py-20"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-4 px-4 sm:px-6 md:px-8 lg:grid-cols-2 lg:px-10 xl:px-14">
        <div className="order-1 flex flex-col justify-center gap-6 py-2 lg:pr-4">
          <h2 className="max-w-md text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {homeTailoredSection.title}
          </h2>
          <IndustryList
            items={topIndustries}
            openId={openId}
            onToggle={toggle}
          />
        </div>

        <IndustryImage
          className="order-2"
          src={topImage?.panelImageSrc ?? homeTailoredSection.heroImageSrc}
          alt={topImage?.imageAlt ?? homeTailoredSection.heroImageAlt}
        />

        <div className="order-3 flex flex-col justify-center py-2 lg:order-4 lg:pl-4">
          <IndustryList
            items={bottomIndustries}
            openId={openId}
            onToggle={toggle}
          />
        </div>

        <IndustryImage
          className="order-4 lg:order-3"
          src={
            bottomImage?.panelImageSrc ?? "/tailored/lady-drivinng.png"
          }
          alt={
            bottomImage?.imageAlt ?? "Driver and passenger talking in a car."
          }
        />
      </div>
    </section>
  );
}
