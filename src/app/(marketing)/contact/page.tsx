"use client";

import { useState } from "react";
import { SectionPage } from "@/components/sections/section-page";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("Sending your message...");

    const response = await fetch("/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, subject, message }),
    });

    const result = await response.json().catch(() => ({ ok: false }));
    setStatus(result.ok ? "Message sent successfully." : "Unable to send message.");
  };

  return (
    <main className="page-shell">
      <SectionPage id="contact" />
      <section className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
        <article className="rounded-[var(--radius-lg)] bg-white p-8 shadow-soft">
          <p className="eyebrow">Get help</p>
          <h1 className="mt-3 text-3xl font-semibold">Send a message to SMILE NGO</h1>
          <p className="mt-4 text-sm leading-6 text-[var(--color-muted)]">
            Have a question, want to volunteer, or need assistance? Use the form below and our team will respond as soon as possible.
          </p>
          <div className="mt-8 grid gap-4 text-sm text-[var(--color-muted)]">
            <p><strong>Email:</strong> support@smilengo.org</p>
            <p><strong>Phone:</strong> +91 7002372041</p>
            <p><strong>Office:</strong> Burichatam No.1, Gossaigaon, Kokrajhar, Assam</p>
          </div>
        </article>
        <form className="rounded-[var(--radius-lg)] bg-white p-8 shadow-soft" onSubmit={handleSubmit}>
          <p className="eyebrow">Message form</p>
          <div className="mt-6 grid gap-4">
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
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
              placeholder="Subject"
              className="rounded-2xl border border-black/10 bg-[#f9f7f2] px-4 py-3"
            />
            <textarea
              required
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              rows={6}
              placeholder="Write your message here..."
              className="rounded-3xl border border-black/10 bg-[#f9f7f2] px-4 py-3 text-sm leading-6"
            />
            <button type="submit" className="btn-primary">
              Send message
            </button>
            {status ? <p className="text-sm text-[var(--color-muted)]">{status}</p> : null}
          </div>
        </form>
      </section>
    </main>
  );
}
