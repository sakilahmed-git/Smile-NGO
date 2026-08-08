import Link from "next/link";
import { Users, MapPin, CalendarCheck, HeartHandshake } from "lucide-react";

export default function VolunteersPage() {
  return (
    <main className="page-shell">
      <section className="rounded-[var(--radius-lg)] bg-white p-8 shadow-soft">
        <p className="eyebrow">Join Community</p>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-4xl font-semibold">Volunteer with SMILE NGO</h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--color-muted)]">
              Our community volunteers support education, health and relief work. Apply today to help with field events, awareness campaigns and program delivery.
            </p>
          </div>
          <Link href="/volunteers/apply" className="btn-primary self-start">
            Apply to join
          </Link>
        </div>
      </section>

      <section className="mt-8 grid gap-5 md:grid-cols-3">
        {[
          { icon: Users, title: "Community-led", body: "Volunteers work with local field teams and community leaders." },
          { icon: CalendarCheck, title: "Flexible roles", body: "Support event logistics, outreach, teaching and documentation." },
          { icon: MapPin, title: "Local impact", body: "Programs are designed for nearby communities and urgent relief needs." },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <article key={item.title} className="rounded-[var(--radius-lg)] bg-white p-6 shadow-soft">
              <Icon className="text-[var(--color-brand)]" size={24} aria-hidden />
              <h2 className="mt-4 text-xl font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">{item.body}</p>
            </article>
          );
        })}
      </section>

      <section className="mt-8 rounded-[var(--radius-lg)] bg-white p-8 shadow-soft">
        <div className="flex items-center gap-3 text-[var(--color-brand)]">
          <HeartHandshake size={20} aria-hidden />
          <p className="text-sm font-semibold uppercase tracking-[0.2em]">Volunteer benefits</p>
        </div>
        <div className="mt-6 grid gap-4 text-sm leading-7 text-[var(--color-muted)]">
          <p>
            Volunteers receive orientation, community certificates and priority access to ongoing field programs. SMILE NGO supports safe volunteering with documented roles and program supervision.
          </p>
          <p>
            Interested volunteers can fill the application form, share their availability and choose the areas where they can help most.
          </p>
        </div>
      </section>
    </main>
  );
}
