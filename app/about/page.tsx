import { Metadata } from "next";
import React from "react";
import Bounded from "@/components/Bounded";

export const metadata: Metadata = {
  title: "Airo Fix | About",
  description: "Breathe in the Difference",
};

const Page = () => {
  return (
    <Bounded className={"h-screen flex-center"}>
      <p  className={"font-manrope text-balance text-center text-lg md:text-2xl lg:text-3xl font-semibold"}>
        At AIRO FIX, We are not just here to clean your ducts. We here to clean
        the air you breathe. With a sharp eye for detail and a passion for doing
        things right, We started this service to bring a fresh, honest, and
        effective approach to indoor air quality. No gimmicks, no shortcuts
        just reliable service, powerful results, and a little style along the
        way.
      </p>
    </Bounded>
  );
};
export default Page;
