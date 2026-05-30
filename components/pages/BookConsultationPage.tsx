"use client";

import { AssessmentForm } from "@/components/forms/AssessmentForm";
import { ContactInfoCards } from "@/components/contact/ContactInfoCards";
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
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <Reveal>
              <AssessmentForm
                idPrefix="consultation"
                variant="light"
                title="Consultation Request"
                description="Share your goals and our team will arrange a consultation with the right specialists."
                submitLabel="BOOK CONSULTATION"
                showPreferredContact
                showPriorityBadge={false}
              />
            </Reveal>
            <Reveal delay={0.08}>
              <div className="lg:sticky lg:top-24">
                <h2 className="mb-5 text-lg font-extrabold text-[#0A0F1C]">Contact Information</h2>
                <ContactInfoCards />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
