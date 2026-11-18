/** Optional abstract illustration shown when a product has no images yet. */
export type ProductArtwork = "notes" | "habits" | "planner" | "focus";

export type ProductLink = {
  label: string;
  href: string;
};

export type Product = {
  /** URL segment: /products/[slug]. Lowercase, hyphenated. */
  slug: string;
  name: string;
  category: string;
  /** One or two sentences, used on cards and in metadata. */
  shortDescription: string;
  /** Full description for the product page. Separate paragraphs with a blank line. */
  description: string;
  /** Product icon in /public, e.g. "/icons/product-name.svg". */
  icon?: string;
  /**
   * Product images in /public, e.g. "/images/products/product-name-1.webp".
   * The first image is the hero/card image; all images appear as screenshots.
   * Missing files fall back to a clean placeholder instead of a broken image.
   */
  images: string[];
  features: string[];
  /** Optional short line shown under the name. */
  tagline?: string;
  /** Optional short tags revealed on card hover. */
  highlights?: string[];
  /** Optional links to the product's website, docs or download page. */
  links?: ProductLink[];
  /** Optional illustration used instead of the plain placeholder while images are missing. */
  artwork?: ProductArtwork;
  /** Marks template content that must be replaced before publishing. */
  isPlaceholder?: boolean;
  /** Release status on Google Play / App Stores. */
  status?: "production" | "closed-testing" | "in-review";
  /** Google Play Store Android Package ID (e.g. com.grstudios.chargepulse). */
  packageId?: string;
};
