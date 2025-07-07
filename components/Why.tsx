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
        markers: true,
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
  }, []);

  return (
    <section
      className={"text-brand-black relative h-screen overflow-hidden py-12"}
      ref={parentContainerRef}
    >
      <h1
        className={
          "font-manrope serviceText whyText headingText text-center text-3xl font-semibold capitalize opacity-0 md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl"
        }
      >
        WHY AIRO <span className={"text-sky-500"}>FIX</span>?
      </h1>

      <div
        className={
          "card1 absolute top-[190vh] left-2/4 h-[70vh] w-[80vw] -translate-x-2/4 -translate-y-2/4 transform overflow-hidden rounded-2xl"
        }
      >
        <Image
          src={"/images/apart.png"}
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
              "font-manrope serviceText whyText text-center text-3xl font-semibold capitalize md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl"
            }
          >
            What Sets Us Apart
          </h1>
          <p className={"max-w-5xl text-center text-balance md:text-lg"}>
            We use high-grade tools and industry-proven techniques to deliver
            deep, lasting duct cleaning not surface-level dusting. It’s
            precision that shows in every breath.
          </p>
        </div>
      </div>
      <div
        className={
          "card2 absolute top-[190vh] left-2/4 h-[70vh] w-[80vw] -translate-x-2/4 -translate-y-2/4 transform overflow-hidden rounded-2xl"
        }
      >
        <Image
          src={"/images/eco.png"}
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
              "font-manrope serviceText whyText text-center text-3xl font-semibold capitalize md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl"
            }
          >
            Eco-Friendly Methods
          </h1>
          <p className={"max-w-5xl text-center text-balance md:text-lg"}>
            Your health matters and so does the planet. We use non-toxic,
            eco-safe solutions that clean thoroughly without filling your space
            with harsh chemicals.
          </p>
        </div>
      </div>
      <div
        className={
          "card3 absolute top-[190vh] left-2/4 h-[70vh] w-[80vw] -translate-x-2/4 -translate-y-2/4 transform rounded-2xl"
        }
      >
        <Image
          src={"/images/uni.png"}
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
              "font-manrope serviceText whyText text-center text-3xl font-semibold capitalize md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl"
            }
          >
            Certified Technicians
          </h1>
          <p className={"max-w-5xl text-center text-balance md:text-lg"}>
            Every technician is trained, certified, and background-checked.
            Expect professional service, respectful conduct, and results you can
            trust.
          </p>
        </div>
      </div>
      <div
        className={
          "card4 absolute top-[190vh] left-2/4 h-[70vh] w-[80vw] -translate-x-2/4 -translate-y-2/4 transform rounded-2xl"
        }
      >
        <Image
          src={"/images/sleep.png"}
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
              "font-manrope serviceText whyText text-center text-3xl font-semibold capitalize md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl"
            }
          >
            Our Promise
          </h1>
          <p className={"max-w-5xl text-center text-balance md:text-lg"}>
            We’re here to restore the air you live in. From the moment we arrive
            to the last vent cleaned, your comfort, safety, and satisfaction are
            our priority.
          </p>
        </div>
      </div>
      <div
        className={
          "card5 absolute top-[190vh] left-2/4 h-[70vh] w-[80vw] -translate-x-2/4 -translate-y-2/4 transform overflow-hidden rounded-2xl"
        }
      >
        <Image
          src={"/images/offer.jpg"}
          alt={"offer"}
          fill={true}
          className={"object-cover"}
        />
        <div className="bg-brand-black/50 text-brand-offwhite flex-center absolute inset-0 size-full flex-col backdrop-blur-[2px]">
          <h1
            className={
              "font-manrope serviceText whyText text-center text-3xl font-semibold capitalize md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl"
            }
          >
            Limited Time Offer
          </h1>
          <p className={"max-w-5xl text-center text-balance md:text-lg"}>
            Grab the limited time offer. Just for{" "}
            <span className="text-brand-green font-manrope text-2xl font-bold">
              $189
            </span>
          </p>
          <div className="mt-6 flex items-center gap-6 overflow-hidden">
            <CustomButton
              text="Book Now"
              href="/book-service"
              className="introElement font-manrope! text-sm!"
            />
            <CustomButton
              text="CALL NOW"
              href="tel:+1234567890"
              className="introElement font-manrope! text-sm!"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Why;
