"use client";

import { motion } from "framer-motion";
import { visionSection } from "@/data/home";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";

export function OurVision() {
  return (
    <section
      className="relative overflow-hidden py-10 md:py-12 lg:py-14"
      aria-labelledby="our-vision-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#F8FAFC] via-white to-[#FFF5EF]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 top-0 h-72 w-72 rounded-full bg-[#FF6B1A]/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-[#0B1220]/5 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal className="order-2 lg:order-1">
            <div className="group relative overflow-hidden rounded-[1.75rem] border border-[#0B1220]/10 shadow-[0_28px_72px_rgba(11,18,32,0.14)]">
              <img
                src={visionSection.image}
                alt={visionSection.imageAlt}
                className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1220]/35 via-transparent to-transparent"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#FF6B1A] to-[#FF6B2C]"
                aria-hidden
              />
            </div>
          </Reveal>

          <RevealStagger className="order-1 lg:order-2">
            <RevealItem>
              <div className="rounded-[1.75rem] border border-white/60 bg-white/70 p-6 shadow-[0_24px_64px_rgba(11,18,32,0.08)] backdrop-blur-xl sm:p-8">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#FF6B1A]">
                  {visionSection.eyebrow}
                </p>
                <h2
                  id="our-vision-heading"
                  className="mt-3 font-[family-name:var(--font-inter)] text-3xl font-extrabold tracking-tight text-[#0B1220] sm:text-4xl"
                >
                  {visionSection.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-[#334155] sm:text-lg sm:leading-8">
                  {visionSection.description}
                </p>
              </div>
            </RevealItem>
          </RevealStagger>
        </div>

        <RevealStagger className="mt-10 grid gap-4 sm:grid-cols-3 sm:gap-5">
          {visionSection.featureCards.map((card, index) => (
            <RevealItem key={card.title}>
              <motion.article
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                whileHover={{ y: -6 }}
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-[#0B1220] p-5 shadow-[0_16px_48px_rgba(11,18,32,0.35)] transition-shadow duration-300 hover:border-[#FF6B1A]/35 hover:shadow-[0_24px_56px_rgba(255,107,26,0.18)] sm:p-6"
              >
                <div className="h-1 w-10 rounded-full bg-[#FF6B1A] transition-all duration-300 group-hover:w-14" />
                <span className="mt-5 text-2xl leading-none" aria-hidden>
                  {card.icon}
                </span>
                <h3 className="mt-3 text-lg font-extrabold text-white">{card.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-white/70">{card.description}</p>
              </motion.article>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
