import Link from "next/link";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Zap } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  Calendar,
  FileCheck2,
  HeartHandshake,
  Landmark,
  MapPin,
  ShieldCheck,
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

export default function HomePage() {
  return (
    <main>
      <section className="announcement-bar">
        <div
          style={{
            background: "#12214d",
            color: "#fff",
            height: 48,
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "#f4a51c",
              color: "#111",
              padding: "0 20px",
              height: "100%",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontWeight: 700,
              flexShrink: 0,
              fontSize: "14px",
            }}
          >
            <Zap size={16} strokeWidth={2.5} />
            <span>LATEST</span>
          </div>

          <Marquee speed={50} pauseOnHover gradient={false}>
            ► Our community programmes are underway &nbsp;&nbsp;&nbsp;
            ► Welcome to our new website &nbsp;&nbsp;&nbsp;
            ► Assam Flood Relief Campaign is now accepting donations
            &nbsp;&nbsp;&nbsp;
            ► Volunteer registrations are open
          </Marquee>
        </div>
      </section>

      <section className="page-shell grid gap-8 pb-4 md:grid-cols-[1.05fr_.95fr] md:items-center md:pt-16">
        <div>
          <p className="eyebrow">Verified impact. Human stories.</p>
          <h1 className="hero-title">A warmer way to fund education, health and dignity.</h1>
          <p className="hero-copy mx-0">
            SMILE NGO connects donors, volunteers and field teams through transparent programs,
            verified donation records and mobile-first community reporting.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/donate" className="btn-primary">
              Donate by UPI
            </Link>
            <Link href="/projects" className="btn-secondary">
              Explore projects
            </Link>
          </div>
        </div>
        <div className="hero-panel">
          <div className="relative min-h-[430px] overflow-hidden rounded-[1.35rem]">
            <Image
              src="/hero/community-care.svg"
              alt="Community care program illustration"
              fill
              className="object-cover"
              priority
              sizes="(min-width: 768px) 45vw, 92vw"
            />
            <div className="relative z-10 grid min-h-[430px] content-between p-5">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white/80 px-3 py-2 text-xs font-semibold">Live transparency</span>
                <ShieldCheck className="text-[var(--color-green)]" aria-hidden />
              </div>
              <div className="rounded-3xl bg-white/85 p-5 shadow-soft backdrop-blur">
                <p className="text-sm font-semibold text-[var(--color-muted)]">Approved donation counter</p>
                <p className="mt-2 text-4xl font-semibold">₹38.6L</p>
                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                  Only admin-approved bank and UPI submissions are counted publicly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live counters */}
      <section className="page-shell">
        <div className="stat-strip">
          {siteStats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* If you need assistance / If you wish to contribute */}
      <section className="page-shell grid gap-5 md:grid-cols-2">
        <article className="soft-card">
          <p className="eyebrow">Get help</p>
          <h2 className="mt-2 text-2xl font-semibold">{assistanceSteps.title}</h2>
          <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{assistanceSteps.intro}</p>
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
        <article className="soft-card">
          <p className="eyebrow">Give</p>
          <h2 className="mt-2 text-2xl font-semibold">{contributeSteps.title}</h2>
          <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{contributeSteps.intro}</p>
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
      </section>

      {/* Latest activity: QR donation + programme card */}
      <section className="page-shell">
        <p className="eyebrow">Live updates</p>
        <h2 className="mt-2 text-3xl font-semibold">Latest Activity</h2>
        <p className="mt-2 text-sm text-[var(--color-muted)]">
          Ongoing programmes, fundraising campaigns and upcoming events at a glance.
        </p>
        <div className="feature-grid md:grid-cols-2">
          {latestActivity.map((item) => (
            <article className="soft-card" key={item.title}>
              {item.showQr ? (
                <div className="mb-4 grid h-40 w-40 place-items-center rounded-2xl bg-white ring-1 ring-black/5">
                  <Image
                    src="/qr/donation-qr.svg"
                    alt="SMILE NGO UPI QR code"
                    width={140}
                    height={140}
                    className="h-full w-full object-contain p-2"
                  />
                </div>
              ) : null}
              <p className="eyebrow">{item.tag}</p>
              <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{item.body}</p>
              <Link href={item.ctaHref} className="btn-primary mt-5">
                {item.ctaLabel}
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* About + founder's desk */}
      <section className="page-shell grid gap-5 md:grid-cols-[1.1fr_.9fr] md:items-center">
        <div>
          <p className="eyebrow">About us</p>
          <h2 className="mt-2 text-3xl font-semibold">About SMILE NGO</h2>
          <p className="mt-2 text-sm font-semibold text-[var(--color-brand-strong)]">{aboutSummary.since}</p>
          <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{aboutSummary.body}</p>
          <Link href="/about" className="text-link">
            Read more <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
        <article className="rounded-[var(--radius-lg)] bg-gradient-to-br from-[var(--color-brand)] to-[var(--color-brand-strong)] p-6 text-white shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">Founder's desk</p>
          <div className="avatar-circle mt-4 bg-white/20">
            {founderMessage.name.charAt(0)}
          </div>
          <p className="mt-4 text-center text-lg font-semibold">{founderMessage.name}</p>
          <p className="text-center text-sm text-white/80">{founderMessage.role}</p>
          <p className="mt-4 text-center text-sm italic leading-6 text-white/90">"{founderMessage.quote}"</p>
        </article>
      </section>

      {/* Objectives */}
      <section className="page-shell">
        <p className="eyebrow text-center">What we do</p>
        <h2 className="mt-2 text-center text-3xl font-semibold">Our Objectives</h2>
        <div className="content-grid mt-8">
          {objectives.map((item) => (
            <article className="soft-card" key={item.title}>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Latest activities / current projects */}
      <section className="page-shell">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Programs</p>
            <h2 className="mt-2 text-3xl font-semibold">Latest Activities</h2>
          </div>
          <Link href="/projects" className="hidden text-link md:inline-flex">
            All projects <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
        <div className="feature-grid">
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
        <p className="eyebrow text-center">Our journey</p>
        <h2 className="mt-2 text-center text-3xl font-semibold">Financial Year Impact</h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-[var(--color-muted)]">
          {financialYearImpact.intro}
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {financialYearImpact.years.map((year) => (
            <div key={year.year} className="overflow-hidden rounded-[var(--radius-lg)] shadow-soft">
              <div className="bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-brand-strong)] px-5 py-3 text-sm font-bold text-white">
                {year.year}
              </div>
              <div className="grid gap-3 bg-white p-4">
                {year.stats.map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between rounded-2xl bg-[#fff7ec] px-4 py-3">
                    <span className="text-sm font-medium text-[var(--color-muted)]">{stat.label}</span>
                    <strong className="text-lg text-[var(--color-brand-strong)]">{stat.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="page-shell">
        <div className="banner-cta">
          <h2 className="text-3xl font-semibold">Ready to Make a Difference?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/90">
            Join us in our mission to create positive change. Every contribution matters.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/donate" className="btn-primary bg-white !text-[var(--color-brand-strong)] hover:bg-white/90">
              Donate Now
            </Link>
            <Link href="/volunteers" className="btn-secondary !border-white/40 !bg-transparent !text-white">
              Volunteer With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Donation methods */}
      <section className="page-shell grid gap-5 md:grid-cols-[.9fr_1.1fr]">
        <article className="admin-card">
          <p className="eyebrow">Donation methods</p>
          <h2 className="mt-2 text-3xl font-semibold">No payment gateways. Clear bank rails.</h2>
          <div className="mt-5 grid gap-3 text-sm text-[var(--color-muted)]">
            <p><strong className="text-[var(--color-ink)]">UPI:</strong> {donationDetails.upiId}</p>
            <p><strong className="text-[var(--color-ink)]">Bank:</strong> {donationDetails.bank}</p>
            <p><strong className="text-[var(--color-ink)]">Verification:</strong> upload screenshot, admin approves or rejects.</p>
          </div>
        </article>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: HeartHandshake, title: "Program-led", body: "Every appeal links to active community work." },
            { icon: Landmark, title: "Auditable", body: "Reports, ledgers and policies remain visible." },
            { icon: BadgeCheck, title: "Verified", body: "Public totals show approved donations only." },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="soft-card">
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
        <div className="feature-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.name}>
              <span className="quote-mark">"</span>
              <p className="mt-2 text-sm italic leading-6 text-[var(--color-muted)]">{item.quote}</p>
              <div className="mt-4 flex items-center gap-3">
                <span className="avatar-circle !mx-0 !h-10 !w-10 !text-sm">{item.name.charAt(0)}</span>
                <div>
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-xs text-[var(--color-muted)]">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Join our organization / membership */}
      <section className="page-shell grid gap-5 md:grid-cols-[1.1fr_.9fr] md:items-center">
        <div>
          <p className="eyebrow">{membershipInfo.eyebrow}</p>
          <h2 className="mt-2 text-3xl font-semibold">{membershipInfo.title}</h2>
          <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{membershipInfo.body}</p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {membershipInfo.tiers.map((tier) => (
              <li key={tier} className="flex items-center gap-2 text-sm font-medium">
                <BadgeCheck size={16} className="text-[var(--color-green)]" aria-hidden /> {tier}
              </li>
            ))}
          </ul>
        </div>
        <article className="rounded-[var(--radius-lg)] bg-gradient-to-br from-[var(--color-ink)] to-black p-6 text-center text-white shadow-soft">
          <UserPlus className="mx-auto" size={40} aria-hidden />
          <h3 className="mt-3 text-lg font-semibold">Membership Registration</h3>
          <p className="mt-2 text-sm text-white/80">
            Fill out our registration form to become a member, volunteer, or advisor.
          </p>
          <Link href={membershipInfo.ctaHref} className="btn-primary mt-5 !bg-white !text-[var(--color-ink)] hover:!bg-white/90">
            {membershipInfo.ctaLabel}
          </Link>
        </article>
      </section>

      {/* Management team */}
      <section className="page-shell">
        <p className="eyebrow text-center">Our people</p>
        <h2 className="mt-2 text-center text-3xl font-semibold">Management Team</h2>
        <div className="content-grid mt-8">
          {managementTeam.map((member) => (
            <article className="soft-card text-center" key={member.name}>
              <div className="avatar-circle">{member.name.charAt(0)}</div>
              <p className="mt-3 font-semibold">{member.name}</p>
              <p className="text-xs font-semibold text-[var(--color-brand-strong)]">{member.role}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/team" className="btn-primary">
            View All
          </Link>
        </div>
      </section>

      {/* News & updates */}
      <section className="page-shell">
        <p className="eyebrow text-center">Stay updated</p>
        <h2 className="mt-2 text-center text-3xl font-semibold">News & Updates</h2>
        <div className="feature-grid md:grid-cols-2">
          {blogPosts.filter((post) => post.published).map((post) => (
            <article className="project-card" key={post.slug}>
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
        <div className="feature-grid md:grid-cols-2">
          {events.filter((event) => event.published).map((event) => (
            <article className="soft-card flex gap-4" key={event.slug}>
              <div className="date-badge">
                <strong>{new Date(event.date).getDate()}</strong>
                <span>{new Date(event.date).toLocaleDateString("en-IN", { month: "short" })}</span>
                <span>{new Date(event.date).getFullYear()}</span>
              </div>
              <div>
                <h3 className="font-semibold">{event.title}</h3>
                <p className="mt-1 flex items-center gap-1 text-xs text-[var(--color-muted)]">
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
        <div>
          <p className="eyebrow">Documents & compliance</p>
          <h2 className="mt-2 text-3xl font-semibold">Documents Checklist for Societies & NGOs</h2>
          <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
            What paperwork you need for every important registration and filing — and expert help to prepare or
            obtain any of them.
          </p>
          <div className="mt-5 grid gap-2">
            {documentsChecklist.map((item) => (
              <div className="checklist-item" key={item}>
                <span className="flex items-center gap-2">
                  <FileCheck2 size={16} className="text-[var(--color-brand)]" aria-hidden /> {item}
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
        <article className="soft-card">
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
        <article className="soft-card">
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
