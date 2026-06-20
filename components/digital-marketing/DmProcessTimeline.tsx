"use client";

import { motion } from "framer-motion";
import { Compass, FlaskConical, Lightbulb, Rocket, Settings } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const icons: LucideIcon[] = [Compass, FlaskConical, Lightbulb, Rocket, Settings];

type Step = { title: string; description: string };

export function DmProcessTimeline({ title, steps }: { title: string; steps: readonly Step[] }) {
  return (
    <section className="dm-section dm-section--light dm-process-section relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,107,44,0.06),transparent_55%)]"
        aria-hidden
      />
      <div className="dm-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="dm-eyebrow">How We Work</span>
          <h2 className="dm-heading mt-3 text-[#0A0F1C]">{title}</h2>
        </motion.div>

        <div className="relative">
          <div className="dm-process-track absolute left-[10%] right-[10%] top-[3.25rem] hidden lg:block" aria-hidden>
            <div className="dm-process-line h-0.5 w-full" />
            <div className="dm-process-line-glow" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = icons[index] ?? Compass;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 28, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.55 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="dm-process-card group flex h-full min-h-[240px] flex-col rounded-3xl p-6 text-center"
                >
                  <span className="dm-process-icon relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-2xl">
                    <Icon className="relative z-10 h-6 w-6 text-white" />
                  </span>
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
