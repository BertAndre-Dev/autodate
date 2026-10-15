"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navContactCta, navLinks, uiStrings } from "@/constants";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { cn } from "@/lib/utils";
import Image from "next/image";

const ctaClass =
  "inline-flex h-11 items-center justify-center rounded-xl bg-black px-6 text-sm font-medium text-white transition-colors hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30";

function isNavLinkActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  if (href.includes("#")) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const scrollY = useScrollPosition();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);
  const isScrolled = scrollY > 8;

  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setIsMenuOpen(false);
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-white transition-shadow",
        isScrolled ? "shadow-sm" : "",
      )}
    >
      <div className="relative mx-auto flex w-full max-w-7xl items-center px-4 py-3.5 sm:px-6 md:px-8 lg:px-10 xl:px-0">
        <Link
          href="/"
          className="z-10 inline-block shrink-0 origin-left cursor-pointer transition-transform duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B71C1C]/30 hover:scale-105 active:scale-[0.98] motion-reduce:transition-none"
        >
          <Image
            src="/logo.svg"
            alt="AutoDate"
            width={120}
            height={120}
            priority
          />
        </Link>

        <nav
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-6 md:flex lg:gap-8 xl:gap-12"
          aria-label={uiStrings.mobileNavLabel}
        >
          {navLinks.map((link) => {
            const isActive = isNavLinkActive(pathname, link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "whitespace-nowrap text-[15px] font-medium transition-colors",
                  isActive
                    ? "text-[#D31510]"
                    : "text-[#1A1A1A] hover:text-[#D31510]",
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
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={
              isMenuOpen ? uiStrings.closeMenuLabel : uiStrings.menuLabel
            }
            aria-expanded={isMenuOpen}
            aria-controls="site-mobile-nav"
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg text-[#1A1A1A] transition-colors hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B71C1C]/30 md:hidden"
          >
            {isMenuOpen ? (
              <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
                <path
                  d="M6 6l12 12M18 6L6 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        id="site-mobile-nav"
        hidden={!isMenuOpen}
        className="border-t border-neutral-200 bg-white md:hidden"
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
          <nav
            aria-label={uiStrings.mobileNavLabel}
            className="flex flex-col gap-1"
          >
            {navLinks.map((link) => {
              const isActive = isNavLinkActive(pathname, link.href);

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
