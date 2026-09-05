import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { company } from "@/config/company";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(100, "Please keep your name under 100 characters."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(254, "Please enter a valid email address."),
  organization: z
    .string()
    .trim()
    .max(200, "Please keep your organization under 200 characters.")
    .optional(),
  message: z
    .string()
    .trim()
    .min(10, "Please include a short message.")
    .max(5000, "Please keep your message under 5,000 characters."),
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
  const fromAddress =
    process.env.CONTACT_FROM_EMAIL || "SAMNKOSI Website <onboarding@resend.dev>";
  const toAddress = process.env.CONTACT_TO_EMAIL || company.emails.general;

  if (!resendApiKey) {
    // Fail closed: never report a successful submission when no delivery
    // provider is configured. Do not log the visitor's message or PII.
    console.error(
      "[contact] RESEND_API_KEY is not configured; refusing contact submission."
    );

    return NextResponse.json(
      {
        ok: false,
        delivered: false,
        error:
          "Contact delivery is temporarily unavailable. Please email us directly.",
      },
      { status: 503 }
    );
  }

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + resendApiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromAddress,
        to: [toAddress],
        reply_to: email,
        subject:
          "New enquiry from " +
          name +
          (organization ? " (" + organization + ")" : ""),
        text: [
          "Name: " + name,
          "Email: " + email,
          "Organization: " + (organization || "—"),
          "",
          "Message:",
          message,
        ].join(String.fromCharCode(10)),
      }),
    });

    if (!resendResponse.ok) {
      const errorBody = await resendResponse.text();
      console.error("[contact] Resend API error:", errorBody);

      return NextResponse.json(
        {
          error:
            "We couldn't send your message right now. Please email us directly.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, delivered: true }, { status: 200 });
  } catch (err) {
    console.error("[contact] Failed to send email:", err);

    return NextResponse.json(
      {
        error:
          "We couldn't send your message right now. Please email us directly.",
      },
      { status: 502 }
    );
  }
}
