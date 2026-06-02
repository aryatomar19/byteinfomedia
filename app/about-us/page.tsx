import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/AboutPage";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about BYTEINFOMEDIA — our mission, vision, expertise in cloud consulting, DevOps, cybersecurity, managed services, and generative AI.",
  alternates: { canonical: "/about-us/" },
};

export default function Page() {
  return <AboutPage />;
}
