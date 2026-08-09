import { registrationDetails } from "@/config/content";
import { siteConfig } from "@/config/site.config";

export type BreadcrumbItem = {
  name: string;
  url: string;
};

const organizationId = `${siteConfig.url}/#organization`;

function buildAbsoluteUrl(path: string): string {
  if (!path) {
    return siteConfig.url;
  }

  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, siteConfig.url).toString();
}

export function buildOrganizationJsonLd(): Record<string, unknown> {
  const socialProfiles = [
    siteConfig.social.facebookPageUrl,
    siteConfig.social.instagram,
    siteConfig.social.youtube,
    siteConfig.social.linkedin,
  ].filter((value): value is string => Boolean(value));

  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    "@id": organizationId,
    name: siteConfig.name,
    legalName: siteConfig.name,
    alternateName: [
      "SMILE",
      "NGO SMILE",
      "SMILE Foundation",
      "SMILENGO",
      "smile-ngo",
      "SMILE NGO India",
      "SMILE NGO Assam",
    ],
    description: siteConfig.description,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: buildAbsoluteUrl(siteConfig.logo),
    },
    image: buildAbsoluteUrl(siteConfig.logo),
    email: siteConfig.email,
    telephone: ["+91 7002372041", "+91 7002683620"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Burichatam No.1",
      addressLocality: "Gossaigaon",
      addressRegion: "Assam",
      postalCode: "783361",
      addressCountry: "IN",
    },
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Kokrajhar, Assam",
      },
      {
        "@type": "AdministrativeArea",
        name: "Gossaigaon, Kokrajhar, Assam",
      },
      {
        "@type": "AdministrativeArea",
        name: "Bodoland Territorial Region, Assam",
        alternateName: ["BTR", "BTC", "Bodoland"],
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91 7002372041",
        email: siteConfig.email,
        contactType: "general inquiries",
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
      },
    ],
    identifier: [
      {
        "@type": "PropertyValue",
        propertyID: "Assam NGO registration number",
        value: registrationDetails.registrationNo,
      },
    ],
    foundingDate: "2025-11-26",
    knowsAbout: [
      "Community development",
      "Education support",
      "Health and wellbeing",
      "Relief support",
      "Volunteer-led community service",
    ],
    sameAs: socialProfiles,
  };
}

export function buildWebSiteJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    alternateName: ["SMILE", "SMILENGO", "smile-ngo"],
    url: siteConfig.url,
    publisher: {
      "@id": organizationId,
    },
    inLanguage: "en-IN",
  };
}

export function buildWebPageJsonLd({
  path,
  name,
  description,
}: {
  path: string;
  name: string;
  description: string;
}): Record<string, unknown> {
  const url = buildAbsoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    about: {
      "@id": organizationId,
    },
    inLanguage: "en-IN",
  };
}

export function buildArticleJsonLd(article: {
  title: string;
  excerpt: string;
  coverImage: string;
  coverImageAlt: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  slug: string;
}): Record<string, unknown> {
  const canonicalUrl = buildAbsoluteUrl(`/insights/${article.slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${canonicalUrl}#article`,
    headline: article.title,
    description: article.excerpt,
    image: {
      "@type": "ImageObject",
      url: buildAbsoluteUrl(article.coverImage),
      caption: article.coverImageAlt,
    },
    author: {
      "@id": organizationId,
    },
    publisher: {
      "@id": organizationId,
    },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    mainEntityOfPage: {
      "@id": `${canonicalUrl}#webpage`,
    },
    url: canonicalUrl,
    inLanguage: "en-IN",
  };
}

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: buildAbsoluteUrl(item.url),
    })),
  };
}
