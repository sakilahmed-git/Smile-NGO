import { SectionPage } from "@/components/sections/section-page";
import {
  buildBreadcrumbJsonLd,
  buildSeoMetadata,
  buildWebPageJsonLd,
} from "@/lib/seo/metadata";

export const metadata = buildSeoMetadata({
  title: "About SMILE NGO | Community-led NGO in Kokrajhar & Gossaigaon",
  description:
    "Learn about SMILE NGO, a community-led NGO in Kokrajhar and Gossaigaon, Assam, supporting education, health, relief and community development work.",
  path: "/about",
  type: "website",
});

export default function AboutPage() {
  const webPageJsonLd = buildWebPageJsonLd({
    path: "/about",
    name: "About SMILE NGO",
    description:
      "Learn about SMILE NGO, a registered NGO in Assam working with communities in Kokrajhar and Gossaigaon through education, health, relief and community development programmes.",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <SectionPage id="about" />
    </>
  );
}
