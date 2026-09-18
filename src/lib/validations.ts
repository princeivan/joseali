import { z } from "zod";

/**
 * Shared validation for a booking request. Used both by the API route
 * (server-side, authoritative) and can be reused by the client for
 * early/optimistic validation if needed.
 */
export const bookingServiceValues = [
  "Airport Transfer",
  "SGR Transfer",
  "Other Transfer",
  "Car Hire",
  "Tours & Travel",
  "Bush Safari",
  "Accommodation",
  "Marine Tour",
] as const;

export const bookingRequestSchema = z.object({
  service: z.enum(bookingServiceValues),
  name: z.string().trim().min(2, "Please enter your full name."),
  phone: z.string().trim().min(7, "Please enter a valid phone number."),
  email: z.string().trim().email("Please enter a valid email address.").optional().or(z.literal("")),

  // General transfer-style fields
  pickup: z.string().trim().optional().or(z.literal("")),
  destination: z.string().trim().optional().or(z.literal("")),
  date: z.string().trim().optional().or(z.literal("")),
  time: z.string().trim().optional().or(z.literal("")),
  passengers: z.string().trim().optional().or(z.literal("")),
  flightOrTrainDetails: z.string().trim().optional().or(z.literal("")),

  // Car Hire fields
  vehicleType: z.string().trim().optional().or(z.literal("")),
  hireStartDate: z.string().trim().optional().or(z.literal("")),
  hireEndDate: z.string().trim().optional().or(z.literal("")),
  driverPreference: z.enum(["With Driver", "Self Drive", ""]).optional(),

  // Accommodation fields
  checkInDate: z.string().trim().optional().or(z.literal("")),
  checkOutDate: z.string().trim().optional().or(z.literal("")),
  guests: z.string().trim().optional().or(z.literal("")),
  accommodationPreference: z.string().trim().optional().or(z.literal("")),

  // Tours fields
  tourOrDestination: z.string().trim().optional().or(z.literal("")),
  preferredDate: z.string().trim().optional().or(z.literal("")),
  numberOfPeople: z.string().trim().optional().or(z.literal("")),

  notes: z.string().trim().optional().or(z.literal("")),
  // Honeypot field — real users never fill this in; bots often do.
  website: z.string().max(0, "Spam detected.").optional().or(z.literal("")),
});

export type BookingRequest = z.infer<typeof bookingRequestSchema>;
