import Hero from "@/components/layout/Hero";
import AboutPageSections from "@/components/sections/about/AboutPageSections";
import { hero } from "@/constants";

export default function AboutPage() {
  return (
    <>
      <Hero {...hero.about} />
      <AboutPageSections />
    </>
  );
}

