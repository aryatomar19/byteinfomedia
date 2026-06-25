"use client";

import { DmFaqSplineBackground } from "@/components/digital-marketing/DmFaqSplineBackground";
import { DmNumberedFaq } from "@/components/digital-marketing/DmNumberedFaq";

export function DmFaqSection({
  title,
  description,
  image,
  imageAlt,
  items,
}: {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
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
          <div className="faq-image overflow-hidden lg:flex lg:min-h-0">
            <img
              src={image}
              alt={imageAlt}
              className="faq-image__img h-full w-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="faq-content relative">
            <h2 id="dm-faq-heading" className="dm-heading dm-heading--xl text-[#0A0F1C]">
              {title}
            </h2>
            <p className="mt-2 max-w-md text-base leading-7 text-[#0A0F1C]/60">{description}</p>
            <div className="faq-accordion-stage relative mt-4 overflow-hidden">
              <DmFaqSplineBackground />
              <div className="faq-accordion-stage__content relative z-[2]">
                <DmNumberedFaq items={items} variant="light" compact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
