import type { FaqItem } from "@/types/common";

/** General questions shown on /support. Keep answers factual — no promises you can't keep. */
export const faqs: FaqItem[] = [
  {
    question: "How do I get help with one of your products?",
    answer:
      "Send us a message through the contact page or by email. Tell us which product you're using, what you were trying to do and what happened instead.",
  },
  {
    question: "Do you take on projects for other teams?",
    answer:
      "Yes, when it's a good fit. Send a short description of your idea or existing product and what you need help with.",
  },
  {
    question: "Can I suggest a feature?",
    answer:
      "Please do. Use the contact form with a subject like \"Feature idea\" and describe what you'd like to do and why it would help.",
  },
  {
    question: "How is my information handled?",
    answer:
      "Our Privacy Policy explains what information we handle and why. For a specific request about your data, contact us by email.",
  },
];

/** General troubleshooting steps. Replace or extend with product-specific guidance. */
export const troubleshooting: FaqItem[] = [
  {
    question: "Something isn't loading",
    answer:
      "Check your internet connection, then close and reopen the product or refresh the page. Make sure you're on the latest version.",
  },
  {
    question: "My changes don't appear",
    answer:
      "If the product saves or syncs data online, keep it open while connected for a moment and then refresh. If the problem continues, let us know.",
  },
  {
    question: "I'm not receiving notifications",
    answer:
      "Check that notifications are turned on in the product's settings and in your device settings. Focus or do-not-disturb modes can also silence them.",
  },
  {
    question: "Something looks wrong",
    answer:
      "Send us a message describing what you saw, the product and version you're using and, if possible, a screenshot. Specific details help us find the cause.",
  },
];
