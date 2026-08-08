import Link from "next/link";
import { Share2 } from "lucide-react";
import { events } from "@/config/content";

export default function EventsPage() {
  return (
    <main className="page-shell">
      <section className="section-hero">
        <p className="eyebrow">Events</p>
        <h1>Events</h1>
        <p>Upcoming camps, field visits, meetings and volunteer days.</p>
      </section>

      <p className="eyebrow">🔥 Upcoming Events</p>
      <div className="feature-grid md:grid-cols-2">
        {events.filter((event) => event.published).map((event) => (
          <article className="project-card" key={event.slug}>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--color-brand)] to-[var(--color-brand-strong)] p-6 text-center text-white">
              <span className="text-4xl font-bold leading-none">{new Date(event.date).getDate()}</span>
              <p className="mt-1 text-sm font-semibold">
                {new Date(event.date).toLocaleDateString("en-IN", { month: "short", year: "numeric" })}
              </p>
            </div>
            <span className="status-pill is-upcoming mt-4">{event.status}</span>
            <h2>{event.title}</h2>
            <p className="text-sm font-semibold text-[var(--color-muted)]">
              {new Date(event.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}, {event.time}
            </p>
            <p className="text-sm font-semibold text-[var(--color-muted)]">📍 {event.location}</p>
            <p>{event.excerpt}</p>
            <div className="mt-5 flex items-center gap-3">
              <Link href={`/events/${event.slug}`} className="btn-primary flex-1 text-center">
                View Details
              </Link>
              <button
                type="button"
                aria-label="Share event"
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-black/10 bg-white text-[var(--color-ink)] transition hover:border-black/20"
              >
                <Share2 size={16} aria-hidden />
              </button>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
