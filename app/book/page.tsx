import React from "react";
import Bounded from "@/components/Bounded";
import { BookingForm } from "@/components/BookingForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Airo Fix | Book Service",
  description: "Book Service",
};

const Page = () => {
  return (
    <Bounded className={"pt-32"}>
      <h1
        className={
          "font-manrope introElement mb-12 text-3xl font-semibold md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
        }
      >
        Book A Service
      </h1>
      <BookingForm />
    </Bounded>
  );
};
export default Page;
