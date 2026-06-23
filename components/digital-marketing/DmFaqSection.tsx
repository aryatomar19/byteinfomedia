"use client";

import { motion } from "framer-motion";
import { DmGsapReveal } from "@/components/digital-marketing/DmGsapReveal";
import { DmNumberedFaq } from "@/components/digital-marketing/DmNumberedFaq";

export function DmFaqSection({
  title,
  eyebrow,
  description,
  image,
  imageAlt,
  items,
}: {
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  imageAlt: string;
  items: readonly { question: string; answer: string }[];
}) {
  return (
    <section
      id="dm-faq"
      className="dm-section dm-section--xl dm-faq-section dm-section--white relative overflow-hidden bg-white"
      aria-labelledby="dm-faq-heading"
    >
      <div className="dm-container relative">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <DmGsapReveal y={32}>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B35]">{eyebrow}</span>
            <h2 id="dm-faq-heading" className="dm-heading dm-heading--xl mt-4 text-[#0A0F1C]">
              {title}
            </h2>
            <p className="mt-5 max-w-md text-lg leading-8 text-[#0A0F1C]/60">{description}</p>

            <motion.div
              className="dm-faq-image mt-10 overflow-hidden rounded-3xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image}
                  alt={imageAlt}
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </DmGsapReveal>

          <DmGsapReveal y={40}>
            <DmNumberedFaq items={items} variant="light" />
          </DmGsapReveal>
        </div>
      </div>
    </section>
  );
}
