import Link from "next/link";
import Image from "next/image";
import { homeServicesLanding, homeServicesLandingCards } from "@/constants";

export default function ServicesLandingSection() {
  return (
    <section
      id="services"
      className="relative scroll-mt-24 overflow-hidden bg-white py-20 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(118deg, transparent 46%, rgba(17,17,17,0.035) 49%, transparent 52%), linear-gradient(62deg, transparent 46%, rgba(17,17,17,0.03) 49%, transparent 52%)",
          backgroundSize: "420px 420px",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm text-[#6B6B6B]">{homeServicesLanding.eyebrow}</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl md:text-[2.75rem] md:leading-[1.15]">
            {homeServicesLanding.title}
          </h2>
        </div>

        <div className="mt-12 grid items-stretch gap-5 md:mt-14 md:grid-cols-2 lg:grid-cols-3">
          {homeServicesLandingCards.map((card) => (
            <article
              key={card.title}
              className="flex h-full flex-col rounded-[20px] border border-[#E6E6E6] bg-white px-6 pb-6 pt-7 shadow-[0_16px_40px_-28px_rgba(17,17,17,0.45)] transition-colors duration-200 hover:border-[#B71C1C]"
            >
              <Image
                src={card.icon}
                alt=""
                width={52}
                height={52}
                className="h-[52px] w-[52px]"
              />
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-[#111111]">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#5C5C5C]">
                {card.description}
              </p>
              {card.href ? (
                <Link
                  href={card.href}
                  className="mt-auto inline-flex items-center gap-1.5 pt-8 text-sm font-medium text-[#B71C1C] transition-colors hover:text-[#8E1616] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B71C1C]/40"
                >
                  Learn more
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
