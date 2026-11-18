import Image from "next/image";
import Link from "next/link";
import { brand } from "@/lib/brand";
import { cn } from "@/lib/utils";

function LogoMark({ className }: { className?: string }) {
  return (
    <span className={cn("relative block size-9 shrink-0", className)} aria-hidden>
      <Image
        src="/images/gr-logo.png"
        alt=""
        width={40}
        height={40}
        className="size-full object-contain"
        priority
      />
    </span>
  );
}

export function Logo({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn("group/logo inline-flex items-center gap-2.5 rounded-lg", className)}
      aria-label={`${brand.name} — home`}
    >
      <LogoMark className="transition-transform duration-500 ease-soft group-hover/logo:scale-105" />
      <span className="font-display text-[1.35rem] font-bold tracking-[-0.035em] whitespace-nowrap text-white">
        GR Studio <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Creator</span>
      </span>
    </Link>
  );
}
