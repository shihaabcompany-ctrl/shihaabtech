import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Blocks,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Globe2,
  Layers3,
  LayoutDashboard,
  MessageSquareText,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
  Smartphone,
  Workflow,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Shihaab Tech services: premium websites, custom web apps, SaaS MVPs, automation systems, mobile-first interfaces, and product care.",
  alternates: {
    canonical: "/services",
  },
};

const services = [
  {
    title: "Premium Websites",
    text: "Landing pages, company websites, portfolio sites, product pages, and business websites with a high-end first impression.",
    icon: Globe2,
  },
  {
    title: "Custom Web Apps",
    text: "Dashboards, portals, admin systems, internal tools, and workflows designed around the way your team works.",
    icon: LayoutDashboard,
  },
  {
    title: "Mobile-first Interfaces",
    text: "Responsive experiences that feel natural on phones, tablets, and desktop screens from day one.",
    icon: Smartphone,
  },
  {
    title: "Automation Systems",
    text: "Messaging, campaign, content, and operations tools that reduce repeated manual work.",
    icon: Bot,
  },
  {
    title: "SaaS MVPs",
    text: "Authentication, roles, database models, APIs, dashboards, billing-ready structure, and deployment setup.",
    icon: Blocks,
  },
  {
    title: "Product Care",
    text: "Redesigns, performance improvements, bug fixes, SEO cleanup, and ongoing support after launch.",
    icon: ShieldCheck,
  },
];

const packages = [
  {
    title: "Launch Website",
    text: "A premium one-page or compact business website built to explain your offer, build trust, and generate enquiries.",
    fit: "Best for new startups, local businesses, creators, and service companies.",
    icon: MonitorSmartphone,
  },
  {
    title: "Business Platform",
    text: "A full website with product/service pages, admin tools, content workflows, forms, and database-backed features.",
    fit: "Best for businesses that need more than a brochure website.",
    icon: BriefcaseBusiness,
  },
  {
    title: "SaaS or Automation MVP",
    text: "A custom app with login, dashboards, database, roles, integrations, automations, and launch-ready deployment.",
    fit: "Best for founders and teams building a real product or internal system.",
    icon: Workflow,
  },
];

const process = [
  {
    title: "Shape",
    text: "Turn the rough request into a clear offer, audience, feature list, and launch plan.",
    icon: MessageSquareText,
  },
  {
    title: "Design",
    text: "Build the visual direction, page rhythm, UI states, and responsive structure before coding deeply.",
    icon: Layers3,
  },
  {
    title: "Develop",
    text: "Create the frontend, backend, database, integrations, and production-ready architecture.",
    icon: Code2,
  },
  {
    title: "Launch",
    text: "Test, optimize, deploy, and prepare the site or app for real customers and future features.",
    icon: Rocket,
  },
];

const faqs = [
  {
    question: "Can you build only a landing page?",
    answer:
      "Yes. A focused landing page is a good starting point when the business needs a premium first impression and a clear enquiry path.",
  },
  {
    question: "Can the website grow into a full app later?",
    answer:
      "Yes. Builds can be structured so the first version can later grow into dashboards, admin tools, databases, portals, or automation workflows.",
  },
  {
    question: "Do you work on existing websites?",
    answer:
      "Yes. Existing sites can be redesigned, cleaned up, optimized for mobile, connected to forms, or expanded with new backend features.",
  },
];

export default function ServicesPage() {
  return (
    <main className="inner-page">
      <SiteHeader />

      <section className="page-hero">
        <p className="case-kicker">Services</p>
        <h1>Premium websites, practical apps, and automation systems.</h1>
        <span>
          Shihaab Tech builds digital products that combine modern visuals with
          real utility: pages that convert, apps that organize work, and systems
          that reduce repeated manual effort.
        </span>
        <div className="case-actions">
          <Link className="primary-button" href="/contact">
            Start a project
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
          <Link className="secondary-button" href="/projects">
            See work examples
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </div>
      </section>

      <section className="section services-section">
        <div className="section-heading">
          <p>What we build</p>
          <h2>Digital products that look premium and work like tools.</h2>
        </div>

        <div className="service-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article className="service-card" key={service.title}>
                <div className="icon-box">
                  <Icon aria-hidden="true" size={22} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section packages-section">
        <div className="section-heading">
          <p>Engagements</p>
          <h2>Choose the type of build that matches your next step.</h2>
        </div>

        <div className="package-grid">
          {packages.map((item, index) => {
            const Icon = item.icon;

            return (
              <article className="package-card" key={item.title}>
                <div className="package-topline">
                  <span>0{index + 1}</span>
                  <Icon aria-hidden="true" size={22} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="package-fit">{item.fit}</div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section process-section">
        <div className="section-heading">
          <p>How we work</p>
          <h2>A focused build process from idea to launch.</h2>
        </div>

        <div className="process-timeline">
          <div className="process-rail" aria-hidden="true" />
          {process.map((item, index) => {
            const Icon = item.icon;

            return (
              <article className="process-step" key={item.title}>
                <div className="process-marker">
                  <span>0{index + 1}</span>
                </div>
                <div className="process-step-body">
                  <div className="process-topline">
                    <div className="icon-box">
                      <Icon aria-hidden="true" size={21} />
                    </div>
                    <span>{index === 0 ? "Plan" : index === 1 ? "Frame" : index === 2 ? "Build" : "Ship"}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <div className="process-mini-diagram" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section faq-section">
        <div className="faq-layout">
          <div className="faq-intro">
            <div className="section-heading">
              <p>Questions</p>
              <h2>Clear answers before the build starts.</h2>
            </div>
          </div>

          <div className="story-steps faq-list">
            {faqs.map((faq, index) => (
              <article className="story-step faq-item" key={faq.question}>
                <div className="process-marker faq-marker">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="case-final">
        <Image
          src="/brand/shihaab-tech-premium-v2-mark.svg"
          alt=""
          width={112}
          height={112}
        />
        <h2>Have a website, app, or automation idea?</h2>
        <p>
          Send the rough idea. Shihaab Tech can help shape the scope, stack,
          timeline, and launch path.
        </p>
        <Link className="primary-button" href="/contact">
          Send project brief
          <CheckCircle2 aria-hidden="true" size={18} />
        </Link>
      </section>
    </main>
  );
}
