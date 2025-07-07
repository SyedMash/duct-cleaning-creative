import { NextRequest, NextResponse } from "next/server";
import {
  businessMailOptions,
  transporter,
  createCustomerEmailTemplate,
  createBusinessEmailTemplate,
} from "@/lib/nodemailer";

export async function POST(req: NextRequest) {
  const body: BookService = await req.json();
  const {
    name,
    email,
    service,
    phone,
    addressLine1,
    addressLine2,
    country,
    city,
    state,
    postalCode,
  } = body;

  console.log(body);

  if (!name || !email || !service || !phone) {
    return NextResponse.json({ message: "invalid fields" }, { status: 400 });
  }

  try {
    // Send confirmation email to customer
    await transporter.sendMail({
      from: process.env.USER_EMAIL,
      to: email,
      subject: "AIRO FIX - Booking Confirmation",
      html: createCustomerEmailTemplate(name, email, service),
    }); 

    // Send notification email to business
    await transporter.sendMail({
      ...businessMailOptions,
      subject: "New Service Booking - AIRO FIX",
      html: createBusinessEmailTemplate(
        name,
        email,
        service,
        phone,
        addressLine1,
        addressLine2 || "not given",
        country,
        state,
        city,
        postalCode,
      ),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
