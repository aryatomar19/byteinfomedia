import Link from "next/link";
import { Fragment } from "react";
import { company, footerLinks } from "@/data/site";
import { FooterContactInfo } from "@/components/layout/FooterContactInfo";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#0A0F1C]/8 bg-[#F8F9FC]">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1.25fr_1fr_1fr] lg:px-8">
        <div className="flex max-w-xl flex-col items-start">
          <img
            src={company.logo}
            alt={company.name}
            className="block h-12 w-auto max-w-full"
          />
          <p className="mt-3 flex w-full flex-wrap items-center gap-x-2 font-bold uppercase tracking-[0.12em] text-[#1E293B] text-[0.9rem] leading-none sm:text-[1rem] lg:flex-nowrap lg:whitespace-nowrap lg:text-[0.95rem]">
            {company.taglineLine1.split(" | ").map((part, index) => (
              <Fragment key={part}>
                {index > 0 ? (
                  <span className="px-0.5 text-[#FF6B2C]" aria-hidden>
                    |
                  </span>
                ) : null}
                <span>{part}</span>
              </Fragment>
            ))}
          </p>
          <p className="mt-4 w-full text-base leading-[1.7] text-[#0A0F1C] sm:text-[17px]">
            Building secure, scalable, and growth-driven digital experiences through Cloud, AI, Web Development, and Digital Marketing.
          </p>
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
