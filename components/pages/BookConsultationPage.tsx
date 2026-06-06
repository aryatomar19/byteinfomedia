"use client";

import { AssessmentForm } from "@/components/forms/AssessmentForm";
import { ContactInfoCards } from "@/components/contact/ContactInfoCards";
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

      <section className="py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-10">
            <Reveal>
              <div className="overflow-hidden rounded-[1.75rem] border border-[#0A0F1C]/8 bg-white p-3 shadow-[0_32px_80px_rgba(10,15,28,0.1)] sm:p-4">
                <AssessmentForm
                  idPrefix="consultation"
                  variant="light"
                  compact
                  className="border-0 bg-transparent p-0 shadow-none"
                  title="Consultation Request"
                  description="Share your goals and our team will arrange a consultation with the right specialists."
                  submitLabel="BOOK CONSULTATION"
                  showPriorityBadge
                  showServiceField={false}
                  showPreferredContact={false}
                />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="flex h-full flex-col lg:sticky lg:top-24">
                <h2 className="mb-5 text-lg font-bold text-[#0A0F1C]">Contact Information</h2>
                <ContactInfoCards />
                <ContactMap className="mt-6" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
