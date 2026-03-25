import ScrollReveal from "@/components/motion/ScrollReveal";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { hero, aboutBody, aboutValues } from "@/constants";
import { cn } from "@/lib/utils";

const cardClass =
  "rounded-2xl border border-foreground/10 bg-background p-6";

export default function AboutPageSections() {
  return (
    <div className="flex flex-col gap-14">
      <SectionWrapper>
        <div className="grid gap-8 lg:grid-cols-2">
          <ScrollReveal>
            <div className="space-y-4">
              <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                {aboutBody.missionTitle}
              </h2>
              <p className="text-pretty text-sm leading-7 text-foreground/70 sm:text-base">
                {aboutBody.missionBody}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={80}>
            <div className="space-y-4">
              <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                {aboutBody.approachTitle}
              </h2>
              <p className="text-pretty text-sm leading-7 text-foreground/70 sm:text-base">
                {aboutBody.approachBody}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid gap-5 md:grid-cols-3">
          {aboutValues.map((value) => (
            <ScrollReveal key={value.title}>
              <div className={cn(cardClass, "h-full")}>
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-foreground/10 bg-foreground/10"
                  />
                  <h3 className="text-base font-semibold text-foreground">
                    {value.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-foreground/70">
                  {value.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <ScrollReveal>
          <div className="flex flex-col items-start justify-between gap-4 rounded-3xl border border-foreground/10 bg-foreground/5 p-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-semibold text-foreground/80">
                {hero.about.pageTitle}
              </p>
              <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                {hero.about.title}
              </h2>
            </div>
            <div>
              {hero.about.ctaLabel && hero.about.ctaHref ? (
                <Button
                  href={hero.about.ctaHref}
                  variant="secondary"
                  size="lg"
                >
                  {hero.about.ctaLabel}
                </Button>
              ) : null}
            </div>
          </div>
        </ScrollReveal>
      </SectionWrapper>
    </div>
  );
}

