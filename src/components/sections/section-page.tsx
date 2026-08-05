import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { galleryItems, impactStats, projects, reports, team } from "@/config/content";

const pageCopy: Record<string, { eyebrow: string; title: string; body: string }> = {
  about: {
    eyebrow: "About SMILE",
    title: "Built close to the communities we serve.",
    body: "SMILE works through verified field teams, local volunteers and transparent reporting so every program can be trusted and improved.",
  },
  impact: {
    eyebrow: "Impact",
    title: "Measured outcomes, not vague promises.",
    body: "Public impact numbers are tied to approved field records, donation verification and program reports.",
  },
  transparency: {
    eyebrow: "Transparency",
    title: "Every rupee should be easy to follow.",
    body: "Donation approvals, annual reports, policies and program ledgers are designed for public review.",
  },
  gallery: {
    eyebrow: "Gallery",
    title: "Field moments from classrooms, camps and community work.",
    body: "A responsive gallery and touch-friendly lightbox can be connected to the CMS media collection.",
  },
  team: {
    eyebrow: "Team",
    title: "A small team with accountable roles.",
    body: "Founders, staff, workers and volunteers are managed from the CMS with role-based access.",
  },
  volunteers: {
    eyebrow: "Volunteer",
    title: "Structured, safe and useful ways to help.",
    body: "Volunteers are onboarded with safeguarding, field documentation and program-specific responsibilities.",
  },
  reports: {
    eyebrow: "Reports",
    title: "Policies, audit trails and impact reports.",
    body: "Reports are prepared for donors, families, auditors and community members who need clarity.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Clear answers before someone gives time or money.",
    body: "Donation, volunteering, verification and program questions are editable from admin settings.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Reach the field office directly.",
    body: "Messages can be routed to the CMS inbox and newsletter collection without exposing private keys.",
  },
};

export function SectionPage({ id }: { id: keyof typeof pageCopy }) {
  const copy = pageCopy[id] ?? pageCopy.about;
  return (
    <main className="page-shell">
      <section className="section-hero">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1>{copy.title}</h1>
        <p>{copy.body}</p>
      </section>
      <section className="content-grid">
        {impactStats.map((stat) => (
          <article key={stat.label} className="metric-card">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
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
            <Link href={`/projects/${project.slug}`} className="text-link">
              View story <ArrowRight size={16} aria-hidden />
            </Link>
          </article>
        ))}
      </section>
      <section className="content-grid">
        {[...galleryItems, ...team.map((member) => member.name), ...reports.map((report) => report.title)]
          .slice(0, 6)
          .map((item) => (
            <article key={item} className="soft-card">
              {item}
            </article>
          ))}
      </section>
    </main>
  );
}
