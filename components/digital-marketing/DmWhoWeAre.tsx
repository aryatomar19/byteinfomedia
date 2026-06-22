"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { DmGsapReveal } from "@/components/digital-marketing/DmGsapReveal";
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
    <section className="dm-section dm-section--mesh relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-pattern-light opacity-[0.12]" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_50%,rgba(255,107,44,0.1),transparent_50%)]"
        aria-hidden
      />
      <div className="dm-container relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <DmGsapReveal y={40}>
          <div className="relative">
            <div
              className="pointer-events-none absolute -inset-4 rounded-[1.75rem] bg-gradient-to-br from-[#FF6B2C]/15 to-[#3B82F6]/10 blur-3xl"
              aria-hidden
            />
            <DmTilt3D className="dm-image-card group relative" max={8}>
              <div className="dm-glass-frame relative overflow-hidden rounded-3xl">
                <img
                  src={image}
                  alt={imageAlt}
                  className="dm-image-fixed h-[360px] w-full object-cover sm:h-[420px] lg:h-[480px]"
                />
              </div>
            </DmTilt3D>
          </div>
        </DmGsapReveal>

        <DmGsapReveal delay={0.1} y={40}>
          <span className="dm-eyebrow dm-eyebrow--light">Who We Are</span>
          <h2 className="dm-heading mt-3 text-white">{title}</h2>
          <p className="mt-5 text-base leading-8 text-white/70">{description}</p>
          <ul className="mt-8 space-y-4">
            {features.map((feature, index) => (
              <motion.li
                key={feature}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="dm-feature-row dm-glass flex items-start gap-3 rounded-2xl p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#FF6B2C]" />
                <span className="text-sm font-semibold leading-6 text-white/85">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </DmGsapReveal>
      </div>
    </section>
  );
}
