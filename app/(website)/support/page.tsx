import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { products } from "@/data/products";
import { faqs, troubleshooting } from "@/data/support";
import { brand } from "@/lib/brand";
import { createMetadata } from "@/lib/metadata";
import { stretchedLink } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Support",
  description: "Answers to common questions, troubleshooting steps and ways to get help with our products.",
  path: "/support",
});

export default function SupportPage() {
  return (
    <>
      <PageHeader
        eyebrow="Support"
        title="How can we help?"
        description="Start with the common questions below. If you can't find what you need, get in touch and include as much detail as you can."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/contact" arrow>
            Contact support
          </Button>
          <Button href="#faq" variant="secondary">
            Browse FAQ
          </Button>
        </div>
      </PageHeader>

      {/* Product support */}
      <section aria-labelledby="product-support-title" className="pb-20 sm:pb-28">
        <Container>
          <Reveal>
            <h2 id="product-support-title" className="font-mono text-xs tracking-[0.14em] text-muted uppercase">
              Product support
            </h2>
          </Reveal>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <Reveal as="li" key={product.slug} delay={index * 60}>
                <Card interactive className="group flex h-full flex-col p-6">
                  <span className="font-mono text-[11px] tracking-wider text-muted uppercase">{product.category}</span>
                  <h3 className="mt-2 font-display text-xl font-semibold tracking-[-0.02em] text-ink">{product.name}</h3>
                  <p className="mt-1 text-[15px] text-muted">{product.shortDescription}</p>
                  <Link
                    href={`/products/${product.slug}`}
                    className={`mt-5 inline-flex min-h-8 items-center gap-1.5 self-start text-sm font-medium text-ink group-hover:text-accent ${stretchedLink()}`}
                  >
                    Product details<span className="sr-only">: {product.name}</span>
                    <Icon name="arrow-right" size={15} className="transition-[translate] duration-150 ease-soft group-hover:translate-x-1" />
                  </Link>
                </Card>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* FAQ + troubleshooting */}
      <section id="faq" aria-labelledby="faq-title" className="scroll-mt-20 border-t border-line py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <SectionHeading id="faq-title" eyebrow="FAQ" title="Frequently asked" description="General questions about our products and how we work." />
          </Reveal>
          <Reveal>
            <Accordion items={faqs} name="faq" />
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="troubleshooting-title" className="bg-sand/60 py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              id="troubleshooting-title"
              eyebrow="Troubleshooting"
              title="Something not working?"
              description="A few general steps worth trying before you contact us."
            />
          </Reveal>
          <Reveal>
            <Accordion items={troubleshooting} name="troubleshooting" />
          </Reveal>
        </Container>
      </section>

      {/* Contact information */}
      <section aria-labelledby="support-contact-title" className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <Card radius="lg" className="grid gap-8 p-8 sm:p-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
              <div>
                <h2 id="support-contact-title" className="font-display text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl">
                  Still need help?
                </h2>
                <p className="mt-3 max-w-lg leading-relaxed text-muted">
                  Tell us which product you&apos;re using, what you expected to happen and what happened instead. Screenshots help too.
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:items-end">
                <Button href="/contact" size="lg" arrow>
                  Send a message
                </Button>
                <a href={`mailto:${brand.email}`} className="inline-flex items-center gap-2 text-muted transition-colors hover:text-accent">
                  <Icon name="mail" size={17} />
                  {brand.email}
                </a>
              </div>
            </Card>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
