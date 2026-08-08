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
  ShieldCheck,
  Sparkles,
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
    <main className="min-h-screen overflow-hidden bg-[#F5F5F1] text-[#10231D]">
      {/* =========================================================
          LIVE VOLUNTEER BAR
      ========================================================= */}
      <section className="border-b border-[#10231D]/[0.08] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8F3EE] text-[#0B4F3A]">
              <Users size={18} aria-hidden />
            </div>

            <div>
              <div className="flex items-baseline gap-1.5">
                <strong className="text-xl font-bold leading-none tracking-[-0.03em] text-[#10231D]">
                  {count.toLocaleString("en-IN")}
                </strong>

                <span className="text-xs font-semibold text-[#66736D]">
                  volunteers
                </span>
              </div>

              <p className="mt-1 text-[10px] font-medium text-[#8A9590]">
                Already part of the SMILE community
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-[#147A55]/15 bg-[#EDF8F2] px-3 py-1.5 text-[#0B4F3A]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#147A55]" />
            <Radio size={12} aria-hidden />
            <span className="text-[9px] font-bold uppercase tracking-[0.16em]">
              Live
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative mx-auto max-w-7xl px-5 pt-5 sm:px-8 md:pt-12 lg:px-10">
        <div className="relative overflow-hidden rounded-[32px] bg-[#0B3D2E] px-6 py-6 shadow-[0_24px_70px_rgba(16,35,29,0.14)] sm:px-10 md:px-16 md:py-20">
          {/* Decorative glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#C9A24D]/[0.13] blur-3xl"
          />

          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#35A879]/[0.10] blur-3xl"
          />

          <div className="relative max-w-3xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-3.5 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D6B45A]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#E7EEE9]">
                Join the community
              </span>
            </div>

            <h1 className="text-4xl font-semibold leading-[1.02] tracking-[-0.055em] text-white sm:text-5xl md:text-7xl">
              Your time can
              <br />
              <span className="text-[#D8B65A]">change a life.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#C8D8D1] md:text-base">
              Support education, health, relief and community programs
              while working alongside people who are building meaningful
              change on the ground.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
  href="/volunteers/apply"
  className="group relative isolate inline-flex items-center justify-center gap-2 rounded-full bg-[#D8B65A] px-7 py-3.5 text-sm font-bold text-[#10231D] shadow-[0_6px_20px_rgba(216,182,90,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E4C66E]"
>
  {/* Continuous premium glow */}
  <span
    aria-hidden
    className="absolute -inset-2 -z-10 rounded-full bg-[#D8B65A]/45 blur-xl animate-pulse"
  />

  <span className="relative z-10">
    Apply to join
  </span>

  <ArrowRight
    size={16}
    aria-hidden
    className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
  />
</Link>

              
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TEAM
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-5 py-7 sm:px-8 md:py-16 lg:px-10">
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#176B4D]">
              Your community
            </p>

            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-[#10231D] md:text-3xl">
              The team you&apos;ll work with
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-[#6D7D76]">
              Our volunteers work alongside SMILE&apos;s leadership and
              field team to support community programs.
            </p>
          </div>

          <Link
            href="/team"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#147A55] transition-colors hover:text-[#0B4F3A]"
          >
            Meet the full team

            <ArrowRight
              size={15}
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => {
            const isLeadership = index < 2;

            return (
              <article
                key={member.name}
                className={`group relative overflow-hidden rounded-[22px] transition-all duration-300 ${
                  isLeadership
                    ? "border border-[#C9A24D]/35 bg-[#FFFDF7] px-5 py-4 shadow-[0_10px_35px_rgba(91,70,20,0.07)] hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(91,70,20,0.12)]"
                    : "border border-[#10231D]/[0.07] bg-white px-5 py-4 shadow-[0_6px_25px_rgba(16,35,29,0.035)] hover:-translate-y-1 hover:border-[#147A55]/20 hover:shadow-[0_16px_35px_rgba(16,35,29,0.08)]"
                }`}
              >
                {isLeadership && (
                  <>
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent"
                    />

                    <div
                      aria-hidden
                      className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#C9A24D]/10 blur-2xl"
                    />
                  </>
                )}

                <div className="relative flex items-center gap-3">
                  <div
                    className={`grid shrink-0 place-items-center rounded-full font-bold ${
                      isLeadership
                        ? "h-14 w-14 bg-gradient-to-br from-[#F7E9BA] via-[#D8B65A] to-[#A9822D] text-base text-[#59440F] shadow-[0_6px_18px_rgba(150,115,35,0.18)] ring-2 ring-[#FFF8E5]"
                        : "h-11 w-11 bg-[#E8F3EE] text-sm text-[#0B4F3A] ring-2 ring-white"
                    }`}
                  >
                    {member.name.charAt(0)}
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3
                        className={`truncate font-semibold ${
                          isLeadership
                            ? "text-[15px] text-[#403512]"
                            : "text-sm text-[#10231D]"
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
                          : "text-[11px] text-[#43836B]"
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

      {/* =========================================================
          VOLUNTEER ROLES
      ========================================================= */}
      <section className="border-y border-[#10231D]/[0.07] bg-[#ECEFEA]">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 md:py-16 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#147A55]">
              How you can help
            </p>

            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-[#10231D] md:text-3xl">
              Find a role that fits you.
            </h2>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {[
              {
                icon: Users,
                title: "Community-led",
                body: "Work with local field teams and community leaders to understand and respond to real needs.",
              },
              {
                icon: CalendarCheck,
                title: "Flexible roles",
                body: "Support event logistics, outreach, teaching, documentation and awareness campaigns.",
              },
              {
                icon: MapPin,
                title: "Local impact",
                body: "Contribute to programs designed around nearby communities and urgent relief needs.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-[22px] border border-[#10231D]/[0.07] bg-white p-7 shadow-[0_6px_25px_rgba(16,35,29,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#147A55]/20 hover:shadow-[0_18px_40px_rgba(16,35,29,0.08)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#E8F3EE] text-[#0B4F3A] transition-all duration-300 group-hover:bg-[#0B4F3A] group-hover:text-white">
                    <Icon size={21} aria-hidden />
                  </div>

                  <h2 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-[#10231D]">
                    {item.title}
                  </h2>

                  <p className="mt-2.5 text-sm leading-6 text-[#6D7D76]">
                    {item.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          BENEFITS
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 md:py-16 lg:px-10">
        <div className="relative overflow-hidden rounded-[30px] border border-[#C9A24D]/25 bg-[#FBF5E6] p-7 shadow-[0_12px_45px_rgba(91,70,20,0.06)] md:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#C9A24D]/10 blur-3xl"
          />

          <div className="relative">
            <div className="flex items-center gap-3 text-[#80621B]">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8D79F] text-[#735717]">
                <HeartHandshake size={18} aria-hidden />
              </div>

              <p className="text-[10px] font-bold uppercase tracking-[0.18em]">
                Volunteer benefits
              </p>
            </div>

            <div className="mt-7 grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[#3D3218] md:text-3xl">
                  More than volunteering.
                  <br />
                  It&apos;s shared responsibility.
                </h2>
              </div>

              <div className="space-y-4 text-sm leading-7 text-[#716546]">
                <p>
                  Volunteers receive orientation, community certificates
                  and priority access to ongoing field programs.
                </p>

                <p>
                  SMILE NGO supports safe volunteering with documented
                  roles, program supervision and clear expectations.
                </p>

                <p>
                  Share your availability and choose the areas where you
                  can contribute most.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-[#80621B]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 text-xs font-medium text-[#756B4E]">
                <ShieldCheck
                  size={16}
                  aria-hidden
                  className="text-[#80621B]"
                />
                Structured and supervised volunteering
              </div>

              <Link
                href="/volunteers/apply"
                className="group inline-flex items-center gap-2 text-sm font-bold text-[#147A55]"
              >
                Start your application

                <ArrowRight
                  size={15}
                  aria-hidden
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-5 pb-12 sm:px-8 md:pb-20 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-7 rounded-[30px] bg-[#102F25] p-8 shadow-[0_20px_55px_rgba(16,47,37,0.14)] md:flex-row md:items-center md:p-10">
          <div>
            <div className="flex items-center gap-2 text-[#D8B65A]">
              <Sparkles size={15} aria-hidden />

              <span className="text-[9px] font-bold uppercase tracking-[0.18em]">
                Ready to help?
              </span>
            </div>

            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl">
              Start making an impact today.
            </h2>

            <p className="mt-2 text-sm text-[#B9CCC4]">
              Tell us where you can contribute and we&apos;ll take it
              from there.
            </p>
          </div>

          <Link
            href="/volunteers/apply"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[#D8B65A] px-7 py-3.5 text-sm font-bold text-[#10231D] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E4C66E] hover:shadow-[0_12px_30px_rgba(216,182,90,0.2)]"
          >
            Apply to join

            <ArrowRight
              size={16}
              aria-hidden
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}