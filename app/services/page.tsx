import Hero from "@/components/layout/Hero";
import ServicesPageSections from "@/components/sections/services/ServicesPageSections";
import { hero } from "@/constants";

export default function ServicesPage() {
  return (
    <>
      <Hero {...hero.services} />
      <ServicesPageSections />
    </>
  );
}

