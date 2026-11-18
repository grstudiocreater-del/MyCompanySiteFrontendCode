import type { LegalDocument } from "@/types/common";

/**
 * Legal content — a starting structure, not legal advice. Have it reviewed.
 *
 * Tokens replaced automatically from `brand.legal` in lib/brand.ts:
 *   [COMPANY NAME]  [CONTACT EMAIL]  [EFFECTIVE DATE]  [REGISTERED ADDRESS]  [JURISDICTION]
 * While a token's value is still a placeholder, it is highlighted on the page.
 *
 * Text in {{double braces}} is an editorial note describing what must be written
 * there. Replace each note with accurate text that matches how your products work.
 */

export const privacyPolicy: LegalDocument = {
  title: "Privacy Policy",
  intro:
    "This policy explains how [COMPANY NAME] handles information when you use our website and products. It should describe only what we actually do.",
  lastUpdated: "[EFFECTIVE DATE]",
  sections: [
    {
      id: "who-we-are",
      title: "Who we are",
      body: [
        "[COMPANY NAME] (\"we\", \"us\") designs and builds digital products. Our registered address is [REGISTERED ADDRESS].",
        "For questions about this policy, contact us at [CONTACT EMAIL].",
      ],
    },
    {
      id: "information-we-collect",
      title: "Information we collect",
      body: [
        "When you contact us through the website, we receive the information you choose to send: your name, email address, subject and message.",
        "{{List any other information collected by the website or products, such as account details or usage data, and why. Remove this note if nothing else is collected.}}",
      ],
    },
    {
      id: "how-we-use-information",
      title: "How we use information",
      body: ["We use information only for the purposes described in this policy, including:"],
      list: [
        "Responding to your messages and support requests.",
        "Operating and maintaining our website and products.",
        "{{Add any other purposes that apply, or remove this line.}}",
      ],
    },
    {
      id: "legal-bases",
      title: "Legal bases for processing",
      body: [
        "{{If laws such as the GDPR apply, state the legal basis for each purpose (for example consent, contract or legitimate interests).}}",
      ],
    },
    {
      id: "sharing",
      title: "Sharing and service providers",
      body: [
        "We do not sell your personal information.",
        "{{List the service providers that process data on your behalf, such as hosting or email delivery, and what they process.}}",
      ],
    },
    {
      id: "retention",
      title: "Data retention",
      body: ["{{State how long each type of information is kept and how it is deleted.}}"],
    },
    {
      id: "your-rights",
      title: "Your rights and choices",
      body: [
        "Depending on where you live, you may have the right to access, correct, delete or export your personal information, and to object to or restrict certain processing.",
        "To make a request, contact us at [CONTACT EMAIL]. We may need to verify your identity before responding.",
      ],
    },
    {
      id: "security",
      title: "Security",
      body: [
        "We take reasonable steps to protect information from loss, misuse and unauthorised access. No method of transmission or storage is completely secure.",
      ],
    },
    {
      id: "children",
      title: "Children's privacy",
      body: ["{{State whether your products are intended for children and any minimum age for use.}}"],
    },
    {
      id: "changes",
      title: "Changes to this policy",
      body: [
        "We may update this policy from time to time. When we do, we will change the date at the top of this page.",
      ],
    },
    {
      id: "contact",
      title: "Contact",
      body: ["If you have questions about this policy or your information, email [CONTACT EMAIL]."],
    },
  ],
};

export const terms: LegalDocument = {
  title: "Terms & Conditions",
  intro: "These terms govern your use of the [COMPANY NAME] website and products. By using them, you agree to these terms.",
  lastUpdated: "[EFFECTIVE DATE]",
  sections: [
    {
      id: "acceptance",
      title: "Acceptance of terms",
      body: [
        "By accessing or using our website or products, you agree to these terms. If you do not agree, please do not use them.",
        "{{State any minimum age required to use your products.}}",
      ],
    },
    {
      id: "using-our-products",
      title: "Using our products",
      body: [
        "You agree to use our products lawfully and in line with these terms. You must not misuse them, interfere with their normal operation or try to access them in unauthorised ways.",
      ],
    },
    {
      id: "accounts",
      title: "Accounts",
      body: [
        "{{If any product uses accounts, describe the user's responsibilities, such as keeping login details secure. Remove this section if not applicable.}}",
      ],
    },
    {
      id: "payments",
      title: "Purchases and subscriptions",
      body: [
        "{{If any product includes paid features, describe pricing, billing, renewals, cancellations and refunds. Remove this section if not applicable.}}",
      ],
    },
    {
      id: "intellectual-property",
      title: "Intellectual property",
      body: [
        "The website and products, including their content and design, are owned by [COMPANY NAME] and protected by intellectual property laws. You may not copy, modify or distribute them without permission.",
        "Content you create using our products remains yours.",
      ],
    },
    {
      id: "third-party",
      title: "Third-party services",
      body: [
        "Our products may link to or work with third-party services. We are not responsible for their content or practices, and your use of them is governed by their own terms.",
      ],
    },
    {
      id: "disclaimers",
      title: "Disclaimers",
      body: [
        'Our website and products are provided "as is" and "as available". To the extent permitted by law, we disclaim all warranties, express or implied, including fitness for a particular purpose and non-infringement.',
      ],
    },
    {
      id: "liability",
      title: "Limitation of liability",
      body: [
        "To the extent permitted by law, [COMPANY NAME] is not liable for any indirect, incidental, special or consequential damages arising from your use of our website or products.",
        "{{Confirm any liability limit appropriate for your jurisdiction.}}",
      ],
    },
    {
      id: "termination",
      title: "Termination",
      body: [
        "We may suspend or end access to our products if these terms are breached. You may stop using our products at any time.",
      ],
    },
    {
      id: "governing-law",
      title: "Governing law",
      body: ["These terms are governed by the laws of [JURISDICTION]."],
    },
    {
      id: "changes",
      title: "Changes to these terms",
      body: [
        "We may update these terms from time to time. We will change the date at the top of this page, and continued use after an update means you accept the revised terms.",
      ],
    },
    {
      id: "contact",
      title: "Contact",
      body: ["Questions about these terms? Email [CONTACT EMAIL]."],
    },
  ],
};
