"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="dm-section dm-section--light">
      <div className="dm-container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="dm-image-card group relative overflow-hidden rounded-3xl transition-shadow duration-500 hover:shadow-[0_24px_64px_rgba(10,15,28,0.16)]"
        >
          <img
            src={image}
            alt={imageAlt}
            className="dm-image-fixed h-[360px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] sm:h-[420px] lg:h-[480px]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="dm-eyebrow">Who We Are</span>
          <h2 className="dm-heading mt-3 text-[#0A0F1C]">{title}</h2>
          <p className="mt-5 text-base leading-8 text-[#52647a]">{description}</p>
          <ul className="mt-8 space-y-4">
            {features.map((feature) => (
              <li key={feature} className="dm-feature-row flex items-start gap-3 rounded-2xl border border-[#0A0F1C]/6 bg-white p-4 shadow-[0_8px_32px_rgba(10,15,28,0.06)]">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#FF6B2C]" />
                <span className="text-sm font-semibold leading-6 text-[#334155]">{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
