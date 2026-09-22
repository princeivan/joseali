import { NextRequest, NextResponse } from "next/server";
import { contactRequestSchema } from "@/lib/validations";
import { sendBusinessContactEmail, sendCustomerContactConfirmationEmail } from "@/lib/email";
import { sendWhatsAppContactNotification } from "@/lib/whatsapp";

/**
 * POST /api/contact
 *
 * Receives the contact page enquiry, validates it, and fires off
 * notifications. Same stateless pattern as /api/booking — nothing is
 * written to a database:
 *
 *   1. Validate the payload (zod).
 *   2. Email the business (Resend).
 *   3. WhatsApp the business (Cloud API).
 *   4. If the visitor supplied an email, send them a confirmation.
 *   5. Return success as long as the request itself was valid — a
 *      notification provider failing is logged server-side and never
 *      surfaced to the visitor or allowed to crash the form.
 */
export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactRequestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        message: "Please check the form and try again.",
        fieldErrors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  // Honeypot triggered — silently pretend success so bots don't learn anything.
  if (parsed.data.website) {
    return NextResponse.json({ success: true, message: "Message received." });
  }

  const contact = parsed.data;

  const [businessEmailResult, whatsappResult, customerEmailResult] = await Promise.all([
    sendBusinessContactEmail(contact),
    sendWhatsAppContactNotification(contact),
    contact.email ? sendCustomerContactConfirmationEmail(contact) : Promise.resolve({ success: false, error: "No email supplied" }),
  ]);

  if (!businessEmailResult.success) {
    console.error("[api/contact] Business email notification did not send:", businessEmailResult.error);
  }
  if (!whatsappResult.success) {
    console.error("[api/contact] WhatsApp notification did not send:", whatsappResult.error);
  }
  if (contact.email && !customerEmailResult.success) {
    console.error("[api/contact] Customer confirmation email did not send:", customerEmailResult.error);
  }

  return NextResponse.json({
    success: true,
    message: "Thank you. Your message has been received. Our team will get back to you shortly.",
  });
}
