import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { projects } from "@/config/content";

export default function ProjectsPage() {
  return (
    <main className="page-shell">
      <section className="section-hero">
        <p className="eyebrow">Projects</p>
        <h1>Programs with measurable progress and human context.</h1>
        <p>
          Each project page is ready for CMS-driven storytelling, galleries, field metrics,
          donation allocation and related updates.
        </p>
      </section>
      <section className="feature-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.slug}>
            <div className="project-art relative overflow-hidden">
              <Image
                src={project.imageSrc}
                alt={`${project.title} project`}
                fill
                className="object-cover"
                loading="lazy"
                sizes="(min-width: 768px) 30vw, 92vw"
              />
            </div>
            <p className="eyebrow">{project.category}</p>
            <h2>{project.title}</h2>
            <p>{project.summary}</p>
            <p className="mt-4 flex items-center gap-2 text-sm font-medium text-[var(--color-muted)]">
              <MapPin size={16} aria-hidden /> {project.location}
            </p>
            <div className="mt-5 h-2 rounded-full bg-black/5">
              <div
                className="h-2 rounded-full bg-[var(--color-brand)]"
                style={{ width: `${project.progress}%` }}
              />
            </div>
            <Link href={`/projects/${project.slug}`} className="text-link">
              Read project story <ArrowRight size={16} aria-hidden />
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
