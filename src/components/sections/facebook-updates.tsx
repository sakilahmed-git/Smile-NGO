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
      overflow-hidden"
  >
    {/* Feed */}
    <div className="p-0 w-full overflow-hidden">
      <div className="w-full overflow-hidden rounded-lg border border-black/5">
  <iframe
    title="SMILE NGO Facebook page"
    className="block h-[3000px] w-full border-0"
    loading="lazy"
    src={`https://www.facebook.com/plugins/page.php?${new URLSearchParams({
      href: siteConfig.social.facebookPageUrl,
      tabs: "timeline",
      height: "3000",
      width: "390",
      adapt_container_width: "true",
      small_header: "false",
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
