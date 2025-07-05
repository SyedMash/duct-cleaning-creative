/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Images = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const totalFrames = 191;
  const imagePath = (index: number) => {
    const paddedIndex = String(index).padStart(4, "0");
    return `/images/frames/frame_${paddedIndex}.jpg`;
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#image-container",
        start: "0% 0%",
        end: "1000% 0%",
        scrub: true,
        pin: true,
        markers: true,
      },
    });

    tl.to(
      { frame: 0 },
      {
        frame: totalFrames - 1,
        ease: "none",
        onUpdate: function () {
          const frameIndex = Math.round(this.targets()[0].frame);
          if (imageRef.current) {
            imageRef.current.src = imagePath(frameIndex + 1);
          }
        },
      },
    )
      .from(
        ".germsText",
        { opacity: 0, y: 100, duration: 1, ease: "power4.out" },
        0,
      )
      .to(
        ".blackDiv",
        {
          opacity: 1,
        },
        "-=0.8",
      )
      .to(".blackDivText", { opacity: 1 }, "-=0.4")
      .to(".soDiv", {
        opacity: 1,
      })
      .to(".partyDiv", {
        opacity: 1,
      });
  }, []);

  return (
    <div
      id="image-container"
      className="relative h-screen w-full overflow-hidden"
    >
      <div
        className={
          "blackDiv flex-center bg-brand-black absolute inset-0 z-10 h-full w-full px-4 opacity-0"
        }
      >
        <p
          className={
            "font-manrope germsText blackDivText max-w-4xl text-2xl font-semibold opacity-0 lg:text-3xl xl:text-5xl"
          }
        >
          We’re not just cleaning ducts. We’re restoring the air you live in. At
          AIRO {<span className={"text-brand-green"}>FIX</span>}, we use
          precision tools and eco-friendly methods to eliminate pollutants at
          the source. Because your air should be as clean as your home looks.
        </p>
        <div
          className={
            "soDiv flex-center bg-brand-black absolute inset-0 h-full w-full opacity-0"
          }
        >
          <h1
            className={
              "font-manrope germsText soText max-w-4xl text-2xl font-semibold lg:text-3xl xl:text-5xl"
            }
          >
            SO.
          </h1>
        </div>

        <div
          className={
            "partyDiv flex-center bg-brand-black absolute inset-0 h-full w-full opacity-0"
          }
        >
          <h1
            className={
              "font-manrope germsText soText max-w-4xl px-4 text-2xl font-semibold lg:text-3xl xl:text-5xl"
            }
          >
            No More Parties. We shut it down completely.
          </h1>
        </div>

        <div
          className={
            "cleanVideo bg-brand-black absolute inset-0 h-full w-full opacity-0"
          }
        >
          {/*  video div clean*/}
        </div>
      </div>
      <div
        className={
          "absolute top-2/4 left-4 -translate-y-2/4 space-y-4 md:left-6 lg:left-8 xl:left-12 2xl:left-20"
        }
      >
        <h1
          className={
            "font-manrope germsText max-w-4xl text-2xl font-semibold lg:text-3xl xl:text-5xl"
          }
        >
          Inside Your Duct, It’s a Non-Stop Germ Party.
        </h1>
        <p className={"germsText max-w-6xl text-balance md:text-lg"}>
          While you’re chilling in your living room, thousands of invisible
          guests are dancing through your vents dust mites, mold spores,
          allergens, and bacteria. They’re having the time of their lives. It’s
          time to shut the party down.
        </p>
      </div>
      <img
        ref={imageRef}
        id="scroll-image"
        src={imagePath(1)}
        alt="Scroll Image"
        fetchPriority={"high"}
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default Images;
