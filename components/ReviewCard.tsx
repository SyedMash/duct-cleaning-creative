"use client";

import { InfiniteMovingCards } from "./MovingCard";

interface ReviewCardProps {
  direction?: "left" | "right";
}

export function ReviewCard({ direction = "left" }: ReviewCardProps) {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-md antialiased">
      <InfiniteMovingCards
        items={testimonials}
        direction={direction}
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "I had no idea how dirty our ducts were until AiroFix showed us. The air feels cleaner, and my allergies are way better now.",
    name: "Sophia R.",
    title: "Homeowner, Dallas TX",
  },
  {
    quote:
      "Top-notch service! The tech arrived on time, explained every step, and left my home spotless after the duct cleaning.",
    name: "James H.",
    title: "Homeowner, Denver CO",
  },
  {
    quote:
      "We manage multiple properties, and AiroFix is now our go-to for air duct cleaning. Fast, reliable, and super professional.",
    name: "Lena V.",
    title: "Property Manager, Phoenix AZ",
  },
  {
    quote:
      "Our toddler was constantly sick — turns out our vents were full of mold. AiroFix cleaned them out and the difference is huge.",
    name: "Brian T.",
    title: "Homeowner, Orlando FL",
  },
  {
    quote:
      "Smooth, respectful, and honest. They didn't try to sell anything extra — just did a solid, clean job. Highly recommend!",
    name: "Aliyah M.",
    title: "Homeowner, Seattle WA",
  },
  {
    quote:
      "Scheduling was easy, and the team arrived on time. Within hours our entire house felt fresher — amazing service.",
    name: "Kevin G.",
    title: "Homeowner, Chicago IL",
  },
  {
    quote:
      "If you want fast, honest, and quality duct cleaning, go with AiroFix. They even showed me before-and-after photos!",
    name: "Jasmine N.",
    title: "Business Owner, Atlanta GA",
  },
];
