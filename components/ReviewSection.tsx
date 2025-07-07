"use client";

import React from "react";
import { ReviewCard } from "@/components/ReviewCard";
import Bounded from "@/components/Bounded";

const ReviewSection = () => {
  return (
    <Bounded className="">
      <h1
        className={
          "font-manrope introElement text-center text-3xl font-semibold md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-brand-black"
        }
      >
        Real Stories. Real Results.
      </h1>
      <div className="mt-12 w-full">
        <ReviewCard />
        <ReviewCard direction="right" />
      </div>
    </Bounded>
  );
};
export default ReviewSection;
