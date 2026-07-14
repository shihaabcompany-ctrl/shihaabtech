import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  GraduationCap,
  MapPin,
  Rocket,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Shihaab Tech, a focused IT startup founded by Shihaab Huvairris and Sriraam Jaisankar after graduating from Kongu Engineering College.",
  alternates: {
    canonical: "/about",
  },
};

const team = [
  {
    name: "Shihaab Huvairris",
    role: "CEO and Owner",
    image: "/team/shihaab-huvairris.png",
    imagePosition: "center 18%",
    headline: "Owns the company direction and client trust.",
    focus:
      "Shihaab leads the business vision, project direction, client conversations, and the standard of presentation every build has to reach.",
    proof: ["Founder-led client communication", "Project vision and business fit", "Brand quality and growth direction"],
  },
  {
    name: "Sriraam Jaisankar",
    role: "Developer and Founding Team",
    image: "/team/sriraam-jaisankar.jpg",
    imagePosition: "45% 38%",
    headline: "Turns ideas into working digital products.",
    focus:
      "Sriraam handles frontend, backend, product systems, and data-aware engineering while studying a Master's in Data Science at the Technical University of Vienna.",
    proof: ["Full-stack product development", "SaaS and automation workflows", "Data Science Master's exposure"],
  },
];

const milestones = [
  {
    title: "Kongu Engineering College",
    text: "Shihaab and Sriraam studied their undergraduate degree together at Kongu Engineering College, where the working relationship started.",
    icon: GraduationCap,
  },
  {
    title: "Started after graduation",
    text: "After graduation, they shaped Shihaab Tech into a small IT startup focused on premium websites, custom apps, SaaS MVPs, and automation systems.",
    icon: Rocket,
  },
  {
    title: "Product-first mindset",
    text: "The company is built around practical digital products: clear pages, useful workflows, responsive interfaces, and backend systems that can grow.",
    icon: Sparkles,
  },
  {
    title: "Global technical exposure",
    text: "Sriraam's current Data Science Master's journey in Vienna adds a stronger technical and data-focused perspective to the work.",
    icon: MapPin,
  },
];

const credibility = [
  {
    title: "Named founders, visible ownership",
    text: "Clients can see who is responsible for the company, communication, technical execution, and delivery quality.",
    icon: UsersRound,
  },
  {
    title: "Real shipped project proof",
    text: "Rozaliya and Zyrelo show business websites, admin workflows, SaaS dashboards, automation flows, and launch-ready product thinking.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Technical depth beyond visuals",
    text: "The work is not only page design. It includes frontend, backend, databases, protected areas, integrations, and product architecture.",
    icon: Code2,
  },
  {
    title: "Clear process before development",
    text: "Every project starts with the business goal, user journey, scope, stack, launch plan, and improvement path.",
    icon: ShieldCheck,
  },
];

const principles = [
  {
    title: "Small teams need serious digital systems",
    text: "A business website should do more than look clean. It should explain, guide, collect enquiries, support operations, and create trust.",
  },
  {
    title: "Premium should feel practical",
    text: "The site or app has to feel modern, but every section must help customers understand what to do next.",
  },
  {
    title: "Launch is only the first version",
    text: "Good digital products need a foundation that can grow into admin tools, dashboards, automation, content, and better customer journeys.",
  },
];

export default function AboutPage() {
  return (
    <main className="inner-page">
      <SiteHeader />

      <section className="page-hero page-hero-grid">
        <div>
          <p className="case-kicker">About Shihaab Tech</p>
          <h1>A founder-led IT startup built from college roots into product work.</h1>
          <span>
            Shihaab Tech was started by Shihaab Huvairris and Sriraam
            Jaisankar after they completed their undergraduate degree together
            at Kongu Engineering College. The company now builds premium
            websites, custom apps, SaaS MVPs, and automation systems for
            businesses that want a sharper digital presence and a practical
            product foundation.
          </span>
          <div className="case-actions">
            <Link className="primary-button" href="/contact">
              Start a project
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <Link className="secondary-button" href="/projects">
              View our work
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </div>

        <div className="about-brand-panel" aria-label="Shihaab Tech company signal">
          <Image
            src="/brand/shihaab-tech-premium-v2-mark.svg"
            alt=""
            width={130}
            height={130}
            priority
          />
          <strong>Built from college roots into a modern IT studio.</strong>
          <p>
            The team is intentionally small, technical, and hands-on, which
            keeps the work clear from strategy to launch.
          </p>
          <div className="about-signal-grid">
            <span>Founder-led</span>
            <span>Full-stack</span>
            <span>Product-focused</span>
          </div>
        </div>
      </section>

      <section className="section team-section">
        <div className="section-heading">
          <p>Core team</p>
          <h2>The people behind the company, with clear ownership.</h2>
        </div>

        <div className="team-grid">
          {team.map((person) => (
            <article className="team-card" key={person.name}>
              <div className="team-photo-frame">
                <Image
                  src={person.image}
                  alt={`${person.name} portrait`}
                  width={360}
                  height={360}
                  sizes="(max-width: 640px) 190px, 168px"
                  className="team-photo"
                  style={{ objectPosition: person.imagePosition }}
                />
              </div>
              <div>
                <span>{person.role}</span>
                <h3>{person.name}</h3>
                <strong>{person.headline}</strong>
                <p>{person.focus}</p>
                <div className="team-proof-list">
                  {person.proof.map((item) => (
                    <div key={item}>
                      <CheckCircle2 aria-hidden="true" size={15} />
                      <small>{item}</small>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section founder-credibility-section">
        <div className="split-heading section-heading">
          <div>
            <p>Founder credibility</p>
            <h2>Trust is built through visible people, shipped work, and clear delivery.</h2>
          </div>
          <span>
            The strongest credibility for a young startup is not inflated
            language. It is proof that real people are responsible, real
            systems have been shipped, and the work follows a serious process.
          </span>
        </div>

        <div className="credibility-grid">
          {credibility.map((item) => {
            const Icon = item.icon;

            return (
              <article className="credibility-card" key={item.title}>
                <div className="icon-box">
                  <Icon aria-hidden="true" size={21} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section about-story-section">
        <div className="section-heading">
          <p>Company story</p>
          <h2>From shared education to shared execution.</h2>
        </div>

        <div className="story-steps">
          {milestones.map((item, index) => {
            const Icon = item.icon;

            return (
              <article className="story-step" key={item.title}>
                <span className="story-index">0{index + 1}</span>
                <div className="icon-box">
                  <Icon aria-hidden="true" size={21} />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section about-principles">
        <div className="split-heading section-heading">
          <div>
            <p>Why Shihaab Tech exists</p>
            <h2>To help businesses move from rough ideas to useful digital products.</h2>
          </div>
          <span>
            The company is built for founders and businesses who want a digital
            partner that can understand the business goal, design the customer
            journey, build the product, and keep improving it after launch.
          </span>
        </div>

        <div className="why-grid">
          {principles.map((item) => (
            <article className="why-card" key={item.title}>
              <BadgeCheck aria-hidden="true" size={22} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-final">
        <Image
          src="/brand/shihaab-tech-premium-v2-mark.svg"
          alt=""
          width={112}
          height={112}
        />
        <h2>Want to build with a small, focused technical team?</h2>
        <p>
          Start with a rough idea, existing business problem, or website
          request. Shihaab Tech can shape it into a clear digital build.
        </p>
        <Link className="primary-button" href="/contact">
          Contact Shihaab Tech
          <ArrowRight aria-hidden="true" size={18} />
        </Link>
      </section>
    </main>
  );
}
