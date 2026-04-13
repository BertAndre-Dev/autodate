import HomeHero from "@/components/sections/home/HomeHero";
import HomePageSections from "@/components/sections/home/HomePageSections";
import ContactQuoteForm from "@/components/forms/ContactQuoteForm";
import ScrollReveal from "@/components/motion/ScrollReveal";
import SectionWrapper from "@/components/ui/SectionWrapper";
import type { Metadata } from "next";
import { siteConfig } from "@/constants";

export const metadata: Metadata = {
  title: `Home | ${siteConfig.name}`,
  description: siteConfig.description,
};

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomePageSections />
      <SectionWrapper variant="figmaContact" className="pb-10 md:pb-12">
        <ScrollReveal>
          <div id="contact" className="scroll-mt-24">
            <ContactQuoteForm />
          </div>
        </ScrollReveal>
      </SectionWrapper>
    </>
  );
}
