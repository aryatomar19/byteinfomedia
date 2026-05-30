import Link from "next/link";
import { company, footerLinks } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#0A0F1C]/8 bg-[#F4F6FA]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <img src={company.logo} alt={company.name} className="h-12 w-auto object-contain" />
          <p className="mt-4 max-w-sm text-sm leading-7 text-[#52647a]">
            {company.taglineLine1}
            <br />
            {company.taglineLine2}
          </p>
          <p className="mt-4 text-sm text-[#52647a]">{company.description}</p>
        </div>

        <div>
          <p className="text-sm font-bold text-[#0A0F1C]">Quick Links</p>
          <div className="mt-4 grid gap-2">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-[#52647a] transition hover:text-[#FF6B2C]">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-bold text-[#0A0F1C]">Contact</p>
          <div className="mt-4 grid gap-2 text-sm text-[#52647a]">
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

      <div className="border-t border-[#0A0F1C]/8 py-5">
        <p className="text-center text-sm text-[#52647a]">
          © {new Date().getFullYear()} {company.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
