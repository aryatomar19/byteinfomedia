"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Check,
  LineChart,
  Shield,
  Target,
  Users,
} from "lucide-react";
import { DmGsapReveal } from "@/components/digital-marketing/DmGsapReveal";

const trustIcons: LucideIcon[] = [Target, Users, BarChart3, LineChart, Shield];

type WhyByteContent = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  trustIndicators: readonly string[];
  highlightStats: readonly { value: string; label: string }[];
};

export function DmWhyTrustSection({
  title,
  description,
  image,
  imageAlt,
  trustIndicators,
  highlightStats,
}: WhyByteContent) {
  return (
    <section
      id="dm-why"
      className="dm-section dm-why-trust relative overflow-hidden"
      style={{ background: "#060B23" }}
      aria-labelledby="dm-why-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_40%,rgba(255,107,53,0.08),transparent_50%)]" aria-hidden />

      <div className="dm-container relative">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <DmGsapReveal y={40}>
            <motion.div
              className="dm-why-image dm-why-image--clear group overflow-hidden rounded-3xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative aspect-[5/6] overflow-hidden lg:aspect-[4/5]">
                <img
                  src={image}
                  alt={imageAlt}
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.05]"
                  loading="eager"
                />
              </div>
            </motion.div>
          </DmGsapReveal>

          <DmGsapReveal y={32}>
            <h2 id="dm-why-heading" className="dm-heading dm-heading--2xl max-w-xl text-white">
              {title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">{description}</p>

            <ul className="mt-8 space-y-3">
              {trustIndicators.map((item, index) => {
                const Icon = trustIcons[index] ?? Check;
                return (
                  <li key={item} className="flex items-center gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FF6B35]/12">
                      <Icon className="h-5 w-5 text-[#FF6B35]" strokeWidth={2} />
                    </span>
                    <span className="text-base font-semibold text-white/90">{item}</span>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-8 sm:grid-cols-4 sm:gap-5">
              {highlightStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.45 }}
                >
                  <p className="text-2xl font-extrabold text-[#FF6B35] sm:text-3xl">{stat.value}</p>
                  <p className="mt-1.5 text-[0.65rem] font-semibold uppercase tracking-wider text-white/45 sm:text-xs">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </DmGsapReveal>
        </div>
      </div>
    </section>
  );
}
