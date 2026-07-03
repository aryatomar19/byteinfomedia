"use client";

import Link from "next/link";
import { memo } from "react";
import { ArrowRight } from "lucide-react";

type ServiceItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
};

const ServiceCard = memo(function ServiceCard({ item }: { item: ServiceItem }) {
  return (
    <article className="dm-svc-card group">
      <div className="dm-svc-card__visual">
        <img
          src={item.image}
          alt={item.imageAlt}
          className="dm-svc-card__img"
          width={600}
          height={600}
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
    </article>
  );
});

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
      className="dm-services-section relative"
      aria-labelledby="dm-services-heading"
    >
      <div className="dm-svc-container">
        <header className="dm-svc-header mx-auto max-w-3xl text-center">
          <h2 id="dm-services-heading" className="dm-svc-heading">
            {title}
          </h2>
          <p className="dm-svc-subheading">{subheading}</p>
          <span className="dm-svc-heading__underline" aria-hidden />
        </header>

        <div className="dm-svc-grid">
          {items.map((item) => (
            <ServiceCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
