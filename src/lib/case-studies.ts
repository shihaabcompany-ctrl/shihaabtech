export type CaseStudy = {
  slug: string;
  name: string;
  shortName: string;
  type: string;
  href: string;
  linkLabel: string;
  challenge: string;
  build: string;
  outcome: string;
  tags: string[];
  proof: string[];
  logo: string;
  logoAlt: string;
  visual: "commerce" | "automation";
  headline: string;
  summary: string;
  role: string;
  timeline: string;
  stack: string[];
  metrics: Array<{ value: string; label: string }>;
  features: string[];
  process: Array<{ title: string; text: string }>;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "rozaliya",
    name: "Rozaliya Lube Digital Platform",
    shortName: "Rozaliya",
    type: "Business website and operating backend",
    href: "https://rozaliya-xi.vercel.app/",
    linkLabel: "Open live website",
    challenge:
      "Turn a traditional lubricant brand into a cleaner digital experience where customers can understand the range, explore product categories, and send enquiries.",
    build:
      "A Next.js and Supabase platform with product catalog pages, product detail flows, career applications, blog management, protected admin screens, and storage-backed product data.",
    outcome:
      "A business website that does more than display information: it supports catalog updates, customer trust, hiring workflows, and future content growth.",
    tags: ["Catalog system", "Admin tools", "Supabase", "Business workflows"],
    proof: ["Product discovery", "Admin publishing", "Customer enquiry path"],
    logo: "/projects/rozaliya-logo.png",
    logoAlt: "Rozaliya logo",
    visual: "commerce",
    headline: "A product-led website for a traditional lubricant brand.",
    summary:
      "Rozaliya needed a digital presence that could present the brand professionally while giving the business a practical way to manage products, content, enquiries, and hiring workflows.",
    role: "Website design, frontend, backend, database, admin workflows",
    timeline: "Business platform build",
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Vercel"],
    metrics: [
      { value: "10+", label: "product categories supported" },
      { value: "4", label: "admin-managed content areas" },
      { value: "1", label: "central business platform" },
    ],
    features: [
      "Product catalog and detail pages",
      "Supabase-backed product management",
      "Career application flow",
      "Blog and content management",
      "Customer enquiry direction",
      "Responsive business website structure",
    ],
    process: [
      {
        title: "Brand clarity",
        text: "The experience was shaped around product trust, category discovery, and business credibility.",
      },
      {
        title: "Operational backend",
        text: "Admin workflows allow the business to manage products, posts, and applications without editing code.",
      },
      {
        title: "Launch-ready foundation",
        text: "The site is structured so it can keep growing with more product data, content, and customer journeys.",
      },
    ],
  },
  {
    slug: "zyrelo",
    name: "Zyrelo Multi-Channel Automation",
    shortName: "Zyrelo",
    type: "SaaS dashboard and automation engine",
    href: "https://multi-channel-automation.vercel.app/login",
    linkLabel: "Open demo login",
    challenge:
      "Give small teams one place to manage contacts, groups, campaigns, media, channel connections, scheduled automations, and delivery results.",
    build:
      "A company-scoped SaaS app with login, roles, admin areas, contacts, groups, WhatsApp, Instagram, Facebook, email, SMS, logs, webhooks, and protected cron automation.",
    outcome:
      "A working operations dashboard that replaces tab-hopping with a structured campaign workflow and clear delivery visibility.",
    tags: ["SaaS MVP", "Automation", "Multi-channel", "Dashboards"],
    proof: ["Company workspaces", "Scheduled campaigns", "Delivery logs"],
    logo: "/projects/zyrelo-logo-mark.svg",
    logoAlt: "Zyrelo logo",
    visual: "automation",
    headline: "A SaaS MVP for campaign control across multiple channels.",
    summary:
      "Zyrelo was built as an operations dashboard for teams that need to prepare campaigns, manage contacts, schedule delivery, and track results without switching between separate tools.",
    role: "SaaS architecture, dashboards, integrations, automation workflows",
    timeline: "MVP product build",
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Meta Webhooks", "Twilio"],
    metrics: [
      { value: "6", label: "channel types planned" },
      { value: "3", label: "workspace roles" },
      { value: "1", label: "automation command center" },
    ],
    features: [
      "Company-scoped workspaces",
      "Contacts and group management",
      "Manual and scheduled posting",
      "WhatsApp, email, SMS, Instagram, and Facebook flows",
      "Delivery logs and export paths",
      "Admin, audit, and settings areas",
    ],
    process: [
      {
        title: "Workflow mapping",
        text: "The product flow was mapped around the daily campaign tasks a small business or agency repeats.",
      },
      {
        title: "Dashboard system",
        text: "The interface separates contacts, automation, inbox, sent logs, connections, admin, and settings clearly.",
      },
      {
        title: "Automation layer",
        text: "Protected run-due endpoints and channel adapters create the foundation for scheduled campaign delivery.",
      },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
