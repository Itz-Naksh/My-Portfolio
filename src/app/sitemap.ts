import type { MetadataRoute } from "next";
import { caseStudies, personal } from "@/data/portfolio";

/** /sitemap.xml: tells search engines which pages exist. */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = personal.siteUrl;

  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    ...caseStudies.map((study) => ({
      url: `${base}/projects/${study.slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  ];
}
