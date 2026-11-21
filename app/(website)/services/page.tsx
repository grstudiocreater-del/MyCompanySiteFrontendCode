import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Contact } from "@/components/sections/Contact";
import { Process } from "@/components/sections/Process";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/services";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Services",
  description:
    "Mobile and web application development, backend and API development, UI/UX implementation, product maintenance and technical support.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="What we can build together."
        description="From the first sketch to long after launch, we help make products that are useful, reliable and pleasant to use."
      >
        <Button href="/contact" arrow>
          Start a conversation
        </Button>
      </PageHeader>

      <section aria-label="All services" className="pt-10 sm:pt-14 pb-16 sm:pb-24">
        <Container>
          <ul className="border-t border-line">
            {services.map((service) => (
              <Reveal
                as="li"
                key={service.id}
                className="border-b border-line"
              >
                <article
                  id={service.id}
                  className="group grid scroll-mt-24 gap-6 py-10 sm:py-12 lg:grid-cols-[80px_1fr_1.1fr] lg:gap-10"
                >
                  <span className="font-mono text-sm text-muted transition-[color,transform,translate,scale,rotate] duration-300 ease-soft group-hover:translate-x-1 group-hover:text-accent">
                    {service.number}
                  </span>
                  <div>
                    <span className="grid size-12 place-items-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-400 transition-[background-color,color,transform,translate,scale,rotate] duration-300 ease-soft group-hover:-translate-y-0.5 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/30">
                      <Icon name={service.icon} size={22} />
                    </span>
                    <h2 className="mt-5 font-display text-3xl font-semibold tracking-[-0.03em] text-ink">{service.title}</h2>
                    <p className="mt-3 max-w-md text-lg leading-relaxed text-muted">{service.description}</p>
                  </div>
                  <div className="lg:pt-2">
                    <h3 className="font-mono text-xs tracking-[0.14em] text-muted uppercase">What&apos;s included</h3>
                    <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                      {(service.included ?? []).map((item) => (
                        <li key={item} className="flex items-start gap-3 text-ink-soft">
                          <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                            <Icon name="check" size={12} strokeWidth={2.6} />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <Process />
      <Contact />
    </>
  );
}
