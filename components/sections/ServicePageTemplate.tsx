"use client";

import { CheckCircle2 } from "lucide-react";
import { AssessmentForm } from "@/components/forms/AssessmentForm";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export type ServicePageData = {
  title: string;
  hero: { title: string; description: string };
  overview: string;
  services: string[];
  benefits: string[];
  process?: { step: string; title: string; description: string }[];
  methodology?: { step: string; title: string; description: string }[];
  technologies?: string[];
  cta: { title: string; description: string };
};

export function ServicePageTemplate({ data }: { data: ServicePageData }) {
  const steps = data.process ?? data.methodology ?? [];

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#E8F0FF] via-white to-[#FFF4EC] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#FF6B2C]">{data.title}</span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[#0A0F1C] sm:text-5xl">{data.hero.title}</h1>
            <p className="mt-6 text-lg leading-8 text-[#52647a]">{data.hero.description}</p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="#assessment">Request Free Assessment</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <h2 className="text-2xl font-extrabold text-[#0A0F1C] sm:text-3xl">Overview</h2>
            <p className="mt-4 text-base leading-7 text-[#52647a]">{data.overview}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#F4F6FA] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10">
            <h2 className="text-2xl font-extrabold text-[#0A0F1C] sm:text-3xl">Services</h2>
          </Reveal>
          <RevealStagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {data.services.map((service) => (
              <RevealItem key={service}>
                <Card className="h-full">
                  <CardContent className="flex items-start gap-3 py-5">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#FF6B2C]" />
                    <span className="text-sm font-semibold text-[#0A0F1C]">{service}</span>
                  </CardContent>
                </Card>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10">
            <h2 className="text-2xl font-extrabold text-[#0A0F1C] sm:text-3xl">Benefits</h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {data.benefits.map((benefit) => (
              <Reveal key={benefit}>
                <Card>
                  <CardContent>
                    <p className="text-sm leading-7 text-[#52647a]">{benefit}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {steps.length > 0 && (
        <section className="bg-[#F4F6FA] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mb-10">
              <h2 className="text-2xl font-extrabold text-[#0A0F1C] sm:text-3xl">
                {data.process ? "Implementation Process" : "Methodology"}
              </h2>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <Reveal key={step.step}>
                  <Card className="h-full">
                    <CardContent>
                      <span className="text-3xl font-black text-[#FF6B2C]/30">{step.step}</span>
                      <h3 className="mt-2 font-extrabold text-[#0A0F1C]">{step.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-[#52647a]">{step.description}</p>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {data.technologies && (
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mb-8">
              <h2 className="text-2xl font-extrabold text-[#0A0F1C] sm:text-3xl">Technology Stack</h2>
            </Reveal>
            <Reveal className="flex flex-wrap gap-3">
              {data.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[#0A0F1C]/10 bg-[#F4F6FA] px-4 py-2 text-sm font-semibold text-[#0A0F1C]"
                >
                  {tech}
                </span>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      <section className="bg-[#F4F6FA] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <h2 className="text-3xl font-extrabold text-[#0A0F1C]">{data.cta.title}</h2>
              <p className="mt-4 text-base leading-7 text-[#52647a]">{data.cta.description}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <AssessmentForm idPrefix={data.title.replace(/\s/g, "-").toLowerCase()} />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
