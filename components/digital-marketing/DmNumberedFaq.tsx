"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

type FaqItem = { question: string; answer: string };

export function DmNumberedFaq({
  items,
  variant = "dark",
  compact = false,
}: {
  items: readonly FaqItem[];
  variant?: "dark" | "light";
  compact?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(0);
  const isLight = variant === "light";

  return (
    <div className={`dm-numbered-faq ${compact ? "dm-numbered-faq--compact space-y-2" : "space-y-3"}`}>
      {items.map((item, index) => {
        const isOpen = open === index;
        const number = String(index + 1).padStart(2, "0");

        return (
          <div
            key={item.question}
            className={`dm-numbered-faq__item overflow-hidden rounded-2xl border transition-colors duration-300 ${
              isLight
                ? isOpen
                  ? "border-[#FF6B35]/30 bg-[#F8F9FC]"
                  : "border-[#0A0F1C]/8 bg-white shadow-[0_8px_32px_rgba(10,15,28,0.04)]"
                : isOpen
                  ? "border-[#FF6B35]/35 bg-white/[0.04]"
                  : "border-white/10 bg-white/[0.02]"
            }`}
          >
            <button
              type="button"
              className={`flex w-full items-start gap-3 text-left ${compact ? "px-4 py-3 sm:px-5" : "px-5 py-4 sm:px-6 sm:py-5"}`}
              onClick={() => setOpen(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className="dm-numbered-faq__num mt-0.5 shrink-0 text-sm font-extrabold tracking-wider text-[#FF6B35]">
                {number}
              </span>
              <span
                className={`min-w-0 flex-1 pr-2 text-sm font-bold leading-snug sm:text-base ${
                  isLight ? "text-[#0A0F1C]" : "text-white"
                }`}
              >
                {item.question}
              </span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-[#FF6B35] ${
                  isLight ? "border-[#0A0F1C]/10 bg-[#F8F9FC]" : "border-white/10 bg-white/[0.04]"
                }`}
              >
                {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p
                    className={`border-t px-4 pb-4 pl-[2.75rem] pt-3 text-sm leading-6 sm:px-5 sm:pb-4 sm:pl-[3rem] ${
                      isLight ? "border-[#0A0F1C]/8 text-[#0A0F1C]/65" : "border-white/8 text-white/55"
                    }`}
                  >
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
