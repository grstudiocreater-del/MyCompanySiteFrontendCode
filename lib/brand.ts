/**
 * Resolves the canonical website URL.
 * Prioritizes the NEXT_PUBLIC_SITE_URL environment variable,
 * falling back to the deployed production domain.
 * Guards against placeholder URLs like example.com or localhost in production.
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
  return "https://grstudiocreaterweb.grstudiocreater.workers.dev";
}

/**
 * Central brand configuration — the single source for the company name,
 * contact details and legal identifiers used across the site.
 *
 * Replace any remaining legal placeholders before publishing.
 */
export const brand = {
  /** Full company name, used in metadata, legal copy and the footer. */
  name: "GR Studio Creator",

  /** Short name used for the wordmark in the header and footer. */
  shortName: "GR Studio Creator",

  tagline: "Creative digital experiences, designed with purpose.",

  description:
    "We design and build thoughtful digital products and software experiences.",

  email: "grstudiocreater@gmail.com",

  /** Production URL. Dynamically resolves NEXT_PUBLIC_SITE_URL. */
  get website() {
    return resolveWebsiteUrl();
  },

  locale: "en_US",

  /**
   * Values substituted into the Privacy Policy and Terms.
   * Replace all placeholders with accurate information.
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

/** Brand configuration type. */
export type Brand = typeof brand;
