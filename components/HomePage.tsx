"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronDown,
  ChevronRight,
  Cloud,
  CloudCog,
  Code2,
  Headphones,
  LineChart,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";
import { CRMLeadForm } from "@/components/CRMLeadForm";
import {
  caseStudies,
  certifications,
  company,
  contactTrustCards,
  credibilitySignals,
  faqs,
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

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
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
      <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-300">{description}</p>
    </motion.div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#03060d]/72 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Main navigation">
        <a href="#home" className="flex items-center gap-3">
          <img src={company.logo} alt="ByteInfomedia" className="h-9 w-auto object-contain" />
          <span className="hidden sm:block">
            <span className="block text-xs font-bold uppercase tracking-[0.22em] text-white">Cloud | DevOps | Security</span>
            <span className="block text-xs text-orange-200/80">Enterprise consulting</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="rounded-full px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10 hover:text-white">
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#lead" className="rounded-full border border-orange-300/30 px-4 py-2 text-sm font-semibold text-orange-100 transition hover:bg-orange-300/10">
            Free Assessment
          </a>
          <a href="#contact" className="rounded-full bg-[#FF6B2C] px-4 py-2 text-sm font-bold text-white shadow-[0_16px_42px_rgba(255,107,44,0.26)] transition hover:-translate-y-0.5 hover:bg-white hover:text-slate-950">
            Book Consultation
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 text-white"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
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
            <a href="#contact" onClick={() => setOpen(false)} className="rounded-2xl bg-[#FF6B2C] px-4 py-3 text-center text-sm font-bold text-white">
              Get AWS Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

const enterpriseServices = [
  {
    icon: Cloud,
    title: "Cloud Management",
    description: "AWS governance and optimization",
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    description: "Risk-aware security operations",
  },
  {
    icon: LineChart,
    title: "Monitoring & Visibility",
    description: "24/7 observability and alerting",
  },
  {
    icon: Code2,
    title: "DevOps Automation",
    description: "Reliable deployment workflows",
  },
  {
    icon: Headphones,
    title: "Managed Operations",
    description: "Ongoing infrastructure support",
  },
] as const;

function EnterpriseServicesCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.15 }}
      className="hero-enterprise-card"
    >
      <h2 className="hero-card-title">Enterprise Cloud Services</h2>
      <div className="hero-card-divider" aria-hidden="true" />
      <p className="hero-card-description">
        Security, automation, governance and managed operations for modern businesses.
      </p>

      <div className="mt-2">
        {enterpriseServices.map((service) => (
          <div key={service.title} className="hero-service-row">
            <div className="flex min-w-0 flex-1 items-center gap-3.5">
              <div className="hero-service-icon">
                <service.icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <div className="min-w-0">
                <p className="hero-service-title">{service.title}</p>
                <p className="hero-service-subtitle">{service.description}</p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 shrink-0 text-[#FF6B2C]" aria-hidden="true" />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function Hero() {
  return (
    <section id="home" className="hero-section relative px-4 pb-12 pt-28 sm:px-6 lg:px-8 lg:pb-16 lg:pt-32">
      <div className="hero-container">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeUp} className="hero-badge">
            Premium AWS, DevOps & Security Consulting
          </motion.div>
          <motion.h1 variants={fadeUp} className="hero-headline">
            Secure AWS
            <br />
            Cloud, DevOps &
            <br />
            Cybersecurity
            <br />
            Solutions for
            <br />
            Modern Businesses
          </motion.h1>
          <motion.p variants={fadeUp} className="hero-description">
            ByteInfomedia helps businesses migrate, modernize, automate, secure, and manage cloud infrastructure with
            enterprise-grade consulting and support.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-7 grid gap-3 sm:grid-cols-2">
            {trustBadges.slice(0, 4).map((badge) => (
              <span key={badge} className="hero-feature-pill">
                <Check className="h-4 w-4 shrink-0 text-[#FF6B2C]" strokeWidth={2.5} />
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#lead"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF6B2C] px-6 py-3 text-sm font-black text-white shadow-[0_24px_70px_rgba(255,107,44,0.28)] transition hover:-translate-y-1 hover:bg-[#e85f24]"
            >
              Get Free Cloud Assessment <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={company.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-900 transition hover:-translate-y-1 hover:border-slate-300 hover:bg-slate-50"
            >
              Talk to an Expert
            </a>
          </motion.div>
        </motion.div>

        <EnterpriseServicesCard />
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="glass-panel rounded-[2.5rem] p-6 sm:p-8">
          <div className="grid gap-5 md:grid-cols-3">
            {credibilitySignals.map((signal) => (
              <motion.div key={signal.label} whileHover={{ y: -6 }} className="rounded-[1.8rem] border border-white/10 bg-white/[0.045] p-5 transition hover:border-orange-300/35">
                <ShieldCheck className="h-7 w-7 text-orange-300" />
                <p className="mt-4 font-bold text-white">{signal.label}</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">{signal.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="px-4 py-11 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="Focused cloud consulting services"
          description="Six core capabilities for enterprise buyers who need secure AWS foundations, delivery automation, managed operations, and cost control."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.article key={service.title} variants={fadeUp} whileHover={{ y: -8 }} className="aurora-border rounded-[2rem] p-px">
              <div className="h-full rounded-[2rem] border border-white/10 bg-[#060a14]/88 p-6 backdrop-blur-xl transition hover:bg-white/[0.07]">
                <service.icon className="h-8 w-8 text-orange-200" />
                <h3 className="mt-5 text-2xl font-black tracking-tight text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{service.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  return (
    <section id="industries" className="px-4 py-11 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Industries"
          title="Built for high-trust digital businesses"
          description="Focused infrastructure and security consulting for organizations where reliability, governance, and clarity matter."
        />

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <motion.div key={industry.title} whileHover={{ y: -6 }} className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 transition hover:border-orange-300/35 hover:bg-white/[0.07]">
              <industry.icon className="h-8 w-8 text-orange-200" />
              <h3 className="mt-5 text-xl font-black text-white">{industry.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudiesSection() {
  return (
    <section id="case-studies" className="px-4 py-11 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Case Studies"
          title="Practical enterprise engagement patterns"
          description="Realistic business scenarios showing how ByteInfomedia approaches cost, delivery, and security modernization without inflated claims."
        />

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <motion.article key={study.title} whileHover={{ y: -8 }} className="glass-panel rounded-[2.2rem] p-6">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-200">Enterprise engagement</p>
              <h3 className="mt-4 text-2xl font-black tracking-tight text-white">{study.title}</h3>
              <p className="mt-5 text-sm leading-7 text-slate-300">{study.context}</p>
              <div className="mt-5 rounded-2xl bg-orange-300/[0.07] p-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-200">Approach</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{study.solution}</p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {study.outcomes.map((outcome) => (
                  <span key={outcome} className="rounded-full border border-orange-300/20 bg-orange-300/10 px-3 py-1 text-xs font-semibold text-orange-100">
                    {outcome}
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
    <section id="lead" className="px-4 py-11 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <span className="section-eyebrow">Consultation</span>
          <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-6xl">Get Free AWS Consultation</h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Share your cloud, DevOps, security, migration, or cost challenge. ByteInfomedia will review your request and recommend practical next steps.
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
          description="Tell us about your environment and business goals. Our consultants will respond with a practical cloud, DevOps, security, or cost optimization direction."
        />
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section id="faq" className="px-4 py-11 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions enterprise buyers ask first"
          description="Clear answers before you start a cloud, DevOps, security, or managed infrastructure conversation."
        />
        <div className="mt-7 grid gap-4">
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
  const contactCards = [
    { label: "Phone", value: company.phone, href: company.phoneHref, icon: PhoneCall, detail: "Direct consultation line" },
    { label: "WhatsApp", value: "Chat on WhatsApp", href: company.whatsappHref, icon: MessageCircle, detail: "Fast response for urgent queries" },
    { label: "Email", value: company.email, href: `mailto:${company.email}`, icon: Mail, detail: "Send requirements or RFPs" },
    { label: "LinkedIn", value: "Company Page", href: company.linkedin, icon: Headphones, detail: "Professional company updates" },
  ];

  const supportRows = [
    { title: "Fast response", description: "Consultation requests are reviewed with cloud, DevOps, and security context." },
    { title: "Enterprise support", description: "Discovery, planning, documentation, and implementation guidance for decision-makers." },
    { title: "Availability", description: "Mon-Sat | 9 AM - 7 PM for priority consulting conversations." },
  ];

  return (
    <section id="contact" className="px-4 py-11 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-7 max-w-4xl">
          <span className="section-eyebrow">Contact</span>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] text-white sm:text-5xl">Talk to AWS & DevOps Experts Today</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            Need immediate assistance with AWS infrastructure, DevOps automation, cloud migration, cybersecurity, or managed cloud operations? Reach ByteInfomedia directly.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {contactCards.map((card) => (
              <a
                key={card.label}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex min-h-36 flex-col justify-between rounded-[1.8rem] border border-white/10 bg-white/[0.055] p-5 transition hover:-translate-y-1 hover:border-orange-300/35 hover:bg-white/[0.08]"
              >
                <div className="flex items-start justify-between gap-4">
                  <card.icon className="h-6 w-6 text-orange-200" />
                  <span className="rounded-full border border-orange-300/20 px-2.5 py-1 text-[0.65rem] font-black uppercase tracking-[0.14em] text-orange-100">{card.label}</span>
                </div>
                <div>
                  <p className="mt-5 break-words text-xl font-black text-white">{card.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{card.detail}</p>
                </div>
              </a>
            ))}

            <div className="glass-panel min-h-36 rounded-[1.8rem] p-5 sm:col-span-2">
              <MapPin className="h-6 w-6 text-orange-200" />
              <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-slate-500">Office Address</p>
              <div className="mt-2 grid gap-1 text-base font-semibold leading-7 text-white sm:grid-cols-2">
                {company.addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-panel flex h-full min-h-full flex-col justify-between rounded-[2rem] p-6">
            <div>
              <span className="section-eyebrow">Consulting Support</span>
              <h3 className="mt-4 text-3xl font-black tracking-tight text-white">Professional response for enterprise cloud decisions.</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                One clear contact area, direct channels, and a single consultation form keep the path to action simple for serious buyers.
              </p>
            </div>

            <div className="mt-6 grid gap-3">
              {supportRows.map((row) => (
                <div key={row.title} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                  <div className="flex items-center gap-3">
                    <BadgeCheck className="h-5 w-5 text-orange-200" />
                    <p className="font-bold text-white">{row.title}</p>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{row.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr_0.85fr_0.95fr]">
        <div>
          <img src={company.logo} alt="ByteInfomedia" className="h-14 w-auto object-contain" />
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
            {company.tagline} Premium AWS cloud consulting, DevOps automation, cybersecurity, managed services, and digital transformation for modern teams.
          </p>
          <div className="mt-5 flex gap-3">
            {certifications.slice(0, 3).map((Icon, index) => (
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
              ["Case Studies", "#case-studies"],
              ["FAQ", "#faq"],
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
            <a href={company.linkedin} target="_blank" rel="noreferrer" className="hover:text-orange-200">LinkedIn</a>
            <p>{company.address}</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
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
  return (
    <main className="premium-shell">
      <Navbar />
      <Hero />
      <TrustSection />
      <ServicesSection />
      <IndustriesSection />
      <CaseStudiesSection />
      <LeadGenerationSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
