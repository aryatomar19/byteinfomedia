"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Compass, FlaskConical, Lightbulb, Rocket, Settings } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { DmGsapReveal } from "@/components/digital-marketing/DmGsapReveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const icons: LucideIcon[] = [Compass, FlaskConical, Lightbulb, Rocket, Settings];

type Step = { title: string; description: string };

export function DmProcessTimeline({ title, steps }: { title: string; steps: readonly Step[] }) {
  const [activeStep, setActiveStep] = useState(0);
  const lineRef = useRef<HTMLDivElement>(null);
  const progress = steps.length > 1 ? (activeStep / (steps.length - 1)) * 100 : 0;

  useEffect(() => {
    const line = lineRef.current;
    if (!line) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        line,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: line,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="dm-section dm-section--mesh dm-process-section relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-pattern-light opacity-[0.1]" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,107,44,0.1),transparent_55%)]"
        aria-hidden
      />
      <div className="dm-container relative">
        <DmGsapReveal className="mx-auto mb-14 max-w-3xl text-center">
          <span className="dm-eyebrow dm-eyebrow--light">How We Work</span>
          <h2 className="dm-heading mt-3 text-white">{title}</h2>
        </DmGsapReveal>

        <div className="relative">
          <div className="dm-process-track absolute left-[8%] right-[8%] top-[3.5rem] hidden origin-left lg:block" aria-hidden>
            <div ref={lineRef} className="dm-process-line relative h-1 w-full overflow-hidden rounded-full">
              <motion.div
                className="dm-process-progress absolute inset-y-0 left-0 rounded-full"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
            {steps.map((step, index) => {
              const Icon = icons[index] ?? Compass;
              const isActive = index <= activeStep;

              return (
                <DmGsapReveal key={step.title} delay={index * 0.07} y={36} className="h-full">
                  <motion.div
                    whileHover={{ y: -10, scale: 1.03 }}
                    onHoverStart={() => setActiveStep(index)}
                    className={`dm-process-card dm-process-card--enterprise group flex h-full min-h-[260px] flex-col rounded-3xl p-6 text-center ${
                      isActive ? "dm-process-card--active" : ""
                    }`}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <span className="dm-process-icon relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-2xl">
                      <Icon className="relative z-10 h-6 w-6 text-white" />
                    </span>
                    <span className="mt-5 text-xs font-bold uppercase tracking-wider text-[#FF6B2C]">
                      Step {index + 1}
                    </span>
                    <h3 className="mt-2 font-extrabold text-white">{step.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-6 text-white/65">{step.description}</p>
                  </motion.div>
                </DmGsapReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
