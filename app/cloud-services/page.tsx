import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { cloudServicesPage } from "@/data/cloud-services";

export const metadata: Metadata = {
  title: "Cloud Services",
  description: cloudServicesPage.hero.description,
  alternates: { canonical: "/cloud-services/" },
};

export default function Page() {
  return <ServicePageTemplate data={cloudServicesPage} />;
}
