import Link from "next/link";
import { company, footerLinks } from "@/data/site";
import { FooterContactInfo } from "@/components/layout/FooterContactInfo";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#0A0F1C]/8 bg-[#F8F9FC]">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1.25fr_1fr_1fr] lg:px-8">
        <div className="flex flex-col items-center py-2 text-center">
          <img
            src={company.logo}
            alt={company.name}
            className="h-12 w-auto object-contain"
          />
          <div className="mt-3 w-full max-w-[650px]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1E293B]">{company.taglineLine1}</p>
            <p className="mx-auto mt-5 max-w-[650px] text-[18px] leading-[1.7] text-[#0A0F1C]">
              Building secure, scalable, and growth-driven digital experiences through Cloud, AI, Web Development, and
              Digital Marketing.
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-[#1E293B]">Quick Links</p>
          <div className="mt-3 grid gap-2">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-[#334155] transition hover:text-[#FF6B2C]">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-[#1E293B]">Contact Information</p>
          <div className="mt-3">
            <FooterContactInfo />
          </div>
        </div>
      </div>

      <div className="border-t border-[#0A0F1C]/8 bg-white py-3">
        <p className="text-center text-sm text-[#334155]">
          © {new Date().getFullYear()} {company.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
