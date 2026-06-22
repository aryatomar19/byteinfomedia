"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Globe,
  LineChart,
  Megaphone,
  PenLine,
  Search,
  Target,
  TrendingUp,
} from "lucide-react";
import { DmGsapReveal } from "@/components/digital-marketing/DmGsapReveal";

const icons: Record<string, LucideIcon> = {
  seo: Search,
  "google-ads": Megaphone,
  social: TrendingUp,
  content: PenLine,
  website: Globe,
  analytics: BarChart3,
  leads: Target,
  brand: LineChart,
};

const sizeClasses = {
  short: "min-h-[200px]",
  medium: "min-h-[240px] sm:min-h-[260px]",
  tall: "min-h-[280px] sm:min-h-[320px] lg:row-span-2",
};

type ExpertiseItem = {
  id: string;
  title: string;
  description: string;
  size: "short" | "medium" | "tall";
};

function ExpertiseCard({ item, index }: { item: ExpertiseItem; index: number }) {
  const Icon = icons[item.id] ?? Search;

  return (
    <DmGsapReveal delay={index * 0.06} y={32} className={`h-full ${item.size === "tall" ? "lg:row-span-2" : ""}`}>
      <motion.article
        className={`dm-expertise-card group flex h-full flex-col rounded-3xl p-6 sm:p-7 ${sizeClasses[item.size]}`}
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 360, damping: 26 }}
      >
        <span className="dm-expertise-icon flex h-12 w-12 items-center justify-center rounded-2xl">
          <Icon className="h-5 w-5 text-[#FF6B2C]" strokeWidth={2} />
        </span>
        <h3 className="mt-5 text-xl font-extrabold text-white">{item.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-white/55">{item.description}</p>
        <span
          className="pointer-events-none mt-6 h-px w-0 bg-gradient-to-r from-[#FF6B2C] to-transparent transition-all duration-500 group-hover:w-full"
          aria-hidden
        />
      </motion.article>
    </DmGsapReveal>
  );
}

export function DmExpertiseGrid({
  title,
  subheading,
  items,
}: {
  title: string;
  subheading: string;
  items: readonly ExpertiseItem[];
}) {
  return (
    <section
      id="dm-expertise"
      className="dm-section dm-expertise-section relative overflow-hidden"
      style={{ background: "#050B24" }}
      aria-labelledby="dm-expertise-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(59,130,246,0.06),transparent_50%)]" aria-hidden />

      <div className="dm-container relative">
        <DmGsapReveal className="mx-auto mb-14 max-w-3xl text-center">
          <h2 id="dm-expertise-heading" className="dm-heading text-white">
            {title}
          </h2>
          <p className="mt-4 text-base leading-7 text-white/55 sm:text-lg">{subheading}</p>
        </DmGsapReveal>

        <div className="dm-expertise-masonry grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 lg:auto-rows-[minmax(140px,auto)]">
          {items.map((item, index) => (
            <ExpertiseCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
