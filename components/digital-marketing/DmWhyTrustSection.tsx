"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { DmGsapReveal } from "@/components/digital-marketing/DmGsapReveal";

type WhyByteContent = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  trustIndicators: readonly string[];
  highlightStats: readonly { value: string; label: string }[];
};

export function DmWhyTrustSection({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  trustIndicators,
  highlightStats,
}: WhyByteContent) {
  return (
    <section
      id="dm-why"
      className="dm-section dm-section--2xl dm-why-trust relative overflow-hidden"
      style={{ background: "#030B2A" }}
      aria-labelledby="dm-why-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_12%_35%,rgba(255,107,44,0.09),transparent_50%)]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_88%_65%,rgba(59,130,246,0.05),transparent_45%)]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 grid-pattern-light opacity-[0.03]" aria-hidden />

      <div className="dm-container relative">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20 xl:gap-28">
          <DmGsapReveal y={48}>
            <motion.div
              className="dm-why-image group relative overflow-hidden rounded-[1.75rem]"
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative aspect-[5/6] overflow-hidden lg:aspect-[4/5]">
                <img
                  src={image}
                  alt={imageAlt}
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030B2A]/95 via-[#030B2A]/30 to-[#030B2A]/5" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#030B2A]/40 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_85%,rgba(255,107,44,0.18),transparent_55%)]" />
                <div className="dm-why-image__glass pointer-events-none absolute inset-5 rounded-2xl border border-white/12 sm:inset-6" aria-hidden />
                <div className="pointer-events-none absolute bottom-6 left-6 right-6 rounded-xl border border-white/10 bg-white/[0.06] px-5 py-4 backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-8">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF6B2C]">Performance Driven</p>
                  <p className="mt-1 text-sm font-semibold text-white/80">Strategy · Analytics · Measurable ROI</p>
                </div>
              </div>
            </motion.div>
          </DmGsapReveal>

          <DmGsapReveal y={40}>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.22em] text-[#FF6B2C]">
              {eyebrow}
            </span>
            <h2
              id="dm-why-heading"
              className="dm-heading dm-heading--2xl mt-6 max-w-xl text-white"
            >
              {title}
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-[1.85] text-white/60 sm:text-xl sm:leading-[1.8]">
              {description}
            </p>

            <ul className="mt-12 space-y-5">
              {trustIndicators.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#FF6B2C]/25 bg-[#FF6B2C]/10">
                    <Check className="h-4 w-4 text-[#FF6B2C]" strokeWidth={2.5} />
                  </span>
                  <span className="text-base font-semibold leading-relaxed text-white/90 sm:text-lg">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="dm-why-stats-row mt-14 grid grid-cols-2 gap-6 border-t border-white/10 pt-14 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
              {highlightStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center lg:text-left"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                >
                  <p className="text-2xl font-extrabold tracking-tight text-[#FF6B2C] sm:text-3xl lg:text-[1.75rem] xl:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-[0.65rem] font-semibold uppercase leading-snug tracking-wider text-white/45 sm:text-xs">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </DmGsapReveal>
        </div>
      </div>
    </section>
  );
}
