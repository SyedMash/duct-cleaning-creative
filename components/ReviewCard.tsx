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
      "Fast, professional, and affordable! My garage door was stuck, and they fixed it within an hour. Highly recommend!",
    name: "John D.",
    title: "Homeowner, Dallas TX",
  },
  {
    quote:
      "Excellent service! The technician arrived on time and explained everything clearly before fixing my garage door.",
    name: "Sarah M.",
    title: "Homeowner, Plano TX",
  },
  {
    quote:
      "Super friendly team and reasonable prices. They even helped me choose a better garage door opener. Thank you!",
    name: "Mike B.",
    title: "Business Owner, Fort Worth TX",
  },
  {
    quote:
      "I called in the morning and by the afternoon my garage door was working perfectly. Amazing experience!",
    name: "Lisa K.",
    title: "Homeowner, Arlington TX",
  },
  {
    quote:
      "Highly professional and trustworthy. They didn't try to upsell unnecessary parts, just fixed what was needed.",
    name: "David S.",
    title: "Homeowner, Frisco TX",
  },
  {
    quote:
      "Smooth experience from start to finish. Scheduling was easy and the repair was quick!",
    name: "Emma W.",
    title: "Property Manager, Irving TX",
  },
  {
    quote:
      "Best garage door service I've ever used. Honest, fast, and fairly priced. Will definitely use again!",
    name: "Chris P.",
    title: "Homeowner, McKinney TX",
  },
];
