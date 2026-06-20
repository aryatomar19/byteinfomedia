"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type AnimatedMetricProps = {
  value: number | null;
  display?: string;
  suffix?: string;
  label: string;
};

export function AnimatedMetric({ value, display, suffix = "", label }: AnimatedMetricProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView || value === null) return;

    let frame = 0;
    const totalFrames = 48;
    const increment = value / totalFrames;

    const timer = window.setInterval(() => {
      frame += 1;
      if (frame >= totalFrames) {
        setCount(value);
        window.clearInterval(timer);
        return;
      }
      setCount(Math.round(increment * frame));
    }, 24);

    return () => window.clearInterval(timer);
  }, [isInView, value]);

  const displayValue = display ?? `${count}${suffix}`;

  return (
    <div ref={ref} className="text-center">
      <p className="font-[family-name:var(--font-inter)] text-4xl font-extrabold tracking-tight text-[#FF6B2C] sm:text-5xl">
        {displayValue}
      </p>
      <p className="mt-2 text-sm font-semibold leading-snug text-[#0A0F1C] sm:text-base">{label}</p>
    </div>
  );
}
