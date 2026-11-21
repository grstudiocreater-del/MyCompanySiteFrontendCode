import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProductCard } from "@/components/products/ProductCard";
import { Contact } from "@/components/sections/Contact";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { products } from "@/data/products";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Products",
  description: "A gallery of the digital products we've designed and built around real people and everyday needs.",
  path: "/products",
});

export default function ProductsPage() {
  const categories = Array.from(new Set(products.map((product) => product.category)));
  const [featured, ...rest] = products;

  return (
    <>
      <PageHeader
        eyebrow="Play Store & Mobile Portfolio"
        title="Our Applications & Projects."
        description="Explore our live releases and early access beta applications on Google Play. Request testing access to preview new features before public release."
      >
        <ul aria-label="Product categories" className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <li
              key={category}
              className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 font-mono text-xs tracking-wider text-zinc-300 uppercase"
            >
              {category}
            </li>
          ))}
        </ul>
      </PageHeader>

      <section aria-label="All products" className="pt-12 sm:pt-16 pb-24 sm:pb-32">
        <Container>
          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {featured && (
              <Reveal as="li" className="md:col-span-2 lg:col-span-3">
                <ProductCard product={featured} layout="wide" headingLevel="h2" eager />
              </Reveal>
            )}
            {rest.map((product, index) => (
              <Reveal as="li" key={product.slug} delay={(index % 3) * 80}>
                <ProductCard product={product} headingLevel="h2" />
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <Contact title="Something you'd like to see?" description="Tell us about an idea, a problem or a product you wish existed." />
    </>
  );
}
