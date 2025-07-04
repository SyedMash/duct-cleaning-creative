"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface Props {
  onCompleted?: () => void;
}

export default function Loader({ onCompleted }: Props) {
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.fromTo(
      ".char",
      {
        strokeDasharray: 500,
        strokeDashoffset: 500,
        opacity: 0,
        scale: 1.2,
      },
      {
        strokeDashoffset: 0,
        opacity: 1,
        scale: 1,
        duration: 3,
        stagger: 0.15,
      },
    )
      .to(
        ".char",
        {
          fill: "#fff",
          stroke: "transparent",
          duration: 1,
        },
        "<+0.5",
      )
      .to(".mainDiv", {
        opacity: 0,
        duration: 1,
        onComplete: onCompleted,
      });
  }, []);

  return (
    <div className="bg-brand-black mainDiv fixed z-50 flex h-screen w-full items-center justify-center">
      <svg
        width="70%"
        viewBox="0 0 1200 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="80"
          fontWeight="700"
          className="char"
          stroke="#4ade80"
          fill="transparent"
          letterSpacing="8"
        >
          AERO FIX
        </text>
      </svg>
    </div>
  );
}
