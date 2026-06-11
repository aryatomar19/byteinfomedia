import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/AboutPage";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about BYTEINFOMEDIA — our mission, vision, and expertise in cloud, DevOps, cybersecurity, AI, and digital marketing.",
  alternates: { canonical: "/about-us/" },
};

export default function Page() {
  return <AboutPage />;
}
