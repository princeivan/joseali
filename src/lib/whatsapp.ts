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
 * Sends approved templates using positional body parameters.
 *   WHATSAPP_TEMPLATE_LANGUAGE    (defaults to en_US; must match approval)
 */

async function sendWhatsAppTemplateMessage(
  name: string,
  values: (string | undefined)[]
): Promise<{ success: boolean; error?: string }> {
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;
  const recipient = process.env.WHATSAPP_RECIPIENT_PHONE || siteConfig.whatsapp.number;

  if (!phoneNumberId || !accessToken) {
    console.warn("[whatsapp] Skipping notification — WHATSAPP_PHONE_NUMBER_ID or WHATSAPP_ACCESS_TOKEN not configured.");
    return { success: false, error: "WhatsApp not configured" };
  }

  try {
    const res = await fetch(`https://graph.facebook.com/v26.0/${phoneNumberId}/messages`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: recipient,
        type: "template",
        template: {
          name,
          language: { code: process.env.WHATSAPP_TEMPLATE_LANGUAGE || "en_US" },
          components: [{
            type: "body",
            parameters: values.map((value) => ({
              type: "text",
              text: value?.replace(/[\r\n\t]+/g, " ").trim() || "Not provided",
            })),
          }],
        },
      }),
    });
    const responseText = await res.text();

    let data: {
      error?: { code?: number; message?: string; error_data?: { details?: string } };
      messages?: { id?: string; message_status?: string }[];
    };

    try {
      data = JSON.parse(responseText);
    } catch {
      data = {};
    }
    if (!res.ok) {
      console.error("[whatsapp] Meta API error", {
        status: res.status,
        code: data.error?.code,
        message: data.error?.message,
        details: data.error?.error_data?.details,
      });

      return {
        success: false,
        error: data.error?.message || `HTTP ${res.status}`,
      };
    }

    // console.log("[whatsapp] Meta accepted message", {
    //   messageId: data.messages?.[0]?.id,
    //   status: data.messages?.[0]?.message_status,
    // });

    return { success: true };
  } catch (error) {
    // console.error("[whatsapp] Request exception", error);

    return {
      success: false,
      error: "WhatsApp request failed",
    };
  }
}

export async function sendWhatsAppBookingNotification(
  booking: BookingRequest
): Promise<{ success: boolean; error?: string }> {
  const additionalDetails = [
    ["Email", booking.email],
    ["Vehicle Type", booking.vehicleType],
    ["Hire End Date", booking.hireEndDate],
    ["Driver Preference", booking.driverPreference],
    ["Check-out Date", booking.checkOutDate],
    ["Accommodation Preference", booking.accommodationPreference],
    ["Flight/Train Details", booking.flightOrTrainDetails],
    ["Additional Information", booking.notes],
  ].filter(([, value]) => value).map(([label, value]) => `${label}: ${value}`).join("; ");

  // Body parameters {{1}} through {{9}} in the approved template's order.
  return sendWhatsAppTemplateMessage("joseali_booking_alert", [
    booking.name,
    booking.phone,
    booking.service,
    booking.pickup,
    booking.destination || booking.tourOrDestination,
    booking.date || booking.preferredDate || booking.hireStartDate || booking.checkInDate,
    booking.time,
    booking.passengers || booking.numberOfPeople || booking.guests,
    additionalDetails,
  ]);
}

export async function sendWhatsAppContactNotification(
  contact: ContactRequest
): Promise<{ success: boolean; error?: string }> {
  // Body parameters {{1}} through {{6}} in the approved template's order.
  return sendWhatsAppTemplateMessage("joseali_contact_alert", [
    contact.name,
    contact.phone,
    contact.email,
    contact.service,
    contact.travelDate,
    contact.message,
  ]);
}
