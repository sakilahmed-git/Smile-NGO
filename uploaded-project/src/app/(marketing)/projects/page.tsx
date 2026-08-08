import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { projects } from "@/config/content";

export default function ProjectsPage() {
  return (
    <main className="page-shell">
      <section className="section-hero">
        <p className="eyebrow">Projects</p>
        <h1>Our Projects</h1>
        <p>
          Programs with measurable progress and human context — ready for CMS-driven storytelling,
          galleries, field metrics and donation allocation.
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
            <span className={`status-pill ${project.status === "Ongoing" ? "is-ongoing" : "is-planned"}`}>
              {project.status}
            </span>
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
            <p className="mt-2 text-xs font-semibold text-[var(--color-muted)]">{project.metric}</p>
            <Link href={`/projects/${project.slug}`} className="btn-primary mt-5">
              View Details
            </Link>
          </article>
        ))}
      </section>

      <section className="mt-10">
        <div className="banner-cta">
          <h2 className="text-2xl font-semibold md:text-3xl">Support a Project You Care About</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-white/90">
            Your contribution directly funds our on-ground work.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 md:flex-row">
            <Link href="/donate" className="btn-primary bg-white !text-[var(--color-brand-strong)] hover:bg-white/90">
              Donate Now
            </Link>
            <Link href="/volunteers" className="btn-secondary !border-white/40 !bg-transparent !text-white">
              Volunteer With Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
