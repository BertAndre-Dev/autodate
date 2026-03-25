import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends Omit<ComponentProps<"button">, "children"> {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const base =
  "inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 disabled:cursor-not-allowed disabled:opacity-60";

const sizeClass: Record<ButtonSize, string> = {
  sm: "h-9 px-4",
  md: "h-10 px-5",
  lg: "h-11 px-6",
};

const variantClass: Record<ButtonVariant, string> = {
  primary: "bg-foreground text-background hover:bg-foreground/90",
  secondary:
    "bg-foreground/10 text-foreground hover:bg-foreground/15 border border-foreground/10",
  ghost: "bg-transparent text-foreground hover:bg-foreground/10",
};

export default function Button({
  children,
  href,
  className,
  variant = "primary",
  size = "md",
  disabled,
  ...props
}: ButtonProps) {
  const mergedClassName = cn(
    base,
    sizeClass[size],
    variantClass[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={mergedClassName} aria-disabled={disabled}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={mergedClassName}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

