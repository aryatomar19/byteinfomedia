"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { company, mainNav, pillNav } from "@/data/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/" || pathname === "";
    return pathname.startsWith(href.replace(/\/$/, ""));
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0f1c]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <img src={company.logo} alt={company.name} className="h-9 w-auto object-contain brightness-0 invert" />
          <span className="hidden lg:block">
            <span className="block text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/90">
              {company.taglineLine1}
            </span>
            <span className="block text-[0.65rem] font-semibold text-[#ffb088]">{company.taglineLine2}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-2 xl:flex" aria-label="Main navigation">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition",
                isActive(item.href) ? "text-[#FF6B2C]" : "text-white/65 hover:text-white",
              )}
            >
              {item.label}
            </Link>
          ))}

          <div className="ml-2 flex items-center rounded-full border border-white/12 bg-white/[0.06] p-1 backdrop-blur-md">
            {pillNav.map((item, index) => (
              <span key={item.href} className="flex items-center">
                {index > 0 && <span className="mx-0.5 h-4 w-px bg-white/15" aria-hidden />}
                <Link
                  href={item.href}
                  className={cn(
                    "rounded-full px-3 py-2 text-xs font-semibold transition sm:px-4 sm:text-sm",
                    isActive(item.href) ? "bg-[#FF6B2C] text-white shadow-lg" : "text-white/70 hover:bg-white/10 hover:text-white",
                  )}
                >
                  {item.label}
                </Link>
              </span>
            ))}
          </div>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="outline" size="sm" className="border-white/25 text-white hover:bg-white/10" asChild>
            <Link href="/#assessment">Free Assessment</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/#assessment">Book Consultation</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#0a0f1c]/98 px-4 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {[...mainNav, ...pillNav].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/#assessment" onClick={() => setOpen(false)} className="rounded-2xl bg-[#FF6B2C] px-4 py-3 text-center text-sm font-bold text-white">
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
