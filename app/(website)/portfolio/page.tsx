import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProductCard } from "@/components/products/ProductCard";
import { ClientPortfolio } from "@/components/sections/ClientPortfolio";
import { Contact } from "@/components/sections/Contact";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { products } from "@/data/products";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Portfolio & Products",
  description: "Explore GR Studio Creator proprietary Play Store products and founder Govind Rajput's external client engineering portfolio.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Dual Portfolio Architecture"
        title="Company Products &amp; Founder Portfolio."
        description="We believe in absolute transparency: explore our studio's proprietary consumer applications on Google Play alongside our founder's technical systems engineered for external client organizations."
      >
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="#company-apps"
            className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-xs font-semibold tracking-wider text-blue-300 uppercase transition-all hover:bg-blue-500/20 hover:border-blue-400"
          >
            <span className="size-1.5 rounded-full bg-blue-400" />
            1. Studio Proprietary Apps ({products.length})
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-xs font-semibold tracking-wider text-purple-300 uppercase transition-all hover:bg-purple-500/20 hover:border-purple-400"
          >
            <span className="size-1.5 rounded-full bg-purple-400" />
            2. Founder Client / Employee Work
          </a>
          <a
            href="https://rajput-govind-porfolio-dark.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold text-zinc-300 transition-all hover:bg-white/10 hover:border-white/40 hover:text-white"
          >
            Founder Live Site ↗
          </a>
        </div>
      </PageHeader>

      {/* SECTION 1: STUDIO PROPRIETARY PRODUCTS */}
      <section id="company-apps" aria-labelledby="company-apps-title" className="scroll-mt-24 py-16 sm:py-24">
        <Container>
          <Reveal className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-blue-300 uppercase">
              <span className="size-1.5 rounded-full bg-blue-400" />
              Proprietary Intellectual Property
            </div>
            <h2
              id="company-apps-title"
              className="mt-4 font-display text-3xl sm:text-4xl font-extrabold tracking-[-0.035em] text-white"
            >
              GR Studio Creator Applications
            </h2>
            <p className="mt-3 text-base text-zinc-400">
              The products below are 100% conceptualized, built, owned, and maintained by <strong>GR Studio Creator</strong>. They include our live production releases and closed testing tracks on Google Play.
            </p>
          </Reveal>

          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {products.map((product, index) => (
              <Reveal as="li" key={product.slug} delay={(index % 2) * 80}>
                <ProductCard product={product} headingLevel="h3" />
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* SECTION 2: FOUNDER CLIENT & EMPLOYEE WORK */}
      <ClientPortfolio />

      <Contact
        title="Have an idea or need custom engineering?"
        description="Whether you want to collaborate on our products or hire us to engineer your next mobile app or web platform, let's talk."
      />
    </>
  );
}