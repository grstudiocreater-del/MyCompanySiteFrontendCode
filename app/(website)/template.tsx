import type { ReactNode } from "react";

/**
 * Templates re-mount on every navigation, so each page gets a short, subtle
 * entrance (fade + 12px rise, 450ms). Header and footer live in the layout and stay put.
 * Disabled automatically under prefers-reduced-motion (see globals.css).
 */
export default function WebsiteTemplate({ children }: { children: ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
