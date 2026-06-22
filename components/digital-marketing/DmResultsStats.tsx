"use client";

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
      className="dm-section dm-results-stats relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #070D1F 0%, #050B24 100%)" }}
      aria-labelledby="dm-results-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(255,107,44,0.08),transparent_60%)]" aria-hidden />

      <div className="dm-container relative">
        <DmGsapReveal className="mx-auto mb-12 max-w-3xl text-center lg:mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B2C]">{eyebrow}</span>
          <h2 id="dm-results-heading" className="dm-heading mt-3 text-white">
            {title}
          </h2>
        </DmGsapReveal>

        <div className="dm-results-stats__grid grid grid-cols-2 gap-8 border-y border-white/10 py-12 sm:grid-cols-3 sm:gap-10 sm:py-16 lg:grid-cols-6 lg:gap-6">
          {metrics.map((metric, index) => (
            <div key={metric.label} className="text-center">
              <DmAnimatedCounter
                stat={metric}
                index={index}
                className="[&_p:first-child]:text-3xl [&_p:first-child]:sm:text-4xl [&_p:first-child]:lg:text-5xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
