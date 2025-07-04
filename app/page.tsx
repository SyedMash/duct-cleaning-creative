"use client";

import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Loader from "@/components/LoadingAnimation";
import React, { useEffect, useState } from "react";
import Bounded from "@/components/Bounded";
import CustomButton from "@/components/CustomButton/CustomButton";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const disableScroll = (e: Event) => e.preventDefault();

    window.addEventListener("wheel", disableScroll, { passive: false });
    window.addEventListener("touchmove", disableScroll, { passive: false });

    if (isLoaded) {
      window.removeEventListener("wheel", disableScroll);
      window.removeEventListener("touchmove", disableScroll);
    }

    return () => {
      window.removeEventListener("wheel", disableScroll);
      window.removeEventListener("touchmove", disableScroll);
    };
  }, [isLoaded]);

  useGSAP(() => {
    const introTl = gsap.timeline({ defaults: { ease: "power4.out" } });
    introTl.to(".img-wrapper", {
      delay: 3,
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: "power4.out",
    });
  }, []);

  return (
    <main className="overflow-hidden">
      {!isLoaded && <Loader onCompleted={() => setIsLoaded(true)} />}
      <section className="bg-brand-black relative z-30 h-screen overflow-hidden">
        <div className="img-wrapper absolute inset-0 scale-110 transform opacity-0">
          <video
            src="/videos/intro-vid.mp4"
            autoPlay={true}
            muted={true}
            loop={true}
            className="size-full scale-150 object-cover"
          />
        </div>
        <div
          className={
            "absolute flex h-full w-full flex-col justify-center bg-black/50 pl-4 backdrop-opacity-30 md:pl-6 lg:px-8 xl:px-12 2xl:px-20"
          }
        >
          <h1
            className={
              "font-manrope text-3xl font-semibold md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-9xl"
            }
          >
            AIRO <span className={"text-brand-green"}>FIX</span>
          </h1>
          <p className={"max-w-4xl text-balance"}>
            Your home deserves more than just clean floors it deserves clean
            air. Our certified duct cleaning service helps you breathe easier by
            eliminating hidden contaminants with precision and care.
          </p>
          <div>
            <CustomButton />
          </div>
        </div>
      </section>

      <Bounded>
        <h1>Hello</h1>
      </Bounded>
    </main>
  );
}
