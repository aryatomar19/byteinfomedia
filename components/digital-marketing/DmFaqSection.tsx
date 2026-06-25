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
      className="dm-section dm-faq-section dm-section--white relative bg-white"
      aria-labelledby="dm-faq-heading"
    >
      <div className="dm-container relative">
        <div className="faq-container grid gap-4 lg:grid-cols-2 lg:items-stretch lg:gap-6">
          <div className="faq-image faq-image--spline overflow-hidden lg:flex lg:min-h-0">
            <DmFaqSplineBackground />
          </div>

          <div className="faq-content relative">
            <h2 id="dm-faq-heading" className="dm-heading dm-heading--xl text-[#0A0F1C]">
              {title}
            </h2>
            <p className="mt-2 max-w-md text-base leading-7 text-[#0A0F1C]/60">{description}</p>
            <div className="mt-4">
              <DmNumberedFaq items={items} variant="light" compact />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
