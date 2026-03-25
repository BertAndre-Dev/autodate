"use client";

import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { cardWhileHover } from "@/lib/animations";
import { homeServicesLanding, homeServicesLandingCards } from "@/constants";
import Image from "next/image";

function ServiceIcon({ iconKey }: { iconKey: string }) {

  // Simple inline SVG icons (no external icon dependency).
  switch (iconKey) {
    case "operations":
      return (
        <Image src="/operations.svg" alt="Operations" width={24} height={24} />
      );
    case "unified":
      return (
        <Image src="/unified.svg" alt="Unified" width={24} height={24} />
      );
    case "risk":
      return (
        <Image src="/risk.svg" alt="Risk" width={24} height={24} />
      );
    case "integration":
      return (
        <Image src="/integration.svg" alt="Integration" width={24} height={24} />
      );
    default:
      return null;
  }
}

export default function ServicesLandingSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-neutral-950 py-16 md:py-20">
      <div
        className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-950 to-black"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14">
        <div className="flex flex-col items-center text-center">
          <ScrollReveal>
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 ring-1 ring-white/10">
              {homeServicesLanding.pill}
            </span>
          </ScrollReveal>
          <ScrollReveal delayMs={80}>
            <h2 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {homeServicesLanding.title}
            </h2>
          </ScrollReveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {homeServicesLandingCards.map((card) => {
            const inner = (
              <div className="rounded-2xl bg-[#444444] p-7 ring-1 ring-whit">
                <div className="flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white ring-1 ring-white">
                    <ServiceIcon iconKey={card.icon} />
                  </div>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  {card.description}
                </p>
              </div>
            );

            if (reducedMotion) {
              return (
                <ScrollReveal key={card.title} className="h-full">
                  {inner}
                </ScrollReveal>
              );
            }

            return (
              <ScrollReveal key={card.title} className="h-full">
                <motion.div whileHover={cardWhileHover}>{inner}</motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

