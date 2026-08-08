"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  MapPin,
  Users,
} from "lucide-react";

export default function VolunteerApplyPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [availability, setAvailability] = useState("");
  const [skills, setSkills] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (submitting) return;

    setSubmitting(true);
    setStatus("Submitting your volunteer application...");

    try {
      const response = await fetch("/api/volunteers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          location,
          availability,
          skills,
          message,
        }),
      });

      const result = await response.json().catch(() => ({
        ok: false,
      }));

      if (result.ok) {
        setStatus("Application submitted successfully.");

        setName("");
        setEmail("");
        setPhone("");
        setLocation("");
        setAvailability("");
        setSkills("");
        setMessage("");
      } else {
        setStatus("Unable to submit application. Please try again.");
      }
    } catch {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-2xl border border-black/[0.08] bg-[#fafaf8] px-4 py-3.5 text-sm text-[var(--color-foreground)] outline-none transition-all placeholder:text-black/35 focus:border-[var(--color-green)] focus:bg-white focus:ring-4 focus:ring-[var(--color-green)]/[0.07]";

  return (
    <main className="min-h-screen overflow-hidden bg-[var(--color-background)]">
      {/* HERO */}
      <section className="relative border-b border-black/[0.06]">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[var(--color-green)]/[0.06] blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#D6A52A]/[0.05] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 pb-5 pt-5 sm:px-8 md:pb-16 md:pt-24 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--color-green)]/[0.15] bg-[var(--color-green)]/[0.05] px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green)]" />
              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--color-green)]">
                Volunteer with SMILE
              </span>
            </div>

            <h1 className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[var(--color-foreground)] sm:text-5xl md:text-6xl">
              Give your time.
              <br />
              <span className="text-[var(--color-green)]">
                Make it matter.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-6 text-[var(--color-muted)] md:text-base md:leading-7">
              Join a community of people working to create meaningful,
              lasting change. Tell us a little about yourself and how
              you would like to contribute.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="mx-auto max-w-7xl px-5 py-5 sm:px-8 md:py-16 lg:px-10">
        <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-14">
          {/* LEFT INFORMATION */}
          <aside className="lg:sticky lg:top-28">
            <div className="rounded-3xl border border-black/[0.07] bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.045)] md:p-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-green)]">
                Why volunteer?
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[var(--color-foreground)]">
                Be part of something bigger.
              </h2>

              <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                Your time, skills and perspective can help us reach more
                people and strengthen the communities we serve.
              </p>

              <div className="mt-7 space-y-5">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-green)]/[0.08] text-[var(--color-green)]">
                    <HeartHandshake className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold">
                      Meaningful contribution
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-[var(--color-muted)]">
                      Put your time and skills towards work that directly
                      benefits communities.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-green)]/[0.08] text-[var(--color-green)]">
                    <Users className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold">
                      Meet like-minded people
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-[var(--color-muted)]">
                      Work alongside people who care about creating
                      positive change.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-green)]/[0.08] text-[var(--color-green)]">
                    <MapPin className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold">
                      Flexible involvement
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-[var(--color-muted)]">
                      Share your availability and we will find suitable
                      opportunities for you.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-black/[0.06] pt-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--color-muted)]">
                  What happens next?
                </p>

                <div className="mt-4 space-y-3">
                  {[
                    "We review your application",
                    "Our team contacts you",
                    "Orientation and next steps",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black/[0.04] text-[10px] font-bold">
                        {index + 1}
                      </span>

                      <span className="text-xs font-medium text-[var(--color-muted)]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* FORM */}
          <div className="rounded-3xl border border-black/[0.07] bg-white p-5 shadow-[0_16px_55px_rgba(0,0,0,0.055)] sm:p-7 md:p-9">
            <div className="border-b border-black/[0.06] pb-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                Volunteer application
              </p>

              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[var(--color-foreground)] md:text-3xl">
                Tell us about yourself
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--color-muted)]">
                A few details will help our team understand how you would
                like to get involved.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-7 space-y-6"
            >
              {/* PERSONAL DETAILS */}
              <div>
                <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--color-muted)]">
                  Personal details
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-xs font-semibold"
                    >
                      Full name
                    </label>

                    <input
                      id="name"
                      required
                      value={name}
                      onChange={(event) =>
                        setName(event.target.value)
                      }
                      placeholder="Your full name"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-xs font-semibold"
                    >
                      Email address
                    </label>

                    <input
                      id="email"
                      required
                      type="email"
                      value={email}
                      onChange={(event) =>
                        setEmail(event.target.value)
                      }
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-xs font-semibold"
                    >
                      Phone number
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(event) =>
                        setPhone(event.target.value)
                      }
                      placeholder="+91 00000 00000"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="location"
                      className="mb-1.5 block text-xs font-semibold"
                    >
                      Preferred location
                    </label>

                    <input
                      id="location"
                      value={location}
                      onChange={(event) =>
                        setLocation(event.target.value)
                      }
                      placeholder="City or area"
                      className={inputClass}
                    />
                  </div>
                </div>
              </div>

              {/* AVAILABILITY */}
              <div>
                <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--color-muted)]">
                  Your involvement
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="availability"
                      className="mb-1.5 block text-xs font-semibold"
                    >
                      Availability
                    </label>

                    <input
                      id="availability"
                      value={availability}
                      onChange={(event) =>
                        setAvailability(event.target.value)
                      }
                      placeholder="Weekends, evenings, etc."
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="skills"
                      className="mb-1.5 block text-xs font-semibold"
                    >
                      Skills or interests
                    </label>

                    <input
                      id="skills"
                      value={skills}
                      onChange={(event) =>
                        setSkills(event.target.value)
                      }
                      placeholder="Teaching, events, design..."
                      className={inputClass}
                    />
                  </div>
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs font-semibold"
                >
                  Why do you want to volunteer?
                </label>

                <textarea
                  id="message"
                  required
                  value={message}
                  onChange={(event) =>
                    setMessage(event.target.value)
                  }
                  rows={6}
                  placeholder="Tell us what motivates you and how you would like to contribute..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* SUBMIT */}
              <div className="border-t border-black/[0.06] pt-6">
                <button
                  type="submit"
                  disabled={submitting}
                  className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--color-green)] px-5 py-4 text-sm font-bold text-white shadow-[0_10px_30px_rgba(16,185,129,0.18)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_35px_rgba(16,185,129,0.25)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? (
                    "Submitting application..."
                  ) : (
                    <>
                      Submit application
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                <p className="mt-3 text-center text-[10px] leading-5 text-[var(--color-muted)]">
                  By submitting this form, you agree to be contacted by
                  SMILE NGO regarding your volunteer application.
                </p>
              </div>

              {/* STATUS */}
              {status && (
                <div
                  className={`flex items-start gap-3 rounded-2xl border px-4 py-4 ${
                    status.includes("successfully")
                      ? "border-[var(--color-green)]/15 bg-[var(--color-green)]/[0.06]"
                      : status.includes("Submitting")
                        ? "border-black/[0.06] bg-black/[0.025]"
                        : "border-red-500/15 bg-red-500/[0.04]"
                  }`}
                >
                  {status.includes("successfully") && (
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-green)]" />
                  )}

                  <p className="text-xs font-medium leading-5 text-[var(--color-foreground)]">
                    {status}
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}