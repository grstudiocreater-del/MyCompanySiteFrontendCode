import type { NavItem, LinkItem } from "@/types/common";

export const mainNav: NavItem[] = [
  { label: "Products", href: "/products" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Support", href: "/support" },
  { label: "Contact", href: "/contact" },
];

export const primaryCta: LinkItem = { label: "Let's Talk", href: "/contact" };

export const legalNav: LinkItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
];
