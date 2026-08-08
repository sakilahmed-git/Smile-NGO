import Image from "next/image";
import Link from "next/link";
import { galleryAlbums, getGalleryImages } from "@/lib/local-assets";

export default async function GalleryPage({
  searchParams,
}: {
  searchParams: Promise<{ album?: string }>;
}) {
  const { album } = await searchParams;

  const publishedAlbums = galleryAlbums.filter((item) => item.published);

  const selectedAlbum =
    publishedAlbums.find((item) => item.folderName === album) ??
    publishedAlbums[0];

  const images = selectedAlbum
    ? getGalleryImages(selectedAlbum.folderName)
    : [];

  return (
    <main className="page-shell">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden rounded-[var(--radius-lg)] bg-gradient-to-br from-[#07543D] via-[#087A5A] to-[#159A70] px-6 py-10 text-white shadow-[0_16px_45px_rgba(6,78,59,0.12)] md:px-10 md:py-12">

        {/* Decorative glow */}
        <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#F1D080]/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

        <div className="relative max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#F1D080]">
            Our Gallery
          </p>

          <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            Moments that show the work.
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/80 md:text-base">
  Explore moments from our programmes, community initiatives,
  volunteers and the people we work alongside.
</p>
        </div>
      </section>


      {/* =========================================================
          ALBUM NAVIGATION
      ========================================================= */}
      {publishedAlbums.length > 1 ? (
        <section
          className="mt-7"
          aria-label="Gallery albums"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#087A5A]">
              Explore
            </p>

            <h2 className="mt-1 text-xl font-bold tracking-tight">
              Browse our albums
            </h2>
          </div>

          <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
            {publishedAlbums.map((item) => {
              const isSelected =
                item.folderName === selectedAlbum?.folderName;

              return (
                <Link
                  key={item.folderName}
                  href={`/gallery?album=${item.folderName}`}
                  className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-semibold transition ${
                    isSelected
                      ? "border-[#07543D] bg-[#07543D] text-white shadow-sm"
                      : "border-emerald-900/8 bg-white text-[#587069] hover:border-[#087A5A]/20 hover:text-[#07543D]"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </section>
      ) : null}


      {/* =========================================================
          SELECTED ALBUM
      ========================================================= */}
      {selectedAlbum ? (
        <section className="mt-8">

          {/* Album heading */}
          <div className="mb-7 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#A87525]">
                {selectedAlbum.location}
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight">
                {selectedAlbum.title}
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--color-muted)]">
                {selectedAlbum.description}
              </p>
            </div>

            {images.length > 0 ? (
              <span className="shrink-0 text-xs font-semibold text-[#587069]">
                {images.length}{" "}
                {images.length === 1 ? "photo" : "photos"}
              </span>
            ) : null}

          </div>


          {/* =====================================================
              MASONRY GALLERY
          ===================================================== */}
          {images.length > 0 ? (
            <div className="columns-2 gap-3 md:columns-3 md:gap-4">

              {images.map((src, index) => (
                <figure
                  key={src}
                  className="group relative mb-3 break-inside-avoid overflow-hidden rounded-[1.25rem] bg-white shadow-[0_8px_28px_rgba(6,78,59,0.06)] md:mb-4"
                >

                  <div className="relative overflow-hidden">

                    <Image
                      src={src}
                      alt={`${selectedAlbum.title} image ${index + 1}`}
                      width={1600}
                      height={1200}
                      className="block h-auto w-full object-contain transition duration-700 ease-out group-hover:scale-[1.025]"
                      loading={index < 2 ? "eager" : "lazy"}
                      priority={index < 2}
                      sizes="(min-width: 1024px) 33vw, 50vw"
                    />

                    {/* Hover overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05291F]/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Featured badge */}
                    {index === 0 ? (
                      <div className="absolute left-3 top-3 rounded-full border border-white/20 bg-[#07543D]/85 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                        Featured
                      </div>
                    ) : null}

                  </div>

                </figure>
              ))}

            </div>
          ) : (
            <div className="rounded-[var(--radius-lg)] border border-emerald-900/5 bg-[#F8FBF9] p-8 text-center">
              <p className="text-sm font-medium text-[var(--color-muted)]">
                Photos from this album will appear here soon.
              </p>
            </div>
          )}

        </section>
      ) : (
        <div className="mt-8 rounded-[var(--radius-lg)] border border-emerald-900/5 bg-[#F8FBF9] p-8 text-center">
          <p className="text-sm font-medium text-[var(--color-muted)]">
            Our gallery is being updated. Check back soon for new moments.
          </p>
        </div>
      )}


      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="mt-12">

        <div className="relative overflow-hidden rounded-[var(--radius-lg)] bg-gradient-to-br from-[#07543D] to-[#159A70] p-7 text-white shadow-[0_14px_40px_rgba(6,78,59,0.12)] md:p-9">

          {/* Decorative glow */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#F1D080]/10 blur-3xl" />

          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            {/* Text */}
            <div className="max-w-2xl">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F1D080]">
                Be part of the story
              </p>

              <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
                See the work. Support the work.
              </h2>

              <p className="mt-3 text-sm leading-6 text-white/80">
                Help us create more moments of dignity, opportunity and
                community impact.
              </p>

            </div>


            {/* Buttons */}
            <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">

              <Link
                href="/donate"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-bold text-[#07543D] transition hover:-translate-y-0.5 hover:bg-[#FCF8ED]"
              >
                Donate Now
              </Link>

              <Link
                href="/volunteers"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
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