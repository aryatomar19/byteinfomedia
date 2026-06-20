"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTilt } from "@/lib/use-tilt";

type CaseStudy = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  metric: string;
  tag: string;
};

function RailCard({ item, index }: { item: CaseStudy; index: number }) {
  const { ref, onMove, onLeave } = useTilt({ max: 6, scale: 1.01 });

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      className="bs-rail-card shrink-0 snap-center"
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="bs-case-card group relative h-full overflow-hidden rounded-3xl transition duration-300"
      >
        <div className="relative h-72 overflow-hidden sm:h-80">
          <motion.img
            src={item.image}
            alt={item.imageAlt}
            className="h-full w-full object-cover"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.7 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111]/90 via-[#111]/30 to-transparent" />

          <motion.div
            className="absolute right-5 top-5 rounded-2xl border border-white/20 bg-white/95 px-4 py-3 text-center shadow-lg backdrop-blur-sm"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
          >
            <p className="text-2xl font-extrabold text-[#FF6B2C]">{item.metric}</p>
            <p className="text-[0.65rem] font-bold uppercase tracking-wider text-[#666]">{item.tag}</p>
          </motion.div>
        </div>

        <div className="relative bg-white p-6 sm:p-7">
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#FF6B2C]">Case Study</span>
          <h3 className="mt-2 text-2xl font-extrabold text-[#111]">{item.title}</h3>
          <p className="mt-2 text-sm leading-7 text-[#666]">{item.description}</p>
          <Link
            href="/book-consultation/"
            className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#FF6B2C]"
          >
            View Project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export function BrandingCaseStudiesRail({
  title,
  items,
}: {
  title: string;
  items: readonly CaseStudy[];
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgX = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section ref={sectionRef} className="bs-section bs-case-rail relative overflow-hidden">
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{ x: bgX }}
        aria-hidden
      >
        <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#FF6B2C]/10 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#111]/5 blur-3xl" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B2C]">Results</span>
            <h2 className="bs-section-title mt-2">{title}</h2>
          </div>
          <p className="text-sm text-[#666]">Scroll to explore →</p>
        </div>
      </div>

      <div className="bs-rail-track mt-10 flex gap-6 overflow-x-auto px-4 pb-4 pt-2 snap-x snap-mandatory scroll-smooth sm:px-6 lg:px-[max(1rem,calc((100vw-80rem)/2+2rem))]">
        {items.map((item, index) => (
          <RailCard key={item.title} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
