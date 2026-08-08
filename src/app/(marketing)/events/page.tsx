import Link from "next/link";
import { MapPin, Clock, ArrowRight, CalendarDays } from "lucide-react";
import { events } from "@/config/content";
import { ShareButton } from "@/components/events/share-button";

function formatDateBadge(dateString: string) {
  const date = new Date(`${dateString}T00:00:00`);

  return {
    day: date.getDate(),
    month: date
      .toLocaleString("en-US", { month: "short" })
      .toUpperCase(),
  };
}

export default function EventsPage() {
  const publishedEvents = events.filter((event) => event.published);

  return (
    <main className="min-h-screen bg-[var(--color-background)]">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-black/[0.06]">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-32 h-72 w-72 rounded-full bg-[var(--color-gold)]/[0.09] blur-3xl"
        />

        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 bottom-[-180px] h-80 w-80 rounded-full bg-[var(--color-green)]/[0.05] blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6 pb-9 pt-12 sm:px-8 lg:px-10 lg:pb-11 lg:pt-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[var(--color-gold)]/25 bg-[var(--color-gold)]/[0.07] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--color-gold)]">
                <CalendarDays size={12} aria-hidden />
                Community Calendar
              </div>

              <h1 className="text-4xl font-semibold tracking-[-0.045em] text-[var(--color-foreground)] sm:text-5xl">
                Events
              </h1>

              <p className="mt-2 text-sm leading-6 text-[var(--color-muted-foreground)]">
                Upcoming camps, field visits and volunteer days.
              </p>
            </div>

            <div className="hidden text-right sm:block">
              <p className="text-2xl font-semibold tracking-tight text-[var(--color-foreground)]">
                {publishedEvents.length}
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-muted-foreground)]">
                Upcoming
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="mx-auto max-w-7xl px-6 py-7 sm:px-8 lg:px-10 lg:py-9">
        <div className="grid gap-4 lg:grid-cols-2">
          {publishedEvents.map((event) => {
            const { day, month } = formatDateBadge(event.date);

            return (
              <article
                key={event.slug}
                className="group relative overflow-hidden rounded-[22px] border border-black/[0.07] bg-[var(--color-card)] shadow-[0_5px_28px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_45px_rgba(0,0,0,0.08)]"
              >
                {/* Premium shine */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 z-10 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.42] to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full"
                />

                {/* Gold accent */}
                <div
                  aria-hidden
                  className="absolute left-0 top-0 h-full w-[3px] bg-[var(--color-gold)]"
                />

                <div className="relative p-5 sm:p-6">
                  {/* Top */}
                  <div className="flex gap-4">
                    {/* Date */}
                    <div className="flex h-[70px] w-[70px] shrink-0 flex-col items-center justify-center rounded-2xl border border-[var(--color-gold)]/20 bg-[var(--color-gold)]/[0.055]">
                      <span className="text-[28px] font-semibold leading-none tracking-[-0.05em] text-[var(--color-foreground)]">
                        {day}
                      </span>

                      <span className="mt-1 text-[9px] font-bold tracking-[0.2em] text-[var(--color-gold)]">
                        {month}
                      </span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <span className="inline-flex rounded-full border border-[var(--color-green)]/20 bg-[var(--color-green)]/[0.07] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[var(--color-green)]">
                        {event.status}
                      </span>

                      <h2 className="mt-2 text-xl font-semibold leading-tight tracking-[-0.025em] text-[var(--color-foreground)] sm:text-[22px]">
                        {event.title}
                      </h2>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-5.5 text-[var(--color-muted-foreground)]">
                    {event.excerpt}
                  </p>

                  {/* Details */}
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 border-t border-black/[0.06] pt-4">
                    <div className="flex items-center gap-1.5 text-xs text-[var(--color-muted-foreground)]">
                      <MapPin
                        size={14}
                        className="text-[var(--color-gold)]"
                        aria-hidden
                      />
                      {event.location}
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-[var(--color-muted-foreground)]">
                      <Clock
                        size={14}
                        className="text-[var(--color-gold)]"
                        aria-hidden
                      />
                      {event.time}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-5 flex items-center justify-between">
                    <Link
                      href={`/events/${event.slug}`}
                      className="group/link inline-flex items-center gap-2 rounded-full bg-[var(--color-foreground)] px-4 py-2 text-xs font-semibold text-white transition-all duration-300 hover:bg-[var(--color-green)]"
                    >
                      View Details

                      <ArrowRight
                        size={14}
                        className="transition-transform duration-300 group-hover/link:translate-x-1"
                        aria-hidden
                      />
                    </Link>

                    <ShareButton
                      title={event.title}
                      path={`/events/${event.slug}`}
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {publishedEvents.length === 0 && (
          <div className="rounded-[22px] border border-dashed border-black/10 px-6 py-12 text-center">
            <CalendarDays
              size={28}
              className="mx-auto text-black/25"
              aria-hidden
            />

            <h2 className="mt-3 text-lg font-semibold text-[var(--color-foreground)]">
              No upcoming events
            </h2>

            <p className="mt-1 text-sm text-[var(--color-muted-foreground)]">
              Please check back soon for new community activities.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}