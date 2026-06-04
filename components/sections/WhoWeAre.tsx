"use client";

import { whoWeAreSection } from "@/data/home";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";

export function WhoWeAre() {
  return (
    <section
      className="relative overflow-hidden bg-[#0B1220] py-10 md:py-12 lg:py-14"
      aria-labelledby="who-we-are-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0B1220] via-[#0f1a2e] to-[#0B1220]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-[#FF6B1A]/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal className="order-2 lg:order-1">
            <div className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 shadow-[0_28px_72px_rgba(0,0,0,0.35)]">
              <img
                src={whoWeAreSection.image}
                alt={whoWeAreSection.imageAlt}
                className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.02]"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1220]/50 via-transparent to-transparent"
                aria-hidden
              />
            </div>
          </Reveal>

          <RevealStagger className="order-1 space-y-5 lg:order-2">
            <RevealItem>
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#FF6B1A]">
                {whoWeAreSection.eyebrow}
              </p>
            </RevealItem>
            <RevealItem>
              <h2
                id="who-we-are-heading"
                className="font-[family-name:var(--font-inter)] text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
              >
                {whoWeAreSection.title}
              </h2>
            </RevealItem>
            {whoWeAreSection.paragraphs.map((paragraph) => (
              <RevealItem key={paragraph.slice(0, 40)}>
                <p className="text-base leading-7 text-white/75 sm:leading-8">{paragraph}</p>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}
