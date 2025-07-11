"use client";

import React, { useState } from "react";
import { TextHoverEffect } from "@/components/HoverText";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Pricing = () => {
  const [price, setPrice] = useState("$189");

  useGSAP(() => {
    gsap.to(".pricingParentContainer", {
      opacity: 1,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".pricingParentContainer",
        start: "top 40%",
        // markers: true,
      },
    });
  });

  return (
    <section
      className={
        "flex-center pricingParentContainer relative h-screen flex-col opacity-0"
      }
    >
      <TextHoverEffect text={`${price}`} />

      <div
        className={
          "border-brand-gray/10 font-manrope absolute bottom-5 flex items-center gap-4 rounded-2xl border px-2 py-2 lg:px-6"
        }
      >
        <h1
          className={clsx(
            "cursor-pointer rounded-2xl px-2 py-2 text-sm transition-all duration-500 lg:px-3 lg:text-base",
            price === "$189" && "bg-brand-green text-brand-offwhite",
          )}
          onClick={() => setPrice("$189")}
        >
          1 Unit
        </h1>
        <h1
          className={clsx(
            "cursor-pointer rounded-2xl px-2 py-2 text-sm transition-all duration-500 lg:px-3 lg:text-base",
            price === "$329" && "bg-brand-green text-brand-offwhite",
          )}
          onClick={() => setPrice("$329")}
        >
          2 Unit
        </h1>
        <h1
          className={clsx(
            "cursor-pointer rounded-2xl px-2 py-2 text-sm transition-all duration-500 lg:px-3 lg:text-base",
            price === "$529" && "bg-brand-green text-brand-offwhite",
          )}
          onClick={() => setPrice("$529")}
        >
          3 Unit
        </h1>
        <h1
          className={clsx(
            "cursor-pointer rounded-2xl px-2 py-2 text-sm transition-all duration-500 lg:px-3 lg:text-base",
            price === "+$60" && "bg-brand-green text-brand-offwhite",
          )}
          onClick={() => setPrice("+$60")}
        >
          Dryer Vent
        </h1>
      </div>
    </section>
  );
};
export default Pricing;
