import type { Variants } from "framer-motion";

// Animate only opacity and transform (opacity/y/scale) per requirements.
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  show: { opacity: 1, scale: 1 },
};

// Motion props for hover/tap (used with `whileHover` / `whileTap`).
export const cardWhileHover = { y: -6, scale: 1.02 };
export const buttonWhileHover = { y: -1, scale: 1.02 };
export const buttonWhileTap = { y: 0, scale: 0.98 };

export const viewportOnce = { once: true, amount: 0.25 } as const;

// Convenience "already visible" state (useful for reduced-motion fallbacks).
export const instantVisible = { opacity: 1, y: 0 } as const;

