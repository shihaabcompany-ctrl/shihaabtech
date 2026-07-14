import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Workflow,
} from "lucide-react";
import { LeadForm } from "@/components/lead-form";
import { SiteHeader } from "@/components/site-header";
import { caseStudies } from "@/lib/case-studies";

const proof = [
  { value: "02", label: "real product builds" },
  { value: "06+", label: "business workflows covered" },
  { value: "100%", label: "custom digital execution" },
];

const contactSteps = [
  {
    title: "Brief review",
    text: "Your request is reviewed for business goal, scope, timeline, and the type of build that fits best.",
  },
  {
    title: "Clear plan",
    text: "You get a practical next step: recommended pages, features, stack, timeline, and launch direction.",
  },
  {
    title: "Build path",
    text: "Once confirmed, the work moves into design, development, testing, deployment, and improvement.",
  },
];

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HomeOverviewSection />
      <HomeWorkPreview />
      <ContactSection />
      <MobileStickyCta />
    </main>
  );
}

function HeroSection() {
  return (
    <section id="top" className="hero-shell">
      <SiteHeader brandHref="#top" />

      <div className="hero-visual" aria-hidden="true">
        <div className="visual-grid" />
        <div className="hero-sweep" />
        <div className="logo-orbit">
          <div className="orbit-field" />
          <div className="orbit-ring ring-one" />
          <div className="orbit-ring ring-two" />
          <div className="orbit-ring ring-three" />
          <div className="orbit-ring ring-four" />
          <span className="orbit-beam beam-a" />
          <span className="orbit-beam beam-b" />
          <Image
            src="/brand/shihaab-tech-premium-v2-mark.svg"
            alt=""
            width={260}
            height={260}
            priority
            className="hero-mark"
          />
          <span className="orbit-node node-a" />
          <span className="orbit-node node-b" />
          <span className="orbit-node node-c" />
          <span className="orbit-node node-d" />
          <span className="orbit-node node-e" />
        </div>

        <div className="signal-card signal-card-one">
          <span>01</span>
          <strong>Client story</strong>
          <p>Problem, proof, action</p>
        </div>
        <div className="signal-card signal-card-two">
          <span>02</span>
          <strong>Interface system</strong>
          <p>UI, data, workflow</p>
        </div>
        <div className="signal-card signal-card-three">
          <span>03</span>
          <strong>Launch engine</strong>
          <p>Build, deploy, improve</p>
        </div>
        <div className="hero-code-strip">
          <span>strategy</span>
          <span>interface</span>
          <span>backend</span>
          <span>launch</span>
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-copy">
          <div className="eyebrow">
            <Sparkles aria-hidden="true" size={16} />
            Premium IT studio for websites, apps, and automations
          </div>
          <h1>Make your business feel digital, trusted, and ready to scale.</h1>
          <p>
            Shihaab Tech builds modern websites, custom apps, SaaS MVPs, and
            automation systems with the visual quality of a premium brand and the
            engineering discipline of a real product team.
          </p>
          <div className="hero-actions">
            <Link className="primary-button" href="/contact">
              Start a project
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <Link className="secondary-button" href="/projects">
              See selected work
              <ExternalLink aria-hidden="true" size={17} />
            </Link>
          </div>
        </div>

        <div className="hero-proof" aria-label="Shihaab Tech proof points">
          {proof.map((item) => (
            <div key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeOverviewSection() {
  const routes = [
    {
      title: "About Shihaab Tech",
      text: "Meet the founders, the story behind the company, and the principles that shape every build.",
      href: "/about",
      icon: Sparkles,
      label: "Company story",
    },
    {
      title: "Services",
      text: "Explore premium websites, custom apps, SaaS MVPs, automations, support, and launch-ready packages.",
      href: "/services",
      icon: Workflow,
      label: "What we build",
    },
    {
      title: "Projects",
      text: "See live project proof, case studies, and the business value behind Rozaliya and Zyrelo.",
      href: "/projects",
      icon: BriefcaseBusiness,
      label: "Selected work",
    },
  ];

  return (
    <section className="section home-overview-section">
      <div className="split-heading section-heading">
        <div>
          <p>Start here</p>
          <h2>Choose the path that matches what you need.</h2>
        </div>
      </div>

      <div className="package-grid">
        {routes.map((route, index) => {
          const Icon = route.icon;

          return (
            <Link className="package-card home-route-card" href={route.href} key={route.title}>
              <div className="package-topline">
                <span>0{index + 1}</span>
                <Icon aria-hidden="true" size={22} />
              </div>
              <small>{route.label}</small>
              <h3>{route.title}</h3>
              <p>{route.text}</p>
              <strong>
                Explore
                <ArrowRight aria-hidden="true" size={16} />
              </strong>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

function HomeWorkPreview() {
  return (
    <section className="section home-work-section">
      <div className="section-heading">
        <p>Selected work</p>
        <h2>Two real builds, shown briefly here.</h2>
      </div>

      <div className="home-work-grid">
        {caseStudies.map((project) => (
          <article className="trust-item proof-card home-work-card" key={project.slug}>
            <span>{project.type}</span>
            <h3>{project.name}</h3>
            <p>{project.summary}</p>
            <div className="project-tags">
              {project.tags.slice(0, 3).map((tag) => (
                <small key={tag}>{tag}</small>
              ))}
            </div>
            <div className="home-work-actions">
              <Link href={`/work/${project.slug}`}>
                Case study
                <ArrowRight aria-hidden="true" size={16} />
              </Link>
              <Link href={project.href} target="_blank" rel="noreferrer">
                Live project
                <ExternalLink aria-hidden="true" size={16} />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="section-cta-row">
        <Link className="secondary-button" href="/projects">
          View all project details
          <ArrowRight aria-hidden="true" size={18} />
        </Link>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <div>
          <p className="contact-kicker">Start with an idea, problem, or rough plan.</p>
          <h2>Tell us what you want to build. We will shape it into a clear plan.</h2>
          <p>
            Bring a website request, app idea, automation need, or existing system
            that needs improvement. Shihaab Tech can help shape it, design it,
            build it, and launch it.
          </p>
          <div className="contact-highlights">
            <div>
              <CheckCircle2 aria-hidden="true" size={18} />
              <span>Premium visual direction and page story</span>
            </div>
            <div>
              <CheckCircle2 aria-hidden="true" size={18} />
              <span>Frontend, backend, database, and deployment</span>
            </div>
            <div>
              <CheckCircle2 aria-hidden="true" size={18} />
              <span>Launch support and future improvement path</span>
            </div>
          </div>
          <div
            className="contact-highlights contact-next-steps"
            aria-label="What happens after sending the form"
          >
            {contactSteps.map((step, index) => (
              <div className="contact-step" key={step.title}>
                <span>0{index + 1}</span>
                <strong>{step.title}</strong>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        <LeadForm />
      </div>
    </section>
  );
}

function MobileStickyCta() {
  return (
    <Link className="mobile-sticky-cta" href="#contact">
      Start a project
      <ArrowRight aria-hidden="true" size={17} />
    </Link>
  );
}
