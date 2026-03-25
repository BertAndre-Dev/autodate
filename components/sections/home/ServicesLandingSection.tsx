"use client";

import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { cardWhileHover } from "@/lib/animations";
import { homeServicesLanding, homeServicesLandingCards } from "@/constants";

function ServiceIcon({ iconKey }: { iconKey: string }) {
  const common = "h-5 w-5 text-white";

  // Simple inline SVG icons (no external icon dependency).
  switch (iconKey) {
    case "operations":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 20V10C4 9.44772 4.44772 9 5 9H10C10.5523 9 11 9.44772 11 10V20"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M13 20V4C13 3.44772 13.4477 3 14 3H19C19.5523 3 20 3.44772 20 4V20"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M3 20H21"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "unified":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 7C4 5.89543 4.89543 5 6 5H10C11.1046 5 12 5.89543 12 7V17C12 18.1046 11.1046 19 10 19H6C4.89543 19 4 18.1046 4 17V7Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M14 7C14 5.89543 14.8954 5 16 5H18C19.1046 5 20 5.89543 20 7V17C20 18.1046 19.1046 19 18 19H16C14.8954 19 14 18.1046 14 17V7Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M8 9H8.01"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "risk":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 9V13"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M12 17.5H12.01"
            stroke="currentColor"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <path
            d="M10.29 4.86L2.82 18a2 2 0 0 0 1.71 3h14.94a2 2 0 0 0 1.71-3L13.71 4.86a2 2 0 0 0-3.42 0Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "integration":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 7H17V17H7V7Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M4 9C4 7.89543 4.89543 7 6 7H7"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M20 15C20 16.1046 19.1046 17 18 17H17"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M14.5 9.5L9.5 14.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
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

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {homeServicesLandingCards.map((card) => {
            const inner = (
              <div className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10">
                <div className="flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10">
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

