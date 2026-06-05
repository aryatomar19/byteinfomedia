"use client";

import { AssessmentForm } from "@/components/forms/AssessmentForm";
import { Reveal } from "@/components/motion/Reveal";

export function ContactSection() {
  return (
    <section id="assessment" className="bg-[#F7F8FA] py-10 md:py-11 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-4">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#FF6B2C]">Get in touch</p>
          <h2 className="mt-3 font-[family-name:var(--font-inter)] text-3xl font-extrabold tracking-tight text-[#0A0F1C] sm:text-4xl">
            Let&apos;s Discuss Your Cloud Journey
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#0A0F1C]">
            Connect with our consultants for AWS, DevOps, security, managed services, or AI engagements.
          </p>
        </Reveal>

        <div className="overflow-hidden rounded-[1.75rem] border border-[#0A0F1C]/8 bg-white p-6 shadow-[0_32px_80px_rgba(10,15,28,0.1)] sm:p-8">
          <Reveal delay={0.06}>
            <AssessmentForm
              variant="light"
              compact
              className="border-0 bg-transparent p-0 shadow-none"
              showPriorityBadge
              showServiceField
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
