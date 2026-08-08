"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const assistanceRequestSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z
    .string()
    .min(10, "Enter a valid phone number")
    .max(15, "Enter a valid phone number"),
  documentType: z.string().min(1, "Please select a document type"),
  message: z.string().max(500, "Keep it under 500 characters").optional(),
});

type AssistanceRequestInput = z.infer<typeof assistanceRequestSchema>;

const documentOptions = [
  "Society/Trust registration",
  "12A and 80G registration",
  "FCRA registration",
  "PAN card of the organization",
  "Other / not sure",
];

export function AssistanceRequestForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AssistanceRequestInput>({
    resolver: zodResolver(assistanceRequestSchema),
  });

  async function onSubmit(data: AssistanceRequestInput) {
    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "assistance-request",
          ...data,
        }),
      });
      if (!response.ok) throw new Error("Request failed");
      setSubmitted(true);
      reset();
    } catch {
      setSubmitted(false);
    }
  }

  if (submitted) {
    return (
      <article className="soft-card">
        <p className="eyebrow">Request sent</p>
        <h2 className="mt-2 text-xl font-semibold">Thank you</h2>
        <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
          Our team has received your request and will get back to you shortly at the phone
          number you provided.
        </p>
        <button
          type="button"
          className="btn-secondary mt-5"
          onClick={() => setSubmitted(false)}
        >
          Send another request
        </button>
      </article>
    );
  }

  return (
    <article className="soft-card">
      <p className="eyebrow">Need help</p>
      <h2 className="mt-2 text-xl font-semibold">Need any document prepared?</h2>
      <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
        Tell us what you need and our team will help you prepare or obtain it.
      </p>
      <form className="mt-5 grid gap-4" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-field">
          <label htmlFor="assistance-name">Full name</label>
          <input id="assistance-name" type="text" {...register("name")} />
          {errors.name ? <span className="field-error">{errors.name.message}</span> : null}
        </div>

        <div className="form-field">
          <label htmlFor="assistance-phone">Phone number</label>
          <input id="assistance-phone" type="tel" {...register("phone")} />
          {errors.phone ? <span className="field-error">{errors.phone.message}</span> : null}
        </div>

        <div className="form-field">
          <label htmlFor="assistance-document">Document you need help with</label>
          <select id="assistance-document" {...register("documentType")} defaultValue="">
            <option value="" disabled>
              Select a document
            </option>
            {documentOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.documentType ? (
            <span className="field-error">{errors.documentType.message}</span>
          ) : null}
        </div>

        <div className="form-field">
          <label htmlFor="assistance-message">Additional details (optional)</label>
          <textarea id="assistance-message" rows={3} {...register("message")} />
          {errors.message ? <span className="field-error">{errors.message.message}</span> : null}
        </div>

        <button type="submit" className="btn-primary" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Request Assistance"}
        </button>
      </form>
    </article>
  );
}