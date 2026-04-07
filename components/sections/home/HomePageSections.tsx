"use client";
import IntelligentFleetSection from "@/components/sections/home/IntelligentFleetSection";
import ServicesLandingSection from "@/components/sections/home/ServicesLandingSection";
import TailoredIndustriesSection from "@/components/sections/home/TailoredIndustriesSection";
import PartnersLogoSlider from "@/components/sections/home/PartnersLogoSlider";


export default function HomePageSections() {

  return (
    <div className="flex flex-col gap-6 bg-white">
      <IntelligentFleetSection />
      <ServicesLandingSection />
      <PartnersLogoSlider />
      <TailoredIndustriesSection />
    </div>
  );
}

