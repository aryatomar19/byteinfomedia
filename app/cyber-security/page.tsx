import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { cyberSecurityPage } from "@/data/cyber-security";

export const metadata: Metadata = {
  title: "Cyber Security",
  description: cyberSecurityPage.hero.description,
  alternates: { canonical: "/cyber-security/" },
};

export default function Page() {
  return <ServicePageTemplate data={cyberSecurityPage} />;
}
