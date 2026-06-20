"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Testimonial = { quote: string; name: string; role: string };

function useVisibleCount() {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setCount(1);
      else if (window.innerWidth < 1024) setCount(2);
      else setCount(3);
    };
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  return count;
}

export function BrandingTestimonialCarousel({
  title,
  items,
}: {
  title: string;
  items: readonly Testimonial[];
}) {
  const visible = useVisibleCount();
  const [offset, setOffset] = useState(0);
  const maxOffset = Math.max(0, items.length - visible);

  useEffect(() => {
    setOffset(0);
  }, [visible]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setOffset((current) => (current >= maxOffset ? 0 : current + 1));
    }, 4000);
    return () => window.clearInterval(timer);
  }, [maxOffset]);

  const cardWidthPercent = 100 / visible;
  const gapRem = 1.25;

  return (
    <section className="bs-section bs-testimonial-carousel relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,107,44,0.06),transparent_50%)]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B2C]">Testimonials</span>
          <h2 className="bs-section-title mt-2">{title}</h2>
        </motion.div>

        <div className="overflow-hidden">
          <motion.div
            className="flex"
            style={{ gap: `${gapRem}rem` }}
            animate={{ x: `calc(-${offset} * (${cardWidthPercent}% + ${gapRem}rem / ${visible}))` }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
          >
            {items.map((item) => (
              <motion.blockquote
                key={item.name}
                whileHover={{ y: -6, boxShadow: "0 24px 56px rgba(17,17,17,0.1)" }}
                className="bs-testimonial-card shrink-0 rounded-2xl border border-[#111]/6 bg-[#FAFAFA] p-6 transition sm:p-7"
                style={{ width: `calc(${cardWidthPercent}% - ${((visible - 1) * gapRem) / visible}rem)` }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#FF6B2C] to-[#FF6B2C]/70 text-sm font-extrabold text-white">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-extrabold text-[#111]">{item.name}</p>
                    <p className="text-xs text-[#666]">{item.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-[#444] sm:text-base">&ldquo;{item.quote}&rdquo;</p>
              </motion.blockquote>
            ))}
          </motion.div>
        </div>

        {maxOffset > 0 && (
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: maxOffset + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Slide ${i + 1}`}
                onClick={() => setOffset(i)}
                className={`h-2 rounded-full transition-all ${i === offset ? "w-8 bg-[#FF6B2C]" : "w-2 bg-[#111]/15"}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
