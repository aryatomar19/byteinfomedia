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
    <DmGsapReveal delay={index * 0.05} y={40} className="dm-expertise-masonry-item mb-6 break-inside-avoid md:mb-8">
      <motion.article
        className={`dm-expertise-masonry-card group ${sizeClasses[item.size]}`}
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 320, damping: 24 }}
      >
        <div className="dm-expertise-masonry-card__visual relative overflow-hidden">
          <img
            src={item.image}
            alt={item.imageAlt}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030B2A] via-[#030B2A]/20 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(255,107,44,0.12),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>

        <div className="dm-expertise-masonry-card__content">
          <h3 className="text-xl font-extrabold text-white sm:text-2xl">{item.title}</h3>
          <p className="mt-2 text-sm leading-7 text-white/55 sm:text-base">{item.description}</p>
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
      className="dm-section dm-section--xl dm-expertise-section relative overflow-hidden"
      style={{ background: "#030B2A" }}
      aria-labelledby="dm-expertise-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_10%,rgba(255,107,44,0.08),transparent_45%)]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_80%,rgba(59,130,246,0.05),transparent_45%)]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 grid-pattern-light opacity-[0.03]" aria-hidden />

      <div className="dm-container relative">
        <DmGsapReveal className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
          <h2 id="dm-expertise-heading" className="dm-heading dm-heading--xl text-white">
            {title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/55">{subheading}</p>
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
