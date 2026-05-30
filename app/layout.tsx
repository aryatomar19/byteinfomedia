import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { company } from "@/data/site";
import { PageShell } from "@/components/layout/PageShell";

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

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.byteinfomedia.com"),
  title: {
    default: "BYTEINFOMEDIA | AWS Cloud, DevOps, Cybersecurity & Managed Services",
    template: "%s | BYTEINFOMEDIA",
  },
  description: company.description,
  keywords: [
    "BYTEINFOMEDIA",
    "AWS cloud consulting",
    "DevOps automation",
    "cybersecurity consulting",
    "managed cloud services",
    "generative AI consulting",
    "cloud migration",
  ],
  authors: [{ name: company.legalName }],
  openGraph: {
    title: "BYTEINFOMEDIA | Secure AWS Cloud & DevOps Solutions",
    description: company.description,
    url: company.website,
    siteName: company.name,
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: company.favicon,
    shortcut: company.favicon,
    apple: company.logo,
  },
  alternates: { canonical: "/" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.legalName,
  alternateName: company.name,
  url: company.website,
  telephone: company.phone,
  email: company.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "First Floor, Plot No. 27, Sector-19, Dwarka",
    addressLocality: "New Delhi",
    postalCode: "110075",
    addressCountry: "IN",
  },
  description: company.description,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="light">
      <body className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
