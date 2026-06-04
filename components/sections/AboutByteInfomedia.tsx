"use client";

import { motion } from "framer-motion";
import { aboutByteInfomediaSection } from "@/data/home";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";

export function AboutByteInfomedia() {
  return (
    <section
      className="relative overflow-hidden bg-[#0B1220] py-8 md:py-10"
      aria-labelledby="about-byte-infomedia-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(255,107,26,0.12),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#FF6B1A]/40 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[#FF6B1A]">
            {aboutByteInfomediaSection.eyebrow}
          </p>
          <h2
            id="about-byte-infomedia-heading"
            className="mt-3 font-[family-name:var(--font-inter)] text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-[2rem]"
          >
            {aboutByteInfomediaSection.title}
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/72 sm:text-base sm:leading-8">
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
                className="group flex h-full min-h-[8.75rem] flex-col rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 transition duration-300 hover:border-[#FF6B1A]/40 hover:bg-white/[0.07] hover:shadow-[0_12px_40px_rgba(255,107,26,0.12)] sm:min-h-[9.25rem] sm:px-5 sm:py-5"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FF6B1A]/15 text-lg"
                    aria-hidden
                  >
                    {item.icon}
                  </span>
                  <h3 className="text-sm font-bold leading-snug text-white sm:text-base">{item.title}</h3>
                </div>
                <p className="mt-3 flex-1 text-xs leading-5 text-white/65 sm:text-sm sm:leading-6">
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
