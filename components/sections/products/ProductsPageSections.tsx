"use client";

import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "@/components/motion/ScrollReveal";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { cardWhileHover } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { contact, hero, productsCards } from "@/constants";

const cardClass =
  "rounded-2xl border border-foreground/10 bg-background p-6";

const iconClassByKey: Record<string, string> = {
  layers: "bg-foreground/10",
  wand: "bg-foreground/10",
  shield: "bg-foreground/10",
  spark: "bg-foreground/10",
  check: "bg-foreground/10",
  message: "bg-foreground/10",
};

export default function ProductsPageSections() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="flex flex-col gap-14">
      <SectionWrapper>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {productsCards.map((card, idx) => (
            <ScrollReveal key={`${card.title}-${idx}`}>
              {(() => {
                const iconBg =
                  iconClassByKey[card.icon] ?? "bg-foreground/10";

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
                        {card.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-foreground/70">
                      {card.description}
                    </p>
                  </div>
                );

                if (reducedMotion) return <div>{content}</div>;

                return <motion.div whileHover={cardWhileHover}>{content}</motion.div>;
              })()}
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <ScrollReveal>
              <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                {contact.detailsTitle}
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid gap-5 lg:col-span-2 md:grid-cols-3">
            {contact.detailsItems.map((item, idx) => (
              <ScrollReveal key={`${item.title}-${idx}`} delayMs={idx * 60}>
                <div className={cn(cardClass, "h-full")}>
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-foreground/10 bg-foreground/10"
                    />
                    <h3 className="text-base font-semibold text-foreground">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-foreground/70">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <ScrollReveal>
            <div className="flex flex-col items-start justify-between gap-5 rounded-3xl border border-foreground/10 bg-foreground/5 p-6 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm font-semibold text-foreground/80">
                  {hero.products.pageTitle}
                </p>
                <p className="mt-2 text-sm text-foreground/70">
                  {hero.products.subtitle}
                </p>
              </div>
              {hero.products.ctaHref && hero.products.ctaLabel ? (
                <Button
                  href={hero.products.ctaHref}
                  variant="primary"
                  size="lg"
                >
                  {hero.products.ctaLabel}
                </Button>
              ) : null}
            </div>
          </ScrollReveal>
        </div>
      </SectionWrapper>
    </div>
  );
}

