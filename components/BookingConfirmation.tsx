// app/confirmation/page.tsx or a component
"use client";

import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

export default function BookingConfirmation() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-20 text-center">
      {/* Check Icon */}
      <FaCheckCircle className="text-brand-green mb-6 text-6xl" />

      {/* Headline */}
      <h1 className="text-brand-offwhite mb-4 text-3xl font-bold md:text-4xl">
        Booking Confirmed!
      </h1>

      {/* Subtext */}
      <p className="text-brand-offwhite mb-8 max-w-md">
        Thank you for choosing{" "}
        <span className="text-brand-green font-medium">AiroFix</span>. We’ve
        received your booking and will be in touch shortly to confirm the exact
        details. Keep an eye on your email for your appointment info!
      </p>

      {/* CTA */}
      <Link
        href="/"
        className="inline-block rounded-full bg-brand-green px-6 py-3 font-semibold text-brand-black transition hover:opacity-90"
      >
        Return to Homepage
      </Link>
    </div>
  );
}
