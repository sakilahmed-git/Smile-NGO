import { Facebook, Instagram, Sparkles } from "lucide-react";
import { FacebookUpdates } from "@/components/sections/facebook-updates";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[var(--color-surface)] text-[var(--color-foreground)]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden">
        {/* Soft ambient background */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[var(--color-green)]/[0.055] blur-3xl"
        />

        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[var(--color-green)]/[0.035] blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-5 pb-0 pt-6 sm:px-6 md:px-8 md:pb-0 md:pt-10 lg:px-10">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-green)]/[0.08] text-[var(--color-green)]">
                <Sparkles className="h-3.5 w-3.5" />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-green)]">
                SMILE NGO · Journal
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-5xl md:text-6xl">
              Stories from
              <span className="block text-[var(--color-green)]">
                the field.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-2xl text-sm leading-6 text-[var(--color-muted)] sm:text-base sm:leading-7 md:mt-6 md:text-lg">
              Field notes, community stories, project updates, and moments
              from the communities we work alongside.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          SOCIAL SECTION
      ========================================================= */}
      <section className="w-full overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 md:px-8 md:py-12 lg:px-10 lg:py-14">
          {/* Section intro */}
          

          {/* =====================================================
              SOCIAL FEEDS
              Desktop: 2 columns
              Mobile: stacked
          ===================================================== */}
          <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-2 lg:gap-6">
            {/* ===================================================
                FACEBOOK
            =================================================== */}
            <article className="min-w-0 overflow-hidden rounded-[26px] border border-black/[0.06] bg-white shadow-[0_12px_40px_rgba(7,85,62,0.045)]">
              {/* Header */}
              <header className="flex items-center justify-between gap-4 border-b border-black/[0.05] px-5 py-4 sm:px-6 sm:py-5">
                <div className="flex min-w-0 items-center gap-3">
                  {/* Solid Facebook icon */}
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0866FF] text-white shadow-[0_7px_18px_rgba(8,102,255,0.20)]">
                    <span className="translate-y-[1px] text-[22px] font-bold leading-none">
                      f
                    </span>
                  </span>

                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0866FF]">
                      Facebook
                    </p>

                    <p className="mt-0.5 truncate text-sm font-semibold">
                      Latest updates
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-full border border-[#0866FF]/15 bg-[#0866FF]/[0.035] px-3.5 py-1.5 text-[11px] font-semibold text-[#0866FF] transition-all duration-200 hover:border-[#0866FF]/25 hover:bg-[#0866FF]/[0.08]"
                >
                  Follow
                </a>
              </header>

              {/* Feed */}
              <div className="w-full overflow-hidden">
                <FacebookUpdates />
              </div>
            </article>

            {/* ===================================================
                INSTAGRAM
            =================================================== */}
            <article className="min-w-0 overflow-hidden rounded-[26px] border border-black/[0.06] bg-white shadow-[0_12px_40px_rgba(7,85,62,0.045)]">
              {/* Header */}
              <header className="flex items-center justify-between gap-4 border-b border-black/[0.05] px-5 py-4 sm:px-6 sm:py-5">
                <div className="flex min-w-0 items-center gap-3">
                  {/* Instagram icon */}
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-[#F58529] via-[#E1306C] to-[#833AB4] text-white shadow-[0_7px_18px_rgba(225,48,108,0.18)]">
                    <Instagram className="h-[19px] w-[19px]" strokeWidth={2.2} />
                  </span>

                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C13584]">
                      Instagram
                    </p>

                    <p className="mt-0.5 truncate text-sm font-semibold">
                      @smile_ngo_india
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.instagram.com/smile_ngo_india/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-full border border-[#C13584]/15 bg-[#C13584]/[0.035] px-3.5 py-1.5 text-[11px] font-semibold text-[#C13584] transition-all duration-200 hover:border-[#C13584]/25 hover:bg-[#C13584]/[0.08]"
                >
                  Follow
                </a>
              </header>

              {/* Feed */}
              <div className="w-full overflow-hidden">
                <iframe
                  src="https://widgets.sociablekit.com/instagram-feed/iframe/25703912"
                  frameBorder="0"
                  width="100%"
                  height="1000"
                  title="SMILE NGO Instagram Feed"
                  loading="lazy"
                  scrolling="no"
                  className="block w-full border-0"
                />
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}