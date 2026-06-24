"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Globe,
  LayoutDashboard,
  LineChart,
  Megaphone,
  Search,
  Share2,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

type SpecialityIcon =
  | "branding"
  | "digital-marketing"
  | "mobile-marketing"
  | "online-marketing"
  | "sem"
  | "paid-marketing"
  | "seo"
  | "social-media";

type SpecialityVariant = "orange" | "white";
type SpecialitySize = "tall" | "medium";

type SpecialityItem = {
  id: string;
  title: string;
  description: string;
  icon: SpecialityIcon;
  variant: SpecialityVariant;
  size: SpecialitySize;
};

const iconMap: Record<SpecialityIcon, LucideIcon> = {
  branding: BadgeCheck,
  "digital-marketing": LayoutDashboard,
  "mobile-marketing": Smartphone,
  "online-marketing": Globe,
  sem: Search,
  "paid-marketing": Megaphone,
  seo: LineChart,
  "social-media": Share2,
};

function SpecialityCard({ item, index }: { item: SpecialityItem; index: number }) {
  const Icon = iconMap[item.icon];

  return (
    <motion.article
      className={`dm-speciality-card dm-speciality-card--${item.variant} dm-speciality-card--${item.size}`}
      initial={{ y: 28 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, scale: 1.03 }}
    >
      <div className={`dm-speciality-card__icon dm-speciality-card__icon--${item.variant}`}>
        <Icon className="dm-speciality-card__icon-svg" aria-hidden />
      </div>
      <div className="dm-speciality-card__body">
        <h3 className="dm-speciality-card__title">{item.title}</h3>
        <p className="dm-speciality-card__desc">{item.description}</p>
      </div>
    </motion.article>
  );
}

export function DmSpecialitySection({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: readonly SpecialityItem[];
}) {
  return (
    <section
      id="dm-speciality"
      className="dm-section dm-speciality-section relative overflow-hidden bg-white"
      aria-labelledby="dm-speciality-heading"
    >
      <div className="dm-container relative">
        <motion.header
          className="dm-speciality-header mx-auto mb-10 max-w-3xl text-center lg:mb-14"
          initial={{ y: 24 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="dm-speciality-eyebrow">{eyebrow}</span>
          <h2 id="dm-speciality-heading" className="dm-speciality-heading">
            {title}
            <span className="dm-speciality-heading__underline" aria-hidden />
          </h2>
        </motion.header>

        <div className="dm-speciality-masonry">
          {items.map((item, index) => (
            <SpecialityCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
