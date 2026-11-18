import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { DetailVisual } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Process } from "@/components/sections/Process";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { mindset, principles } from "@/data/company";
import { createMetadata } from "@/lib/metadata";
import { pad } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "About",
  description: "We build useful digital products with attention to detail — simple experiences, continuously improved.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={
          <>
            We build useful digital products with <span className="text-accent">attention to detail.</span>
          </>
        }
        description="We care about the craft of making software, and we'd rather build a few things well than many things quickly."
      />

      {/* Philosophy */}
      <section aria-labelledby="philosophy-title" className="py-16 sm:py-24">
        <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <SectionHeading
                id="philosophy-title"
                eyebrow="Philosophy"
                title="Built With Curiosity. Designed With Care."
                description="Good products feel obvious in hindsight. Getting there takes curiosity about how people work and care for the details they may never consciously notice."
              />
            </Reveal>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {principles.map((principle, index) => (
                <Reveal
                  as="li"
                  key={principle.title}
                  delay={(index % 2) * 80}
                >
                  <Card className="h-full p-6">
                    <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-ink">{principle.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted">{principle.description}</p>
                  </Card>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal>
            <DetailVisual className="mx-auto max-w-[520px]" />
          </Reveal>
        </Container>
      </section>

      {/* How we work */}
      <div className="bg-[#0c0c10] border-t border-white/10">
        <Process eyebrow="Process" title="How We Work" />
      </div>

      {/* Product mindset */}
      <section aria-labelledby="mindset-title" className="py-24 sm:py-32">
        <Container>
          <Reveal>
            <SectionHeading
              id="mindset-title"
              eyebrow="Product mindset"
              title="What guides our decisions"
            />
          </Reveal>
          <ol className="mt-14 divide-y divide-line border-y border-line">
            {mindset.map((item, index) => (
              <Reveal
                as="li"
                key={item.title}
                delay={index * 60}
                className="group grid gap-3 py-8 sm:grid-cols-[80px_1fr_1.3fr] sm:gap-8 sm:py-10"
              >
                <span className="font-mono text-sm text-muted transition-colors group-hover:text-accent">{pad(index + 1)}</span>
                <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl">{item.title}</h3>
                <p className="text-lg leading-relaxed text-muted">{item.description}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <Contact title="Let's make something useful." description="Tell us what you're working on." />
    </>
  );
}
