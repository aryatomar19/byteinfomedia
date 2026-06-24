"use client";

import { DmAnimatedCounter, type CounterStat } from "@/components/digital-marketing/DmAnimatedCounter";

export function DmResultsStats({
  title,
  metrics,
}: {
  title: string;
  metrics: readonly CounterStat[];
}) {
  return (
    <section
      className="dm-section dm-results-stats dm-results-stats--compact relative"
      style={{ background: "#060B23" }}
      aria-labelledby="dm-results-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(255,107,53,0.1),transparent_58%)]" aria-hidden />

      <div className="dm-container relative">
        <div className="mx-auto mb-4 max-w-3xl text-center">
          <h2 id="dm-results-heading" className="dm-heading dm-heading--xl text-white">
            {title}
          </h2>
        </div>

        <div className="dm-results-stats__grid grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-3 lg:gap-3">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="dm-results-stats__card rounded-2xl border border-white/10 bg-white/[0.05] px-3 py-3 text-center sm:px-4 sm:py-4"
            >
              <DmAnimatedCounter
                stat={metric}
                index={index}
                className="[&_p:first-child]:text-2xl [&_p:first-child]:sm:text-3xl [&_p:first-child]:lg:text-[2rem] [&_p:first-child]:text-[#FF6B35] [&_p:last-child]:mt-1 [&_p:last-child]:text-[0.65rem] [&_p:last-child]:sm:text-xs"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
