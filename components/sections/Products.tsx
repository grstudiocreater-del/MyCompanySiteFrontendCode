import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { products } from "@/data/products";
import { FEATURED_PRODUCT_LIMIT } from "@/lib/constants";

export function Products() {
  const featured = products.slice(0, FEATURED_PRODUCT_LIMIT);
  if (featured.length === 0) return null;

  return (
    <section id="products" aria-labelledby="products-title" className="scroll-mt-20 py-24 sm:py-32 bg-[#09090b] border-t border-white/10">
      <Container>
        <Reveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="products-title"
            eyebrow="Play Store & Mobile Portfolio"
            title="Official Applications & Projects"
            description="Explore our live releases and early access closed beta applications on the Google Play Store."
          />
          <Button href="/products" variant="secondary" arrow className="self-start md:self-auto">
            All 4 Applications
          </Button>
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 lg:gap-6">
          {featured.map((product, index) => (
            <Reveal as="li" key={product.slug} delay={(index % 4) * 80}>
              <ProductCard product={product} layout="default" />
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
