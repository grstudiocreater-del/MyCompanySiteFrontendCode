import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { terms } from "@/data/legal";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Terms & Conditions",
  description: "The terms that govern the use of our website and products.",
  path: "/terms",
});

export default function TermsPage() {
  return <LegalDocument doc={terms} />;
}
