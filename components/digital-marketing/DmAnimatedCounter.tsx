"use client";

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
  const [isInView, setIsInView] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-60px", threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView || stat.value === null) return;

    let frame = 0;
    const total = 32;
    const inc = stat.value / total;
    const timer = window.setInterval(() => {
      frame += 1;
      if (frame >= total) {
        setCount(stat.value!);
        window.clearInterval(timer);
        return;
      }
      setCount(Math.round(inc * frame));
    }, 16);

    return () => window.clearInterval(timer);
  }, [isInView, stat.value]);

  const display = stat.display ?? `${count}${stat.suffix ?? ""}`;

  return (
    <div ref={ref} className={className} style={{ transitionDelay: `${index * 40}ms` }}>
      <p className="text-3xl font-extrabold text-[#FF6B2C] sm:text-4xl lg:text-5xl">{display}</p>
      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/55 sm:text-sm">
        {stat.label}
      </p>
    </div>
  );
}
