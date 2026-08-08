import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  MapPin,
  HeartHandshake,
  Radio,
} from "lucide-react";
import { projects } from "@/config/content";

function statusPillClass(status: string) {
  if (status === "Planned") return "status-pill is-planned";
  return "status-pill is-ongoing";
}

export default function ProjectsPage() {
  const ongoingProjects = projects.filter(
    (project) => project.status === "Ongoing"
  );

  return (
    <main className="page-shell">

      {/* Introduction */}
      <section>
        <p className="eyebrow">Our Work</p>

        <h1 className="mt-2 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">
  Helping where it matters most.
</h1>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--color-muted)]">
          From supporting families in need to standing with communities during
          difficult times, SMILE NGO turns community support into action.
        </p>
      </section>

      {/* Project overview */}
      {/* Project overview */}
<section className="mt-6 grid grid-cols-3 gap-3">

  {/* Total */}
  <div className="rounded-[var(--radius-lg)] border border-emerald-900/5 bg-white p-4 shadow-[0_8px_25px_rgba(6,78,59,0.05)]">
    <p className="text-2xl font-semibold leading-none">
      {projects.length}
    </p>

    <p className="mt-1 text-[11px] font-medium text-[var(--color-muted)]">
      Total projects
    </p>
  </div>

  {/* Completed */}
  <div className="rounded-[var(--radius-lg)] border border-emerald-900/5 bg-white p-4 shadow-[0_8px_25px_rgba(6,78,59,0.05)]">
    <p className="text-2xl font-semibold leading-none">
      {projects.filter((project) => project.status === "Completed").length}
    </p>

    <p className="mt-1 text-[11px] font-medium text-[var(--color-muted)]">
      Completed
    </p>
  </div>

  {/* Ongoing */}
  <div className="rounded-[var(--radius-lg)] border border-emerald-900/5 bg-white p-4 shadow-[0_8px_25px_rgba(6,78,59,0.05)]">
    <div className="flex items-center gap-2">
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-brand)]/50" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--color-brand)]" />
      </span>

      <p className="text-2xl font-semibold leading-none">
        {ongoingProjects.length}
      </p>
    </div>

    <p className="mt-1 text-[11px] font-medium text-[var(--color-muted)]">
      Ongoing
    </p>
  </div>

</section>

      {/* Live campaign */}
      {ongoingProjects.length > 0 && (
        <section className="mt-4 overflow-hidden rounded-[var(--radius-lg)] bg-gradient-to-br from-[#07543D] via-[#087A5A] to-[#159A70] text-white shadow-[0_14px_40px_rgba(6,78,59,0.15)]">

          <div className="p-5 md:p-6">

            <div className="flex items-start gap-3">

              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/15">
                <Radio size={19} aria-hidden />
              </div>

              <div className="min-w-0 flex-1">

                <div className="flex flex-wrap items-center gap-2">
                  <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#F1D080]">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                    </span>
                    Live now
                  </span>

                  <span className="h-1 w-1 rounded-full bg-white/40" />

                  <span className="text-[10px] font-medium uppercase tracking-wider text-white/70">
                    Assam
                  </span>
                </div>

                <h2 className="mt-2 text-xl font-semibold leading-tight md:text-2xl">
                  Assam Flood Relief Campaign
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-white/80">
                  Standing with families affected by the floods and helping
                  communities through this difficult time.
                </p>

                <Link
                  href="/donate"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[var(--color-brand-strong)] transition hover:bg-white/90"
                >
                  Help the campaign
                  <ArrowRight size={15} aria-hidden />
                </Link>

              </div>
            </div>

          </div>
        </section>
      )}

      {/* Projects */}
      <section className="mt-8">

        <div className="mb-5">
          <div>
  <p className="eyebrow">What we do</p>
  <h2 className="mt-1 text-3xl font-semibold tracking-tight">
    Turning support into action.
  </h2>
</div>

<Link href="/projects" className="text-link">
  View all projects →
</Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">

          {projects.map((project, index) => (
            <article
              key={project.slug}
              className={`overflow-hidden rounded-[var(--radius-lg)] bg-white shadow-soft ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >

              {/* Project image */}
              <div
                className={`relative overflow-hidden ${
                  index === 0
                    ? "aspect-[16/10] md:aspect-[16/6]"
                    : "aspect-[16/10]"
                }`}
              >
                <Image
                  src={project.imageSrc}
                  alt={`${project.title} project`}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                  loading={index === 0 ? "eager" : "lazy"}
                  priority={index === 0}
                  sizes={
                    index === 0
                      ? "(min-width: 768px) 90vw, 100vw"
                      : "(min-width: 768px) 45vw, 100vw"
                  }
                />

                {/* Status */}
                <div className="absolute left-4 top-4">
                  <span className={statusPillClass(project.status)}>
                    {project.status === "Ongoing" && (
                      <span className="mr-1.5 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-current" />
                    )}

                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project content */}
              <div
                className={
                  index === 0
                    ? "p-6 md:p-7"
                    : "p-5"
                }
              >

                {/* Category + location */}
                <div className="flex flex-wrap items-center gap-2">

                  <span className="eyebrow !mb-0 !text-[#087A5A]">
  {project.category}
</span>

                  <span className="text-xs text-[var(--color-muted)]">
                    •
                  </span>

                  <span className="flex items-center gap-1 text-xs font-medium text-[var(--color-muted)]">
                    <MapPin size={13} aria-hidden />
                    {project.location}
                  </span>

                </div>

                {/* Title */}
                <h2
                  className={`mt-2 font-semibold ${
                    index === 0
                      ? "text-2xl md:text-3xl"
                      : "text-xl"
                  }`}
                >
                  {project.title}
                </h2>

                {/* Summary */}
                <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--color-muted)]">
                  {project.summary}
                </p>

                {/* Progress */}
                <div className="mt-5">

                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-[var(--color-muted)]">
                      Progress
                    </span>

                    <span className="text-[#A87525]">
  {project.progress}%
</span>
                  </div>

                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-black/5">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#07543D] to-[#159A70] transition-all duration-700"
                      style={{
                        width: `${project.progress}%`,
                      }}
                    />
                  </div>

                  <p className="mt-2 text-xs font-medium text-[var(--color-muted)]">
                    {project.metric}
                  </p>

                </div>

                {/* Action */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="btn-primary mt-5 inline-flex items-center gap-2"
                >
                  Explore this project
                  <ArrowRight size={16} aria-hidden />
                </Link>

              </div>
            </article>
          ))}

        </div>
      </section>

      {/* CTA */}
<section className="mt-10">
  <div className="relative overflow-hidden rounded-[var(--radius-lg)] bg-gradient-to-br from-[#07543D] via-[#087A5A] to-[#159A70] p-7 text-white shadow-[0_16px_45px_rgba(6,78,59,0.16)] md:p-9">

    {/* Subtle decorative glow */}
    <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#F1D080]/10 blur-3xl" />
    <div className="pointer-events-none absolute -bottom-24 -left-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

    <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between">

      {/* Content */}
      <div className="max-w-2xl">

        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/10 bg-white/10">
            <HeartHandshake size={21} aria-hidden />
          </div>

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F1D080]">
            Make an Impact
          </p>
        </div>

        <h2 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">
          Real change starts with people who care.
        </h2>

        <p className="mt-3 max-w-xl text-sm leading-6 text-white/80">
          Your support helps turn community needs into meaningful action,
          reaching people who need it most across Assam.
        </p>

      </div>

      {/* Actions */}
      <div className="relative flex w-full flex-col gap-3 sm:w-auto sm:flex-row md:flex-col lg:flex-row">

        <Link
          href="/donate"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-[#07543D] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#FCF8ED]"
        >
          Donate Now
          <ArrowRight size={16} aria-hidden />
        </Link>

        <Link
          href="/volunteers"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/15"
        >
          Volunteer With Us
        </Link>

      </div>

    </div>
  </div>
</section>

    </main>
  );
}