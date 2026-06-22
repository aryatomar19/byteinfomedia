"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DmGsapReveal } from "@/components/digital-marketing/DmGsapReveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export function DmProcessSection({
  title,
  eyebrow,
  steps,
}: {
  title: string;
  eyebrow: string;
  steps: readonly ProcessStep[];
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const line = lineRef.current;
    const section = sectionRef.current;
    if (!line || !section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 65%",
            end: "bottom 35%",
            scrub: 1,
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="dm-process"
      className="dm-section dm-process-agency relative overflow-hidden"
      style={{ background: "#050B24" }}
      aria-labelledby="dm-process-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(255,107,44,0.06),transparent_55%)]" aria-hidden />

      <div className="dm-container relative">
        <DmGsapReveal className="mx-auto mb-14 max-w-3xl text-center lg:mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B2C]">{eyebrow}</span>
          <h2 id="dm-process-heading" className="dm-heading mt-3 text-white">
            {title}
          </h2>
        </DmGsapReveal>

        <div className="relative mx-auto max-w-4xl">
          <div
            ref={lineRef}
            className="dm-process-agency__line absolute bottom-0 left-6 top-0 hidden w-px origin-top bg-gradient-to-b from-[#FF6B2C]/50 via-[#FF6B2C]/20 to-transparent md:left-8 lg:block"
            aria-hidden
          />

          <div className="space-y-0">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <DmGsapReveal key={step.number} delay={index * 0.06} y={36}>
                  <div
                    className={`dm-process-agency__step relative grid items-center gap-6 py-8 md:grid-cols-2 md:gap-12 md:py-10 ${
                      isEven ? "" : "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1"
                    }`}
                  >
                    <div className={`${isEven ? "md:text-right" : "md:text-left"} hidden md:block`}>
                      <span className="text-7xl font-extrabold leading-none text-white/[0.05]">{step.number}</span>
                    </div>

                    <motion.div
                      className="dm-process-agency__card relative rounded-3xl p-6 sm:p-7"
                      whileHover={{ y: -4 }}
                      transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    >
                      <span className="absolute -left-1 top-8 hidden h-3 w-3 rounded-full border-2 border-[#FF6B2C] bg-[#050B24] lg:-left-[calc(2rem+5px)] lg:top-1/2 lg:block lg:-translate-y-1/2" aria-hidden />

                      <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B2C] md:hidden">
                        {step.number}
                      </span>
                      <h3 className="mt-1 text-xl font-extrabold text-white sm:text-2xl">{step.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-white/55 sm:text-base">{step.description}</p>
                    </motion.div>
                  </div>
                </DmGsapReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
