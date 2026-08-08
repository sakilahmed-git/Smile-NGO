import Link from "next/link";
import { MapPin, Clock } from "lucide-react";
import { events } from "@/config/content";
import { ShareButton } from "@/components/events/share-button";

function formatDateBadge(dateString: string) {
  const date = new Date(`${dateString}T00:00:00`);
  return {
    day: date.getDate(),
    month: date.toLocaleString("en-US", { month: "short" }).toUpperCase(),
  };
}

export default function EventsPage() {
  return (
    <main className="page-shell">
      <section className="section-hero">
        <p className="eyebrow">Events</p>
        <h1>Upcoming camps, field visits and volunteer days.</h1>
        <p>Event images load from /public/events/ and never require cloud upload services.</p>
      </section>
      <section className="feature-grid">
        {events.filter((event) => event.published).map((event) => {
          const { day, month } = formatDateBadge(event.date);
          return (
            <article className="project-card" key={event.slug}>
              <div className="flex items-start gap-4">
                <div className="date-badge">
                  <span className="day">{day}</span>
                  <span className="month">{month}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <span className="status-pill is-upcoming">{event.status}</span>
                  <h2 className="mt-2">{event.title}</h2>
                </div>
              </div>
              <p className="mt-3">{event.excerpt}</p>
              <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-[var(--color-muted)]">
                <MapPin size={16} aria-hidden /> {event.location}
              </p>
              <p className="mt-1 flex items-center gap-2 text-sm font-medium text-[var(--color-muted)]">
                <Clock size={16} aria-hidden /> {event.time}
              </p>
              <div className="mt-4 flex items-center gap-3">
                <Link className="text-link !mt-0" href={`/events/${event.slug}`}>
                  View Details
                </Link>
                <ShareButton title={event.title} path={`/events/${event.slug}`} />
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}