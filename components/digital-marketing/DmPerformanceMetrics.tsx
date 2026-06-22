"use client";

import { motion } from "framer-motion";
import { DmAnimatedCounter, type CounterStat } from "@/components/digital-marketing/DmAnimatedCounter";
import { DmGsapReveal } from "@/components/digital-marketing/DmGsapReveal";

function MetricParticle({ x, y, delay, size }: { x: string; y: string; delay: number; size: number }) {
  return (
    <motion.span
      className="dm-metrics-particle absolute rounded-full"
      style={{ left: x, top: y, width: size, height: size }}
      animate={{ opacity: [0.15, 0.6, 0.15], y: [0, -12, 0] }}
      transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut", delay }}
      aria-hidden
    />
  );
}

export function DmPerformanceMetrics({
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
      className="dm-section dm-metrics-section relative overflow-hidden"
      style={{ background: "#050B1F" }}
      aria-labelledby="dm-metrics-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(59,130,246,0.08),transparent_50%)]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_40%,rgba(255,107,44,0.1),transparent_45%)]" aria-hidden />

      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-20" aria-hidden>
        <motion.line x1="10%" y1="30%" x2="35%" y2="50%" stroke="rgba(255,107,44,0.4)" strokeWidth="1" animate={{ opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 4, repeat: Infinity }} />
        <motion.line x1="35%" y1="50%" x2="65%" y2="35%" stroke="rgba(59,130,246,0.4)" strokeWidth="1" animate={{ opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }} />
        <motion.line x1="65%" y1="35%" x2="90%" y2="55%" stroke="rgba(255,107,44,0.3)" strokeWidth="1" animate={{ opacity: [0.15, 0.5, 0.15] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} />
        <motion.line x1="20%" y1="70%" x2="50%" y2="60%" stroke="rgba(59,130,246,0.3)" strokeWidth="1" animate={{ opacity: [0.15, 0.5, 0.15] }} transition={{ duration: 4.2, repeat: Infinity, delay: 0.8 }} />
        <motion.line x1="50%" y1="60%" x2="80%" y2="75%" stroke="rgba(255,107,44,0.25)" strokeWidth="1" animate={{ opacity: [0.1, 0.45, 0.1] }} transition={{ duration: 4.8, repeat: Infinity, delay: 1.2 }} />
      </svg>

      <MetricParticle x="8%" y="15%" delay={0} size={4} />
      <MetricParticle x="92%" y="20%" delay={0.5} size={5} />
      <MetricParticle x="15%" y="80%" delay={1} size={3} />
      <MetricParticle x="85%" y="75%" delay={0.3} size={4} />
      <MetricParticle x="50%" y="10%" delay={0.7} size={3} />
      <MetricParticle x="70%" y="85%" delay={1.2} size={5} />

      <div className="dm-container relative">
        <DmGsapReveal className="mx-auto mb-14 max-w-3xl text-center">
          <span className="dm-eyebrow dm-eyebrow--light">{eyebrow}</span>
          <h2 id="dm-metrics-heading" className="dm-heading mt-3 text-white">
            {title}
          </h2>
        </DmGsapReveal>

        <div className="dm-metrics-grid grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-3 lg:gap-10">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="dm-metrics-card relative rounded-2xl border border-white/8 bg-white/[0.03] p-6 text-center backdrop-blur-md sm:p-8"
              animate={{ y: [0, -6, 0] }}
              transition={{
                y: { duration: 4 + index * 0.3, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 },
              }}
            >
              <DmAnimatedCounter stat={metric} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
