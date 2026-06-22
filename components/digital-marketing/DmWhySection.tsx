"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  LineChart,
  Sprout,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { DmGsapReveal } from "@/components/digital-marketing/DmGsapReveal";
import { DmWhyFeatureCard } from "@/components/digital-marketing/DmWhyFeatureCard";
import { DmWhyScene } from "@/components/digital-marketing/DmWhyScene";

const icons: LucideIcon[] = [Users, LineChart, BarChart3, TrendingUp, Target, Sprout];

type Stat = {
  value: number | null;
  suffix?: string;
  display?: string;
  label: string;
};

export function DmWhySection({
  title,
  imageAlt,
  stats,
  features,
}: {
  title: string;
  imageAlt: string;
  stats: readonly Stat[];
  features: readonly { title: string; description: string }[];
}) {
  return (
    <section
      className="dm-section dm-why-premium relative overflow-hidden"
      style={{ background: "#050B1F" }}
      aria-labelledby="dm-why-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(255,107,44,0.08),transparent_50%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_70%,rgba(59,130,246,0.06),transparent_45%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 grid-pattern-light opacity-[0.05]" aria-hidden />

      <div className="dm-container relative">
        <DmGsapReveal className="mx-auto mb-10 max-w-3xl text-center lg:mb-12">
          <span className="dm-eyebrow dm-eyebrow--light">Why Us</span>
          <h2 id="dm-why-heading" className="dm-heading mt-3 text-white">
            {title}
          </h2>
        </DmGsapReveal>

        <DmGsapReveal y={28}>
          <div className="dm-why-stats-bar mb-12 lg:mb-14">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-4">
              {stats.map((stat, index) => {
                const display = stat.display ?? `${stat.value}${stat.suffix ?? ""}`;
                return (
                  <motion.div
                    key={stat.label}
                    className="dm-why-stat relative bg-[#050B1F]/80 px-4 py-5 text-center backdrop-blur-md sm:px-6 sm:py-6"
                    whileHover={{ backgroundColor: "rgba(255,107,44,0.06)" }}
                  >
                    <motion.p
                      className="text-2xl font-extrabold text-[#FF6B2C] sm:text-3xl lg:text-4xl"
                      animate={{ textShadow: ["0 0 0px rgba(255,107,44,0)", "0 0 20px rgba(255,107,44,0.35)", "0 0 0px rgba(255,107,44,0)"] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.4,
                      }}
                    >
                      {display}
                    </motion.p>
                    <p className="mt-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white/55 sm:text-xs">
                      {stat.label}
                    </p>
                    <motion.span
                      className="dm-why-stat__ring pointer-events-none absolute inset-3 rounded-xl border border-[#FF6B2C]/0"
                      animate={{ borderColor: ["rgba(255,107,44,0)", "rgba(255,107,44,0.2)", "rgba(255,107,44,0)"] }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3,
                      }}
                      aria-hidden
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </DmGsapReveal>

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <DmGsapReveal y={40}>
            <DmWhyScene imageAlt={imageAlt} />
          </DmGsapReveal>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            {features.map((feature, index) => {
              const Icon = icons[index] ?? Users;
              return (
                <DmGsapReveal key={feature.title} delay={index * 0.07} y={28} className="h-full">
                  <DmWhyFeatureCard
                    icon={Icon}
                    title={feature.title}
                    description={feature.description}
                    index={index}
                  />
                </DmGsapReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
