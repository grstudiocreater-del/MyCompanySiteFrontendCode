import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="flex flex-1 items-center">
        <Container className="py-24 sm:py-32">
          <div className="max-w-xl animate-rise">
            <Eyebrow>Error 404</Eyebrow>
            <h1 className="mt-5 font-display text-5xl leading-[1] font-semibold tracking-[-0.04em] text-ink sm:text-7xl">
              This page wandered off.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              The link may be broken, or the page may have moved. Let&apos;s get you somewhere useful.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/" size="lg" arrow>
                Back to home
              </Button>
              <Button href="/products" size="lg" variant="secondary">
                See our products
              </Button>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
