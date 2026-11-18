import type { Service } from "@/types/common";

export const services: Service[] = [
  {
    id: "mobile-app-development",
    number: "01",
    title: "Mobile Application Development",
    description: "Mobile apps built around the few things people need to do, made to feel quick and clear.",
    icon: "device",
    included: ["Product scoping and user flows", "Interface development", "Offline and sync behaviour", "Release preparation"],
  },
  {
    id: "web-app-development",
    number: "02",
    title: "Web Application Development",
    description: "Responsive web applications that load fast and work well on any screen size.",
    icon: "browser",
    included: ["Responsive, accessible interfaces", "Performance-minded builds", "Accounts and authentication", "Search-friendly pages"],
  },
  {
    id: "backend-api-development",
    number: "03",
    title: "Backend & API Development",
    description: "Services, data models and APIs that are straightforward to understand and maintain.",
    icon: "server",
    included: ["API design and documentation", "Data modelling", "Third-party integrations", "Logging and monitoring"],
  },
  {
    id: "ui-ux-implementation",
    number: "04",
    title: "UI/UX Implementation",
    description: "Designs turned into precise, accessible interfaces, down to spacing, states and motion.",
    icon: "layers",
    included: ["Reusable UI components", "Interaction and motion details", "Accessibility checks", "Cross-device testing"],
  },
  {
    id: "product-maintenance",
    number: "05",
    title: "Product Maintenance",
    description: "Ongoing updates, fixes and improvements that keep a product healthy after launch.",
    icon: "wrench",
    included: ["Dependency and security updates", "Bug fixes", "Performance improvements", "Small feature updates"],
  },
  {
    id: "technical-support",
    number: "06",
    title: "Technical Support",
    description: "Help investigating issues, explained in plain language, with fixes that address the cause.",
    icon: "lifebuoy",
    included: ["Issue investigation", "User support guidance", "Follow-up fixes", "Documentation updates"],
  },
];
