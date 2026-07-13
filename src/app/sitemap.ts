import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies";

const siteUrl = "https://shihaab.tech";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...caseStudies.map((study) => ({
      url: `${siteUrl}/work/${study.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
