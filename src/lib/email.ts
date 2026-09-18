import { Resend } from "resend";
import { BookingRequest } from "@/lib/validations";
import { siteConfig } from "@/lib/config";

/**
 * Transactional email via Resend. Server-side only — RESEND_API_KEY is
 * read from process.env and must never be exposed with a NEXT_PUBLIC_
 * prefix.
 */

function getResendClient(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[email] Skipping — RESEND_API_KEY not configured.");
    return null;
  }
  return new Resend(apiKey);
}

function row(label: string, value?: string) {
  if (!value) return "";
  return `<tr><td style="padding:6px 0;color:#5C6E66;font-size:13px;width:160px;vertical-align:top;">${label}</td><td style="padding:6px 0;color:#10231B;font-size:14px;">${escapeHtml(value)}</td></tr>`;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function businessEmailHtml(booking: BookingRequest): string {
  const rows = [
    row("Service", booking.service),
    row("Customer", booking.name),
    row("Phone", booking.phone),
    row("Email", booking.email),
    row("Pickup", booking.pickup),
    row("Destination", booking.destination),
    row("Date", booking.date || booking.preferredDate || booking.hireStartDate || booking.checkInDate),
    row("Time", booking.time),
    row("Passengers", booking.passengers || booking.numberOfPeople || booking.guests),
    row("Vehicle Type", booking.vehicleType),
    row("Hire End Date", booking.hireEndDate),
    row("Driver Preference", booking.driverPreference),
    row("Check-out Date", booking.checkOutDate),
    row("Accommodation Preference", booking.accommodationPreference),
    row("Tour / Destination", booking.tourOrDestination),
    row("Flight/Train Details", booking.flightOrTrainDetails),
    row("Additional Information", booking.notes),
  ].join("");

  return `
  <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;">
    <div style="background:#0B5D3B;padding:20px 24px;border-radius:8px 8px 0 0;">
      <p style="margin:0;color:#ffffff;font-size:18px;font-weight:700;">New Booking Request</p>
      <p style="margin:4px 0 0;color:#EEF8F2;font-size:13px;">${siteConfig.name}</p>
    </div>
    <div style="border:1px solid #DCE7E2;border-top:none;border-radius:0 0 8px 8px;padding:20px 24px;">
      <table style="width:100%;border-collapse:collapse;">${rows}</table>
      <p style="margin-top:20px;padding-top:14px;border-top:1px solid #DCE7E2;color:#075985;font-size:13px;font-weight:700;">
        STATUS: BOOKING REQUEST — not yet confirmed
      </p>
    </div>
  </div>`;
}

function customerEmailHtml(booking: BookingRequest): string {
  return `
  <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;">
    <div style="background:#0B5D3B;padding:20px 24px;border-radius:8px 8px 0 0;">
      <p style="margin:0;color:#ffffff;font-size:18px;font-weight:700;">${siteConfig.name}</p>
      <p style="margin:4px 0 0;color:#EEF8F2;font-size:13px;">${siteConfig.tagline}</p>
    </div>
    <div style="border:1px solid #DCE7E2;border-top:none;border-radius:0 0 8px 8px;padding:24px;">
      <p style="color:#10231B;font-size:15px;">Hi ${escapeHtml(booking.name.split(" ")[0] || booking.name)},</p>
      <p style="color:#3A4A43;font-size:14px;line-height:1.6;">
        Thank you for your booking request with ${siteConfig.name}. We've received your
        request for <strong>${escapeHtml(booking.service)}</strong> and our team will be
        in touch shortly to confirm availability and the final fare.
      </p>
      <p style="color:#3A4A43;font-size:14px;line-height:1.6;">
        This is a booking <strong>request</strong>, not a confirmed booking — we'll follow
        up by phone, email or WhatsApp to finalise the details.
      </p>
      <p style="color:#3A4A43;font-size:14px;line-height:1.6;">
        In the meantime, you can reach us directly on
        <strong>${siteConfig.contact.phoneDisplay}</strong> or via WhatsApp.
      </p>
      <p style="margin-top:24px;color:#10231B;font-size:14px;">— The ${siteConfig.name} team</p>
    </div>
  </div>`;
}

export async function sendBusinessBookingEmail(
  booking: BookingRequest
): Promise<{ success: boolean; error?: string }> {
  const resend = getResendClient();
  const businessEmail = process.env.BOOKING_EMAIL || siteConfig.contact.email;
  if (!resend) return { success: false, error: "Email not configured" };

  try {
    const { error } = await resend.emails.send({
      from: `${siteConfig.name} Bookings <bookings@${new URL(siteConfig.url).hostname}>`,
      to: businessEmail,
      subject: `New Booking Request — ${siteConfig.name}`,
      html: businessEmailHtml(booking),
    });
    if (error) {
      console.error("[email] Business notification failed:", error);
      return { success: false, error: error.message };
    }
    return { success: true };
  } catch (err) {
    console.error("[email] Business notification error:", err);
    return { success: false, error: "Email request failed" };
  }
}

export async function sendCustomerConfirmationEmail(
  booking: BookingRequest
): Promise<{ success: boolean; error?: string }> {
  if (!booking.email) return { success: false, error: "No customer email supplied" };
  const resend = getResendClient();
  if (!resend) return { success: false, error: "Email not configured" };

  try {
    const { error } = await resend.emails.send({
      from: `${siteConfig.name} <bookings@${new URL(siteConfig.url).hostname}>`,
      to: booking.email,
      subject: `Booking Request Received — ${siteConfig.name}`,
      html: customerEmailHtml(booking),
    });
    if (error) {
      console.error("[email] Customer confirmation failed:", error);
      return { success: false, error: error.message };
    }
    return { success: true };
  } catch (err) {
    console.error("[email] Customer confirmation error:", err);
    return { success: false, error: "Email request failed" };
  }
}
