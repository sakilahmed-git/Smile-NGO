import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--color-surface)] text-[var(--color-ink)]">
      <header className="border-b border-black/5 bg-white/90 px-4 py-4 shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="text-lg font-semibold text-[var(--color-brand-strong)]">
            SMILE NGO
          </Link>
          <Link href="/" className="btn-secondary">
            Back to home
          </Link>
        </div>
      </header>
      {children}
    </div>
  );
}
