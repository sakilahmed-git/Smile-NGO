import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";
import { projects } from "@/config/content";
import { insights } from "@/content/insights/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/locations/kokrajhar-gossaigaon-assam",
    "/projects",
    "/donate",
    "/gallery",
    "/impact",
    "/transparency",
    "/team",
    "/volunteers",
    "/reports",
    "/faq",
    "/contact",
    "/insights",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
    })),
    ...projects.map((project) => ({
      url: `${siteConfig.url}/projects/${project.slug}`,
      lastModified: new Date(),
    })),
    ...insights.map((article) => ({
      url: `${siteConfig.url}/insights/${article.slug}`,
      lastModified: new Date(),
    })),
  ];
}
