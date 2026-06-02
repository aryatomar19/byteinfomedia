import { Mail, MapPin, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/icons/Instagram";
import { LinkedinIcon } from "@/components/icons/Linkedin";
import { company } from "@/data/site";

const iconClass = "mt-0.5 h-[1.125rem] w-[1.125rem] shrink-0 text-[#FF6B35]";

const linkClass =
  "group flex items-start gap-3 text-sm leading-6 text-[#334155] transition hover:text-[#FF6B2C]";

export function FooterContactInfo() {
  return (
    <div className="grid gap-3.5">
      <a href={company.phoneHref} className={linkClass}>
        <Phone className={iconClass} aria-hidden />
        <span>{company.phone}</span>
      </a>

      <a href={`mailto:${company.email}`} className={linkClass}>
        <Mail className={iconClass} aria-hidden />
        <span className="break-all">{company.email}</span>
      </a>

      <a href={company.linkedin} target="_blank" rel="noreferrer" className={linkClass}>
        <LinkedinIcon className={iconClass} aria-hidden />
        <span>Company Page</span>
      </a>

      <a href={company.instagram} target="_blank" rel="noreferrer" className={linkClass}>
        <InstagramIcon className={iconClass} aria-hidden />
        <span>{company.instagramHandle}</span>
      </a>

      <div className="flex items-start gap-3 text-sm leading-6 text-[#334155]">
        <MapPin className={iconClass} aria-hidden />
        <address className="not-italic text-inherit font-inherit opacity-100">
          {company.addressLines[0]}
          <br />
          {company.addressLines[1]}
        </address>
      </div>
    </div>
  );
}
