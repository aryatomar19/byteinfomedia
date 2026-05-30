import Link from "next/link";
import { company, footerLinks } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#0A0F1C]/8 bg-[#F8F9FC]">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.25fr_1fr_1fr] lg:px-8">
        <div>
          <img src={company.logo} alt={company.name} className="h-12 w-auto object-contain" />
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-[#0A0F1C]">{company.taglineLine1}</p>
          <p className="text-xs font-semibold text-[#c84a17]">{company.taglineLine2}</p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-[#5f6f86]">{company.description}</p>
        </div>

        <div>
          <p className="text-sm font-bold text-[#0A0F1C]">Quick Links</p>
          <div className="mt-4 grid gap-2.5">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-[#5f6f86] transition hover:text-[#FF6B2C]">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-bold text-[#0A0F1C]">Contact Information</p>
          <div className="mt-4 grid gap-2.5 text-sm text-[#5f6f86]">
            <a href={company.phoneHref} className="hover:text-[#FF6B2C]">
              {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="hover:text-[#FF6B2C]">
              {company.email}
            </a>
            <a href={company.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#FF6B2C]">
              LinkedIn
            </a>
            <div className="pt-2 leading-6">
              {company.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#0A0F1C]/8 bg-white py-5">
        <p className="text-center text-sm text-[#5f6f86]">
          © {new Date().getFullYear()} {company.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
