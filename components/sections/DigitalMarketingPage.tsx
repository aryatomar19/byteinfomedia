"use client";

import { digitalMarketingPage } from "@/data/digital-marketing";
import { DmExpertiseGrid } from "@/components/digital-marketing/DmExpertiseGrid";
import { DmHeroSection } from "@/components/digital-marketing/DmHeroSection";
import { DmPageAmbient } from "@/components/digital-marketing/DmPageAmbient";
import { DmProcessSection } from "@/components/digital-marketing/DmProcessSection";
import { DmResultsStats } from "@/components/digital-marketing/DmResultsStats";
import { DmServicesPremium } from "@/components/digital-marketing/DmServicesPremium";
import { DmWhyTrustSection } from "@/components/digital-marketing/DmWhyTrustSection";

export function DigitalMarketingPage() {
  const { hero, whyByte, expertise, services, process, results } = digitalMarketingPage;

  return (
    <div className="dm-landing dm-landing--enterprise relative overflow-x-hidden">
      <DmPageAmbient />
      <DmHeroSection hero={hero} />
      <DmWhyTrustSection {...whyByte} />
      <DmExpertiseGrid {...expertise} />
      <DmServicesPremium {...services} />
      <DmProcessSection {...process} />
      <DmResultsStats {...results} />
    </div>
  );
}
