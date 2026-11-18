import type { Metadata } from "next";
import { About } from "@/components/sections/About";
import { ClientPortfolio } from "@/components/sections/ClientPortfolio";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Products } from "@/components/sections/Products";
import { Services } from "@/components/sections/Services";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { defaultTitle } from "@/lib/brand";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...createMetadata({ path: "/" }),
  title: { absolute: defaultTitle },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Products />
      <ClientPortfolio />
      <Services />
      <About />
      <Process />
      <Contact />
    </>
  );
}
