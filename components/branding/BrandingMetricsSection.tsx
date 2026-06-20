"use client";

import { motion } from "framer-motion";
import { AnimatedMetric } from "@/components/motion/AnimatedMetric";

type Metric = {
  value: number | null;
  suffix?: string;
  display?: string;
  label: string;
};

function MetricParticle({ delay, left, top }: { delay: number; left: string; top: string }) {
  return (
    <motion.span
      className="absolute h-1.5 w-1.5 rounded-full bg-[#FF6B2C]/50"
      style={{ left, top }}
      animate={{ y: [0, -12, 0], opacity: [0.2, 0.8, 0.2] }}
      transition={{ duration: 3 + delay, repeat: Infinity, delay }}
    />
  );
}

export function BrandingMetricsSection({ metrics }: { metrics: readonly Metric[] }) {
  return (
    <section className="bs-metrics-section relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#FF6B2C]/15 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
        <MetricParticle delay={0} left="15%" top="30%" />
        <MetricParticle delay={0.5} left="45%" top="20%" />
        <MetricParticle delay={1} left="75%" top="60%" />
        <MetricParticle delay={1.5} left="30%" top="70%" />
        <MetricParticle delay={0.8} left="85%" top="25%" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center text-xs font-bold uppercase tracking-[0.25em] text-white/50"
        >
          Success Metrics
        </motion.p>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.04, filter: "drop-shadow(0 0 24px rgba(255,107,44,0.35))" }}
              className="bs-stat-item rounded-2xl border border-white/8 bg-white/5 px-4 py-6 text-center backdrop-blur-sm transition"
            >
              <AnimatedMetric
                value={metric.value}
                display={"display" in metric ? metric.display : undefined}
                suffix={"suffix" in metric ? metric.suffix : undefined}
                label={metric.label}
                variant="dark"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
