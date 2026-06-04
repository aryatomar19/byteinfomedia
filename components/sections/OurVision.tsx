"use client";

import { visionSection } from "@/data/home";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";

export function OurVision() {
  return (
    <section
      className="relative overflow-hidden py-8 md:py-10 lg:py-11"
      aria-labelledby="our-vision-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#F8FAFC] via-white to-[#FFF5EF]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 top-0 h-56 w-56 rounded-full bg-[#FF6B1A]/8 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
          <Reveal className="order-2 lg:order-1">
            <div className="group relative overflow-hidden rounded-[1.75rem] border border-[#0B1220]/10 shadow-[0_24px_64px_rgba(11,18,32,0.12)]">
              <img
                src={visionSection.image}
                alt={visionSection.imageAlt}
                className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.02]"
              />
              <div
                className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#FF6B1A] to-[#FF6B2C]"
                aria-hidden
              />
            </div>
          </Reveal>

          <RevealStagger className="order-1 flex flex-col justify-center lg:order-2 lg:max-w-[36rem]">
            <RevealItem>
              <p className="text-[0.8125rem] font-bold uppercase tracking-[0.2em] text-[#FF6B1A]">
                {visionSection.eyebrow}
              </p>
            </RevealItem>
            <RevealItem>
              <h2
                id="our-vision-heading"
                className="mt-5 font-[family-name:var(--font-inter)] text-[2rem] font-extrabold tracking-tight text-[#0B1220] sm:mt-6 sm:text-[2.5rem] lg:text-[2.625rem]"
              >
                {visionSection.title}
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="mt-5 max-w-[34rem] text-[1.125rem] leading-8 text-[#334155] sm:mt-6 sm:text-[1.25rem] sm:leading-9 lg:max-w-[36rem]">
                {visionSection.description}
              </p>
            </RevealItem>
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}
