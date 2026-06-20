"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTilt } from "@/lib/use-tilt";

export function BrandingFeaturedStory({
  title,
  project,
  metric,
  metricLabel,
  description,
  image,
  imageAlt,
}: {
  title: string;
  project: string;
  metric: string;
  metricLabel: string;
  description: string;
  image: string;
  imageAlt: string;
}) {
  const { ref, onMove, onLeave } = useTilt({ max: 5, scale: 1.01 });

  return (
    <section className="bs-section relative overflow-hidden">
      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-[#111]/4 blur-3xl" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B2C]">Results</span>
          <h2 className="bs-section-title mt-2">{title}</h2>
        </motion.div>

        <motion.div
          ref={ref}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bs-featured-story group relative overflow-hidden rounded-3xl border border-[#111]/6 shadow-[0_32px_80px_rgba(17,17,17,0.12)]"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="grid lg:grid-cols-[1.3fr_1fr]">
            <div className="relative h-72 overflow-hidden sm:h-96 lg:h-[480px]">
              <motion.img
                src={image}
                alt={imageAlt}
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.8 }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#111]/20 to-[#111]/80 lg:bg-gradient-to-r lg:from-transparent lg:to-[#111]/90" />
              <motion.div
                className="absolute left-6 top-6 rounded-2xl border border-white/20 bg-white/95 px-6 py-4 shadow-xl backdrop-blur-sm sm:left-10 sm:top-10"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-4xl font-extrabold text-[#FF6B2C] sm:text-5xl">{metric}</p>
                <p className="text-sm font-bold uppercase tracking-wider text-[#666]">{metricLabel}</p>
              </motion.div>
            </div>

            <div className="relative flex flex-col justify-center bg-[#111] p-8 sm:p-10 lg:p-12">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#FF6B2C]">{project}</span>
              <h3 className="mt-3 font-[family-name:var(--font-inter)] text-3xl font-extrabold text-white sm:text-4xl">
                {metricLabel}
              </h3>
              <p className="mt-4 max-w-sm text-base leading-7 text-white/70">{description}</p>
              <Link
                href="/book-consultation/"
                className="bs-magnetic-link mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#FF6B2C] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#FF6B2C]/90"
              >
                View Case Study
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
