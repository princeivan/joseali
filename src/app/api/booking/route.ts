import { NextRequest, NextResponse } from "next/server";
import { bookingRequestSchema } from "@/lib/validations";
import { sendBusinessBookingEmail, sendCustomerConfirmationEmail } from "@/lib/email";
import { sendWhatsAppBookingNotification } from "@/lib/whatsapp";

/**
 * POST /api/booking
 *
 * Receives a booking request, validates it, and fires off notifications.
 * Intentionally stateless — nothing is written to a database. Flow:
 *
 *   1. Validate the payload (zod).
 *   2. Send a notification email to the business (Resend).
 *   3. Send a WhatsApp notification to the business (Cloud API).
 *   4. If the customer supplied an email, send them a confirmation.
 *   5. Return success as long as the request itself was valid — a
 *      notification provider failing doesn't fail the customer's request;
 *      it's logged server-side instead so the frontend never crashes or
 *      shows a raw provider error.
 *
 * Runs as a standard Next.js Route Handler, which deploys as a Vercel
 * serverless function with no extra configuration.
 */
export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: "Invalid request body." }, { status: 400 });
  }

  const parsed = bookingRequestSchema.safeParse(body);
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
    return NextResponse.json({ success: true, message: "Booking request received." });
  }

  const booking = parsed.data;

  const [businessEmailResult, whatsappResult, customerEmailResult] = await Promise.all([
    sendBusinessBookingEmail(booking),
    sendWhatsAppBookingNotification(booking),
    booking.email ? sendCustomerConfirmationEmail(booking) : Promise.resolve({ success: false, error: "No email supplied" }),
  ]);

  if (!businessEmailResult.success) {
    console.error("[api/booking] Business email notification did not send:", businessEmailResult.error);
  }
  if (!whatsappResult.success) {
    console.error("[api/booking] WhatsApp notification did not send:", whatsappResult.error);
  }
  if (booking.email && !customerEmailResult.success) {
    console.error("[api/booking] Customer confirmation email did not send:", customerEmailResult.error);
  }

  // The customer's request reached us and was valid — that's what we
  // promise here. We never expose provider-level failures to them.
  return NextResponse.json({
    success: true,
    message: "Thank you. Your booking request has been received. Our team will contact you shortly.",
  });
}
