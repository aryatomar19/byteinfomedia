"use client";

import { Link2, Mail, MapPin, PhoneCall } from "lucide-react";
import { company } from "@/data/site";
import { AssessmentForm } from "@/components/forms/AssessmentForm";
import { Reveal } from "@/components/motion/Reveal";

const contactItems = [
  {
    label: "Phone",
    value: company.phone,
    href: company.phoneHref,
    icon: PhoneCall,
  },
  {
    label: "Email",
    value: company.email,
    href: `mailto:${company.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "Company Page",
    href: company.linkedin,
    icon: Link2,
    external: true,
  },
];

export function ContactSection() {
  return (
    <section id="assessment" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12">
          <h2 className="font-[family-name:var(--font-inter)] text-3xl font-extrabold text-[#0A0F1C] sm:text-4xl">
            Contact & Free Assessment
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-[#5f6f86]">
            Speak with our consultants about AWS, DevOps, security, managed services, or generative AI.
          </p>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-4">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                className="enterprise-card flex items-start gap-4 rounded-2xl p-5 transition hover:-translate-y-0.5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FF6B2C]/10 text-[#FF6B2C]">
                  <item.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#5f6f86]">{item.label}</p>
                  <p className="mt-1 text-lg font-bold text-[#0A0F1C]">{item.value}</p>
                </div>
              </a>
            ))}

            <Reveal>
              <div className="enterprise-card rounded-2xl p-6">
                <MapPin className="h-6 w-6 text-[#FF6B2C]" />
                <p className="mt-3 text-xs font-bold uppercase tracking-wider text-[#5f6f86]">Address</p>
                <div className="mt-3 space-y-1 text-sm font-semibold leading-6 text-[#0A0F1C]">
                  {company.addressLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <AssessmentForm variant="light" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
