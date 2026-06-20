"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export function BrandingTestimonialSlider({ items }: { items: readonly Testimonial[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % items.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [items.length]);

  const active = items[index];

  return (
    <div className="relative mx-auto max-w-2xl">
      <AnimatePresence mode="wait">
        <motion.blockquote
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.45 }}
          className="bs-testimonial-card rounded-2xl p-8 text-center sm:p-10"
        >
          <p className="text-lg font-medium leading-8 text-[#111] sm:text-xl">&ldquo;{active.quote}&rdquo;</p>
          <footer className="mt-6">
            <cite className="not-italic">
              <span className="block font-extrabold text-[#111]">{active.name}</span>
              <span className="mt-1 block text-sm text-[#666]">{active.role}</span>
            </cite>
          </footer>
        </motion.blockquote>
      </AnimatePresence>
      <div className="mt-6 flex justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Show testimonial ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-[#FF6B2C]" : "w-2 bg-[#111]/15"}`}
          />
        ))}
      </div>
    </div>
  );
}
