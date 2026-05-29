"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronDown,
  Clock3,
  Cloud,
  Headphones,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  PhoneCall,
  Shield,
  ShieldCheck,
  Sparkles,
  Sun,
  X,
} from "lucide-react";
import { CRMLeadForm } from "@/components/CRMLeadForm";
import {
  caseStudies,
  company,
  contactTrustCards,
  credibilitySignals,
  faqs,
  featuredServices,
  footerLinks,
  industries,
  leadOffers,
  navigation,
  services,
  trustBadges,
} from "@/data/site";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};


type ThemeMode = "light" | "dark";

const themeStorageKey = "byteinfomedia-theme";

function getPreferredTheme(): ThemeMode {
  if (typeof window === "undefined") return "dark";

  const storedTheme = window.localStorage.getItem(themeStorageKey);
  if (storedTheme === "light" || storedTheme === "dark") return storedTheme;

  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function applyTheme(theme: ThemeMode) {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
  root.style.colorScheme = theme;
}

function ThemeToggle({ theme, setTheme }: { theme: ThemeMode; setTheme: (theme: ThemeMode) => void }) {
  const isDark = theme === "dark";
  const Icon = isDark ? Sun : Moon;

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group relative grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.07] text-orange-100 shadow-[0_12px_34px_rgba(0,0,0,0.14)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-orange-300/45 hover:bg-orange-300/10"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={!isDark}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <span className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-300/16 to-orange-300/10 opacity-0 transition group-hover:opacity-100" />
      <Icon className="relative h-4.5 w-4.5 transition duration-300 group-hover:rotate-12" />
    </button>
  );
}


function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.55 }}
      className="mx-auto max-w-3xl text-center"
    >
      <span className="section-eyebrow">
        <Sparkles className="h-3.5 w-3.5" />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-slate-300">{description}</p>
    </motion.div>
  );
}

