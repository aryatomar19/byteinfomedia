"use client";

import { motion } from "framer-motion";

type SpecialityVariant = "orange" | "white";

type SpecialityItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  variant: SpecialityVariant;
};

function SpecialityCard({ item, index }: { item: SpecialityItem; index: number }) {
  return (
    <motion.article
      className={`dm-speciality-card dm-speciality-card--${item.variant}`}
      initial={{ y: 32 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      <div className="dm-speciality-card__art">
        <div className={`dm-speciality-card__art-frame dm-speciality-card__art-frame--${item.variant}`}>
          <img
            src={item.image}
            alt={item.imageAlt}
            className="dm-speciality-card__illustration"
            loading="lazy"
            decoding="async"
          />
        </div>
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
          className="dm-speciality-header mx-auto mb-12 max-w-3xl text-center lg:mb-16"
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

        <div className="dm-speciality-grid">
          {items.map((item, index) => (
            <SpecialityCard key={item.id} item={item} index={index} />
          ))}
        </div>

        <p className="dm-speciality-attribution">
          Illustrations by{" "}
          <a href="https://storyset.com/" target="_blank" rel="noopener noreferrer">
            Storyset
          </a>
        </p>
      </div>
    </section>
  );
}
