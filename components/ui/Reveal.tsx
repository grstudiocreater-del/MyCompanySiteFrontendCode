import type { CSSProperties, ElementType, ReactNode } from "react";

type RevealProps = {
  as?: ElementType;
  /** Stagger delay in milliseconds. */
  delay?: number;
  /** Entrance duration in milliseconds (default 600). */
  duration?: number;
  /**
   * "fade" (default): fade in with a slight upward movement.
   * "line": the element stays visible; descendants with `.reveal-line` draw in.
   */
  variant?: "fade" | "line";
  className?: string;
  children: ReactNode;
};

/**
 * Scroll-triggered entrance, played once when the element enters the viewport.
 * Server component: a single IntersectionObserver (RevealObserver, mounted in the
 * layout) handles every [data-reveal] element — no scroll listeners.
 * Content stays fully visible without JS and when reduced motion is preferred.
 */
export function Reveal({ as: Tag = "div", delay = 0, duration, variant = "fade", className, children }: RevealProps) {
  const style: Record<string, string> = {};
  if (delay) style["--reveal-delay"] = `${delay}ms`;
  if (duration) style["--reveal-duration"] = `${duration}ms`;

  return (
    <Tag
      data-reveal={variant === "line" ? "line" : ""}
      className={className}
      style={Object.keys(style).length ? (style as CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
