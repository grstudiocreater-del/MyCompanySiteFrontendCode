import Link from "next/link";
import type { ReactNode } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { legalNav, mainNav } from "@/data/navigation";
import { brand } from "@/lib/brand";

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="font-mono text-xs font-semibold tracking-[0.16em] text-white/50 uppercase">{title}</h2>
      <ul className="mt-4 space-y-1">{children}</ul>
    </div>
  );
}

const linkClass =
  "inline-flex min-h-8 items-center gap-1.5 py-1 text-[15px] text-white/70 transition-[color,transform] duration-150 ease-soft hover:translate-x-1 hover:text-white";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#09090b] text-white">
      {/* Top subtle ambient blue glow */}
      <div aria-hidden className="pointer-events-none absolute -top-48 left-1/2 -translate-x-1/2 size-96 rounded-full bg-accent/20 blur-3xl" />

      <Container className="relative pt-18 pb-10">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-center gap-2.5 rounded-lg">
              <span className="relative block size-9 shrink-0">
                <Image
                  src="/images/gr-logo.png"
                  alt=""
                  width={36}
                  height={36}
                  className="size-full object-contain"
                />
              </span>
              <span className="font-display text-[1.4rem] font-bold tracking-[-0.035em] text-white">
                GR Studio <span className="text-accent">Creator</span>
              </span>
            </Link>

            <p className="mt-4 leading-relaxed text-white/60 text-[15px]">{brand.tagline}</p>

            <div className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-medium text-emerald-400">
              <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for New Projects
            </div>
          </div>

          <FooterColumn title="Navigate">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Legal">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Connect">
            <li>
              <a href={`mailto:${brand.email}`} className={`${linkClass} group break-all`}>
                <Icon name="mail" size={16} className="shrink-0 text-accent" />
                {brand.email}
              </a>
            </li>
            <li className="mt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-white/40"
              >
                Send a Message
                <Icon
                  name="arrow-up-right"
                  size={15}
                  className="transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </li>
          </FooterColumn>
        </div>

        {/* Oversized background wordmark */}
        <p
          aria-hidden
          className="mt-16 font-display leading-[0.85] font-extrabold tracking-[-0.05em] whitespace-nowrap text-white/[0.035] select-none text-center"
          style={{ fontSize: `min(15rem, calc((min(100vw, 1240px) - 4rem) / ${(brand.shortName.length * 0.6).toFixed(2)}))` }}
        >
          {brand.shortName}
        </p>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {brand.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs">APP DEVELOPMENT • WEB SOLUTIONS • DIGITAL PRODUCTS</p>
        </div>
      </Container>
    </footer>
  );
}
