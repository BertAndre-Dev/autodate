import Hero from "@/components/layout/Hero";
import ContactQuoteForm from "@/components/forms/ContactQuoteForm";
import ScrollReveal from "@/components/motion/ScrollReveal";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { hero } from "@/constants";

export default function ContactPage() {
  return (
    <>
      <Hero {...hero.contact} />
      <SectionWrapper variant="figmaContact">
        <ScrollReveal>
          <ContactQuoteForm />
        </ScrollReveal>
      </SectionWrapper>
    </>
  );
}

