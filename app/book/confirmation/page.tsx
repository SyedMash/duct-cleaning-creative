import React from "react";
import { Metadata } from "next";
import Bounded from "@/components/Bounded";
import BookingConfirmation from "@/components/BookingConfirmation";

export const metadata: Metadata = {
  title: "Airo Fix | Booking Confirmation",
  description: "Booking Confirmation",
};

const Page = () => {
  return (
    <Bounded className={"flex-center h-screen"}>
      <BookingConfirmation />
    </Bounded>
  );
};
export default Page;
