"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Stat = {
  value: number | null;
  suffix?: string;
  display?: string;
  label: string;
};

function StatItem({ stat, index }: { stat: Stat; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView || stat.value === null) return;
    let frame = 0;
    const total = 40;
    const inc = stat.value / total;
    const timer = window.setInterval(() => {
      frame += 1;
      if (frame >= total) {
        setCount(stat.value!);
        window.clearInterval(timer);
        return;
      }
      setCount(Math.round(inc * frame));
    }, 24);
    return () => window.clearInterval(timer);
  }, [isInView, stat.value]);

  const display = stat.display ?? `${count}${stat.suffix ?? ""}`;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.2 + index * 0.06, duration: 0.45 }}
      whileHover={{ y: -2 }}
      className="dm-hero-stat dm-hero-stat--equal flex min-h-[88px] flex-col items-center justify-center rounded-2xl px-3 py-4 text-center"
    >
      <p className="text-xl font-extrabold text-[#FF6B35] sm:text-2xl">{display}</p>
      <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-wide text-white/60 sm:text-xs">{stat.label}</p>
    </motion.div>
  );
}

export function DmHeroStats({ stats }: { stats: readonly Stat[] }) {
  return (
    <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
      {stats.map((stat, i) => (
        <StatItem key={stat.label} stat={stat} index={i} />
      ))}
    </div>
  );
}
