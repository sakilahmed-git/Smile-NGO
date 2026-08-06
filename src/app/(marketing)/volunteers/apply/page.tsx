"use client";

import { useState } from "react";

export default function VolunteerApplyPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [availability, setAvailability] = useState("");
  const [skills, setSkills] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("Submiting your volunteer application...");

    const response = await fetch("/api/volunteers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, location, availability, skills, message }),
    });

    const result = await response.json().catch(() => ({ ok: false }));
    setStatus(result.ok ? "Application submitted successfully." : "Unable to submit application.");
  };

  return (
    <main className="page-shell">
      <section className="rounded-[var(--radius-lg)] bg-white p-8 shadow-soft">
        <p className="eyebrow">Volunteer application</p>
        <h1 className="mt-3 text-4xl font-semibold">Join our community of field volunteers</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--color-muted)]">
          Share your details and availability. SMILE NGO will review your application and contact you with next steps for orientation, field work and community events.
        </p>
      </section>
      <form className="mt-8 grid gap-6 rounded-[var(--radius-lg)] bg-white p-8 shadow-soft" onSubmit={handleSubmit}>
        <div className="grid gap-4 lg:grid-cols-2">
          <input
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Full name"
            className="rounded-2xl border border-black/10 bg-[#f9f7f2] px-4 py-3"
          />
          <input
            required
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email address"
            className="rounded-2xl border border-black/10 bg-[#f9f7f2] px-4 py-3"
          />
          <input
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="Phone number"
            className="rounded-2xl border border-black/10 bg-[#f9f7f2] px-4 py-3"
          />
          <input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="Preferred location"
            className="rounded-2xl border border-black/10 bg-[#f9f7f2] px-4 py-3"
          />
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          <input
            value={availability}
            onChange={(event) => setAvailability(event.target.value)}
            placeholder="Availability or preferred days"
            className="rounded-2xl border border-black/10 bg-[#f9f7f2] px-4 py-3"
          />
          <input
            value={skills}
            onChange={(event) => setSkills(event.target.value)}
            placeholder="Skills or interests"
            className="rounded-2xl border border-black/10 bg-[#f9f7f2] px-4 py-3"
          />
        </div>
        <textarea
          required
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={6}
          placeholder="Why do you want to volunteer?"
          className="rounded-3xl border border-black/10 bg-[#f9f7f2] px-4 py-3 text-sm leading-6"
        />
        <button type="submit" className="btn-primary self-start">
          Submit application
        </button>
        {status ? <p className="text-sm text-[var(--color-muted)]">{status}</p> : null}
      </form>
    </main>
  );
}
