import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Chat from "@/components/Chat";

export const metadata: Metadata = {
  title: "Airo Fix | Chat",
  description: "Breathe in the Difference",
};

const Page = () => {
  return (
    <section className={"relative min-h-screen"}>
      <Chat />
    </section>
  );
};
export default Page;
