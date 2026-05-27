"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Loader2, ShieldCheck } from "lucide-react";

type LeadIntent = "consultation" | "assessment" | "pricing" | "contact" | "newsletter";

type CRMLeadFormProps = {
  intent: LeadIntent;
  compact?: boolean;
  title?: string;
  description?: string;
};

type SubmitState = "idle" | "submitting" | "success" | "error";

const crmProvider = process.env.NEXT_PUBLIC_CRM_PROVIDER?.toLowerCase() || "hubspot";
const hubspotPortalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
const hubspotFormId = process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID;
const zohoWebformUrl = process.env.NEXT_PUBLIC_ZOHO_WEBFORM_URL;
const salesforceWebToLeadUrl = process.env.NEXT_PUBLIC_SALESFORCE_WEB_TO_LEAD_URL;
const salesforceOrgId = process.env.NEXT_PUBLIC_SALESFORCE_ORG_ID;

const intentLabels: Record<LeadIntent, string> = {
  consultation: "Get Free AWS Consultation",
  assessment: "Request Free Cloud Assessment",
  pricing: "Request Pricing",
  contact: "Contact Us",
  newsletter: "Subscribe",
};

const serviceOptions = [
  "AWS Migration",
  "DevOps Automation",
  "Managed Cloud Services",
  "Cybersecurity",
  "Cloud Cost Optimization",
  "Infrastructure Monitoring",
  "Web Development",
  "Other",
];

const contactMethodOptions = ["Phone Call", "WhatsApp", "Email", "Video Consultation"];

