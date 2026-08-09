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
  const seoImages =
    images && images.length > 0
      ? images
      : [
          {
            url: siteConfig.logo,
            alt: "SMILE NGO logo",
          },
        ];
  const ogImages = seoImages.map((image) => ({
    url: buildAbsoluteUrl(image.url),
    alt: image.alt ?? title,
  }));

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
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
      images: ogImages.map((image) => image.url),
    },
  };
}

export {
  buildArticleJsonLd,
  buildBreadcrumbJsonLd,
  buildOrganizationJsonLd,
  buildWebPageJsonLd,
  buildWebSiteJsonLd,
} from "@/lib/seo/json-ld";
