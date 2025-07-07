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
      <BookingForm />
    </Bounded>
  );
};
export default Page;
