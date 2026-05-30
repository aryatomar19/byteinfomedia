import Link from "next/link";
import { company, footerLinks } from "@/data/site";
import { InstagramIcon } from "@/components/icons/Instagram";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#0A0F1C]/8 bg-[#F8F9FC]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.25fr_1fr_1fr] lg:px-8">
        <div>
          <img src={company.logo} alt={company.name} className="h-12 w-auto object-contain" />
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#1E293B]">{company.taglineLine1}</p>
          <p className="text-xs font-semibold text-[#c84a17]">{company.taglineLine2}</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-[#334155]">{company.description}</p>
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
          <div className="mt-3 grid gap-2.5 text-sm text-[#334155]">
            <a href={company.phoneHref} className="transition hover:text-[#FF6B2C]">
              {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="transition hover:text-[#FF6B2C]">
              {company.email}
            </a>
            <a href={company.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-[#FF6B2C]">
              LinkedIn
            </a>
            <a
              href={company.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-[#FF6B2C]"
            >
              <InstagramIcon className="h-4 w-4" />
              <span>Instagram · {company.instagramHandle}</span>
            </a>
            <p className="pt-1 leading-snug text-[#334155]">
              {company.addressLines[0]}
              <br />
              {company.addressLines[1]}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-[#0A0F1C]/8 bg-white py-4">
        <p className="text-center text-sm text-[#334155]">
          © {new Date().getFullYear()} {company.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
