import Link from "next/link";
import { ArrowRight, Landmark, MapPin } from "lucide-react";
import { projects, registrationDetails } from "@/config/content";
import { siteConfig } from "@/config/site.config";
import {
  buildBreadcrumbJsonLd,
  buildSeoMetadata,
  buildWebPageJsonLd,
} from "@/lib/seo/metadata";

export const metadata = buildSeoMetadata({
  title: "SMILE NGO in Kokrajhar & Gossaigaon, Assam | Local Community Work",
  description:
    "SMILE NGO works with communities in Kokrajhar, Gossaigaon and nearby BTC/Bodoland areas of Assam through education, health, relief and community development programmes.",
  path: "/locations/kokrajhar-gossaigaon-assam",
  type: "website",
});

const focusAreas = [
  "Education support and student recognition",
  "Health, wellbeing and community support",
  "Relief support for families facing difficult circumstances",
  "Environment and volunteer-led community service",
];

export default function KokrajharGossaigaonLocationPage() {
  const localProjects = projects.filter((project) =>
    /gossaigaon|kokrajhar|btc|assam/i.test(`${project.location} ${project.summary}`)
  );
  const webPageJsonLd = buildWebPageJsonLd({
    path: "/locations/kokrajhar-gossaigaon-assam",
    name: "SMILE NGO in Kokrajhar and Gossaigaon, Assam",
    description:
      "Local information about SMILE NGO's community development work in Kokrajhar, Gossaigaon and nearby BTC/Bodoland areas of Assam.",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Locations", url: "/locations/kokrajhar-gossaigaon-assam" },
    {
      name: "Kokrajhar and Gossaigaon, Assam",
      url: "/locations/kokrajhar-gossaigaon-assam",
    },
  ]);

  return (
    <main className="pb-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="page-shell pt-6">
        <div className="rounded-[2rem] bg-[#F4FAF7] p-6 ring-1 ring-emerald-900/5 md:p-10">
          <div className="flex max-w-4xl items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-[var(--color-brand)] shadow-sm">
              <MapPin size={22} aria-hidden />
            </span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-brand-strong)]">
                Local work in Assam
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[var(--color-ink)] md:text-5xl">
                SMILE NGO in Kokrajhar and Gossaigaon, Assam
              </h1>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--color-muted)] md:text-base">
                SMILE NGO is based in Burichatam No.1, Gossaigaon, Kokrajhar,
                Assam, and works with communities in Kokrajhar, Gossaigaon and
                nearby BTC/Bodoland areas through education, health, relief and
                community development programmes.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/projects" className="btn-primary">
                  See local programmes
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-emerald-900/10 bg-white px-5 text-sm font-semibold text-[var(--color-brand-strong)]"
                >
                  Contact SMILE NGO
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell grid gap-5 md:grid-cols-[1fr_.85fr]">
        <article className="rounded-[1.5rem] bg-white p-6 shadow-soft ring-1 ring-emerald-900/5 md:p-7">
          <p className="eyebrow">Service areas</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.02em]">
            Community-led NGO work across Kokrajhar, Gossaigaon and Bodoland
          </h2>
          <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
            People may search for SMILE NGO as SMILE, SMILENGO, smile-ngo, NGO
            SMILE or SMILE Foundation. These are treated as search and entity
            variations for the same organization, not separate local offices or
            duplicate pages.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {["Kokrajhar", "Gossaigaon", "Burichatam No.1", "BTC/Bodoland, Assam"].map(
              (area) => (
                <div
                  key={area}
                  className="rounded-2xl bg-[#F8FBF9] px-4 py-3 text-sm font-semibold text-[var(--color-ink)] ring-1 ring-emerald-900/5"
                >
                  {area}
                </div>
              )
            )}
          </div>
        </article>

        <aside className="rounded-[1.5rem] bg-white p-6 shadow-soft ring-1 ring-emerald-900/5 md:p-7">
          <div className="grid h-11 w-11 place-items-center rounded-full bg-[#E8F7F1] text-[var(--color-brand)]">
            <Landmark size={19} aria-hidden />
          </div>
          <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-brand-strong)]">
            Registered details
          </p>
          <dl className="mt-4 space-y-3 text-sm">
            <div>
              <dt className="font-semibold text-[var(--color-ink)]">Name</dt>
              <dd className="text-[var(--color-muted)]">{siteConfig.name}</dd>
            </div>
            <div>
              <dt className="font-semibold text-[var(--color-ink)]">Address</dt>
              <dd className="text-[var(--color-muted)]">{siteConfig.address}</dd>
            </div>
            <div>
              <dt className="font-semibold text-[var(--color-ink)]">Registration</dt>
              <dd className="text-[var(--color-muted)]">
                {registrationDetails.registrationNo}
              </dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className="page-shell grid gap-5 md:grid-cols-2">
        <article className="rounded-[1.5rem] bg-[#0B5A43] p-6 text-white md:p-7">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F1D080]">
            Focus areas
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.02em]">
            Practical support shaped around local needs
          </h2>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-white/80">
            {focusAreas.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F1D080]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-[1.5rem] bg-white p-6 shadow-soft ring-1 ring-emerald-900/5 md:p-7">
          <p className="eyebrow">Related local programmes</p>
          <div className="mt-4 space-y-4">
            {localProjects.slice(0, 4).map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block rounded-2xl border border-emerald-900/10 p-4 transition hover:border-[var(--color-brand)]/30 hover:bg-[#F8FBF9]"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand-strong)]">
                  {project.location}
                </p>
                <h3 className="mt-2 font-semibold text-[var(--color-ink)]">
                  {project.title}
                </h3>
                <span className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-[var(--color-brand-strong)]">
                  View programme
                  <ArrowRight
                    size={14}
                    className="transition group-hover:translate-x-1"
                    aria-hidden
                  />
                </span>
              </Link>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
