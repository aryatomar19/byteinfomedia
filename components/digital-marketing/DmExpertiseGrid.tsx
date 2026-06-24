"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Code2,
  FilePenLine,
  Filter,
  LineChart,
  Megaphone,
  Share2,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { DmGsapReveal } from "@/components/digital-marketing/DmGsapReveal";

type ExpertiseIcon = "seo" | "google-ads" | "social" | "content" | "website" | "analytics" | "leads" | "brand";
type ExpertiseColor = "green" | "orange" | "blue" | "purple" | "pink" | "cyan" | "yellow";

type ExpertiseItem = {
  id: string;
  title: string;
  description: string;
  icon: ExpertiseIcon;
  color: ExpertiseColor;
};

const iconMap: Record<ExpertiseIcon, LucideIcon> = {
  seo: LineChart,
  "google-ads": Megaphone,
  social: Share2,
  content: FilePenLine,
  website: Code2,
  analytics: BarChart3,
  leads: Filter,
  brand: TrendingUp,
};

function ExpertiseCard({ item }: { item: ExpertiseItem }) {
  const Icon = iconMap[item.icon];

  return (
    <motion.article
      className={`dm-expertise-agency-card dm-expertise-agency-card--${item.color} group h-full`}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 360, damping: 28 }}
    >
      <div className={`dm-expertise-agency-card__icon dm-expertise-agency-card__icon--${item.color}`}>
        <Icon className="dm-expertise-agency-card__icon-svg" aria-hidden />
      </div>
      <div className="dm-expertise-agency-card__body">
        <h3 className="dm-expertise-agency-card__title">{item.title}</h3>
        <p className="dm-expertise-agency-card__desc">{item.description}</p>
        <span className={`dm-expertise-agency-card__accent dm-expertise-agency-card__accent--${item.color}`} aria-hidden />
      </div>
    </motion.article>
  );
}

export function DmExpertiseGrid({
  eyebrow,
  title,
  subheading,
  items,
}: {
  eyebrow: string;
  title: string;
  subheading: string;
  items: readonly ExpertiseItem[];
}) {
  return (
    <section
      id="dm-expertise"
      className="dm-section dm-expertise-section dm-section--white relative overflow-hidden bg-white"
      aria-labelledby="dm-expertise-heading"
    >
      <div className="dm-container relative">
        <DmGsapReveal className="mx-auto mb-10 max-w-3xl text-center lg:mb-12">
          <span className="dm-eyebrow">{eyebrow}</span>
          <h2 id="dm-expertise-heading" className="dm-heading dm-heading--xl mt-3 text-[#0A0F1C]">
            {title}
          </h2>
          <p className="mt-4 text-base leading-7 text-[#0A0F1C]/60 sm:text-lg">{subheading}</p>
        </DmGsapReveal>

        <div className="dm-expertise-agency-grid">
          {items.map((item) => (
            <ExpertiseCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
