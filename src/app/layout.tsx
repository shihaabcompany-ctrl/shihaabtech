import type { Metadata } from "next";
import { AnalyticsScripts } from "@/components/analytics-scripts";
import { ProjectAssistant } from "@/components/project-assistant";
import "./globals.css";

const siteUrl = "https://shihaab.tech";
const siteDescription =
  "Shihaab Tech builds premium websites, custom web apps, SaaS MVPs, and automation systems for growing businesses.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Shihaab Tech",
  title: {
    default: "Shihaab Tech | Premium Websites, Apps, and Automation",
    template: "%s | Shihaab Tech",
  },
  description: siteDescription,
  keywords: [
    "Shihaab Tech",
    "premium website development",
    "custom web apps",
    "SaaS MVP development",
    "business automation",
    "Next.js developer",
    "startup website",
  ],
  authors: [{ name: "Shihaab Tech" }],
  creator: "Shihaab Tech",
  publisher: "Shihaab Tech",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/brand/shihaab-tech-premium-v2-mark.svg",
    shortcut: "/brand/shihaab-tech-premium-v2-mark.svg",
    apple: "/brand/shihaab-tech-premium-v2-mark.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Shihaab Tech | Premium Websites, Apps, and Automation",
    description: siteDescription,
    url: siteUrl,
    siteName: "Shihaab Tech",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Shihaab Tech premium IT studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shihaab Tech | Premium Websites, Apps, and Automation",
    description: siteDescription,
    images: ["/opengraph-image"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Shihaab Tech",
  url: siteUrl,
  logo: `${siteUrl}/brand/shihaab-tech-premium-v2-mark.svg`,
  description: siteDescription,
  areaServed: "Worldwide",
  serviceType: [
    "Website development",
    "Custom web app development",
    "SaaS MVP development",
    "Business automation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
        <ProjectAssistant />
        <AnalyticsScripts />
      </body>
    </html>
  );
}
