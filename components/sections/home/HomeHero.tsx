"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useContactModal } from "@/components/forms/ContactModalProvider";
import { homeHeroLanding } from "@/constants";
import { isValidEmail } from "@/lib/utils";

function EdgeContours() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <svg
        className="absolute -left-8 top-0 h-[80%] w-40 text-[#E4E4E1] sm:w-52"
        viewBox="0 0 180 640"
        fill="none"
      >
        <path
          d="M20 20c40 60 8 110 46 170s-8 100 28 160"
          stroke="currentColor"
          strokeWidth="1.1"
        />
        <path
          d="M4 80c50 40 12 120 54 180"
          stroke="currentColor"
          strokeWidth="1.1"
        />
        <path
          d="M48 0c18 70-6 130 22 200"
          stroke="currentColor"
          strokeWidth="1.1"
        />
      </svg>
      <svg
        className="absolute -right-10 top-8 h-[70%] w-44 text-[#E4E4E1] sm:w-56"
        viewBox="0 0 200 640"
        fill="none"
      >
        <path
          d="M180 30c-50 50-8 120-48 180s10 110-22 180"
          stroke="currentColor"
          strokeWidth="1.1"
        />
        <path
          d="M200 100c-60 40-16 130-62 190"
          stroke="currentColor"
          strokeWidth="1.1"
        />
      </svg>
    </div>
  );
}

type TwState = { wi: number; len: number; del: boolean };

function useTypewriter(
  words: readonly string[],
  enabled: boolean,
): { text: string; word: string; showCursor: boolean } {
  const [s, setS] = useState<TwState>({ wi: 0, len: 0, del: false });

  useEffect(() => {
    if (!enabled || words.length === 0) return;

    const word = words[s.wi % words.length] ?? "";
    const atFull = !s.del && s.len >= word.length && word.length > 0;
    const atEmpty = s.del && s.len <= 0;
    const delay = atFull ? 1500 : atEmpty ? 450 : s.del ? 42 : 78;

    const t = window.setTimeout(() => {
      if (atFull) {
        setS((x) => ({ ...x, del: true }));
      } else if (atEmpty) {
        setS((x) => ({ wi: (x.wi + 1) % words.length, len: 0, del: false }));
      } else if (s.del) {
        setS((x) => ({ ...x, len: Math.max(0, x.len - 1) }));
      } else {
        setS((x) => ({ ...x, len: Math.min(word.length, x.len + 1) }));
      }
    }, delay);

    return () => window.clearTimeout(t);
  }, [enabled, s, words]);

  if (!enabled) {
    const word = words[0] ?? "";
    return { text: word, word, showCursor: true };
  }

  const word = words[s.wi % words.length] ?? "";
  return { text: word.slice(0, s.len), word, showCursor: true };
}

export default function HomeHero() {
  const reducedMotion = useReducedMotion();
  const animateTitle = !reducedMotion;
  const { text: typed, word, showCursor } = useTypewriter(
    homeHeroLanding.rotatingWords,
    animateTitle,
  );
  const longWord = word.length > 18;
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const openContact = useContactModal();

  function onBookDemo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = email.trim();
    if (!isValidEmail(value)) {
      setEmailError("Enter a valid email address.");
      return;
    }
    setEmailError(null);
    openContact(value.toLowerCase());
  }

  return (
    <section className="relative bg-white pb-16 pt-10 md:pb-20 md:pt-14 lg:pt-16">
      <EdgeContours />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-0">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-6">
          <div className="flex min-w-0 flex-col">
            <span className="inline-flex w-fit rounded-full bg-[#F3F4F6] px-5 py-2 text-sm font-medium text-[#6B7280]">
              {homeHeroLanding.pill}
            </span>

            <h1 className="mt-6 text-[2.35rem] font-bold leading-[1.05] tracking-tight text-black sm:text-5xl lg:text-[3.35rem]">
              <span className="block">{homeHeroLanding.titleLine1}</span>
              <span className="mt-1 block">{homeHeroLanding.titleLine2}</span>
            </h1>

            <p
              className={`mt-3 w-full max-w-full whitespace-normal wrap-break-word font-bold leading-[1.05] tracking-tight text-[#B71C1C] ${
                longWord
                  ? "text-[1.65rem] sm:text-[2rem] lg:text-[2.55rem]"
                  : "text-[2.15rem] sm:text-5xl lg:text-[3.15rem]"
              }`}
              aria-live="polite"
            >
              <span>{typed}</span>
              <motion.span
                className="ml-1 inline-block w-[3px] translate-y-[0.08em] bg-[#B71C1C] align-middle"
                animate={
                  animateTitle && showCursor
                    ? { opacity: [1, 0, 1] }
                    : { opacity: 1 }
                }
                transition={
                  animateTitle
                    ? { duration: 0.9, repeat: Infinity, ease: "easeInOut" }
                    : undefined
                }
                style={{ height: "0.82em" }}
                aria-hidden
              />
            </p>

            <p className="mt-6 max-w-md text-base leading-7 text-[#4C4C4C] sm:text-lg">
              {homeHeroLanding.description}
            </p>

            <form
              className="mt-8 max-w-md"
              onSubmit={onBookDemo}
              noValidate
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <label className="sr-only" htmlFor="hero-email">
                  {homeHeroLanding.emailPlaceholder}
                </label>
                <input
                  id="hero-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    if (emailError) setEmailError(null);
                  }}
                  placeholder={homeHeroLanding.emailPlaceholder}
                  aria-invalid={emailError ? true : undefined}
                  aria-describedby={emailError ? "hero-email-error" : undefined}
                  className="h-12 w-full rounded-lg border border-[#B71C1C] bg-white px-4 text-sm text-black outline-none placeholder:text-[#9CA3AF] focus-visible:ring-2 focus-visible:ring-[#B71C1C]/30 sm:flex-1"
                />
                <button
                  type="submit"
                  className="inline-flex h-12 shrink-0 items-center justify-center rounded-lg bg-[#B71C1C] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#9E1818] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B71C1C]/40"
                >
                  {homeHeroLanding.ctaLabel}
                </button>
              </div>
              {emailError ? (
                <p id="hero-email-error" className="mt-2 text-sm text-[#B71C1C]">
                  {emailError}
                </p>
              ) : null}
            </form>

            <dl className="mt-8 grid max-w-md grid-cols-3 gap-4">
              {homeHeroLanding.stats.map((stat) => (
                <div key={stat.label}>
                  <dd className="text-2xl font-bold text-[#B71C1C] sm:text-[1.7rem]">
                    {stat.value}
                  </dd>
                  <dt className="mt-1 text-sm leading-5 text-[#6B7280]">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>

          <div className="hidden lg:block">
            <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
              <div className="relative aspect-[4/5] min-h-[520px] w-full lg:aspect-[5/6]">
                <div className="absolute right-0 top-10 z-[1] h-[100%] w-[68%] overflow-hidden rounded-3xl bg-neutral-100 shadow-lg ring-1 ring-neutral-200/80">
                  <Image
                    src={homeHeroLanding.mainImageSrc}
                    alt={homeHeroLanding.mainImageAlt}
                    fill
                    className="object-cover"
                    sizes="42vw"
                    priority
                  />
                </div>

                <div className="absolute xl:top-110 xl:right-65 top-100 right-58">
                  <Image
                    src="/circle.svg"
                    alt="Decorative circle accent"
                    width={260}
                    height={260}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
