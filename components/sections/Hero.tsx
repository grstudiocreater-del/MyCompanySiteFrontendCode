import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import { PointerParallax } from "@/components/sections/PointerParallax";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { primaryCta } from "@/data/navigation";
import { cn } from "@/lib/utils";

function Floating({
  className,
  depth,
  delay,
  children,
}: {
  className: string;
  depth: number;
  delay: number;
  children: ReactNode;
}) {
  return (
    <div className={cn("absolute animate-settle", className)} style={{ animationDelay: `${delay}ms` }}>
      <div
        className="transition-[translate] duration-500 ease-soft motion-reduce:transition-none"
        style={{ translate: `calc(var(--px, 0) * ${depth}px) calc(var(--py, 0) * ${depth}px)` } as CSSProperties}
      >
        {children}
      </div>
    </div>
  );
}

function HeroVisual() {
  return (
    <PointerParallax className="group/visual sheen-trigger @container relative mx-auto aspect-[1/0.96] w-full max-w-[660px]">
      {/* Background Studio Arena */}
      <div aria-hidden className="absolute inset-[3%] overflow-hidden rounded-[7cqw] bg-[#141318] shadow-2xl shadow-ink/20 ring-1 ring-white/10">
        {/* Ambient drifting electric light orbs */}
        <span
          className="light-orb top-[2%] left-[20%] size-[60cqw] bg-[radial-gradient(circle,rgb(59_59_245/0.45),transparent_65%)]"
          style={{ "--drift-x": "-8%", "--drift-y": "7%" } as CSSProperties}
        />
        <span
          className="light-orb -bottom-[10%] -left-[10%] size-[65cqw] bg-[radial-gradient(circle,rgb(6_182_212/0.38),transparent_65%)]"
          style={{ "--drift-x": "10%", "--drift-y": "-7%", animationDelay: "-5s" } as CSSProperties}
        />
        <span
          className="light-orb -top-[12%] -right-[10%] size-[50cqw] bg-[radial-gradient(circle,rgb(147_51_234/0.35),transparent_65%)]"
          style={{ "--drift-x": "-5%", "--drift-y": "9%", animationDelay: "-9s" } as CSSProperties}
        />

        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(255_255_255/0.12)_1px,transparent_0)] bg-size-[3.2cqw_3.2cqw] opacity-40" />

        {/* Subtle decorative circuit lines */}
        <svg className="absolute inset-0 size-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <line x1="15%" y1="0" x2="15%" y2="100%" stroke="white" strokeWidth="1" strokeDasharray="6 8" />
          <line x1="85%" y1="0" x2="85%" y2="100%" stroke="white" strokeWidth="1" strokeDasharray="6 8" />
          <circle cx="85%" cy="30%" r="4" fill="#3B3BF5" />
          <circle cx="15%" cy="75%" r="4" fill="#06B6D4" />
        </svg>
      </div>

      <div aria-hidden className="absolute inset-0">
        {/* Main Central Component: Advanced Software & Code Engine Console */}
        <Floating className="top-[12%] left-[6%] w-[78%]" depth={4} delay={100}>
          <div className="rounded-[3.2cqw] border border-white/15 bg-[#17161f]/95 p-[3.2cqw] text-left shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-[translate,scale] duration-300 ease-soft group-hover/visual:-translate-y-[0.5cqw]">
            {/* Window Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-[2.2cqw]">
              <div className="flex items-center gap-[1.2cqw]">
                <span className="size-[2cqw] rounded-full bg-[#ff5f56]" />
                <span className="size-[2cqw] rounded-full bg-[#ffbd2e]" />
                <span className="size-[2cqw] rounded-full bg-[#27c93f]" />
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-[1cqw]">
                <span className="rounded-[1.2cqw] bg-white/10 px-[2cqw] py-[0.6cqw] font-mono text-[1.9cqw] font-medium text-white shadow-inner">
                  Engine.tsx
                </span>
                <span className="font-mono text-[1.8cqw] text-white/40">cloud.config</span>
              </div>

              <div className="flex items-center gap-[1.2cqw]">
                <span className="size-[1.6cqw] rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-[1.7cqw] text-emerald-400">ONLINE</span>
              </div>
            </div>

            {/* Code Body */}
            <div className="mt-[2.8cqw] font-mono text-[2.1cqw] leading-[1.65]">
              <p className="text-purple-400">
                <span className="text-cyan-400">import</span> &#123; GRStudio &#125; <span className="text-cyan-400">from</span> <span className="text-amber-300">&quot;@gr/creator&quot;</span>;
              </p>
              <p className="mt-[1cqw] text-white/50">&#47;&#47; Architecting next-gen digital experiences</p>
              <p className="mt-[0.6cqw] text-purple-400">
                <span className="text-cyan-400">const</span> app = <span className="text-cyan-400">await</span> GRStudio.<span className="text-blue-400 font-semibold">buildExperience</span>(&#123;
              </p>
              <p className="pl-[3cqw] text-white/90">
                solutions: [<span className="text-amber-300">&quot;Mobile&quot;</span>, <span className="text-amber-300">&quot;Web Apps&quot;</span>],
              </p>
              <p className="pl-[3cqw] text-white/90">
                architecture: <span className="text-emerald-400">&quot;High-Performance&quot;</span>,
              </p>
              <p className="pl-[3cqw] text-white/90">
                latency: <span className="text-cyan-300">&quot;&lt;40ms&quot;</span>,
              </p>
              <p className="pl-[3cqw] text-white/90">
                status: <span className="text-amber-300">&quot;Deployed &amp; Scaled 🚀&quot;</span>
              </p>
              <p className="text-purple-400">&#125;);</p>
            </div>

            {/* Console Footer */}
            <div className="mt-[3cqw] flex items-center justify-between border-t border-white/10 pt-[2cqw] font-mono text-[1.7cqw] text-white/60">
              <span className="flex items-center gap-[1cqw]">
                <span className="text-cyan-400">⚡ Turbopack:</span> 18ms
              </span>
              <span className="text-emerald-400 font-semibold">Ready for Production</span>
            </div>
          </div>
        </Floating>

        {/* Floating Layer 2: Live Analytics & Performance Telemetry Card */}
        <Floating className="top-[6%] right-[2%] w-[42%]" depth={8} delay={140}>
          <div className="rounded-[3cqw] border border-cyan-400/30 bg-[#161c28]/95 p-[3.2cqw] text-white shadow-2xl backdrop-blur-xl transition-[translate,scale] duration-300 ease-soft group-hover/visual:-translate-y-[0.8cqw] group-hover/visual:scale-[1.03]">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[1.8cqw] font-semibold tracking-wider text-cyan-300 uppercase">
                TELEMETRY
              </span>
              <span className="flex items-center gap-[0.8cqw] rounded-full bg-cyan-500/20 px-[1.5cqw] py-[0.4cqw] font-mono text-[1.6cqw] text-cyan-300">
                <span className="size-[1.2cqw] rounded-full bg-cyan-400 animate-ping" />
                REALTIME
              </span>
            </div>

            <div className="mt-[2cqw]">
              <p className="font-display text-[4.8cqw] font-bold tracking-tight text-white">99.98%</p>
              <p className="font-mono text-[1.8cqw] text-white/60">System Availability</p>
            </div>

            {/* Sparkline Graph */}
            <div className="relative mt-[2.2cqw] h-[8cqw] w-full overflow-hidden rounded-[1.4cqw] bg-white/5 p-[0.8cqw]">
              <svg viewBox="0 0 100 40" className="size-full overflow-visible" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#3B3BF5" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 32 Q 20 10, 40 24 T 80 8 L 100 18 L 100 40 L 0 40 Z"
                  fill="url(#chartGrad)"
                />
                <path
                  d="M0 32 Q 20 10, 40 24 T 80 8 L 100 18"
                  fill="none"
                  stroke="#38BDF8"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </Floating>

        {/* Floating Layer 3: Official Brand Emblem & Verification Badge */}
        <Floating className="bottom-[4%] left-[4%] w-[48%]" depth={10} delay={170}>
          <div className="rounded-[3cqw] border border-white/20 bg-white/10 p-[3.2cqw] text-white shadow-2xl backdrop-blur-2xl transition-[translate,scale] duration-300 ease-soft group-hover/visual:translate-y-[-0.6cqw] group-hover/visual:scale-[1.02]">
            <div className="flex items-center gap-[2.4cqw]">
              <div className="relative size-[9cqw] shrink-0 overflow-hidden rounded-[2cqw] bg-[#1c1b18] p-[1cqw] shadow-md ring-1 ring-white/30">
                <Image
                  src="/images/gr-logo.png"
                  alt="GR Studio Creator Logo"
                  width={64}
                  height={64}
                  className="size-full object-contain"
                  priority
                />
              </div>

              <div>
                <p className="font-display text-[2.6cqw] font-bold text-white">GR Studio Creator</p>
                <p className="font-mono text-[1.8cqw] text-white/70">Verified Digital Studio</p>
              </div>
            </div>

            <div className="mt-[2.4cqw] flex flex-wrap gap-[1.2cqw]">
              <span className="rounded-full bg-accent/30 px-[2cqw] py-[0.6cqw] font-mono text-[1.7cqw] text-accent-tint">
                App Development
              </span>
              <span className="rounded-full bg-cyan-400/20 px-[2cqw] py-[0.6cqw] font-mono text-[1.7cqw] text-cyan-200">
                Web Solutions
              </span>
            </div>
          </div>
        </Floating>

        {/* Floating Layer 4: Global Deployment Verified Capsule */}
        <Floating className="top-[3%] left-[16%]" depth={12} delay={190}>
          <div className="flex items-center gap-[1.4cqw] rounded-full border border-emerald-400/30 bg-[#111822]/90 py-[1.2cqw] pr-[3cqw] pl-[1.4cqw] text-[2.2cqw] font-medium text-white shadow-xl backdrop-blur-xl">
            <span className="grid size-[3.8cqw] place-items-center rounded-full bg-emerald-500/20 text-emerald-400">
              <svg viewBox="0 0 24 24" className="size-[2.4cqw]" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="m5 12 5 5L20 7" />
              </svg>
            </span>
            <span>Production Deploy Verified</span>
          </div>
        </Floating>

        {/* Floating Layer 5: High-Precision Creator Cursor */}
        <Floating className="top-[52%] right-[18%]" depth={14} delay={210}>
          <div className="flex items-center gap-[1cqw]">
            <svg
              viewBox="0 0 24 24"
              className="size-[5cqw] drop-shadow-[0_4px_8px_rgb(0_0_0/0.5)] transition-[translate] duration-300 ease-soft group-hover/visual:translate-x-[0.6cqw]"
            >
              <path d="M5 3.5 19 11l-6.2 1.6L9.6 19 5 3.5Z" fill="#3B3BF5" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
            <span className="rounded-md bg-accent px-[1.5cqw] py-[0.5cqw] font-mono text-[1.7cqw] font-semibold text-white shadow-lg">
              Lead Architect
            </span>
          </div>
        </Floating>
      </div>
    </PointerParallax>
  );
}

