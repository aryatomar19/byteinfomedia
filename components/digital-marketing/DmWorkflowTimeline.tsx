"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BarChart3,
  Compass,
  FlaskConical,
  Lightbulb,
  Rocket,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { DmGsapReveal } from "@/components/digital-marketing/DmGsapReveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const icons: LucideIcon[] = [Compass, FlaskConical, Lightbulb, Rocket, BarChart3, TrendingUp];

type WorkflowStep = {
  number: string;
  title: string;
  description: string;
};

export function DmWorkflowTimeline({
  title,
  eyebrow,
  steps,
}: {
  title: string;
  eyebrow: string;
  steps: readonly WorkflowStep[];
}) {
  const lineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

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
          duration: 1.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
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
      className="dm-section dm-workflow-section relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #050B1F 0%, #0A1228 50%, #050B1F 100%)" }}
      aria-labelledby="dm-workflow-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,107,44,0.08),transparent_55%)]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 grid-pattern-light opacity-[0.05]" aria-hidden />

      <div className="dm-container relative">
        <DmGsapReveal className="mx-auto mb-14 max-w-3xl text-center">
          <span className="dm-eyebrow dm-eyebrow--light">{eyebrow}</span>
          <h2 id="dm-workflow-heading" className="dm-heading mt-3 text-white">
            {title}
          </h2>
        </DmGsapReveal>

        <div className="relative">
          <div
            ref={lineRef}
            className="dm-workflow-line absolute bottom-0 left-6 top-0 hidden w-px origin-top bg-gradient-to-b from-[#FF6B2C]/60 via-[#3B82F6]/40 to-[#FF6B2C]/20 lg:left-1/2 lg:block lg:-translate-x-px"
            aria-hidden
          />

          <div className="space-y-8 lg:space-y-12">
            {steps.map((step, index) => {
              const Icon = icons[index] ?? Compass;
              const isEven = index % 2 === 0;

              return (
                <DmGsapReveal key={step.number} delay={index * 0.08} y={40}>
                  <div
                    className={`dm-workflow-step relative grid items-center gap-6 lg:grid-cols-2 lg:gap-12 ${
                      isEven ? "" : "lg:[&>*:first-child]:order-2"
                    }`}
                  >
                    <div className={`${isEven ? "lg:text-right" : "lg:text-left"} hidden lg:block`}>
                      <span className="text-6xl font-extrabold text-white/[0.06]">{step.number}</span>
                    </div>

                    <motion.div
                      className="dm-workflow-card group relative rounded-3xl p-6 sm:p-7"
                      whileHover={{ y: -6 }}
                      transition={{ type: "spring", stiffness: 360, damping: 26 }}
                    >
                      <span className="dm-workflow-node absolute -left-3 top-8 hidden h-6 w-6 items-center justify-center rounded-full border-2 border-[#FF6B2C] bg-[#050B1F] lg:-left-[calc(50%+12px)] lg:top-1/2 lg:flex lg:-translate-y-1/2" aria-hidden>
                        <span className="h-2 w-2 rounded-full bg-[#FF6B2C]" />
                      </span>

                      <div className="flex items-start gap-4">
                        <span className="dm-workflow-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                          <Icon className="h-5 w-5 text-[#FF6B2C]" />
                        </span>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B2C] lg:hidden">
                            {step.number}
                          </span>
                          <h3 className="text-xl font-extrabold text-white">{step.title}</h3>
                          <p className="mt-2 text-sm leading-6 text-white/55">{step.description}</p>
                        </div>
                      </div>
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
