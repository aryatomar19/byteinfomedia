import { Mail, MapPin, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/icons/Instagram";
import { LinkedinIcon } from "@/components/icons/Linkedin";
import { company } from "@/data/site";

const iconClass = "h-5 w-5 shrink-0 text-[#FF6B35]";

const iconClassInteractive = `${iconClass} transition-colors duration-200 group-hover:text-[#FF6B2C]`;

const contactTextClass =
  "text-sm font-normal leading-6 tracking-normal text-[#334155] transition-colors duration-200 group-hover:text-[#FF6B2C]";

const linkRowClass =
  "group flex items-center gap-3.5 rounded-sm py-1.5 text-sm leading-6 text-[#334155] transition-colors duration-200";

export function FooterContactInfo() {
  return (
    <div className="grid gap-4">
      <a href={company.phoneHref} className={linkRowClass}>
        <Phone className={iconClassInteractive} aria-hidden />
        <span className={contactTextClass}>{company.phone}</span>
      </a>

      <a href={`mailto:${company.email}`} className={linkRowClass}>
        <Mail className={iconClassInteractive} aria-hidden />
        <span className={`${contactTextClass} break-all`}>{company.email}</span>
      </a>

      <a
        href={company.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={linkRowClass}
        aria-label="Byte Infomedia LinkedIn (opens in new tab)"
      >
        <LinkedinIcon className={iconClassInteractive} aria-hidden />
        <span className={contactTextClass}>Byte Infomedia LinkedIn</span>
      </a>

      <a
        href={company.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className={linkRowClass}
        aria-label={`${company.instagramHandle} on Instagram (opens in new tab)`}
      >
        <InstagramIcon className={iconClassInteractive} aria-hidden />
        <span className={contactTextClass}>{company.instagramHandle}</span>
      </a>

      <div className="flex items-start gap-3.5 py-1.5" role="group" aria-label="Address">
        <MapPin className={iconClass} aria-hidden />
        <span className="text-sm font-normal leading-6 tracking-normal text-[#334155]">
          {company.addressLines[0]}
          <br />
          {company.addressLines[1]}
        </span>
      </div>
    </div>
  );
}
