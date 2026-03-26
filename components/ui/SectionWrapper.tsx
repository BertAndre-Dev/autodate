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
          "py-16 md:py-20 bg-white mx-auto w-full max-w-6xl m-8 rounded-lg",
          className,
        )}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          aria-hidden="true"
          style={{ backgroundImage: 'url("/img.svg")' }}
        />
        <div className="absolute inset-0 bg-[#B71C1C]/70" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14">
          <div className="flex flex-col items-center justify-center text-center mb-10 gap-4">
            <h2 className="text-white text-3xl font-bold tracking-tight md:text-4xl">
              Ready to transform your fleet operations
            </h2>
            <p className="text-white text-sm font-semibold leading-7 md:text-base">
              Seamless Features To Make Living Easier
            </p>
          </div>

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
