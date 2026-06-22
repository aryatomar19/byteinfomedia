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
      className="dm-section dm-section--xl dm-why-trust relative overflow-hidden"
      style={{ background: "#050B24" }}
      aria-labelledby="dm-why-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_40%,rgba(255,107,44,0.07),transparent_50%)]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 grid-pattern-light opacity-[0.04]" aria-hidden />

      <div className="dm-container relative">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20 xl:gap-24">
          <DmGsapReveal y={40}>
            <motion.div
              className="dm-why-image group relative overflow-hidden rounded-3xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/6] lg:aspect-[4/5]">
                <img
                  src={image}
                  alt={imageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B24]/90 via-[#050B24]/25 to-[#050B24]/10" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_80%,rgba(255,107,44,0.15),transparent_55%)]" />
                <div className="dm-why-image__glass pointer-events-none absolute inset-4 rounded-2xl border border-white/10 sm:inset-5" aria-hidden />
              </div>
            </motion.div>
          </DmGsapReveal>

          <DmGsapReveal y={32}>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B2C]">{eyebrow}</span>
            <h2 id="dm-why-heading" className="dm-heading dm-heading--xl mt-5 text-white">
              {title}
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/60 sm:text-lg sm:leading-9">
              {description}
            </p>

            <ul className="mt-10 space-y-5">
              {trustIndicators.map((item) => (
                <li key={item} className="flex items-center gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FF6B2C]/15">
                    <Check className="h-4 w-4 text-[#FF6B2C]" strokeWidth={2.5} />
                  </span>
                  <span className="text-base font-semibold text-white/90">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-12">
              {highlightStats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-extrabold text-[#FF6B2C] sm:text-4xl">{stat.value}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-white/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </DmGsapReveal>
        </div>
      </div>
    </section>
  );
}
