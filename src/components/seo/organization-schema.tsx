import { buildOrganizationJsonLd } from "@/lib/seo/json-ld";

export function OrganizationSchema() {
  const jsonLd = buildOrganizationJsonLd();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
