"use client";

import React, { useRef } from "react";
import { ReviewCard } from "@/components/ReviewCard";
import Bounded from "@/components/Bounded";
import gsap from "gsap"
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger"


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
      }
    })
  }, [])

  return (
    <Bounded className="parentContainer opacity-0">
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
