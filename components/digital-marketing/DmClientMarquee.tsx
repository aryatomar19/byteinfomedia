"use client";

import { esteemedClients, esteemedClientsSection } from "@/data/esteemed-clients";
import { DmGsapReveal } from "@/components/digital-marketing/DmGsapReveal";

const defaultLogoClassName =
  "max-h-9 w-full max-w-[8.5rem] object-contain object-center transition duration-300 group-hover:scale-[1.03]";

function ClientLogoCard({
  name,
  logo,
  logoAlt,
  logoClassName,
}: {
  name: string;
  logo: string;
  logoAlt: string;
  logoClassName?: string;
}) {
  return (
    <div className="dm-marquee-card group mx-3 flex h-[5.25rem] w-[11rem] shrink-0 items-center justify-center rounded-2xl border border-white/12 bg-white/95 px-5 py-4 shadow-[0_12px_40px_rgba(0,0,0,0.2)] backdrop-blur-md sm:h-[5.75rem] sm:w-[12rem]">
      <img
        src={logo}
        alt={logoAlt}
        className={logoClassName ?? defaultLogoClassName}
        loading="lazy"
        decoding="async"
      />
      <span className="sr-only">{name}</span>
    </div>
  );
}

export function DmClientMarquee() {
  const track = [...esteemedClients, ...esteemedClients];

  return (
    <section className="dm-marquee-section relative overflow-hidden border-y border-white/8 py-10 sm:py-12">
      <div className="pointer-events-none absolute inset-0 grid-pattern-light opacity-[0.08]" aria-hidden />
      <div className="dm-container relative">
        <DmGsapReveal className="text-center">
          <span className="dm-eyebrow dm-eyebrow--light">Trusted Partners</span>
          <h2 className="dm-heading mt-3 text-white">{esteemedClientsSection.title}</h2>
        </DmGsapReveal>
      </div>

      <div className="dm-marquee group relative mt-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0A0F1C] to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0A0F1C] to-transparent sm:w-24" />
        <div className="dm-marquee-track flex w-max items-center">
          {track.map((client, index) => (
            <ClientLogoCard
              key={`${client.name}-${index}`}
              name={client.name}
              logo={client.logo}
              logoAlt={client.logoAlt}
              logoClassName={"logoClassName" in client ? client.logoClassName : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
