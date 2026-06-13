import Link from "next/link";
import { Fragment } from "react";
import { company, footerLinks } from "@/data/site";
import { FooterContactInfo } from "@/components/layout/FooterContactInfo";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#0A0F1C]/8 bg-[#F8F9FC]">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1.25fr_1fr_1fr] lg:px-8">
        <div className="flex flex-col">
          <img
            src={company.logo}
            alt={company.name}
            className="h-12 w-auto object-contain object-left"
          />
          <div className="mt-5 max-w-xl">
            <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1 font-bold text-[#1E293B] text-base leading-tight sm:text-lg lg:flex-nowrap lg:text-xl lg:whitespace-nowrap">
              {company.taglineLine1.split(" | ").map((part, index) => (
                <Fragment key={part}>
                  {index > 0 ? (
                    <span className="font-bold text-[#1E293B]" aria-hidden>
                      |
                    </span>
                  ) : null}
                  <span>{part}</span>
                </Fragment>
              ))}
            </p>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#334155] sm:text-[17px] sm:leading-[1.7]">
              Building secure, scalable, and growth-driven digital experiences through Cloud, AI, Web Development, and Digital Marketing.
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
