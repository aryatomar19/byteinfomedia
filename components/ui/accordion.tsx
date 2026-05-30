"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import type { FaqItem } from "@/data/service-page-types";

export function FAQAccordion({ items, dark = true }: { items: FaqItem[]; dark?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div
            key={item.question}
            className={cn(
              "overflow-hidden rounded-2xl border transition",
              dark
                ? "border-white/10 bg-white/[0.04] hover:border-[#FF6B2C]/30"
                : "border-[#0A0F1C]/10 bg-white hover:border-[#FF6B2C]/30",
            )}
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => setOpen(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className={cn("font-bold", dark ? "text-white" : "text-[#0A0F1C]")}>{item.question}</span>
              <ChevronDown
                className={cn("h-5 w-5 shrink-0 transition", isOpen && "rotate-180", dark ? "text-[#FF6B2C]" : "text-[#FF6B2C]")}
              />
            </button>
            {isOpen && (
              <div className={cn("px-5 pb-4 text-sm leading-7", dark ? "text-white/65" : "text-[#52647a]")}>
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
