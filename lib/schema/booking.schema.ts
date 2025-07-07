import * as z from "zod";

export const BookingSchema = z.object({
  name: z.string().min(6, { message: "Name is required" }),
  email: z.string().email({ message: "Email is required" }),
  phone: z.string().min(7, { message: "Phone is required" }),
  addressLine1: z.string().min(1, { message: "Address is required" }),
  addressLine2: z.string().optional(),
  country: z.string().min(1, { message: "Country is required" }),
  state: z.string().min(1, { message: "State is required" }),
  city: z.string().min(1, { message: "City is required" }),
  postalCode: z.string().min(5, { message: "Postal code is required" }),
  service: z.string().min(1, { message: "Service is required" }),
});
