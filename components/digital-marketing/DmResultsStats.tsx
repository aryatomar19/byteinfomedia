"use client";

import { motion } from "framer-motion";
import { DmAnimatedCounter, type CounterStat } from "@/components/digital-marketing/DmAnimatedCounter";
import { DmGsapReveal } from "@/components/digital-marketing/DmGsapReveal";

export function DmResultsStats({
  title,
  eyebrow,
  metrics,
}: {
  title: string;
  eyebrow: string;
  metrics: readonly CounterStat[];
}) {
  return (
    <section
      className="dm-section dm-section--2xl dm-results-stats relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #070D1F 0%, #050B24 100%)" }}
      aria-labelledby="dm-results-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(255,107,44,0.1),transparent_60%)]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 grid-pattern-light opacity-[0.04]" aria-hidden />

      <div className="dm-container relative">
        <DmGsapReveal className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B2C]">{eyebrow}</span>
          <h2 id="dm-results-heading" className="dm-heading dm-heading--xl mt-4 text-white">
            {title}
          </h2>
        </DmGsapReveal>

        <div className="dm-results-stats__grid grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="dm-results-stats__card rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-12 text-center backdrop-blur-md sm:px-10 sm:py-14"
              whileHover={{ y: -6, borderColor: "rgba(255,107,44,0.25)" }}
              transition={{ type: "spring", stiffness: 360, damping: 26 }}
            >
              <DmAnimatedCounter
                stat={metric}
                index={index}
                className="[&_p:first-child]:text-5xl [&_p:first-child]:sm:text-6xl [&_p:first-child]:lg:text-7xl [&_p:last-child]:mt-4 [&_p:last-child]:text-sm [&_p:last-child]:sm:text-base"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
