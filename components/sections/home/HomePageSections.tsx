"use client";

import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "@/components/motion/ScrollReveal";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { cardWhileHover } from "@/lib/animations";
import { cn } from "@/lib/utils";
import {
  hero,
  homeFeatures,
} from "@/constants";
import IntelligentFleetSection from "@/components/sections/home/IntelligentFleetSection";
import ServicesLandingSection from "@/components/sections/home/ServicesLandingSection";
import TailoredIndustriesSection from "@/components/sections/home/TailoredIndustriesSection";

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

      <IntelligentFleetSection />

      <ServicesLandingSection />

      <TailoredIndustriesSection />

      {/* <SectionWrapper>
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
      </SectionWrapper> */}
    
    </div>
  );
}

