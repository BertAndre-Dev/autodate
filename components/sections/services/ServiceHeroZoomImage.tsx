"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export default function ServiceHeroZoomImage({
  src,
  alt,
}: Readonly<{
  src: string;
  alt: string;
}>) {
  const frameRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start 0.9", "end 0.4"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <div
      ref={frameRef}
      className="mt-10 overflow-hidden rounded-[1.25rem] md:mt-12"
    >
      <motion.div
        style={{ scale: reduce ? 1 : scale }}
        className="origin-center will-change-transform"
      >
        <Image
          src={src}
          alt={alt}
          width={2400}
          height={1040}
          priority
          sizes="(min-width: 1280px) 1216px, 100vw"
          className="h-auto w-full"
        />
      </motion.div>
    </div>
  );
}
