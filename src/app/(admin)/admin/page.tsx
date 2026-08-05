import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3, FileText, Users } from "lucide-react";
import { impactStats, projects, reports } from "@/config/content";

const queue = [
  { donor: "Ananya S.", amount: "₹5,000", status: "Pending" },
  { donor: "Rohit K.", amount: "₹2,100", status: "Pending" },
  { donor: "Community group", amount: "₹18,000", status: "Approved" },
];

export default function DashboardPage() {
  return (
    <main className="page-shell">
      <section className="grid gap-5 md:grid-cols-[1.1fr_.9fr]">
        <div>
          <p className="eyebrow">Dashboard</p>
          <h1 className="hero-title">Operational control for content and donation trust.</h1>
          <p className="hero-copy mx-0">
            The CMS surface is structured around verification, public transparency, program updates
            and role-aware publishing.
          </p>
        </div>
        <article className="admin-card">
          <p className="text-sm font-semibold text-[var(--color-muted)]">Today</p>
          <p className="mt-2 text-4xl font-semibold">12 actions</p>
          <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
            Donation approvals, message responses, report publishing and gallery moderation.
          </p>
        </article>
      </section>
      <section className="mt-8 content-grid">
        {impactStats.map((stat) => (
          <article className="metric-card" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </section>
      <section className="mt-8 grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
        <article className="admin-card">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="eyebrow">Donation queue</p>
              <h2 className="mt-2 text-2xl font-semibold">Verification</h2>
            </div>
            <Link href="/admin/donations" className="text-link">
              Review <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
          <div className="mt-5 grid gap-3">
            {queue.map((item) => (
              <div key={`${item.donor}-${item.amount}`} className="flex items-center justify-between rounded-2xl bg-[#fff7ec] p-4">
                <div>
                  <p className="font-semibold">{item.donor}</p>
                  <p className="text-sm text-[var(--color-muted)]">{item.amount}</p>
                </div>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold">{item.status}</span>
              </div>
            ))}
          </div>
        </article>
        <div className="grid gap-4">
          {[
            { icon: FileText, label: "CMS collections", value: "18 editable areas" },
            { icon: Users, label: "Roles", value: "Admin, editor, verifier" },
            { icon: Clock3, label: "Revalidation", value: "On-demand API ready" },
            { icon: CheckCircle2, label: "Public counter", value: "Approved only" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <article className="soft-card" key={item.label}>
                <Icon className="text-[var(--color-brand)]" aria-hidden />
                <p className="mt-3 text-sm font-semibold text-[var(--color-muted)]">{item.label}</p>
                <p className="mt-1 text-xl font-semibold">{item.value}</p>
              </article>
            );
          })}
        </div>
      </section>
      <section className="mt-8 grid gap-5 md:grid-cols-2">
        <article className="soft-card">
          <p className="eyebrow">Projects</p>
          {projects.map((project) => (
            <p key={project.slug} className="mt-3 rounded-2xl bg-[#f4fbf6] p-3 text-sm">
              <strong>{project.title}</strong> · {project.progress}% progress
            </p>
          ))}
        </article>
        <article className="soft-card">
          <p className="eyebrow">Reports</p>
          {reports.map((report) => (
            <p key={report.title} className="mt-3 rounded-2xl bg-[#fff7ec] p-3 text-sm">
              <strong>{report.title}</strong> · {report.meta}
            </p>
          ))}
        </article>
      </section>
    </main>
  );
}
