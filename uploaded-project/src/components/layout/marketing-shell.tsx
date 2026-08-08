"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { HeartHandshake, Home, Images, Landmark, Menu, MessageCircle, Users } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { projects } from "@/config/content";
import { usePwa } from "@/providers";

const nav = [
  { href: "/", label: "Home", icon: Home },
  { href: "/projects", label: "Projects", icon: HeartHandshake },
  { href: "/gallery", label: "Gallery", icon: Images },
  { href: "/volunteers", label: "Volunteer", icon: Users },
  { href: "/contact", label: "Contact", icon: MessageCircle },
];

export function MarketingShell({ children }: { children: React.ReactNode }) {
  const { canInstall, isStandalone, install, dismissInstallPrompt } = usePwa();
  const [installVisible, setInstallVisible] = useState(false);

  useEffect(() => {
    if (!canInstall || isStandalone) {
      setInstallVisible(false);
      return;
    }

    const wasDismissed = window.localStorage.getItem("smile-pwa-dismissed");
    if (!wasDismissed) {
      setInstallVisible(true);
    }
  }, [canInstall, isStandalone]);

  const handleInstall = async () => {
    await install();
    setInstallVisible(false);
    window.localStorage.setItem("smile-pwa-dismissed", "1");
  };

  const handleCancel = () => {
    dismissInstallPrompt();
    setInstallVisible(false);
    window.localStorage.setItem("smile-pwa-dismissed", "1");
  };

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
          <div className="hidden items-center gap-2 md:flex">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
            <Link href="/login" className="nav-link">
              Login
            </Link>
            <Link href="/register" className="btn-secondary">
              Register
            </Link>
            <Link href="/donate" className="btn-primary">
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

      {installVisible ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-[var(--radius-lg)] bg-white p-6 shadow-soft">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-brand-strong)]">
                  Install app
                </p>
                <h2 className="mt-3 text-2xl font-semibold">Add SMILE NGO to your home screen</h2>
                <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                  Get faster access, offline support, and a cleaner mobile experience when you install the site.
                </p>
              </div>
              <button
                type="button"
                onClick={handleCancel}
                className="rounded-full border border-black/10 bg-white px-3 py-2 text-sm font-semibold text-[var(--color-ink)] transition hover:bg-black/5"
              >
                Cancel
              </button>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button type="button" onClick={handleInstall} className="btn-primary w-full sm:w-auto">
                Install SMILE NGO
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="btn-secondary w-full sm:w-auto"
              >
                Not now
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
