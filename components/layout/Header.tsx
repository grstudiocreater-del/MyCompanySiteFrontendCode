"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/layout/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { mainNav, primaryCta } from "@/data/navigation";
import { cn, isActivePath } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        "border-b border-white/10 bg-[#09090b]/90 backdrop-blur-2xl",
        scrolled
          ? "shadow-[0_12px_36px_rgba(0,0,0,0.8)] border-white/15 bg-[#09090b]/95"
          : "shadow-sm",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-6">
        {/* Left: Brand Logo */}
        <Logo />

        {/* Center: High-Tech Segmented Tab Bar */}
        <nav aria-label="Main Navigation" className="hidden md:block">
          <ul className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 shadow-inner backdrop-blur-md">
            {mainNav.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative block rounded-full px-4 py-1.5 text-[14px] font-medium transition-all duration-200",
                      active
                        ? "bg-white/15 text-white shadow-sm ring-1 ring-white/20"
                        : "text-zinc-400 hover:text-white hover:bg-white/5",
                    )}
                  >
                    {item.label}
                    {active && (
                      <span
                        aria-hidden
                        className="absolute bottom-1 left-1/2 size-1 -translate-x-1/2 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right: Action CTA & Mobile Menu */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <Button href={primaryCta.href} size="sm" arrow className="shadow-lg shadow-blue-600/30">
              {primaryCta.label}
            </Button>
          </div>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
