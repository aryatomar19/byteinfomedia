"use client";

import { motion } from "framer-motion";
import { Compass, FlaskConical, Lightbulb, Rocket, Settings } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const icons: LucideIcon[] = [Compass, FlaskConical, Lightbulb, Rocket, Settings];

type Step = { title: string; description: string };

export function DmProcessTimeline({ title, steps }: { title: string; steps: readonly Step[] }) {
  return (
    <section className="dm-section dm-section--light">
      <div className="dm-container">
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
          <div className="dm-process-line absolute left-0 right-0 top-12 hidden h-0.5 lg:block" aria-hidden />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = icons[index] ?? Compass;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="dm-process-card group flex h-full min-h-[200px] flex-col rounded-3xl border border-[#0A0F1C]/6 bg-white p-6 text-center shadow-[0_12px_40px_rgba(10,15,28,0.06)] transition duration-300 hover:border-[#FF6B2C]/25 hover:shadow-[0_20px_56px_rgba(255,107,44,0.12)]"
                >
                  <span className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF6B2C]/10 text-[#FF6B2C] transition duration-300 group-hover:bg-[#FF6B2C] group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="mt-4 text-xs font-bold uppercase tracking-wider text-[#FF6B2C]">
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
