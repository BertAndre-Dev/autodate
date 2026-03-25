"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { siteConfig, navLinks, uiStrings } from "@/constants";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const scrollY = useScrollPosition();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isScrolled = scrollY > 8;

  const activeHref = useMemo(() => pathname, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-foreground/10 transition-colors",
        isScrolled ? "bg-background/70 backdrop-blur" : "bg-background/30",
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 md:px-8 lg:px-10 xl:px-14">
        <div className="flex items-center gap-3">
          <Link href="/" className="inline-flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-foreground/10 text-foreground">
              <span className="text-sm font-semibold">{siteConfig.name}</span>
            </span>
          </Link>
        </div>

        <nav className="hidden items-center gap-7 md:flex" aria-label={uiStrings.mobileNavLabel}>
          {navLinks.map((link) => {
            const isActive = activeHref === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  isActive
                    ? "text-foreground"
                    : "text-foreground/70 hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label={isMenuOpen ? uiStrings.closeMenuLabel : uiStrings.menuLabel}
            className="inline-flex items-center justify-center rounded-full border border-foreground/10 bg-background px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-foreground/5"
          >
            {isMenuOpen ? uiStrings.closeMenuLabel : uiStrings.menuLabel}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-foreground/10 bg-background md:hidden">
          <div className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6 md:px-8 lg:px-10 xl:px-14">
            <nav aria-label={uiStrings.mobileNavLabel} className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeHref === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "rounded-xl px-3 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-foreground/10 text-foreground"
                        : "text-foreground/70 hover:bg-foreground/5 hover:text-foreground",
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}

