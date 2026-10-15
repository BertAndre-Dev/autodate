"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { useContactModal } from "@/components/forms/ContactModalProvider";
import { footerColumns, footerCta, siteConfig } from "@/constants";

// Accelerate, hold a steady cruise, then brake. Slopes match at each join
// so the ride never hiccups between phases.
function carRideProgress(t: number) {
  if (t <= 0) return 0;
  if (t >= 1) return 1;

  const accelTime = 0.28;
  const cruiseTime = 0.4;
  const brakeTime = 0.32;
  const accelDist = 0.2;
  const cruiseDist = 4 / 7;
  const brakeDist = 1.6 / 7;

  if (t < accelTime) {
    const u = t / accelTime;
    return accelDist * u * u;
  }

  const cruiseStart = accelTime;
  if (t < cruiseStart + cruiseTime) {
    const u = (t - cruiseStart) / cruiseTime;
    return accelDist + cruiseDist * u;
  }

  const u = (t - cruiseStart - cruiseTime) / brakeTime;
  return accelDist + cruiseDist + brakeDist * (2 * u - u * u);
}

function rideDuration(distance: number) {
  return Math.min(1680, Math.max(920, 680 + Math.sqrt(distance) * 15));
}

function isContactHref(href: string) {
  return href === "/#contact" || href === "#contact";
}

