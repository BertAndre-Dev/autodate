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
      <IntelligentFleetSection />
      <ServicesLandingSection />
      <TailoredIndustriesSection />
    </div>
  );
}

