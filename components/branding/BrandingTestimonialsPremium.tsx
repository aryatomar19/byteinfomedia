"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
};

export function BrandingTestimonialsPremium({
  title,
  items,
}: {
  title: string;
  items: readonly Testimonial[];
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % items.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, [items.length]);

  const active = items[index];

  return (
    <section className="bs-section bs-testimonials-premium relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,107,44,0.1),transparent_50%)]" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B2C]">Testimonials</span>
            <h2 className="bs-section-title mt-2">{title}</h2>

            <div className="mt-8 space-y-4">
              {items.map((item, i) => (
                <motion.div
                  key={item.name}
                  className={`bs-testimonial-mini rounded-xl border p-4 transition ${
                    i === index
                      ? "border-[#FF6B2C]/25 bg-white shadow-[0_12px_40px_rgba(255,107,44,0.1)]"
                      : "border-[#111]/6 bg-white/70"
                  }`}
                  animate={{ x: i === index ? 8 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#FF6B2C] to-[#FF6B2C]/70 text-sm font-extrabold text-white">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-extrabold text-[#111]">{item.name}</p>
                      <p className="text-xs text-[#666]">
                        {item.role} · {item.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="bs-floating-proof-card absolute -right-4 top-0 hidden rounded-2xl border border-white bg-white px-5 py-4 shadow-xl lg:block"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-3xl font-extrabold text-[#FF6B2C]">4.9</p>
              <div className="mt-1 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-[#FF6B2C] text-[#FF6B2C]" />
                ))}
              </div>
              <p className="mt-1 text-xs font-semibold text-[#666]">Average client rating</p>
            </motion.div>
          </motion.div>

          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl bg-[#FF6B2C]/10" aria-hidden />
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, y: 24, rotateY: -4 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                exit={{ opacity: 0, y: -16, rotateY: 4 }}
                transition={{ duration: 0.5 }}
                className="bs-testimonial-feature relative rounded-3xl border border-[#111]/6 bg-white p-8 shadow-[0_24px_64px_rgba(17,17,17,0.1)] sm:p-10"
              >
                <Quote className="h-10 w-10 text-[#FF6B2C]/30" />
                <p className="mt-4 text-xl font-medium leading-9 text-[#111] sm:text-2xl">
                  &ldquo;{active.quote}&rdquo;
                </p>
                <footer className="mt-8 flex items-center justify-between border-t border-[#111]/6 pt-6">
                  <div>
                    <cite className="not-italic">
                      <span className="block text-lg font-extrabold text-[#111]">{active.name}</span>
                      <span className="mt-1 block text-sm text-[#666]">
                        {active.role}, {active.company}
                      </span>
                    </cite>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: active.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-[#FF6B2C] text-[#FF6B2C]" />
                    ))}
                  </div>
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
        </div>
      </div>
    </section>
  );
}
