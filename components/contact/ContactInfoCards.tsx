import { Mail, MapPin, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/icons/Instagram";
import { LinkedinIcon } from "@/components/icons/Linkedin";
import { company } from "@/data/site";
import { cn } from "@/lib/utils";

const iconClass = "mt-0.5 h-5 w-5 shrink-0 text-[#FF6B35]";

const rowClass =
  "group flex items-start gap-3.5 text-sm font-medium leading-6 text-[#0A0F1C] transition hover:text-[#FF6B35]";

export function ContactInfoCards({ className }: { className?: string }) {
  return (
    <div className={cn("grid gap-4", className)}>
      <a href={company.phoneHref} className={rowClass}>
        <Phone className={iconClass} aria-hidden />
        <span>{company.phone}</span>
      </a>

      <a href={`mailto:${company.email}`} className={rowClass}>
        <Mail className={iconClass} aria-hidden />
        <span className="break-all">{company.email}</span>
      </a>

      <a href={company.linkedin} target="_blank" rel="noreferrer" className={rowClass}>
        <LinkedinIcon className={iconClass} aria-hidden />
        <span>Company Page</span>
      </a>

      <a href={company.instagram} target="_blank" rel="noreferrer" className={rowClass}>
        <InstagramIcon className={iconClass} aria-hidden />
        <span>{company.instagramHandle}</span>
      </a>

      <div className="flex items-start gap-3.5 text-sm font-medium leading-6 text-[#0A0F1C]">
        <MapPin className={iconClass} aria-hidden />
        <address className="not-italic">
          {company.addressLines[0]}
          <br />
          {company.addressLines[1]}
        </address>
      </div>
    </div>
  );
}