function Underline() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 300 20"
      preserveAspectRatio="none"
      className="absolute -bottom-[0.2em] left-0 h-[0.28em] w-full text-accent"
    >
      <path
        d="M3 14c50-7 110-11 170-9 42 1.5 82 4 124 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        pathLength={1}
        className="[stroke-dasharray:1] animate-[draw_0.6s_0.3s_var(--ease-soft)_both]"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden pt-6 pb-16 lg:pt-12 lg:pb-24">
      {/* Ambient Cyber Mesh Glow */}
      <div aria-hidden className="pointer-events-none absolute -top-48 left-1/2 -translate-x-1/2 size-[800px] rounded-full bg-gradient-to-b from-blue-600/20 via-indigo-600/15 to-transparent blur-[120px]" />

      <Container className="relative grid items-center gap-12 lg:grid-cols-[48fr_52fr] lg:gap-10">
        <div className="max-w-2xl">
          {/* High-Tech Glowing Eyebrow Pill */}
          <div className="inline-flex animate-rise items-center gap-2.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 backdrop-blur-md">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-blue-400" />
            </span>
            <span className="font-mono text-xs font-semibold tracking-wider text-blue-300 uppercase">
              App Development • Web Solutions • Digital Products
            </span>
          </div>

          <h1
            id="hero-title"
            className="mt-6 animate-rise font-display text-[2.85rem] leading-[1.02] font-extrabold tracking-[-0.04em] text-white sm:text-6xl lg:text-[4.75rem]"
          >
            Engineering Next-Gen{" "}
            <span className="relative inline-block bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Digital Experiences
              <Underline />
            </span>{" "}
            With Purpose.
          </h1>

          <p className="mt-7 max-w-xl animate-rise text-lg leading-relaxed text-zinc-400 [animation-delay:80ms] sm:text-xl">
            We architect high-performance mobile applications, bespoke web platforms, and intelligent digital products—merging rigorous software engineering with purposeful design.
          </p>

          <div className="mt-9 flex animate-rise flex-col gap-3.5 [animation-delay:160ms] sm:flex-row">
            <Button href="/products" size="lg" arrow className="shadow-lg shadow-blue-600/25">
              Explore Products
            </Button>
            <Button href={primaryCta.href} size="lg" variant="secondary">
              {primaryCta.label}
            </Button>
          </div>

          {/* Advanced Tech & Performance Metrics Strip */}
          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-7 animate-rise [animation-delay:220ms]">
            <div>
              <p className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">99.9%</p>
              <p className="mt-1 font-mono text-xs text-zinc-400 uppercase tracking-wider">Uptime Reliability</p>
            </div>
            <div>
              <p className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">&lt;45ms</p>
              <p className="mt-1 font-mono text-xs text-zinc-400 uppercase tracking-wider">Edge Response</p>
            </div>
            <div>
              <p className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">Full-Stack</p>
              <p className="mt-1 font-mono text-xs text-zinc-400 uppercase tracking-wider">Architecture</p>
            </div>
          </div>
        </div>

        <HeroVisual />
      </Container>
    </section>
  );
}
