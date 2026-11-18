import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "inverse" | "outline-inverse";
type Size = "sm" | "md" | "lg";

const base =
  "group/btn inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-[background-color,color,border-color,box-shadow,translate] duration-200 ease-soft hover:-translate-y-0.5 active:translate-y-px disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 text-white shadow-[0_0_24px_rgba(59,59,245,0.4)] hover:shadow-[0_0_32px_rgba(59,59,245,0.6)] hover:brightness-110 active:brightness-95",
  secondary: "border border-white/15 bg-white/5 text-white hover:border-white/35 hover:bg-white/10 shadow-sm",
  ghost: "text-zinc-300 hover:text-white hover:bg-white/5",
  inverse: "bg-white text-black hover:bg-zinc-200 shadow-xl focus-visible:outline-white",
  "outline-inverse": "border border-white/20 text-white hover:border-white/50 hover:bg-white/10 focus-visible:outline-white",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[15px]",
  lg: "h-13 px-6 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  /** Show a trailing arrow that nudges right on hover. */
  arrow?: boolean;
  className?: string;
  children: ReactNode;
};

type ButtonAsLink = CommonProps & Omit<ComponentProps<typeof Link>, "className" | "children"> & { href: string };
type ButtonAsButton = CommonProps & Omit<ComponentProps<"button">, "className" | "children"> & { href?: undefined };

function buttonClasses({ variant = "primary", size = "md", className }: Pick<CommonProps, "variant" | "size" | "className">) {
  return cn(base, variants[variant], sizes[size], className);
}

function Arrow() {
  return (
    <Icon
      name="arrow-right"
      size={17}
      className="transition-[translate] duration-150 ease-soft group-hover/btn:translate-x-1"
    />
  );
}

export function Button({ variant, size, arrow, className, children, ...rest }: ButtonAsLink | ButtonAsButton) {
  const classes = buttonClasses({ variant, size, className });
  const content = (
    <>
      {children}
      {arrow && <Arrow />}
    </>
  );

  if (typeof rest.href === "string") {
    return (
      <Link className={classes} {...(rest as Omit<ButtonAsLink, keyof CommonProps>)}>
        {content}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = rest as Omit<ButtonAsButton, keyof CommonProps>;
  return (
    <button type={type} className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
