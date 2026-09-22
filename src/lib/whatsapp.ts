import { BookingRequest, ContactRequest } from "@/lib/validations";
import { siteConfig } from "@/lib/config";

/**
 * WhatsApp Business Platform (Cloud API) notification helper.
 *
 * Server-side only — never import this from a client component. Reads
 * credentials from environment variables (never NEXT_PUBLIC_):
 *
 *   WHATSAPP_PHONE_NUMBER_ID
 *   WHATSAPP_ACCESS_TOKEN
 *   WHATSAPP_BUSINESS_ACCOUNT_ID   (not required to send a message, kept
 *                                   for account-level operations/templates)
 *   WHATSAPP_RECIPIENT_PHONE       (defaults to siteConfig.whatsapp.number)
 *
 * Note: the Cloud API's free-form text endpoint used below only delivers
 * within an open 24-hour customer conversation window. For guaranteed
 * delivery of business notifications in production, register an
 * approved message template with Meta and send that instead — the
 * request shape below can be swapped for a `type: "template"` payload
 * without changing anything that calls this function.
 */

async function sendWhatsAppTextMessage(message: string): Promise<{ success: boolean; error?: string }> {
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;
  const recipient = process.env.WHATSAPP_RECIPIENT_PHONE || siteConfig.whatsapp.number;

  if (!phoneNumberId || !accessToken) {
    console.warn("[whatsapp] Skipping notification — WHATSAPP_PHONE_NUMBER_ID or WHATSAPP_ACCESS_TOKEN not configured.");
    return { success: false, error: "WhatsApp not configured" };
  }

  try {
    const res = await fetch(`https://graph.facebook.com/v20.0/${phoneNumberId}/messages`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: recipient,
        type: "text",
        text: { body: message },
      }),
    });

    if (!res.ok) {
      const errorBody = await res.text();
      console.error("[whatsapp] Notification failed:", res.status, errorBody);
      return { success: false, error: `WhatsApp API responded ${res.status}` };
    }

    return { success: true };
  } catch (err) {
    console.error("[whatsapp] Notification error:", err);
    return { success: false, error: "WhatsApp request failed" };
  }
}

function formatBookingWhatsAppMessage(booking: BookingRequest): string {
  const lines = [
    "🚐 NEW JOSEALI TOURS BOOKING",
    "",
    `Service: ${booking.service}`,
    "",
    "Customer:",
    booking.name,
    "",
    "Phone:",
    booking.phone,
  ];

  if (booking.email) lines.push("", "Email:", booking.email);
  if (booking.pickup) lines.push("", "Pickup:", booking.pickup);
  if (booking.destination) lines.push("", "Destination:", booking.destination);
  if (booking.date || booking.preferredDate || booking.hireStartDate || booking.checkInDate) {
    lines.push("", "Date:", booking.date || booking.preferredDate || booking.hireStartDate || booking.checkInDate || "");
  }
  if (booking.time) lines.push("", "Time:", booking.time);
  if (booking.passengers || booking.numberOfPeople || booking.guests) {
    lines.push("", "Passengers:", booking.passengers || booking.numberOfPeople || booking.guests || "");
  }
  if (booking.vehicleType) lines.push("", "Vehicle Type:", booking.vehicleType);
  if (booking.hireEndDate) lines.push("", "Hire End Date:", booking.hireEndDate);
  if (booking.driverPreference) lines.push("", "Driver Preference:", booking.driverPreference);
  if (booking.checkOutDate) lines.push("", "Check-out Date:", booking.checkOutDate);
  if (booking.accommodationPreference) lines.push("", "Accommodation Preference:", booking.accommodationPreference);
  if (booking.tourOrDestination) lines.push("", "Tour / Destination:", booking.tourOrDestination);
  if (booking.flightOrTrainDetails) lines.push("", "Flight/Train Details:", booking.flightOrTrainDetails);
  if (booking.notes) lines.push("", "Additional Information:", booking.notes);

  lines.push("", "Status:", "BOOKING REQUEST");

  return lines.join("\n");
}

export async function sendWhatsAppBookingNotification(
  booking: BookingRequest
): Promise<{ success: boolean; error?: string }> {
  return sendWhatsAppTextMessage(formatBookingWhatsAppMessage(booking));
}

function formatContactWhatsAppMessage(contact: ContactRequest): string {
  const lines = [
    "✉️ NEW JOSEALI TOURS ENQUIRY",
    "",
    "Name:",
    contact.name,
    "",
    "Phone:",
    contact.phone,
  ];

  if (contact.email) lines.push("", "Email:", contact.email);
  if (contact.service) lines.push("", "Service:", contact.service);
  if (contact.travelDate) lines.push("", "Travel Date:", contact.travelDate);
  lines.push("", "Message:", contact.message);
  lines.push("", "Status:", "CONTACT ENQUIRY");

  return lines.join("\n");
}

export async function sendWhatsAppContactNotification(
  contact: ContactRequest
): Promise<{ success: boolean; error?: string }> {
  return sendWhatsAppTextMessage(formatContactWhatsAppMessage(contact));
}
