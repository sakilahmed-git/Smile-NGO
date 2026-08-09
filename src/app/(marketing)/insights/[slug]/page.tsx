import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { insights } from "@/content/insights/articles";
import { loadInsightContent } from "@/lib/insights/mdx";
import {
  buildArticleJsonLd,
  buildBreadcrumbJsonLd,
  buildSeoMetadata,
} from "@/lib/seo/metadata";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return insights.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const article = insights.find((item) => item.slug === slug);

  if (!article) {
    return {};
  }

  return buildSeoMetadata({
    title: article.seoTitle ?? article.title,
    description: article.seoDescription ?? article.excerpt,
    path: `/insights/${article.slug}`,
    type: "article",
    publishedTime: article.publishedAt,
    modifiedTime: article.updatedAt ?? article.publishedAt,
    authors: [article.author],
    images: [
      {
        url: article.coverImage,
        alt: article.coverImageAlt,
      },
    ],
  });
}

export default async function InsightPage({ params }: PageProps) {
  const { slug } = await params;

  const article = insights.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = insights
    .filter((item) => item.slug !== article.slug)
    .slice(0, 3);
  const Content = await loadInsightContent(article.contentPath);
  const articleJsonLd = buildArticleJsonLd(article);
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Insights", url: "/insights" },
    { name: article.title, url: `/insights/${article.slug}` },
  ]);

  return (
    <main className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <article className="mx-auto max-w-5xl px-5 pb-16 pt-8 sm:px-6 md:px-8 md:pt-12">
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white/80 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-ink)] backdrop-blur transition hover:bg-white"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to insights
        </Link>

        <div className="mt-8 overflow-hidden rounded-[32px] border border-black/[0.06] bg-white p-6 shadow-[0_16px_50px_rgba(7,85,62,0.05)] sm:p-8 md:p-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-green)]">
            {article.category}
          </p>

          <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl md:text-6xl">
            {article.title}
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-7 text-[var(--color-muted)] sm:text-lg">
            {article.excerpt}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-medium text-[var(--color-muted)]">
            <span>By {article.author}</span>

            <span aria-hidden>·</span>

            <time dateTime={article.publishedAt}>
              {new Date(article.publishedAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>

            {article.updatedAt && (
              <>
                <span aria-hidden>·</span>

                <span>
                  Updated{" "}
                  {new Date(article.updatedAt).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </>
            )}
          </div>

          <div className="relative mt-8 overflow-hidden rounded-[28px] border border-black/[0.06] bg-black/[0.02]">
            <Image
              src={article.coverImage}
              alt={article.coverImageAlt}
              width={1600}
              height={900}
              className="block h-auto w-full"
            />
          </div>

          <div className="prose prose-neutral mt-10 max-w-none">
            {Content ? <Content /> : null}
          </div>
        </div>

        <div className="mt-12 rounded-[28px] border border-black/[0.06] bg-[#fafcfb] px-6 py-8 sm:px-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-green)]">
                Continue reading
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
                Related insights
              </h2>
            </div>

            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-green)]"
            >
              View all insights
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {relatedArticles.length > 0 ? (
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {relatedArticles.map((item) => (
                <Link
                  key={item.slug}
                  href={`/insights/${item.slug}`}
                  className="rounded-[20px] border border-black/[0.06] bg-white p-4 transition hover:-translate-y-0.5 hover:border-[var(--color-green)]/20 hover:shadow-[0_10px_28px_rgba(7,85,62,0.06)]"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-green)]">
                    {item.category}
                  </p>
                  <h3 className="mt-2 text-base font-semibold tracking-[-0.02em]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                    {item.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <p className="mt-4 text-sm text-[var(--color-muted)]">
              More insights will be published here as the section grows.
            </p>
          )}
        </div>
      </article>
    </main>
  );
}