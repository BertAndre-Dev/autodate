"use client"
import ServicesLandingSection from "@/components/sections/home/ServicesLandingSection";
import TailoredIndustriesSection from "@/components/sections/home/TailoredIndustriesSection";
import PartnersLogoSlider from "@/components/sections/home/PartnersLogoSlider";
import FleetOfferSection from "@/components/sections/home/FleetOfferSection";
import ProblemSection from "@/components/sections/home/ProblemSection";


export default function HomePageSections() {

  return (
    <div className="flex flex-col gap-6 bg-white">
      <PartnersLogoSlider />
      <FleetOfferSection />
      <ProblemSection />
      <ServicesLandingSection />
      <TailoredIndustriesSection />
    </div>
  );
}

