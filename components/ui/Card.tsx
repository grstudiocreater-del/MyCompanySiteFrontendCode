import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLElement> & {
  as?: "div" | "article" | "li" | "aside";
  tone?: "paper" | "sand" | "plain";
  /** "md" = 24px corners (default), "lg" = 32px for large panels. */
  radius?: "md" | "lg";
  /**
   * Hover/focus feedback for cards that contain a link or action
   */
  interactive?: boolean;
};

/** Shared surface for cards and panels in Midnight Cyber Dark theme */
export function Card({ as: Tag = "div", radius = "md", interactive, className, ...props }: CardProps) {
  return (
    <Tag
      className={cn(
        "relative border border-white/10 bg-[#121218]/90 backdrop-blur-md shadow-xl",
        radius === "lg" ? "rounded-[32px]" : "rounded-3xl",
        interactive &&
          "transition-[translate,box-shadow,border-color,background-color] duration-300 ease-soft hover:-translate-y-1 hover:border-blue-500/50 hover:bg-[#161624] hover:shadow-[0_20px_45px_-18px_rgba(59,59,245,0.35)] focus-within:border-blue-500/50",
        className,
      )}
      {...props}
    />
  );
}
