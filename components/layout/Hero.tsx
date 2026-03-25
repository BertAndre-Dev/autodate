import type { HeroProps } from "@/types";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/motion/ScrollReveal";

export default function Hero({
  variant = "default",
  badge,
  pageTitle,
  title,
  subtitle,
  ctaLabel,
  ctaHref,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-foreground/10 bg-gradient-to-b from-foreground/5 via-background to-background">
      <div className="absolute inset-0 pointer-events-none" />
      <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:px-8 lg:px-10 xl:px-14">
        <div className="flex flex-col gap-10">
          {variant === "pageTitle" && pageTitle ? (
            <ScrollReveal>
              <div className="flex items-center gap-3">
                <Badge>{pageTitle}</Badge>
              </div>
            </ScrollReveal>
          ) : null}

          <div className="flex flex-col gap-6">
            {variant === "default" && badge ? (
              <ScrollReveal>
                <Badge>{badge}</Badge>
              </ScrollReveal>
            ) : null}

            <ScrollReveal>
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
                {title}
              </h1>
            </ScrollReveal>

            <ScrollReveal delayMs={80}>
              <p className="text-pretty text-lg leading-8 text-foreground/80 sm:text-xl">
                {subtitle}
              </p>
            </ScrollReveal>

            {ctaLabel && ctaHref ? (
              <ScrollReveal delayMs={140}>
                <div className="flex flex-wrap gap-3">
                  <Button href={ctaHref} variant="primary" size="lg">
                    {ctaLabel}
                  </Button>
                </div>
              </ScrollReveal>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

