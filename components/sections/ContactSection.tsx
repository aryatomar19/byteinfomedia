"use client";

import { ArrowUpRight, Link2, Mail, MapPin, PhoneCall } from "lucide-react";
import { company } from "@/data/site";
import { AssessmentForm } from "@/components/forms/AssessmentForm";
import { InstagramIcon } from "@/components/icons/Instagram";
import { Reveal } from "@/components/motion/Reveal";

const cardClass =
  "group flex items-start gap-4 rounded-xl border border-[#0A0F1C]/8 bg-white p-4 shadow-[0_4px_20px_rgba(10,15,28,0.05)] transition duration-200 hover:-translate-y-0.5 hover:border-[#FF6B2C]/30 hover:shadow-[0_12px_32px_rgba(255,107,44,0.12)]";

const iconWrapClass =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#FF6B2C]/15 to-[#FF6B2C]/5 text-[#FF6B2C] ring-1 ring-[#FF6B2C]/15 transition group-hover:from-[#FF6B2C] group-hover:to-[#e85f24] group-hover:text-white group-hover:ring-[#FF6B2C]/40";

export function ContactSection() {
  return (
    <section id="assessment" className="section-surface py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-[#0A0F1C]/8 bg-white shadow-[0_20px_56px_rgba(10,15,28,0.07)]">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="border-b border-[#0A0F1C]/6 bg-gradient-to-br from-[#FFF9F6] via-white to-[#F8F9FC] p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <Reveal>
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#FF6B2C]">Get in touch</p>
                <h2 className="mt-3 font-[family-name:var(--font-inter)] text-2xl font-extrabold leading-tight tracking-tight text-[#0A0F1C] sm:text-3xl">
                  Let&apos;s Discuss Your Cloud Journey
                </h2>
                <p className="mt-3 max-w-md text-sm leading-7 text-[#5f6f86]">
                  Connect with our consultants for AWS, DevOps, security, managed services, or AI engagements.
                </p>
              </Reveal>

              <div className="mt-7 grid gap-3">
                <a href={company.phoneHref} className={cardClass}>
                  <span className={iconWrapClass}>
                    <PhoneCall className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[0.65rem] font-bold uppercase tracking-wider text-[#5f6f86]">Phone</p>
                    <p className="mt-0.5 text-base font-bold text-[#0A0F1C]">{company.phone}</p>
                  </div>
                  <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-[#0A0F1C]/20 transition group-hover:text-[#FF6B2C]" />
                </a>

                <a href={`mailto:${company.email}`} className={cardClass}>
                  <span className={iconWrapClass}>
                    <Mail className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[0.65rem] font-bold uppercase tracking-wider text-[#5f6f86]">Email</p>
                    <p className="mt-0.5 break-all text-base font-bold text-[#0A0F1C]">{company.email}</p>
                  </div>
                  <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-[#0A0F1C]/20 transition group-hover:text-[#FF6B2C]" />
                </a>

                <a href={company.linkedin} target="_blank" rel="noreferrer" className={cardClass}>
                  <span className={iconWrapClass}>
                    <Link2 className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[0.65rem] font-bold uppercase tracking-wider text-[#5f6f86]">LinkedIn</p>
                    <p className="mt-0.5 text-sm font-bold text-[#0A0F1C]">Company Page</p>
                  </div>
                  <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-[#0A0F1C]/20 transition group-hover:text-[#FF6B2C]" />
                </a>

                <a href={company.instagram} target="_blank" rel="noreferrer" className={cardClass}>
                  <span className={iconWrapClass}>
                    <InstagramIcon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[0.65rem] font-bold uppercase tracking-wider text-[#5f6f86]">Instagram</p>
                    <p className="mt-0.5 text-sm font-bold text-[#0A0F1C]">{company.instagramHandle}</p>
                  </div>
                  <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-[#0A0F1C]/20 transition group-hover:text-[#FF6B2C]" />
                </a>

                <div className={`${cardClass} cursor-default hover:translate-y-0`}>
                  <span className={iconWrapClass}>
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[0.65rem] font-bold uppercase tracking-wider text-[#5f6f86]">Address</p>
                    <p className="mt-1 text-sm font-semibold leading-snug text-[#0A0F1C]">{company.addressLines[0]}</p>
                    <p className="text-sm font-semibold leading-snug text-[#0A0F1C]">{company.addressLines[1]}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8">
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
