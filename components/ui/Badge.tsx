import type { ReactNode } from "react";

export interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full border border-foreground/10 bg-background px-3 py-1 text-sm font-medium text-foreground",
        className ?? "",
      ].join(" ")}
    >
      {children}
    </span>
  );
}

