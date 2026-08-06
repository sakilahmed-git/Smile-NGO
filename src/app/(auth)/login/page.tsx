"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("Sending login request...");

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json().catch(() => ({ ok: false }));
    setStatus(result.ok ? "Login request sent successfully." : "Unable to send login request.");
  };

  return (
    <main className="page-shell">
      <section className="mx-auto max-w-2xl rounded-[var(--radius-lg)] bg-white p-8 shadow-soft">
        <p className="eyebrow">Member access</p>
        <h1 className="mt-3 text-3xl font-semibold">Login to your account</h1>
        <p className="mt-4 text-sm leading-6 text-[var(--color-muted)]">
          Access updates, manage volunteering and make donation submissions through your secure account.
        </p>
        <form className="mt-8 grid gap-4" onSubmit={handleSubmit}>
          <input
            required
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email address"
            className="rounded-2xl border border-black/10 bg-[#f9f7f2] px-4 py-3"
          />
          <input
            required
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            className="rounded-2xl border border-black/10 bg-[#f9f7f2] px-4 py-3"
          />
          <button type="submit" className="btn-primary">
            Submit
          </button>
          {status ? <p className="text-sm text-[var(--color-muted)]">{status}</p> : null}
        </form>
        <p className="mt-6 text-sm text-[var(--color-muted)]">
          New to SMILE NGO? <Link href="/register" className="font-semibold text-[var(--color-brand)]">Create an account</Link>.
        </p>
      </section>
    </main>
  );
}
