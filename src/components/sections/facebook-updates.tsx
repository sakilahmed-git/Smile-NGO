import { siteConfig } from "@/config/site.config";
import { Facebook } from "lucide-react";
type FacebookPost = {
  id: string;
  message?: string;
  created_time?: string;
  permalink_url?: string;
};

async function getFacebookPosts(): Promise<FacebookPost[]> {
  const pageId = process.env.FACEBOOK_PAGE_ID;
  const accessToken = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;

  if (!pageId || !accessToken) return [];

  const params = new URLSearchParams({
    access_token: accessToken,
    fields: "message,created_time,permalink_url",
    limit: "3",
  });

  try {
    const response = await fetch(`https://graph.facebook.com/v20.0/${pageId}/posts?${params}`, {
      next: { revalidate: 900 },
    });
    if (!response.ok) return [];
    const payload = (await response.json()) as { data?: FacebookPost[] };
    return payload.data ?? [];
  } catch {
    return [];
  }
}

export async function FacebookUpdates() {
  const posts = await getFacebookPosts();

  if (posts.length > 0) {
    return (
      <section className="page-shell grid gap-5 md:grid-cols-3">
        {posts.map((post) => (
          <article className="soft-card" key={post.id}>
            <p className="text-xs font-semibold text-[var(--color-muted)]">
              {post.created_time ? new Date(post.created_time).toLocaleDateString("en-IN") : "Facebook"}
            </p>
            <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
              {post.message ?? "Latest field update from SMILE NGO."}
            </p>
            {post.permalink_url ? (
              <a className="text-link" href={post.permalink_url} target="_blank" rel="noreferrer">
                View on Facebook
              </a>
            ) : null}
          </article>
        ))}
      </section>
    );
  }

  return (
    <section className="page-shell">
  <div
    className="
      relative
      mx-auto
      max-w-2xl
      overflow-hidden"
  >
    {/* Feed */}
    <div>
      <div className="overflow-hidden rounded-xl ml-[-5px]">
        <iframe
          title="SMILE NGO Facebook page"
          className="h-[2200px] w-full border-0  sm:h-[520px] md:h-[600px] lg:h-[700px]"
          loading="lazy"
          src={`https://www.facebook.com/plugins/page.php?${new URLSearchParams({
            href: siteConfig.social.facebookPageUrl,
            tabs: "timeline",
            height: "2200",
            width: "380",
            small_header: "false",
            adapt_container_width: "true",
            hide_cover: "false",
            show_facepile: "true",
          })}`}
        />
      </div>
    </div>
  </div>
</section>
  );
}
