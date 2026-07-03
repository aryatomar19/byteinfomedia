"use client";

import dynamic from "next/dynamic";
import { digitalMarketingPage } from "@/data/digital-marketing";
import { DmHeroSection } from "@/components/digital-marketing/DmHeroSection";

const DmWhyTrustSection = dynamic(
  () =>
    import("@/components/digital-marketing/DmWhyTrustSection").then((mod) => ({
      default: mod.DmWhyTrustSection,
    })),
  { loading: () => null },
);

const DmSpecialitySection = dynamic(
  () =>
    import("@/components/digital-marketing/DmSpecialitySection").then((mod) => ({
      default: mod.DmSpecialitySection,
    })),
  { loading: () => null },
);

const DmServicesPremium = dynamic(
  () =>
    import("@/components/digital-marketing/DmServicesPremium").then((mod) => ({
      default: mod.DmServicesPremium,
    })),
  { loading: () => null },
);

const DmProcessSection = dynamic(
  () =>
    import("@/components/digital-marketing/DmProcessSection").then((mod) => ({
      default: mod.DmProcessSection,
    })),
  { loading: () => null },
);

const DmResultsStats = dynamic(
  () =>
    import("@/components/digital-marketing/DmResultsStats").then((mod) => ({
      default: mod.DmResultsStats,
    })),
  { loading: () => null },
);

const DmFaqSection = dynamic(
  () =>
    import("@/components/digital-marketing/DmFaqSection").then((mod) => ({
      default: mod.DmFaqSection,
    })),
  { loading: () => null },
);

const DmCtaSection = dynamic(
  () =>
    import("@/components/digital-marketing/DmCtaSection").then((mod) => ({
      default: mod.DmCtaSection,
    })),
  { loading: () => null },
);

export function DigitalMarketingPage() {
  const { hero, whyByte, speciality, services, process, results, faq, cta } = digitalMarketingPage;

  return (
    <div className="dm-landing dm-landing--enterprise relative overflow-x-hidden">
      <DmHeroSection hero={hero} />
      <DmWhyTrustSection {...whyByte} />
      <DmSpecialitySection {...speciality} />
      <DmServicesPremium {...services} />
      <DmProcessSection {...process} />
      <DmResultsStats {...results} />
      <DmFaqSection {...faq} />
      <DmCtaSection {...cta} />
    </div>
  );
}
