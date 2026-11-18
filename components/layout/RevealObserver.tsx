"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Progressive scroll reveal for elements marked with [data-reveal].
 * Only elements below the fold are hidden, so nothing flashes and
 * content stays visible without JS or when reduced motion is preferred.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const element = entry.target as HTMLElement;
          element.dataset.revealed = "";
          element.classList.remove("reveal-pending");
          observer.unobserve(element);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    const fold = window.innerHeight * 0.92;
    document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-revealed])").forEach((element) => {
      if (element.getBoundingClientRect().top < fold) {
        element.dataset.revealed = "";
        return;
      }
      element.classList.add("reveal-pending");
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
      document.querySelectorAll(".reveal-pending").forEach((element) => element.classList.remove("reveal-pending"));
    };
  }, [pathname]);

  return null;
}
