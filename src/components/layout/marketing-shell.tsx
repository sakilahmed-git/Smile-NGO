"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { siWhatsapp } from "simple-icons";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronRight,
  Calendar,
  HeartHandshake,
  Home,
  Images,
  Menu,
  MessageCircle,
  Newspaper,
  Users,
  X,
  Zap,
} from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { projects, registrationDetails } from "@/config/content";
import { usePwa } from "@/providers";
import Marquee from "react-fast-marquee";

const nav = [
  { href: "/", label: "Home", icon: Home },
  { href: "/projects", label: "Projects", icon: HeartHandshake },
  { href: "/gallery", label: "Gallery", icon: Images },
  { href: "/volunteers", label: "Volunteer", icon: Users },
  { href: "/contact", label: "Contact", icon: MessageCircle },
];

const desktopNav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/volunteers", label: "Volunteer" },
  { href: "/events", label: "Events" },
];

// Mobile bottom tab bar only — Blog replaces Gallery here, everything else
// (desktop header nav + drawer) keeps Gallery as-is.
const mobileNav = [
  { href: "/", label: "Home", icon: Home },
  { href: "/projects", label: "Projects", icon: HeartHandshake },
  { href: "/blog", label: "Blog", icon: Newspaper },
  { href: "/volunteers", label: "Volunteer", icon: Users },
  { href: "/contact", label: "Contact", icon: MessageCircle },
];

export function MarketingShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { canInstall, isStandalone, isIos, isAndroid, install, dismissInstallPrompt } = usePwa();
  const [installVisible, setInstallVisible] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (isStandalone) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setInstallVisible(false);
      return;
    }

    const wasDismissed = window.localStorage.getItem("smile-pwa-dismissed");
    if (!wasDismissed) {
      const timer = window.setTimeout(() => {
        setInstallVisible(true);
      }, 1200);

      return () => window.clearTimeout(timer);
    }
  }, [canInstall, isStandalone, pathname]);

  // Lock body scroll while the drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  // Close the drawer automatically on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDrawerOpen(false);
  }, [pathname]);

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

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

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
  {desktopNav.map((item) => (
    <Link
      key={item.href}
      href={item.href}
      className="nav-link"
    >
      {item.label}
    </Link>
  ))}

  <Link href="/login" className="nav-link">
    Login
  </Link>

  <Link href="/donate" className="btn-primary">
    Donate
  </Link>
