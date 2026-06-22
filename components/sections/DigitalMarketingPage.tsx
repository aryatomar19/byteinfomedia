"use client";

import { digitalMarketingPage } from "@/data/digital-marketing";
import { DmHeroSection } from "@/components/digital-marketing/DmHeroSection";
import { DmPageAmbient } from "@/components/digital-marketing/DmPageAmbient";
import { DmProcessTimeline } from "@/components/digital-marketing/DmProcessTimeline";
import { DmServiceGrid } from "@/components/digital-marketing/DmServiceGrid";
import { DmWhoWeAre } from "@/components/digital-marketing/DmWhoWeAre";
import { DmWhySection } from "@/components/digital-marketing/DmWhySection";

export function DigitalMarketingPage() {
  const { hero, whoWeAre, services, process, whyByte } = digitalMarketingPage;

  return (
    <div className="dm-landing dm-landing--interactive relative">
      <DmPageAmbient />
      <DmHeroSection hero={hero} />
      <DmWhoWeAre {...whoWeAre} />
      <DmServiceGrid title={services.title} items={services.items} />
      <DmProcessTimeline title={process.title} steps={process.steps} />
      <DmWhySection {...whyByte} />
    </div>
  );
}
