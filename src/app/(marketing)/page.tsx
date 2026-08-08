import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site.config";
import { Phone } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  Calendar,
  FileCheck2,
  HeartHandshake,
  Landmark,
  MapPin,
  UserPlus,
} from "lucide-react";
import {
  aboutSummary,
  assistanceSteps,
  contributeSteps,
  documentsChecklist,
  donationDetails,
  events,
  financialYearImpact,
  founderMessage,
  impactStats,
  latestActivity,
  managementTeam,
  membershipInfo,
  objectives,
  projects,
  reports,
  siteStats,
  team,
  testimonials,
  blogPosts,
} from "@/config/content";
import { FacebookUpdates } from "@/components/sections/facebook-updates";
import { AssistanceRequestForm } from "@/components/forms/assistance-request-form";
import { HeroCarousel } from "@/components/hero/hero-carousel";
import { galleryAlbums, getGalleryImages } from "@/lib/local-assets";

export default function HomePage() {
  const galleryPreviewAlbum = galleryAlbums.find((album) => album.published);
  const galleryPreviewImages = galleryPreviewAlbum
    ? getGalleryImages(galleryPreviewAlbum.folderName).slice(0, 6)
    : [];

  return (
    <main className="mx-auto w-full max-w-[1440px] px-1 sm:px-6 lg:px-10 xl:px-14">

      {/* Hero: carousel first so it sits at the top on mobile too */}
      <section className="page-shell grid gap-0 pb-0 md:grid-cols-[1.05fr_.95fr] md:items-center md:gap-8 md:pt-8 lg:gap-12">
        <div className="hero-panel min-w-0 md:h-full">
          <HeroCarousel
            images={galleryPreviewImages.length > 0 ? galleryPreviewImages : undefined}
            altPrefix="SMILE NGO"
          />
        </div>

        {/*
          Desktop fix: the helpline card + heading copy used to be two
          separate grid children, so at md:grid-cols-2 the auto-placement
          algorithm put the helpline card next to the carousel (row 1,
          col 2) and pushed the heading block onto an orphaned row 2,
          col 1 underneath the carousel. Wrapping them keeps the exact
          same DOM order (so mobile stacking is 100% unchanged) while
          giving desktop a single, coherent right-hand column.
        */}
        <div className="min-w-0 md:flex md:h-full md:flex-col md:justify-center">
          <div className="mt-4 rounded-2xl border border-emerald-100 bg-white p-4 shadow-[0_12px_35px_rgba(6,78,59,0.08)] md:mt-0">
            <div className="flex items-center justify-between gap-3">
              <div className="flex min-w-0 items-center gap-0">
                <div className="grid h-11 w-11 flex-none place-items-center rounded-full bg-emerald-50 text-emerald-700">
                  <Phone size={19} />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-700">
                    Need support?
                  </p>
                  <p className="mt-0.5 truncate text-sm font-semibold text-[var(--color-ink)]">
                    Talk to SMILE NGO
                  </p>
                </div>
              </div>

              <a
                href="tel:7002372041"
                className="flex-none rounded-full bg-gradient-to-r from-[#07543D] to-[#159A70] px-4 py-2.5 text-xs font-bold text-white shadow-sm"
              >
                Call Helpline
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-3 md:items-start md:p-0 md:pt-6">
            <div className="mt-3 max-w-xl md:mt-0">
              {/* Editorial kicker */}
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--color-gold)]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--color-gold-dark)]">
                  Together, we can do more
                </span>
              </div>

              {/* Hero heading */}
              <h1 className="text-[clamp(2.7rem,8vw,4.6rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-[var(--color-ink)]">
                When people need
                <br />
                <span className="relative inline-block text-[var(--color-brand)]">
                  help, we show up.

                  <span className="absolute -bottom-1 left-0 h-[3px] w-[42%] rounded-full bg-[var(--color-gold)]/70" />
                </span>
              </h1>

              {/* Supporting copy */}
              <p className="mt-6 max-w-[510px] text-[15px] leading-[1.8] text-[var(--color-muted)] sm:text-base">
                From urgent relief to education and community support, SMILE NGO
                works alongside people facing difficult times — with practical help
                that reaches where it matters most.
              </p>

              {/* Actions */}
              <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/donate"
                  className="premium-shine group inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-full bg-[var(--color-brand-strong)] px-7 text-sm font-bold text-white shadow-[0_12px_30px_rgba(4,63,49,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-brand-deep)] hover:shadow-[0_16px_36px_rgba(4,63,49,0.24)] sm:w-auto"
                >
                  <span>Support the Flood Relief</span>

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>

                <Link
                  href="/projects"
                  className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full px-4 text-sm font-semibold text-[var(--color-brand-strong)] transition-all duration-300 hover:text-[var(--color-gold-dark)] sm:w-auto"
                >
                  <span>Explore our work</span>

                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
              </div>

              {/* Quiet trust indicators */}
              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[var(--color-border)] pt-5">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" />
                  <span className="text-[11px] font-medium text-[var(--color-muted)]">
                    Community-led
                  </span>
                </div>

                <div className="h-3 w-px bg-[var(--color-border-strong)]" />

                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" />
                  <span className="text-[11px] font-medium text-[var(--color-muted)]">
                    Assam-based
                  </span>
                </div>

                <div className="h-3 w-px bg-[var(--color-border-strong)]" />

                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" />
                  <span className="text-[11px] font-medium text-[var(--color-muted)]">
                    Built on trust
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live counters */}
      <section className="page-shell pt-6 md:pt-8">
        <div className="grid grid-cols-2 overflow-hidden rounded-[var(--radius-lg)] border border-black/5 bg-white shadow-soft sm:grid-cols-4">
          {siteStats.map((stat, index) => (
            <div
              key={stat.label}
              className={`min-w-0 px-4 py-5 text-center sm:px-5 ${
                index !== 0 ? "border-l border-black/5" : ""
              }`}
            >
              <strong className="block text-2xl font-bold text-[var(--color-green)] sm:text-3xl">
                {stat.value}
              </strong>
              <span className="mt-1 block text-[11px] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                {stat.label.trim()}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* If you need assistance / If you wish to contribute */}
      <section className="page-shell grid gap-5 md:grid-cols-2">
        <article className="soft-card">
          <p className="eyebrow">Give</p>
          <h2 className="mt-2 text-2xl font-semibold">{contributeSteps.title}</h2>
          <p className="mt-2 text-sm pb-2 leading-6 text-[var(--color-muted)]">{contributeSteps.intro}</p>
          <ol className="step-list">
            {contributeSteps.steps.map((step, index) => (
              <li key={step.title}>
                <span className="step-number">{index + 1}</span>
                <div>
                  <p className="font-semibold">{step.title}</p>
                  <p className="text-sm leading-6 text-[var(--color-muted)]">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <Link href={contributeSteps.ctaHref} className="btn-primary mt-6">
            {contributeSteps.ctaLabel}
          </Link>
        </article>
        <article className="soft-card">
          <p className="eyebrow">Get help</p>
          <h2 className="mt-2 text-2xl font-semibold">{assistanceSteps.title}</h2>
          <p className="mt-2 text-sm pb-2 leading-6 text-[var(--color-muted)]">{assistanceSteps.intro}</p>
          <ol className="step-list">
            {assistanceSteps.steps.map((step, index) => (
              <li key={step.title}>
                <span className="step-number">{index + 1}</span>
                <div>
                  <p className="font-semibold">{step.title}</p>
                  <p className="text-sm leading-6 text-[var(--color-muted)]">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <Link href={assistanceSteps.ctaHref} className="btn-primary mt-6">
            {assistanceSteps.ctaLabel}
          </Link>
        </article>

      </section>

      {/* Latest activity: QR donation + programme card */}
      <section className="page-shell">
        <p className="eyebrow">Live updates</p>
        <h2 className="mt-2 text-3xl font-semibold">Latest Activity</h2>
        <p className="mt-2 text-sm text-[var(--color-muted)]">
          Ongoing programmes, fundraising campaigns and upcoming events at a glance.
        </p>
        <div className="feature-grid grid-cols-1 md:grid-cols-2">
          {latestActivity.map((item) => (
            <article
              key={item.title}
              className="soft-card flex h-full min-w-0 flex-col"
            >
              {item.showQr ? (
                <div className="mb-5 flex w-full items-center justify-center rounded-2xl bg-[#F8FBF9] p-3 ring-1 ring-emerald-900/5">
                  <div className="grid place-items-center overflow-hidden rounded-xl bg-white shadow-sm">
                    <Image
                      src="/upi-qr.jpg"
                      alt="SMILE NGO UPI QR code"
                      width={200}
                      height={128}
                      className="h-full w-full scale-[2] object-contain mt-10 mb-[-140]"
                    />
                  </div>
                </div>
              ) : null}

              <p className="eyebrow">{item.tag}</p>

              <h3 className="mt-2 text-xl font-semibold tracking-tight">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                {item.body}
              </p>

              <div className="mt-auto pt-5">
                <Link
                  href={item.ctaHref}
                  className="btn-primary inline-flex"
                >
                  {item.ctaLabel}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* About SMILE + Founder */}
      <section className="page-shell">
        <div className="grid gap-5 md:grid-cols-[1.08fr_.92fr] md:items-stretch">

          {/* About */}
          <article className="relative overflow-hidden rounded-[var(--radius-lg)] bg-white p-6 shadow-soft ring-1 ring-emerald-900/5 md:p-8">
            {/* subtle decorative glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-emerald-100/50 blur-3xl"
            />

            <div className="relative">
              <p className="eyebrow">About SMILE</p>

              <h2 className="mt-2 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-[var(--color-ink)]">
                Built close to the
                <span className="text-[var(--color-brand)]"> communities we serve.</span>
              </h2>

              <p className="mt-3 text-sm font-semibold text-[var(--color-brand-strong)]">
                {aboutSummary.since}
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--color-muted)]">
                {aboutSummary.body}
              </p>

              {/* small trust points */}
              <div className="mt-5 grid grid-cols-1 gap-2 xs:grid-cols-2 sm:grid-cols-2">
                {[
                  "Community-led",
                  "Assam-based",
                  "People-first",
                  "Transparent",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex min-w-0 items-center gap-2 rounded-xl bg-[#F3F9F6] px-3 py-2.5 text-xs font-medium text-[var(--color-brand-strong)]"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-brand)]" />
                    {item}
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="group mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-brand)] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-brand-strong)] hover:shadow-md"
              >
                Learn more about SMILE
                <ArrowRight
                  size={16}
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </article>

          {/* Founder's desk */}
          <article className="relative overflow-hidden rounded-[var(--radius-lg)] bg-gradient-to-br from-[#07543D] via-[var(--color-brand)] to-[#159A70] p-6 text-white shadow-soft md:p-8">
            {/* decorative circles */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-20 -left-16 h-44 w-44 rounded-full bg-black/10"
            />

            <div className="relative flex h-full flex-col">
              <div className="flex items-center justify-between gap-3">
                <p className="min-w-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F1D080]">
                  Founder&apos;s desk
                </p>

                <div className="flex-none rounded-full bg-white/10 px-3 py-1 text-[10px] font-medium text-white/80">
                  SMILE NGO
                </div>
              </div>

              {/* Founder */}
              <div className="mt-6 flex min-w-0 items-center gap-4">
                <div className="avatar-circle h-16 w-16 shrink-0 border-2 border-white/30 bg-white/15 text-xl text-white">
                  {founderMessage.name.charAt(0)}
                </div>

                <div className="min-w-0">
                  <p className="truncate text-lg font-semibold leading-tight">
                    {founderMessage.name}
                  </p>
                  <p className="mt-1 text-xs text-white/75">
                    {founderMessage.role}
                  </p>
                </div>
              </div>

              {/* Message */}
              <div className="mt-6 rounded-2xl border border-white/10 bg-black/10 p-4">
                <p className="text-sm italic leading-7 text-white/90">
                  “{founderMessage.quote}”
                </p>
              </div>

              <div className="mt-auto pt-5">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-opacity hover:opacity-80"
                >
                  Meet our team
                  <ArrowRight size={15} aria-hidden />
                </Link>
              </div>
            </div>
          </article>

        </div>
      </section>

      {/* Objectives */}
      <section className="page-shell">
        <p className="eyebrow text-center">What we do</p>
        <h2 className="mt-2 text-center text-3xl font-semibold">Our Objectives</h2>
        <div className="content-grid mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {objectives.map((item) => (
            <article className="soft-card min-w-0" key={item.title}>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Latest activities / current projects */}
      <section className="page-shell">
        <div className="flex items-end justify-between gap-4">
          <div className="min-w-0">
            <p className="eyebrow">Programs</p>
            <h2 className="mt-2 text-3xl font-semibold">Latest Activities</h2>
          </div>
          <Link href="/projects" className="hidden flex-none text-link md:inline-flex">
            All projects <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
        <div className="feature-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article className="project-card min-w-0" key={project.slug}>
              <div className="project-art relative overflow-hidden">
                <Image
                  src={project.imageSrc}
                  alt={`${project.title} project`}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
                />
              </div>
              <span className={`status-pill ${project.status === "Ongoing" ? "is-ongoing" : "is-planned"}`}>
                {project.status}
              </span>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <div className="mt-5 h-2 rounded-full bg-black/5">
                <div
                  className="h-2 rounded-full bg-[var(--color-brand)]"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
              <p className="mt-2 text-xs font-semibold text-[var(--color-muted)]">{project.metric}</p>
              <Link href={`/projects/${project.slug}`} className="btn-primary mt-4">
                View Details
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/projects" className="btn-secondary">
            View All Projects
          </Link>
        </div>
      </section>

      {/* Financial year impact */}
      <section className="page-shell">

        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Our journey</p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--color-ink)] sm:text-4xl">
            Financial Year Impact
          </h2>

          <p className="mx-auto mt-3 text-sm leading-6 text-[var(--color-muted)]">
            {financialYearImpact.intro}
          </p>
        </div>

        {/* Year cards */}
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {financialYearImpact.years.map((year) => (
            <article
              key={year.year}
              className="group min-w-0 overflow-hidden rounded-[1.8rem] border border-emerald-900/5 bg-white shadow-[0_12px_35px_rgba(6,78,59,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(6,78,59,0.12)]"
            >

              {/* Year header */}
              <div className="relative overflow-hidden bg-gradient-to-r from-[#063F30] via-[#087653] to-[#229C73] px-5 py-5 text-white">

                <div className="pointer-events-none absolute -right-10 -top-12 h-28 w-28 rounded-full bg-[#F1D080]/15 blur-2xl" />

                <div className="relative flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#F1D080]">
                      Financial Year
                    </p>

                    <h3 className="mt-1 truncate text-xl font-bold tracking-tight">
                      {year.year}
                    </h3>
                  </div>

                  <div className="grid h-11 w-11 flex-none place-items-center rounded-xl border border-white/15 bg-white/10 text-[#F1D080] backdrop-blur">
                    <span className="text-lg font-bold">₹</span>
                  </div>
                </div>
              </div>

              {/* Statistics */}
              <div className="grid gap-2.5 p-4">
                {year.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-[#0B6B4D]/5 bg-[#F7FAF8] px-4 py-3.5 transition group-hover:bg-[#F3F8F5]"
                  >
                    <span className="min-w-0 flex-1 text-sm font-medium text-[var(--color-muted)]">
                      {stat.label}
                    </span>

                    <strong className="flex-none whitespace-nowrap text-base font-bold text-[#087653]">
                      {stat.value}
                    </strong>
                  </div>
                ))}
              </div>

            </article>
          ))}
        </div>

      </section>

      {/* CTA banner */}
      <section className="page-shell">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#063F30] via-[#087653] to-[#229C73] px-6 py-9 text-center text-white shadow-[0_20px_55px_rgba(6,78,59,0.18)] sm:px-10 sm:py-11 md:px-12">

          {/* Decorative glow */}
          <div className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-[#F1D080]/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">

            {/* Small label */}
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F1D080]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F1D080]">
                Be part of the change
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Together, we can make
              <span className="block text-[#F1D080]">
                a real difference.
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/80 sm:text-base">
              Your support helps SMILE reach families, empower communities,
              support children and respond when people need help most.
            </p>

            {/* Actions */}
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                href="/donate"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-gradient-to-r from-[#D9AE55] via-[#F1D080] to-[#C69232] px-7 text-sm font-bold text-[#12382C] shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl sm:w-auto"
              >
                Donate Now
              </Link>

              <Link
                href="/volunteers"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 text-sm font-semibold text-white backdrop-blur transition hover:bg-white hover:text-[#07543D] sm:w-auto"
              >
                Volunteer With Us
              </Link>

            </div>

            {/* Trust line */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] font-medium text-white/65">
              <span>✓ Community-led</span>
              <span>✓ Assam-based</span>
              <span>✓ Transparent giving</span>
            </div>

          </div>
        </div>
      </section>

      {/* Donation methods */}
      <section className="page-shell grid gap-5 md:grid-cols-[.9fr_1.1fr]">
        <article className="admin-card min-w-0">
          <p className="eyebrow">Donation methods</p>
          <h2 className="mt-2 text-3xl font-semibold">No payment gateways. Clear bank rails.</h2>
          <div className="mt-5 grid gap-3 text-sm text-[var(--color-muted)]">
            <p><strong className="text-[var(--color-ink)]">UPI:</strong> {donationDetails.upiId}</p>
            <p><strong className="text-[var(--color-ink)]">Bank:</strong> {donationDetails.bank}</p>
            <p><strong className="text-[var(--color-ink)]">Verification:</strong> upload screenshot, admin approves or rejects.</p>
          </div>
        </article>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { icon: HeartHandshake, title: "Program-led", body: "Every appeal links to active community work." },
            { icon: Landmark, title: "Auditable", body: "Reports, ledgers and policies remain visible." },
            { icon: BadgeCheck, title: "Verified", body: "Public totals show approved donations only." },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="soft-card min-w-0">
                <Icon className="text-[var(--color-brand)]" aria-hidden />
                <h3 className="mt-4 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{item.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Testimonials */}
      <section className="page-shell">
        <p className="eyebrow text-center">What people say</p>
        <h2 className="mt-2 text-center text-3xl font-semibold">Members' Testimonials</h2>
        <div className="feature-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article className="testimonial-card min-w-0" key={item.name}>
              <span className="quote-mark">"</span>
              <p className="mt-2 text-sm italic leading-6 text-[var(--color-muted)]">{item.quote}</p>
              <div className="mt-4 flex min-w-0 items-center gap-3">
                <span className="avatar-circle !mx-0 !h-10 !w-10 flex-none !text-sm">{item.name.charAt(0)}</span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold">{item.name}</p>
                  <p className="truncate text-xs text-[var(--color-muted)]">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Join our organization / membership */}
      <section className="page-shell grid gap-6 md:grid-cols-[1.05fr_.95fr] md:items-center">

        {/* Left — Membership information */}
        <div className="min-w-0">
          <p className="eyebrow">{membershipInfo.eyebrow}</p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--color-ink)] sm:text-4xl">
            {membershipInfo.title}
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--color-muted)]">
            {membershipInfo.body}
          </p>

          <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {membershipInfo.tiers.map((tier) => (
              <li
                key={tier}
                className="flex min-w-0 items-center gap-2 text-sm font-semibold text-[var(--color-ink)]"
              >
                <span className="grid h-6 w-6 flex-none place-items-center rounded-full bg-[#E8F5EF]">
                  <BadgeCheck
                    size={15}
                    className="text-[#087653]"
                    aria-hidden
                  />
                </span>

                <span className="min-w-0">{tier}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — Premium membership CTA */}
        <article className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#063F30] via-[#087653] to-[#229C73] p-7 text-center text-white shadow-[0_18px_50px_rgba(6,78,59,0.18)] sm:p-8">

          {/* Decorative glow */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#F1D080]/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-16 h-44 w-44 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">

            {/* Icon */}
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-white/15 bg-white/10 shadow-inner backdrop-blur">
              <UserPlus
                size={27}
                strokeWidth={1.8}
                aria-hidden
              />
            </div>

            {/* Eyebrow */}
            <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#F1D080]">
              Be part of SMILE
            </p>

            <h3 className="mt-2 text-2xl font-bold tracking-tight">
              Membership Registration
            </h3>

            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-white/80">
              Fill out our registration form to become a member, volunteer,
              or advisor and help create meaningful change across Assam.
            </p>

            {/* CTA */}
            <Link
              href={membershipInfo.ctaHref}
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-gradient-to-r from-[#D9AE55] via-[#F1D080] to-[#C69232] px-7 text-sm font-bold text-[#12382C] shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              {membershipInfo.ctaLabel}
            </Link>

          </div>
        </article>

      </section>

      {/* Management team */}
      <section className="page-shell">
        <div className="text-center">
          <p className="eyebrow">Our people</p>

          <h2 className="mt-2 text-3xl font-semibold tracking-tight">
            The people behind SMILE
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[var(--color-muted)]">
            A committed team working alongside communities, volunteers and partners
            to turn local needs into meaningful action.
          </p>
        </div>

        <div className="content-grid mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {managementTeam.map((member) => (
            <article
              key={member.name}
              className="group relative min-w-0 overflow-hidden rounded-[var(--radius-lg)] bg-white p-5 text-center shadow-soft ring-1 ring-emerald-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(6,78,59,0.10)]"
            >
              {/* subtle top accent */}
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-brand-strong)] opacity-80"
              />

              {/* Member avatar */}
              <div className="mx-auto mt-2 grid h-20 w-20 place-items-center rounded-full bg-[#EAF5F1] text-2xl font-semibold text-[var(--color-brand-strong)] ring-4 ring-[#F5FAF8] transition-transform duration-300 group-hover:scale-105">
                {member.name.charAt(0)}
              </div>

              <div className="mt-4 min-w-0">
                <p className="truncate font-semibold text-[var(--color-ink)]">
                  {member.name}
                </p>

                <p className="mt-1 truncate text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-brand-strong)]">
                  {member.role}
                </p>
              </div>

              {/* Small visual separator */}
              <div className="mx-auto mt-4 h-px w-10 bg-emerald-100 transition-all duration-300 group-hover:w-16" />
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/team"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-brand)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-brand-strong)] hover:shadow-md"
          >
            Meet the full team

            <ArrowRight
              size={16}
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>

      {/* News & updates */}
      <section className="page-shell">
        <p className="eyebrow text-center">Stay updated</p>
        <h2 className="mt-2 text-center text-3xl font-semibold">News & Updates</h2>
        <div className="feature-grid grid-cols-1 md:grid-cols-2">
          {blogPosts.filter((post) => post.published).map((post) => (
            <article className="project-card min-w-0" key={post.slug}>
              <div className="project-art relative overflow-hidden bg-[#fff2e0]">
                <Image
                  src={post.coverImage}
                  alt={`${post.title} cover`}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(min-width: 768px) 40vw, 92vw"
                />
              </div>
              <p className="eyebrow">{new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" })}</p>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <Link className="text-link" href={`/blog/${post.slug}`}>
                Read More <ArrowRight size={16} aria-hidden />
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/blog" className="btn-primary">
            View All News
          </Link>
        </div>
      </section>

      {/* Upcoming events */}
      <section className="page-shell">
        <p className="eyebrow text-center">Mark your calendar</p>
        <h2 className="mt-2 text-center text-3xl font-semibold">Upcoming Events</h2>
        <div className="feature-grid grid-cols-1 md:grid-cols-2">
          {events.filter((event) => event.published).map((event) => (
            <article className="soft-card flex min-w-0 gap-4" key={event.slug}>
              <div className="date-badge flex-none">
                <strong>{new Date(event.date).getDate()}</strong>
                <span>{new Date(event.date).toLocaleDateString("en-IN", { month: "short" })}</span>
                <span>{new Date(event.date).getFullYear()}</span>
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold">{event.title}</h3>
                <p className="mt-1 flex flex-wrap items-center gap-1 text-xs text-[var(--color-muted)]">
                  <Calendar size={14} aria-hidden /> {event.time} <MapPin size={14} aria-hidden className="ml-2" /> {event.location}
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{event.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/events" className="btn-primary">
            View All Events
          </Link>
        </div>
      </section>

      {/* Documents checklist */}
      <section className="page-shell grid gap-5 md:grid-cols-[1.1fr_.9fr]">
        <div className="min-w-0">
          <p className="eyebrow">Documents & compliance</p>
          <h2 className="mt-2 text-3xl font-semibold">Documents Checklist for Societies & NGOs</h2>
          <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
            What paperwork you need for every important registration and filing — and expert help to prepare or
            obtain any of them.
          </p>
          <div className="mt-5 grid gap-2">
            {documentsChecklist.map((item) => (
              <div className="checklist-item min-w-0" key={item}>
                <span className="flex min-w-0 items-center gap-2">
                  <FileCheck2 size={16} className="flex-none text-[var(--color-brand)]" aria-hidden /> <span className="min-w-0">{item}</span>
                </span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-[var(--color-muted)]">
            Checklists are indicative — requirements vary by state and change over time. Our team confirms the
            exact current requirements for your case.
          </p>
        </div>
        <AssistanceRequestForm />
      </section>

      <FacebookUpdates />

      <section className="page-shell grid gap-5 md:grid-cols-2">
        <article className="soft-card min-w-0">
          <p className="eyebrow">People</p>
          <h2 className="mt-2 text-2xl font-semibold">Field team and volunteers</h2>
          <div className="mt-4 grid gap-3">
            {team.map((member) => (
              <p key={member.name} className="rounded-2xl bg-[#fff7ec] p-3 text-sm">
                <strong>{member.name}</strong> · {member.role}
              </p>
            ))}
          </div>
        </article>
        <article className="soft-card min-w-0">
          <p className="eyebrow">Documents</p>
          <h2 className="mt-2 text-2xl font-semibold">Ready for donor review</h2>
          <div className="mt-4 grid gap-3">
            {reports.map((report) => (
              <p key={report.title} className="rounded-2xl bg-[#f4fbf6] p-3 text-sm">
                <strong>{report.title}</strong> · {report.meta}
              </p>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}