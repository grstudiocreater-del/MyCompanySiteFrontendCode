import Image from "next/image";
import type { CSSProperties, ReactElement } from "react";
import type { ProductArtwork } from "@/types/product";
import { assetExists } from "@/lib/assets";
import { cn } from "@/lib/utils";

/*
 * Abstract, illustrative product visuals built with CSS so they stay crisp at
 * any size. All sizing uses container query units (cqw) relative to the frame.
 * Pieces respond to a parent `group` hover for a subtle "coming alive" effect.
 */

const sheet = "absolute rounded-[3cqw] bg-paper shadow-[0_2cqw_5cqw_-2cqw_rgb(28_27_24/0.18)] transition-transform duration-300 ease-soft";
const bar = "rounded-full";

function NotesArt() {
  return (
    <>
      <div className={cn(sheet, "top-[16%] left-[40%] h-[64%] w-[44%] rotate-6 bg-paper/70 group-hover:translate-x-[0.6cqw]")} />
      <div className={cn(sheet, "top-[12%] left-[18%] w-[50%] -rotate-3 p-[4cqw] group-hover:-translate-y-[0.6cqw]")}>
        <p className="font-mono text-[2cqw] tracking-wider text-muted uppercase">Tue · 9:41</p>
        <div className={cn(bar, "mt-[2.5cqw] h-[2.6cqw] w-[72%] bg-ink")} />
        <div className="mt-[3.5cqw] space-y-[2cqw]">
          <div className={cn(bar, "h-[1.5cqw] w-full bg-line")} />
          <div className={cn(bar, "h-[1.5cqw] w-[88%] bg-line")} />
          <div className="relative -mx-[1.2cqw] rounded-[1.2cqw] bg-accent-soft px-[1.2cqw] py-[1.1cqw]">
            <div className={cn(bar, "h-[1.5cqw] w-[64%] bg-accent")} />
          </div>
          <div className={cn(bar, "h-[1.5cqw] w-[80%] bg-line")} />
          <div className={cn(bar, "h-[1.5cqw] w-[45%] bg-line")} />
        </div>
      </div>
      <div className="absolute right-[14%] bottom-[14%] grid size-[11cqw] place-items-center rounded-full bg-accent text-white shadow-[0_2cqw_4cqw_-1.5cqw_rgb(59_59_245/0.6)] transition-transform duration-500 ease-soft group-hover:-translate-y-[0.8cqw]">
        <svg viewBox="0 0 24 24" className="size-[5cqw]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
          <path d="M12 5v14M5 12h14" />
        </svg>
      </div>
    </>
  );
}

const habitRows = [
  [1, 1, 0, 1, 1, 1, 0],
  [1, 0, 1, 1, 0, 1, 1],
  [0, 1, 1, 1, 1, 0, 0],
];

