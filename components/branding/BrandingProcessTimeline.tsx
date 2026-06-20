"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Compass, Lightbulb, Palette, Rocket, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const stepIcons: LucideIcon[] = [Compass, Lightbulb, Palette, Rocket, TrendingUp];

type Step = { title: string; description: string };

export function BrandingProcessTimeline({
  title,
  steps,
}: {
  title: string;
  steps: readonly Step[];
}) {
  const [active, setActive] = useState(0);

  return (
    <section className="bs-section bs-process-timeline relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(255,107,44,0.06),transparent_60%)]" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B2C]">Process</span>
          <h2 className="bs-section-title mt-2">{title}</h2>
        </motion.div>

        <div className="relative mt-12">
          <div className="absolute bottom-8 left-1/2 top-8 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#FF6B2C]/40 via-[#FF6B2C]/20 to-[#FF6B2C]/40" aria-hidden />

          <div className="space-y-2">
            {steps.map((step, index) => {
              const Icon = stepIcons[index] ?? Compass;
              const isActive = active === index;
              const isPast = index < active;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="relative flex justify-center"
                >
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    onMouseEnter={() => setActive(index)}
                    className={`bs-process-node group flex w-full max-w-md items-center gap-5 rounded-2xl border p-5 text-left transition ${
                      isActive
                        ? "border-[#FF6B2C]/30 bg-white shadow-[0_16px_48px_rgba(255,107,44,0.15)]"
                        : "border-[#111]/6 bg-white/80 hover:border-[#FF6B2C]/15"
                    }`}
                  >
                    <motion.span
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${
                        isActive || isPast ? "bg-[#FF6B2C] text-white" : "bg-[#111]/6 text-[#666]"
                      }`}
                      animate={isActive ? { scale: [1, 1.08, 1], rotate: [0, 5, 0] } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="h-6 w-6" />
                    </motion.span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-extrabold text-[#111]">{step.title}</h3>
                        {index < steps.length - 1 && (
                          <motion.span
                            className="text-[#FF6B2C]/40"
                            animate={isActive ? { y: [0, 4, 0] } : {}}
                            transition={{ duration: 1, repeat: Infinity }}
                          >
                            ↓
                          </motion.span>
                        )}
                      </div>
                      <motion.p
                        className="mt-1 text-sm text-[#666]"
                        initial={false}
                        animate={{ opacity: isActive ? 1 : 0.7, height: isActive ? "auto" : "1.25rem" }}
                      >
                        {step.description}
                      </motion.p>
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
