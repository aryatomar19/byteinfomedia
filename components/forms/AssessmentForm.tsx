"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Loader2, ShieldCheck } from "lucide-react";
import { serviceFormOptions } from "@/data/site";
import { cn } from "@/lib/utils";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function AssessmentForm({
  className,
  idPrefix = "assessment",
  variant = "light",
}: {
  className?: string;
  idPrefix?: string;
  variant?: "light" | "dark";
}) {
  const dark = variant === "dark";
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  const inputClass = dark
    ? "w-full rounded-2xl border border-white/12 bg-white/[0.06] px-4 py-3.5 text-sm font-medium text-white outline-none transition placeholder:text-white/35 hover:border-white/25 focus:border-[#FF6B2C]/60 focus:bg-white/[0.08] focus:shadow-[0_0_0_4px_rgba(255,107,44,0.12)]"
    : "w-full rounded-2xl border border-[#0A0F1C]/12 bg-[#FAFBFD] px-4 py-3.5 text-sm font-medium text-[#0A0F1C] outline-none transition placeholder:text-[#94a3b8] hover:border-[#0A0F1C]/20 focus:border-[#FF6B2C]/60 focus:bg-white focus:shadow-[0_0_0_4px_rgba(255,107,44,0.1)]";

  const labelClass = dark
    ? "text-xs font-bold uppercase tracking-[0.14em] text-white/50"
    : "text-xs font-bold uppercase tracking-[0.14em] text-[#52647a]";

  async function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const lead = {
      source: "BYTEINFOMEDIA Website",
      submittedAt: new Date().toISOString(),
      pageUri: typeof window !== "undefined" ? window.location.href : "",
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      company: String(formData.get("company") || ""),
      service: String(formData.get("service") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const savedLeads = JSON.parse(window.localStorage.getItem("byteinfomedia_leads") || "[]");
      window.localStorage.setItem("byteinfomedia_leads", JSON.stringify([...savedLeads, lead]));
      setState("success");
      setMessage("Thanks. Our consulting team will review your request and contact you shortly.");
      form.reset();
    } catch {
      setState("error");
      setMessage("Something went wrong. Please try again or contact us directly.");
    }
  }

  return (
    <form
      onSubmit={submitLead}
      className={cn(
        "relative overflow-hidden rounded-[2rem] p-6 sm:p-8",
        dark
          ? "glass-card border-white/10"
          : "border border-[#0A0F1C]/8 bg-white shadow-[0_24px_80px_rgba(10,15,28,0.1)]",
        className,
      )}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#FF6B2C]/15 blur-3xl" />
      <div className="relative mb-6">
        <div
          className={cn(
            "mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.14em]",
            dark ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400" : "border-emerald-200 bg-emerald-50 text-emerald-700",
          )}
        >
          <ShieldCheck className="h-3.5 w-3.5" />
          Priority response
        </div>
        <h3 className={cn("text-2xl font-extrabold tracking-tight sm:text-3xl", dark ? "text-white" : "text-[#0A0F1C]")}>
          Request Free Cloud Assessment
        </h3>
        <p className={cn("mt-3 text-sm leading-6", dark ? "text-white/60" : "text-[#52647a]")}>
          Tell us about your environment and business goals. Our consultants will respond with a practical roadmap.
        </p>
      </div>

      <div className="relative grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2" htmlFor={`${idPrefix}-name`}>
          <span className={labelClass}>Full Name</span>
          <input id={`${idPrefix}-name`} name="name" required placeholder="Your full name" className={inputClass} />
        </label>
        <label className="grid gap-2" htmlFor={`${idPrefix}-email`}>
          <span className={labelClass}>Work Email</span>
          <input id={`${idPrefix}-email`} name="email" type="email" required placeholder="name@company.com" className={inputClass} />
        </label>
        <label className="grid gap-2" htmlFor={`${idPrefix}-phone`}>
          <span className={labelClass}>Phone Number</span>
          <input id={`${idPrefix}-phone`} name="phone" placeholder="+91 98765 43210" className={inputClass} />
        </label>
        <label className="grid gap-2" htmlFor={`${idPrefix}-company`}>
          <span className={labelClass}>Company Name</span>
          <input id={`${idPrefix}-company`} name="company" placeholder="Company or organization" className={inputClass} />
        </label>
        <label className="grid gap-2 sm:col-span-2" htmlFor={`${idPrefix}-service`}>
          <span className={labelClass}>Service Required</span>
          <select id={`${idPrefix}-service`} name="service" className={inputClass} defaultValue="">
            <option value="" disabled>
              Select service
            </option>
            {serviceFormOptions.map((service) => (
              <option key={service} value={service} className={dark ? "bg-[#0a0f1c] text-white" : ""}>
                {service}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 sm:col-span-2" htmlFor={`${idPrefix}-message`}>
          <span className={labelClass}>Project Requirements</span>
          <textarea
            id={`${idPrefix}-message`}
            name="message"
            rows={4}
            placeholder="Tell us about your AWS, DevOps, security, or AI requirements."
            className={inputClass}
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="group relative mt-6 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-[#FF6B2C] via-[#ff8f5c] to-[#FF6B2C] px-5 py-4 text-sm font-black uppercase tracking-[0.1em] text-[#0A0F1C] shadow-[0_20px_50px_rgba(255,107,44,0.35)] transition hover:-translate-y-0.5 disabled:opacity-70"
      >
        {state === "submitting" ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
        Request Free Cloud Assessment
      </button>

      {message && (
        <p
          className={cn(
            "mt-4 rounded-2xl border px-4 py-3 text-sm",
            state === "success"
              ? dark
                ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                : "border-emerald-200 bg-emerald-50 text-emerald-800"
              : dark
                ? "border-rose-500/30 bg-rose-500/10 text-rose-300"
                : "border-rose-200 bg-rose-50 text-rose-800",
          )}
          role="status"
        >
          {message}
        </p>
      )}
    </form>
  );
}
