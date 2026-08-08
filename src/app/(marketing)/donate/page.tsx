"use client";

import Image from "next/image";
import { CheckCircle2, Copy, HeartHandshake, ShieldCheck, UploadCloud } from "lucide-react";
import { donationDetails, impactStats } from "@/config/content";

export default function DonatePage() {
  return (
    <main className="min-h-screen">

      {/* =========================
          HERO
      ========================== */}
      <section className="page-shell pb-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#063F30] via-[#087653] to-[#229C73] px-6 py-10 text-center text-white shadow-[0_20px_55px_rgba(6,78,59,0.16)] sm:px-10 md:py-12">

          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#F1D080]/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur">
              <HeartHandshake size={28} strokeWidth={1.8} />
            </div>

            <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#F1D080]">
              Support SMILE NGO
            </p>

            <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Your support can create
              <span className="block text-[#F1D080]">
                meaningful change.
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
              Every contribution helps us support communities across Assam
              through education, health, relief, environment and community
              development initiatives.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-white/70">
              <span>✓ Community-led</span>
              <span>✓ Assam-based</span>
              <span>✓ Transparent giving</span>
            </div>
          </div>
        </div>
      </section>


      {/* =========================
          DONATION METHODS
      ========================== */}
      <section className="page-shell pt-4">

        <div className="mb-7 text-center">
          <p className="eyebrow">Choose how you want to give</p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--color-ink)]">
            Make a Donation
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[var(--color-muted)]">
            Donate securely through UPI or direct bank transfer. No payment
            gateway is used on this page.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">

          {/* QR CARD */}
          <article className="overflow-hidden rounded-[2rem] border border-emerald-900/5 bg-white p-5 shadow-[0_12px_35px_rgba(6,78,59,0.07)]">

            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0B8A68]">
                  Fast & easy
                </p>

                <h3 className="mt-1 text-xl font-bold text-[var(--color-ink)]">
                  Scan & Donate
                </h3>
              </div>

              <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-[#087653]">
                <HeartHandshake size={19} />
              </div>
            </div>

           <div className="mt-5 rounded-[1.5rem] border border-emerald-900/5 bg-[#F8FBF9] p-2">
  <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-2xl bg-white shadow-sm">
    <div
      className="absolute inset-0"
      style={{
        width: "190%",
        height: "190%",
        left: "-45%",
        top: "2%",
      }}
    >
      <Image
        src="/upi-qr.jpg"
        alt="SMILE NGO UPI donation QR code"
        fill
        priority
        sizes="60vw"
        className="object-cover"
      />
    </div>
  </div>
</div>
            <div className="mt-5 rounded-2xl bg-emerald-50 px-4 py-3 text-center">
              <p className="text-xs font-semibold text-[#07543D]">
                Scan this QR code using your UPI app
              </p>
              <p className="mt-1 text-[11px] text-[#637067]">
                Verify the recipient name before completing your payment.
              </p>
            </div>
          </article>


          {/* BANK DETAILS */}
          <article className="rounded-[2rem] border border-emerald-900/5 bg-white p-5 shadow-[0_12px_35px_rgba(6,78,59,0.07)] sm:p-6">

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0B8A68]">
                Direct transfer
              </p>

              <h3 className="mt-1 text-2xl font-bold text-[var(--color-ink)]">
                Bank Details
              </h3>

              <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                You can also contribute directly through your banking app.
              </p>
            </div>

            <div className="mt-6 grid gap-3">
              {[
                ["UPI ID", donationDetails.upiId],
                ["Account Name", donationDetails.accountName],
                ["Bank", donationDetails.bank],
                ["IFSC", donationDetails.ifsc],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-emerald-900/5 bg-[#F8FBF9] px-4 py-3.5"
                >
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#637067]">
                      {label}
                    </p>

                    <p className="mt-1 break-all text-sm font-semibold text-[#17211C]">
                      {value}
                    </p>
                  </div>

                  <button
                    type="button"
                    className="grid h-9 w-9 flex-none place-items-center rounded-full bg-white text-[#087653] shadow-sm transition hover:bg-emerald-50"
                    aria-label={`Copy ${label}`}
                  >
                    <Copy size={15} />
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-start gap-3 rounded-2xl border border-[#D9AE55]/20 bg-[#FCF8ED] p-4">
              <ShieldCheck
                size={19}
                className="mt-0.5 flex-none text-[#B88732]"
              />

              <div>
                <p className="text-sm font-bold text-[#6F511C]">
                  Please verify before sending
                </p>

                <p className="mt-1 text-xs leading-5 text-[#806B45]">
                  Check the recipient details carefully in your banking app
                  before confirming the transfer.
                </p>
              </div>
            </div>
          </article>

        </div>
      </section>


      {/* =========================
          IMPACT
      ========================== */}
      <section className="page-shell pt-2">

        <div className="rounded-[2rem] border border-emerald-900/5 bg-[#F7FAF8] p-5 sm:p-7">

          <div className="text-center">
            <p className="eyebrow">Where your support goes</p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--color-ink)]">
              Every contribution matters
            </h2>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
            {impactStats.slice(0, 3).map((stat) => (
              <article
                className="rounded-2xl border border-emerald-900/5 bg-white p-4 text-center shadow-sm"
                key={stat.label}
              >
                <strong className="block text-2xl font-bold text-[#087653]">
                  {stat.value}
                </strong>

                <span className="mt-1 block text-xs font-medium text-[var(--color-muted)]">
                  {stat.label}
                </span>
              </article>
            ))}
          </div>

        </div>
      </section>


      {/* =========================
          UPLOAD PROOF
      ========================== */}
      <section className="page-shell pt-2">

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

          <div>
            <p className="eyebrow">After donating</p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--color-ink)]">
              Help us verify your donation
            </h2>

            <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
              After completing your transfer, submit the transaction details
              and payment proof so our team can review the contribution.
            </p>

            <div className="mt-5 grid gap-3">
              {[
                "Complete your donation through UPI or bank transfer.",
                "Keep your transaction ID or payment confirmation.",
                "Upload the payment proof for administrative review.",
              ].map((item, index) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="grid h-7 w-7 flex-none place-items-center rounded-full bg-emerald-50 text-xs font-bold text-[#087653]">
                    {index + 1}
                  </span>

                  <p className="pt-1 text-sm leading-5 text-[var(--color-muted)]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>


          {/* FORM */}
          <form className="rounded-[2rem] border border-emerald-900/5 bg-white p-5 shadow-[0_12px_35px_rgba(6,78,59,0.07)] sm:p-6">

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0B8A68]">
                Donation verification
              </p>

              <h3 className="mt-1 text-xl font-bold text-[var(--color-ink)]">
                Submit your payment proof
              </h3>
            </div>

            <div className="mt-6 grid gap-4">

              <input
                className="w-full rounded-2xl border border-black/10 bg-[#FBFCFB] px-4 py-3 text-sm outline-none transition focus:border-[#087653] focus:ring-4 focus:ring-emerald-50"
                placeholder="Donor name"
              />

              <input
                className="w-full rounded-2xl border border-black/10 bg-[#FBFCFB] px-4 py-3 text-sm outline-none transition focus:border-[#087653] focus:ring-4 focus:ring-emerald-50"
                placeholder="Donation amount"
                inputMode="decimal"
              />

              <input
                className="w-full rounded-2xl border border-black/10 bg-[#FBFCFB] px-4 py-3 text-sm outline-none transition focus:border-[#087653] focus:ring-4 focus:ring-emerald-50"
                placeholder="Transaction ID"
              />

              <label className="group grid min-h-36 cursor-pointer place-items-center rounded-[1.5rem] border border-dashed border-[#0B6B4D]/25 bg-[#F7FAF8] p-5 text-center transition hover:border-[#087653] hover:bg-emerald-50">

                <div>
                  <div className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-white text-[#087653] shadow-sm">
                    <UploadCloud size={20} />
                  </div>

                  <p className="mt-3 text-sm font-semibold text-[var(--color-ink)]">
                    Upload payment screenshot
                  </p>

                  <p className="mt-1 text-xs text-[var(--color-muted)]">
                    Select an image or payment confirmation
                  </p>
                </div>

                <input
                  type="file"
                  accept="image/*"
                  className="sr-only"
                />
              </label>

              <button
                className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-gradient-to-r from-[#07543D] via-[#159A70] to-[#07543D] px-6 text-sm font-bold text-white shadow-[0_8px_24px_rgba(7,84,61,0.2)] transition hover:-translate-y-0.5"
                type="button"
              >
                Submit for admin review
              </button>

            </div>
          </form>

        </div>
      </section>


      {/* =========================
          FINAL TRUST NOTE
      ========================== */}
      <section className="page-shell pt-0">
        <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-emerald-900/5 bg-white px-5 py-4 text-center sm:flex-row">
          <CheckCircle2
            size={17}
            className="text-[#087653]"
          />

          <p className="text-xs font-medium text-[var(--color-muted)]">
            Donations are reviewed by the SMILE NGO administration before
            related public counters are updated.
          </p>
        </div>
      </section>

    </main>
  );
}