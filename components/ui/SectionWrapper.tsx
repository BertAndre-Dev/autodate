import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  variant?: "standard" | "figmaContact";
}

export default function SectionWrapper({
  children,
  className,
  as,
  variant = "standard",
}: SectionWrapperProps) {
  const Component = as ?? "section";

  if (variant === "figmaContact") {
    return (
      <Component
        className={cn(
          "relative overflow-hidden",
          "bg-gradient-to-b from-red-700 via-red-600 to-red-800",
          "py-16 md:py-20",
          className,
        )}
      >
        <div className="absolute inset-0 bg-black/5" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14">
          <div className="mx-auto w-full max-w-3xl rounded-3xl bg-background p-8 shadow-xl shadow-black/10 md:p-10">
            {children}
          </div>
        </div>
      </Component>
    );
  }

  return (
    <Component
      className={cn(
        "w-full px-4 py-14 sm:px-6 md:px-8 lg:px-10 xl:px-14",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </Component>
  );
}

