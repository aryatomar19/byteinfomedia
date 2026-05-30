import type { Metadata } from "next";
import { ManagedServicesPage } from "@/components/sections/ManagedServicesPage";
import { managedServicesPage } from "@/data/managed-services";

export const metadata: Metadata = {
  title: "Managed Services",
  description: managedServicesPage.hero.description,
  alternates: { canonical: "/managed-services/" },
};

export default function Page() {
  return <ManagedServicesPage />;
}
