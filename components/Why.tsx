"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import CustomButton from "./CustomButton/CustomButton";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Why = () => {
  const parentContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      gsap.to(".whyText", {
        opacity: 1,
        ease: "power4.out",
        duration: 1,
        scrollTrigger: {
          trigger: parentContainerRef.current,
          start: "top 60%",
          // markers: true,
        },
      });

      const tl = gsap.timeline({
        defaults: {
          ease: "power4.out",
          duration: 1.5,
        },
        scrollTrigger: {
          trigger: parentContainerRef.current,
          start: "0% 0%",
          end: "500% 0%",
          scrub: true,
          pin: true,
          // markers: true,
        },
      });

      tl.to(
        ".card1",
        {
          top: "50%",
        },
        "c1",
      )
        // .to(
        //   "body",
        //   {
        //     background: "#111117",
        //   },
        //   "c1",
        // )
        // .to(
        //   ".headingText",
        //   {
        //     color: "white",
        //   },
        //   "c1",
        // )
        .to(".card2", {
          top: "51%",
        })
        .to(".card3", {
          top: "52%",
        })
        .to(".card4", {
          top: "53%",
        })
        .to(".card5", {
          top: "54%",
        })
        .to(".card5", {
          width: "100vw",
          height: "100vh",
          borderRadius: "0%",
          top: 0,
          left: 0,
          xPercent: 0,
          yPercent: 0,
          transform: "none",
        });
    });

    mm.add("(max-width: 1024px)", () => {
      gsap.to(".whyElement", {
        opacity: 1,
        ease: "power4.out",
        duration: 1,
        stagger: 0.25,
        scrollTrigger: {
          trigger: parentContainerRef.current,
          start: "top 60%",
          // markers: true
        },
      });
    });
  }, []);

  return (
    <section
      className={
        "text-brand-offwhite gird relative min-h-screen grid-cols-1 gap-6 overflow-hidden px-4 py-12 lg:h-screen"
      }
      ref={parentContainerRef}
    >
      <h1
        className={
          "font-manrope whyElement serviceText whyText headingText text-center text-3xl font-semibold capitalize opacity-0 md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl"
        }
      >
        WHY AIRO <span className={"text-sky-500"}>FIX</span>?
      </h1>

      <div
        className={
          "card1 whyElement relative my-6 h-48 overflow-hidden rounded-2xl opacity-0 lg:absolute lg:top-[190vh] lg:left-2/4 lg:my-0 lg:h-[70vh] lg:w-[80vw] lg:-translate-x-2/4 lg:-translate-y-2/4 lg:transform lg:opacity-100"
        }
      >
        <Image
          src={"/images/frame_0002.png"}
          alt={"apart"}
          fill={true}
          className={"object-cover object-top"}
        />
        <div
          className={
            "bg-brand-black/50 text-brand-offwhite flex-center absolute inset-0 size-full flex-col backdrop-blur-[2px]"
          }
        >
          <h1
            className={
              "font-manrope serviceText whyText text-center text-xl font-semibold capitalize md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl"
            }
          >
            What Sets Us Apart
          </h1>
          <p
            className={"max-w-5xl text-center text-sm text-balance md:text-lg"}
          >
            We use high-grade tools and industry-proven techniques to deliver
            deep, lasting duct cleaning not surface-level dusting. It’s
            precision that shows in every breath.
          </p>
        </div>
      </div>
      <div
        className={
          "card2 whyElement relative h-48 overflow-hidden rounded-2xl opacity-0 lg:absolute lg:top-[190vh] lg:left-2/4 lg:h-[70vh] lg:w-[80vw] lg:-translate-x-2/4 lg:-translate-y-2/4 lg:transform lg:opacity-100"
        }
      >
        <Image
          src={"/images/frame_0004.png"}
          alt={"apart"}
          fill={true}
          className={"object-cover"}
        />
        <div
          className={
            "bg-brand-black/50 text-brand-offwhite flex-center absolute inset-0 size-full flex-col backdrop-blur-[2px]"
          }
        >
          <h1
            className={
              "font-manrope serviceText whyText text-center text-xl font-semibold capitalize md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl"
            }
          >
            Eco-Friendly Methods
          </h1>
          <p
            className={"max-w-5xl text-center text-sm text-balance md:text-lg"}
          >
            Your health matters and so does the planet. We use non-toxic,
            eco-safe solutions that clean thoroughly without filling your space
            with harsh chemicals.
          </p>
        </div>
      </div>
      <div
        className={
          "card3 whyElement relative my-6 h-48 overflow-hidden rounded-2xl opacity-0 lg:absolute lg:top-[190vh] lg:left-2/4 lg:my-0 lg:h-[70vh] lg:w-[80vw] lg:-translate-x-2/4 lg:-translate-y-2/4 lg:transform lg:opacity-100"
        }
      >
        <Image
          src={"/images/frame_0010.png"}
          alt={"apart"}
          fill={true}
          className={"object-cover"}
        />
        <div
          className={
            "bg-brand-black/50 text-brand-offwhite flex-center absolute inset-0 size-full flex-col backdrop-blur-[2px]"
          }
        >
          <h1
            className={
              "font-manrope serviceText whyText text-center text-xl font-semibold capitalize md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl"
            }
          >
            Certified Technicians
          </h1>
          <p
            className={"max-w-5xl text-center text-sm text-balance md:text-lg"}
          >
            Every technician is trained, certified, and background-checked.
            Expect professional service, respectful conduct, and results you can
            trust.
          </p>
        </div>
      </div>
      <div
        className={
          "card4 whyElement relative my-6 h-48 overflow-hidden rounded-2xl opacity-0 lg:absolute lg:top-[190vh] lg:left-2/4 lg:my-0 lg:h-[70vh] lg:w-[80vw] lg:-translate-x-2/4 lg:-translate-y-2/4 lg:transform lg:opacity-100"
        }
      >
        <Image
          src={"/images/frame_0009.png"}
          alt={"apart"}
          fill={true}
          className={"object-cover"}
        />
        <div
          className={
            "bg-brand-black/50 text-brand-offwhite flex-center absolute inset-0 size-full flex-col backdrop-blur-[2px]"
          }
        >
          <h1
            className={
              "font-manrope serviceText whyText text-center text-xl font-semibold capitalize md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl"
            }
          >
            Our Promise
          </h1>
          <p
            className={"max-w-5xl text-center text-sm text-balance md:text-lg"}
          >
            We’re here to restore the air you live in. From the moment we arrive
            to the last vent cleaned, your comfort, safety, and satisfaction are
            our priority.
          </p>
        </div>
      </div>
      <div
        className={
          "card5 whyElement relative my-6 h-48 overflow-hidden rounded-2xl opacity-0 lg:absolute lg:top-[190vh] lg:left-2/4 lg:my-0 lg:h-[70vh] lg:w-[80vw] lg:-translate-x-2/4 lg:-translate-y-2/4 lg:transform lg:opacity-100"
        }
      >
        <Image
          src={"/images/frame_0006.jpg"}
          alt={"offer"}
          fill={true}
          className={"object-cover"}
        />
        <div className="bg-brand-black/50 text-brand-offwhite flex-center absolute inset-0 size-full flex-col backdrop-blur-[2px]">
          <h1
            className={
              "font-manrope serviceText whyText text-center text-xl font-semibold capitalize md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl"
            }
          >
            Limited Time Offer
          </h1>
          <p
            className={"max-w-5xl text-center text-sm text-balance md:text-lg"}
          >
            Grab the limited time offer. Just for{" "}
            <span className="text-brand-green font-manrope text-xl font-bold lg:text-2xl">
              $189
            </span>
          </p>
          <div className="mt-6 flex items-center gap-6 overflow-hidden">
            <CustomButton
              text="Book Now"
              href="/book"
              className="font-manrope! text-sm!"
            />
            <CustomButton
              text="CALL NOW"
              href="tel:5405158283"
              className="font-manrope! text-sm!"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Why;
