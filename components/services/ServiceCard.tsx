import Link from "next/link";
import type { Service } from "@/types/common";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { stretchedLink } from "@/lib/utils";

type ServiceCardProps = {
  service: Service;
  href?: string;
};

export function ServiceCard({ service, href }: ServiceCardProps) {
  return (
    <Card as="article" interactive={Boolean(href)} className="group flex h-full flex-col p-8 shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="flex items-start justify-between">
        <span className="grid size-12 place-items-center rounded-2xl bg-accent/10 text-accent transition-[background-color,color,translate,scale] duration-300 ease-soft group-hover:-translate-y-0.5 group-hover:bg-accent group-hover:text-white group-hover:shadow-lg group-hover:shadow-accent/25">
          <Icon name={service.icon} size={22} />
        </span>
        <span className="font-mono text-xs font-semibold tracking-wider text-muted/80 rounded-full border border-line px-2.5 py-1 transition-[border-color,color] duration-300 ease-soft group-hover:border-accent/40 group-hover:text-accent">
          {service.number}
        </span>
      </div>

      <h3 className="mt-7 font-display text-xl font-bold tracking-[-0.02em] text-ink group-hover:text-accent transition-colors duration-200">
        {href ? (
          <Link href={href} className={stretchedLink()}>
            {service.title}
          </Link>
        ) : (
          service.title
        )}
      </h3>

      <p className="mt-3 leading-relaxed text-muted text-[15px]">{service.description}</p>

      {service.included && service.included.length > 0 && (
        <div className="mt-6 pt-5 border-t border-line/60 flex flex-wrap gap-1.5">
          {service.included.slice(0, 3).map((item) => (
            <span
              key={item}
              className="rounded-md bg-sand px-2.5 py-1 font-mono text-[11px] font-medium text-muted"
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </Card>
  );
}
