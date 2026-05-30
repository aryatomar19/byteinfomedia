"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { company, headerNav } from "@/data/site";
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
    <header className="sticky top-0 z-50 border-b border-[#0A0F1C]/8 bg-white/95 shadow-[0_4px_24px_rgba(10,15,28,0.04)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <img src={company.logo} alt={company.name} className="h-9 w-auto object-contain" />
          <span className="hidden xl:block">
            <span className="block text-[0.6rem] font-bold uppercase tracking-[0.22em] text-[#0A0F1C]">
              {company.taglineLine1}
            </span>
            <span className="block text-[0.6rem] font-semibold text-[#c84a17]">{company.taglineLine2}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main navigation">
          {headerNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-semibold transition xl:px-3.5",
                isActive(item.href) ? "text-[#FF6B2C]" : "text-[#0A0F1C]/75 hover:text-[#0A0F1C]",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="outline" size="sm" asChild>
            <Link href="/#assessment">Free Assessment</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/#assessment">Book Consultation</Link>
          </Button>
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

      {open && (
        <div className="border-t border-[#0A0F1C]/8 bg-white px-4 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
            {headerNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-[#0A0F1C] hover:bg-[#F8F9FC]"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 grid gap-2 border-t border-[#0A0F1C]/8 pt-3">
              <Link
                href="/#assessment"
                onClick={() => setOpen(false)}
                className="rounded-xl border border-[#FF6B2C]/40 px-4 py-3 text-center text-sm font-bold text-[#c84a17]"
              >
                Free Assessment
              </Link>
              <Link
                href="/#assessment"
                onClick={() => setOpen(false)}
                className="rounded-xl bg-[#FF6B2C] px-4 py-3 text-center text-sm font-bold text-white"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
