import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/company";
import { pad } from "@/lib/utils";

/** Horizontal timeline on large screens, vertical on smaller ones. */
export function Process({ title = "How We Work", eyebrow = "Process" }: { title?: string; eyebrow?: string }) {
  return (
    <section aria-labelledby="process-title" className="py-24 sm:py-32 bg-[#09090b] border-t border-white/10">
      <Container>
        <Reveal>
          <SectionHeading
            id="process-title"
            eyebrow={eyebrow}
            title={title}
            description="Four simple steps, repeated in small loops."
          />
        </Reveal>

        {/* The timeline line draws in (vertical on mobile, horizontal on desktop); steps follow one by one. */}
        <Reveal variant="line" className="relative mt-16">
          <div
            aria-hidden
            className="reveal-line absolute top-2 bottom-2 left-[19px] w-px origin-top bg-line-strong lg:top-[19px] lg:right-0 lg:bottom-auto lg:left-0 lg:h-px lg:w-auto lg:origin-left"
          />
          <ol className="grid gap-10 lg:grid-cols-4 lg:gap-8">
            {processSteps.map((step, index) => (
              <Reveal as="li" key={step.title} delay={150 + index * 120} duration={500} className="group relative pl-16 lg:pt-16 lg:pl-0">
                <span className="absolute top-0 left-0 grid size-11 place-items-center rounded-2xl border border-line bg-white font-mono text-xs font-bold text-ink shadow-xs transition-[background-color,border-color,color,scale,box-shadow] duration-300 ease-soft group-hover:scale-110 group-hover:border-accent group-hover:bg-accent group-hover:text-white group-hover:shadow-lg group-hover:shadow-accent/30">
                  {pad(index + 1)}
                </span>
                <h3 className="font-display text-2xl font-bold tracking-[-0.02em] text-ink group-hover:text-accent transition-colors duration-200">{step.title}</h3>
                <p className="mt-2 max-w-xs leading-relaxed text-muted">{step.description}</p>
              </Reveal>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
