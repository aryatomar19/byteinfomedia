"use client";

import { DmFaqSplineBackground } from "@/components/digital-marketing/DmFaqSplineBackground";
import { DmNumberedFaq } from "@/components/digital-marketing/DmNumberedFaq";

export function DmFaqSection({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: readonly { question: string; answer: string }[];
}) {
  return (
    <section
      id="dm-faq"
      className="dm-section dm-faq-section"
      aria-labelledby="dm-faq-heading"
    >
      <DmFaqSplineBackground />
      <div className="dm-faq-spline-overlay" aria-hidden />

      <div className="dm-container dm-faq-section__content">
        <div className="faq-container grid gap-4 lg:grid-cols-2 lg:items-stretch lg:gap-6">
          <div className="hidden lg:block" aria-hidden />

          <div className="faq-content">
            <h2 id="dm-faq-heading" className="dm-heading dm-heading--xl dm-faq-section__heading">
              {title}
            </h2>
            <p className="dm-faq-section__description mt-2 max-w-md text-base leading-7">{description}</p>
            <div className="mt-4">
              <DmNumberedFaq items={items} variant="light" compact />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
