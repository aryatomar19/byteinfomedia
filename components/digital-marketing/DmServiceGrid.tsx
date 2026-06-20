"use client";

import Link from "next/link";
import { ArrowRight, FileText, Globe, Search, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  website: Globe,
  seo: Search,
  content: FileText,
  social: Share2,
};

type Service = {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
};

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = icons[service.id] ?? Globe;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="h-full"
    >
      <div className="dm-service-card group flex h-full min-h-[420px] flex-col overflow-hidden rounded-3xl">
        <div className="dm-service-card__image relative h-52 shrink-0 overflow-hidden sm:h-56">
          <img
            src={service.image}
            alt={service.imageAlt}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/90 via-[#0A0F1C]/40 to-[#0A0F1C]/20 transition duration-500 group-hover:from-[#0A0F1C]/95" />
          <span className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF6B2C] shadow-[0_8px_24px_rgba(255,107,44,0.4)] transition duration-300 group-hover:shadow-[0_12px_32px_rgba(255,107,44,0.55)]">
            <Icon className="h-6 w-6 text-white" />
          </span>
        </div>
        <div className="flex flex-1 flex-col bg-[#121a2e] p-6 sm:p-7">
          <h3 className="text-xl font-extrabold text-white">{service.title}</h3>
          <p className="mt-3 flex-1 text-sm leading-7 text-white/65">{service.description}</p>
          <Link
            href={service.href}
            scroll
            className="dm-learn-more mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#FF6B2C]"
          >
            Learn More
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export function DmServiceGrid({ title, items }: { title: string; items: readonly Service[] }) {
  return (
    <section id="dm-services" className="dm-section dm-section--dark relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,107,44,0.08),transparent_55%)]" aria-hidden />
      <div className="dm-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="dm-eyebrow dm-eyebrow--light">Services</span>
          <h2 className="dm-heading mt-3 text-white">{title}</h2>
        </motion.div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {items.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
