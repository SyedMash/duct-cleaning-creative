import { Metadata } from "next";
import React from "react";

import Bounded from "@/components/Bounded";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Airo Fix | About",
  description: "Breathe in the Difference",
};

const Page = () => {
  return (
    <Bounded className={""}>
      <div className="flex-center flex-col gap-6">
        <div>
          <h1
            className={
              "font-manrope text-brand-green text-3xl font-semibold md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
            }
          >
            ABOUT US
          </h1>
          <p
            className={
              "font-manrope text-lg font-semibold text-balance md:text-2xl lg:text-3xl"
            }
          >
            At AIRO FIX, We are not just here to clean your ducts. We here to
            clean the air you breathe. With a sharp eye for detail and a passion
            for doing things right, We started this service to bring a fresh,
            honest, and effective approach to indoor air quality. No gimmicks,
            no shortcuts just reliable service, powerful results, and a little
            style along the way.
          </p>
        </div>
      </div>

      <div className="flex-center my-12 flex-col gap-6">
        <div>
          <h1
            className={
              "font-manrope text-brand-green text-3xl font-semibold md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
            }
          >
            OUR MISSION
          </h1>
          <p
            className={
              "font-manrope text-lg font-semibold text-balance md:text-2xl lg:text-3xl"
            }
          >
            Our mission at AIRO FIX is simple yet powerful: to help families and
            businesses breathe cleaner, healthier air by delivering the highest
            standard of duct cleaning services every single time.
          </p>
          <p
            className={
              "font-manrope my-4 text-lg font-semibold text-balance md:text-2xl lg:text-3xl"
            }
          >
            We believe that clean indoor air is not a luxury it’s a necessity.
            Poor air quality can affect your health, energy bills, and overall
            comfort. That’s why we’re committed to using advanced tools, proven
            techniques, and eco-friendly solutions to remove dust, allergens,
            and hidden pollutants right at the source.
          </p>
          <p
            className={
              "font-manrope mb-4 text-lg font-semibold text-balance md:text-2xl lg:text-3xl"
            }
          >
            From your first call to the final inspection, we promise clear
            communication, fair pricing, and zero shortcuts. Our goal is to set
            a new standard in the duct cleaning industry one that’s honest,
            effective, and focused entirely on your well-being.
          </p>
          <p
            className={
              "font-manrope text-lg font-semibold text-balance md:text-2xl lg:text-3xl"
            }
          >
            At AIRO FIX, we don’t just clean ducts we protect what matters most:
            the air you and your loved ones breathe every day.
          </p>
        </div>
      </div>

      <div className="my-12 gap-6">
        <div>
          <h1
            className={
              "font-manrope text-brand-green text-3xl font-semibold md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
            }
          >
            WHAT MAKES US DIFFERENT?
          </h1>
          <ul className="list-disc px-7">
            {[
              "Certified & insured team",
              "Latest equipment & proven methods",
              "No hidden fees or upsells",
              "Friendly, respectful service every time",
            ].map((item, idx: number) => (
              <li
                key={idx}
                className="font-manrope text-lg font-semibold text-balance md:text-2xl lg:text-3xl"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative h-[30vh] gap-6">
        <div>
          <h1
            className={
              "font-manrope text-brand-green text-3xl font-semibold md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
            }
          >
            OUR PROMISE
          </h1>
          <p
            className={
              "font-manrope text-lg font-semibold text-balance md:text-2xl lg:text-3xl"
            }
          >
            Your satisfaction is our top priority because clean air should never
            be a luxury.
          </p>
        </div>
        <span
          className={
            "font-manrope absolute bottom-0 text-lg font-semibold text-balance md:text-2xl lg:text-3xl"
          }
        >
          Ready to experience the AIRO FIX difference?{" "}
          <Link href={"/book"} className="text-brand-green">
            Book Now
          </Link>{" "}
        </span>
      </div>
    </Bounded>
  );
};
export default Page;
