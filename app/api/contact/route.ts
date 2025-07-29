import {
  businessMailOptions,
  createCustomerContactEmailTemplate,
  createBusinessContactEmailTemplate,
  transporter,
} from "@/lib/nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body: Contact = await req.json();
  const { name, email, phone, subject, message } = await body;

  if (!name || !email || !phone || !subject || !message) {
    return NextResponse.json(
      { message: "Invalid or missing fields" },
      { status: 400 },
    );
  }

  try {
    await transporter.sendMail({
      from: process.env.USER_EMAIL,
      to: email,
      subject: "AIRO FIX - Contact Confirmation",
      html: createCustomerContactEmailTemplate(
        name,
        email,
        phone,
        subject,
        message,
      ),
    });

    await transporter.sendMail({
      ...businessMailOptions,
      subject: "Contact Message Request",
      html: createBusinessContactEmailTemplate(
        name,
        email,
        phone,
        subject,
        message,
      ),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