function HabitsArt() {
  return (
    <>
      <div className={cn(sheet, "top-[14%] left-[12%] w-[62%] p-[4cqw] group-hover:-translate-y-[0.6cqw]")}>
        <div className="grid grid-cols-7 gap-[1.6cqw] font-mono text-[1.8cqw] text-muted">
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
            <span key={i} className="text-center">
              {d}
            </span>
          ))}
        </div>
        <div className="mt-[2.5cqw] space-y-[2.6cqw]">
          {habitRows.map((row, r) => (
            <div key={r}>
              <div className={cn(bar, "mb-[1.4cqw] h-[1.4cqw] bg-line", r === 0 ? "w-[40%]" : r === 1 ? "w-[30%]" : "w-[48%]")} />
              <div className="grid grid-cols-7 gap-[1.6cqw]">
                {row.map((on, c) => (
                  <span
                    key={c}
                    className={cn(
                      "aspect-square rounded-full transition-transform duration-500 ease-soft",
                      on ? "bg-accent group-hover:scale-110" : "border-[0.4cqw] border-line bg-ivory",
                    )}
                    style={{ transitionDelay: `${(r * 7 + c) * 12}ms` }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute right-[10%] bottom-[16%] flex items-center gap-[1.6cqw] rounded-full bg-ink py-[1.8cqw] pr-[3cqw] pl-[1.8cqw] text-[2.4cqw] font-medium text-white shadow-[0_2cqw_4cqw_-2cqw_rgb(28_27_24/0.5)] transition-transform duration-500 ease-soft group-hover:-translate-y-[0.8cqw]">
        <span className="grid size-[4.4cqw] place-items-center rounded-full bg-accent">
          <svg viewBox="0 0 24 24" className="size-[2.8cqw]" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="m5 12.5 4.5 4.5L19 7.5" />
          </svg>
        </span>
        Kept today
      </div>
    </>
  );
}

function PlannerArt() {
  const tasks = [
    { done: true, width: "w-[52%]", who: "A" },
    { done: false, width: "w-[64%]", who: "M" },
    { done: false, width: "w-[40%]", who: null },
  ];
  return (
    <>
      <div className={cn(sheet, "top-[10%] left-[24%] w-[58%] rotate-3 px-[3cqw] py-[2.6cqw] group-hover:-translate-y-[0.6cqw]")}>
        <div className="grid grid-cols-7 gap-[1.2cqw]">
          {Array.from({ length: 7 }, (_, i) => (
            <div key={i} className={cn("flex h-[9cqw] flex-col items-center justify-end rounded-[1.4cqw] pb-[1.2cqw]", i === 3 ? "bg-accent" : "bg-sand")}>
              <span className={cn("size-[1.6cqw] rounded-full", i === 3 ? "bg-white" : "bg-line-strong")} />
            </div>
          ))}
        </div>
      </div>
      <div className={cn(sheet, "top-[36%] left-[12%] w-[64%] -rotate-2 space-y-[2.2cqw] p-[3.6cqw] group-hover:translate-y-[0.4cqw]")}>
        {tasks.map((task, i) => (
          <div key={i} className="flex items-center gap-[2.4cqw]">
            <span
              className={cn(
                "grid size-[4.4cqw] shrink-0 place-items-center rounded-[1.2cqw]",
                task.done ? "bg-accent text-white" : "border-[0.4cqw] border-line-strong",
              )}
            >
              {task.done && (
                <svg viewBox="0 0 24 24" className="size-[3cqw]" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m5 12.5 4.5 4.5L19 7.5" />
                </svg>
              )}
            </span>
            <div className={cn(bar, "h-[1.6cqw]", task.width, task.done ? "bg-line" : "bg-ink/80")} />
            {task.who && (
              <span
                className={cn(
                  "ml-auto grid size-[4.6cqw] place-items-center rounded-full text-[2cqw] font-semibold",
                  task.done ? "bg-accent-soft text-accent-deep" : "bg-ink text-white",
                )}
              >
                {task.who}
              </span>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

function FocusArt() {
  const circumference = 2 * Math.PI * 42;
  const waves = [30, 55, 80, 45, 95, 60, 35, 70, 50, 25, 65, 40];
  return (
    <>
      <div className={cn(sheet, "top-[10%] left-1/2 flex w-[48%] -translate-x-1/2 flex-col items-center p-[4cqw] group-hover:-translate-y-[0.6cqw]")}>
        <div className="relative size-[28cqw]">
          <svg viewBox="0 0 100 100" className="size-full -rotate-90">
            <circle cx="50" cy="50" r="42" fill="none" className="stroke-sand" strokeWidth="7" />
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              className="stroke-accent transition-[stroke-dashoffset] duration-500 ease-soft [stroke-dashoffset:calc(var(--c)*0.32)] group-hover:[stroke-dashoffset:calc(var(--c)*0.22)]"
              strokeWidth="7"
              strokeLinecap="round"
              strokeDasharray={circumference}
              style={{ "--c": `${circumference}px` } as CSSProperties}
            />
          </svg>
          <span className="absolute inset-0 grid place-items-center font-display text-[6.4cqw] font-semibold tracking-tight text-ink">
            17:24
          </span>
        </div>
        <div className="mt-[3.5cqw] flex h-[7cqw] items-end gap-[1cqw]">
          {waves.map((h, i) => (
            <span
              key={i}
              className="w-[1.4cqw] rounded-full bg-accent/70 transition-transform duration-500 ease-soft group-hover:scale-y-125"
              style={{ height: `${h}%`, transitionDelay: `${i * 20}ms`, transformOrigin: "bottom" }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

const artworks: Record<ProductArtwork, () => ReactElement> = {
  notes: NotesArt,
  habits: HabitsArt,
  planner: PlannerArt,
  focus: FocusArt,
};

/** Neutral stand-in while real product images are missing: the product icon (or monogram) on a tile. */
function PlaceholderArt({ name, icon, eager }: { name: string; icon?: string; eager?: boolean }) {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div className="grid size-[26cqw] place-items-center rounded-[7cqw] bg-paper shadow-[0_3cqw_7cqw_-3cqw_rgb(28_27_24/0.25)] transition-transform duration-500 ease-soft group-hover:-translate-y-[0.8cqw]">
        {icon ? (
          <Image src={icon} alt="" width={128} height={128} loading={eager ? "eager" : "lazy"} className="size-[16cqw]" />
        ) : (
          <span className="grid size-[16cqw] place-items-center rounded-[4.5cqw] bg-accent font-display text-[9cqw] font-semibold text-white">
            {name.charAt(0).toUpperCase()}
          </span>
        )}
      </div>
    </div>
  );
}

type ProductVisualProps = {
  name: string;
  /** Image path; ignored if the file doesn't exist in /public. */
  image?: string;
  icon?: string;
  artwork?: ProductArtwork;
  alt: string;
  className?: string;
  sizes?: string;
  /** Load immediately with high priority — use for above-the-fold visuals (the LCP element). */
  eager?: boolean;
};

/**
 * Server component. Shows the real image when the file exists,
 * otherwise the product's illustration, otherwise a clean icon placeholder.
 */
export function ProductVisual({
  name,
  image,
  icon,
  artwork,
  alt,
  className,
  sizes = "(min-width: 1024px) 40vw, 100vw",
  eager,
}: ProductVisualProps) {
  const Art = artwork ? artworks[artwork] : null;
  const targetImg = assetExists(image) ? image : assetExists(icon) ? icon : null;

  return (
    <div className={cn("@container relative overflow-hidden bg-[#0d0d12] border-b border-white/10", className)}>
      {/* Ambient background grid and glow */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] bg-size-[20px_20px] opacity-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-40 rounded-full bg-blue-600/20 blur-2xl"
      />

      {targetImg ? (
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="relative size-28 sm:size-32 rounded-[28px] overflow-hidden shadow-2xl shadow-black ring-1 ring-white/20 transition-transform duration-500 ease-soft group-hover:scale-105 group-hover:-translate-y-1">
            <Image
              src={targetImg}
              alt={alt}
              fill
              sizes={sizes}
              loading={eager ? "eager" : "lazy"}
              fetchPriority={eager ? "high" : "auto"}
              className="object-contain p-2"
            />
          </div>
        </div>
      ) : (
        <div role="img" aria-label={alt} className="absolute inset-0">
          {Art ? <Art /> : <PlaceholderArt name={name} icon={assetExists(icon) ? icon : undefined} eager={eager} />}
        </div>
      )}
    </div>
  );
}
