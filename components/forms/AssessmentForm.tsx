"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Loader2, ShieldCheck } from "lucide-react";
import { contactMethodOptions, serviceFormOptions } from "@/data/site";
import { cn } from "@/lib/utils";

type SubmitState = "idle" | "submitting" | "success" | "error";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/maqkrjkw";

export type AssessmentFormProps = {
  className?: string;
  idPrefix?: string;
  variant?: "light" | "dark";
  title?: string;
  description?: string;
  submitLabel?: string;
  showPreferredContact?: boolean;
  showPriorityBadge?: boolean;
  showServiceField?: boolean;
  /** Compact consultation layout for homepage contact section. */
  compact?: boolean;
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
  showServiceField = true,
  compact = false,
}: AssessmentFormProps) {
  const dark = variant === "dark";
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  const compactInputClass =
    "h-11 min-h-[44px] max-h-[44px] px-3.5 text-sm leading-tight";

  const inputClass = dark
    ? cn(
        "w-full rounded-2xl border border-white/12 bg-white/[0.06] text-sm font-medium text-white outline-none transition placeholder:text-white/35 hover:border-white/25 focus:border-[#FF6B2C]/60 focus:bg-white/[0.08] focus:shadow-[0_0_0_4px_rgba(255,107,44,0.12)]",
        compact ? compactInputClass : "px-4 py-3.5",
      )
    : cn(
        "w-full rounded-2xl border border-[#0A0F1C]/12 bg-[#FAFBFD] text-sm font-medium text-[#0A0F1C] outline-none transition placeholder:text-[#0A0F1C]/35 hover:border-[#0A0F1C]/20 focus:border-[#FF6B2C]/60 focus:bg-white focus:shadow-[0_0_0_4px_rgba(255,107,44,0.1)]",
        compact ? compactInputClass : "px-4 py-3.5",
      );

  const labelClass = cn(
    "text-[0.6875rem] font-bold uppercase tracking-[0.12em] leading-none",
    dark ? "text-white/80" : "text-[#0A0F1C]",
  );
  const labelGridClass = cn("grid", compact ? "gap-0.5" : "gap-2");

  async function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setMessage("");

    const form = event.currentTarget;
    const fields = new FormData(form);

    const email = String(fields.get("email") || "").trim();

    const formData = {
      name: String(fields.get("name") || "").trim(),
      email,
      phone: String(fields.get("phone") || "").trim(),
      company: String(fields.get("company") || "").trim(),
      ...(showServiceField
        ? { service: String(fields.get("service") || "").trim() }
        : {}),
      message: String(fields.get("message") || "").trim(),
      preferredContactMethod: String(fields.get("preferredContactMethod") || "").trim(),
      _subject: "New Cloud Assessment Lead — BYTEINFOMEDIA",
      _replyto: email,
      source: "BYTEINFOMEDIA Website",
      submittedAt: new Date().toISOString(),
      pageUri: typeof window !== "undefined" ? window.location.href : "",
    };

    console.log("[Formspree] Submitting payload:", formData);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      let result: { ok?: boolean; error?: string; errors?: { message: string }[] } = {};
      try {
        result = await response.json();
      } catch {
        result = {};
      }

      console.log("[Formspree] Response:", response.status, result);

      if (response.ok && result.ok) {
        setState("success");
        setMessage("Thanks. Our consulting team will review your request and contact you shortly.");
        form.reset();
        return;
      }

      console.error("[Formspree] Submission failed", response.status, result);
      setState("error");
      setMessage(
        result.error ||
          result.errors?.map((entry) => entry.message).join(" ") ||
          "Something went wrong. Please try again or contact us directly.",
      );
    } catch (error) {
      console.error("[Formspree] Submission error", error);
      setState("error");
      setMessage("Something went wrong. Please try again or contact us directly.");
    }
  }

  return (
    <form
      onSubmit={submitLead}
      className={cn(
        "relative overflow-hidden rounded-[2rem]",
        compact ? "p-0" : "p-6 sm:p-8",
        dark
          ? "glass-card border-white/10"
          : "border border-[#0A0F1C]/8 bg-white shadow-[0_24px_80px_rgba(10,15,28,0.1)]",
        className,
      )}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#FF6B2C]/15 blur-3xl" />
      <div className={cn("relative", compact ? "mb-2" : "mb-6")}>
        {showPriorityBadge && (
          <div
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-[#0A0F1C]",
              compact ? "mb-1.5 py-0.5" : "mb-4 px-3 py-1 text-xs tracking-[0.14em]",
            )}
          >
            <ShieldCheck className={cn("text-emerald-600", compact ? "h-3 w-3" : "h-3.5 w-3.5")} />
            Priority response
          </div>
        )}
        <h3 className={cn("text-2xl font-extrabold tracking-tight text-[#0A0F1C] sm:text-3xl", dark && "text-white")}>
          {title}
        </h3>
        <p
          className={cn(
            compact ? "mt-1 text-sm leading-5" : "mt-3 text-sm leading-6",
            dark ? "text-white/70" : "text-[#0A0F1C]",
          )}
        >
          {description}
        </p>
      </div>

      <div
        className={cn(
          "relative grid",
          compact ? "grid-cols-1 gap-2" : "gap-4 sm:grid-cols-2",
        )}
      >
        <label className={labelGridClass} htmlFor={`${idPrefix}-name`}>
          <span className={labelClass}>Full Name</span>
          <input id={`${idPrefix}-name`} name="name" required placeholder="Your full name" className={inputClass} />
        </label>
        <label className={labelGridClass} htmlFor={`${idPrefix}-email`}>
          <span className={labelClass}>Work Email</span>
          <input id={`${idPrefix}-email`} name="email" type="email" required placeholder="name@company.com" className={inputClass} />
        </label>
        <label className={labelGridClass} htmlFor={`${idPrefix}-phone`}>
          <span className={labelClass}>Phone Number</span>
          <input id={`${idPrefix}-phone`} name="phone" required placeholder="+91 98765 43210" className={inputClass} />
        </label>
        <label className={labelGridClass} htmlFor={`${idPrefix}-company`}>
          <span className={labelClass}>Company Name</span>
          <input id={`${idPrefix}-company`} name="company" placeholder="Company or organization" className={inputClass} />
        </label>
        {showServiceField && (
          <label className={cn(labelGridClass, "sm:col-span-2")} htmlFor={`${idPrefix}-service`}>
            <span className={labelClass}>Service Required</span>
            <select id={`${idPrefix}-service`} name="service" required className={inputClass} defaultValue="">
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
        )}
        {showPreferredContact && (
          <label className={cn(labelGridClass, "sm:col-span-2")} htmlFor={`${idPrefix}-contact-method`}>
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
        <label className={cn(labelGridClass, !compact && "sm:col-span-2")} htmlFor={`${idPrefix}-message`}>
          <span className={labelClass}>Project Requirements</span>
          <textarea
            id={`${idPrefix}-message`}
            name="message"
            rows={compact ? 2 : 4}
            placeholder="Tell us about your cloud, DevOps, security, or AI requirements."
            className={cn(
              inputClass,
              compact && "h-[72px] min-h-[60px] max-h-[80px] resize-none py-2 leading-snug",
            )}
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={state === "submitting"}
        className={cn(
          "group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#FF6B2C] via-[#ff7a3d] to-[#FF6B2C] px-6 text-sm font-black uppercase tracking-[0.08em] text-white shadow-[0_12px_36px_rgba(255,107,44,0.32)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_44px_rgba(255,107,44,0.4)] disabled:opacity-70",
          compact ? "mt-2 py-2" : "mt-6 py-4",
        )}
      >
        {state === "submitting" ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
        {submitLabel}
      </button>

      {message && (
        <p
          className={cn(
            "rounded-2xl border text-sm text-[#0A0F1C]",
            compact ? "mt-2 px-3 py-1.5" : "mt-4 px-4 py-3",
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
