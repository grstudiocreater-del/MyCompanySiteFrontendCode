import type { Metadata } from "next";
import { brand, defaultTitle } from "@/lib/brand";

type PageMetadataInput = {
  title?: string;
  description?: string;
  /** Path of the page, e.g. "/products". Used for the canonical URL. */
  path: string;
};

/** Shared social preview image (public/images/og-image.png). Listed on every page because a page-level `openGraph` replaces inherited images. */
export const OG_IMAGE = {
  url: "/images/og-image.png",
  width: 1200,
  height: 630,
  alt: defaultTitle,
};

/** Builds consistent per-page metadata: title, description, canonical and Open Graph. */
export function createMetadata({ title, description = brand.description, path }: PageMetadataInput): Metadata {
  const ogTitle = title ? `${title} — ${brand.name}` : defaultTitle;

  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: brand.name,
      locale: brand.locale,
      title: ogTitle,
      description,
      url: path,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
