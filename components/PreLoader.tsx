"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const totalFrames = 11;
const getFramePath = (i: number) =>
  `/images/frame_${String(i).padStart(4, "0")}.jpg`;

export default function Home() {
  const loaderRef = useRef(null);
  const contentRef = useRef(null);
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  // 1. Load all scroll image frames first
  useEffect(() => {
    const loadFrames = async () => {
      const promises = Array.from({ length: totalFrames }, (_, i) => {
        const img = new Image();
        img.src = getFramePath(i + 1);
        return new Promise<void>((resolve) => {
          img.onload = () => resolve();
          img.onerror = () => resolve(); // continue on error
        });
      });

      await Promise.all(promises);
      setAssetsLoaded(true);
    };

    loadFrames();
  }, []);

  // 2. Run loader animation only when assets are ready
  useGSAP(() => {
    if (!assetsLoaded) return;

    const tl = gsap.timeline();

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
      .to(
        ".char",
        {
          fill: "#0ea5e9",
          stroke: "transparent",
          duration: 0.6,
        },
        "<+0.3",
      )
      .to(
        loaderRef.current,
        {
          opacity: 0,
          duration: 0.8,
          pointerEvents: "none",
          onComplete: () => {
            const loader = document.getElementById("loader");
            if (loader) loader.style.display = "none";
          },
        },
        "+=0.5",
      )
      .fromTo(
        contentRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        "<",
      );
  }, [assetsLoaded]);

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
            stroke="#0ea5e9"
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
