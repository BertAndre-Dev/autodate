"use client";

import { useEffect, useRef, type ReactNode } from "react";

const DESKTOP = "(min-width: 1024px)";

/**
 * Pins each service block on desktop so the next one slides over it.
 * A tall block uses a negative top so its full height can scroll through
 * before it pins and the following block covers it.
 */
export default function ServiceStack({
  children,
}: Readonly<{ children: ReactNode }>) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const mq = window.matchMedia(DESKTOP);
    let frame = 0;

    const sections = () =>
      Array.from(root.querySelectorAll<HTMLElement>("[data-service-stack]"));

    const applyTops = () => {
      const desktop = mq.matches;
      const header = document.querySelector("header");
      const headerHeight = header?.getBoundingClientRect().height ?? 0;
      const viewport = window.innerHeight;

      for (const el of sections()) {
        if (!desktop) {
          el.style.top = "";
          const overlay = el.querySelector<HTMLElement>("[data-service-overlay]");
          if (overlay) overlay.style.opacity = "0";
          continue;
        }

        const extra = el.offsetHeight - viewport;
        el.style.top = extra > 0 ? `${-extra}px` : `${headerHeight}px`;
      }
    };

    const updateOverlays = () => {
      const els = sections();
      if (!mq.matches) {
        for (const el of els) {
          const overlay = el.querySelector<HTMLElement>("[data-service-overlay]");
          if (overlay) overlay.style.opacity = "0";
        }
        return;
      }

      for (let i = 0; i < els.length; i++) {
        const el = els[i];
        const overlay = el.querySelector<HTMLElement>("[data-service-overlay]");
        if (!overlay) continue;

        const next = els[i + 1];
        let opacity = 0;
        if (next) {
          const currentRect = el.getBoundingClientRect();
          const nextRect = next.getBoundingClientRect();
          if (nextRect.top < currentRect.bottom && currentRect.height > 0) {
            const overlapRatio =
              (currentRect.bottom - nextRect.top) / currentRect.height;
            opacity = Math.min(Math.max(overlapRatio, 0), 1) * 0.5;
          }
        }
        overlay.style.opacity = String(opacity);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateOverlays);
    };

    const onResize = () => {
      applyTops();
      updateOverlays();
    };

    onResize();

    const observer = new ResizeObserver(onResize);
    observer.observe(root);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    mq.addEventListener("change", onResize);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      mq.removeEventListener("change", onResize);
    };
  }, []);

  return <div ref={rootRef}>{children}</div>;
}
