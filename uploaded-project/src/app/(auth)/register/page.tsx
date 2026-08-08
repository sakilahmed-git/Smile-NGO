"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("Sending registration request...");

    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, password }),
    });

    const result = await response.json().catch(() => ({ ok: false }));
    setStatus(result.ok ? "Registration request submitted." : "Unable to submit registration.");
  };

  return (
    <main className="page-shell">
      <section className="mx-auto max-w-2xl rounded-[var(--radius-lg)] bg-white p-8 shadow-soft">
        <p className="eyebrow">Become a member</p>
        <h1 className="mt-3 text-3xl font-semibold">Register with SMILE NGO</h1>
        <p className="mt-4 text-sm leading-6 text-[var(--color-muted)]">
          Create an account to join the community, help with events and receive program updates from the field.
        </p>
        <form className="mt-8 grid gap-4" onSubmit={handleSubmit}>
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
            required
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Create password"
            className="rounded-2xl border border-black/10 bg-[#f9f7f2] px-4 py-3"
          />
          <button type="submit" className="btn-primary">
            Register
          </button>
          {status ? <p className="text-sm text-[var(--color-muted)]">{status}</p> : null}
        </form>
        <p className="mt-6 text-sm text-[var(--color-muted)]">
          Already registered? <Link href="/login" className="font-semibold text-[var(--color-brand)]">Login here</Link>.
        </p>
      </section>
    </main>
  );
}
