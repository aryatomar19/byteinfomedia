"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { LucideIcon } from "lucide-react";
import { LineChart, PenLine, Search, Share2, Users, Zap } from "lucide-react";

const icons: LucideIcon[] = [Users, Zap, Search, PenLine, Share2, LineChart];

export function BrandingWhySection({
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
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <section ref={sectionRef} className="bs-section bs-why-split relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-[#FF6B2C]/5 blur-3xl" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bs-why-image-wrap relative overflow-hidden rounded-3xl border border-[#111]/6 shadow-[0_32px_80px_rgba(17,17,17,0.1)]">
              <motion.img
                src={image}
                alt={imageAlt}
                className="h-[360px] w-full object-cover sm:h-[440px] lg:h-[520px]"
                style={{ y: imageY }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111]/50 via-transparent to-transparent" />
              <motion.div
                className="absolute bottom-6 left-6 rounded-2xl border border-white/30 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-sm"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-3xl font-extrabold text-[#FF6B2C]">95%</p>
                <p className="text-xs font-semibold text-[#666]">Client retention</p>
              </motion.div>
            </div>
          </motion.div>

          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B2C]">Why Us</span>
            <h2 className="bs-section-title mt-2">{title}</h2>
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
                    whileHover={{ y: -4, boxShadow: "0 20px 48px rgba(17,17,17,0.08)" }}
                    className="bs-feature-card rounded-2xl p-5"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF6B2C]/12 text-[#FF6B2C]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-3 font-extrabold text-[#111]">{feature.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-[#666]">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
