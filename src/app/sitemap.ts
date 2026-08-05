import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";
import { projects } from "@/config/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
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
  ];
}