function Navbar({ theme, setTheme }: { theme: ThemeMode; setTheme: (theme: ThemeMode) => void }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#03060d]/72 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Main navigation">
        <a href="#home" className="flex items-center gap-3">
          <span className="rounded-2xl border border-white/10 bg-white px-3 py-2 shadow-[0_18px_48px_rgba(255,91,35,0.18)]">
            <img src={company.logo} alt="ByteInfomedia" className="h-8 w-auto" />
          </span>
          <span className="hidden sm:block">
            <span className="block text-xs font-bold uppercase tracking-[0.22em] text-white">Cloud | DevOps | Security</span>
            <span className="block text-xs text-orange-200/80">Enterprise infrastructure consulting</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          <div className="group relative">
            <a href="#services" className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10 hover:text-white">
              Services <ChevronDown className="h-4 w-4" />
            </a>
            <div className="pointer-events-none absolute left-0 top-11 w-[680px] opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
              <div className="glass-panel grid grid-cols-3 gap-3 rounded-[1.6rem] p-4">
                {services.slice(0, 9).map((service) => (
                  <a key={service.title} href="#services" className="rounded-2xl p-3 transition hover:bg-white/10">
                    <service.icon className="h-5 w-5 text-orange-200" />
                    <span className="mt-2 block text-sm font-semibold text-white">{service.title}</span>
                    <span className="mt-1 line-clamp-2 block text-xs leading-5 text-slate-400">{service.description}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          {navigation.slice(1).map((item) => (
            <a key={item.href} href={item.href} className="rounded-full px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10 hover:text-white">
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#lead" className="rounded-full border border-orange-300/30 px-4 py-2 text-sm font-semibold text-orange-100 transition hover:bg-orange-300/10">
            Free Assessment
          </a>
          <a href="#contact" className="rounded-full bg-[#FF6B2C] px-4 py-2 text-sm font-bold text-white shadow-[0_16px_42px_rgba(255,91,35,0.26)] transition hover:-translate-y-0.5 hover:bg-white hover:text-slate-950">
            Book Consultation
          </a>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-200 hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
            <ThemeToggle theme={theme} setTheme={setTheme} />
            <a href="#contact" onClick={() => setOpen(false)} className="rounded-2xl bg-[#FF6B2C] px-4 py-3 text-center text-sm font-bold text-white">
              Get AWS Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative flex min-h-[480px] items-center justify-center overflow-hidden rounded-[2.4rem] border border-white/[0.06] bg-[#080808]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,91,35,0.10),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,91,35,0.04),transparent_50%)]" />

      {[22, 34, 46].map((r) => (
        <motion.div
          key={r}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: (r - 22) * 0.04 }}
          className="absolute rounded-full border border-white/[0.03]"
          style={{
            left: `${50 - r}%`,
            top: `${50 - r}%`,
            width: `${r * 2}%`,
            height: `${r * 2}%`,
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative z-10 grid h-24 w-24 place-items-center rounded-full bg-[#0a0a0a] shadow-[0_0_80px_rgba(255,91,35,0.16),0_0_160px_rgba(255,91,35,0.06)]"
      >
        <div className="grid h-20 w-20 place-items-center rounded-full border border-[#FF6B2C]/20 bg-[#FF6B2C]/8">
          <Cloud className="h-10 w-10 text-[#FF6B2C]" />
        </div>
      </motion.div>

      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30) * (Math.PI / 180);
        const r = 18 + (i * 4) % 24;
        return (
          <motion.span
            key={i}
            animate={{ opacity: [0, 0.4, 0] }}
            transition={{ duration: 4 + (i % 3), repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
            className="absolute h-1 w-1 rounded-full bg-[#FF6B2C]/30"
            style={{ left: `${50 + r * Math.cos(angle)}%`, top: `${50 + r * Math.sin(angle)}%` }}
          />
        );
      })}

      <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between rounded-xl border border-white/[0.05] bg-[#0a0a0a]/80 px-4 py-2.5 backdrop-blur-md">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#FF6B2C]">Cloud Ecosystem</p>
        <p className="text-[11px] text-neutral-500">Unified infrastructure platform</p>
      </div>
    </motion.div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative px-4 pb-14 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-36">
      <div className="absolute left-1/2 top-24 h-60 w-60 -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeUp} className="inline-flex items-center gap-3 rounded-full border border-orange-300/25 bg-orange-300/10 px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-orange-100">
            <img src={company.logo} alt="ByteInfomedia" className="h-5 w-auto rounded bg-white px-1" />
            Premium AWS, DevOps & Cybersecurity Consulting
          </motion.div>
          <motion.h1 variants={fadeUp} className="mt-5 max-w-5xl text-4xl font-black tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
            Accelerate Your Business with <span className="gradient-text">Secure AWS Cloud & DevOps Solutions</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            ByteInfomedia helps businesses migrate, modernize, automate, secure, and scale infrastructure with enterprise-grade AWS, DevOps, cybersecurity, and managed cloud services.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {trustBadges.slice(0, 4).map((badge) => (
              <span key={badge} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.055] px-3.5 py-2.5 text-sm font-semibold text-slate-100">
                <Check className="h-4 w-4 shrink-0 text-orange-300" />
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href="#lead" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF6B2C] px-6 py-3 text-sm font-black text-white shadow-[0_24px_70px_rgba(255,91,35,0.32)] transition hover:-translate-y-1 hover:bg-white hover:text-slate-950">
              Get Free Cloud Assessment <ArrowRight className="h-4 w-4" />
            </a>
            <a href={company.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-1 hover:border-orange-300/40 hover:bg-white/10">
              Talk to an Expert
            </a>
          </motion.div>
        </motion.div>

        <HeroVisual />
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="glass-panel rounded-[2rem] p-5 sm:p-7">
          <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <span className="section-eyebrow">Why ByteInfomedia</span>
              <h2 className="mt-4 text-2xl font-black tracking-tight text-white sm:text-3xl">Credibility built on expertise, accessibility, and secure delivery.</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                ByteInfomedia builds trust through practical AWS, DevOps, cybersecurity, and managed infrastructure capability.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {credibilitySignals.map((signal) => (
                <motion.div key={signal.label} whileHover={{ y: -4 }} className="rounded-[1.4rem] border border-white/10 bg-white/[0.045] p-4 transition hover:border-orange-300/35">
                  <BadgeCheck className="h-6 w-6 text-orange-300" />
                  <p className="mt-3 font-bold text-white">{signal.label}</p>
                  <p className="mt-1.5 text-sm leading-6 text-slate-400">{signal.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="Cloud, DevOps, security, and managed operations"
          description="A focused service portfolio for businesses that need secure AWS foundations, reliable automation, and scalable infrastructure."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="rounded-[1.6rem] border border-white/10 bg-white/[0.045] p-5 transition hover:border-orange-300/35 hover:bg-white/[0.07]"
            >
              <service.icon className="h-7 w-7 text-orange-200" />
              <h3 className="mt-4 text-lg font-bold text-white">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  return (
    <section id="industries" className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Industry Solutions"
          title="Cloud transformation for high-growth businesses"
          description="ByteInfomedia aligns AWS, DevOps, and cybersecurity delivery to the way each business operates."
        />

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="rounded-[1.6rem] border border-white/10 bg-white/[0.045] p-4 transition hover:border-orange-300/30 hover:bg-white/[0.06]"
            >
              <industry.icon className="h-7 w-7 text-orange-200" />
              <h3 className="mt-4 text-lg font-semibold text-white">{industry.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudiesSection() {
  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Case Studies"
          title="Enterprise scenarios with practical outcomes"
          description="How ByteInfomedia approaches cloud governance, DevOps modernization, and security transformation."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {caseStudies.slice(0, 3).map((study, index) => (
            <motion.article
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ y: -6 }}
              className="glass-panel relative overflow-hidden rounded-[1.8rem] p-5"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-orange-400/10 blur-3xl" />
              <p className="relative text-xs font-black uppercase tracking-[0.2em] text-orange-200">Enterprise engagement</p>
              <h3 className="relative mt-3 text-xl font-black tracking-tight text-white">{study.title}</h3>
              <div className="relative mt-4 grid gap-3">
                <div className="rounded-xl bg-white/[0.045] p-3">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Context</p>
                  <p className="mt-1.5 text-sm leading-6 text-slate-300">{study.context}</p>
                </div>
                <div className="rounded-xl bg-orange-300/[0.07] p-3">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-200">Solution</p>
                  <p className="mt-1.5 text-sm leading-6 text-slate-300">{study.solution}</p>
                </div>
              </div>
              <div className="relative mt-4 flex flex-wrap gap-1.5">
                {study.outcomes.map((result) => (
                  <span key={result} className="rounded-full border border-orange-300/20 bg-orange-300/10 px-2.5 py-0.5 text-xs font-semibold text-orange-100">
                    {result}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadGenerationSection() {
  return (
    <section id="lead" className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="section-eyebrow">Free Expert Review</span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">Get Free AWS Consultation</h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            Share your infrastructure challenge and get a practical consultation path for AWS migration, DevOps automation, cybersecurity, or cloud cost optimization.
          </p>
          <div className="mt-6 grid gap-3">
            {leadOffers.map((offer) => (
              <motion.div key={offer.title} whileHover={{ x: 6 }} className="rounded-[1.4rem] border border-white/10 bg-white/[0.045] p-4 transition hover:border-orange-300/35">
                <h3 className="text-lg font-black text-white">{offer.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-slate-400">{offer.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <CRMLeadForm
          intent="assessment"
          title="Request Free Cloud Assessment"
          description="Tell us about your AWS, DevOps, security, or infrastructure goals. Our team will review your request and recommend the next practical steps."
        />
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions before an engagement"
          description="Clear answers to help you understand how ByteInfomedia can support your infrastructure goals."
        />
        <div className="mt-8 grid gap-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-[1.2rem] border border-white/10 bg-white/[0.045] p-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-white">
                {faq.question}
                <ChevronDown className="h-5 w-5 shrink-0 transition group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm leading-7 text-slate-300">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-3xl">
          <span className="section-eyebrow">Contact Cloud Experts</span>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.045em] text-white sm:text-5xl">
            Talk to <span className="gradient-text">AWS & DevOps Experts Today</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
            Need assistance with AWS infrastructure, DevOps automation, cloud migration, or cybersecurity? Speak directly with our experts.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2 lg:items-start">
          <div className="grid gap-3">
            <a
              href={company.phoneHref}
              className="group relative overflow-hidden rounded-[1.8rem] border border-orange-300/25 bg-gradient-to-br from-orange-300/14 via-white/[0.05] to-transparent p-5 shadow-[0_18px_60px_rgba(255,91,35,0.12)] backdrop-blur-2xl transition hover:-translate-y-1 hover:border-orange-200/50"
            >
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-orange-300/16 blur-3xl" />
              <div className="relative flex items-center gap-4">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#FF6B2C] text-white shadow-[0_14px_40px_rgba(255,91,35,0.24)]">
                  <PhoneCall className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-100">Call Us Now</p>
                  <p className="mt-1 text-2xl font-black tracking-tight text-white sm:text-3xl">{company.phone}</p>
                </div>
              </div>
            </a>

            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={company.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="group rounded-[1.4rem] border border-emerald-300/25 bg-emerald-300/10 p-4 transition hover:-translate-y-1 hover:border-emerald-200/50"
              >
                <MessageCircle className="h-6 w-6 text-emerald-200" />
                <p className="mt-3 text-lg font-bold text-white">Chat on WhatsApp</p>
                <p className="mt-1 text-sm text-slate-400">Fast response for urgent questions.</p>
              </a>

              <a
                href={`mailto:${company.email}`}
                className="rounded-[1.4rem] border border-white/10 bg-white/[0.055] p-4 transition hover:-translate-y-1 hover:border-orange-300/35"
              >
                <Mail className="h-6 w-6 text-orange-200" />
                <p className="mt-3 break-words text-lg font-bold text-white">{company.email}</p>
                <p className="mt-1 text-sm text-slate-400">Send requirements or RFPs.</p>
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="glass-panel rounded-[1.4rem] p-4">
                <MapPin className="h-6 w-6 text-orange-200" />
                <p className="mt-3 text-sm font-semibold leading-6 text-white">{company.address}</p>
              </div>
              <div className="glass-panel rounded-[1.4rem] p-4">
                <Clock3 className="h-6 w-6 text-orange-200" />
                <p className="mt-3 text-lg font-bold text-white">Mon-Sat | 9 AM - 7 PM</p>
                <p className="mt-1 text-sm text-slate-400">Priority response.</p>
              </div>
            </div>
          </div>

          <div className="grid gap-3">
            <div className="glass-panel relative overflow-hidden rounded-[1.8rem] p-5">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-300/10 blur-3xl" />
              <div className="relative">
                <h3 className="text-2xl font-black tracking-tight text-white">Clear access. Practical response.</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Direct channels and confidence signals for faster next steps.
                </p>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {["AWS cloud expertise", "DevOps automation", "Security-first delivery", "Fast consultation"].map((badge) => (
                    <div key={badge} className="flex items-center gap-2 rounded-xl bg-white/[0.055] px-3 py-2 text-sm font-semibold text-slate-100">
                      <Check className="h-3.5 w-3.5 shrink-0 text-orange-300" />
                      {badge}
                    </div>
                  ))}
                </div>
                <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-amber-100">
                  <Headphones className="h-3.5 w-3.5" />
                  Limited consultation slots this week
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {contactTrustCards.slice(0, 2).map((card) => (
                <motion.article
                  key={card.title}
                  whileHover={{ y: -4 }}
                  className="rounded-[1.4rem] border border-white/10 bg-white/[0.045] p-4 transition hover:border-orange-300/35"
                >
                  <ShieldCheck className="h-5 w-5 text-orange-200" />
                  <h4 className="mt-3 text-base font-black text-white">{card.title}</h4>
                  <p className="mt-1.5 text-sm leading-6 text-slate-400">{card.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PopupCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), 9000);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-5 left-5 z-40 hidden max-w-sm rounded-[1.4rem] border border-orange-300/20 bg-slate-950/90 p-4 shadow-2xl backdrop-blur-xl lg:block"
      role="dialog"
      aria-label="Consultation offer"
    >
      <button className="absolute right-3 top-3 text-slate-500 hover:text-white" onClick={() => setVisible(false)} aria-label="Close consultation popup">
        <X className="h-4 w-4" />
      </button>
      <p className="pr-6 text-sm font-bold text-white">Free AWS assessment available</p>
      <p className="mt-2 text-sm leading-6 text-slate-400">Architecture, security, DevOps maturity, and cost optimization review.</p>
      <a href="#lead" className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#FF6B2C] px-4 py-2 text-xs font-bold text-white">
        Claim assessment <ArrowRight className="h-3.5 w-3.5" />
      </a>
    </motion.div>
  );
}

function ChatWidget() {
  return (
    <a
      href={company.whatsappHref}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-3 rounded-full border border-emerald-300/20 bg-emerald-300 px-5 py-3 text-sm font-bold text-slate-950 shadow-[0_18px_60px_rgba(72,242,184,0.22)] transition hover:-translate-y-1"
      aria-label="Open chat and WhatsApp contact request"
    >
      <MessageCircle className="h-5 w-5" />
      Chat on WhatsApp
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <div className="inline-flex rounded-2xl border border-white/10 bg-white px-4 py-3 shadow-[0_14px_40px_rgba(255,91,35,0.14)]">
            <img src={company.logo} alt="ByteInfomedia" className="h-10 w-auto" />
          </div>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
            {company.tagline} Premium AWS cloud consulting, DevOps automation, cybersecurity, and managed services for modern teams.
          </p>
        </div>

        <div>
          <p className="font-semibold text-white">Services</p>
          <div className="mt-3 grid gap-2">
            {footerLinks.map((link) => (
              <a key={link} href="#services" className="text-sm text-slate-400 hover:text-orange-200">
                {link}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="font-semibold text-white">Company</p>
          <div className="mt-3 grid gap-2">
            {[
              ["About", "#home"],
              ["Case Studies", "#services"],
              ["Contact", "#contact"],
            ].map(([link, href]) => (
              <a key={link} href={href} className="text-sm text-slate-400 hover:text-orange-200">
                {link}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="font-semibold text-white">Contact</p>
          <div className="mt-3 grid gap-2 text-sm text-slate-400">
            <a href={company.phoneHref} className="hover:text-orange-200">{company.phone}</a>
            <a href={`mailto:${company.email}`} className="hover:text-orange-200">{company.email}</a>
            <a href={company.whatsappHref} target="_blank" rel="noreferrer" className="hover:text-orange-200">Chat on WhatsApp</a>
          </div>
          <a
            href={company.linkedin}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center justify-center rounded-full border border-[#0a66c2]/40 bg-[#0a66c2]/12 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-blue-100 transition hover:-translate-y-0.5 hover:border-[#65a9ee]/70 hover:bg-[#0a66c2]/20"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 by {company.legalName}</p>
        <div className="flex gap-4">
          <a href="/privacy-policy/" className="hover:text-orange-200">Privacy Policy</a>
          <a href="/terms-and-conditions/" className="hover:text-orange-200">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export function HomePage() {
  const [theme, setThemeState] = useState<ThemeMode>("dark");

  useEffect(() => {
    const preferredTheme = getPreferredTheme();
    setThemeState(preferredTheme);
    applyTheme(preferredTheme);
  }, []);

  function setTheme(theme: ThemeMode) {
    setThemeState(theme);
    window.localStorage.setItem(themeStorageKey, theme);
    applyTheme(theme);
  }

  return (
    <main className="premium-shell">
      <div className="particle-field" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, index) => (
          <span
            key={index}
            style={{
              left: `${(index * 37) % 100}%`,
              top: `${12 + ((index * 19) % 78)}%`,
              animationDelay: `${index * 0.5}s`,
            }}
          />
        ))}
      </div>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustSection />
      <ServicesSection />
      <IndustriesSection />
      <CaseStudiesSection />
      <LeadGenerationSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <PopupCTA />
      <ChatWidget />
    </main>
  );
}
