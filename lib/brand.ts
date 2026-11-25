/**
 * Central brand configuration — the single source for the company name,
 * contact details and legal identifiers used across the site.
 *
 * Values in CAPITALS or [BRACKETS] and example.com addresses are placeholders.
 * Replace any remaining placeholders with real information before publishing.
 */
/**
 * Resolves the canonical website URL.
 * Prioritizes the NEXT_PUBLIC_SITE_URL environment variable,
 * with a production fallback to https://grstudiocreator.com.
 * Ensures placeholder domains (like example.com) are never used in production.
 */
function resolveWebsiteUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (envUrl && !envUrl.includes("example.com")) {
    if (process.env.NODE_ENV === "development" || !envUrl.includes("localhost")) {
      const formatted = envUrl.startsWith("http://") || envUrl.startsWith("https://")
        ? envUrl
        : `https://${envUrl}`;
      return formatted.replace(/\/$/, "");
    }
  }
  return "https://grstudiocreator.com";
}

export const brand = {
  /** Full company name, used in metadata, legal copy and the footer. */
  name: "GR Studio Creator",
  /** Short name used for the wordmark in the header and footer. */
  shortName: "GR Studio Creator",
  tagline: "Creative digital experiences, designed with purpose.",
  description: "We design and build thoughtful digital products and software experiences.",
  email: "grstudiocreater@gmail.com",
  /** Production URL. Override per environment with NEXT_PUBLIC_SITE_URL. */
  website: resolveWebsiteUrl(),
  locale: "en_US",

  /**
   * Values substituted into the Privacy Policy and Terms.
   * Anything still in [BRACKETS] is highlighted on those pages as a placeholder.
   */
  legal: {
    companyName: "GR Studio Creator",
    contactEmail: "grstudiocreater@gmail.com",
    effectiveDate: "[EFFECTIVE DATE]",
    address: "[REGISTERED ADDRESS]",
    jurisdiction: "[JURISDICTION]",
  },
} as const;

/** Page title used on the home page and as the default elsewhere. */
export const defaultTitle = `${brand.name} — Digital Products & Software`;

export type Brand = typeof brand;

