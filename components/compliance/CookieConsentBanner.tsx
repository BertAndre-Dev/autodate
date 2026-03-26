"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type CookieDecision = "accepted" | "rejected";

const STORAGE_KEY = "cookieConsent_v1";
const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;

function safeReadLocalStorage(key: string): string | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeWriteLocalStorage(
  key: string,
  value: string,
): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // ignore write failures (e.g. private mode)
  }
}

export default function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [decision, setDecision] = useState<CookieDecision | null>(null);

  useEffect(() => {
    const raw = safeReadLocalStorage(STORAGE_KEY);
    let nextIsVisible = false;
    let nextDecision: CookieDecision | null = null;

    if (!raw) {
      nextIsVisible = true;
    } else {
      try {
        const parsed = JSON.parse(raw) as {
          decision?: CookieDecision;
          expiresAt?: number;
        };
        const expiresAt = parsed.expiresAt;
        const storedDecision = parsed.decision;
        const isValid =
          typeof expiresAt === "number" && Date.now() < expiresAt;

        if (isValid && storedDecision) {
          nextIsVisible = false;
          nextDecision = storedDecision;
        } else {
          nextIsVisible = true;
        }
      } catch {
        nextIsVisible = true;
      }
    }

    // Defer state updates to avoid sync setState-in-effect lint rules.
    window.setTimeout(() => {
      setDecision(nextDecision);
      setIsVisible(nextIsVisible);
    }, 0);
  }, []);

  function persistAndClose(nextDecision: CookieDecision) {
    const expiresAt = Date.now() + SEVEN_DAYS_MS;
    setDecision(nextDecision);
    safeWriteLocalStorage(
      STORAGE_KEY,
      JSON.stringify({
        decision: nextDecision,
        expiresAt,
      }),
    );
    setIsVisible(false);
  }

  if (!isVisible) return null;

  return (
    <section
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4 md:px-6 md:pb-6 text-center"
    >
   
      <div
        className="mx-auto max-w-4xl rounded-2xl border border-[rgba(0,128,77,0.2)] px-5 py-4 shadow-lg md:px-6 md:py-5"
        style={{
          backgroundColor: "#fff",
          backdropFilter: "blur(18px) saturate(160%)",
          WebkitBackdropFilter: "blur(18px) saturate(160%)",
          boxShadow: "0 8px 40px rgba(0, 0, 0, 0.22)",
        }}
      >
        <p className="text-sm leading-6 text-[#1A1A1A] md:text-[15px]">
          We use cookies to improve your experience and to understand how our
          site is used. Read our{" "}
          <Link
            href="/cookies"
            className="font-medium text-[#B71C1C] underline underline-offset-2 hover:text-[#B71C1C]"
          >
            Cookie Notice &amp; Policy
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="font-medium text-[#B71C1C] underline underline-offset-2 hover:text-[#B71C1C]"
          >
            Privacy Notice
          </Link>
          .
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end">
          <button
            type="button"
            onClick={() => persistAndClose("rejected")}
            className="order-2 cursor-pointer rounded-full border border-white/25 bg-[#B71C1C] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#B71C1C]/90 sm:order-1"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => persistAndClose("accepted")}
            className="order-1 cursor-pointer rounded-full bg-[#B71C1C] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#B71C1C]/90 sm:order-2"
          >
            Accept
          </button>
        </div>
      </div>
    </section>
  );
}

