"use client";

import { visionSection } from "@/data/home";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";

export function OurVision() {
  return (
    <section className="section-surface section-enterprise" aria-labelledby="our-vision-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
          <Reveal className="order-2 lg:order-1">
            <div className="group relative overflow-hidden rounded-[1.75rem] border border-[#0A0F1C]/8 shadow-[0_24px_64px_rgba(10,15,28,0.1)]">
              <div
                className="pointer-events-none absolute inset-y-0 left-0 z-10 w-1 bg-gradient-to-b from-[#FF6B2C] via-[#FF6B2C]/80 to-[#0A0F1C]"
                aria-hidden
              />
              <img
                src={visionSection.image}
                alt={visionSection.imageAlt}
                className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.02]"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#0A0F1C]/25 via-transparent to-transparent"
                aria-hidden
              />
            </div>
          </Reveal>

          <RevealStagger className="order-1 space-y-5 lg:order-2">
            <RevealItem>
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#FF6B2C]">
                {visionSection.eyebrow}
              </p>
            </RevealItem>
            <RevealItem>
              <h2
                id="our-vision-heading"
                className="font-[family-name:var(--font-inter)] text-3xl font-extrabold tracking-tight text-[#0A0F1C] sm:text-4xl"
              >
                {visionSection.title}
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="text-base leading-7 text-[#334155] sm:text-lg sm:leading-8">
                {visionSection.description}
              </p>
            </RevealItem>
          </RevealStagger>
        </div>

        <RevealStagger className="mt-8 grid gap-3 sm:grid-cols-3 sm:gap-4">
          {visionSection.highlights.map((item) => (
            <RevealItem key={item.label}>
              <div className="flex items-start gap-3 rounded-2xl border border-[#0A0F1C]/8 bg-white px-4 py-3.5 shadow-[0_8px_24px_rgba(10,15,28,0.05)] transition hover:border-[#FF6B2C]/25 hover:shadow-[0_12px_32px_rgba(255,107,44,0.08)]">
                <span className="text-xl leading-none" aria-hidden>
                  {item.icon}
                </span>
                <p className="text-sm font-semibold leading-snug text-[#0A0F1C]">{item.label}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
