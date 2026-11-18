import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type PageHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
};

/** Intro block shared by inner pages. */
export function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#09090b]">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 size-[650px] rounded-full bg-blue-600/[0.15] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_70%_80%_at_85%_0%,black,transparent_70%)] opacity-30"
      />
      <Container className="relative pt-16 pb-14 sm:pt-24 sm:pb-20">
        <div className="animate-rise">
          <SectionHeading as="h1" eyebrow={eyebrow} title={title} description={description} className="max-w-3xl" />
        </div>
        {children && (
          <div className="mt-8 animate-rise [animation-delay:120ms]">{children}</div>
        )}
      </Container>
    </section>
  );
}
