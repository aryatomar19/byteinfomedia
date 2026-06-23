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
      style={{ background: "#060B23" }}
      aria-labelledby="dm-results-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(255,107,53,0.12),transparent_58%)]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 grid-pattern-light opacity-[0.04]" aria-hidden />

      <div className="dm-container relative">
        <DmGsapReveal className="mx-auto mb-14 max-w-3xl text-center lg:mb-18">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B35]">{eyebrow}</span>
          <h2 id="dm-results-heading" className="dm-heading dm-heading--xl mt-4 text-white">
            {title}
          </h2>
        </DmGsapReveal>

        <div className="dm-results-stats__grid grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="dm-results-stats__card rounded-3xl border border-white/10 bg-white/[0.05] px-8 py-12 text-center backdrop-blur-xl sm:px-10 sm:py-14"
              whileHover={{ y: -6, borderColor: "rgba(255,107,53,0.3)" }}
              transition={{ type: "spring", stiffness: 360, damping: 26 }}
            >
              <DmAnimatedCounter
                stat={metric}
                index={index}
                className="[&_p:first-child]:text-5xl [&_p:first-child]:sm:text-6xl [&_p:first-child]:lg:text-7xl [&_p:first-child]:text-[#FF6B35] [&_p:last-child]:mt-4 [&_p:last-child]:text-sm [&_p:last-child]:sm:text-base"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
