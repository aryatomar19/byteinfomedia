"use client";

import { motion } from "framer-motion";
import { Compass, FlaskConical, Lightbulb, Rocket, Settings } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";
import { DmReveal } from "@/components/digital-marketing/DmReveal";

const icons: LucideIcon[] = [Compass, FlaskConical, Lightbulb, Rocket, Settings];

type Step = { title: string; description: string };

export function DmProcessTimeline({ title, steps }: { title: string; steps: readonly Step[] }) {
  const [activeStep, setActiveStep] = useState(0);
  const progress = steps.length > 1 ? (activeStep / (steps.length - 1)) * 100 : 0;

  return (
    <section className="dm-section dm-section--light dm-process-section relative overflow-hidden">
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse at 50% 0%, rgba(255,107,44,0.06), transparent 55%)",
            "radial-gradient(ellipse at 60% 10%, rgba(59,130,246,0.08), transparent 55%)",
            "radial-gradient(ellipse at 50% 0%, rgba(255,107,44,0.06), transparent 55%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <div className="dm-container relative">
        <DmReveal className="mb-14 text-center">
          <span className="dm-eyebrow">How We Work</span>
          <h2 className="dm-heading mt-3 text-[#0A0F1C]">{title}</h2>
        </DmReveal>

        <div className="relative">
          <div className="dm-process-track absolute left-[10%] right-[10%] top-[3.25rem] hidden lg:block" aria-hidden>
            <div className="dm-process-line relative h-0.5 w-full overflow-hidden rounded-full">
              <motion.div
                className="dm-process-progress absolute inset-y-0 left-0 rounded-full"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <motion.div
              className="dm-process-line-glow"
              animate={{ left: `${Math.max(progress - 14, 0)}%` }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = icons[index] ?? Compass;
              const isActive = index <= activeStep;
              const isNext = index === activeStep + 1;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 28, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.55 }}
                  whileHover={{ y: -10, scale: 1.04 }}
                  onHoverStart={() => setActiveStep(index)}
                  className={`dm-process-card group flex h-full min-h-[240px] flex-col rounded-3xl p-6 text-center ${
                    isActive ? "dm-process-card--active" : ""
                  } ${isNext ? "dm-process-card--next" : ""}`}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <motion.span
                    className="dm-process-icon relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-2xl"
                    animate={{
                      scale: isActive ? 1.08 : 1,
                      boxShadow: isActive
                        ? "0 14px 36px rgba(255, 107, 44, 0.45)"
                        : "0 10px 28px rgba(255, 107, 44, 0.35)",
                    }}
                    transition={{ duration: 0.35 }}
                  >
                    <Icon className="relative z-10 h-6 w-6 text-white" />
                  </motion.span>
                  <span className="mt-5 text-xs font-bold uppercase tracking-wider text-[#FF6B2C]">
                    Step {index + 1}
                  </span>
                  <h3 className="mt-2 font-extrabold text-[#0A0F1C]">{step.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-[#52647a]">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
