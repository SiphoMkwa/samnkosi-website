"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "@/components/ui/Button";

const formSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
  organization: z.string().trim().optional(),
  message: z.string().trim().min(10, "Please include a short message."),
  // Honeypot — kept empty by real users, hidden from screen readers/visually.
  company_website: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof formSchema>;

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (values: FormValues) => {
    setStatus("submitting");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setStatusMessage(
          data.error || "Something went wrong. Please try again."
        );
        return;
      }

      setStatus("success");
      setStatusMessage(
        "Thanks — your message has been received. We'll be in touch within one business day."
      );
      reset();
    } catch {
      setStatus("error");
      setStatusMessage(
        "Something went wrong sending your message. Please try again or email us directly."
      );
    }
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-xl bg-[var(--gray)] p-6 text-gray-700"
      >
        {statusMessage}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Honeypot field, hidden from real users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_website">Leave this field empty</label>
        <input
          id="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("company_website")}
        />
      </div>

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Full name
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-[var(--blue)] focus:outline-none focus:ring-1 focus:ring-[var(--blue)]"
          {...register("name")}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-[var(--blue)] focus:outline-none focus:ring-1 focus:ring-[var(--blue)]"
          {...register("email")}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="organization"
          className="block text-sm font-medium text-gray-700"
        >
          Organization <span className="text-gray-400">(optional)</span>
        </label>
        <input
          id="organization"
          type="text"
          autoComplete="organization"
          className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-[var(--blue)] focus:outline-none focus:ring-1 focus:ring-[var(--blue)]"
          {...register("organization")}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-[var(--blue)] focus:outline-none focus:ring-1 focus:ring-[var(--blue)]"
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-600">
          {statusMessage}
        </p>
      )}

      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}
