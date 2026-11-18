import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { clientProjects, additionalEngineeringProjects } from "@/data/clientProjects";

export function ClientPortfolio() {
  return (
    <section id="portfolio" aria-labelledby="portfolio-title" className="scroll-mt-20 py-24 sm:py-32 bg-[#0c0c12] border-t border-white/10">
      <Container>
        {/* Header & Ownership Disclaimer */}
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-purple-300 uppercase">
              <span className="size-1.5 rounded-full bg-purple-400" />
              Client &amp; Employment Portfolio
            </div>

            <h2
              id="portfolio-title"
              className="mt-4 font-display text-3xl sm:text-5xl font-extrabold tracking-[-0.035em] text-white"
            >
              Enterprise &amp; Client Projects
            </h2>

            {/* Crucial Explicit Ownership Differentiation Notice */}
            <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-relaxed text-zinc-400">
              <p>
                <strong className="text-zinc-200">Ownership Notice:</strong> The projects below were architected and engineered by our founder while employed at external technology firms and client organizations (such as Paras Technologies). They are showcased here as engineering credentials to demonstrate technical capability and are owned by their respective organizations.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://rajput-govind-porfolio-dark.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-600/15 px-5 py-2.5 text-sm font-semibold text-purple-200 transition-all hover:bg-purple-600/30 hover:border-purple-400"
            >
              Live Portfolio ↗
            </a>
          </div>
        </Reveal>

        {/* 4 Featured Client / Employee Projects */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {clientProjects.map((project, index) => (
            <Reveal key={project.slug} delay={(index % 2) * 90}>
              <article className="group relative flex h-full flex-col rounded-[28px] border border-white/10 bg-[#13131b]/95 p-7 sm:p-8 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:shadow-[0_20px_50px_-15px_rgba(168,85,247,0.2)]">
                {/* Header row */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full border border-purple-400/25 bg-purple-500/15 px-3 py-1 font-mono text-[11px] font-semibold text-purple-300">
                      Client / Employee Project
                    </span>
                  </div>
                  <span className="font-mono text-xs text-zinc-500">{project.platforms.join(" • ")}</span>
                </div>

                {/* Company Context Pill */}
                <p className="mt-4 font-mono text-[11px] text-zinc-400 flex items-center gap-1.5">
                  <span className="size-1 rounded-full bg-purple-400" />
                  {project.companyContext}
                </p>

                {/* Title & Subtitle */}
                <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-purple-200/80">{project.subtitle}</p>

                <p className="mt-4 text-[15px] leading-relaxed text-zinc-400">{project.summary}</p>

                {/* Key Contributions */}
                <div className="mt-6 space-y-2 border-t border-white/10 pt-5">
                  <p className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Key Engineering Contributions:
                  </p>
                  <ul className="space-y-1.5">
                    {project.keyContributions.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <span className="mt-1 size-1.5 shrink-0 rounded-full bg-purple-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mt-6 flex flex-wrap gap-1.5 border-t border-white/10 pt-5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* External link */}
                <div className="mt-7 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="font-mono text-xs text-zinc-500">Role: {project.role}</span>
                  <a
                    href={project.portfolioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-purple-300 hover:text-purple-200 transition-colors"
                  >
                    View in Portfolio ↗
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Additional Engineered Apps Strip */}
        <Reveal className="mt-12 rounded-[28px] border border-white/10 bg-[#101016] p-7 sm:p-9 shadow-lg">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Additional Engineered Systems
              </p>
              <h3 className="mt-1 font-display text-xl font-bold text-white">
                More Applications Built for Enterprise Clients
              </h3>
            </div>
            <a
              href="https://rajput-govind-porfolio-dark.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-white/10 hover:border-white/40"
            >
              Full CV &amp; Case Studies ↗
            </a>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {additionalEngineeringProjects.map((item) => (
              <div key={item.name} className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                <div className="flex items-center justify-between">
                  <p className="font-display font-bold text-white">{item.name}</p>
                  <span className="rounded-full bg-white/5 px-2 py-0.5 font-mono text-[10px] text-zinc-400">
                    {item.company}
                  </span>
                </div>
                <p className="mt-1 font-mono text-xs text-purple-300">{item.type}</p>
                <p className="mt-2 text-xs leading-relaxed text-zinc-400">{item.summary}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
