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

type ExpertiseItem = {
  id: string;
  title: string;
  description: string;
};

function ExpertiseCard({ item, index }: { item: ExpertiseItem; index: number }) {
  const Icon = icons[item.id] ?? Search;

  return (
    <DmGsapReveal delay={index * 0.06} y={36} className="h-full">
      <motion.article
        className="dm-expertise-card group flex h-full min-h-[220px] flex-col rounded-3xl p-8 sm:min-h-[240px] sm:p-9"
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 340, damping: 26 }}
      >
        <span className="dm-expertise-icon flex h-14 w-14 items-center justify-center rounded-2xl">
          <Icon className="h-6 w-6 text-[#FF6B2C]" strokeWidth={2} />
        </span>
        <h3 className="mt-6 text-2xl font-extrabold text-white">{item.title}</h3>
        <p className="mt-4 flex-1 text-base leading-8 text-white/55">{item.description}</p>
        <span
          className="pointer-events-none mt-8 h-px w-0 bg-gradient-to-r from-[#FF6B2C] to-transparent transition-all duration-500 group-hover:w-full"
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
      className="dm-section dm-section--xl dm-expertise-section relative overflow-hidden"
      style={{ background: "#050B24" }}
      aria-labelledby="dm-expertise-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(59,130,246,0.06),transparent_50%)]" aria-hidden />

      <div className="dm-container relative">
        <DmGsapReveal className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
          <h2 id="dm-expertise-heading" className="dm-heading dm-heading--xl text-white">
            {title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/55">{subheading}</p>
        </DmGsapReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {items.map((item, index) => (
            <ExpertiseCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
