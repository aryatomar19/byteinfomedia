"use client";

import { AssessmentForm } from "@/components/forms/AssessmentForm";
import { ContactMap } from "@/components/contact/ContactMap";
import { Reveal } from "@/components/motion/Reveal";

export function BookConsultationPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-[#0A0F1C]/6 bg-gradient-to-b from-[#FFF9F6] to-white py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#FF6B2C]">Consultation</p>
            <h1 className="mt-3 font-[family-name:var(--font-inter)] text-3xl font-extrabold tracking-tight text-[#0A0F1C] sm:text-4xl lg:text-5xl">
              Book a Consultation
            </h1>
            <p className="mt-4 text-base leading-8 text-[#0A0F1C] sm:text-lg">
              Schedule a discussion with our cloud, DevOps, cybersecurity and AI consultants.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="consultation" className="scroll-mt-24 py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch lg:gap-10">
            <Reveal className="h-full">
              <div className="h-full overflow-hidden rounded-[1.75rem] border border-[#0A0F1C]/8 bg-white shadow-[0_32px_80px_rgba(10,15,28,0.1)]">
                <AssessmentForm
                  idPrefix="consultation"
                  variant="light"
                  comfortable
                  className="border-0 bg-transparent shadow-none"
                  title="Consultation Request"
                  description="Share your goals and our team will arrange a consultation with the right specialists."
                  submitLabel="BOOK CONSULTATION"
                  showPriorityBadge
                  showServiceField={false}
                  showPreferredContact={false}
                />
              </div>
            </Reveal>
            <Reveal delay={0.08} className="h-full w-full">
              <div className="flex h-full w-full flex-col items-center">
                <h2 className="mb-5 w-full text-center text-4xl font-bold text-[#FF6B35] lg:text-[2.625rem] lg:leading-tight">
                  How to Reach Us
                </h2>
                <ContactMap className="w-full min-h-[280px] flex-1" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
