import { Container } from "@/components/ui/Container";

const capabilities = [
  "Bespoke Mobile Apps",
  "High-Performance Web Platforms",
  "Cloud Architecture & APIs",
  "Modern UI/UX Design Systems",
  "End-to-End Product Engineering",
];

export function TrustStrip() {
  return (
    <section aria-label="Capabilities and Standards" className="relative border-y border-white/10 bg-[#0c0c10]/90 py-5 backdrop-blur-md">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-xs font-medium tracking-[0.18em] text-zinc-400 uppercase">
          {capabilities.map((item, index) => (
            <div key={item} className="flex items-center gap-3">
              {index > 0 && (
                <span aria-hidden className="text-cyan-400/80">
                  ✦
                </span>
              )}
              <span className="hover:text-white transition-colors duration-200">{item}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
