"use client";

import { digitalMarketingPage } from "@/data/digital-marketing";
import { DmCtaSection } from "@/components/digital-marketing/DmCtaSection";
import { DmExpertiseGrid } from "@/components/digital-marketing/DmExpertiseGrid";
import { DmFaqSection } from "@/components/digital-marketing/DmFaqSection";
import { DmHeroSection } from "@/components/digital-marketing/DmHeroSection";
import { DmProcessSection } from "@/components/digital-marketing/DmProcessSection";
import { DmResultsStats } from "@/components/digital-marketing/DmResultsStats";
import { DmServicesPremium } from "@/components/digital-marketing/DmServicesPremium";
import { DmWhyTrustSection } from "@/components/digital-marketing/DmWhyTrustSection";

export function DigitalMarketingPage() {
  const { hero, whyByte, expertise, services, process, results, faq, cta } = digitalMarketingPage;

  return (
    <div className="dm-landing dm-landing--enterprise relative overflow-x-hidden">
      <DmHeroSection hero={hero} />
      <DmWhyTrustSection {...whyByte} />
      <DmExpertiseGrid {...expertise} />
      <DmServicesPremium {...services} />
      <DmProcessSection {...process} />
      <DmResultsStats {...results} />
      <DmFaqSection {...faq} />
      <DmCtaSection {...cta} />
    </div>
  );
}
