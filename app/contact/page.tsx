import ContactQuoteForm from "@/components/forms/ContactQuoteForm";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { hero } from "@/constants";

export default function ContactPage() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-white">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        aria-hidden="true"
        style={{ backgroundImage: 'url("/img.svg")' }}
      />
      {/* Red overlay */}
      <div
        className="absolute inset-0 z-[1] bg-[#B71C1C]/70"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 md:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center text-white mb-10">
          <ScrollReveal>
            <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {hero.contact.title}
            </h1>
          </ScrollReveal>
          <ScrollReveal delayMs={80}>
            <p className="mt-3 text-pretty text-sm font-semibold leading-7 text-white/90 sm:text-base">
              {hero.contact.subtitle}
            </p>
          </ScrollReveal>
        </div>

        {/* Form card */}
        <div className="mx-auto max-w-2xl rounded-3xl bg-white p-8 shadow-2xl md:p-10">
          <ScrollReveal>
            <ContactQuoteForm />
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}