"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronProcessTimeline } from "@/components/sections/ChevronProcessTimeline";

type ProcessStep = {
  title: string;
  description: string;
  image: string;
};

export function BrandingProcessSection({
  title,
  subtitle,
  steps,
}: {
  title: string;
  subtitle: string;
  steps: readonly ProcessStep[];
}) {
  const [active, setActive] = useState(0);
  const current = steps[active];

  return (
    <section className="bs-section bs-process-section relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(255,107,44,0.08),transparent_55%)]" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B2C]">Our Process</span>
            <h2 className="bs-section-title mt-2">{title}</h2>
            <p className="mt-4 text-base leading-7 text-[#666]">{subtitle}</p>

            <div className="mt-8 space-y-3">
              {steps.map((step, index) => (
                <button
                  key={step.title}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`bs-process-step-btn flex w-full items-start gap-4 rounded-xl border p-4 text-left transition ${
                    active === index
                      ? "border-[#FF6B2C]/30 bg-white shadow-[0_12px_40px_rgba(255,107,44,0.12)]"
                      : "border-[#111]/6 bg-white/60 hover:border-[#FF6B2C]/15"
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-extrabold ${
                      active === index ? "bg-[#FF6B2C] text-white" : "bg-[#111]/6 text-[#666]"
                    }`}
                  >
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-extrabold text-[#111]">{step.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-[#666]">{step.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
            className="relative"
          >
            <div className="bs-process-visual relative overflow-hidden rounded-3xl border border-[#111]/6 shadow-[0_32px_80px_rgba(17,17,17,0.12)]">
              <img
                src={current.image}
                alt={current.title}
                className="h-[320px] w-full object-cover sm:h-[400px] lg:h-[480px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111]/70 via-[#111]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <span className="rounded-full bg-[#FF6B2C] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  Step {active + 1}
                </span>
                <h3 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">{current.title}</h3>
                <p className="mt-2 max-w-md text-sm leading-6 text-white/80">{current.description}</p>
              </div>

              <motion.div
                className="absolute right-6 top-6 rounded-2xl border border-white/30 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-sm"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-2xl font-extrabold text-[#FF6B2C]">0{active + 1}</p>
                <p className="text-xs font-semibold text-[#666]">of 0{steps.length}</p>
              </motion.div>
            </div>

            <motion.div
              className="absolute -bottom-6 -left-6 hidden h-24 w-24 rounded-2xl border border-[#FF6B2C]/20 bg-white shadow-xl lg:block"
              animate={{ rotate: [0, 3, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex h-full items-center justify-center">
                <div className="h-12 w-12 rounded-full bg-[#FF6B2C]/15" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-14 hidden lg:block">
          <ChevronProcessTimeline steps={steps.map((s) => ({ title: s.title, description: s.description }))} />
        </div>
      </div>
    </section>
  );
}
