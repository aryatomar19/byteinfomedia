import type { Metadata } from "next";
import { PremiumServicePage } from "@/components/sections/PremiumServicePage";
import { cloudServicesPage } from "@/data/cloud-services";

export const metadata: Metadata = {
  title: "Cloud Services",
  description: cloudServicesPage.hero.description,
  alternates: { canonical: "/cloud-services/" },
};

export default function Page() {
  return <PremiumServicePage data={cloudServicesPage} />;
}
