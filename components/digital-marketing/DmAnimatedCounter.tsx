"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export type CounterStat = {
  value: number | null;
  suffix?: string;
  display?: string;
  label: string;
};

export function DmAnimatedCounter({
  stat,
  index,
  className = "",
}: {
  stat: CounterStat;
  index: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView || stat.value === null) return;
    let frame = 0;
    const total = 48;
    const inc = stat.value / total;
    const timer = window.setInterval(() => {
      frame += 1;
      if (frame >= total) {
        setCount(stat.value!);
        window.clearInterval(timer);
        return;
      }
      setCount(Math.round(inc * frame));
    }, 20);
    return () => window.clearInterval(timer);
  }, [isInView, stat.value]);

  const display = stat.display ?? `${count}${stat.suffix ?? ""}`;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      <motion.p
        className="text-3xl font-extrabold text-[#FF6B2C] sm:text-4xl lg:text-5xl"
        animate={
          isInView
            ? { textShadow: ["0 0 0px rgba(255,107,44,0)", "0 0 24px rgba(255,107,44,0.4)", "0 0 0px rgba(255,107,44,0)"] }
            : {}
        }
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.35 }}
      >
        {display}
      </motion.p>
      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/55 sm:text-sm">
        {stat.label}
      </p>
    </motion.div>
  );
}
