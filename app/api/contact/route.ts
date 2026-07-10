import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { company } from "@/config/company";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
  organization: z.string().trim().optional(),
  message: z.string().trim().min(10, "Please include a short message."),
  // Honeypot field — real users never fill this in; bots usually do.
  company_website: z.string().max(0).optional(),
});

export async function POST(request: NextRequest) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid submission." },
      { status: 400 }
    );
  }

  const { name, email, organization, message } = parsed.data;

  const resendApiKey = process.env.RESEND_API_KEY;
  const toAddress = process.env.CONTACT_TO_EMAIL || company.emails.general;

  if (!resendApiKey) {
    // No email provider configured yet. Log server-side so the submission
    // isn't silently lost during development, but let the caller know
    // delivery isn't actually wired up.
    console.warn(
      "[contact] RESEND_API_KEY not set — submission received but not emailed:",
      { name, email, organization, message }
    );

    return NextResponse.json(
      {
        ok: true,
        delivered: false,
        note: "Submission logged, but no email provider is configured yet.",
      },
      { status: 200 }
    );
  }

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || "SAMNKOSI Website <onboarding@resend.dev>",
        to: [toAddress],
        reply_to: email,
        subject: `New enquiry from ${name}${organization ? ` (${organization})` : ""}`,
        text: `Name: ${name}\nEmail: ${email}\nOrganization: ${organization || "—"}\n\nMessage:\n${message}`,
      }),
    });

    if (!resendResponse.ok) {
      const errorBody = await resendResponse.text();
      console.error("[contact] Resend API error:", errorBody);

      return NextResponse.json(
        { error: "We couldn't send your message right now. Please email us directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, delivered: true }, { status: 200 });
  } catch (err) {
    console.error("[contact] Failed to send email:", err);

    return NextResponse.json(
      { error: "We couldn't send your message right now. Please email us directly." },
      { status: 502 }
    );
  }
}
