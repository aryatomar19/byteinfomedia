"use client";

import { ArrowUpRight, Link2, Mail, MapPin, PhoneCall } from "lucide-react";
import { company } from "@/data/site";
import { InstagramIcon } from "@/components/icons/Instagram";
import { cn } from "@/lib/utils";

const labelClass = "text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[#0A0F1C]";
const valueClass = "mt-1 font-bold text-[#0A0F1C]";

const baseCard =
  "group relative flex items-start gap-5 rounded-2xl border bg-white p-5 transition duration-300 hover:-translate-y-1";

const iconBase =
  "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-[#FF6B2C] transition duration-300";

export function ContactInfoCards({ className }: { className?: string }) {
  return (
    <div className={cn("grid gap-4", className)}>
      <a
        href={company.phoneHref}
        className={cn(
          baseCard,
          "border-[#FF6B2C]/25 bg-gradient-to-br from-[#FFF9F6] to-white shadow-[0_8px_32px_rgba(255,107,44,0.12)]",
          "hover:border-[#FF6B2C]/45 hover:shadow-[0_16px_48px_rgba(255,107,44,0.18)]",
        )}
      >
        <span className={cn(iconBase, "bg-[#FF6B2C]/15 ring-2 ring-[#FF6B2C]/20 group-hover:bg-[#FF6B2C] group-hover:text-white")}>
          <PhoneCall className="h-6 w-6" />
        </span>
        <div className="min-w-0 flex-1 pt-0.5">
          <p className={labelClass}>Phone</p>
          <p className={cn(valueClass, "text-xl")}>{company.phone}</p>
          <p className="mt-1 text-sm font-semibold text-[#0A0F1C]">Direct consultation line</p>
        </div>
        <ArrowUpRight className="mt-2 h-5 w-5 shrink-0 text-[#0A0F1C]/30 transition group-hover:text-[#FF6B2C]" />
      </a>

      <a
        href={`mailto:${company.email}`}
        className={cn(
          baseCard,
          "border-[#0A0F1C]/8 shadow-[0_4px_24px_rgba(10,15,28,0.05)]",
          "hover:border-[#0A0F1C]/15 hover:shadow-[0_12px_40px_rgba(10,15,28,0.08)]",
        )}
      >
        <span className={cn(iconBase, "bg-[#F8F9FC] ring-1 ring-[#0A0F1C]/8 group-hover:bg-[#FF6B2C]/10")}>
          <Mail className="h-6 w-6" />
        </span>
        <div className="min-w-0 flex-1 pt-0.5">
          <p className={labelClass}>Email</p>
          <p className={cn(valueClass, "break-all text-lg")}>{company.email}</p>
        </div>
        <ArrowUpRight className="mt-2 h-5 w-5 shrink-0 text-[#0A0F1C]/30 transition group-hover:text-[#FF6B2C]" />
      </a>

      <a
        href={company.linkedin}
        target="_blank"
        rel="noreferrer"
        className={cn(
          baseCard,
          "border-[#0A0F1C]/8 shadow-[0_4px_24px_rgba(10,15,28,0.05)]",
          "hover:border-[#0A0F1C]/15 hover:shadow-[0_12px_40px_rgba(10,15,28,0.08)]",
        )}
      >
        <span className={cn(iconBase, "bg-[#F8F9FC] ring-1 ring-[#0A0F1C]/8 group-hover:bg-[#FF6B2C]/10")}>
          <Link2 className="h-6 w-6" />
        </span>
        <div className="min-w-0 flex-1 pt-0.5">
          <p className={labelClass}>LinkedIn</p>
          <p className={cn(valueClass, "text-lg")}>Company Page</p>
        </div>
        <ArrowUpRight className="mt-2 h-5 w-5 shrink-0 text-[#0A0F1C]/30 transition group-hover:text-[#FF6B2C]" />
      </a>

      <a
        href={company.instagram}
        target="_blank"
        rel="noreferrer"
        className={cn(
          baseCard,
          "border-[#FF6B2C]/15 bg-gradient-to-br from-[#FFF5F0] via-white to-[#FFF9FC] shadow-[0_4px_24px_rgba(255,107,44,0.08)]",
          "hover:border-[#FF6B2C]/35 hover:shadow-[0_14px_44px_rgba(255,107,44,0.14)]",
        )}
      >
        <span
          className={cn(
            iconBase,
            "bg-gradient-to-br from-[#FF6B2C]/20 to-[#FF6B2C]/5 ring-1 ring-[#FF6B2C]/25 group-hover:from-[#FF6B2C] group-hover:to-[#e85f24] group-hover:text-white",
          )}
        >
          <InstagramIcon className="h-6 w-6" />
        </span>
        <div className="min-w-0 flex-1 pt-0.5">
          <p className={labelClass}>Instagram</p>
          <p className={cn(valueClass, "text-lg")}>{company.instagramHandle}</p>
        </div>
        <ArrowUpRight className="mt-2 h-5 w-5 shrink-0 text-[#0A0F1C]/30 transition group-hover:text-[#FF6B2C]" />
      </a>

      <div
        className={cn(
          baseCard,
          "cursor-default border-[#0A0F1C]/8 bg-[#F8F9FC] p-6 shadow-[0_4px_24px_rgba(10,15,28,0.04)]",
          "before:absolute before:left-0 before:top-4 before:h-[calc(100%-2rem)] before:w-1 before:rounded-full before:bg-[#FF6B2C]",
          "hover:translate-y-0",
        )}
      >
        <span className={cn(iconBase, "bg-white ring-1 ring-[#0A0F1C]/8")}>
          <MapPin className="h-6 w-6" />
        </span>
        <div className="pt-0.5 pl-1">
          <p className={labelClass}>Address</p>
          <p className={cn(valueClass, "text-base leading-relaxed")}>{company.addressLines[0]}</p>
          <p className={cn(valueClass, "text-base leading-relaxed")}>{company.addressLines[1]}</p>
        </div>
      </div>
    </div>
  );
}
