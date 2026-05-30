"use client";

import { Link2, Mail, MapPin, MessageCircle, PhoneCall } from "lucide-react";
import { company } from "@/data/site";
import { AssessmentForm } from "@/components/forms/AssessmentForm";
import { Reveal } from "@/components/motion/Reveal";

const contactCards = [
  { label: "Phone", value: company.phone, href: company.phoneHref, icon: PhoneCall, detail: "Direct consultation line" },
  { label: "WhatsApp", value: "Chat on WhatsApp", href: company.whatsappHref, icon: MessageCircle, detail: "Fast response" },
  { label: "Email", value: company.email, href: `mailto:${company.email}`, icon: Mail, detail: "RFPs & requirements" },
  { label: "LinkedIn", value: "Company Page", href: company.linkedin, icon: Link2, detail: "Professional updates", highlight: true },
];

export function ContactSection() {
  return (
    <section id="assessment" className="mesh-section relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF6B2C]/5 to-transparent" />
      <div className="absolute inset-0 grid-pattern opacity-25" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B2C]">Get Started</span>
          <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">Contact & Free Assessment</h2>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="grid gap-4 sm:grid-cols-2">
            {contactCards.map((card) => (
              <a key={card.label} href={card.href} target={card.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                <Reveal>
                  <div
                    className={`glass-card h-full rounded-2xl p-5 transition hover:-translate-y-1 hover:border-[#FF6B2C]/40 ${
                      card.highlight ? "ring-1 ring-[#FF6B2C]/30" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <card.icon className="h-6 w-6 text-[#FF6B2C]" />
                      <span className="rounded-full bg-[#FF6B2C]/15 px-2 py-0.5 text-[0.6rem] font-bold uppercase text-[#ffb088]">
                        {card.label}
                      </span>
                    </div>
                    <p className="mt-4 text-lg font-extrabold text-white">{card.value}</p>
                    <p className="mt-1 text-sm text-white/55">{card.detail}</p>
                  </div>
                </Reveal>
              </a>
            ))}
            <Reveal className="sm:col-span-2">
              <div className="glass-card rounded-2xl p-6">
                <MapPin className="h-6 w-6 text-[#FF6B2C]" />
                <p className="mt-3 text-xs font-bold uppercase tracking-wider text-white/50">Office Address</p>
                <div className="mt-3 grid gap-1 text-sm font-semibold text-white sm:grid-cols-2">
                  {company.addressLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <AssessmentForm variant="dark" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
