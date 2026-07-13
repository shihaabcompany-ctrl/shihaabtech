import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Blocks,
  Bot,
  Braces,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  ExternalLink,
  Globe2,
  Layers3,
  LayoutDashboard,
  LineChart,
  MessageSquareText,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";
import { LeadForm } from "@/components/lead-form";
import { ProjectVisual } from "@/components/project-visual";
import { caseStudies } from "@/lib/case-studies";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Story", href: "#story" },
  { label: "Work", href: "#projects" },
  { label: "Packages", href: "#packages" },
  { label: "Contact", href: "#contact" },
];

const storyBeats = [
  {
    title: "The first impression",
    text: "A sharp hero, clear offer, and confident brand system tell visitors they are in the right place.",
    icon: Sparkles,
  },
  {
    title: "The trust layer",
    text: "Services, case studies, technology choices, and process details make the business feel credible.",
    icon: ShieldCheck,
  },
  {
    title: "The decision path",
    text: "Every section guides the customer toward the next useful action without making the page feel crowded.",
    icon: Workflow,
  },
  {
    title: "The launch engine",
    text: "The final build is fast, responsive, deployable, and ready to grow into forms, dashboards, or apps.",
    icon: Rocket,
  },
];

const services = [
  {
    title: "Premium Websites",
    text: "Landing pages, company websites, portfolio sites, and product pages with a high-end first impression.",
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

const trustPillars = [
  {
    title: "Premium before decoration",
    text: "The design has to look modern, but the priority is clarity, trust, hierarchy, and conversion.",
    icon: Sparkles,
  },
  {
    title: "Built like a product",
    text: "Even a landing page is structured so it can grow into forms, dashboards, admin tools, and workflows.",
    icon: Blocks,
  },
  {
    title: "Business-first execution",
    text: "Every feature is tied to a practical customer action: enquire, understand, book, buy, apply, or manage.",
    icon: Target,
  },
  {
    title: "Launch and improve",
    text: "The goal is not only a beautiful first version. It is a site or app that can keep improving after launch.",
    icon: LineChart,
  },
];

const projectProof = [
  {
    label: "Rozaliya platform",
    title: "Business presence plus operating backend",
    text: "A product-led website with catalog management, content workflows, enquiry paths, career applications, and admin-controlled updates.",
    proof: "Live business platform",
  },
  {
    label: "Zyrelo automation",
    title: "SaaS-style dashboard for repeated work",
    text: "A multi-channel automation system structured around contacts, groups, campaigns, delivery logs, scheduled jobs, and workspace roles.",
    proof: "Working MVP system",
  },
  {
    label: "Shihaab delivery",
    title: "Design quality with product thinking",
    text: "Every build is shaped around the customer journey, responsive UI, practical backend structure, and a clear path after launch.",
    proof: "Full-stack execution",
  },
];

const process = [
  {
    title: "Shape",
    text: "We turn the rough request into a clear offer, audience, feature list, and launch plan.",
    icon: MessageSquareText,
  },
  {
    title: "Design",
    text: "We build the visual direction, page rhythm, UI states, and responsive structure before coding deeply.",
    icon: Layers3,
  },
  {
    title: "Develop",
    text: "We create the frontend, backend, database, integrations, and production-ready architecture.",
    icon: Code2,
  },
  {
    title: "Launch",
    text: "We test, optimize, deploy, and prepare the site or app for real customers and future features.",
    icon: Rocket,
  },
];

const stack = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"];

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
      <StorySection />
      <ServicesSection />
      <ProjectsSection />
      <PackagesSection />
      <StackSection />
      <TrustSection />
      <ProcessSection />
      <ContactSection />
      <MobileStickyCta />
    </main>
  );
}

