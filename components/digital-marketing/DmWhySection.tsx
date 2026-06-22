"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { BarChart3, LineChart, Target, Users, Wallet, Wrench } from "lucide-react";
import { DmGsapReveal } from "@/components/digital-marketing/DmGsapReveal";
import { DmWhyVisual } from "@/components/digital-marketing/DmWhyVisual";

const icons: LucideIcon[] = [Users, LineChart, BarChart3, Wallet, Target, Wrench];

type Stat = {
  value: number | null;
  suffix?: string;
  display?: string;
  label: string;
};

export function DmWhySection({
  title,
  image,
  imageAlt,
  stats,
  features,
}: {
  title: string;
  image: string;
  imageAlt: string;
  stats: readonly Stat[];
  features: readonly { title: string; description: string }[];
}) {
  return (
    <section className="dm-section dm-section--dark dm-why-section relative overflow-hidden">
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse at 80% 50%, rgba(255,107,44,0.1), transparent 50%)",
            "radial-gradient(ellipse at 70% 40%, rgba(59,130,246,0.12), transparent 52%)",
            "radial-gradient(ellipse at 80% 50%, rgba(255,107,44,0.1), transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 grid-pattern-light opacity-[0.08]" aria-hidden />

      <div className="dm-container relative">
        <DmGsapReveal className="mx-auto mb-10 max-w-3xl text-center lg:mb-14">
          <span className="dm-eyebrow dm-eyebrow--light">Why Us</span>
          <h2 className="dm-heading mt-3 text-white">{title}</h2>
        </DmGsapReveal>

        <DmGsapReveal y={32}>
          <div className="dm-stat-band mb-12 grid grid-cols-2 gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md sm:grid-cols-4 sm:gap-6 sm:p-6 lg:mb-16">
            {stats.map((stat) => {
              const display = stat.display ?? `${stat.value}${stat.suffix ?? ""}`;
              return (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="text-center"
                >
                  <p className="text-3xl font-extrabold text-[#FF6B2C] sm:text-4xl">{display}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/60">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </DmGsapReveal>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <DmGsapReveal y={40}>
            <DmWhyVisual image={image} imageAlt={imageAlt} />
          </DmGsapReveal>

          <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5">
            {features.map((feature, index) => {
              const Icon = icons[index] ?? Users;
              return (
                <DmGsapReveal key={feature.title} delay={index * 0.06} y={32} className="h-full">
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    whileHover={{ y: -8, scale: 1.03 }}
                    transition={{
                      y: { delay: index * 0.4, duration: 4 + index * 0.2, repeat: Infinity, ease: "easeInOut" },
                    }}
                    className="dm-why-card group flex h-full min-h-[180px] flex-col items-center rounded-2xl p-5 text-center"
                  >
                    <span className="dm-why-icon flex h-12 w-12 items-center justify-center rounded-xl">
                      <Icon className="h-5 w-5 text-[#FF6B2C]" />
                    </span>
                    <h3 className="mt-4 font-extrabold text-white">{feature.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-6 text-white/60">{feature.description}</p>
                  </motion.div>
                </DmGsapReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
