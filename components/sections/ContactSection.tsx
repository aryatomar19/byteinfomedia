"use client";

import { ArrowUpRight, Link2, Mail, MapPin, PhoneCall } from "lucide-react";
import { company } from "@/data/site";
import { AssessmentForm } from "@/components/forms/AssessmentForm";
import { Reveal } from "@/components/motion/Reveal";

export function ContactSection() {
  return (
    <section id="assessment" className="section-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-[#0A0F1C]/6 bg-white shadow-[0_32px_80px_rgba(10,15,28,0.08)]">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            {/* Left — contact */}
            <div className="border-b border-[#0A0F1C]/6 bg-gradient-to-br from-[#FFF9F6] via-white to-[#F8F9FC] p-8 sm:p-10 lg:border-b-0 lg:border-r">
              <Reveal>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B2C]">Get in touch</p>
                <h2 className="mt-4 font-[family-name:var(--font-inter)] text-3xl font-extrabold leading-tight tracking-tight text-[#0A0F1C] sm:text-4xl">
                  Let&apos;s Discuss Your Cloud Journey
                </h2>
                <p className="mt-4 max-w-md text-base leading-7 text-[#5f6f86]">
                  Connect with our consultants for AWS, DevOps, security, managed services, or AI engagements.
                </p>
              </Reveal>

              <div className="mt-10 space-y-5">
                <a
                  href={company.phoneHref}
                  className="group flex items-start gap-4 rounded-2xl border border-[#0A0F1C]/6 bg-white p-5 shadow-[0_8px_30px_rgba(10,15,28,0.04)] transition hover:-translate-y-0.5 hover:border-[#FF6B2C]/25 hover:shadow-[0_16px_40px_rgba(255,107,44,0.1)]"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FF6B2C]/10 text-[#FF6B2C]">
                    <PhoneCall className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#5f6f86]">Phone</p>
                    <p className="mt-1 text-lg font-bold text-[#0A0F1C]">{company.phone}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-[#0A0F1C]/25 transition group-hover:text-[#FF6B2C]" />
                </a>

                <a
                  href={`mailto:${company.email}`}
                  className="group flex items-start gap-4 rounded-2xl border border-[#0A0F1C]/6 bg-white p-5 shadow-[0_8px_30px_rgba(10,15,28,0.04)] transition hover:-translate-y-0.5 hover:border-[#FF6B2C]/25 hover:shadow-[0_16px_40px_rgba(255,107,44,0.1)]"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FF6B2C]/10 text-[#FF6B2C]">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#5f6f86]">Email</p>
                    <p className="mt-1 break-all text-lg font-bold text-[#0A0F1C]">{company.email}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-[#0A0F1C]/25 transition group-hover:text-[#FF6B2C]" />
                </a>

                <a
                  href={company.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-4 rounded-2xl border border-[#0A0F1C]/6 bg-white p-5 shadow-[0_8px_30px_rgba(10,15,28,0.04)] transition hover:-translate-y-0.5 hover:border-[#FF6B2C]/25 hover:shadow-[0_16px_40px_rgba(255,107,44,0.1)]"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FF6B2C]/10 text-[#FF6B2C]">
                    <Link2 className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#5f6f86]">LinkedIn</p>
                    <p className="mt-1 text-sm font-bold leading-snug text-[#0A0F1C]">{company.linkedin}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-[#0A0F1C]/25 transition group-hover:text-[#FF6B2C]" />
                </a>

                <div className="rounded-2xl border border-[#0A0F1C]/6 bg-white p-5 shadow-[0_8px_30px_rgba(10,15,28,0.04)]">
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FF6B2C]/10 text-[#FF6B2C]">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#5f6f86]">Address</p>
                      <div className="mt-2 space-y-0.5 text-sm font-semibold leading-6 text-[#0A0F1C]">
                        {company.addressLines.map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="p-8 sm:p-10 lg:p-10">
              <Reveal delay={0.06}>
                <AssessmentForm variant="light" className="border-0 bg-transparent p-0 shadow-none" />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
