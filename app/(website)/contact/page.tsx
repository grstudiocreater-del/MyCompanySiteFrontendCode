import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { brand } from "@/lib/brand";
import { createMetadata } from "@/lib/metadata";
import { stretchedLink } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description: "Have an idea, a question or need help with a product? Send us a message.",
  path: "/contact",
});

const tips = [
  "What you're hoping to build or fix",
  "Who it's for and why it matters",
  "Any timing we should know about",
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk."
        description="Have an idea worth building, a question about a product, or just want to say hello? Send us a message."
      />

      <section aria-label="Contact options" className="pb-24 sm:pb-32">
        <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.4fr] lg:gap-12">
          <aside className="space-y-6">
            <Card tone="sand" className="p-7">
              <span className="grid size-11 place-items-center rounded-2xl bg-paper text-accent">
                <Icon name="mail" size={20} />
              </span>
              <h2 className="mt-5 font-display text-xl font-semibold tracking-[-0.02em] text-ink">Email us</h2>
              <a
                href={`mailto:${brand.email}`}
                className="mt-1 inline-block break-all text-lg text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent"
              >
                {brand.email}
              </a>
            </Card>

            <Card tone="plain" className="p-7">
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink">Helpful to include</h2>
              <ul className="mt-4 space-y-3">
                {tips.map((tip) => (
                  <li key={tip} className="flex items-start gap-3 text-muted">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                      <Icon name="check" size={12} strokeWidth={2.6} />
                    </span>
                    {tip}
                  </li>
                ))}
              </ul>
            </Card>

            <Card tone="plain" interactive className="group flex items-center justify-between gap-4 p-7">
              <div>
                <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink">
                  <Link href="/support" className={stretchedLink()}>
                    Need product help?
                  </Link>
                </h2>
                <p className="mt-1 text-muted">Check the support page first.</p>
              </div>
              <Icon
                name="arrow-right"
                size={20}
                className="shrink-0 text-muted transition-[translate,color] duration-150 ease-soft group-hover:translate-x-1 group-hover:text-accent"
              />
            </Card>
          </aside>

          <ContactForm />
        </Container>
      </section>
    </>
  );
}
