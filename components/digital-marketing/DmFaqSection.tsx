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
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
          <DmGsapReveal y={24}>
            <h2 id="dm-faq-heading" className="dm-heading dm-heading--xl text-[#0A0F1C]">
              {title}
            </h2>
            <p className="mt-3 max-w-md text-base leading-7 text-[#0A0F1C]/60">{description}</p>

            <motion.div
              className="dm-faq-image mt-6 overflow-hidden rounded-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative h-44 overflow-hidden sm:h-48 lg:h-52">
                <img
                  src={image}
                  alt={imageAlt}
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </DmGsapReveal>

          <DmGsapReveal y={28}>
            <DmNumberedFaq items={items} variant="light" compact />
          </DmGsapReveal>
        </div>
      </div>
    </section>
  );
}
