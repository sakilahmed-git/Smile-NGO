"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Users,
  MapPin,
  CalendarCheck,
  HeartHandshake,
  Radio,
  ArrowRight,
} from "lucide-react";
import { team } from "@/config/content";
const VOLUNTEER_COUNT = 12;

export default function VolunteersPage() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 850;
    const start = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.round(eased * VOLUNTEER_COUNT));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <main className="page-shell">
      {/* Live volunteer count */}
      <div className="mb-5 flex items-center justify-between rounded-[var(--radius-lg)] bg-white px-4 py-3 shadow-soft">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--color-brand)] text-white">
            <Users size={19} aria-hidden />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <strong className="text-lg leading-none text-[var(--color-ink)]">
                {count.toLocaleString("en-IN")}
              </strong>

              <span className="text-sm font-medium text-[var(--color-muted)]">
                volunteers
              </span>
            </div>

            <p className="mt-1 text-[11px] text-[var(--color-muted)]">
              Already part of the SMILE community
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-[var(--color-brand)]">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--color-brand)]" />
          <Radio size={14} aria-hidden />
          <span className="text-[10px] font-bold uppercase tracking-wider">
            Live
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="rounded-[var(--radius-lg)] bg-white p-8 shadow-soft">
        <p className="eyebrow">Join Community</p>

        <h1 className="mt-2 text-4xl font-semibold">
          Volunteer with SMILE NGO
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--color-muted)]">
          Our community volunteers support education, health and relief work.
          Apply today to help with field events, awareness campaigns and
          program delivery.
        </p>

        <Link href="/volunteers/apply" className="btn-primary mt-6">
          Apply to join
        </Link>
      </section>
      {/* SMILE team */}
{/* SMILE team */}
<section className="mt-8">
  <div className="mb-5">
    <p className="eyebrow">Meet the people</p>

    <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">
          The team you&apos;ll work with
        </h2>

        <p className="mt-1 max-w-xl text-sm leading-6 text-[var(--color-muted)]">
          Our volunteers work alongside SMILE&apos;s leadership and field
          team to support community programs.
        </p>
      </div>

      <Link
        href="/team"
        className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-brand)] transition-colors hover:text-[var(--color-brand-strong)]"
      >
        Meet the full team
        <ArrowRight
          size={15}
          aria-hidden
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    </div>
  </div>

  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
    {team.map((member, index) => {
      const isLeadership = index < 2;

      return (
        <article
          key={member.name}
          className={`group relative overflow-hidden rounded-2xl transition-all duration-300 ${
            isLeadership
              ? "border border-[#D6B45A]/35 bg-gradient-to-br from-[#fffdf5] via-white to-[#F8F1D8] px-5 py-4 shadow-[0_10px_30px_rgba(138,106,24,0.10)] hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(138,106,24,0.16)]"
              : "bg-white px-4 py-3.5 shadow-[0_6px_20px_rgba(6,78,59,0.05)] ring-1 ring-emerald-900/5 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(6,78,59,0.09)]"
          }`}
        >
          {/* Golden shine — leadership only */}
          {isLeadership && (
            <>
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/70 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
              />

              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#D6B45A] to-transparent"
              />

              <div
                aria-hidden
                className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#D6B45A]/15 blur-2xl"
              />
            </>
          )}

          <div className="relative flex items-center gap-3">
            {/* Avatar */}
            <div
              className={`grid shrink-0 place-items-center rounded-full font-bold ${
                isLeadership
                  ? "h-14 w-14 bg-gradient-to-br from-[#F8E9B5] via-[#D6B45A] to-[#A8842D] text-base text-[#5F4810] shadow-[0_4px_14px_rgba(138,106,24,0.20)] ring-2 ring-[#FFF8DE]"
                  : "h-11 w-11 bg-[#E8F5F0] text-sm text-[var(--color-brand-strong)] ring-2 ring-[#F5FAF8]"
              }`}
            >
              {member.name.charAt(0)}
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3
                  className={`truncate font-semibold ${
                    isLeadership
                      ? "text-[15px] text-[#4C3B12]"
                      : "text-sm text-[var(--color-ink)]"
                  }`}
                >
                  {member.name}
                </h3>

                {isLeadership && (
                  <span className="shrink-0 rounded-full bg-[#F4E7B8] px-2 py-0.5 text-[8px] font-bold uppercase tracking-[0.12em] text-[#80621B]">
                    Leadership
                  </span>
                )}
              </div>

              <p
                className={`mt-0.5 truncate font-medium ${
                  isLeadership
                    ? "text-[11px] text-[#96752A]"
                    : "text-[11px] text-[var(--color-brand-strong)]"
                }`}
              >
                {member.role}
              </p>
            </div>
          </div>
        </article>
      );
    })}
  </div>
</section>

      {/* Volunteer roles */}
      <section className="mt-8 grid gap-5 md:grid-cols-3">
        {[
          {
            icon: Users,
            title: "Community-led",
            body: "Volunteers work with local field teams and community leaders.",
          },
          {
            icon: CalendarCheck,
            title: "Flexible roles",
            body: "Support event logistics, outreach, teaching and documentation.",
          },
          {
            icon: MapPin,
            title: "Local impact",
            body: "Programs are designed for nearby communities and urgent relief needs.",
          },
        ].map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="rounded-[var(--radius-lg)] bg-white p-6 shadow-soft"
            >
              <Icon
                className="text-[var(--color-brand)]"
                size={24}
                aria-hidden
              />

              <h2 className="mt-4 text-xl font-semibold">
                {item.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                {item.body}
              </p>
            </article>
          );
        })}
      </section>

      {/* Benefits */}
      <section className="mt-8 rounded-[var(--radius-lg)] bg-white p-8 shadow-soft">
        <div className="flex items-center gap-3 text-[var(--color-brand)]">
          <HeartHandshake size={20} aria-hidden />

          <p className="text-sm font-semibold uppercase tracking-[0.2em]">
            Volunteer benefits
          </p>
        </div>

        <div className="mt-6 grid gap-4 text-sm leading-7 text-[var(--color-muted)]">
          <p>
            Volunteers receive orientation, community certificates and
            priority access to ongoing field programs. SMILE NGO supports safe
            volunteering with documented roles and program supervision.
          </p>

          <p>
            Interested volunteers can fill the application form, share their
            availability and choose the areas where they can help most.
          </p>
        </div>
      </section>
    </main>
  );
}