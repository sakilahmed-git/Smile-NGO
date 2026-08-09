import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  HeartHandshake,
  Landmark,
  ShieldCheck,
} from "lucide-react";

import {
  galleryItems,
  impactStats,
  objectives,
  projects,
  registrationDetails,
  reports,
  team,
} from "@/config/content";

const pageCopy: Record<
  string,
  {
    eyebrow: string;
    title: string;
    body: string;
    ctaLabel: string;
    ctaHref: string;
  }
> = {
  about: {
    eyebrow: "ABOUT SMILE",
    title: "Built close to the communities we serve.",
    body: "SMILE works alongside local communities, volunteers and partners to respond to real needs with practical, transparent and people-centred programmes.",
    ctaLabel: "Support Our Work",
    ctaHref: "/donate",
  },

  impact: {
    eyebrow: "OUR IMPACT",
    title: "Real support. Real communities. Real outcomes.",
    body: "We focus on practical support for people who need it most, while keeping our programmes measurable, transparent and connected to the communities we serve.",
    ctaLabel: "See Our Projects",
    ctaHref: "/projects",
  },

  transparency: {
    eyebrow: "TRANSPARENCY",
    title: "Every contribution should be easy to understand.",
    body: "We believe people who support our work deserve clarity. Our programmes, donation records and reports are organised to make our work easier to follow.",
    ctaLabel: "View Our Reports",
    ctaHref: "/reports",
  },

  gallery: {
    eyebrow: "OUR GALLERY",
    title: "Moments that show the work.",
    body: "Explore moments from our programmes, community initiatives, volunteers and the people we work alongside across Assam.",
    ctaLabel: "Explore Gallery",
    ctaHref: "/gallery",
  },

  team: {
    eyebrow: "OUR PEOPLE",
    title: "People behind the work.",
    body: "SMILE is supported by a growing team of founders, coordinators, volunteers and community members working together to create meaningful change.",
    ctaLabel: "Join Our Team",
    ctaHref: "/volunteers",
  },

  volunteers: {
    eyebrow: "VOLUNTEER WITH US",
    title: "Your time can become someone's support.",
    body: "Join community programmes, field activities and initiatives where your skills, time and energy can make a practical difference.",
    ctaLabel: "Become a Volunteer",
    ctaHref: "/volunteers",
  },

  reports: {
    eyebrow: "REPORTS & DOCUMENTS",
    title: "Clarity builds trust.",
    body: "Explore reports, policies and organisational information that help donors, volunteers and community members understand our work.",
    ctaLabel: "View Reports",
    ctaHref: "/reports",
  },

  faq: {
    eyebrow: "FAQ",
    title: "Clear answers before you get involved.",
    body: "Find straightforward information about donations, volunteering, programmes, verification and how SMILE works with communities.",
    ctaLabel: "Contact SMILE",
    ctaHref: "/contact",
  },

  contact: {
    eyebrow: "CONTACT SMILE",
    title: "Reach the people behind the work.",
    body: "Have a question, want to collaborate, or need information about one of our programmes? Get in touch with the SMILE team.",
    ctaLabel: "Contact Us",
    ctaHref: "/contact",
  },
};

