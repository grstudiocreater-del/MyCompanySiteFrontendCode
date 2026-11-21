import Link from "next/link";
import type { Product } from "@/types/product";
import { ProductVisual } from "@/components/products/ProductArt";
import { Icon } from "@/components/ui/Icon";
import { Tag } from "@/components/ui/Tag";
import { cn, stretchedLink } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
  /** "wide" places the visual beside the text on large screens. */
  layout?: "default" | "wide";
  headingLevel?: "h2" | "h3";
  /** Load the visual eagerly (for a card that is the page's main visual). */
  eager?: boolean;
};

/**
 * Signature interaction: on hover/focus the visual scales, the surface tints,
 * product highlights slide into view, an accent rule grows and the arrow travels right.
 */
export function ProductCard({ product, layout = "default", headingLevel: Heading = "h3", eager }: ProductCardProps) {
  const wide = layout === "wide";
  const tags = product.highlights ?? product.features.slice(0, 3);

  return (
    <article
      className={cn(
        "group sheen-trigger relative flex h-full flex-col rounded-[28px] border border-white/10 bg-[#121218]/90 p-3 shadow-xl backdrop-blur-md",
        "transition-[transform,translate,scale,rotate,background-color,border-color,box-shadow] duration-300 ease-soft",
        "hover:-translate-y-1.5 hover:border-blue-500/50 hover:bg-[#151522] hover:shadow-[0_20px_45px_-15px_rgba(59,59,245,0.35)]",
        "focus-within:border-blue-500/50 focus-within:bg-[#151522]",
        wide && "lg:grid lg:grid-cols-[1.35fr_1fr] lg:items-stretch",
      )}
    >
      <div className="sheen rounded-[20px]">
        <ProductVisual
          name={product.name}
          artwork={product.artwork}
          icon={product.icon}
          banner={product.banner}
          image={product.images[0]}
          eager={eager}
          alt={`${product.name} illustration`}
          className={cn(
            product.banner ? "aspect-[16/9.5]" : "aspect-[4/3]",
            "transition-transform duration-500 ease-soft group-hover:-translate-y-0.5 group-hover:scale-[1.02] group-focus-within:scale-[1.02]",
            wide && "lg:aspect-auto lg:h-full lg:min-h-[420px]",
          )}
        />
        <Tag variant="glass" className="absolute top-4 left-4 z-2">{product.category}</Tag>
        {product.status === "production" ? (
          <span className="absolute top-4 right-4 z-2 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/20 px-3 py-1 font-mono text-[11px] font-semibold text-emerald-300 shadow-md backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Play Store Live
          </span>
        ) : (
          <span className="absolute top-4 right-4 z-2 inline-flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-amber-500/20 px-3 py-1 font-mono text-[11px] font-semibold text-amber-300 shadow-md backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-amber-400" />
            Closed Testing
          </span>
        )}
        <ul
          aria-label={`${product.name} highlights`}
          className="absolute inset-x-4 bottom-4 z-2 flex flex-wrap gap-1.5 opacity-0 transition-[opacity,transform,translate,scale,rotate] duration-300 ease-soft translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100"
        >
          {tags.map((highlight) => (
            <li
              key={highlight}
              className="glass-dark rounded-full px-2.5 py-1 font-mono text-[11px] font-medium text-white shadow-md border border-white/10"
            >
              {highlight}
            </li>
          ))}
        </ul>
      </div>

      <div className={cn("flex flex-1 flex-col px-3.5 pt-5 pb-3.5 sm:px-4", wide && "lg:justify-center lg:px-10 lg:py-10")}>
        <div className="mb-2 flex items-center justify-between">
          <span
            aria-hidden
            className="block h-0.5 w-12 origin-left scale-x-50 rounded-full bg-blue-500/40 transition-[scale,background-color] duration-300 ease-soft group-hover:scale-x-100 group-hover:bg-blue-400 group-focus-within:scale-x-100 group-focus-within:bg-blue-400"
          />
          {product.packageId && (
            <span className="font-mono text-[11px] text-zinc-500">{product.packageId}</span>
          )}
        </div>
        <Heading
          className={cn(
            "font-display font-bold tracking-[-0.03em] text-white group-hover:text-blue-400 transition-colors",
            wide ? "text-3xl lg:text-4xl" : "text-2xl",
          )}
        >
          {product.name}
        </Heading>
        {product.tagline && <p className="mt-1 text-[14px] font-medium text-blue-300/80">{product.tagline}</p>}
        <p className={cn("mt-3 leading-relaxed text-zinc-400", wide ? "lg:text-lg" : "text-[15px]")}>{product.shortDescription}</p>

        <div className="mt-auto pt-6 flex items-center justify-between">
          <Link
            href={`/products/${product.slug}`}
            className={cn("inline-flex items-center gap-3 rounded-full text-[14px] font-medium text-white group-hover:text-blue-400 transition-colors", stretchedLink("after:rounded-[28px]"))}
          >
            {product.status === "closed-testing" ? "Join Closed Test" : "View on Play Store"}
            <span className="sr-only">: {product.name}</span>
            <span className="grid size-9 place-items-center rounded-full border border-white/20 bg-white/5 transition-[background-color,border-color,color] duration-300 ease-soft group-hover:border-blue-500 group-hover:bg-blue-600 group-hover:text-white">
              <Icon name="arrow-right" size={16} className="transition-[translate] duration-150 ease-soft group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
