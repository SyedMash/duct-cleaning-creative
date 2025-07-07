"use client";

import React, { useRef } from "react";
import Bounded from "@/components/Bounded";
import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Services = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power4.out",
        duration: 1.5,
      },
      scrollTrigger: {
        trigger: ".serviceParentContainer",
        start: "top 50%",
        // markers: true,
      },
    });

    tl.from(".serviceText", {
      opacity: 0,
    }).from(
      ".serviceBox",
      {
        opacity: 0,
        y: 100,
        stagger: 0.25,
      },
      0,
    );
  }, []);

  return (
    <Bounded className={"serviceParentContainer min-h-screen"}>
      <h1
        className={
          "font-manrope serviceText text-center text-3xl font-semibold capitalize md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl"
        }
      >
        services we offer
      </h1>
      <div className={"mt-12 flex flex-col gap-6"}>
        <div className={"flex h-[60vh] w-full flex-col gap-6 md:flex-row"}>
          <div
            className={
              "serviceBox relative flex h-full flex-1 items-end justify-end overflow-hidden rounded-2xl"
            }
          >
            <Image
              src={"/images/frame_0005.png"}
              alt={"residential-image"}
              fill={true}
              className={"object-cover"}
            />
            <div
              className={
                "bg-brand-black/50 absolute inset-0 bottom-4 flex size-full flex-col justify-end p-4 backdrop-blur-[2px]"
              }
            >
              <h1 className={"font-manrope text-2xl font-bold md:text-3xl"}>
                Residential Duct Cleaning
              </h1>
              <p className={"text-balance md:text-lg"}>
                Your home should be your sanctuary but hidden dust, allergens,
                and bacteria in your air ducts can compromise the air you
                breathe. Our residential duct cleaning service removes years of
                buildup, improving air quality, energy efficiency, and your
                overall comfort. Breathe easy knowing your home’s air is clean,
                safe, and fresh.
              </p>
            </div>
          </div>
          <div
            className={
              "bg-brand-offwhite/10 serviceBox relative flex h-full flex-1 items-end justify-end overflow-hidden rounded-2xl"
            }
          >
            <Image
              src={"/images/frame_0007.png"}
              alt={"residential-image"}
              fill={true}
              className={"object-cover"}
            />
            <div
              className={
                "bg-brand-black/50 absolute inset-0 bottom-4 flex size-full flex-col justify-end p-4 backdrop-blur-[2px]"
              }
            >
              <h1 className={"font-manrope text-2xl font-bold md:text-3xl"}>
                Commercial Duct Cleaning
              </h1>
              <p className={"text-balance md:text-lg"}>
                Clean air isn’t just a luxury it’s a responsibility, especially
                in shared or high-traffic spaces. Our commercial duct cleaning
                services are tailored for offices, restaurants, retail, and
                large facilities. We help you maintain a healthier workspace,
                meet building compliance, and reduce HVAC strain. From small
                businesses to big systems — we scale to meet your needs.
              </p>
            </div>
          </div>
        </div>
        <div
          className={
            "bg-brand-offwhite/10 serviceBox relative flex h-[40vh] w-full items-end justify-end overflow-hidden rounded-2xl"
          }
        >
          <Image
            src={"/images/frame_0005.png"}
            alt={"residential-image"}
            fill={true}
            className={"object-cover"}
          />

          <div
            className={
              "bg-brand-black/50 absolute inset-0 bottom-4 flex size-full flex-col justify-end p-4 backdrop-blur-[2px]"
            }
          >
            <h1 className={"font-manrope text-2xl font-bold md:text-3xl"}>
              Dryer Vent Cleaning
            </h1>
            <p className={"text-balance md:text-lg"}>
              Lint-clogged dryer vents are one of the leading causes of house
              fires and they also slow down your dryer’s performance. Our dryer
              vent cleaning service removes blockages, reduces fire risk,
              shortens drying time, and extends the life of your appliances. A
              small service with big safety (and energy-saving) benefits.
            </p>
          </div>
        </div>
      </div>
    </Bounded>
  );
};
export default Services;