function Header() {
  return (
    <header className="site-header" aria-label="Main navigation">
      <Link href="#top" className="brand-link" aria-label="Shihaab Tech home">
        <Image
          src="/brand/shihaab-tech-premium-v2-dark.svg"
          alt="Shihaab Tech"
          width={260}
          height={65}
          priority
        />
      </Link>

      <nav className="desktop-nav" aria-label="Sections">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <Link className="nav-cta" href="#contact">
        Start a project
        <ArrowRight aria-hidden="true" size={16} />
      </Link>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="top" className="hero-shell">
      <Header />

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
            <Link className="primary-button" href="#contact">
              Start a project
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <Link className="secondary-button" href="#projects">
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

function StorySection() {
  return (
    <section id="story" className="story-section">
      <div className="story-intro">
        <p>Visual storytelling</p>
        <h2>A modern website should guide the customer, not just decorate the screen.</h2>
        <span>
          The page should not simply list services. It should explain what you do,
          prove why clients can trust you, and make the next step feel obvious.
        </span>
      </div>

      <div className="story-board">
        <div className="story-device" aria-hidden="true">
          <div className="device-top">
            <i />
            <i />
            <i />
          </div>
          <div className="device-hero">
            <Image
              src="/brand/shihaab-tech-premium-v2-mark.svg"
              alt=""
              width={112}
              height={112}
            />
            <div>
              <span>Shihaab Tech</span>
              <strong>From first impression to working product</strong>
            </div>
          </div>
          <div className="device-lines">
            <span />
            <span />
            <span />
          </div>
          <div className="device-modules">
            <i />
            <i />
            <i />
          </div>
        </div>

        <div className="story-steps">
          {storyBeats.map((beat, index) => {
            const Icon = beat.icon;

            return (
              <article key={beat.title} className="story-step">
                <span className="story-index">0{index + 1}</span>
                <div className="icon-box">
                  <Icon aria-hidden="true" size={21} />
                </div>
                <div>
                  <h3>{beat.title}</h3>
                  <p>{beat.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="section services-section">
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
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-heading">
        <p>Selected work</p>
        <h2>Case studies that explain the business value behind the build.</h2>
      </div>

      <div className="project-grid">
        {caseStudies.map((project) => (
          <article className="project-card" key={project.name}>
            <ProjectVisual
              type={project.visual}
              logo={project.logo}
              logoAlt={project.logoAlt}
            />
            <div className="project-content">
              <span>{project.type}</span>
              <h3>{project.name}</h3>
              <ProjectStory label="Challenge" text={project.challenge} />
              <ProjectStory label="Build" text={project.build} />
              <ProjectStory label="Outcome" text={project.outcome} />
              <Link
                className="project-live-link"
                href={`/work/${project.slug}`}
              >
                Read case study
                <ArrowRight aria-hidden="true" size={16} />
              </Link>
              <Link
                className="project-live-link secondary-live-link"
                href={project.href}
                target="_blank"
                rel="noreferrer"
              >
                {project.linkLabel}
                <ExternalLink aria-hidden="true" size={16} />
              </Link>
              <div className="project-proof">
                {project.proof.map((item) => (
                  <div key={item}>
                    <CheckCircle2 aria-hidden="true" size={16} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <small key={tag}>{tag}</small>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectStory({ label, text }: { label: string; text: string }) {
  return (
    <div className="project-story">
      <strong>{label}</strong>
      <p>{text}</p>
    </div>
  );
}

function PackagesSection() {
  return (
    <section id="packages" className="section packages-section">
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
  );
}

function StackSection() {
  return (
    <section className="stack-band" aria-label="Technology stack">
      <div className="stack-copy">
        <Braces aria-hidden="true" size={22} />
        <span>Modern stack for fast sites, real apps, and future growth</span>
      </div>
      <div className="stack-list">
        {stack.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="section trust-section">
      <div className="trust-panel">
        <div className="section-heading">
          <p>Why Shihaab Tech</p>
          <h2>Professional enough for clients, practical enough for real business.</h2>
        </div>

        <div className="trust-grid">
          {trustPillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <article className="trust-item" key={pillar.title}>
                <div className="icon-box">
                  <Icon aria-hidden="true" size={21} />
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            );
          })}
        </div>

        <div className="trust-grid proof-grid" aria-label="Shihaab Tech project proof">
          {projectProof.map((item) => (
            <article className="trust-item proof-card" key={item.label}>
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <strong>{item.proof}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="section process-section">
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
