"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";

type ServiceCtaBandProps = {
  title: string;
  buttonLabel?: string;
  buttonHref?: string;
};

export function ServiceCtaBand({
  title,
  buttonLabel = "Book Consultation",
  buttonHref = "/book-consultation/",
}: ServiceCtaBandProps) {
  return (
    <section className="mesh-hero relative overflow-hidden section-enterprise">
      <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-[family-name:var(--font-inter)] text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <div className="mt-6 flex justify-center">
            <Button size="lg" asChild>
              <Link href={buttonHref}>{buttonLabel}</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
