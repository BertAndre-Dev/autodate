"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navContactCta, navLinks, siteConfig, uiStrings } from "@/constants";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { cn } from "@/lib/utils";

function LogoPin() {
  return (
    <svg
      className="pointer-events-none absolute -right-0.5 -top-1 h-3 w-3 text-[#B71C1C]"
      viewBox="0 0 20 25"
      aria-hidden
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 0C4.4775 0 0 5.00375 0 10.625C0 16.2025 3.19125 22.265 8.17125 24.5925C8.74365 24.8605 9.36796 24.9994 10 24.9994C10.632 24.9994 11.2564 24.8605 11.8288 24.5925C16.8088 22.265 20 16.2025 20 10.625C20 5.00375 15.5225 0 10 0ZM10 12.5C10.663 12.5 11.2989 12.2366 11.7678 11.7678C12.2366 11.2989 12.5 10.663 12.5 10C12.5 9.33696 12.2366 8.70107 11.7678 8.23223C11.2989 7.76339 10.663 7.5 10 7.5C9.33696 7.5 8.70107 7.76339 8.23223 8.23223C7.76339 8.70107 7.5 9.33696 7.5 10C7.5 10.663 7.76339 11.2989 8.23223 11.7678C8.70107 12.2366 9.33696 12.5 10 12.5Z"
      />
    </svg>
  );
}

function BrandLogo() {
  const word = siteConfig.brandWordmark;
  const aIdx = word.indexOf("a");

  const before = aIdx >= 0 ? word.slice(0, aIdx) : word;
  const letter = aIdx >= 0 ? word[aIdx] : "";
  const after = aIdx >= 0 ? word.slice(aIdx + 1) : "";

  return (
    <span className="flex flex-col leading-none">
      <span className="text-lg font-bold tracking-tight text-black sm:text-xl">
        {before}
        {aIdx >= 0 ? (
          <span className="relative inline-block">
            {letter}
            <LogoPin />
          </span>
        ) : null}
        {after}
      </span>
      <span className="mt-1 text-[10px] font-semibold tracking-[0.18em] text-[#B71C1C] sm:text-[11px]">
        {siteConfig.tagline}
      </span>
    </span>
  );
}

const ctaClass =
  "inline-flex h-10 items-center justify-center rounded-lg bg-[#B71C1C] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#B71C1C]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B71C1C]/40";

export default function Navbar() {
  const pathname = usePathname();
  const scrollY = useScrollPosition();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isScrolled = scrollY > 8;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-neutral-200 bg-white transition-shadow",
        isScrolled ? "shadow-sm" : "",
      )}
    >
      <div className="relative mx-auto flex w-full max-w-6xl items-center px-4 py-3.5 sm:px-6 md:px-8 lg:px-10 xl:px-14">
        <Link
          href="/"
          className="z-10 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B71C1C]/30"
        >
          <BrandLogo />
        </Link>

        <nav
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-8 md:flex"
          aria-label={uiStrings.mobileNavLabel}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  isActive
                    ? "font-semibold text-[#B71C1C]"
                    : "text-black/80 hover:text-black",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="z-10 ml-auto flex items-center gap-2">
          <Link href={navContactCta.href} className={cn(ctaClass, "hidden md:inline-flex")}>
            {navContactCta.label}
          </Link>

          <button
            type="button"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label={isMenuOpen ? uiStrings.closeMenuLabel : uiStrings.menuLabel}
            aria-expanded={isMenuOpen}
            className="inline-flex items-center justify-center rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm font-medium text-black/80 transition-colors hover:bg-neutral-50 md:hidden"
          >
            {isMenuOpen ? uiStrings.closeMenuLabel : uiStrings.menuLabel}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-neutral-200 bg-white md:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
            <nav aria-label={uiStrings.mobileNavLabel} className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-[#B71C1C]/10 font-semibold text-[#B71C1C]"
                        : "text-black/80 hover:bg-neutral-50 hover:text-black",
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <Link
              href={navContactCta.href}
              onClick={() => setIsMenuOpen(false)}
              className={cn(ctaClass, "mt-2 w-full")}
            >
              {navContactCta.label}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
