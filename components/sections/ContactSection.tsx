"use client";

import { AssessmentForm } from "@/components/forms/AssessmentForm";
import { Reveal } from "@/components/motion/Reveal";

export function ContactSection() {
  return (
    <section id="assessment" className="scroll-mt-24 bg-[#F7F8FA] py-5 md:py-6 lg:py-7">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-2">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#FF6B2C]">Get in touch</p>
          <h2 className="mt-1.5 font-[family-name:var(--font-inter)] text-3xl font-extrabold tracking-tight text-[#0A0F1C] sm:text-4xl">
            Let&apos;s Discuss Your Cloud Journey
          </h2>
          <p className="mt-2 max-w-2xl text-base leading-6 text-[#0A0F1C]">
            Connect with our consultants for AWS, DevOps, security, managed services, or AI engagements.
          </p>
        </Reveal>

        <div className="mx-auto w-full max-w-6xl rounded-[1.75rem] border border-[#0A0F1C]/8 bg-white px-3 py-2.5 shadow-[0_32px_80px_rgba(10,15,28,0.1)] sm:px-4 sm:py-3">
          <Reveal delay={0.06}>
            <AssessmentForm
              variant="light"
              compact
              className="border-0 bg-transparent p-0 shadow-none"
              showPriorityBadge
              showServiceField={false}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
