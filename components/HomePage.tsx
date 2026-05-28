"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  siCloudflare,
  siDocker,
  siGithubactions,
  siGrafana,
  siJenkins,
  siKubernetes,
  siLinux,
  siMysql,
  siNginx,
  siPostgresql,
  siPrometheus,
  siTerraform,
} from "simple-icons";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  Check,
  ChevronDown,
  Clock3,
  Cloud,
  Cpu,
  Database,
  Globe2,
  Headphones,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  PhoneCall,
  Radar,
  Shield,
  ShieldCheck,
  Sparkles,
  Sun,
  X,
} from "lucide-react";
import { CRMLeadForm } from "@/components/CRMLeadForm";
import {
  caseStudies,
  certifications,
  company,
  contactTrustCards,
  credibilitySignals,
  deliveryModel,
  differentiators,
  faqs,
  featuredServices,
  footerLinks,
  industries,
  leadOffers,
  navigation,
  secondaryServices,
  services,
  supportCapabilities,
  technologyEcosystem,
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
      <span className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-300/16 to-cyan-300/10 opacity-0 transition group-hover:opacity-100" />
      <Icon className="relative h-4.5 w-4.5 transition duration-300 group-hover:rotate-12" />
    </button>
  );
}


type BrandIconData = {
  title: string;
  path: string;
  hex: string;
};

const primaryTechLogos: Array<BrandIconData | { title: "AWS"; hex: string; path?: never }> = [
  { title: "AWS", hex: "FF9900" },
  siDocker,
  siKubernetes,
  siTerraform,
  siJenkins,
  siGrafana,
];

const enterpriseTechLogos: Array<BrandIconData | { title: "AWS"; hex: string; path?: never }> = [
  ...primaryTechLogos,
  siLinux,
  siGithubactions,
  siNginx,
  siCloudflare,
  siPrometheus,
  siMysql,
  siPostgresql,
];

function BrandMark({ icon, className = "h-5 w-5" }: { icon: BrandIconData | { title: "AWS"; hex: string; path?: never }; className?: string }) {
  if (icon.title === "AWS") {
    return (
      <span className={`${className} inline-grid place-items-center font-black tracking-[-0.08em] text-current`} aria-hidden="true">
        AWS
      </span>
    );
  }

  return (
    <svg viewBox="0 0 24 24" role="img" aria-label={icon.title} className={className} fill="currentColor">
      <path d={icon.path} />
    </svg>
  );
}

