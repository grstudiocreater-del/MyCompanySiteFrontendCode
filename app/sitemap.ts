import type { MetadataRoute } from "next";
import { legalNav, mainNav } from "@/data/navigation";
import { products } from "@/data/products";
import { brand } from "@/lib/brand";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticPaths = ["/", ...mainNav.map((item) => item.href), ...legalNav.map((item) => item.href)];

  return [
    ...staticPaths.map((path) => ({
      url: `${brand.website}${path === "/" ? "" : path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : legalNav.some((item) => item.href === path) ? 0.3 : 0.8,
    })),
    ...products.map((product) => ({
      url: `${brand.website}/products/${product.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
