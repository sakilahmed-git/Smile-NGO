import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/config/content";
import { FacebookUpdates } from "@/components/sections/facebook-updates";

export default function BlogPage() {
  return (
    <main>
      <div className="page-shell">
        <section className="section-hero">
          <p className="eyebrow">Blog</p>
          <h1>Field notes and transparent updates.</h1>
          <p>Blog cover images load from /public/blog/ and are rendered with next/image.</p>
        </section>
        <section className="feature-grid">
          {blogPosts.filter((post) => post.published).map((post) => (
            <article className="project-card" key={post.slug}>
              <div className="project-art relative overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={`${post.title} cover`}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(min-width: 768px) 30vw, 92vw"
                />
              </div>
              <p className="eyebrow">{post.date}</p>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <Link className="text-link" href={`/blog/${post.slug}`}>Read update</Link>
            </article>
          ))}
        </section>
      </div>

      <div className="page-shell pt-0">
        <p className="eyebrow">From our page</p>
        <h2 className="mt-2 text-2xl font-semibold">Facebook Updates</h2>
        <p className="mt-2 text-sm text-[var(--color-muted)]">
          Live posts from the SMILE NGO Facebook page, alongside our latest field notes.
        </p>
      </div>
      <FacebookUpdates />
    </main>
  );
}
