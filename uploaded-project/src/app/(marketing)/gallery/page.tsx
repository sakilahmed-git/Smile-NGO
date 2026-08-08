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
    publishedAlbums.find((item) => item.folderName === album) ?? publishedAlbums[0];
  const images = selectedAlbum ? getGalleryImages(selectedAlbum.folderName) : [];

  return (
    <main className="page-shell">
      <section className="section-hero">
        <p className="eyebrow">Gallery</p>
        <h1>Local albums rendered directly from the project.</h1>
        <p>
          Firestore stores album metadata only. Images are discovered from
          <span className="font-semibold"> /public/gallery/{selectedAlbum?.folderName ?? "album"}/</span>.
        </p>
      </section>

      <section className="flex gap-2 overflow-x-auto pb-3" aria-label="Gallery albums">
        {publishedAlbums.map((item) => (
          <Link
            key={item.folderName}
            href={`/gallery?album=${item.folderName}`}
            className={`rounded-full px-4 py-2 text-sm font-semibold ${
              item.folderName === selectedAlbum?.folderName
                ? "bg-[var(--color-brand)] text-white"
                : "bg-white text-[var(--color-muted)]"
            }`}
          >
            {item.title}
          </Link>
        ))}
      </section>

      {selectedAlbum ? (
        <section className="mt-5">
          <div className="soft-card">
            <p className="eyebrow">{selectedAlbum.location}</p>
            <h2 className="mt-2 text-2xl font-semibold">{selectedAlbum.title}</h2>
            <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
              {selectedAlbum.description}
            </p>
          </div>
          <div className="mt-5 columns-1 gap-4 md:columns-2 lg:columns-3">
            {images.map((src, index) => (
              <figure key={src} className="mb-4 break-inside-avoid overflow-hidden rounded-[var(--radius-lg)] bg-white shadow-soft">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={src}
                    alt={`${selectedAlbum.title} image ${index + 1}`}
                    fill
                    className="object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                    priority={index === 0}
                    sizes="(min-width: 1024px) 30vw, (min-width: 430px) 45vw, 92vw"
                  />
                </div>
              </figure>
            ))}
          </div>
          {images.length === 0 ? (
            <div className="soft-card mt-5">
              Add `.jpg`, `.png`, `.webp`, `.avif` or `.svg` files to
              <span className="font-semibold"> /public/gallery/{selectedAlbum.folderName}/</span>.
            </div>
          ) : null}
        </section>
      ) : null}
    </main>
  );
}
