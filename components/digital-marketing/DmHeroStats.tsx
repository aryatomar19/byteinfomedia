"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

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
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.08 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="dm-hero-stat rounded-2xl px-4 py-4 text-center"
    >
      <p className="text-2xl font-extrabold text-[#FF6B2C] sm:text-3xl">{display}</p>
      <p className="mt-1 text-xs font-semibold text-white/70">{stat.label}</p>
    </motion.div>
  );
}

export function DmHeroStats({ stats }: { stats: readonly Stat[] }) {
  return (
    <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
      {stats.map((stat, i) => (
        <StatItem key={stat.label} stat={stat} index={i} />
      ))}
    </div>
  );
}
