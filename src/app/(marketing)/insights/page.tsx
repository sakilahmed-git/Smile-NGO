import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, FileText, Sparkles } from "lucide-react";
import { insights } from "@/content/insights/articles";
import {
  buildBreadcrumbJsonLd,
  buildSeoMetadata,
  buildWebPageJsonLd,
} from "@/lib/seo/metadata";

export const metadata = buildSeoMetadata({
  title: "Insights | SMILE NGO | Community Development in Assam",
  description:
    "Explore stories and field perspectives from SMILE NGO on community development, education, health and local support work in Assam.",
  path: "/insights",
  type: "website",
});

const categories = [
  {
    title: "Stories",
    description:
      "Stories from communities, people, and the work happening on the ground.",
    icon: BookOpen,
  },
  {
    title: "Field Notes",
    description:
      "Perspectives and observations from our work alongside communities.",
    icon: FileText,
  },
  {
    title: "Resources",
    description:
      "Useful knowledge, explainers, and resources around the issues we work on.",
    icon: Sparkles,
  },
];

export default function InsightsPage() {
  const latestInsights = [...insights].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  const webPageJsonLd = buildWebPageJsonLd({
    path: "/insights",
    name: "SMILE NGO Insights",
    description:
      "Stories and field perspectives from SMILE NGO on community development, education, health and local support work in Assam.",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Insights", url: "/insights" },
  ]);

  return (
    <main className="relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Ambient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-12rem] h-[32rem] w-[32rem] rounded-full bg-[var(--color-green)]/[0.035] blur-3xl"
      />

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-5 pb-12 pt-8 sm:px-6 md:px-8 md:pb-16 md:pt-12 lg:px-10">
          <div className="max-w-4xl">
            <div className="mb-5 flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-green)]/[0.08] text-[var(--color-green)]">
                <Sparkles className="h-3.5 w-3.5" />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-green)]">
                SMILE NGO · Insights
              </span>
            </div>

            <h1 className="text-4xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-7xl">
              Ideas, stories
              <span className="block text-[var(--color-green)]">
                and perspective.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-6 text-[var(--color-muted)] sm:text-base sm:leading-7 md:text-lg">
              Explore deeper stories, field perspectives, useful resources,
              and insights from the work we do alongside communities.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="relative border-t border-black/[0.05]">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 md:px-8 md:py-14 lg:px-10">
          <div className="mb-7 flex items-end justify-between gap-6">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-green)]">
                Explore
              </p>

              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                From the work
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <article
                  key={category.title}
                  className="group rounded-[24px] border border-black/[0.06] bg-white p-6 shadow-[0_12px_40px_rgba(7,85,62,0.035)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-green)]/15 hover:shadow-[0_18px_50px_rgba(7,85,62,0.06)]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-green)]/[0.07] text-[var(--color-green)]">
                    <Icon className="h-4 w-4" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em]">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                    {category.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-[11px] font-semibold text-[var(--color-green)]">
                    Explore
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coming content */}
      <section className="relative">
  <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 md:px-8 md:py-14 lg:px-10">
    <div className="mb-7">
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-green)]">
        Latest
      </p>

      <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
        From our insights
      </h2>
    </div>

    {latestInsights.length > 0 ? (
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {latestInsights.map((article) => (
          <Link
            key={article.slug}
            href={`/insights/${article.slug}`}
            className="group overflow-hidden rounded-[24px] border border-black/[0.06] bg-white shadow-[0_12px_40px_rgba(7,85,62,0.035)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(7,85,62,0.07)]"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-black/[0.03]">
              <Image
                src={article.coverImage}
                alt={article.coverImageAlt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>

            <div className="p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-green)]">
                {article.category}
              </p>

              <h3 className="mt-2 text-lg font-semibold leading-snug tracking-[-0.02em]">
                {article.title}
              </h3>

              <p className="mt-2 line-clamp-2 text-sm leading-6 text-[var(--color-muted)]">
                {article.excerpt}
              </p>

              <div className="mt-4 flex items-center gap-2 text-[11px] font-semibold text-[var(--color-green)]">
                Read insight
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    ) : (
      <div className="rounded-[24px] border border-black/[0.06] bg-[#fafcfb] px-6 py-12 text-center">
        <p className="text-sm text-[var(--color-muted)]">
          Our first insights will be published here as soon as they are ready.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <Link href="/blog" className="rounded-full border border-[var(--color-green)]/20 px-4 py-2 text-sm font-semibold text-[var(--color-green)] transition hover:border-[var(--color-green)]/35 hover:bg-[var(--color-green)]/[0.04]">
            Browse our blog
          </Link>
          <Link href="/about" className="rounded-full border border-black/[0.08] px-4 py-2 text-sm font-semibold text-[var(--color-ink)] transition hover:bg-black/[0.03]">
            Learn about our work
          </Link>
        </div>
      </div>
    )}
  </div>
</section>
    </main>
  );
}
