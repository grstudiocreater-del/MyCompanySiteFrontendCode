import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { brand } from "@/lib/brand";

type ContactCtaProps = {
  title?: string;
  description?: string;
};

export function Contact({
  title = "Have a high-impact product or vision to build?",
  description = "Let's architect, engineer, and launch it together with uncompromised craft.",
}: ContactCtaProps) {
  return (
    <section aria-labelledby="cta-title" className="pt-16 pb-24 sm:pb-32 bg-[#09090b] border-t border-white/10">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#181699] via-[#3B3BF5] to-[#4F46E5] px-8 py-16 text-white shadow-2xl shadow-accent/25 ring-1 ring-white/20 sm:px-16 sm:py-24">
            {/* Luminous cyber rings */}
            <div aria-hidden className="pointer-events-none absolute top-1/2 -right-40 size-[620px] -translate-y-1/2 sm:-right-20">
              {[0, 1, 2, 3].map((ring) => (
                <span
                  key={ring}
                  className="absolute inset-0 rounded-full border border-white/15"
                  style={{ inset: `${ring * 75}px` }}
                />
              ))}
              <span className="absolute top-1/2 left-1/2 size-5 -translate-1/2 rounded-full bg-cyan-300 shadow-lg shadow-cyan-300/50" />
            </div>

            {/* Ambient inner glow */}
            <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-24 size-80 rounded-full bg-cyan-400/20 blur-3xl" />

            {/* Heading, text and actions follow the panel in sequence */}
            <div className="relative max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                <span className="size-2 rounded-full bg-cyan-300 animate-pulse" />
                Start Your Project
              </div>

              <Reveal className="mt-6">
                <h2
                  id="cta-title"
                  className="font-display text-[2.6rem] leading-[1.02] font-extrabold tracking-[-0.04em] sm:text-6xl lg:text-7xl"
                >
                  {title}
                </h2>
              </Reveal>
              <Reveal delay={80}>
                <p className="mt-5 max-w-lg text-lg text-white/90 sm:text-xl leading-relaxed">{description}</p>
              </Reveal>
              <Reveal delay={160} className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button href="/contact" variant="inverse" size="lg" arrow className="shadow-xl">
                  Get in Touch
                </Button>
                <a
                  href={`mailto:${brand.email}`}
                  className="inline-flex min-h-12 items-center rounded-full border border-white/25 bg-white/10 px-6 text-[15px] font-medium text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.25)] backdrop-blur-md transition-[background-color,border-color,transform] duration-200 ease-soft hover:border-white/45 hover:bg-white/20 hover:-translate-y-0.5 focus-visible:outline-white"
                >
                  or email {brand.email}
                </a>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
