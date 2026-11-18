"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState, type CSSProperties } from "react";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { mainNav, primaryCta } from "@/data/navigation";
import { brand } from "@/lib/brand";
import { cn, isActivePath, pad } from "@/lib/utils";

/**
 * Full-screen mobile tab menu built on the native modal <dialog>
 */
export function MobileMenu() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuId = useId();

  const close = () => dialogRef.current?.close();

  // Close after navigating, and when the viewport grows past the mobile breakpoint.
  useEffect(() => {
    dialogRef.current?.close();
  }, [pathname]);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const onChange = () => query.matches && dialogRef.current?.close();
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          dialogRef.current?.showModal();
          setOpen(true);
        }}
        aria-expanded={open}
        aria-controls={menuId}
        aria-haspopup="dialog"
        className="grid size-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:border-white/40 hover:bg-white/10 md:hidden"
      >
        <Icon name="menu" size={18} />
        <span className="sr-only">Open menu</span>
      </button>

      <dialog
        ref={dialogRef}
        id={menuId}
        aria-label="Menu"
        onClose={() => setOpen(false)}
        className="mobile-menu m-0 h-dvh w-full bg-[#09090b]/98 p-0 text-white backdrop-blur-2xl"
      >
        <div className="flex h-full flex-col px-6 pb-8">
          <div className="flex h-16 items-center justify-between border-b border-white/10">
            <Logo onClick={close} />
            <button
              type="button"
              onClick={close}
              className="grid size-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:border-white/40"
            >
              <Icon name="close" size={18} />
              <span className="sr-only">Close menu</span>
            </button>
          </div>

          <nav aria-label="Mobile Navigation" className="mt-8 flex-1">
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {mainNav.map((item, index) => {
                const active = isActivePath(pathname, item.href);
                return (
                  <li key={item.href} className="menu-item" style={{ "--i": index } as CSSProperties}>
                    <Link
                      href={item.href}
                      onClick={close}
                      aria-current={active ? "page" : undefined}
                      className="group flex items-center justify-between py-4"
                    >
                      <span className="flex items-baseline gap-4">
                        <span aria-hidden className="font-mono text-xs text-zinc-500">{pad(index + 1)}</span>
                        <span
                          className={cn(
                            "font-display text-2xl font-bold tracking-[-0.03em] transition-colors",
                            active ? "text-blue-400" : "text-white group-hover:text-blue-400",
                          )}
                        >
                          {item.label}
                        </span>
                      </span>
                      <Icon
                        name="arrow-right"
                        size={18}
                        className="text-zinc-500 transition-[translate,color] duration-150 ease-soft group-hover:translate-x-1 group-hover:text-blue-400"
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="menu-item space-y-4" style={{ "--i": mainNav.length } as CSSProperties}>
            <Button href={primaryCta.href} onClick={close} size="lg" arrow className="w-full shadow-lg shadow-blue-600/30">
              {primaryCta.label}
            </Button>
            <a href={`mailto:${brand.email}`} className="block text-center text-sm text-zinc-400 hover:text-white">
              {brand.email}
            </a>
          </div>
        </div>
      </dialog>
    </>
  );
}