export function SectionPage({
  id,
}: {
  id: keyof typeof pageCopy;
}) {
  const copy = pageCopy[id] ?? pageCopy.about;

  return (
    <main className="pb-3">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="page-shell pt-6">
        <div
          className="
            relative
            overflow-hidden
            rounded-[2rem]
            bg-gradient-to-br
            from-[#07543D]
            via-[#0D7655]
            to-[#159A70]
            px-6
            py-6
            text-white
            shadow-[0_20px_60px_rgba(6,78,59,0.18)]
            md:px-8
            md:py-11
            md:px-12
            md:py-14
          "
        >
          {/* Decorative glow */}
          <div
            aria-hidden
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-64
              w-64
              rounded-full
              bg-white/10
              blur-3xl
            "
          />

          <div
            aria-hidden
            className="
              pointer-events-none
              absolute
              -bottom-28
              -left-20
              h-56
              w-56
              rounded-full
              bg-emerald-300/10
              blur-3xl
            "
          />

          <div className="relative max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F1D080]" />
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#F1D080]">
                {copy.eyebrow}
              </p>
            </div>

            <h1
              className="
                mt-4
                max-w-3xl
                text-3xl
                font-bold
                leading-[1.08]
                tracking-[-0.025em]
                md:text-4xl
                md:text-5xl
              "
            >
              {copy.title}
            </h1>

            <p
              className="
                mt-5
                max-w-2xl
                text-sm
                leading-7
                text-white/85
                md:text-base
                md:leading-8
              "
            >
              {copy.body}
            </p>

            <div className="mt-7 flex flex-col gap-3 md:flex-row">
              <Link
                href={copy.ctaHref}
                className="
                  group
                  inline-flex
                  h-12
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  px-6
                  text-sm
                  font-bold
                  text-[#07543D]
                  shadow-[0_10px_30px_rgba(0,0,0,0.12)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#F8FCFA]
                  hover:shadow-[0_14px_35px_rgba(0,0,0,0.16)]
                  active:scale-[0.98]
                "
              >
                {copy.ctaLabel}
                <ArrowRight
                  size={17}
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              {id !== "contact" && (
                <Link
                  href="/contact"
                  className="
                    inline-flex
                    h-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/30
                    bg-white/10
                    px-6
                    text-sm
                    font-semibold
                    text-white
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:bg-white/15
                    active:scale-[0.98]
                  "
                >
                  Talk to SMILE
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {id === "about" && (
        <section className="page-shell mt-8 md:mt-12">
          <div className="grid gap-5 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="rounded-[1.75rem] border border-emerald-900/8 bg-white p-6 shadow-[0_12px_40px_rgba(6,78,59,0.07)] md:p-7">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-[#E8F7F1] text-[#087A59]">
                  <Landmark size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#087A59]">
                    Official registration
                  </p>
                  <h2 className="mt-1 text-xl font-bold tracking-tight text-[#0B211A]">
                    Registered NGO details
                  </h2>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  ["Organization Type", registrationDetails.organizationType],
                  ["Registration No.", registrationDetails.registrationNo],
                  ["Registered On", registrationDetails.registeredOn],
                  ["Jurisdiction", registrationDetails.jurisdiction],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl bg-[#F8FBF9] px-4 py-3 ring-1 ring-emerald-900/5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                      {label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[#0B211A]">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] bg-[#EAF6F1] p-6 md:p-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#087A59]">
                Our objectives
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0B211A] md:text-3xl">
                Rooted in education, health, relief and community service
              </h2>

              <div className="mt-5 space-y-3">
                {objectives.map((item) => (
                  <div key={item.title} className="rounded-2xl bg-white/80 p-4 shadow-sm">
                    <h3 className="font-semibold text-[#0B211A]">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-[var(--color-muted)]">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =========================================================
          TEAM MEMBERS (right after hero, full list, team page only)
      ========================================================= */}
      {id === "team" && team.length > 0 && (
        <section className="page-shell mt-0 md:mt-14">

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <article
                key={member.name}
                className="
                  rounded-[1.5rem]
                  bg-white
                  p-5
                  shadow-[0_10px_30px_rgba(6,78,59,0.06)]
                "
              >
                <div className="grid h-14 w-14 place-items-center rounded-full bg-[#E8F7F1] text-lg font-bold text-[#087A59]">
                  {member.name.charAt(0)}
                </div>

                <h3 className="mt-4 font-bold text-[#0B211A]">
                  {member.name}
                </h3>

                {"role" in member && member.role ? (
                  <p className="mt-1 text-xs text-[#087A59]">
                    {member.role}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      )}

      {/* =========================================================
          TRUST STRIP
      ========================================================= */}
      

      {/* =========================================================
          IMPACT
      ========================================================= */}
      <section className="page-shell mt-0">
        <div className="mb-5">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087A59]">
            At a glance
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0B211A] md:text-3xl">
            The work in numbers.
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--color-muted)]">
            A simple snapshot of the people, programmes and support connected
            to SMILE.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-[1.75rem] bg-white shadow-[0_12px_40px_rgba(6,78,59,0.07)] md:grid-cols-2 lg:grid-cols-4">
          {impactStats.slice(0, 4).map((stat, index) => (
            <article
              key={stat.label}
              className={`
                p-5
                md:p-6
                ${index % 2 !== 0 ? "md:border-l" : ""}
                ${index > 1 ? "border-t" : ""}
                lg:border-t-0
                ${index > 0 ? "lg:border-l" : ""}
                border-black/5
              `}
            >
              <strong className="block text-2xl font-bold tracking-tight text-[#087A59] md:text-3xl">
                {stat.value}
              </strong>

              <span className="mt-1 block text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-muted)]">
                {stat.label}
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* =========================================================
          WHY SMILE
      ========================================================= */}
      <section className="page-shell mt-10 md:mt-14">
        <div className="grid gap-5 md:grid-cols-[.9fr_1.1fr] md:items-stretch">
          <div className="rounded-[1.75rem] bg-[#EAF6F1] p-7 md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087A59]">
              Why SMILE exists
            </p>

            <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-[#0B211A] md:text-3xl">
              Support that reaches people where it matters.
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#48645B]">
              We believe meaningful change starts by understanding what
              communities actually need and working alongside them to address
              it.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <article className="rounded-[1.5rem] bg-white p-6 shadow-[0_10px_30px_rgba(6,78,59,0.06)]">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-[#E8F7F1] text-[#087A59]">
                <HeartHandshake size={19} />
              </div>

              <h3 className="mt-4 font-bold text-[#0B211A]">
                People first
              </h3>

              <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                Programmes are shaped around real needs rather than generic
                promises.
              </p>
            </article>

            <article className="rounded-[1.5rem] bg-white p-6 shadow-[0_10px_30px_rgba(6,78,59,0.06)]">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-[#E8F7F1] text-[#087A59]">
                <ShieldCheck size={19} />
              </div>

              <h3 className="mt-4 font-bold text-[#0B211A]">
                Built on trust
              </h3>

              <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                We aim to keep our work understandable, documented and
                accountable.
              </p>
            </article>

            <article className="rounded-[1.5rem] bg-white p-6 shadow-[0_10px_30px_rgba(6,78,59,0.06)] md:col-span-2">
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#E8F7F1] text-[#087A59]">
                  <BadgeCheck size={19} />
                </div>

                <div>
                  <h3 className="font-bold text-[#0B211A]">
                    Practical action over empty promises
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                    From community support and emergency response to student
                    recognition and local initiatives, we focus on work that
                    can be seen and felt on the ground.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROJECTS
      ========================================================= */}
      {projects.length > 0 && (
        <section className="page-shell mt-12 md:mt-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087A59]">
                Our work
              </p>

              <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0B211A] md:text-3xl">
                Where your support goes.
              </h2>
            </div>

            <Link
              href="/projects"
              className="hidden items-center text-sm font-bold text-[#087A59] md:flex"
            >
              View all
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 6).map((project) => (
              <article
                key={project.slug}
                className="
                  group
                  overflow-hidden
                  rounded-[1.6rem]
                  bg-white
                  shadow-[0_10px_35px_rgba(6,78,59,0.07)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_18px_45px_rgba(6,78,59,0.12)]
                "
              >
                <Link href={`/projects/${project.slug}`} className="block">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.imageSrc}
                      alt={`${project.title} project`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 92vw"
                    />

                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/35 to-transparent" />
                  </div>

                  <div className="p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#087A59]">
                      {project.category}
                    </p>

                    <h3 className="mt-2 text-lg font-bold leading-snug text-[#0B211A]">
                      {project.title}
                    </h3>

                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-[var(--color-muted)]">
                      {project.summary}
                    </p>

                    <span className="mt-4 inline-flex items-center text-sm font-bold text-[#087A59]">
                      View story
                      <ArrowRight
                        size={16}
                        className="ml-1 transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <Link
            href="/projects"
            className="
              mt-5
              flex
              h-12
              items-center
              justify-center
              rounded-full
              border
              border-[#087A59]/15
              bg-white
              text-sm
              font-bold
              text-[#087A59]
              md:hidden
            "
          >
            View all projects
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </section>
      )}

      {/* =========================================================
          DYNAMIC CONTENT
      ========================================================= */}
      {id === "gallery" && galleryItems.length > 0 && (
        <section className="page-shell mt-12">
          <div className="rounded-[1.75rem] bg-[#F3F8F5] p-6 md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087A59]">
              Recent moments
            </p>

            <h2 className="mt-2 text-2xl font-bold text-[#0B211A]">
              Our work in action.
            </h2>

            <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
              See how SMILE&apos;s programmes come together across communities.
            </p>

            <Link
              href="/gallery"
              className="
                mt-5
                inline-flex
                h-11
                items-center
                rounded-full
                bg-[#087A59]
                px-5
                text-sm
                font-bold
                text-white
                transition
                hover:bg-[#07543D]
              "
            >
              Explore the gallery
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </section>
      )}

      {id === "reports" && reports.length > 0 && (
        <section className="page-shell mt-12">
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087A59]">
              Documents
            </p>

            <h2 className="mt-2 text-2xl font-bold text-[#0B211A] md:text-3xl">
              Reports & resources.
            </h2>
          </div>

          <div className="grid gap-3">
            {reports.slice(0, 6).map((report) => (
              <div
                key={report.title}
                className="
                  flex
                  items-center
                  justify-between
                  gap-4
                  rounded-[1.25rem]
                  bg-white
                  p-5
                  shadow-[0_8px_25px_rgba(6,78,59,0.05)]
                "
              >
                <div className="min-w-0">
                  <h3 className="font-semibold text-[#0B211A]">
                    {report.title}
                  </h3>
                </div>

                {"href" in report && report.href ? (
                  <Link
                    href={report.href}
                    className="shrink-0 text-sm font-bold text-[#087A59]"
                  >
                    View
                  </Link>
                ) : null}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="page-shell mt-12 md:mt-16">
        <div
          className="
            relative
            overflow-hidden
            rounded-[2rem]
            bg-gradient-to-br
            from-[#07543D]
            via-[#0D7655]
            to-[#159A70]
            px-6
            py-9
            text-center
            text-white
            shadow-[0_20px_55px_rgba(6,78,59,0.18)]
            md:px-10
            md:py-11
          "
        >
          <div
            aria-hidden
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-48
              w-48
              rounded-full
              bg-white/10
              blur-3xl
            "
          />

          <div className="relative mx-auto max-w-2xl">
            <div className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-white/12">
              <HeartHandshake size={21} />
            </div>

            <p className="mt-4 text-xs font-bold uppercase tracking-[0.22em] text-[#F1D080]">
              Be part of the change
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
              Good work becomes stronger when more people take part.
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/80">
              Support a programme, volunteer your time, or simply help someone
              discover the work SMILE is doing across Assam.
            </p>

            <div className="mt-6 flex flex-col justify-center gap-3 md:flex-row">
              <Link
                href="/donate"
                className="
                  inline-flex
                  h-12
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  px-7
                  text-sm
                  font-bold
                  text-[#07543D]
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#F8FCFA]
                  active:scale-[0.98]
                "
              >
                Donate Now
                <ArrowRight size={16} className="ml-2" />
              </Link>

              <Link
                href="/volunteers"
                className="
                  inline-flex
                  h-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/30
                  bg-white/10
                  px-7
                  text-sm
                  font-bold
                  text-white
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:bg-white/15
                  active:scale-[0.98]
                "
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