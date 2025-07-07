"use client"

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import Bounded from "@/components/Bounded";

const Chat = () => {
  return (
    <Bounded className={"relative h-full backdrop-blur-md"}>
      <div
        className={
          "bg-brand-offwhite/10 fixed bottom-4 left-0 flex w-full gap-3 rounded-2xl p-4"
        }
      >
        <Input placeholder={"Enter your message here..."} />
        <Button className={"hover:bg-brand-green cursor-pointer"}>
          <Send />
        </Button>
      </div>
    </Bounded>
  );
};
export default Chat;
