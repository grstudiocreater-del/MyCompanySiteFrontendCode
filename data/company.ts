import type { Principle, Step } from "@/types/common";

/** Short values shown in the strip under the homepage hero. */
export const trustPoints = ["Thoughtful design", "Reliable technology", "Human experiences"];

/** Core principles — homepage About section and the About page. */
export const principles: Principle[] = [
  { title: "Thoughtful development", description: "We start with the problem and build only what helps solve it." },
  { title: "Simple experiences", description: "Fewer steps, clear choices and interfaces that explain themselves." },
  { title: "Attention to detail", description: "Wording, spacing and feedback are small things that people notice." },
  { title: "Continuous improvement", description: "Launch is a starting point. We keep learning and refining." },
];

/** The four-step process — homepage, Services and About pages. */
export const processSteps: Step[] = [
  { title: "Understand", description: "Learn who the product is for and what problem it needs to solve." },
  { title: "Design", description: "Shape flows and interfaces, and test ideas early while change is cheap." },
  { title: "Build", description: "Develop in small, reviewable steps with quality and performance in mind." },
  { title: "Improve", description: "Listen to feedback, fix what gets in the way and keep refining." },
];

/** "Product mindset" section on the About page. */
export const mindset: Principle[] = [
  {
    title: "Reliable software",
    description: "Software people depend on should behave predictably. We test carefully and prefer proven approaches over clever ones.",
  },
  {
    title: "Respect for attention",
    description: "No dark patterns or needless noise. A good product helps and then gets out of the way.",
  },
  {
    title: "Clear over clever",
    description: "Plain language, obvious actions and honest defaults make products easier to trust.",
  },
];
