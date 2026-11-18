import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductVisual } from "@/components/products/ProductArt";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { getProduct, products } from "@/data/products";
import { assetExists } from "@/lib/assets";
import { createMetadata } from "@/lib/metadata";
import { pad } from "@/lib/utils";

// Unknown slugs get the static 404 page instead of an on-demand render.
export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product not found" };

  return createMetadata({
    title: product.name,
    description: product.shortDescription,
    path: `/products/${product.slug}`,
  });
}

export default async function ProductPage({ params }: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const paragraphs = product.description.split(/\n\s*\n/).filter(Boolean);
  const screenshots = product.images.filter((src) => assetExists(src));
  const links = product.links ?? [];
  const others = products.filter((item) => item.slug !== product.slug).slice(0, 3);

  return (
    <article>
      {/* Hero */}
      <section className="pt-8 pb-16 sm:pt-12 sm:pb-24">
        <Container>
          <nav aria-label="Breadcrumb" className="animate-rise">
            <ol className="flex items-center gap-2 text-sm text-muted">
              <li>
                <Link href="/products" className="inline-flex min-h-6 items-center transition-colors hover:text-accent">
                  Products
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="text-ink">
                {product.name}
              </li>
            </ol>
          </nav>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
            <div className="animate-rise [animation-delay:80ms]">
              <div className="flex flex-wrap items-center gap-2.5">
                <Tag>{product.category}</Tag>
                {product.status === "production" ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/20 px-3 py-1 font-mono text-[11px] font-semibold text-emerald-300">
                    <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Play Store Live
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-amber-500/20 px-3 py-1 font-mono text-[11px] font-semibold text-amber-300">
                    <span className="size-1.5 rounded-full bg-amber-400" />
                    Closed Testing (Beta)
                  </span>
                )}
              </div>
              {product.packageId && (
                <p className="mt-3 font-mono text-xs text-zinc-500">Package: {product.packageId}</p>
              )}
              <h1 className="mt-4 font-display text-5xl leading-[0.98] font-bold tracking-[-0.045em] text-white sm:text-7xl">
                {product.name}
              </h1>
              {product.tagline && (
                <p className="mt-4 font-display text-2xl tracking-[-0.02em] text-blue-300 sm:text-3xl">{product.tagline}</p>
              )}
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-zinc-400">{product.shortDescription}</p>

              {links.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-4">
                  {links.map((link) => (
                    <Button key={link.href} href={link.href} size="lg" arrow className="shadow-lg shadow-blue-600/30">
                      {link.label}
                    </Button>
                  ))}
                </div>
              )}

              {product.highlights && product.highlights.length > 0 && (
                <ul aria-label="Highlights" className="mt-8 flex flex-wrap gap-2">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs font-medium text-zinc-300">
                      <Icon name="check" size={14} strokeWidth={2.4} className="text-blue-400" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="group animate-settle [animation-delay:160ms]">
              <ProductVisual
                name={product.name}
                image={product.images[0]}
                icon={product.icon}
                artwork={product.artwork}
                alt={`${product.name} preview`}
                eager
                className="aspect-[5/4] rounded-[32px] border border-line"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Description + features */}
      <section aria-labelledby="overview-title" className="border-t border-line py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal>
            <Eyebrow>Overview</Eyebrow>
            <h2 id="overview-title" className="mt-4 font-display text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl">
              About {product.name}
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          {product.features.length > 0 && (
            <Reveal>
              <h2 className="font-mono text-xs tracking-[0.14em] text-muted uppercase">Features</h2>
              <ul className="mt-5 divide-y divide-line border-y border-line">
                {product.features.map((feature, index) => (
                  <li key={feature} className="group flex items-baseline gap-5 py-5">
                    <span className="font-mono text-xs text-muted transition-colors group-hover:text-accent">{pad(index + 1)}</span>
                    <span className="text-lg text-ink">{feature}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </Container>
      </section>

      {/* Screenshots — only images that exist are shown */}
      {screenshots.length > 0 && (
        <section aria-labelledby="screens-title" className="bg-sand/60 py-20 sm:py-28">
          <Container>
            <Reveal>
              <Eyebrow>Screenshots</Eyebrow>
              <h2 id="screens-title" className="mt-4 font-display text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl">
                A closer look
              </h2>
            </Reveal>
            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {screenshots.map((src, index) => (
                <Reveal as="li" key={src} delay={index * 90}>
                  <div className="group overflow-hidden rounded-3xl border border-line bg-paper p-2">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] bg-sand">
                      <Image
                        src={src}
                        alt={`${product.name} screenshot ${index + 1}`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 ease-soft group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {/* Links + support */}
      <section aria-label="Links and support" className="py-20 sm:py-28">
        <Container className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <Card radius="lg" className="flex h-full flex-col p-8 sm:p-10">
              <Eyebrow>{links.length > 0 ? "Product links" : "Questions"}</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.03em] text-ink">
                {links.length > 0 ? `Get ${product.name}` : `Curious about ${product.name}?`}
              </h2>
              {links.length > 0 ? (
                <ul className="mt-6 space-y-2">
                  {links.map((link) => {
                    const external = link.href.startsWith("http");
                    return (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          className="group inline-flex items-center gap-2 text-lg font-medium text-ink hover:text-accent"
                        >
                          {link.label}
                          <Icon name="arrow-up-right" size={18} className="transition-transform duration-300 ease-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          {external && <span className="sr-only">(opens in a new tab)</span>}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <p className="mt-3 max-w-md leading-relaxed text-muted">Ask us anything about what it does or how to get it.</p>
              )}
              <div className="mt-auto pt-8">
                <Button href="/contact" variant="secondary" arrow>
                  Ask a question
                </Button>
              </div>
            </Card>
          </Reveal>

          <Reveal delay={90} className="flex flex-col justify-between rounded-[32px] bg-ink p-8 text-white sm:p-10">
            <div>
              <span className="grid size-12 place-items-center rounded-2xl bg-white/10 text-white">
                <Icon name="lifebuoy" size={22} />
              </span>
              <h2 className="mt-6 font-display text-3xl font-semibold tracking-[-0.03em]">Need help?</h2>
              <p className="mt-3 max-w-md leading-relaxed text-white/75">
                Check the support page for common questions, or send us a message about {product.name}.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/support" variant="inverse" arrow>
                Visit support
              </Button>
              <Button href="/contact" variant="outline-inverse">
                Contact us
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* More products */}
      {others.length > 0 && (
        <section aria-labelledby="more-title" className="border-t border-line py-20 sm:py-28">
          <Container>
            <Reveal className="flex items-end justify-between gap-6">
              <h2 id="more-title" className="font-display text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl">
                More from us
              </h2>
              <Link href="/products" className="hidden text-sm font-medium text-muted transition-colors hover:text-accent sm:block">
                View all products →
              </Link>
            </Reveal>
            <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {others.map((item, index) => (
                <Reveal as="li" key={item.slug} delay={index * 80}>
                  <ProductCard product={item} />
                </Reveal>
              ))}
            </ul>
          </Container>
        </section>
      )}
    </article>
  );
}
