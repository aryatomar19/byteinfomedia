import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { company } from "@/data/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.byteinfomedia.com"),
  title: {
    default: "ByteInfomedia | AWS Cloud, DevOps, Cybersecurity & Managed Services",
    template: "%s | ByteInfomedia",
  },
  description:
    "ByteInfomedia provides premium AWS cloud consulting, DevOps automation, cybersecurity, managed cloud services, infrastructure modernization, and digital transformation solutions.",
  keywords: [
    "ByteInfomedia",
    "AWS cloud consulting",
    "DevOps automation",
    "cybersecurity consulting",
    "managed cloud services",
    "cloud migration",
    "Kubernetes deployment",
    "VAPT",
    "cloud cost optimization",
  ],
  authors: [{ name: company.legalName }],
  openGraph: {
    title: "ByteInfomedia | Secure AWS Cloud & DevOps Solutions",
    description:
      "Modernize infrastructure, automate deployments, secure cloud environments, and scale globally with enterprise-grade AWS and DevOps solutions.",
    url: "https://www.byteinfomedia.com/",
    siteName: "ByteInfomedia",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ByteInfomedia | AWS Cloud, DevOps & Cybersecurity",
    description: "Enterprise-grade cloud, DevOps, cybersecurity, and managed IT services.",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.legalName,
  alternateName: company.name,
  url: company.website,
  address: {
    "@type": "PostalAddress",
    streetAddress: "First Floor, PlotNo.27, Sector-19, Dwarka",
    addressLocality: "New Delhi",
    postalCode: "110075",
    addressCountry: "IN",
  },
  description: company.description,
  areaServed: "Global",
  serviceType: [
    "AWS Cloud Consulting",
    "DevOps Automation",
    "Cybersecurity Consulting",
    "Managed Cloud Services",
    "Cloud Migration",
    "Infrastructure Modernization",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
