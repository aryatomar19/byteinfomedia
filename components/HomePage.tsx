"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
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
  PhoneCall,
  Radar,
  Shield,
  Sparkles,
  X,
} from "lucide-react";
import { CRMLeadForm } from "@/components/CRMLeadForm";
import { MotionCounter } from "@/components/MotionCounter";
import {
  architectureSteps,
  caseStudies,
  certifications,
  company,
  differentiators,
  faqs,
  footerLinks,
  industries,
  insights,
  leadOffers,
  metrics,
  navigation,
  partnerLogos,
  services,
  testimonials,
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

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/55 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Main navigation">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-300 text-lg font-black text-slate-950 shadow-[0_18px_42px_rgba(53,215,255,0.22)]">
            BI
          </span>
          <span>
            <span className="block text-sm font-bold uppercase tracking-[0.2em] text-white">ByteInfomedia</span>
            <span className="block text-xs text-cyan-200/80">Cloud | DevOps | Security</span>
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
                    <service.icon className="h-5 w-5 text-cyan-200" />
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
          <a href="#lead" className="rounded-full border border-cyan-300/30 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/10">
            Free Assessment
          </a>
          <a href="#contact" className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-cyan-200">
            Book Consultation
          </a>
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
            <a href="#contact" onClick={() => setOpen(false)} className="rounded-2xl bg-cyan-300 px-4 py-3 text-center text-sm font-bold text-slate-950">
              Get AWS Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function HeroArchitecture() {
  const nodes = [
    { icon: Globe2, label: "Users", className: "left-[6%] top-[42%]" },
    { icon: Cloud, label: "CloudFront", className: "left-[27%] top-[18%]" },
    { icon: Shield, label: "WAF", className: "left-[48%] top-[43%]" },
    { icon: Cpu, label: "Apps", className: "right-[18%] top-[18%]" },
    { icon: Database, label: "Data + Backup", className: "right-[6%] top-[58%]" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="glass-panel relative min-h-[430px] overflow-hidden rounded-[2.5rem] p-5"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(53,215,255,0.22),transparent_28%),radial-gradient(circle_at_80%_70%,rgba(155,92,255,0.2),transparent_30%)]" />
      <div className="absolute inset-x-12 top-1/2 h-px architecture-line" />
      <div className="absolute left-[32%] top-[23%] h-[38%] w-px rotate-45 architecture-line" />
      <div className="absolute right-[24%] top-[26%] h-[42%] w-px -rotate-45 architecture-line" />

      {nodes.map((node, index) => (
        <motion.div
          key={node.label}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4 + index * 0.2, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute ${node.className}`}
        >
          <div className="rounded-[1.5rem] border border-white/14 bg-slate-950/70 p-4 shadow-2xl backdrop-blur-xl">
            <node.icon className="h-7 w-7 text-cyan-200" />
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-white">{node.label}</p>
          </div>
        </motion.div>
      ))}

      <div className="absolute bottom-5 left-5 right-5 rounded-[1.7rem] border border-white/10 bg-slate-950/70 p-4 backdrop-blur-xl">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-white">Live cloud operations layer</p>
            <p className="mt-1 text-xs text-slate-400">Monitoring, incident response, FinOps, security controls</p>
          </div>
          <Radar className="h-9 w-9 animate-pulse text-emerald-300" />
        </div>
      </div>
    </motion.div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-28 lg:pt-40">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.span variants={fadeUp} className="section-eyebrow">
            <Sparkles className="h-3.5 w-3.5" />
            Premium AWS Cloud, DevOps & Cybersecurity Partner
          </motion.span>
          <motion.h1 variants={fadeUp} className="mt-6 max-w-5xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
            Accelerate Your Business with <span className="gradient-text">Secure AWS Cloud & DevOps Solutions</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            ByteInfomedia helps businesses modernize infrastructure, automate deployments, secure cloud environments, and scale globally with enterprise-grade AWS and DevOps solutions.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 shadow-[0_24px_70px_rgba(53,215,255,0.25)] transition hover:-translate-y-0.5 hover:bg-white">
              Get AWS Consultation <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#lead" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10">
              Get Cloud Assessment
            </a>
            <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-cyan-100 transition hover:bg-cyan-300/10">
              View Services
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            {trustBadges.map((badge) => (
              <span key={badge} className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-slate-200">
                {badge}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <HeroArchitecture />
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="glass-panel rounded-[2.5rem] p-5 sm:p-8">
          <div className="grid gap-4 md:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-[1.8rem] border border-white/10 bg-white/[0.045] p-5">
                <p className="text-4xl font-semibold text-white">
                  <MotionCounter value={metric.value} suffix={metric.suffix} />
                </p>
                <p className="mt-2 font-semibold text-cyan-100">{metric.label}</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">{metric.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Trusted technology ecosystem</p>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {partnerLogos.map((logo) => (
                <div key={logo} className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-4 text-center text-sm font-bold text-slate-300">
                  {logo}
                </div>
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
    <section id="services" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="End-to-end cloud, DevOps, security, and managed IT capabilities"
          description="From AWS strategy to continuous operations, ByteInfomedia delivers the infrastructure backbone modern businesses need to launch, scale, and protect digital products."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="aurora-border rounded-[2rem] p-px"
            >
              <div className="h-full rounded-[2rem] border border-white/10 bg-slate-950/75 p-5 backdrop-blur-xl transition hover:bg-slate-900/80">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-200">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{service.description}</p>
                <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-200">
                  Discuss service <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
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
          <span className="section-eyebrow">Why ByteInfomedia</span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-5xl">Enterprise confidence without enterprise friction.</h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            ByteInfomedia combines cloud engineering, security thinking, managed operations, and custom IT delivery to simplify technology for growing organizations.
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
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-300/10 text-emerald-200">
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
              <industry.icon className="h-8 w-8 text-cyan-200" />
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
          title="Enterprise-style outcomes across migration, DevOps, optimization, and security"
          description="Representative engagement stories show how ByteInfomedia approaches business-critical infrastructure challenges with measurable technical outcomes."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {caseStudies.map((study) => (
            <motion.article
              key={study.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel rounded-[2.2rem] p-6"
            >
              <div className="flex items-start justify-between gap-5">
                <h3 className="text-2xl font-semibold text-white">{study.title}</h3>
                <span className="rounded-full bg-violet-300/10 px-3 py-1 text-xs font-bold text-violet-100">Transformation</span>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-rose-300/8 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-rose-200">Challenge</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{study.challenge}</p>
                </div>
                <div className="rounded-2xl bg-cyan-300/8 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">Solution</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{study.solution}</p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {study.results.map((result) => (
                  <span key={result} className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-100">
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

function ArchitectureSection() {
  return (
    <section id="architecture" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Cloud Architecture"
          title="An AWS-style reference flow designed for reliability, security, and visibility"
          description="The architecture showcase demonstrates the kind of cloud-native operating model ByteInfomedia can design, deploy, monitor, secure, and optimize."
        />

        <div className="glass-panel mt-12 overflow-hidden rounded-[2.5rem] p-5 sm:p-8">
          <div className="grid gap-4 lg:grid-cols-8">
            {architectureSteps.map((step, index) => (
              <div key={step} className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="rounded-[1.6rem] border border-white/10 bg-slate-950/70 p-4 text-center"
                >
                  <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-200">
                    {index < 2 ? <Globe2 className="h-6 w-6" /> : index < 4 ? <Shield className="h-6 w-6" /> : index < 6 ? <Cpu className="h-6 w-6" /> : <Radar className="h-6 w-6" />}
                  </div>
                  <p className="text-sm font-semibold text-white">{step}</p>
                </motion.div>
                {index < architectureSteps.length - 1 && <div className="architecture-line my-3 h-px lg:absolute lg:-right-2 lg:top-1/2 lg:my-0 lg:w-4" />}
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {["IAM guardrails", "Encrypted data", "Automated deployments", "FinOps dashboards"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 text-sm font-semibold text-slate-200">
                <Check className="mb-3 h-5 w-5 text-emerald-300" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LeadGenerationSection() {
  return (
    <section id="lead" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="section-eyebrow">Lead Generation</span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-5xl">Start with a focused cloud, security, or cost review.</h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            Choose a practical assessment offer and share your goals. Our cloud consultants will review your environment and recommend the next steps for secure, scalable infrastructure.
          </p>
          <div className="mt-8 grid gap-4">
            {leadOffers.map((offer) => (
              <div key={offer.title} className="rounded-[1.7rem] border border-white/10 bg-white/[0.045] p-5">
                <h3 className="text-xl font-semibold text-white">{offer.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{offer.description}</p>
              </div>
            ))}
          </div>
        </div>

        <CRMLeadForm
          intent="assessment"
          title="Get Free Cloud Assessment"
          description="Tell us about your environment and ByteInfomedia will help identify cloud, DevOps, security, and cost optimization opportunities."
        />
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="Built for decision-makers who need reliability, speed, and security"
          description="Enterprise buyers want confidence before they share infrastructure details. These testimonial cards model trust-building proof points for the sales journey."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <motion.figure
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel rounded-[2rem] p-6"
            >
              <p className="text-lg leading-8 text-white">"{testimonial.quote}"</p>
              <figcaption className="mt-6 border-t border-white/10 pt-5">
                <p className="font-semibold text-cyan-100">{testimonial.name}</p>
                <p className="mt-1 text-sm text-slate-400">{testimonial.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function InsightsSection() {
  return (
    <section id="insights" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Insights"
          title="Knowledge hub for AWS, DevOps, security, and modernization"
          description="SEO-ready insight cards focus on high-intent topics that attract cloud transformation buyers and support long-term lead generation."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {insights.map((insight, index) => (
            <article key={insight} className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 transition hover:-translate-y-1 hover:border-cyan-300/30">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">Insight {String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 text-xl font-semibold leading-7 text-white">{insight}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Practical guidance from ByteInfomedia for teams planning secure, scalable, and cost-aware digital infrastructure.
              </p>
              <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-200">
                Ask an expert <ArrowRight className="h-4 w-4" />
              </a>
            </article>
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
  const contactTrustBadges = ["AWS Cloud Experts", "24/7 Managed Support", "Security-First Architecture", "Fast Response Team"];

  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-4xl">
          <span className="section-eyebrow">Contact Cloud Experts</span>
          <h2 className="mt-5 text-4xl font-black tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
            Get a Free <span className="gradient-text">Cloud Architecture Consultation</span>
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Need immediate assistance with AWS infrastructure, DevOps automation, cloud migration, or cybersecurity? Speak directly with our cloud consultants and get a practical next-step roadmap.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="grid gap-4">
            <a
              href={company.phoneHref}
              className="group relative overflow-hidden rounded-[2.2rem] border border-cyan-300/25 bg-gradient-to-br from-cyan-300/18 via-white/[0.065] to-violet-400/10 p-6 shadow-[0_24px_80px_rgba(53,215,255,0.14)] backdrop-blur-2xl transition hover:-translate-y-1 hover:border-cyan-200/60 hover:shadow-[0_34px_100px_rgba(53,215,255,0.22)]"
            >
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-300/20 blur-3xl transition group-hover:bg-cyan-200/30" />
              <div className="relative flex items-center gap-4">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-3xl bg-cyan-300 text-slate-950 shadow-[0_18px_50px_rgba(53,215,255,0.28)]">
                  <PhoneCall className="h-7 w-7" />
                </span>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-100">Call Us Now</p>
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
                <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-emerald-100">WhatsApp CTA</p>
                <p className="mt-2 text-xl font-bold text-white">Chat on WhatsApp</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">Fast response for urgent cloud and security questions.</p>
              </a>

              <a
                href={`mailto:${company.email}`}
                className="rounded-[1.8rem] border border-white/10 bg-white/[0.055] p-5 transition hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-cyan-300/[0.07]"
              >
                <Mail className="h-7 w-7 text-cyan-200" />
                <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-slate-500">Business Email</p>
                <p className="mt-2 break-words text-xl font-bold text-white">{company.email}</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">Send requirements, RFPs, or infrastructure notes.</p>
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="glass-panel rounded-[1.8rem] p-5">
                <MapPin className="h-7 w-7 text-cyan-200" />
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

            <div className="rounded-[2rem] border border-white/10 bg-slate-950/55 p-5">
              <div className="grid gap-3 sm:grid-cols-2">
                {contactTrustBadges.map((badge) => (
                  <div key={badge} className="flex items-center gap-3 rounded-2xl bg-white/[0.055] px-4 py-3 text-sm font-semibold text-slate-100">
                    <Check className="h-4 w-4 shrink-0 text-emerald-300" />
                    {badge}
                  </div>
                ))}
              </div>
              <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-amber-100">
                <Headphones className="h-4 w-4" />
                Limited free consultation slots available this week
              </p>
            </div>

            <div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-slate-950/70">
              <iframe
                title="ByteInfomedia Dwarka office map"
                src="https://www.google.com/maps?q=First%20Floor%2C%20PlotNo.27%2C%20Sector-19%2C%20Dwarka%2C%20New%20Delhi%20-%20110075&output=embed"
                className="h-44 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <CRMLeadForm
            intent="consultation"
            title="Get Free AWS Consultation"
            description="Share your cloud, DevOps, infrastructure, or cybersecurity requirement. Our team will review it and help you identify the fastest path to a secure, scalable solution."
          />
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
      className="fixed bottom-5 left-5 z-40 hidden max-w-sm rounded-[1.6rem] border border-cyan-300/20 bg-slate-950/90 p-4 shadow-2xl backdrop-blur-xl lg:block"
      role="dialog"
      aria-label="Consultation offer"
    >
      <button className="absolute right-3 top-3 text-slate-500 hover:text-white" onClick={() => setVisible(false)} aria-label="Close consultation popup">
        <X className="h-4 w-4" />
      </button>
      <p className="pr-6 text-sm font-bold text-white">Free AWS assessment available</p>
      <p className="mt-2 text-sm leading-6 text-slate-400">Get a quick review of architecture, security, DevOps maturity, and cost optimization opportunities.</p>
      <a href="#lead" className="mt-4 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-4 py-2 text-xs font-bold text-slate-950">
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
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-300 text-lg font-black text-slate-950">BI</span>
            <div>
              <p className="font-bold text-white">{company.legalName}</p>
              <p className="text-sm text-slate-400">{company.tagline}</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
            Premium cloud, DevOps, cybersecurity, managed services, and digital transformation solutions for startups, SMEs, SaaS companies, and enterprises.
          </p>
          <div className="mt-5 flex gap-3">
            {certifications.map((Icon, index) => (
              <span key={index} className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.045] text-cyan-200">
                <Icon className="h-5 w-5" />
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="font-semibold text-white">Services</p>
          <div className="mt-4 grid gap-3">
            {footerLinks.map((link) => (
              <a key={link} href="#services" className="text-sm text-slate-400 hover:text-cyan-200">
                {link}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="font-semibold text-white">Company</p>
          <div className="mt-4 grid gap-3">
            {["About", "Case Studies", "Insights", "Careers", "Contact"].map((link) => (
              <a key={link} href={link === "Contact" ? "#contact" : "#home"} className="text-sm text-slate-400 hover:text-cyan-200">
                {link}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="font-semibold text-white">Legal</p>
          <div className="mt-4 grid gap-3">
            <a href="/privacy-policy/" className="text-sm text-slate-400 hover:text-cyan-200">
              Privacy Policy
            </a>
            <a href="/terms-and-conditions/" className="text-sm text-slate-400 hover:text-cyan-200">
              Terms & Conditions
            </a>
            <a href={company.website} target="_blank" rel="noreferrer" className="text-sm text-slate-400 hover:text-cyan-200">
              Official Website
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 by {company.legalName}</p>
        <p>{company.country} · {company.address}</p>
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
      <WhySection />
      <IndustriesSection />
      <CaseStudiesSection />
      <ArchitectureSection />
      <LeadGenerationSection />
      <TestimonialsSection />
      <InsightsSection />
      <FAQSection />
      <ContactSection />
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 rounded-[2.5rem] border border-cyan-300/20 bg-cyan-300/[0.08] p-6 sm:p-8 lg:grid-cols-[1fr_0.75fr] lg:items-center">
          <div>
            <p className="section-eyebrow">Newsletter</p>
            <h2 className="mt-5 text-3xl font-semibold text-white">Cloud insights for teams planning digital transformation.</h2>
            <p className="mt-3 text-slate-300">Subscribe for AWS, DevOps, cybersecurity, migration, Kubernetes, and cost optimization updates.</p>
          </div>
          <CRMLeadForm intent="newsletter" compact />
        </div>
      </section>
      <Footer />
      <PopupCTA />
      <ChatWidget />
      <Bot className="pointer-events-none fixed bottom-24 right-8 z-30 hidden h-5 w-5 text-emerald-950 sm:block" />
    </main>
  );
}
