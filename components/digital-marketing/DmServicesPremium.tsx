"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

type ServiceItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
};

function ServiceCard({ item, index }: { item: ServiceItem; index: number }) {
  return (
    <motion.article
      className="dm-svc-card group"
      initial={{ y: 28, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
    >
      <div className="dm-svc-card__visual">
        <img
          src={item.image}
          alt={item.imageAlt}
          className="dm-svc-card__img"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="dm-svc-card__body">
        <h3 className="dm-svc-card__title">{item.title}</h3>
        <p className="dm-svc-card__desc">{item.description}</p>

        <Link href={item.href} scroll className="dm-svc-card__link group/link">
          Learn More
          <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.article>
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
      className="dm-services-section relative overflow-hidden"
      aria-labelledby="dm-services-heading"
    >
      <div className="dm-svc-container">
        <motion.header
          className="dm-svc-header mx-auto max-w-3xl text-center"
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 id="dm-services-heading" className="dm-svc-heading">
            {title}
          </h2>
          <p className="dm-svc-subheading">{subheading}</p>
          <span className="dm-svc-heading__underline" aria-hidden />
        </motion.header>

        <div className="dm-svc-grid">
          {items.map((item, index) => (
            <ServiceCard key={item.id} item={item} index={index} />
          ))}
        </div>

        <p className="dm-svc-attribution">
          Illustrations by{" "}
          <a href="https://storyset.com/" target="_blank" rel="noopener noreferrer">
            Storyset
          </a>
        </p>
      </div>
    </section>
  );
}
