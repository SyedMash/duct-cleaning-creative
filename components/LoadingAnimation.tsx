"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Home() {
  const loaderRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Step 1: Animate stroke draw
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
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
      },
    )
      // Step 2: Fill text
      .to(
        ".char",
        {
          fill: "#0ea5e9", // Sky blue fill
          stroke: "transparent",
          duration: 0.6,
        },
        "<+0.3",
      )
      // Step 3: Fade out loader
      .to(
        loaderRef.current,
        {
          opacity: 0,
          duration: 0.8,
          pointerEvents: "none",
        },
        "+=0.5",
      )
      // Step 4: Fade in homepage
      .fromTo(
        contentRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        "<",
      );
  }, []);

  return (
    <main className="relative">
      {/* Loader */}
      <div
        id="loader"
        ref={loaderRef}
        className="bg-brand-black fixed inset-0 z-50 flex items-center justify-center"
      >
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
            stroke="#0ea5e9" // Sky blue stroke
            fill="transparent"
            letterSpacing="8"
          >
            AIRO FIX
          </text>
        </svg>
      </div>
    </main>
  );
}
