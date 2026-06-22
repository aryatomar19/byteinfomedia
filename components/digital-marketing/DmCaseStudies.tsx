"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { DmGsapReveal } from "@/components/digital-marketing/DmGsapReveal";

type CaseStudy = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  metric: string;
  tag: string;
};

function CaseCard({ item, index }: { item: CaseStudy; index: number }) {
  return (
    <motion.article
      whileHover={{ y: -10 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="dm-case-card group flex h-full min-h-[460px] flex-col overflow-hidden rounded-3xl"
    >
      <div className="relative h-56 shrink-0 overflow-hidden sm:h-64">
        <img
          src={item.image}
          alt={item.imageAlt}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/95 via-[#0A0F1C]/35 to-transparent" />
        <div className="absolute right-5 top-5 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-center backdrop-blur-md">
          <p className="text-2xl font-extrabold text-[#FF6B2C]">{item.metric}</p>
          <p className="text-[0.65rem] font-bold uppercase tracking-wider text-white/60">{item.tag}</p>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#FF6B2C]">Success Story</span>
        <h3 className="mt-2 text-xl font-extrabold text-white sm:text-2xl">{item.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-white/65">{item.description}</p>
        <Link
          href="/book-consultation/"
          className="dm-learn-more mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#FF6B2C]"
        >
          View Results
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
        </Link>
      </div>
    </motion.article>
  );
}

export function DmCaseStudies({
  title,
  items,
}: {
  title: string;
  items: readonly CaseStudy[];
}) {
  return (
    <section className="dm-section dm-section--dark relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(255,107,44,0.08),transparent_55%)]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 grid-pattern-light opacity-[0.1]" aria-hidden />
      <div className="dm-container relative">
        <DmGsapReveal className="mx-auto mb-12 max-w-3xl text-center">
          <span className="dm-eyebrow dm-eyebrow--light">Case Studies</span>
          <h2 className="dm-heading mt-3 text-white">{title}</h2>
        </DmGsapReveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {items.map((item, index) => (
            <DmGsapReveal key={item.title} delay={index * 0.08} y={40}>
              <CaseCard item={item} index={index} />
            </DmGsapReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
