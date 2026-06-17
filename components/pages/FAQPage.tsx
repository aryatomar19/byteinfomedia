"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FAQAccordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqItems = [
  {
    question: "What services does Byte Infomedia provide?",
    answer:
      "We deliver cloud services, managed services, cybersecurity, generative AI solutions, website development, SEO, content writing, and social media marketing for modern businesses.",
  },
  {
    question: "How can I request a consultation?",
    answer:
      "You can book a consultation through our Contact Us form on the homepage or visit the Book Consultation page to share your requirements with our team.",
  },
  {
    question: "Do you work with businesses across India?",
    answer:
      "Yes. We support organizations across India with remote and on-site consulting, implementation, and managed operations.",
  },
  {
    question: "Which cloud platforms do you support?",
    answer:
      "Our consultants specialize in AWS and enterprise cloud architectures, including migration, security, FinOps, Kubernetes, and DevOps automation.",
  },
];

export function FAQPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-[#0A0F1C]/6 bg-gradient-to-b from-[#FFF9F6] to-white py-12 sm:py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" size="sm" className="mb-4 h-8 -ml-2 px-2" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#FF6B2C]">Support</p>
          <h1 className="mt-3 font-[family-name:var(--font-inter)] text-3xl font-extrabold tracking-tight text-[#0A0F1C] sm:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-base leading-8 text-[#334155]">
            Find answers to common questions about our services, consulting process, and how we help businesses grow.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FAQAccordion items={faqItems} dark={false} variant="premium" />
        </div>
      </section>
    </div>
  );
}
