"use client";

import { BarChart3, LineChart, Search, Share2, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";

const DASHBOARD_WIDGETS = [
  {
    icon: Search,
    label: "SEO",
    value: "Top 3",
    sub: "Rankings",
    x: "6%",
    y: "10%",
    delay: 0,
  },
  {
    icon: BarChart3,
    label: "Analytics",
    value: "Live",
    sub: "Dashboard",
    x: "68%",
    y: "8%",
    delay: 0.4,
  },
  {
    icon: TrendingUp,
    label: "ROI",
    value: "300%",
    sub: "Growth",
    x: "72%",
    y: "58%",
    delay: 0.8,
  },
  {
    icon: Users,
    label: "Leads",
    value: "2.4k",
    sub: "Generated",
    x: "8%",
    y: "55%",
    delay: 0.2,
  },
  {
    icon: Share2,
    label: "Social",
    value: "3.2x",
    sub: "Engagement",
    x: "58%",
    y: "78%",
    delay: 1,
  },
  {
    icon: LineChart,
    label: "Traffic",
    value: "+84%",
    sub: "Website",
    x: "12%",
    y: "82%",
    delay: 0.6,
  },
] as const;

function GlassWidget({
  icon: Icon,
  label,
  value,
  sub,
  x,
  y,
  delay,
}: (typeof DASHBOARD_WIDGETS)[number]) {
  return (
    <motion.div
      className="dm-why-widget pointer-events-none absolute min-w-[108px] rounded-2xl border border-white/15 bg-white/10 px-3 py-2.5 backdrop-blur-md"
      style={{ left: x, top: y }}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 5 + delay, repeat: Infinity, ease: "easeInOut", delay }}
      aria-hidden
    >
      <div className="flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FF6B2C]/20">
          <Icon className="h-3.5 w-3.5 text-[#FF6B2C]" />
        </span>
        <span className="text-[0.6rem] font-bold uppercase tracking-wider text-white/55">{label}</span>
      </div>
      <p className="mt-1.5 text-lg font-extrabold leading-none text-white">{value}</p>
      <p className="mt-0.5 text-[0.6rem] font-semibold text-[#FF6B2C]/90">{sub}</p>
    </motion.div>
  );
}

export function DmWhyVisual({ image, imageAlt }: { image: string; imageAlt: string }) {
  return (
    <div className="dm-why-visual relative h-full min-h-[400px] sm:min-h-[460px] lg:min-h-[540px]">
      <div
        className="pointer-events-none absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br from-[#FF6B2C]/30 via-[#3B82F6]/10 to-[#3B82F6]/25 blur-3xl"
        aria-hidden
      />

      <motion.div
        className="dm-why-visual__frame relative h-full min-h-[inherit] overflow-hidden rounded-3xl border border-white/10"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src={image}
          alt={imageAlt}
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="lazy"
          decoding="async"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1C]/55 via-[#0A0F1C]/25 to-[#0A0F1C]/65" aria-hidden />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,107,44,0.15),transparent_55%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_70%,rgba(59,130,246,0.18),transparent_50%)]"
          aria-hidden
        />

        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          {DASHBOARD_WIDGETS.map((widget) => (
            <GlassWidget key={widget.label} {...widget} />
          ))}
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0A0F1C]/80 to-transparent" aria-hidden />
      </motion.div>
    </div>
  );
}
