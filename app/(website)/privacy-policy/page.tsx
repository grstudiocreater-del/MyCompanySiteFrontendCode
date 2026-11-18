import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { privacyPolicy } from "@/data/legal";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description: "How we handle information when you use our website and products.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return <LegalDocument doc={privacyPolicy} />;
}
