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

    const target = stat.value;
    const duration = 520;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.round(target * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
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
