"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { ContactSchema } from "@/lib/schema/contact.schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { AiOutlineLoading } from "react-icons/ai";
import { toast } from "sonner";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      phone: "",
      subject: "",
    },
  });

  const handleSubmit = async (data: z.infer<typeof ContactSchema>) => {
    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Something went wrong");
      toast.success("You contact message have been delivered successfully", {
        position: "top-center",
      });
      form.reset();
    } catch (error) {
      console.log(error);
      toast.error("Failed to submit. Try again later", {
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="space-y-6">
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl font-semibold">Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Your Name"
                    className="py-6"
                    {...field}
                    type="text"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl font-semibold">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Your Email"
                    className="py-6"
                    {...field}
                    type="text"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="phone"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl font-semibold">Phone</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Your Phone"
                    className="py-6"
                    {...field}
                    type="number"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="subject"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl font-semibold">Subject</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Subject"
                    className="py-6"
                    {...field}
                    type="text"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="message"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl font-semibold">Message</FormLabel>
                <FormControl>
                  <Input
                    placeholder="How we can help you?"
                    className="py-6"
                    {...field}
                    type="text"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className={"hover:bg-brand-green cursor-pointer"} size={"lg"}>
          {loading ? <AiOutlineLoading className={"animate-spin"} /> : "Book"}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
