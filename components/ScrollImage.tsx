/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import CustomButton from "@/components/CustomButton/CustomButton";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Images = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const secondImageRef = useRef<HTMLImageElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const totalFrames = 191;
  const secondTotalFrames = 221;

  const imagePath = (index: number) => {
    const paddedIndex = String(index).padStart(4, "0");
    return `/images/frames/frame_${paddedIndex}.jpg`;
  };

  const secondImagePath = (index: number) => {
    const paddedIndex = String(index).padStart(4, "0");
    return `/images/clean-frames/frame_${paddedIndex}.jpg`;
  };

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#image-container",
          start: "0% 0%",
          end: "700% 0%",
          scrub: true,
          pin: true,
          // markers: true,
        },
      });

      // tl.to(
      //   { frame: 0 },
      //   {
      //     frame: totalFrames - 1,
      //     ease: "none",
      //     onUpdate: function () {
      //       const frameIndex = Math.round(this.targets()[0].frame);
      //       if (imageRef.current) {
      //         imageRef.current.src = imagePath(frameIndex + 1);
      //       }
      //     },
      //   },
      // )
      tl.from(
        ".germsText",
        {
          opacity: 0,
          y: 100,
          ease: "power4.out",
        },
        0,
      )
        .to(
          ".blackDiv",
          {
            opacity: 1,
          },
          "-=0.1",
        )
        .to(".soDiv", {
          opacity: 1,
        })
        .to(".partyDiv", {
          opacity: 1,
        })
        .to(".secondImageContainer", {
          opacity: 1,
        });
      // .to(
      //   { frame: 0 },
      //   {
      //     frame: secondTotalFrames - 1,
      //     ease: "none",
      //     onUpdate: function () {
      //       const frameIndex = Math.round(this.targets()[0].frame);
      //       if (secondImageRef.current) {
      //         secondImageRef.current.src = secondImagePath(frameIndex + 1);
      //       }
      //     },
      //   },
      // )
      // .to(
      //   ".ctaDiv",
      //   {
      //     opacity: 1,
      //     scale: 1,
      //   },
      //   "-=0.1",
      // );
    });
  }, []);

  return (
    <div
      id="image-container"
      className="relative h-fit w-full overflow-hidden pt-24 lg:h-screen lg:pt-0"
    >
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

      <div
        className={
          "bg-brand-black blackDiv flex-center absolute inset-0 size-full px-4 lg:opacity-0"
        }
      >
        <p
          className={
            "font-manrope blackDivText max-w-4xl text-2xl font-semibold lg:text-3xl xl:text-5xl"
          }
        >
          We’re not just cleaning ducts. We’re restoring the air you live in. At
          AIRO {<span className={"text-brand-green"}>FIX</span>}, we use
          precision tools and eco-friendly methods to eliminate pollutants at
          the source. Because your air should be as clean as your home looks.
        </p>
      </div>

      <div
        className={
          "soDiv flex-center bg-brand-black absolute inset-0 size-full opacity-0"
        }
      >
        <h1
          className={
            "font-manrope blackDivText max-w-4xl text-2xl font-semibold lg:text-3xl xl:text-5xl"
          }
        >
          SO.
        </h1>
      </div>

      <div
        className={
          "partyDiv flex-center bg-brand-black absolute inset-0 size-full px-4 opacity-0"
        }
      >
        <h1
          className={
            "font-manrope blackDivText max-w-4xl text-2xl font-semibold lg:text-3xl xl:text-5xl"
          }
        >
          No More Parties. We shut it down completely.
        </h1>
      </div>

      <div
        className={"secondImageContainer absolute inset-0 size-full opacity-0"}
      >
        <video
          src="/videos/clean.mp4"
          autoPlay={true}
          loop={true}
          muted={true}
          preload={"auto"}
          className={"size-full scale-125 object-cover"}
        />
      </div>

      {/*<div*/}
      {/*  className={*/}
      {/*    "flex-center ctaDiv absolute inset-0 size-full scale-50 flex-col bg-transparent px-4 opacity-0"*/}
      {/*  }*/}
      {/*>*/}
      {/*  <h1*/}
      {/*    className={*/}
      {/*      "font-manrope blackDivText max-w-4xl text-2xl font-semibold lg:text-3xl xl:text-5xl"*/}
      {/*    }*/}
      {/*  >*/}
      {/*    AIRO <span className={"text-brand-green"}>FIX</span>*/}
      {/*  </h1>*/}
      {/*  <p className={"my-4 max-w-6xl text-center text-balance md:text-lg"}>*/}
      {/*    Your home deserves more than just clean floors it deserves clean air.*/}
      {/*    Our certified duct cleaning service helps you breathe easier by*/}
      {/*    eliminating hidden contaminants with precision and care.*/}
      {/*  </p>*/}
      {/*  <div className="flex items-center gap-6 overflow-hidden">*/}
      {/*    <CustomButton*/}
      {/*      text="Book Now"*/}
      {/*      href="/book-service"*/}
      {/*      className="introElement font-manrope! text-sm!"*/}
      {/*    />*/}
      {/*    <CustomButton*/}
      {/*      text="CALL NOW"*/}
      {/*      href="tel:5405158283"*/}
      {/*      className="introElement font-manrope! text-sm!"*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*</div>*/}

      <video
        src="/videos/dance.mp4"
        autoPlay={true}
        loop={true}
        muted={true}
        preload={"auto"}
        className={"size-full object-cover"}
      />
    </div>
  );
};

export default Images;
