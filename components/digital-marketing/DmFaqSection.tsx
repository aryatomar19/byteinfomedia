"use client";

import { motion } from "framer-motion";
import { DmGsapReveal } from "@/components/digital-marketing/DmGsapReveal";
import { DmNumberedFaq } from "@/components/digital-marketing/DmNumberedFaq";

export function DmFaqSection({
  title,
  description,
  image,
  imageAlt,
  items,
}: {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  items: readonly { question: string; answer: string }[];
}) {
  return (
    <section
      id="dm-faq"
      className="dm-section dm-faq-section dm-section--white relative overflow-hidden bg-white"
      aria-labelledby="dm-faq-heading"
    >
      <div className="dm-container relative">
        <div className="faq-grid grid gap-8 lg:grid-cols-2 lg:gap-10">
          <DmGsapReveal y={24} className="flex flex-col">
            <h2 id="dm-faq-heading" className="dm-heading dm-heading--xl text-[#0A0F1C]">
              {title}
            </h2>
            <p className="mt-3 max-w-md text-base leading-7 text-[#0A0F1C]/60">{description}</p>

            <motion.div
              className="faq-image mt-6 flex-1 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src={image}
                alt={imageAlt}
                className="faq-image__img h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          </DmGsapReveal>

          <DmGsapReveal y={28} className="flex flex-col">
            <DmNumberedFaq items={items} variant="light" compact />
          </DmGsapReveal>
        </div>
      </div>
    </section>
  );
}
