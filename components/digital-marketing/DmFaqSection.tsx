"use client";

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
        <div className="faq-container grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="faq-image overflow-hidden">
            <img
              src={image}
              alt={imageAlt}
              className="faq-image__img h-full w-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="faq-content">
            <h2 id="dm-faq-heading" className="dm-heading dm-heading--xl text-[#0A0F1C]">
              {title}
            </h2>
            <p className="mt-2 max-w-md text-base leading-7 text-[#0A0F1C]/60">{description}</p>
            <div className="mt-5">
              <DmNumberedFaq items={items} variant="light" compact />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
