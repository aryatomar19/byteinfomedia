"use client";

import { digitalMarketingPage } from "@/data/digital-marketing";
import { DmCapabilitiesShowcase } from "@/components/digital-marketing/DmCapabilitiesShowcase";
import { DmClientsBento } from "@/components/digital-marketing/DmClientsBento";
import { DmHeroSection } from "@/components/digital-marketing/DmHeroSection";
import { DmPageAmbient } from "@/components/digital-marketing/DmPageAmbient";
import { DmPerformanceMetrics } from "@/components/digital-marketing/DmPerformanceMetrics";
import { DmResultsApproach } from "@/components/digital-marketing/DmResultsApproach";
import { DmWhySection } from "@/components/digital-marketing/DmWhySection";
import { DmWorkflowTimeline } from "@/components/digital-marketing/DmWorkflowTimeline";

export function DigitalMarketingPage() {
  const { hero, whyByte, capabilities, performanceMetrics, workflow, resultsApproach, clientsChoose } =
    digitalMarketingPage;

  return (
    <div className="dm-landing dm-landing--enterprise relative overflow-x-hidden">
      <DmPageAmbient />
      <DmHeroSection hero={hero} />
      <DmWhySection {...whyByte} />
      <DmCapabilitiesShowcase {...capabilities} />
      <DmPerformanceMetrics {...performanceMetrics} />
      <DmWorkflowTimeline {...workflow} />
      <DmResultsApproach {...resultsApproach} />
      <DmClientsBento {...clientsChoose} />
    </div>
  );
}
