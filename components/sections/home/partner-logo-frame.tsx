"use client";

import { useEffect, useRef, useState, type TransitionEvent } from "react";
import Image from "next/image";
import styles from "./partners-logo-slider.module.css";

const VISIBLE = 4;
const HOLD_MS = 4500;

type Logo = { fileName: string; alt: string; width?: number; height?: number };

function toPublicSrc(fileName: string) {
  return encodeURI(`/slider/${fileName}`);
}

function chunkLogos(logos: readonly Logo[], size: number) {
  const pages: Logo[][] = [];
  for (let index = 0; index < logos.length; index += size) {
    pages.push(logos.slice(index, index + size));
  }
  return pages;
}

export default function PartnerLogoFrame({
  logos,
}: Readonly<{ logos: readonly Logo[] }>) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [page, setPage] = useState(0);
  const [phase, setPhase] = useState<"hidden" | "shown">("hidden");
  const [holding, setHolding] = useState(false);
  const pages = chunkLogos(logos, VISIBLE);
  const pageCount = pages.length;

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        setVisible(true);
        setPhase("shown");
        observer.disconnect();
      },
      { threshold: 0.25 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || !holding || pageCount < 2) return;

    const timer = window.setTimeout(() => {
      setHolding(false);
      setPhase("hidden");
    }, HOLD_MS);

    return () => window.clearTimeout(timer);
  }, [visible, holding, page, pageCount]);

  function handleTransitionEnd(event: TransitionEvent<HTMLDivElement>, index: number) {
    if (event.target !== event.currentTarget) return;
    if (event.propertyName !== "opacity") return;
    if (index !== page) return;

    if (phase === "shown") {
      setHolding(true);
      return;
    }

    setPage((currentPage) => (currentPage + 1) % pageCount);
    setPhase("shown");
  }

  return (
    <div ref={rootRef} className={styles.stage}>
      {pages.map((pageLogos, index) => {
        const framePhase = index === page ? phase : "hidden";
        return (
          <div
            key={index}
            className={styles.frame}
            data-phase={framePhase}
            aria-hidden={framePhase !== "shown"}
            onTransitionEnd={(event) => handleTransitionEnd(event, index)}
          >
            {pageLogos.map((logo) => (
              <div key={logo.fileName} className={styles.slot}>
                <Image
                  src={toPublicSrc(logo.fileName)}
                  alt={logo.alt}
                  width={logo.width ?? 190}
                  height={logo.height ?? 56}
                  className={styles.logo}
                  loading="eager"
                />
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