function FooterItem({
  href,
  label,
  onContact,
}: {
  href: string;
  label: string;
  onContact: () => void;
}) {
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

  if (isContactHref(href)) {
    return (
      <button
        type="button"
        onClick={onContact}
        className={`${className} cursor-pointer border-0 bg-transparent p-0 text-left`}
      >
        {label}
      </button>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export default function Footer() {
  const openContact = useContactModal();
  const reducedMotion = useReducedMotion();
  const carButtonRef = useRef<HTMLButtonElement>(null);
  const rideCleanup = useRef<(() => void) | null>(null);
  const [riding, setRiding] = useState(false);

  useEffect(() => {
    return () => rideCleanup.current?.();
  }, []);

  function rideToTop() {
    if (rideCleanup.current) return;

    const reduce =
      reducedMotion ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      window.scrollTo(0, 0);
      return;
    }

    const img = carButtonRef.current?.querySelector("img");
    const startScroll = window.scrollY;
    if (!img || startScroll < 2) {
      window.scrollTo(0, 0);
      return;
    }

    const rect = img.getBoundingClientRect();
    setRiding(true);

    const rider = document.createElement("img");
    rider.src = img.currentSrc || "/footer/car.png";
    rider.alt = "";
    rider.draggable = false;
    rider.width = Math.round(rect.width);
    rider.height = Math.round(rect.height);
    rider.setAttribute("aria-hidden", "true");
    rider.style.position = "fixed";
    rider.style.left = `${rect.left}px`;
    rider.style.top = `${rect.top}px`;
    rider.style.width = `${rect.width}px`;
    rider.style.height = `${rect.height}px`;
    rider.style.zIndex = "110";
    rider.style.pointerEvents = "none";
    rider.style.willChange = "transform";
    rider.style.transformOrigin = "50% 32%";
    rider.style.filter = "drop-shadow(0 12px 16px rgba(18,18,18,0.2))";
    document.body.appendChild(rider);

    const start = performance.now();
    const duration = rideDuration(startScroll);
    const parked = rect.top;
    // Cruise in the upper third, then pull away off the top as the page brakes.
    const lane = Math.min(parked, Math.max(88, window.innerHeight * 0.34));
    const off = -rect.height - 24;
    let frame = 0;
    let stopped = false;
    let unlisten = () => {};
    let prevY = 0;
    let prevTime = start;

    const stop = () => {
      if (stopped) return;
      stopped = true;
      cancelAnimationFrame(frame);
      window.clearTimeout(arm);
      unlisten();
      rider.remove();
      rideCleanup.current = null;
      setRiding(false);
    };

    const onInterrupt = () => stop();
    const arm = window.setTimeout(() => {
      if (stopped) return;
      const options: AddEventListenerOptions = { capture: true, passive: true };
      const onKey = (event: KeyboardEvent) => {
        if (
          event.key === "ArrowUp" ||
          event.key === "ArrowDown" ||
          event.key === "PageUp" ||
          event.key === "PageDown" ||
          event.key === "Home" ||
          event.key === "End" ||
          event.key === " "
        ) {
          onInterrupt();
        }
      };
      window.addEventListener("wheel", onInterrupt, options);
      window.addEventListener("touchmove", onInterrupt, options);
      window.addEventListener("keydown", onKey);
      unlisten = () => {
        window.removeEventListener("wheel", onInterrupt, options);
        window.removeEventListener("touchmove", onInterrupt, options);
        window.removeEventListener("keydown", onKey);
      };
    }, 180);

    const tick = (now: number) => {
      if (stopped) return;
      const linear = Math.min(1, (now - start) / duration);
      const progress = carRideProgress(linear);
      window.scrollTo(0, startScroll * (1 - progress));

      const dt = Math.max(16, now - prevTime);
      const climb = Math.min(1, progress / 0.72);
      const climbEase = climb * climb * (3 - 2 * climb);
      const exitU = progress <= 0.72 ? 0 : (progress - 0.72) / 0.28;
      const visual =
        progress <= 0.72
          ? parked + (lane - parked) * climbEase
          : lane + (off - lane) * exitU * exitU;
      let envelope = 1;
      if (progress < 0.1) envelope = progress / 0.1;
      else if (progress > 0.9) envelope = (1 - progress) / 0.1;
      const sway = Math.sin(now / 155) * 5 * envelope;
      const yaw = Math.cos(now / 155) * 2.2 * envelope;
      const y = visual - parked + Math.sin(now / 90) * 0.55 * envelope;
      const speed = prevTime === start ? 0 : Math.abs(y - prevY) / dt;
      prevY = y;
      prevTime = now;
      const stretch = 1 + Math.min(0.04, speed * 0.08);

      rider.style.transform = `translate3d(${sway.toFixed(2)}px, ${y.toFixed(2)}px, 0) rotate(${yaw.toFixed(2)}deg) scale(1, ${stretch.toFixed(3)})`;

      if (linear >= 1) {
        window.scrollTo(0, 0);
        stop();
        return;
      }
      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    rideCleanup.current = stop;
  }

  return (
    <footer className="bg-white">
      <div className="relative z-30 mx-auto flex max-w-7xl justify-end px-4 pt-3 sm:px-6 md:px-8 lg:px-10 xl:px-14">
        <button
          ref={carButtonRef}
          type="button"
          onClick={rideToTop}
          aria-label="Back to top"
          className="-mb-10 cursor-pointer border-0 bg-transparent p-0 transition-transform duration-100 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B71C1C] focus-visible:ring-offset-2 active:scale-[0.97] sm:-mb-14"
        >
          <Image
            src="/footer/car.png"
            alt=""
            width={81}
            height={153}
            draggable={false}
            className={`h-28 w-auto sm:h-36 ${riding ? "invisible" : ""}`}
            style={{ width: "auto" }}
          />
        </button>
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
          <button
            type="button"
            onClick={() => openContact()}
            className="mt-8 inline-flex h-12 min-w-[9.5rem] items-center justify-center rounded-xl bg-white px-8 text-sm font-semibold text-[#1A1A1A] transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50 active:translate-y-px"
          >
            {footerCta.ctaLabel}
          </button>
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 pb-6 sm:px-6 md:grid-cols-2 md:px-8 lg:grid-cols-[1.15fr_0.8fr_1.25fr_1fr] lg:px-10 xl:px-14">
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
                    <FooterItem
                      href={link.href}
                      label={link.label}
                      onContact={() => openContact()}
                    />
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
