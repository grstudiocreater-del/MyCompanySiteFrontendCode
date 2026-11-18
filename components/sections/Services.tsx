import { ServiceCard } from "@/components/services/ServiceCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="scroll-mt-20 bg-[#0c0c10] py-24 sm:py-32 border-t border-white/10">
      <Container>
        <Reveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="services-title"
            eyebrow="Services"
            title="What We Do"
            description="Practical help across the whole life of a product, from first build to ongoing care."
          />
          <Button href="/services" variant="secondary" arrow className="self-start md:self-auto">
            Explore services
          </Button>
        </Reveal>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {services.map((service, index) => (
            <Reveal as="li" key={service.id} delay={(index % 3) * 80}>
              <ServiceCard service={service} href={`/services#${service.id}`} />
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
