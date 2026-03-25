"use client";

import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "@/components/motion/ScrollReveal";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { cardWhileHover } from "@/lib/animations";
import { cn } from "@/lib/utils";
import {
  hero,
  homeFeatures,
  homePageCopy,
  homeStats,
  homeTestimonials,
} from "@/constants";

const cardClass =
  "rounded-2xl border border-foreground/10 bg-background p-6";

const iconClassByKey: Record<string, string> = {
  layers: "bg-foreground/10",
  wand: "bg-foreground/10",
  shield: "bg-foreground/10",
  spark: "bg-foreground/10",
  message: "bg-foreground/10",
  check: "bg-foreground/10",
};

export default function HomePageSections() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="flex flex-col gap-14">
      <SectionWrapper className="pt-0">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <ScrollReveal>
              <p className="text-sm font-semibold text-foreground/80">
                {hero.home.badge}
              </p>
            </ScrollReveal>
            <ScrollReveal delayMs={80}>
              <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                {homePageCopy.featuresTitle}
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {homeFeatures.map((feature) => {
              const iconBg = iconClassByKey[feature.icon] ?? "bg-foreground/10";

              const content = (
                <div className={cn(cardClass, "h-full")}>
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className={cn(
                        "inline-flex h-10 w-10 items-center justify-center rounded-xl border border-foreground/10",
                        iconBg,
                      )}
                    />
                    <h3 className="text-base font-semibold text-foreground">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-foreground/70">
                    {feature.description}
                  </p>
                </div>
              );

              if (reducedMotion) return <div key={feature.title}>{content}</div>;

              return (
                <ScrollReveal key={feature.title}>
                  <motion.div
                    whileHover={cardWhileHover}
                    className="h-full"
                  >
                    {content}
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid gap-5 sm:grid-cols-3">
          {homeStats.map((stat) => (
            <ScrollReveal key={stat.label}>
              <div className={cn(cardClass, "text-center")}>
                <p className="text-3xl font-semibold tracking-tight text-foreground">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-foreground/70">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="flex flex-col gap-10">
          <div>
            <ScrollReveal>
              <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                {homePageCopy.testimonialsTitle}
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {homeTestimonials.map((t) => (
              <ScrollReveal key={`${t.name}-${t.company}`}>
                <div className={cn(cardClass, "h-full")}>
                  <p className="text-sm leading-7 text-foreground/80">
                    {t.quote}
                  </p>
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-foreground">
                      {t.name}
                    </p>
                    <p className="text-sm text-foreground/60">
                      {t.company}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm font-semibold text-foreground/80">
                  {homePageCopy.ctaPrompt}
                </p>
              </div>
              <a
                href={hero.home.ctaHref}
                className="inline-flex h-10 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
              >
                {hero.home.ctaLabel}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </SectionWrapper>
    </div>
  );
}

