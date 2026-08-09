import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";

type SeoImage = {
  url: string;
  alt?: string;
};

type CreateSeoMetadataOptions = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  images?: SeoImage[];
};

export function buildAbsoluteUrl(path: string): string {
  if (!path) {
    return siteConfig.url;
  }

  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, siteConfig.url).toString();
}

export function buildSeoMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  images,
}: CreateSeoMetadataOptions): Metadata {
  const canonical = buildAbsoluteUrl(path);
  const ogImages = (images ?? []).map((image) => ({
    url: buildAbsoluteUrl(image.url),
    alt: image.alt ?? title,
  }));

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type,
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
      ...(authors && authors.length > 0 ? { authors } : {}),
      ...(ogImages.length > 0 ? { images: ogImages } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(ogImages.length > 0 ? { images: ogImages.map((image) => image.url) } : {}),
    },
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
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    image: buildAbsoluteUrl(article.coverImage),
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    url: canonicalUrl,
  };
}

export function buildBreadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
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
