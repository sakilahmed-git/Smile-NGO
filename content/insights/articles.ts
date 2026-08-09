import type { ComponentType } from "react";

export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  coverImage: string;
  coverImageAlt: string;
  seoTitle?: string;
  seoDescription?: string;
  content?: ComponentType;
  contentPath?: string;
};

export const insights: Insight[] = [
  {
    slug: "why-community-development-starts-with-people-not-projects",
    title: "Why Community Development Starts With People, Not Projects",
    excerpt:
      "Community development becomes more effective when it begins with relationships, listening, and local participation rather than with a predefined project plan.",
    category: "Community Development",
    author: "SMILE NGO",
    publishedAt: "2026-08-09",
    updatedAt: "2026-08-09",
    coverImage: "/hero/community-care.svg",
    coverImageAlt: "A community-focused illustration representing care, connection, and local support",
    seoTitle: "Why Community Development Starts With People, Not Projects",
    seoDescription:
      "Explore why lasting community development begins with people, participation, and trust rather than with a project-first approach.",
    contentPath: "content/insights/articles/why-community-development-starts-with-people-not-projects.mdx",
  },
];