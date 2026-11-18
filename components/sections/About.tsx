import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { principles } from "@/data/company";

/**
 * "Attention to detail" illustration: an interface card annotated with
 * spacing redlines, and a loupe magnifying a corner radius.
 * The loupe lifts slightly on hover.
 */
export function DetailVisual({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 480 480" role="img" aria-label="An interface card annotated with precise spacing measurements under a magnifying glass" className="group/detail h-auto w-full">
        <defs>
          <pattern id="detail-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M24 0H0v24" fill="none" stroke="var(--color-line)" strokeWidth="1" />
          </pattern>
          <clipPath id="loupe-clip">
            <circle cx="338" cy="334" r="84" />
          </clipPath>
          <g id="detail-card">
            <rect x="72" y="132" width="320" height="196" rx="24" fill="var(--color-paper)" stroke="var(--color-line-strong)" />
            <circle cx="120" cy="180" r="22" fill="var(--color-accent-soft)" />
            <rect x="156" y="166" width="140" height="12" rx="6" fill="var(--color-ink)" />
            <rect x="156" y="188" width="92" height="9" rx="4.5" fill="var(--color-line-strong)" />
            <rect x="96" y="226" width="272" height="8" rx="4" fill="var(--color-line)" />
            <rect x="96" y="244" width="220" height="8" rx="4" fill="var(--color-line)" />
            <rect x="96" y="274" width="132" height="34" rx="12" fill="var(--color-accent)" />
            <rect x="118" y="288" width="72" height="6" rx="3" fill="white" />
          </g>
        </defs>

        <rect width="480" height="480" rx="36" fill="var(--color-sand)" />
        <rect width="480" height="480" rx="36" fill="url(#detail-grid)" opacity="0.8" />

        <use href="#detail-card" />

        {/* Redlines */}
        <g stroke="var(--color-accent)" strokeWidth="1.5" fill="var(--color-accent)" className="font-mono" fontSize="11">
          <path d="M72 112h24M72 106v12M96 106v12" fill="none" />
          <text x="76" y="100" stroke="none">24</text>
          <path d="M412 132v24M406 132h12M406 156h12" fill="none" />
          <text x="420" y="148" stroke="none">24</text>
          <path d="M96 356h132M96 350v12M228 350v12" fill="none" />
          <text x="148" y="378" stroke="none">132</text>
        </g>

        {/* Loupe: lifts a few pixels on hover — the section's single interaction */}
        <g className="transition-[translate] duration-300 ease-soft group-hover/detail:-translate-x-1 group-hover/detail:-translate-y-1">
          <g clipPath="url(#loupe-clip)">
            <circle cx="338" cy="334" r="84" fill="var(--color-ivory)" />
            {/* Magnified around the button's top-right corner (222, 280) */}
            <g transform="translate(338 334) scale(2.6) translate(-222 -280)">
              <use href="#detail-card" />
            </g>
            <path d="M322.4 349.6 344.5 327.5" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
            <circle cx="322.4" cy="349.6" r="3.5" fill="white" />
          </g>
          <circle cx="338" cy="334" r="84" fill="none" stroke="var(--color-ink)" strokeWidth="5" />
          <path d="M398 394l38 38" stroke="var(--color-ink)" strokeWidth="14" strokeLinecap="round" />
          <rect x="300" y="226" width="54" height="22" rx="11" fill="var(--color-ink)" />
          <text x="327" y="241" textAnchor="middle" fill="white" fontSize="11" className="font-mono">
            r 12
          </text>
        </g>
      </svg>
    </div>
  );
}

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-20 py-24 sm:py-32 bg-[#0c0c10] border-t border-white/10">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <DetailVisual className="mx-auto max-w-[540px]" />
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <SectionHeading
              id="about-title"
              eyebrow="About"
              title={
                <>
                  Built With Curiosity. <span className="text-accent">Designed With Care.</span>
                </>
              }
              description="We focus on products that are useful. That means caring about small details, keeping experiences simple and improving things after launch."
            />
          </Reveal>

          <ul className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {principles.map((principle, index) => (
              <Reveal as="li" key={principle.title} delay={index * 70} className="flex gap-3.5">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                  <Icon name="check" size={14} strokeWidth={2.4} />
                </span>
                <div>
                  <h3 className="font-medium text-ink">{principle.title}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-muted">{principle.description}</p>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-10">
            <Button href="/about" variant="secondary" arrow>
              More about us
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
