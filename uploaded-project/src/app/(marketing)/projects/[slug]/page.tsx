import { notFound } from "next/navigation";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { projects, impactStats } from "@/config/content";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main className="page-shell">
      <section className="grid gap-6 md:grid-cols-[1fr_.9fr] md:items-center">
        <div>
          <p className="eyebrow">{project.category}</p>
          <h1 className="hero-title">{project.title}</h1>
          <p className="hero-copy mx-0">{project.summary}</p>
          <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-[var(--color-muted)]">
            <MapPin size={17} aria-hidden /> {project.location}
          </p>
        </div>
        <div className="hero-panel">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem]">
            <Image
              src={project.imageSrc}
              alt={`${project.title} field work`}
              fill
              className="object-cover"
              priority
              sizes="(min-width: 768px) 40vw, 92vw"
            />
          </div>
        </div>
      </section>
      <section className="mt-8 content-grid">
        {impactStats.map((stat) => (
          <article className="metric-card" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </section>
      <section className="mt-8 grid gap-5 md:grid-cols-3">
        {["Need", "Action", "Proof"].map((title) => (
          <article className="soft-card" key={title}>
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
              CMS-managed storytelling can add beneficiary context, field notes, photo galleries,
              budget allocation and related reports for this program.
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
