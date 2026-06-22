"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  FileText,
  Globe,
  Megaphone,
  Search,
  Share2,
} from "lucide-react";
import { DmGsapReveal } from "@/components/digital-marketing/DmGsapReveal";
import { Button } from "@/components/ui/button";

const icons: Record<string, LucideIcon> = {
  seo: Search,
  "google-ads": Megaphone,
  social: Share2,
  content: FileText,
  website: Globe,
  analytics: BarChart3,
};

type ServiceItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  bullets: readonly string[];
};

function ServiceCard({ item, index }: { item: ServiceItem; index: number }) {
  const Icon = icons[item.id] ?? Search;

  return (
    <DmGsapReveal delay={index * 0.07} y={40} className="h-full">
      <motion.article
        className="dm-service-premium group flex h-full flex-col rounded-3xl p-7 sm:p-8 lg:p-9"
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 340, damping: 26 }}
      >
        <span className="dm-service-premium__icon flex h-14 w-14 items-center justify-center rounded-2xl">
          <Icon className="h-6 w-6 text-[#FF6B2C]" strokeWidth={2} />
        </span>

        <h3 className="mt-6 text-2xl font-extrabold text-white">{item.title}</h3>
        <p className="mt-3 text-sm leading-7 text-white/55 sm:text-base">{item.description}</p>

        <ul className="mt-6 flex-1 space-y-2.5">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex items-center gap-2.5 text-sm text-white/70">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF6B2C]" />
              {bullet}
            </li>
          ))}
        </ul>

        <Button
          asChild
          variant="outline"
          className="dm-service-premium__cta mt-8 w-full rounded-xl border-white/15 bg-transparent font-bold text-white hover:border-[#FF6B2C]/50 hover:bg-[#FF6B2C]/10 hover:text-white"
        >
          <Link href={item.href} scroll>
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
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
      className="dm-section dm-services-premium-section relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #050B24 0%, #070D1F 100%)" }}
      aria-labelledby="dm-services-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,107,44,0.06),transparent_55%)]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 grid-pattern-light opacity-[0.03]" aria-hidden />

      <div className="dm-container relative">
        <DmGsapReveal className="mx-auto mb-14 max-w-3xl text-center lg:mb-16">
          <h2 id="dm-services-heading" className="dm-heading text-white">
            {title}
          </h2>
          <p className="mt-4 text-base leading-7 text-white/55 sm:text-lg">{subheading}</p>
        </DmGsapReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 xl:grid-cols-3">
          {items.map((item, index) => (
            <ServiceCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
