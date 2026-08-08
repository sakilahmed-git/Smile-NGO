"use client";

import { useEffect,useRef, useState } from "react";
import Draggable from "react-draggable";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siWhatsapp } from "simple-icons";
import Link from "next/link";
import { HeartHandshake, Home, Images, Landmark, Menu, MessageCircle, Users, Zap } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { projects } from "@/config/content";
import { usePwa } from "@/providers";
import Marquee from "react-fast-marquee";
const nav = [
  { href: "/", label: "Home", icon: Home },
  { href: "/projects", label: "Projects", icon: HeartHandshake },
  { href: "/gallery", label: "Gallery", icon: Images },
  { href: "/volunteers", label: "Volunteer", icon: Users },
  { href: "/contact", label: "Contact", icon: MessageCircle },
];

export function MarketingShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { canInstall, isStandalone, install, dismissInstallPrompt } = usePwa();
  const [installVisible, setInstallVisible] = useState(false);
  const whatsappRef = useRef<HTMLAnchorElement>(null);
const [whatsappDragging, setWhatsappDragging] = useState(false);
  

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
      <header className="sticky top-0 z-40 border-b border-[rgba(22,128,95,0.08)] bg-white/90 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="relative h-11 w-11 overflow-hidden rounded-2xl ring-1 ring-[rgba(196,151,69,0.20)] shadow-[0_7px_20px_rgba(7,85,62,0.12)]">
  <Image
  src="/logos/15bab117-44da-452d-9634-698c45c64771 (1).webp"
  alt="SMILE NGO"
  fill
  className="object-contain"
  priority
/>
</span>
            <span className="text-[17px] font-black tracking-[-0.035em]">
  <span className="bg-gradient-to-tr from-[#063F30] via-[#2FAF79] to-[#0A5B43] bg-clip-text text-transparent">
    SMILE
  </span>
  <span className="mx-1"></span>
  <span className="bg-gradient-to-tr from-[#805516] via-[#E7C46A] to-[#A87325] bg-clip-text text-transparent">
    NGO
  </span>
</span>
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
      <main id="main-content">{/* Global announcement bar */}
<div className="announcement-bar">
  <div className="announcement-inner">
    <div className="announcement-label">
      <Zap size={15} strokeWidth={2.5} />
      <span>LATEST</span>
    </div>

    <div className="announcement-ticker">
      <Marquee
        speed={45}
        pauseOnHover
        gradient={false}
        autoFill
      >
        <span className="announcement-item">
          ► Assam Flood Relief Campaign is now accepting donations
        </span>

        <span className="announcement-item">
          ► Volunteer registrations are open
        </span>

        <span className="announcement-item">
          ► Our community programmes are underway
        </span>

        <span className="announcement-item">
          ► Welcome to the new SMILE NGO website
        </span>
      </Marquee>
    </div>
  </div>
</div>

{children}</main>
      <div className="fixed inset-0 z-50 pointer-events-none">
  <Draggable
  nodeRef={whatsappRef}
  handle=".whatsapp-drag-handle"
  onStart={() => {
    setWhatsappDragging(false);
  }}
  onDrag={() => {
    setWhatsappDragging(true);
  }}
  onStop={() => {
    setTimeout(() => {
      setWhatsappDragging(false);
    }, 50);
  }}
>
  <a
    ref={whatsappRef}
    href={`https://wa.me/${siteConfig.whatsapp}`}
    aria-label="Chat with SMILE NGO on WhatsApp"
    className="whatsapp-float whatsapp-drag-handle"
    onClick={(e) => {
      if (whatsappDragging) {
        e.preventDefault();
      }
    }}
  >
    <span
      dangerouslySetInnerHTML={{
        __html: siWhatsapp.svg.replace(
          "<svg ",
          '<svg fill="white" '
        ),
      }}
      className="h-7 w-7 [&>svg]:h-full [&>svg]:w-full"
    />
  </a>
</Draggable>
</div>
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

  const isActive =
    item.href === "/"
      ? pathname === "/"
      : pathname.startsWith(item.href);

  return (
    <Link
      key={item.href}
      href={item.href}
      className={`mobile-tab ${
        item.href === "/contact" ? "hidden md:flex" : ""
      } ${isActive ? "mobile-tab-active" : ""}`}
    >
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
