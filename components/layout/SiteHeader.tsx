"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { company, serviceNav } from "@/data/site";
import { BookConsultationButton } from "@/components/ui/BookConsultationButton";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname.startsWith(href.replace(/\/$/, ""));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-[#0A0F1C]/10 bg-white/85 shadow-[0_8px_32px_rgba(10,15,28,0.08)] backdrop-blur-xl"
          : "border-[#0A0F1C]/6 bg-white/95 shadow-[0_4px_24px_rgba(10,15,28,0.04)] backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-[95px] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center">
          <img src={company.logo} alt={company.name} className="h-[50px] w-auto object-contain" />
        </Link>

        <div className="ml-auto flex items-center gap-8 lg:gap-10">
          <nav className="hidden items-center gap-1 lg:flex xl:gap-2" aria-label="Services">
            {serviceNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-4 py-2.5 text-base font-semibold transition",
                  isActive(item.href) ? "text-[#FF6B2C]" : "text-[#0A0F1C]/80 hover:text-[#0A0F1C]",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <BookConsultationButton size="md" />
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#0A0F1C]/10 text-[#0A0F1C] lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[#0A0F1C]/8 bg-white/95 px-4 py-4 backdrop-blur-xl lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
            {serviceNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-semibold text-[#0A0F1C] hover:bg-[#F8F9FC]"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 border-t border-[#0A0F1C]/8 pt-3">
              <BookConsultationButton className="w-full justify-center" size="md" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
