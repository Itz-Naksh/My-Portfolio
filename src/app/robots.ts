import type { MetadataRoute } from "next";
import { personal } from "@/data/portfolio";

/** /robots.txt: allows all search engines and points them to the sitemap. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${personal.siteUrl}/sitemap.xml`,
  };
}
