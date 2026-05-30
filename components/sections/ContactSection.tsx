"use client";

import { Link2, Mail, MapPin, MessageCircle, PhoneCall } from "lucide-react";
import { company } from "@/data/site";
import { AssessmentForm } from "@/components/forms/AssessmentForm";
import { Reveal } from "@/components/motion/Reveal";
import { Card, CardContent } from "@/components/ui/card";

const contactCards = [
  {
    label: "Phone",
    value: company.phone,
    href: company.phoneHref,
    icon: PhoneCall,
    detail: "Direct consultation line",
  },
  {
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: company.whatsappHref,
    icon: MessageCircle,
    detail: "Fast response for urgent queries",
  },
  {
    label: "Email",
    value: company.email,
    href: `mailto:${company.email}`,
    icon: Mail,
    detail: "Send requirements or RFPs",
  },
  {
    label: "LinkedIn",
    value: "Company Page",
    href: company.linkedin,
    icon: Link2,
    detail: "Professional company updates",
    highlight: true,
  },
];

export function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(10,15,28,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(10,15,28,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          <div>
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#FF6B2C]">Contact</span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0A0F1C] sm:text-4xl">
                Talk to AWS & DevOps experts today
              </h2>
              <p className="mt-4 max-w-lg text-base leading-7 text-[#52647a]">
                Reach BYTEINFOMEDIA for cloud migration, DevOps automation, cybersecurity, managed operations, or
                generative AI consulting.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {contactCards.map((card) => (
                <a key={card.label} href={card.href} target={card.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  <Card
                    className={`h-full transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(10,15,28,0.08)] ${
                      card.highlight ? "bg-gradient-to-br from-[#FFF7F3] to-white" : ""
                    }`}
                  >
                    <CardContent>
                      <div className="flex items-start justify-between gap-3">
                        <card.icon className="h-6 w-6 text-[#FF6B2C]" />
                        <span className="rounded-full bg-[#FFF7F3] px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[#c84a17]">
                          {card.label}
                        </span>
                      </div>
                      <p className="mt-4 text-lg font-extrabold text-[#0A0F1C]">{card.value}</p>
                      <p className="mt-2 text-sm text-[#52647a]">{card.detail}</p>
                    </CardContent>
                  </Card>
                </a>
              ))}

              <Card className="sm:col-span-2">
                <CardContent>
                  <MapPin className="h-6 w-6 text-[#FF6B2C]" />
                  <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-[#52647a]">Office Address</p>
                  <div className="mt-3 grid gap-1 text-sm font-semibold text-[#0A0F1C] sm:grid-cols-2">
                    {company.addressLines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Reveal delay={0.1}>
            <AssessmentForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
