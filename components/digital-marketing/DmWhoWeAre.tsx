"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { DmReveal } from "@/components/digital-marketing/DmReveal";
import { DmTilt3D } from "@/components/digital-marketing/DmTilt3D";

export function DmWhoWeAre({
  title,
  description,
  image,
  imageAlt,
  features,
}: {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  features: readonly string[];
}) {
  return (
    <section className="dm-section dm-section--light relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(255,107,44,0.05),transparent_50%)]"
        aria-hidden
      />
      <div className="dm-container relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <DmReveal>
          <div className="relative">
            <div
              className="pointer-events-none absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br from-[#FF6B2C]/10 to-[#3B82F6]/10 blur-2xl"
              aria-hidden
            />
            <DmTilt3D className="dm-image-card group relative" max={8}>
              <div className="relative overflow-hidden rounded-3xl shadow-[0_20px_60px_rgba(10,15,28,0.12)] transition-shadow duration-500 group-hover:shadow-[0_28px_72px_rgba(10,15,28,0.18)]">
                <img
                  src={image}
                  alt={imageAlt}
                  className="dm-image-fixed h-[360px] w-full object-cover sm:h-[420px] lg:h-[480px]"
                />
              </div>
            </DmTilt3D>
          </div>
        </DmReveal>

        <DmReveal delay={0.1}>
          <span className="dm-eyebrow">Who We Are</span>
          <h2 className="dm-heading mt-3 text-[#0A0F1C]">{title}</h2>
          <p className="mt-5 text-base leading-8 text-[#52647a]">{description}</p>
          <ul className="mt-8 space-y-4">
            {features.map((feature, index) => (
              <motion.li
                key={feature}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + index * 0.08 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="dm-feature-row group flex items-start gap-3 rounded-2xl border border-[#0A0F1C]/6 bg-white p-4 shadow-[0_8px_32px_rgba(10,15,28,0.06)] transition-shadow duration-400 hover:border-[#FF6B2C]/20 hover:shadow-[0_16px_48px_rgba(10,15,28,0.1)]"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#FF6B2C] transition-transform duration-300 group-hover:scale-110" />
                <span className="text-sm font-semibold leading-6 text-[#334155]">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </DmReveal>
      </div>
    </section>
  );
}
