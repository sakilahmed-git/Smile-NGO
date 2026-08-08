import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, Facebook, Sparkles } from "lucide-react";
import { blogPosts } from "@/config/content";
import { FacebookUpdates } from "@/components/sections/facebook-updates";

export default function BlogPage() {
  const posts = blogPosts.filter((post) => post.published);

  return (
    <main className="w-full min-w-0 max-w-full overflow-x-hidden bg-[var(--color-background)] pb-28">
      {/* HERO */}
      <section className="w-full overflow-hidden border-b border-black/5">
        <div className="mx-auto w-full max-w-7xl px-4 pb-3 pt-14 sm:px-6 md:px-8 md:pb-16 md:pt-20 lg:px-10">
          <div className="max-w-3xl">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-green)]">
              SMILE NGO · Journal
            </p>

            <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[var(--color-foreground)] md:text-6xl">
              Stories from the field.
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--color-muted)] md:mt-5 md:text-lg md:leading-7">
              Field notes, community stories, project updates, and transparent
              reports from the work we do with communities.
            </p>
          </div>
        </div>
      </section>

      {/* FACEBOOK UPDATES — moved to the top, framed as a featured live feed */}
      <section className="w-full min-w-0 max-w-full overflow-hidden border-b border-black/5">
        <div className="mx-auto w-full max-w-7xl px-0 pt-0 sm:px-6 md:px-8 md:pt-16 lg:px-10">
          <div
  className="
    relative
    overflow-hidden
    p-4
  "
>
            {/* Decorative glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#0866FF]/[0.06] blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-[var(--color-green)]/[0.08] blur-3xl"
            />

            <div className="relative flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div className="min-w-0">
                <div className="mb-5 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0866FF] text-white shadow-[0_6px_16px_rgba(8,102,255,0.3)]">
                    <Facebook className="h-6 w-6" />
                  </span>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-blue)]">
                    Facebook
                  </p>
                </div>
                
              </div>

              
            </div>

              <FacebookUpdates />
            
          </div>
        </div>
      </section>

    </main>
  );
}