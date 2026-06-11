"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { scrollToHash } from "@/lib/scroll";
import { cn } from "@/lib/utils";

const consultationHref = "/book-consultation/#consultation";

export function BookConsultationButton({
  className,
  size = "sm",
}: {
  className?: string;
  size?: "sm" | "md";
}) {
  const pathname = usePathname();
  const isConsultationPage = pathname.replace(/\/$/, "") === "/book-consultation";

  return (
    <Link
      href={consultationHref}
      onClick={(event) => {
        if (isConsultationPage) {
          event.preventDefault();
          scrollToHash("consultation");
        }
      }}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-bold text-white",
        "bg-gradient-to-r from-[#FF6B2C] via-[#ff7a3d] to-[#FF6B2C] bg-[length:200%_100%]",
        "shadow-[0_6px_24px_rgba(255,107,44,0.32)]",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-0.5 hover:bg-right hover:shadow-[0_12px_36px_rgba(255,107,44,0.42)]",
        "active:translate-y-0 active:shadow-[0_4px_16px_rgba(255,107,44,0.28)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B2C]/50 focus-visible:ring-offset-2",
        size === "sm" ? "h-11 px-6 text-sm shadow-[0_8px_28px_rgba(255,107,44,0.35)]" : "h-12 px-8 text-base",
        className,
      )}
    >
      <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent opacity-80" />
      <span className="relative">Book Consultation</span>
      <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}
