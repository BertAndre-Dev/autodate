"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { buttonWhileHover, buttonWhileTap } from "@/lib/animations";
import { cn } from "@/lib/utils";

const baseButtonClass =
  "inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-background transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 disabled:cursor-not-allowed disabled:opacity-60";

export interface MotionSubmitButtonProps {
  children: ReactNode;
  isSubmitting?: boolean;
  disabled?: boolean;
  className?: string;
}

export default function MotionSubmitButton({
  children,
  isSubmitting,
  disabled,
  className,
}: MotionSubmitButtonProps) {
  const reducedMotion = useReducedMotion();
  const isDisabled = disabled || isSubmitting;

  if (reducedMotion) {
    return (
      <button
        type="submit"
        className={cn(baseButtonClass, className)}
        disabled={isDisabled}
      >
        {children}
      </button>
    );
  }

  return (
    <motion.button
      type="submit"
      className={cn(baseButtonClass, className)}
      disabled={isDisabled}
      whileHover={buttonWhileHover}
      whileTap={buttonWhileTap}
    >
      {children}
    </motion.button>
  );
}