function TechLogoStrip({ logos = primaryTechLogos, compact = false }: { logos?: typeof enterpriseTechLogos; compact?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`flex flex-wrap items-center gap-3 ${compact ? "justify-start" : "justify-center"}`}
    >
      {logos.map((icon, index) => (
        <motion.span
          key={icon.title}
          animate={{ y: [0, index % 2 ? 3 : -3, 0] }}
          transition={{ duration: 4 + index * 0.15, repeat: Infinity, ease: "easeInOut" }}
          className="tech-logo-chip group inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.055] px-3.5 py-2 text-sm font-black text-slate-200 shadow-[0_12px_36px_rgba(0,0,0,0.12)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-orange-300/45 hover:text-orange-100 hover:shadow-[0_18px_50px_rgba(255,91,35,0.14)]"
          title={icon.title}
        >
          <BrandMark icon={icon} className={icon.title === "AWS" ? "h-5 min-w-8 text-[0.72rem]" : "h-5 w-5"} />
          <span>{icon.title}</span>
        </motion.span>
      ))}
    </motion.div>
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
      <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-slate-300">{description}</p>
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
          <a href="#contact" className="rounded-full bg-[#ff5b23] px-4 py-2 text-sm font-bold text-white shadow-[0_16px_42px_rgba(255,91,35,0.26)] transition hover:-translate-y-0.5 hover:bg-white hover:text-slate-950">
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
            <a href="#contact" onClick={() => setOpen(false)} className="rounded-2xl bg-[#ff5b23] px-4 py-3 text-center text-sm font-bold text-white">
              Get AWS Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function HeroCloudVisual() {
  const nodes = [
    { icon: Cloud, angle: 0 },
    { icon: Shield, angle: 72 },
    { icon: Database, angle: 144 },
    { icon: Cpu, angle: 216 },
    { icon: Radar, angle: 288 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative flex min-h-[580px] items-center justify-center overflow-hidden rounded-[2.8rem] border border-white/[0.06] bg-[#080808]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,91,35,0.07),transparent_65%)]" />

      {[24, 34, 44].map((r) => (
        <div
          key={r}
          className="absolute rounded-full border border-white/[0.035]"
          style={{
            left: `${50 - r}%`,
            top: `${50 - r}%`,
            width: `${r * 2}%`,
            height: `${r * 2}%`,
          }}
        />
      ))}

      <div className="absolute left-1/2 top-1/2 z-10 grid h-18 w-18 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#0a0a0a] shadow-[0_0_50px_rgba(255,91,35,0.18),0_0_100px_rgba(255,91,35,0.06)]">
        <div className="grid h-14 w-14 place-items-center rounded-full border border-[#ff5b23]/25 bg-[#ff5b23]/10">
          <Cloud className="h-7 w-7 text-[#ff5b23]" />
        </div>
      </div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute"
        style={{ width: "68%", height: "68%", left: "16%", top: "16%" }}
      >
        {nodes.map((node, i) => {
          const rad = (node.angle * Math.PI) / 180;
          const x = 50 + 50 * Math.cos(rad);
          const y = 50 + 50 * Math.sin(rad);
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 + i * 0.12 }}
              className="absolute"
              style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%,-50%)" }}
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/[0.07] bg-[#111] shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                  <node.icon className="h-5 w-5 text-[#ff5b23]" />
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute"
        style={{ width: "88%", height: "88%", left: "6%", top: "6%" }}
      >
        {[40, 130, 220, 310].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x = 50 + 50 * Math.cos(rad);
          const y = 50 + 50 * Math.sin(rad);
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="absolute"
              style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%,-50%)" }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              >
                <div className="h-2 w-2 rounded-full bg-[#ff5b23]/30 shadow-[0_0_12px_rgba(255,91,35,0.25)]" />
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * 22.5) * (Math.PI / 180);
        const r = 15 + (i * 5) % 28;
        return (
          <motion.span
            key={`hp-${i}`}
            animate={{ opacity: [0, 0.5, 0], scale: [0.5, 1, 0.5] }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.35,
              ease: "easeInOut",
            }}
            className="absolute h-0.5 w-0.5 rounded-full bg-[#ff5b23]/35"
            style={{
              left: `${50 + r * Math.cos(angle)}%`,
              top: `${50 + r * Math.sin(angle)}%`,
            }}
          />
        );
      })}

      <div className="absolute bottom-5 left-5 right-5 z-10 rounded-2xl border border-white/[0.06] bg-[#0a0a0a]/90 px-5 py-3 backdrop-blur-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#ff5b23]">Cloud Ecosystem</p>
            <p className="mt-0.5 text-[11px] text-neutral-500">Unified infrastructure platform</p>
          </div>
          <div className="flex gap-1.5">
            {[Cloud, Shield, Database, Cpu, Radar].map((Icon, i) => (
              <div key={i} className="grid h-7 w-7 place-items-center rounded-md bg-white/[0.04]">
                <Icon className="h-3 w-3 text-neutral-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-28 lg:pt-40">
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeUp} className="inline-flex items-center gap-3 rounded-full border border-orange-300/25 bg-orange-300/10 px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-orange-100">
            <img src={company.logo} alt="ByteInfomedia" className="h-5 w-auto rounded bg-white px-1" />
            Premium AWS, DevOps & Cybersecurity Consulting
          </motion.div>
          <motion.h1 variants={fadeUp} className="mt-6 max-w-5xl text-4xl font-black tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
            Accelerate Your Business with <span className="gradient-text">Secure AWS Cloud & DevOps Solutions</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            ByteInfomedia helps businesses migrate, modernize, automate, secure, and scale infrastructure with enterprise-grade AWS, DevOps, cybersecurity, and managed cloud services.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-7 grid gap-3 sm:grid-cols-2">
            {trustBadges.map((badge) => (
              <span key={badge} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3 text-sm font-semibold text-slate-100">
                <Check className="h-4 w-4 shrink-0 text-orange-300" />
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#lead" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff5b23] px-6 py-3 text-sm font-black text-white shadow-[0_24px_70px_rgba(255,91,35,0.32)] transition hover:-translate-y-1 hover:bg-white hover:text-slate-950">
              Get Free Cloud Assessment <ArrowRight className="h-4 w-4" />
            </a>
            <a href={company.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10">
              Talk to an Expert
            </a>
          </motion.div>

          <motion.p variants={fadeUp} className="mt-5 inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-amber-100">
            <Sparkles className="h-4 w-4" />
            Limited free consultation slots available this week
          </motion.p>

          <motion.div variants={fadeUp} className="mt-7">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-slate-500">Trusted technology stack</p>
            <TechLogoStrip compact />
          </motion.div>
        </motion.div>

        <HeroCloudVisual />
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="glass-panel rounded-[2.5rem] p-5 sm:p-8">
          <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <span className="section-eyebrow">Authentic Enterprise Trust</span>
              <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl">Credibility built on expertise, accessibility, and secure delivery.</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                No inflated vanity metrics. ByteInfomedia builds trust through practical AWS, DevOps, cybersecurity, and managed infrastructure capability.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {credibilitySignals.map((signal) => (
                <motion.div key={signal.label} whileHover={{ y: -6 }} className="rounded-[1.8rem] border border-white/10 bg-white/[0.045] p-5 transition hover:border-orange-300/35">
                  <BadgeCheck className="h-7 w-7 text-orange-300" />
                  <p className="mt-4 font-bold text-white">{signal.label}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{signal.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Technology ecosystem</p>
            <div className="mt-5">
              <TechLogoStrip logos={enterpriseTechLogos} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="Cloud, DevOps, security, and managed operations built for production"
          description="A focused service portfolio for businesses that need secure AWS foundations, reliable automation, and infrastructure they can scale with confidence."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="mt-12 grid gap-5 lg:grid-cols-4"
        >
          {featuredServices.map((service) => (
            <motion.article key={service.title} variants={fadeUp} whileHover={{ y: -10 }} className="aurora-border rounded-[2.2rem] p-px lg:col-span-2">
              <div className="relative h-full overflow-hidden rounded-[2.2rem] border border-white/10 bg-[#060a14]/88 p-6 backdrop-blur-xl">
                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-orange-400/10 blur-3xl" />
                <div className="relative flex items-start gap-5">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-orange-400/22 to-cyan-300/12 text-orange-200">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black tracking-tight text-white">{service.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{service.description}</p>
                    <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-black text-orange-200">
                      Discuss solution <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {secondaryServices.map((service) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="rounded-[1.7rem] border border-white/10 bg-white/[0.045] p-5 transition hover:border-orange-300/35 hover:bg-white/[0.07]"
            >
              <service.icon className="h-6 w-6 text-orange-200" />
              <h3 className="mt-4 text-lg font-bold text-white">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="lg:sticky lg:top-28 lg:self-start"
        >
          <span className="section-eyebrow">Why Enterprise Teams Choose ByteInfomedia</span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-5xl">Enterprise cloud execution with security, speed, and operational discipline.</h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            ByteInfomedia combines AWS-focused architecture, DevOps automation, cybersecurity thinking, and managed support to help teams modernize with confidence.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {differentiators.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="glass-panel rounded-[1.8rem] p-5"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-300/10 text-orange-200">
                <Check className="h-5 w-5" />
              </div>
              <p className="text-base font-semibold leading-7 text-white">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  return (
    <section id="industries" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Industry Solutions"
          title="Cloud transformation patterns for high-growth and regulated businesses"
          description="Every industry has different risk, performance, and compliance needs. ByteInfomedia aligns AWS, DevOps, and cybersecurity delivery to the way each business operates."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 transition hover:border-cyan-300/30 hover:bg-cyan-300/[0.06]"
            >
              <industry.icon className="h-8 w-8 text-orange-200" />
              <h3 className="mt-5 text-xl font-semibold text-white">{industry.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudiesSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Case Studies"
          title="Enterprise scenarios with practical outcome focus"
          description="Representative engagement patterns show how ByteInfomedia approaches cloud cost governance, DevOps modernization, and security transformation without inflated claims."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ y: -8 }}
              className="glass-panel relative overflow-hidden rounded-[2.2rem] p-6"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-400/10 blur-3xl" />
              <p className="relative text-xs font-black uppercase tracking-[0.2em] text-orange-200">Enterprise engagement</p>
              <h3 className="relative mt-4 text-2xl font-black tracking-tight text-white">{study.title}</h3>
              <div className="relative mt-6 grid gap-4">
                <div className="rounded-2xl bg-white/[0.045] p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Context</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{study.context}</p>
                </div>
                <div className="rounded-2xl bg-orange-300/[0.07] p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-200">Solution</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{study.solution}</p>
                </div>
              </div>
              <div className="relative mt-5 flex flex-wrap gap-2">
                {study.outcomes.map((result) => (
                  <span key={result} className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100">
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

function CloudEcosystemVisual() {
  const orbitNodes = [
    { icon: Cloud, label: "AWS", angle: 0, radius: 38, duration: 28 },
    { icon: Shield, label: "Security", angle: 60, radius: 38, duration: 32 },
    { icon: Database, label: "Database", angle: 120, radius: 38, duration: 26 },
    { icon: Cpu, label: "Containers", angle: 180, radius: 38, duration: 30 },
    { icon: Radar, label: "Monitoring", angle: 240, radius: 38, duration: 34 },
    { icon: Globe2, label: "CDN", angle: 300, radius: 38, duration: 29 },
  ];

  const outerNodes = [
    { icon: ShieldCheck, angle: 30, radius: 46, duration: 44 },
    { icon: Cpu, angle: 110, radius: 46, duration: 48 },
    { icon: Cloud, angle: 200, radius: 46, duration: 42 },
    { icon: Database, angle: 290, radius: 46, duration: 46 },
  ];

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px]">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,91,35,0.06)_0%,transparent_70%)]" />

      {[30, 38, 46].map((r) => (
        <motion.div
          key={r}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: (r - 30) * 0.05 }}
          className="absolute rounded-full border border-white/[0.04]"
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
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="absolute left-1/2 top-1/2 z-10 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#0d0d0d] shadow-[0_0_60px_rgba(255,91,35,0.20),0_0_120px_rgba(255,91,35,0.08)]"
      >
        <div className="grid h-16 w-16 place-items-center rounded-full border border-[#ff5b23]/30 bg-[#ff5b23]/10">
          <Cloud className="h-8 w-8 text-[#ff5b23]" />
        </div>
      </motion.div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2"
        style={{ width: "76%", height: "76%" }}
      >
        {orbitNodes.map((node, i) => {
          const rad = (node.angle * Math.PI) / 180;
          const x = 50 + 50 * Math.cos(rad);
          const y = 50 + 50 * Math.sin(rad);
          return (
            <motion.div
              key={node.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="group absolute"
              style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%,-50%)" }}
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="relative flex flex-col items-center"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl border border-white/[0.08] bg-[#111111] shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all duration-300 group-hover:border-[#ff5b23]/40 group-hover:shadow-[0_4px_32px_rgba(255,91,35,0.15)]">
                  <node.icon className="h-5 w-5 text-[#ff5b23]" />
                </div>
                <span className="mt-1.5 whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.14em] text-neutral-500 transition-colors group-hover:text-white">
                  {node.label}
                </span>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ width: "92%", height: "92%" }}
      >
        {outerNodes.map((node, i) => {
          const rad = (node.angle * Math.PI) / 180;
          const x = 50 + 50 * Math.cos(rad);
          const y = 50 + 50 * Math.sin(rad);
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.12 }}
              className="absolute"
              style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%,-50%)" }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
              >
                <div className="grid h-8 w-8 place-items-center rounded-lg border border-white/[0.06] bg-[#0d0d0d]">
                  <node.icon className="h-3.5 w-3.5 text-white/30" />
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i * 15 + 7) * (Math.PI / 180);
        const r = 20 + (i * 7) % 30;
        return (
          <motion.span
            key={`p-${i}`}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + (i % 4),
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
            className="absolute h-1 w-1 rounded-full bg-[#ff5b23]/40"
            style={{
              left: `${50 + r * Math.cos(angle)}%`,
              top: `${50 + r * Math.sin(angle)}%`,
            }}
          />
        );
      })}
    </div>
  );
}

function ArchitectureSection() {
  return (
    <section id="architecture" className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,91,35,0.05)_0%,transparent_60%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.span variants={fadeUp} className="section-eyebrow">
            <Sparkles className="h-3.5 w-3.5" /> Cloud Ecosystem
          </motion.span>
          <motion.h2 variants={fadeUp} className="mt-6 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Enterprise cloud infrastructure, <span className="text-[#ff5b23]">unified.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 max-w-lg text-base leading-8 text-neutral-400">
            ByteInfomedia orchestrates your entire cloud ecosystem — from edge delivery and security to containers, databases, and real-time monitoring — into one governed, production-ready platform.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#lead"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff5b23] px-6 py-3 text-sm font-bold text-white shadow-[0_16px_48px_rgba(255,91,35,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(255,91,35,0.36)]"
            >
              Explore our platform <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 grid grid-cols-3 gap-4">
            {[
              { value: "99.9%", label: "Uptime SLA" },
              { value: "6+", label: "Security layers" },
              { value: "24/7", label: "Monitoring" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-black text-[#ff5b23] sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <CloudEcosystemVisual />
        </motion.div>
      </div>
    </section>
  );
}

function LeadGenerationSection() {
  return (
    <section id="lead" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="section-eyebrow">Free Expert Review</span>
          <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-6xl">Get Free AWS Consultation</h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            Share your infrastructure challenge and get a practical consultation path for AWS migration, DevOps automation, managed cloud operations, cybersecurity, or cloud cost optimization.
          </p>
          <div className="mt-8 grid gap-4">
            {leadOffers.map((offer) => (
              <motion.div key={offer.title} whileHover={{ x: 8 }} className="rounded-[1.7rem] border border-white/10 bg-white/[0.045] p-5 transition hover:border-orange-300/35">
                <h3 className="text-xl font-black text-white">{offer.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{offer.description}</p>
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

function DeliveryModelSection() {
  return (
    <section id="delivery" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Delivery Model"
          title="Why enterprises engage ByteInfomedia"
          description="A practical engagement model for teams that need trustworthy cloud guidance, secure implementation planning, and managed operational support."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {deliveryModel.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="glass-panel rounded-[2rem] p-6 transition hover:border-orange-300/35"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-orange-300/10 text-orange-200">
                <BadgeCheck className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SupportCapabilitiesSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Technology Expertise"
          title="Support capabilities for cloud decision-makers"
          description="A focused view of the delivery strengths buyers need to evaluate before starting a cloud, DevOps, or security engagement."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {supportCapabilities.map((capability, index) => (
            <motion.article
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 transition hover:-translate-y-2 hover:border-orange-300/35 hover:bg-white/[0.07]"
            >
              <ShieldCheck className="h-7 w-7 text-orange-200" />
              <h3 className="mt-5 text-xl font-black text-white">{capability.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{capability.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions before a cloud or security engagement"
          description="Clear answers help high-intent visitors convert faster and understand how ByteInfomedia can support their infrastructure goals."
        />
        <div className="mt-10 grid gap-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-[1.6rem] border border-white/10 bg-white/[0.045] p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-white">
                {faq.question}
                <ChevronDown className="h-5 w-5 transition group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-sm leading-7 text-slate-300">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const contactTrustBadges = ["AWS-focused cloud expertise", "DevOps automation specialists", "Security-first delivery", "Fast response consultation"];

  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-4xl">
          <span className="section-eyebrow">Contact Cloud Experts</span>
          <h2 className="mt-5 text-4xl font-black tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
            Talk to <span className="gradient-text">AWS & DevOps Experts Today</span>
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Need immediate assistance with AWS infrastructure, DevOps automation, cloud migration, cybersecurity, or managed cloud operations? Speak directly with our experts.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="grid gap-4">
            <a
              href={company.phoneHref}
              className="group relative overflow-hidden rounded-[2.2rem] border border-orange-300/25 bg-gradient-to-br from-orange-300/18 via-white/[0.065] to-cyan-400/10 p-6 shadow-[0_24px_80px_rgba(255,91,35,0.14)] backdrop-blur-2xl transition hover:-translate-y-1 hover:border-orange-200/60 hover:shadow-[0_34px_100px_rgba(255,91,35,0.22)]"
            >
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-orange-300/20 blur-3xl transition group-hover:bg-orange-200/30" />
              <div className="relative flex items-center gap-4">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-3xl bg-[#ff5b23] text-white shadow-[0_18px_50px_rgba(255,91,35,0.28)]">
                  <PhoneCall className="h-7 w-7" />
                </span>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-100">Call Us Now</p>
                  <p className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">{company.phone}</p>
                  <p className="mt-2 text-sm text-slate-300">Talk to an AWS, DevOps, or cybersecurity consultant.</p>
                </div>
              </div>
            </a>

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={company.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="group rounded-[1.8rem] border border-emerald-300/25 bg-emerald-300/10 p-5 transition hover:-translate-y-1 hover:border-emerald-200/60 hover:bg-emerald-300/16"
              >
                <MessageCircle className="h-7 w-7 text-emerald-200" />
                <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-emerald-100">WhatsApp</p>
                <p className="mt-2 text-xl font-bold text-white">Chat on WhatsApp</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">Fast response for urgent cloud and security questions.</p>
              </a>

              <a
                href={`mailto:${company.email}`}
                className="rounded-[1.8rem] border border-white/10 bg-white/[0.055] p-5 transition hover:-translate-y-1 hover:border-orange-300/35 hover:bg-orange-300/[0.07]"
              >
                <Mail className="h-7 w-7 text-orange-200" />
                <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-slate-500">Business Email</p>
                <p className="mt-2 break-words text-xl font-bold text-white">{company.email}</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">Send requirements, RFPs, or infrastructure notes.</p>
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="glass-panel rounded-[1.8rem] p-5">
                <MapPin className="h-7 w-7 text-orange-200" />
                <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-slate-500">Office Address</p>
                <p className="mt-2 text-base font-semibold leading-7 text-white">{company.address}</p>
              </div>
              <div className="glass-panel rounded-[1.8rem] p-5">
                <Clock3 className="h-7 w-7 text-violet-200" />
                <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-slate-500">Support Availability</p>
                <p className="mt-2 text-xl font-bold text-white">Mon-Sat | 9 AM - 7 PM</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">Priority response for consultation requests.</p>
              </div>
            </div>

            <a
              href={company.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-[1.8rem] border border-[#0a66c2]/35 bg-[#0a66c2]/10 p-5 transition hover:-translate-y-1 hover:border-[#65a9ee]/60 hover:bg-[#0a66c2]/16"
            >
              <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-200">LinkedIn Company Page</p>
              <p className="mt-2 text-xl font-bold text-white">Connect with ByteInfomedia on LinkedIn</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">Use LinkedIn as the primary social trust signal for company updates and professional validation.</p>
            </a>
          </div>

          <div className="grid gap-4">
            <div className="glass-panel relative overflow-hidden rounded-[2.2rem] p-6">
              <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-orange-300/10 blur-3xl" />
              <div className="relative">
                <p className="section-eyebrow">Enterprise Contact Trust</p>
                <h3 className="mt-5 text-3xl font-black tracking-tight text-white">Clear access. Practical response. No duplicate forms.</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  The main assessment form is intentionally kept in one place. This contact section gives decision-makers direct channels and confidence signals for faster next steps.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {contactTrustBadges.map((badge) => (
                    <div key={badge} className="flex items-center gap-3 rounded-2xl bg-white/[0.055] px-4 py-3 text-sm font-semibold text-slate-100">
                      <Check className="h-4 w-4 shrink-0 text-orange-300" />
                      {badge}
                    </div>
                  ))}
                </div>
                <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-amber-100">
                  <Headphones className="h-4 w-4" />
                  Limited free consultation slots available this week
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {contactTrustCards.map((card) => (
                <motion.article
                  key={card.title}
                  whileHover={{ y: -6 }}
                  className="rounded-[1.8rem] border border-white/10 bg-white/[0.045] p-5 transition hover:border-orange-300/35 hover:bg-white/[0.07]"
                >
                  <ShieldCheck className="h-6 w-6 text-orange-200" />
                  <h4 className="mt-4 text-lg font-black text-white">{card.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{card.description}</p>
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
      className="fixed bottom-5 left-5 z-40 hidden max-w-sm rounded-[1.6rem] border border-orange-300/20 bg-slate-950/90 p-4 shadow-2xl backdrop-blur-xl lg:block"
      role="dialog"
      aria-label="Consultation offer"
    >
      <button className="absolute right-3 top-3 text-slate-500 hover:text-white" onClick={() => setVisible(false)} aria-label="Close consultation popup">
        <X className="h-4 w-4" />
      </button>
      <p className="pr-6 text-sm font-bold text-white">Free AWS assessment available</p>
      <p className="mt-2 text-sm leading-6 text-slate-400">Get a quick review of architecture, security, DevOps maturity, and cost optimization opportunities.</p>
      <a href="#lead" className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#ff5b23] px-4 py-2 text-xs font-bold text-white">
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
    <footer className="border-t border-white/10 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr_0.85fr_0.95fr]">
        <div>
          <div className="inline-flex rounded-3xl border border-white/10 bg-white px-5 py-4 shadow-[0_18px_48px_rgba(255,91,35,0.16)]">
            <img src={company.logo} alt="ByteInfomedia" className="h-12 w-auto" />
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
            {company.tagline} Premium AWS cloud consulting, DevOps automation, cybersecurity, managed services, and digital transformation for modern teams.
          </p>
          <div className="mt-5 flex gap-3">
            {certifications.map((Icon, index) => (
              <span key={index} className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.045] text-orange-200">
                <Icon className="h-5 w-5" />
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="font-semibold text-white">Services</p>
          <div className="mt-4 grid gap-3">
            {footerLinks.map((link) => (
              <a key={link} href="#services" className="text-sm text-slate-400 hover:text-orange-200">
                {link}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="font-semibold text-white">Company</p>
          <div className="mt-4 grid gap-3">
            {[
              ["About", "#home"],
              ["Case Studies", "#services"],
              ["Delivery Model", "#delivery"],
              ["Careers", "#contact"],
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
          <div className="mt-4 grid gap-3 text-sm text-slate-400">
            <a href={company.phoneHref} className="hover:text-orange-200">{company.phone}</a>
            <a href={`mailto:${company.email}`} className="hover:text-orange-200">{company.email}</a>
            <a href={company.whatsappHref} target="_blank" rel="noreferrer" className="hover:text-orange-200">Chat on WhatsApp</a>
            <p>{company.address}</p>
          </div>
          <a
            href={company.linkedin}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center justify-center rounded-full border border-[#0a66c2]/40 bg-[#0a66c2]/12 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-blue-100 transition hover:-translate-y-0.5 hover:border-[#65a9ee]/70 hover:bg-[#0a66c2]/20"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6">
        <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-slate-500">Technology stack</p>
        <TechLogoStrip logos={enterpriseTechLogos} compact />
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
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
        {Array.from({ length: 18 }).map((_, index) => (
          <span
            key={index}
            style={{
              left: `${(index * 37) % 100}%`,
              top: `${12 + ((index * 19) % 78)}%`,
              animationDelay: `${index * 0.45}s`,
            }}
          />
        ))}
      </div>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustSection />
      <ServicesSection />
      <WhySection />
      <IndustriesSection />
      <CaseStudiesSection />
      <ArchitectureSection />
      <LeadGenerationSection />
      <DeliveryModelSection />
      <SupportCapabilitiesSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <PopupCTA />
      <ChatWidget />
      <Bot className="pointer-events-none fixed bottom-24 right-8 z-30 hidden h-5 w-5 text-emerald-950 sm:block" />
    </main>
  );
}
