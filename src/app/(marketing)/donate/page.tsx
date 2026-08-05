import Image from "next/image";
import { UploadCloud } from "lucide-react";
import { donationDetails, impactStats } from "@/config/content";

export default function DonatePage() {
  return (
    <main className="page-shell">
      <section className="section-hero">
        <p className="eyebrow">Donate</p>
        <h1>Send support directly by UPI or bank transfer.</h1>
        <p>
          SMILE NGO does not use payment gateways here. Donate from your banking app, upload proof,
          and the admin team verifies it before public counters update.
        </p>
      </section>
      <section className="grid gap-5 md:grid-cols-[.9fr_1.1fr]">
        <article className="hero-panel">
          <div className="relative aspect-square overflow-hidden rounded-[1.4rem] bg-white">
            <Image
              src="/qr/donation-qr.svg"
              alt="UPI donation QR code"
              fill
              className="object-contain p-6"
              priority
              sizes="(min-width: 768px) 38vw, 92vw"
            />
          </div>
        </article>
        <article className="admin-card">
          <p className="eyebrow">Bank details</p>
          <dl className="mt-5 grid gap-4 text-sm">
            {[
              ["UPI ID", donationDetails.upiId],
              ["Account name", donationDetails.accountName],
              ["Account number", donationDetails.accountNumber],
              ["IFSC", donationDetails.ifsc],
              ["Bank", donationDetails.bank],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl bg-[#fff7ec] p-4">
                <dt className="font-semibold">{label}</dt>
                <dd className="mt-1 text-[var(--color-muted)]">{value}</dd>
              </div>
            ))}
          </dl>
        </article>
      </section>
      <section className="mt-5 grid gap-5 md:grid-cols-[1.2fr_.8fr]">
        <form className="admin-card">
          <p className="eyebrow">Upload proof</p>
          <h2 className="mt-2 text-2xl font-semibold">Donation verification request</h2>
          <div className="mt-5 grid gap-4">
            <input className="rounded-2xl border border-black/10 bg-white px-4 py-3" placeholder="Donor name" />
            <input className="rounded-2xl border border-black/10 bg-white px-4 py-3" placeholder="Amount" />
            <input className="rounded-2xl border border-black/10 bg-white px-4 py-3" placeholder="Transaction ID" />
            <label className="grid min-h-32 place-items-center rounded-3xl border border-dashed border-black/20 bg-[#fff7ec] p-5 text-center text-sm text-[var(--color-muted)]">
              <UploadCloud aria-hidden />
              Upload screenshot from your banking app
              <input type="file" className="sr-only" />
            </label>
            <button className="btn-primary" type="button">Submit for admin review</button>
          </div>
        </form>
        <div className="grid gap-4">
          {impactStats.slice(0, 3).map((stat) => (
            <article className="metric-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
