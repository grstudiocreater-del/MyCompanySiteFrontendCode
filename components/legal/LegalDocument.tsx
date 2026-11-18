import { Fragment } from "react";
import type { LegalDocument as LegalDocumentType } from "@/types/common";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { brand } from "@/lib/brand";

/** Tokens substituted from brand.legal (lib/brand.ts). */
const TOKENS: Record<string, string> = {
  "[COMPANY NAME]": brand.legal.companyName,
  "[CONTACT EMAIL]": brand.legal.contactEmail,
  "[EFFECTIVE DATE]": brand.legal.effectiveDate,
  "[REGISTERED ADDRESS]": brand.legal.address,
  "[JURISDICTION]": brand.legal.jurisdiction,
};

/** Unfilled [TOKENS] and {{editorial notes}}. */
const PLACEHOLDER = /(\[[A-Z][A-Z ]*\]|\{\{[^}]+\}\})/;

function resolveTokens(text: string) {
  return text.replace(/\[[A-Z][A-Z ]*\]/g, (token) => TOKENS[token] ?? token);
}

/** Renders legal text with brand values filled in and remaining placeholders clearly highlighted. */
function RichText({ text }: { text: string }) {
  const parts = resolveTokens(text).split(new RegExp(PLACEHOLDER.source, "g"));
  return (
    <>
      {parts.map((part, index) =>
        PLACEHOLDER.test(part) ? (
          <mark
            key={index}
            title="Placeholder — confirm or replace before publishing"
            className="rounded-md bg-accent-soft px-1.5 py-0.5 text-accent-deep [box-decoration-break:clone]"
          >
            <span className="sr-only">Placeholder: </span>
            {part.startsWith("{{") ? part.slice(2, -2) : part}
          </mark>
        ) : (
          <Fragment key={index}>{part}</Fragment>
        ),
      )}
    </>
  );
}

function TableOfContents({ doc }: { doc: LegalDocumentType }) {
  return (
    <ol className="space-y-1 text-sm">
      {doc.sections.map((section, index) => (
        <li key={section.id}>
          <a
            href={`#${section.id}`}
            className="group flex gap-3 rounded-lg py-1.5 text-muted transition-colors hover:text-ink"
          >
            <span className="font-mono text-xs leading-5 text-muted transition-colors group-hover:text-accent">
              {String(index + 1).padStart(2, "0")}
            </span>
            {section.title}
          </a>
        </li>
      ))}
    </ol>
  );
}

export function LegalDocument({ doc }: { doc: LegalDocumentType }) {
  const hasPlaceholders = PLACEHOLDER.test(resolveTokens(JSON.stringify(doc)));

  return (
    <>
      <header className="border-b border-line">
        <Container className="pt-16 pb-12 sm:pt-24 sm:pb-16">
          <div className="max-w-3xl animate-rise">
            <Eyebrow>Legal</Eyebrow>
            <h1 className="mt-4 font-display text-[2.6rem] leading-[1.02] font-semibold tracking-[-0.04em] text-ink sm:text-6xl">
              {doc.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">{doc.intro}</p>
            <p className="mt-6 font-mono text-xs tracking-wider text-muted uppercase">
              Last updated: <RichText text={doc.lastUpdated} />
            </p>
          </div>
        </Container>
      </header>

      <Container className="grid gap-12 py-14 sm:py-20 lg:grid-cols-[240px_1fr] lg:gap-16">
        <nav aria-label="On this page" className="lg:sticky lg:top-24 lg:self-start">
          <details className="group rounded-2xl border border-line bg-paper p-5 lg:hidden">
            <summary className="flex cursor-pointer items-center justify-between font-medium text-ink">
              On this page
              <Icon name="plus" size={16} className="transition-transform duration-300 group-open:rotate-45" />
            </summary>
            <div className="mt-4">
              <TableOfContents doc={doc} />
            </div>
          </details>
          <div className="hidden lg:block">
            <p className="mb-4 font-mono text-xs tracking-[0.14em] text-muted uppercase">On this page</p>
            <TableOfContents doc={doc} />
          </div>
        </nav>

        <div className="max-w-[68ch]">
          {hasPlaceholders && (
            <aside className="mb-12 flex gap-3 rounded-2xl border border-accent/25 bg-accent-tint p-5 text-sm leading-relaxed text-ink-soft">
              <Icon name="pen" size={18} className="mt-0.5 shrink-0 text-accent" />
              <p>
                Highlighted text marks details that still need to be filled in or confirmed. This document is a template and
                should be reviewed before it is relied upon.
              </p>
            </aside>
          )}

          {doc.sections.map((section, index) => (
            <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`} className="scroll-mt-24 pb-12">
              <h2 id={`${section.id}-title`} className="flex items-baseline gap-3 font-display text-2xl font-semibold tracking-[-0.02em] text-ink">
                <span className="font-mono text-sm font-normal text-muted">{String(index + 1).padStart(2, "0")}</span>
                {section.title}
              </h2>
              <div className="mt-4 space-y-4 text-[17px] leading-[1.75] text-ink-soft">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>
                    <RichText text={paragraph} />
                  </p>
                ))}
                {section.list && (
                  <ul className="space-y-2 pl-1">
                    {section.list.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span aria-hidden className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-accent" />
                        <span>
                          <RichText text={item} />
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </>
  );
}
