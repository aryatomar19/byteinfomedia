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
            start: "top 60%",
            end: "bottom 30%",
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
      className="dm-section dm-section--xl dm-process-agency relative overflow-hidden"
      style={{ background: "#050B24" }}
      aria-labelledby="dm-process-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(255,107,44,0.08),transparent_55%)]" aria-hidden />

      <div className="dm-container relative">
        <DmGsapReveal className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B2C]">{eyebrow}</span>
          <h2 id="dm-process-heading" className="dm-heading dm-heading--xl mt-4 text-white">
            {title}
          </h2>
        </DmGsapReveal>

        <div className="relative mx-auto max-w-5xl">
          <div
            ref={lineRef}
            className="dm-process-agency__line absolute bottom-0 left-8 top-0 hidden w-0.5 origin-top bg-gradient-to-b from-[#FF6B2C]/60 via-[#FF6B2C]/25 to-transparent lg:left-1/2 lg:block lg:-translate-x-px"
            aria-hidden
          />

          <div className="space-y-2">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <DmGsapReveal key={step.number} delay={index * 0.06} y={40}>
                  <div
                    className={`dm-process-agency__step relative grid items-center gap-8 py-10 lg:grid-cols-2 lg:gap-16 lg:py-12 ${
                      isEven ? "" : "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
                    }`}
                  >
                    <div className={`${isEven ? "lg:text-right" : "lg:text-left"} hidden lg:block`}>
                      <span className="text-8xl font-extrabold leading-none text-white/[0.06] xl:text-9xl">
                        {step.number}
                      </span>
                    </div>

                    <motion.div
                      className="dm-process-agency__card dm-process-agency__card--lg relative rounded-3xl p-8 sm:p-10"
                      whileHover={{ y: -6, scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 340, damping: 26 }}
                    >
                      <span
                        className={`absolute top-1/2 hidden h-4 w-4 -translate-y-1/2 rounded-full border-2 border-[#FF6B2C] bg-[#050B24] shadow-[0_0_16px_rgba(255,107,44,0.4)] lg:block ${
                          isEven ? "-left-6" : "-right-6"
                        }`}
                        aria-hidden
                      >
                        <span className="absolute inset-1 rounded-full bg-[#FF6B2C]" />
                      </span>

                      <span className="text-sm font-bold uppercase tracking-wider text-[#FF6B2C] lg:hidden">
                        {step.number}
                      </span>
                      <h3 className="mt-1 text-2xl font-extrabold text-white sm:text-3xl">{step.title}</h3>
                      <p className="mt-3 text-base leading-8 text-white/55 sm:text-lg">{step.description}</p>
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
