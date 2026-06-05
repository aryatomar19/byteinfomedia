"use client";

import { esteemedClients, esteemedClientsSection } from "@/data/esteemed-clients";
import { SectionHeading } from "@/components/sections/SectionHeading";

function ClientLogoCard({ name, logo, logoAlt }: { name: string; logo: string; logoAlt: string }) {
  return (
    <div className="clients-marquee-card enterprise-card group mx-2 flex h-[5.5rem] w-[11.5rem] shrink-0 items-center justify-center rounded-2xl px-5 py-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_56px_rgba(10,15,28,0.1)] sm:mx-3 sm:h-[6rem] sm:w-[12.5rem]">
      <img
        src={logo}
        alt={logoAlt}
        className="max-h-10 w-full max-w-[9.5rem] object-contain object-center transition duration-300 group-hover:scale-[1.03]"
        loading="lazy"
        decoding="async"
      />
      <span className="sr-only">{name}</span>
    </div>
  );
}

export function EsteemedClients() {
  const track = [...esteemedClients, ...esteemedClients];

  return (
    <section
      className="border-y border-[#0A0F1C]/6 bg-white py-10 md:py-11 lg:py-12"
      aria-labelledby="esteemed-clients-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={esteemedClientsSection.title} />

        <div className="clients-marquee group relative mt-2 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent sm:w-16" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent sm:w-16" />
          <div className="clients-marquee-track flex w-max items-center">
            {track.map((client, index) => (
              <ClientLogoCard
                key={`${client.name}-${index}`}
                name={client.name}
                logo={client.logo}
                logoAlt={client.logoAlt}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
