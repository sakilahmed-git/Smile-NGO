import Link from "next/link";
import { HeartHandshake, Home, Images, Landmark, Menu, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { projects } from "@/config/content";

const nav = [
  { href: "/", label: "Home", icon: Home },
  { href: "/projects", label: "Projects", icon: HeartHandshake },
  { href: "/gallery", label: "Gallery", icon: Images },
  { href: "/transparency", label: "Trust", icon: Landmark },
];

export function MarketingShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--color-surface)] text-[var(--color-ink)]">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="sticky top-0 z-40 border-b border-black/5 bg-white/90 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[var(--color-brand)] text-white shadow-soft">
              <HeartHandshake size={21} aria-hidden />
            </span>
            <span>{siteConfig.name}</span>
          </Link>
          <div className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
            <Link href="/donate" className="btn-primary ml-2">
              Donate
            </Link>
          </div>
          <Link href="/donate" className="btn-primary md:hidden">
            Donate
          </Link>
          <Menu className="hidden" aria-hidden />
        </nav>
      </header>
      <main id="main-content">{children}</main>
      <a
        className="whatsapp-float"
        href={`https://wa.me/${siteConfig.whatsapp}`}
        aria-label="Chat with SMILE NGO on WhatsApp"
      >
        <MessageCircle size={24} aria-hidden />
      </a>
      <footer className="pb-28 pt-12 md:pb-10">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-[1.2fr_.8fr_.8fr]">
          <div>
            <p className="text-xl font-semibold">{siteConfig.name}</p>
            <p className="mt-3 max-w-md text-sm leading-6 text-[var(--color-muted)]">
              Transparent grassroots programs for education, health, nutrition and dignity.
            </p>
          </div>
          <div>
            <p className="footer-title">Programs</p>
            {projects.map((project) => (
              <Link key={project.slug} className="footer-link" href={`/projects/${project.slug}`}>
                {project.title}
              </Link>
            ))}
          </div>
          <div>
            <p className="footer-title">Contact</p>
            <p className="footer-link">{siteConfig.email}</p>
            <p className="footer-link">{siteConfig.phone}</p>
            <p className="footer-link">{siteConfig.address}</p>
          </div>
        </div>
      </footer>
      <nav className="mobile-tabbar" aria-label="Primary">
        {nav.map((item) => {
          const Icon = item.icon;
          return (
            <Link key={item.href} href={item.href} className="mobile-tab">
              <Icon size={19} aria-hidden />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
