"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { BarChart3, LineChart, Target, Users, Wallet, Wrench } from "lucide-react";

const icons: LucideIcon[] = [Users, LineChart, BarChart3, Wallet, Target, Wrench];

export function DmWhySection({
  title,
  image,
  imageAlt,
  features,
}: {
  title: string;
  image: string;
  imageAlt: string;
  features: readonly { title: string; description: string }[];
}) {
  return (
    <section className="dm-section dm-section--dark relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(255,107,44,0.07),transparent_50%)]" aria-hidden />
      <div className="dm-container relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="dm-image-card group relative overflow-hidden rounded-3xl border border-white/10 transition-shadow duration-500 hover:shadow-[0_28px_72px_rgba(0,0,0,0.35)]"
        >
          <img
            src={image}
            alt={imageAlt}
            className="dm-image-fixed h-[360px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] sm:h-[420px] lg:h-[520px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/75 via-[#0A0F1C]/25 to-[#0A0F1C]/10" />
        </motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="dm-eyebrow dm-eyebrow--light">Why Us</span>
            <h2 className="dm-heading mt-3 text-white">{title}</h2>
          </motion.div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = icons[index] ?? Users;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="dm-why-card group flex h-full min-h-[168px] flex-col items-center rounded-2xl p-5 text-center"
                >
                  <span className="dm-why-icon flex h-12 w-12 items-center justify-center rounded-xl">
                    <Icon className="h-5 w-5 text-[#FF6B2C]" />
                  </span>
                  <h3 className="mt-4 font-extrabold text-white">{feature.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-white/60">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
