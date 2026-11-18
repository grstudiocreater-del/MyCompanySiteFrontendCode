import type { FaqItem } from "@/types/common";
import { Icon } from "@/components/ui/Icon";

/**
 * Accessible accordion built on native <details>/<summary>:
 * keyboard, screen-reader and no-JS support come for free.
 */
export function Accordion({ items, name }: { items: FaqItem[]; name?: string }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.question} name={name} className="group">
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-left text-[17px] font-medium text-ink transition-colors hover:text-accent">
            {item.question}
            <span
              aria-hidden
              className="grid size-8 shrink-0 place-items-center rounded-full border border-line bg-paper transition-[transform,translate,scale,rotate,background-color,border-color] duration-300 ease-soft group-open:rotate-45 group-open:border-accent group-open:bg-accent group-open:text-white"
            >
              <Icon name="plus" size={16} />
            </span>
          </summary>
          <p className="max-w-2xl pr-12 pb-6 leading-relaxed text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
