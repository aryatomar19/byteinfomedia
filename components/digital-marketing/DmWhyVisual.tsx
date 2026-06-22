"use client";

import { BarChart3, LineChart, Search, Share2, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const FLOATING_ICONS = [
  { Icon: Search, x: "54%", y: "16%", delay: 0 },
  { Icon: BarChart3, x: "80%", y: "28%", delay: 0.5 },
  { Icon: LineChart, x: "70%", y: "50%", delay: 0.9 },
  { Icon: Share2, x: "48%", y: "38%", delay: 0.3 },
  { Icon: TrendingUp, x: "84%", y: "58%", delay: 1.2 },
] as const;

function FloatingIcon({
  Icon,
  x,
  y,
  delay,
}: {
  Icon: typeof Search;
  x: string;
  y: string;
  delay: number;
}) {
  return (
    <motion.span
      className="dm-why-icon-float pointer-events-none absolute flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md"
      style={{ left: x, top: y }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4.5 + delay, repeat: Infinity, ease: "easeInOut", delay }}
      aria-hidden
    >
      <Icon className="h-5 w-5 text-[#FF6B2C]" />
    </motion.span>
  );
}

export function DmWhyVisual({
  image,
  characterImage,
  imageAlt,
}: {
  image: string;
  characterImage: string;
  imageAlt: string;
}) {
  return (
    <div className="dm-why-visual relative h-full min-h-[400px] sm:min-h-[460px] lg:min-h-[540px]">
      <div
        className="pointer-events-none absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br from-[#FF6B2C]/25 via-[#3B82F6]/8 to-[#3B82F6]/20 blur-3xl"
        aria-hidden
      />

      <motion.div
        className="dm-why-visual__frame relative h-full min-h-[inherit] overflow-hidden rounded-3xl border border-white/10"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src={image}
          alt={imageAlt}
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="lazy"
          decoding="async"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1C]/45 via-[#0A0F1C]/15 to-[#0A0F1C]/55" aria-hidden />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_75%,rgba(255,107,44,0.18),transparent_50%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_25%,rgba(59,130,246,0.15),transparent_48%)]"
          aria-hidden
        />

        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          {FLOATING_ICONS.map(({ Icon, x, y, delay }) => (
            <FloatingIcon key={x} Icon={Icon} x={x} y={y} delay={delay} />
          ))}
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 z-20 w-[38%] min-w-[130px] max-w-[240px] sm:min-w-[160px] sm:max-w-[260px]">
          <div
            className="absolute -inset-6 rounded-full bg-gradient-to-br from-[#FF6B2C]/35 via-[#3B82F6]/15 to-[#3B82F6]/30 blur-2xl"
            aria-hidden
          />
          <motion.img
            src={characterImage}
            alt=""
            className="relative z-10 w-full object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          />
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0A0F1C]/70 to-transparent" aria-hidden />
      </motion.div>
    </div>
  );
}
