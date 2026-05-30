import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { managedServicesPage } from "@/data/managed-services";

export const metadata: Metadata = {
  title: "Managed Services",
  description: managedServicesPage.hero.description,
  alternates: { canonical: "/managed-services/" },
};

export default function Page() {
  return <ServicePageTemplate data={managedServicesPage} />;
}
