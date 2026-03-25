"use client";

import ScrollReveal from "@/components/motion/ScrollReveal";
import SectionWrapper from "@/components/ui/SectionWrapper";
import {
  hero,
} from "@/constants";
import IntelligentFleetSection from "@/components/sections/home/IntelligentFleetSection";
import ServicesLandingSection from "@/components/sections/home/ServicesLandingSection";
import TailoredIndustriesSection from "@/components/sections/home/TailoredIndustriesSection";


export default function HomePageSections() {

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

