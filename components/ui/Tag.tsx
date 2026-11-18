import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type TagProps = {
  children: ReactNode;
  /** "glass" for tags that sit on imagery. */
  variant?: "solid" | "glass";
  className?: string;
};

export function Tag({ children, variant = "solid", className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 font-mono text-[11px] tracking-wider text-ink-soft uppercase",
        variant === "glass" ? "glass" : "border border-line bg-paper/80",
        className,
      )}
    >
      {children}
    </span>
  );
}
