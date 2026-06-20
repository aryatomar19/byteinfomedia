"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Sparkles, Target, Users, LineChart, BarChart3, Wallet } from "lucide-react";

const icons: LucideIcon[] = [Users, LineChart, BarChart3, Wallet, Target, Sparkles];

export function BrandingWhySection({
  title,
  features,
}: {
  title: string;
  features: readonly { title: string; description: string }[];
}) {
  return (
    <section className="bs-section relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="bs-section-title text-center">{title}</h2>
        <div className="relative mx-auto mt-14 max-w-4xl">
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF6B2C]/6 blur-3xl" aria-hidden />
          <motion.div
            className="relative mx-auto flex h-36 w-36 items-center justify-center rounded-full border border-[#FF6B2C]/20 bg-gradient-to-br from-white to-[#FAFAFA] shadow-[0_24px_64px_rgba(255,107,44,0.15)]"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <motion.div
              className="absolute inset-3 rounded-full border border-dashed border-[#FF6B2C]/25"
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <Sparkles className="h-10 w-10 text-[#FF6B2C]" />
          </motion.div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = icons[index] ?? Sparkles;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  whileHover={{ y: -4, boxShadow: "0 20px 48px rgba(17,17,17,0.08)" }}
                  className="bs-feature-card rounded-2xl p-5"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF6B2C]/10 text-[#FF6B2C]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-extrabold text-[#111]">{feature.title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-[#666]">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
