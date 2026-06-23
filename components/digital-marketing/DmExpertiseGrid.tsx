"use client";

import { motion } from "framer-motion";
import { DmGsapReveal } from "@/components/digital-marketing/DmGsapReveal";

type ExpertiseItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  size: "tall" | "medium" | "short";
};

const sizeClasses: Record<ExpertiseItem["size"], string> = {
  tall: "dm-expertise-masonry-card--tall",
  medium: "dm-expertise-masonry-card--medium",
  short: "dm-expertise-masonry-card--short",
};

function ExpertiseCard({ item, index }: { item: ExpertiseItem; index: number }) {
  return (
    <DmGsapReveal delay={index * 0.05} y={32} className="dm-expertise-masonry-item mb-6 break-inside-avoid md:mb-8">
      <motion.article
        className={`dm-expertise-masonry-card dm-expertise-masonry-card--light group ${sizeClasses[item.size]}`}
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 320, damping: 24 }}
      >
        <div className="dm-expertise-masonry-card__visual relative overflow-hidden">
          <img
            src={item.image}
            alt={item.imageAlt}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="dm-expertise-masonry-card__content dm-expertise-masonry-card__content--light">
          <h3 className="text-xl font-extrabold text-[#0A0F1C]">{item.title}</h3>
          <p className="mt-2 text-sm leading-7 text-[#0A0F1C]/60">{item.description}</p>
        </div>
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
      className="dm-section dm-section--xl dm-expertise-section dm-section--white relative overflow-hidden bg-white"
      aria-labelledby="dm-expertise-heading"
    >
      <div className="dm-container relative">
        <DmGsapReveal className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <h2 id="dm-expertise-heading" className="dm-heading dm-heading--xl text-[#0A0F1C]">
            {title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#0A0F1C]/60">{subheading}</p>
        </DmGsapReveal>

        <div className="dm-expertise-masonry columns-1 gap-6 md:columns-2 md:gap-8 lg:columns-4">
          {items.map((item, index) => (
            <ExpertiseCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
