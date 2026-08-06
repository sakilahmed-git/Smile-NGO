import Link from "next/link";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Zap } from "lucide-react";
import { ArrowRight, BadgeCheck, HeartHandshake, Landmark, ShieldCheck } from "lucide-react";
import { donationDetails, impactStats, projects, reports, team } from "@/config/content";
import { FacebookUpdates } from "@/components/sections/facebook-updates";

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

      <section className="page-shell">
        <div className="content-grid">
          {impactStats.map((stat) => (
            <article className="metric-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Programs</p>
            <h2 className="mt-2 text-3xl font-semibold">Current focus areas</h2>
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
              <p className="eyebrow">{project.category}</p>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <div className="mt-5 h-2 rounded-full bg-black/5">
                <div
                  className="h-2 rounded-full bg-[var(--color-brand)]"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
              <p className="mt-2 text-xs font-semibold text-[var(--color-muted)]">{project.metric}</p>
            </article>
          ))}
        </div>
      </section>

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
