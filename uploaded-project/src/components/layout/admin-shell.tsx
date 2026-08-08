import Link from "next/link";
import { BarChart3, CheckCircle2, FileText, Image, LayoutDashboard, Settings, ShieldCheck, Users } from "lucide-react";

const adminNav = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/donations", label: "Donations", icon: CheckCircle2 },
  { href: "/admin/projects", label: "Projects", icon: FileText },
  { href: "/admin/gallery", label: "Gallery", icon: Image },
  { href: "/admin/team", label: "People", icon: Users },
  { href: "/admin/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f7f3ec] text-[var(--color-ink)] md:grid md:grid-cols-[260px_1fr]">
      <aside className="hidden border-r border-black/5 bg-white/80 p-5 md:block">
        <Link href="/admin" className="flex items-center gap-3 font-semibold">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[var(--color-brand)] text-white">
            <ShieldCheck size={20} aria-hidden />
          </span>
          SMILE Admin
        </Link>
        <nav className="mt-8 grid gap-1">
          {adminNav.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href} className="admin-link">
                <Icon size={18} aria-hidden />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
      <div>
        <header className="sticky top-0 z-30 border-b border-black/5 bg-white/90 px-4 py-4 backdrop-blur-xl md:px-8">
          <p className="text-sm font-medium text-[var(--color-muted)]">Content, donations and transparency controls</p>
        </header>
        {children}
      </div>
    </div>
  );
}
