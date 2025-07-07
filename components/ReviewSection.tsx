"use client";

import React from "react";
import { ReviewCard } from "@/components/ReviewCard";
import Bounded from "@/components/Bounded";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ReviewSection = () => {
  useGSAP(() => {
    gsap.to(".parentContainer", {
      opacity: 1,
      ease: "power4.out",
      duration: 1.5,
      scrollTrigger: {
        trigger: ".parentContainer",
        start: "top 80%",
        // markers: true
      },
    });
  }, []);

  return (
    <Bounded className="parentContainer opacity-0">
      <h1
        className={
          "font-manrope text-brand-black text-center text-3xl font-semibold md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
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
