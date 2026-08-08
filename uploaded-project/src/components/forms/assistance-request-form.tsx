"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { documentsChecklist } from "@/config/content";

const schema = z.object({
  name: z.string().min(2, "Enter your full name"),
  phone: z.string().optional(),
  email: z.string().email("Enter a valid email").optional().or(z.literal("")),
  orgName: z.string().optional(),
  serviceNeeded: z.string().min(1, "Select a document or service"),
  query: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export function AssistanceRequestForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { serviceNeeded: documentsChecklist[0] },
  });

  async function onSubmit(values: FormValues) {
    // TODO: wire to messages.service.ts / Firestore "messages" collection
    await new Promise((resolve) => setTimeout(resolve, 400));
    setSubmitted(true);
    reset();
  }

  return (
    <aside className="soft-card h-fit">
      <h3 className="text-lg font-semibold">Need any document prepared?</h3>
      <p className="mt-1 text-sm leading-6 text-[var(--color-muted)]">
        Registration, 12A, 80G, NGO Darpan, CSR-1, audit or anything else — send your query and our expert
        team will contact you.
      </p>

      {submitted ? (
        <p className="mt-5 rounded-2xl bg-[#f4fbf6] p-4 text-sm font-medium text-[var(--color-green)]">
          Thanks — your request has been received. We'll get back to you shortly.
        </p>
      ) : (
        <form className="mt-5 grid gap-4" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="form-field">
            <label htmlFor="name">Your name *</label>
            <input id="name" placeholder="Full name" {...register("name")} />
            {errors.name ? <p className="text-xs text-[var(--color-brand-strong)]">{errors.name.message}</p> : null}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="form-field">
              <label htmlFor="phone">Phone</label>
              <input id="phone" placeholder="+91 ..." {...register("phone")} />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="you@example.com" {...register("email")} />
              {errors.email ? <p className="text-xs text-[var(--color-brand-strong)]">{errors.email.message}</p> : null}
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="orgName">Your society / NGO name</label>
            <input id="orgName" placeholder="Organization name (if any)" {...register("orgName")} />
          </div>

          <div className="form-field">
            <label htmlFor="serviceNeeded">Document / service needed *</label>
            <select id="serviceNeeded" {...register("serviceNeeded")}>
              {documentsChecklist.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="query">Your query</label>
            <textarea id="query" rows={3} placeholder="Tell us briefly what you need..." {...register("query")} />
          </div>

          <button type="submit" className="btn-primary w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send my request"}
          </button>
          <p className="text-center text-xs text-[var(--color-muted)]">
            Handled by the SMILE NGO team. No obligation — we reply with the process, timeline and cost first.
          </p>
        </form>
      )}
    </aside>
  );
}
