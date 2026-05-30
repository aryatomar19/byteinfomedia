"use client";

import { AssessmentForm } from "@/components/forms/AssessmentForm";
import { ContactInfoCards } from "@/components/contact/ContactInfoCards";
import { Reveal } from "@/components/motion/Reveal";

export function ContactSection() {
  return (
    <section id="assessment" className="section-surface section-enterprise">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-5">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#FF6B2C]">Get in touch</p>
          <h2 className="mt-3 font-[family-name:var(--font-inter)] text-3xl font-extrabold tracking-tight text-[#0A0F1C] sm:text-4xl">
            Let&apos;s Discuss Your Cloud Journey
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#0A0F1C]">
            Connect with our consultants for AWS, DevOps, security, managed services, or AI engagements.
          </p>
        </Reveal>

        <div className="overflow-hidden rounded-[1.75rem] border border-[#0A0F1C]/8 bg-white shadow-[0_32px_80px_rgba(10,15,28,0.1)]">
          <div className="grid lg:grid-cols-[1fr_1.05fr]">
            <div className="border-b border-[#0A0F1C]/6 bg-[#F8F9FC] p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <ContactInfoCards />
            </div>
            <div className="p-6 sm:p-8">
              <Reveal delay={0.06}>
                <AssessmentForm variant="light" className="border-0 bg-transparent p-0 shadow-none" showPriorityBadge />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
