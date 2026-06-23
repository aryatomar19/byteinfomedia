"use client";

import { motion } from "framer-motion";
import { DmAnimatedCounter, type CounterStat } from "@/components/digital-marketing/DmAnimatedCounter";
import { DmGsapReveal } from "@/components/digital-marketing/DmGsapReveal";

export function DmResultsStats({
  title,
  metrics,
}: {
  title: string;
  metrics: readonly CounterStat[];
}) {
  return (
    <section
      className="dm-section dm-results-stats dm-results-stats--compact relative overflow-hidden"
      style={{ background: "#060B23" }}
      aria-labelledby="dm-results-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(255,107,53,0.1),transparent_58%)]" aria-hidden />

      <div className="dm-container relative">
        <DmGsapReveal className="mx-auto mb-6 max-w-3xl text-center lg:mb-8">
          <h2 id="dm-results-heading" className="dm-heading dm-heading--xl text-white">
            {title}
          </h2>
        </DmGsapReveal>

        <div className="dm-results-stats__grid grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-5">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="dm-results-stats__card rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-5 text-center backdrop-blur-xl sm:px-6 sm:py-6"
              whileHover={{ y: -4, borderColor: "rgba(255,107,53,0.3)" }}
              transition={{ type: "spring", stiffness: 360, damping: 26 }}
            >
              <DmAnimatedCounter
                stat={metric}
                index={index}
                className="[&_p:first-child]:text-3xl [&_p:first-child]:sm:text-4xl [&_p:first-child]:lg:text-[2.75rem] [&_p:first-child]:text-[#FF6B35] [&_p:last-child]:mt-2 [&_p:last-child]:text-[0.65rem] [&_p:last-child]:sm:text-xs"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
