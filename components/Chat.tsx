"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import Bounded from "@/components/Bounded";
import { AiOutlineLoading } from "react-icons/ai";

const Chat = () => {
  const [userInput, setUserInput] = useState("");
  const [isResponseLoading, setIsResponseLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    { role: "assistant", content: "Hello, how can I help you?" },
  ]);

  const handleSubmit = async () => {
    setIsResponseLoading(true);
    try {
      const newUserMessage = {
        role: "user",
        content: userInput,
      };
      setChatHistory((prev) => [...prev, newUserMessage]);

      const response = await fetch("https://airo-fix-fastapi-chat.vercel.app/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userInput,
        }),
      });
      if (!response.ok) throw new Error("something went wrong");
      const data: { message: string } = await response.json();

      const newAssistantMessage = {
        role: "assistant",
        content: data.message,
      };
      setChatHistory((prev) => [...prev, newAssistantMessage]);
    } catch (e) {
      console.log(e);
    } finally {
      setUserInput("");
      setIsResponseLoading(false);
    }
  };

  const onPressEnter = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      await handleSubmit();
    }
  };

  return (
    <Bounded className={"relative min-h-screen pt-32 backdrop-blur-md"}>
      <div className={"flex size-full flex-col gap-6 p-4"}>
        {chatHistory.map((message, idx: number) => {
          if (message.role === "assistant") {
            return (
              <div key={idx} className={"self-start"}>
                <p className={"font-semibold md:text-lg"}>{message.content}</p>
              </div>
            );
          } else {
            return (
              <div key={idx} className={"self-end"}>
                <p className={"font-semibold md:text-lg"}>{message.content}</p>
              </div>
            );
          }
        })}
      </div>

      <div
        className={
          "bg-brand-offwhite/10 fixed bottom-4 left-0 flex w-full gap-3 rounded-2xl p-4"
        }
      >
        <Input
          placeholder={"Enter your message here..."}
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={onPressEnter}
          disabled={isResponseLoading}
        />
        <Button
          className={"hover:bg-brand-green cursor-pointer"}
          onClick={handleSubmit}
          disabled={isResponseLoading}
        >
          {isResponseLoading ? (
            <AiOutlineLoading className={"animate-spin"} />
          ) : (
            <Send />
          )}
        </Button>
      </div>
    </Bounded>
  );
};
export default Chat;
