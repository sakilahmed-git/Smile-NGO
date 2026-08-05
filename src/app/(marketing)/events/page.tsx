import Image from "next/image";
import Link from "next/link";
import { events } from "@/config/content";

export default function EventsPage() {
  return (
    <main className="page-shell">
      <section className="section-hero">
        <p className="eyebrow">Events</p>
        <h1>Upcoming camps, field visits and volunteer days.</h1>
        <p>Event images load from /public/events/ and never require cloud upload services.</p>
      </section>
      <section className="feature-grid">
        {events.filter((event) => event.published).map((event) => (
          <article className="project-card" key={event.slug}>
            <div className="project-art relative overflow-hidden">
              <Image
                src={event.image}
                alt={`${event.title} event`}
                fill
                className="object-cover"
                loading="lazy"
                sizes="(min-width: 768px) 30vw, 92vw"
              />
            </div>
            <p className="eyebrow">{event.date}</p>
            <h2>{event.title}</h2>
            <p>{event.excerpt}</p>
            <p className="mt-3 text-sm font-semibold text-[var(--color-muted)]">{event.location}</p>
            <Link className="text-link" href={`/events/${event.slug}`}>Event details</Link>
          </article>
        ))}
      </section>
    </main>
  );
}
