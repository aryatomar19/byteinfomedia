"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Loader2, ShieldCheck } from "lucide-react";
import { contactMethodOptions, serviceFormOptions } from "@/data/site";
import { cn } from "@/lib/utils";

type SubmitState = "idle" | "submitting" | "success" | "error";

export type AssessmentFormProps = {
  className?: string;
  idPrefix?: string;
  variant?: "light" | "dark";
  title?: string;
  description?: string;
  submitLabel?: string;
  showPreferredContact?: boolean;
  showPriorityBadge?: boolean;
};

export function AssessmentForm({
  className,
  idPrefix = "assessment",
  variant = "light",
  title = "Request Free Cloud Assessment",
  description = "Tell us about your environment and business goals. Our consultants will respond with a practical roadmap.",
  submitLabel = "Request Free Cloud Assessment",
  showPreferredContact = false,
  showPriorityBadge = true,
}: AssessmentFormProps) {
  const dark = variant === "dark";
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  const inputClass = dark
    ? "w-full rounded-2xl border border-white/12 bg-white/[0.06] px-4 py-3.5 text-sm font-medium text-white outline-none transition placeholder:text-white/35 hover:border-white/25 focus:border-[#FF6B2C]/60 focus:bg-white/[0.08] focus:shadow-[0_0_0_4px_rgba(255,107,44,0.12)]"
    : "w-full rounded-2xl border border-[#0A0F1C]/12 bg-[#FAFBFD] px-4 py-3.5 text-sm font-medium text-[#0A0F1C] outline-none transition placeholder:text-[#0A0F1C]/35 hover:border-[#0A0F1C]/20 focus:border-[#FF6B2C]/60 focus:bg-white focus:shadow-[0_0_0_4px_rgba(255,107,44,0.1)]";

  const labelClass = "text-xs font-bold uppercase tracking-[0.14em] text-[#0A0F1C]";

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
      preferredContactMethod: String(formData.get("preferredContactMethod") || ""),
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
        {showPriorityBadge && (
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#0A0F1C]">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
            Priority response
          </div>
        )}
        <h3 className={cn("text-2xl font-extrabold tracking-tight text-[#0A0F1C] sm:text-3xl", dark && "text-white")}>
          {title}
        </h3>
        <p className={cn("mt-3 text-sm leading-6 text-[#0A0F1C]", dark && "text-white/60")}>{description}</p>
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
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </label>
        {showPreferredContact && (
          <label className="grid gap-2 sm:col-span-2" htmlFor={`${idPrefix}-contact-method`}>
            <span className={labelClass}>Preferred Contact Method</span>
            <select id={`${idPrefix}-contact-method`} name="preferredContactMethod" className={inputClass} defaultValue="">
              <option value="" disabled>
                Choose method
              </option>
              {contactMethodOptions.map((method) => (
                <option key={method} value={method}>
                  {method}
                </option>
              ))}
            </select>
          </label>
        )}
        <label className="grid gap-2 sm:col-span-2" htmlFor={`${idPrefix}-message`}>
          <span className={labelClass}>Project Requirements</span>
          <textarea
            id={`${idPrefix}-message`}
            name="message"
            rows={4}
            placeholder="Tell us about your cloud, DevOps, security, or AI requirements."
            className={inputClass}
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="group relative mt-6 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#FF6B2C] via-[#ff7a3d] to-[#FF6B2C] px-6 py-4 text-sm font-black uppercase tracking-[0.08em] text-white shadow-[0_12px_36px_rgba(255,107,44,0.32)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_44px_rgba(255,107,44,0.4)] disabled:opacity-70"
      >
        {state === "submitting" ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
        {submitLabel}
      </button>

      {message && (
        <p
          className={cn(
            "mt-4 rounded-2xl border px-4 py-3 text-sm text-[#0A0F1C]",
            state === "success" ? "border-emerald-200 bg-emerald-50" : "border-rose-200 bg-rose-50",
          )}
          role="status"
        >
          {message}
        </p>
      )}
    </form>
  );
}
