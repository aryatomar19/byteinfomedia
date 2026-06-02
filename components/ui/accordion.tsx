"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import type { FaqItem } from "@/data/service-page-types";

type FAQAccordionProps = {
  items: FaqItem[];
  dark?: boolean;
  variant?: "default" | "premium";
};

export function FAQAccordion({ items, dark = true, variant = "default" }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(0);
  const premium = variant === "premium";

  return (
    <div className={cn(premium ? "space-y-4" : "space-y-3")}>
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div
            key={item.question}
            className={cn(
              "overflow-hidden rounded-2xl border transition duration-300",
              premium
                ? "rounded-[1.25rem] border-[#0A0F1C]/8 bg-white shadow-[0_8px_32px_rgba(10,15,28,0.06)] hover:border-[#FF6B2C]/25 hover:shadow-[0_12px_40px_rgba(10,15,28,0.08)]"
                : dark
                  ? "border-white/10 bg-white/[0.04] hover:border-[#FF6B2C]/30"
                  : "border-[#0A0F1C]/10 bg-white hover:border-[#FF6B2C]/30",
            )}
          >
            <button
              type="button"
              className={cn(
                "flex w-full items-center justify-between gap-4 text-left transition",
                premium ? "px-6 py-5 sm:px-7 sm:py-5" : "px-5 py-4",
              )}
              onClick={() => setOpen(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span
                className={cn(
                  "font-bold leading-snug",
                  premium ? "text-base text-[#0A0F1C] sm:text-lg" : dark ? "text-white" : "text-[#0A0F1C]",
                )}
              >
                {item.question}
              </span>
              <span
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition",
                  premium ? "bg-[#F8F9FC] text-[#FF6B2C]" : "text-[#FF6B2C]",
                  isOpen && premium && "bg-[#FF6B2C]/10",
                )}
              >
                <ChevronDown className={cn("h-5 w-5 transition duration-300", isOpen && "rotate-180")} />
              </span>
            </button>
            <div
              className={cn(
                "grid transition-all duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p
                  className={cn(
                    "text-sm leading-7",
                    premium ? "px-6 pb-5 text-[#0A0F1C] sm:px-7 sm:pb-6 sm:text-[0.9375rem]" : dark ? "px-5 pb-4 text-white/65" : "px-5 pb-4 text-[#0A0F1C]",
                  )}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
