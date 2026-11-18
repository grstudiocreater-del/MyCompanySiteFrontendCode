export type IconName =
  | "arrow-right"
  | "arrow-up-right"
  | "check"
  | "close"
  | "menu"
  | "mail"
  | "plus"
  | "device"
  | "browser"
  | "server"
  | "layers"
  | "wrench"
  | "lifebuoy"
  | "spark"
  | "search"
  | "pen"
  | "code"
  | "refresh";

export type LinkItem = {
  label: string;
  href: string;
};

export type NavItem = LinkItem & {
  description?: string;
};

export type Service = {
  /** Stable identifier, also used as the anchor on /services (e.g. /services#web-app-development). */
  id: string;
  /** Display number, e.g. "01". */
  number: string;
  title: string;
  description: string;
  icon: IconName;
  /** Optional list shown on the /services page. */
  included?: string[];
};

export type Step = {
  title: string;
  description: string;
};

export type Principle = {
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type LegalSection = {
  id: string;
  title: string;
  /** Paragraphs. Wrap text in {{double braces}} to mark an editable placeholder. */
  body: string[];
  list?: string[];
};

export type LegalDocument = {
  title: string;
  intro: string;
  lastUpdated: string;
  sections: LegalSection[];
};
