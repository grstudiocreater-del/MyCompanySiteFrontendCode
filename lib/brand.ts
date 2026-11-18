/**
 * Central brand configuration — the single source for the company name,
 * contact details and legal identifiers used across the site.
 *
 * Values in CAPITALS or [BRACKETS] and example.com addresses are placeholders.
 * Replace any remaining placeholders with real information before publishing.
 */
export const brand = {
  /** Full company name, used in metadata, legal copy and the footer. */
  name: "GR Studio Creator",
  /** Short name used for the wordmark in the header and footer. */
  shortName: "GR Studio Creator",
  tagline: "Creative digital experiences, designed with purpose.",
  description: "We design and build thoughtful digital products and software experiences.",
  email: "grstudiocreater@gmail.com",
  /** Production URL. Override per environment with NEXT_PUBLIC_SITE_URL. */
  website: (process.env.NEXT_PUBLIC_SITE_URL || "https://example.com").replace(/\/$/, ""),
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