</div>

          {/* Mobile: Donate + Menu */}
          <div className="flex items-center gap-2 md:hidden">
            <Link href="/donate" className="btn-primary">
              Donate
            </Link>
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
              aria-expanded={drawerOpen}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(22,128,95,0.15)] bg-white text-[var(--color-ink)] shadow-sm transition hover:bg-[rgba(22,128,95,0.06)]"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>
      <main id="main-content">
        {/* Global announcement bar */}
        <div className="announcement-bar">
          <div className="announcement-inner">
            <div className="announcement-label">
              <Zap size={15} strokeWidth={2.5} />
              <span>LATEST</span>
            </div>

            <div className="announcement-ticker">
              <Marquee speed={45} pauseOnHover gradient={false} autoFill>
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

        {children}
      </main>
      <div className="fixed inset-0 z-50 pointer-events-none">
        <a
          href="https://wa.me/917002372041?text=Hello%20Sir!"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with SMILE NGO on WhatsApp"
          className="whatsapp-float whatsapp-drag-handle pointer-events-auto"
        >
          <span
            dangerouslySetInnerHTML={{
              __html: siWhatsapp.svg.replace("<svg ", '<svg fill="white" '),
            }}
            className="h-7 w-7 [&>svg]:h-full [&>svg]:w-full"
          />
        </a>
      </div>
      <footer className="pb-28 pt-12 md:pb-10">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-[1.2fr_.8fr_.8fr]">
          <div>
            <p className="text-xl font-semibold">{siteConfig.name}</p>
            <p className="mt-3 max-w-md text-sm leading-6 text-[var(--color-muted)]">
              Transparent grassroots programs for education, health, nutrition and dignity.
            </p>
            <div className="mt-5 rounded-2xl border border-emerald-900/10 bg-[#F7FCF8] p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#087A59]">
                Official registration
              </p>
              <div className="mt-3 space-y-2 text-sm text-[var(--color-muted)]">
                <p>
                  <span className="font-semibold text-[var(--color-ink)]">Type:</span>{" "}
                  {registrationDetails.organizationType}
                </p>
                <p>
                  <span className="font-semibold text-[var(--color-ink)]">Registration No.:</span>{" "}
                  {registrationDetails.registrationNo}
                </p>
                <p>
                  <span className="font-semibold text-[var(--color-ink)]">Jurisdiction:</span>{" "}
                  {registrationDetails.jurisdiction}
                </p>
              </div>
            </div>
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
        {mobileNav.map((item) => {
          const Icon = item.icon;
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`mobile-tab ${
                item.href === "/contact" ? "hidden md:flex" : ""
              } ${active ? "mobile-tab-active" : ""}`}
            >
              <Icon size={19} aria-hidden />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* =========================================================
          DRAWER OVERLAY
      ========================================================= */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/35 backdrop-blur-[2px]"
          onClick={() => setDrawerOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* =========================================================
          RIGHT DRAWER
      ========================================================= */}
      <aside
        className={`fixed right-0 top-0 z-[110] flex h-dvh w-[min(390px,92vw)] flex-col bg-white shadow-[-20px_0_70px_rgba(0,0,0,0.15)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!drawerOpen}
      >
        {/* DRAWER HEADER (same logo as your site) */}
        <div className="flex items-center justify-between border-b border-[rgba(22,128,95,0.08)] px-5 py-4">
          <Link href="/" onClick={() => setDrawerOpen(false)} className="flex items-center gap-2.5">
            <span className="relative h-10 w-10 overflow-hidden rounded-2xl ring-1 ring-[rgba(196,151,69,0.20)]">
              <Image
                src="/logos/15bab117-44da-452d-9634-698c45c64771 (1).webp"
                alt="SMILE NGO"
                fill
                sizes="full"
                className="object-contain"
              />
            </span>
            <span className="text-[15px] font-black tracking-[-0.03em]">
              <span className="bg-gradient-to-tr from-[#063F30] via-[#2FAF79] to-[#0A5B43] bg-clip-text text-transparent">
                SMILE
              </span>
              <span className="mx-1"></span>
              <span className="bg-gradient-to-tr from-[#805516] via-[#E7C46A] to-[#A87325] bg-clip-text text-transparent">
                NGO
              </span>
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setDrawerOpen(false)}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/[0.07] bg-black/[0.025] transition hover:bg-black/[0.06]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* DRAWER CONTENT */}
        <div className="flex-1 overflow-y-auto px-5 py-6">
          <p className="mb-3 px-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--color-muted)]">
            Explore
          </p>

          <nav className="space-y-1">
            {nav.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setDrawerOpen(false)}
                  className={`group flex items-center gap-4 rounded-2xl px-4 py-3.5 transition-all ${
                    active
                      ? "bg-[rgba(22,128,95,0.08)] text-[#0A5B43]"
                      : "text-[var(--color-ink)] hover:bg-black/[0.035]"
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                      active
                        ? "bg-gradient-to-tr from-[#063F30] via-[#2FAF79] to-[#0A5B43] text-white"
                        : "bg-black/[0.035] text-[var(--color-muted)]"
                    }`}
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </span>

                  <span className="flex-1 text-sm font-semibold">{item.label}</span>

                  <ChevronRight
                    className={`h-4 w-4 transition-transform ${
                      active ? "text-[#0A5B43]" : "text-black/20 group-hover:translate-x-0.5"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>
          {/* =====================================================
              EVENTS  ← new section, placed right after Explore
          ===================================================== */}
          <div className="mt-8">
            <p className="mb-3 px-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--color-muted)]">
              Events
            </p>

            <Link
              href="/events"
              onClick={() => setDrawerOpen(false)}
              className="group flex items-center gap-4 rounded-2xl border border-black/[0.07] bg-white px-4 py-4 transition-all hover:bg-black/[0.025]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(22,128,95,0.08)] text-[#0A5B43]">
                <Calendar className="h-5 w-5" />
              </span>
              <span className="flex-1">
                <span className="block text-sm font-bold">Upcoming events</span>
                <span className="mt-0.5 block text-[10px] text-[var(--color-muted)]">
                  Community drives, campaigns & meetups
                </span>
              </span>
              <ArrowUpRight className="h-4 w-4 text-black/30" />
            </Link>
          </div>

          <div className="mt-8">
            <p className="mb-3 px-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--color-muted)]">
              Get involved
            </p>

            <div className="space-y-2">
              <Link
                href="/donate"
                onClick={() => setDrawerOpen(false)}
                className="btn-primary flex items-center justify-between gap-4 rounded-2xl px-4 py-4"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
                    <HeartHandshake className="h-5 w-5" />
                  </span>
                  <span className="text-left">
                    <span className="block text-sm font-bold">Donate</span>
                    <span className="mt-0.5 block text-[10px] opacity-80">
                      Support our ongoing work
                    </span>
                  </span>
                </span>
                <ArrowUpRight className="h-5 w-5" />
              </Link>

              <Link
                href="/volunteers/apply"
                onClick={() => setDrawerOpen(false)}
                className="group flex items-center gap-4 rounded-2xl border border-black/[0.07] bg-white px-4 py-4 transition-all hover:bg-black/[0.025]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(22,128,95,0.08)] text-[#0A5B43]">
                  <Users className="h-5 w-5" />
                </span>
                <span className="flex-1">
                  <span className="block text-sm font-bold">Become a volunteer</span>
                  <span className="mt-0.5 block text-[10px] text-[var(--color-muted)]">
                    Join the SMILE community
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-black/30" />
              </Link>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-2">
            <Link
              href="/login"
              onClick={() => setDrawerOpen(false)}
              className="rounded-xl border border-black/[0.07] px-4 py-3 text-center text-xs font-semibold text-[var(--color-ink)] transition hover:bg-black/[0.03]"
            >
              Login
            </Link>
            <Link
              href="/register"
              onClick={() => setDrawerOpen(false)}
              className="rounded-xl border border-black/[0.07] px-4 py-3 text-center text-xs font-semibold text-[var(--color-ink)] transition hover:bg-black/[0.03]"
            >
              Register
            </Link>
          </div>

          <div className="mt-8 rounded-2xl bg-[#F5F7F4] p-5">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-[#0A5B43] shadow-sm">
                <MessageCircle className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-bold">Need help?</p>
                <p className="mt-1 text-[11px] leading-5 text-[var(--color-muted)]">
                  Talk to the SMILE NGO team directly.
                </p>
                <a
                  href="https://wa.me/917002372041?text=Hello%20Sir!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold text-[#0A5B43]"
                >
                  WhatsApp us
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[rgba(22,128,95,0.08)] px-5 py-4">
          <p className="text-center text-[9px] font-medium tracking-wide text-[var(--color-muted)]">
            © {new Date().getFullYear()} SMILE NGO
          </p>
        </div>
      </aside>

      {installVisible ? (
        <div className="fixed inset-0 z-[120] grid place-items-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-[var(--radius-lg)] bg-white p-6 shadow-soft">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-brand-strong)]">
                  Install app
                </p>
                <h2 className="mt-3 text-2xl font-semibold">Add SMILE NGO to your home screen</h2>
                <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                  {canInstall
                    ? "Your browser can prompt for installation. Use the button below to continue."
                    : isIos
                      ? "On iPhone or iPad, tap Share and choose Add to Home Screen."
                      : isAndroid
                        ? "On Android, open the browser menu and choose Install app or Add to Home Screen."
                        : "Use your browser’s Install or Add to Home Screen option to keep the app on your device."}
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

            <div className="mt-5 rounded-2xl border border-emerald-900/10 bg-[#F7FCF8] p-4 text-sm text-[var(--color-muted)]">
              {isIos ? (
                <ol className="list-decimal space-y-2 pl-5">
                  <li>Tap the Share button in Safari.</li>
                  <li>Select Add to Home Screen.</li>
                  <li>Confirm and the app will appear on your home screen.</li>
                </ol>
              ) : isAndroid ? (
                <ol className="list-decimal space-y-2 pl-5">
                  <li>Open the Chrome or Edge browser menu.</li>
                  <li>Select Install app or Add to Home Screen.</li>
                  <li>Confirm the prompt to finish installation.</li>
                </ol>
              ) : (
                <p>Most desktop browsers will offer an Install or Add to Home Screen option from the address bar or browser menu.</p>
              )}
            </div>

            <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              {canInstall ? (
                <button type="button" onClick={handleInstall} className="btn-primary w-full md:w-auto">
                  Install SMILE NGO
                </button>
              ) : null}
              <button type="button" onClick={handleCancel} className="btn-secondary w-full md:w-auto">
                {canInstall ? "Not now" : "Close"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}