export function CRMLeadForm({ intent, compact = false, title, description }: CRMLeadFormProps) {
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const lead = {
      intent,
      source: "ByteInfomedia Website",
      submittedAt: new Date().toISOString(),
      pageUri: typeof window !== "undefined" ? window.location.href : "",
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      company: String(formData.get("company") || ""),
      service: String(formData.get("service") || intentLabels[intent]),
      message: String(formData.get("message") || ""),
      preferredContactMethod: String(formData.get("preferredContactMethod") || ""),
    };

    try {
      if (crmProvider.includes("zoho") && zohoWebformUrl) {
        const payload = new FormData();
        Object.entries(lead).forEach(([key, value]) => payload.append(key, value));
        await fetch(zohoWebformUrl, { method: "POST", mode: "no-cors", body: payload });
      } else if (crmProvider.includes("salesforce") && salesforceWebToLeadUrl && salesforceOrgId) {
        const payload = new FormData();
        payload.append("oid", salesforceOrgId);
        payload.append("retURL", lead.pageUri || "https://www.byteinfomedia.com/");
        payload.append("first_name", lead.name);
        payload.append("email", lead.email);
        payload.append("phone", lead.phone);
        payload.append("company", lead.company || "Website Lead");
        payload.append(
          "description",
          `${lead.service}\nPreferred contact: ${lead.preferredContactMethod}\n${lead.message}\nIntent: ${lead.intent}`,
        );
        await fetch(salesforceWebToLeadUrl, { method: "POST", mode: "no-cors", body: payload });
      } else if (hubspotPortalId && hubspotFormId) {
        const response = await fetch(
          `https://api.hsforms.com/submissions/v3/integration/submit/${hubspotPortalId}/${hubspotFormId}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              submittedAt: Date.now(),
              fields: [
                { name: "firstname", value: lead.name },
                { name: "email", value: lead.email },
                { name: "phone", value: lead.phone },
                { name: "company", value: lead.company },
                { name: "service_interest", value: lead.service },
                { name: "preferred_contact_method", value: lead.preferredContactMethod },
                { name: "message", value: lead.message },
                { name: "lead_source", value: lead.source },
              ],
              context: {
                pageUri: lead.pageUri,
                pageName: "ByteInfomedia Cloud & DevOps Website",
              },
            }),
          },
        );

        if (!response.ok) {
          throw new Error("CRM submission failed");
        }
      } else {
        const savedLeads = JSON.parse(window.localStorage.getItem("byteinfomedia_leads") || "[]");
        window.localStorage.setItem("byteinfomedia_leads", JSON.stringify([...savedLeads, lead]));
      }

      setState("success");
      setMessage("Thanks. Our cloud consulting team will review your request and contact you shortly.");
      form.reset();
    } catch {
      setState("error");
      setMessage("Something went wrong. Please try again or contact ByteInfomedia through the official website.");
    }
  }

  return (
    <form
      onSubmit={submitLead}
      className="glass-panel relative overflow-hidden rounded-[2.2rem] p-5 sm:p-7"
      data-lead-intent={intent}
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-cyan-300/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-8 h-56 w-56 rounded-full bg-violet-400/10 blur-3xl" />

      {(title || description) && (
        <div className="relative mb-6">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-emerald-100">
            <ShieldCheck className="h-3.5 w-3.5" />
            Priority response
          </div>
          {title && <h3 className="text-3xl font-semibold tracking-tight text-white">{title}</h3>}
          {description && <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>}
        </div>
      )}

      <div className={`relative grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-400" htmlFor={`${intent}-name`}>
          Full Name
          <input
            id={`${intent}-name`}
            name="name"
            required
            placeholder="Your full name"
            autoComplete="name"
            className="rounded-2xl border border-white/10 bg-white/[0.065] px-4 py-3.5 text-sm font-medium normal-case tracking-normal text-white outline-none transition placeholder:text-slate-500 hover:border-white/20 focus:border-cyan-300/80 focus:bg-white/[0.1] focus:shadow-[0_0_0_4px_rgba(53,215,255,0.08)]"
          />
        </label>

        <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-400" htmlFor={`${intent}-email`}>
          Work Email
          <input
            id={`${intent}-email`}
            name="email"
            type="email"
            required
            placeholder="name@company.com"
            autoComplete="email"
            className="rounded-2xl border border-white/10 bg-white/[0.065] px-4 py-3.5 text-sm font-medium normal-case tracking-normal text-white outline-none transition placeholder:text-slate-500 hover:border-white/20 focus:border-cyan-300/80 focus:bg-white/[0.1] focus:shadow-[0_0_0_4px_rgba(53,215,255,0.08)]"
          />
        </label>

        {intent !== "newsletter" && (
          <>
            <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-400" htmlFor={`${intent}-phone`}>
              Phone Number
              <input
                id={`${intent}-phone`}
                name="phone"
                placeholder="+91 98765 43210"
                autoComplete="tel"
                className="rounded-2xl border border-white/10 bg-white/[0.065] px-4 py-3.5 text-sm font-medium normal-case tracking-normal text-white outline-none transition placeholder:text-slate-500 hover:border-white/20 focus:border-cyan-300/80 focus:bg-white/[0.1] focus:shadow-[0_0_0_4px_rgba(53,215,255,0.08)]"
              />
            </label>

            <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-400" htmlFor={`${intent}-company`}>
              Company Name
              <input
                id={`${intent}-company`}
                name="company"
                placeholder="Company or organization"
                autoComplete="organization"
                className="rounded-2xl border border-white/10 bg-white/[0.065] px-4 py-3.5 text-sm font-medium normal-case tracking-normal text-white outline-none transition placeholder:text-slate-500 hover:border-white/20 focus:border-cyan-300/80 focus:bg-white/[0.1] focus:shadow-[0_0_0_4px_rgba(53,215,255,0.08)]"
              />
            </label>

            <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-400" htmlFor={`${intent}-service`}>
              Service Required
              <select
                id={`${intent}-service`}
                name="service"
                className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3.5 text-sm font-medium normal-case tracking-normal text-white outline-none transition hover:border-white/20 focus:border-cyan-300/80 focus:shadow-[0_0_0_4px_rgba(53,215,255,0.08)]"
                defaultValue=""
              >
                <option value="" disabled>
                  Select service
                </option>
                {serviceOptions.map((service) => (
                  <option key={service}>{service}</option>
                ))}
              </select>
            </label>

            <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-400" htmlFor={`${intent}-preferred-contact`}>
              Preferred Contact Method
              <select
                id={`${intent}-preferred-contact`}
                name="preferredContactMethod"
                className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3.5 text-sm font-medium normal-case tracking-normal text-white outline-none transition hover:border-white/20 focus:border-cyan-300/80 focus:shadow-[0_0_0_4px_rgba(53,215,255,0.08)]"
                defaultValue=""
              >
                <option value="" disabled>
                  Choose method
                </option>
                {contactMethodOptions.map((method) => (
                  <option key={method}>{method}</option>
                ))}
              </select>
            </label>

            <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-400 sm:col-span-2" htmlFor={`${intent}-message`}>
              Project Requirements
              <textarea
                id={`${intent}-message`}
                name="message"
                rows={4}
                placeholder="Tell us about your AWS, DevOps, cloud migration, cybersecurity, or managed services requirement."
                className="rounded-2xl border border-white/10 bg-white/[0.065] px-4 py-3.5 text-sm font-medium normal-case tracking-normal text-white outline-none transition placeholder:text-slate-500 hover:border-white/20 focus:border-cyan-300/80 focus:bg-white/[0.1] focus:shadow-[0_0_0_4px_rgba(53,215,255,0.08)]"
              />
            </label>
          </>
        )}
      </div>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="group relative mt-5 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-200 via-white to-emerald-200 px-5 py-4 text-sm font-black uppercase tracking-[0.12em] text-slate-950 shadow-[0_24px_70px_rgba(53,215,255,0.28)] transition hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(72,242,184,0.32)] disabled:cursor-not-allowed disabled:opacity-70"
      >
        <span className="absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/50 transition-all duration-700 group-hover:left-full" />
        {state === "submitting" ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
        {intentLabels[intent]}
      </button>

      {message && (
        <p
          className={`mt-3 rounded-2xl border px-4 py-3 text-sm ${
            state === "success"
              ? "border-emerald-300/20 bg-emerald-300/10 text-emerald-100"
              : "border-rose-300/20 bg-rose-300/10 text-rose-100"
          }`}
          role="status"
        >
          {message}
        </p>
      )}
    </form>
  );
}
