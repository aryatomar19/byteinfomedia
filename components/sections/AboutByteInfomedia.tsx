"use client";

import { motion } from "framer-motion";
import { aboutByteInfomediaSection } from "@/data/home";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";

export function AboutByteInfomedia() {
  return (
    <section
      className="section-surface section-enterprise"
      aria-labelledby="about-byte-infomedia-heading"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[#FF6B1A]">
            {aboutByteInfomediaSection.eyebrow}
          </p>
          <h2
            id="about-byte-infomedia-heading"
            className="mt-3 font-[family-name:var(--font-inter)] text-2xl font-extrabold tracking-tight text-[#0B1220] sm:text-3xl lg:text-[2rem]"
          >
            {aboutByteInfomediaSection.title}
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#334155] sm:text-base sm:leading-8">
            {aboutByteInfomediaSection.description}
          </p>
        </Reveal>

        <RevealStagger className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:mt-9 lg:grid-cols-4">
          {aboutByteInfomediaSection.highlights.map((item, index) => (
            <RevealItem key={item.title} className="h-full">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.06, duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="enterprise-card group flex h-full min-h-[8.75rem] flex-col rounded-2xl px-4 py-4 transition duration-300 hover:-translate-y-1 sm:min-h-[9.25rem] sm:px-5 sm:py-5"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FF6B1A]/10 text-lg"
                    aria-hidden
                  >
                    {item.icon}
                  </span>
                  <h3 className="text-sm font-bold leading-snug text-[#0B1220] sm:text-base">{item.title}</h3>
                </div>
                <p className="mt-3 flex-1 text-xs leading-5 text-[#334155] sm:text-sm sm:leading-6">
                  {item.description}
                </p>
              </motion.div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
