"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { DmGsapReveal } from "@/components/digital-marketing/DmGsapReveal";

type ServiceItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  bullets: readonly string[];
};

function ServiceCard({ item, index }: { item: ServiceItem; index: number }) {
  return (
    <DmGsapReveal delay={index * 0.06} y={24} className="h-full">
      <motion.article
        className="dm-svc-card group flex h-full flex-col"
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 340, damping: 26 }}
      >
        <div className="dm-svc-card__visual">
          <img
            src={item.image}
            alt={item.imageAlt}
            className="dm-svc-card__img"
            loading="lazy"
          />
        </div>

        <div className="dm-svc-card__body">
          <h3 className="dm-svc-card__title">{item.title}</h3>
          <p className="dm-svc-card__desc">{item.description}</p>

          <ul className="dm-svc-card__features">
            {item.bullets.map((bullet) => (
              <li key={bullet}>
                <span className="dm-svc-card__arrow" aria-hidden>
                  →
                </span>
                {bullet}
              </li>
            ))}
          </ul>

          <Link href={item.href} scroll className="dm-svc-card__link group/link mt-auto">
            Learn More
            <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </motion.article>
    </DmGsapReveal>
  );
}

export function DmServicesPremium({
  title,
  subheading,
  items,
}: {
  title: string;
  subheading: string;
  items: readonly ServiceItem[];
}) {
  return (
    <section
      id="dm-services"
      className="dm-section dm-services-section relative overflow-hidden"
      style={{ background: "#F8F9FC" }}
      aria-labelledby="dm-services-heading"
    >
      <div className="dm-svc-container">
        <DmGsapReveal className="mx-auto mb-10 max-w-3xl text-center lg:mb-12">
          <h2 id="dm-services-heading" className="dm-heading dm-heading--xl text-[#0A0F1C]">
            {title}
          </h2>
          <p className="mt-3 text-base leading-7 text-[#0A0F1C]/60 sm:text-lg">{subheading}</p>
        </DmGsapReveal>

        <div className="dm-svc-grid">
          {items.map((item, index) => (
            <ServiceCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
