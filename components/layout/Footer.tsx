import Link from "next/link";
import Image from "next/image";
import { footerColumns, footerCta, siteConfig } from "@/constants";

function FooterItem({ href, label }: { href: string; label: string }) {
  const className =
    "text-sm leading-6 text-white/75 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70";

  if (href === "text") {
    return <p className="max-w-[16rem] text-sm leading-6 text-white/75">{label}</p>;
  }

  if (
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("http")
  ) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={className}
        {...(external
          ? { target: "_blank", rel: "noreferrer" }
          : {})}
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="relative z-30 mx-auto flex max-w-6xl justify-end px-4 pt-3 sm:px-6 md:px-8 lg:px-10 xl:px-14">
        <Image
          src="/footer/car.png"
          alt="Red car viewed from above"
          width={81}
          height={153}
          className="h-28 w-auto -mb-10 sm:h-36 sm:-mb-14"
        />
      </div>

      <div className="relative isolate overflow-hidden bg-[#121212] text-white">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          aria-hidden="true"
          style={{
            backgroundImage: 'url("/img.svg")',
            backgroundPosition: "center top",
          }}
        />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.5) 34%, rgba(0,0,0,0.72) 62%, rgba(18,18,18,0.94) 84%, #121212 100%)",
          }}
        />

        <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center px-4 pb-16 pt-20 text-center sm:px-6 sm:pt-24 md:pb-20">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl md:leading-[1.12]">
            {footerCta.title}
          </h2>
          <p className="mt-4 max-w-xl text-pretty text-base leading-7 text-white/90 sm:text-lg">
            {footerCta.description}
          </p>
          <Link
            href={footerCta.ctaHref}
            className="mt-8 inline-flex h-12 min-w-[9.5rem] items-center justify-center rounded-xl bg-white px-8 text-sm font-semibold text-[#1A1A1A] transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50 active:translate-y-px"
          >
            {footerCta.ctaLabel}
          </Link>
        </div>

        <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-4 pb-6 sm:px-6 md:grid-cols-2 md:px-8 lg:grid-cols-[1.15fr_0.8fr_1.25fr_1fr] lg:px-10 xl:px-14">
          <div>
            <Image
              src="/footer/logo-light.png"
              alt={siteConfig.name}
              width={118}
              height={44}
              className="h-auto w-[132px]"
            />
            <p className="mt-4 text-sm text-white/90">{footerCta.brandLine}</p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-base font-semibold text-white">{column.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.label}`}>
                    <FooterItem href={link.href} label={link.label} />
                  </li>
                ))}
              </ul>
              {column.socialLinks?.length ? (
                <div className="mt-5 flex items-center gap-2.5">
                  {column.socialLinks.map((socialLink) => (
                    <a
                      key={socialLink.href}
                      href={socialLink.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={socialLink.label}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#B71C1C] transition-colors hover:bg-[#8E1616] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                    >
                      <Image
                        src={socialLink.icon ?? ""}
                        alt=""
                        width={16}
                        height={16}
                      />
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="pointer-events-none relative z-10 mt-10 pb-2" aria-hidden="true">
          <svg
            viewBox="0 0 1200 190"
            className="block h-[11vw] w-full min-h-16"
            role="presentation"
          >
            <text
              x="600"
              y="148"
              textAnchor="middle"
              fill="rgba(255,255,255,0.34)"
              fontFamily="Arial, Helvetica, sans-serif"
              fontWeight="700"
              fontSize="160"
              textLength="1080"
              lengthAdjust="spacingAndGlyphs"
            >
              AUTODATE
            </text>
          </svg>
        </div>
      </div>
    </footer>
  );
}
