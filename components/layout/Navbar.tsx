"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navContactCta, navLinks, uiStrings } from "@/constants";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { cn } from "@/lib/utils";
import Image from "next/image";

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
          <Image src="/logo.svg" alt="AutoDate" width={120} height={120} />
        </Link>

        <nav
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-12 md:flex"
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
          <Link
            href={navContactCta.href}
            className={cn(ctaClass, "hidden md:inline-flex")}
          >
            {navContactCta.label}
          </Link>

          <button
            type="button"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label={
              isMenuOpen ? uiStrings.closeMenuLabel : uiStrings.menuLabel
            }
            aria-expanded={isMenuOpen ? "true" : "false"}
            aria-controls="site-mobile-nav"
            className="inline-flex items-center justify-center rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm font-medium text-black/80 transition-colors hover:bg-neutral-50 md:hidden"
          >
            {isMenuOpen ? uiStrings.closeMenuLabel : uiStrings.menuLabel}
          </button>
        </div>
      </div>

      <div
        id="site-mobile-nav"
        hidden={!isMenuOpen}
        className="border-t border-neutral-200 bg-white md:hidden"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
          <nav
            aria-label={uiStrings.mobileNavLabel}
            className="flex flex-col gap-1"
          >
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
    </header>
  );
}
