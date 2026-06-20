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
    <section className="bs-section bs-why-section relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,107,44,0.04)_0%,transparent_50%,rgba(17,17,17,0.03)_100%)]" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B2C]">Why Us</span>
            <h2 className="bs-section-title mt-2">{title}</h2>

            <div className="bs-why-visual relative mt-8 overflow-hidden rounded-3xl border border-[#111]/6 shadow-[0_32px_80px_rgba(17,17,17,0.1)]">
              <img
                src="/images/digital-marketing/content-writing.jpg"
                alt="Brand strategy"
                className="h-64 w-full object-cover sm:h-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111]/80 via-[#111]/20 to-transparent" />

              <motion.div
                className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#FF6B2C]/30 bg-white/95 shadow-[0_24px_64px_rgba(255,107,44,0.2)] backdrop-blur-sm"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <motion.div
                  className="absolute inset-4 rounded-full border border-dashed border-[#FF6B2C]/35"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <Sparkles className="h-12 w-12 text-[#FF6B2C]" />
              </motion.div>

              <motion.div
                className="absolute bottom-5 left-5 rounded-xl border border-white/30 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-sm"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-2xl font-extrabold text-[#FF6B2C]">95%</p>
                <p className="text-xs font-semibold text-[#666]">Client retention</p>
              </motion.div>
            </div>
          </motion.div>

          <div className="bs-why-bento grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = icons[index] ?? Sparkles;
              const isWide = index === 0 || index === 3;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  whileHover={{ y: -6, boxShadow: "0 24px 56px rgba(17,17,17,0.1)" }}
                  className={`bs-feature-card rounded-2xl p-5 ${isWide ? "sm:col-span-2 sm:flex sm:items-center sm:gap-5" : ""}`}
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FF6B2C]/12 text-[#FF6B2C]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className={isWide ? "sm:mt-0 mt-4" : "mt-4"}>
                    <h3 className="font-extrabold text-[#111]">{feature.title}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-[#666]">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
