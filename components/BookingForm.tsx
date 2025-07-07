"use client";

import { BookingSchema } from "@/lib/schema/booking.schema";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { selectService } from "@/constants";
import { Button } from "@/components/ui/button";
import { AiOutlineLoading } from "react-icons/ai";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const BookingForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof BookingSchema>>({
    resolver: zodResolver(BookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      addressLine1: "",
      addressLine2: "",
      country: "United States",
      state: "",
      postalCode: "",
      service: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof BookingSchema>) => {
    if (values.service === "") {
      toast.error("Please select a service!", {
        position: "top-center",
      });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Something went wrong!");
      toast.success("Your booking has been submitted successfully!", {
        position: "top-center",
      });
      form.reset();
      router.push("/book/confirmation");
    } catch (error) {
      toast.error("Failed to submit your booking. Please try again later!", {
        position: "top-center",
      });
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <div>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className={"space-y-6"}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={"text-xl font-semibold"}>Name</FormLabel>
                <FormControl>
                  <Input
                    type={"text"}
                    placeholder="Enter your name"
                    {...field}
                    className={"py-6"}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={"text-xl font-semibold"}>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    type={"email"}
                    {...field}
                    className={"py-6"}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={"text-xl font-semibold"}>Phone</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your phone number"
                    type={"number"}
                    {...field}
                    className={"py-6"}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="addressLine1"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={"text-xl font-semibold"}>
                  Address Line 1
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your address"
                    type={"text"}
                    {...field}
                    className={"py-6"}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="addressLine2"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={"text-xl font-semibold"}>
                  Address Line 2 (optional)
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your address"
                    type={"text"}
                    {...field}
                    className={"py-6"}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className={"flex flex-col gap-6 lg:flex-row"}>
            <div className={"grow"}>
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={"text-xl font-semibold"}>
                      Country
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="United States"
                        type={"text"}
                        {...field}
                        className={"py-6"}
                        disabled={true}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className={"grow"}>
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={"text-xl font-semibold"}>
                      State
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Texas"
                        type={"text"}
                        {...field}
                        className={"py-6"}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className={"flex flex-col gap-6 lg:flex-row"}>
            <div className={"grow"}>
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={"text-xl font-semibold"}>
                      City
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your city"
                        type={"text"}
                        {...field}
                        className={"py-6"}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className={"grow"}>
              <FormField
                control={form.control}
                name="postalCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={"text-xl font-semibold"}>
                      Zip Code
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your zip code"
                        type={"number"}
                        {...field}
                        className={"py-6"}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className={"flex flex-col gap-x-6 lg:flex-row-reverse"}>
            <div className={"grow"}>
              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={"text-xl font-semibold"}>
                      Choose a service
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full grow py-6">
                          <SelectValue placeholder="Services" />
                        </SelectTrigger>
                        <SelectContent
                          className={"bg-brand-black text-brand-offwhite"}
                        >
                          {selectService.map((service, index: number) => (
                            <SelectItem
                              key={index}
                              value={service.value}
                              className={"cursor-pointer"}
                            >
                              {service.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Button className={"hover:bg-brand-green cursor-pointer"} size={"lg"}>
            {loading ? <AiOutlineLoading className={"animate-spin"} /> : "Book"}
          </Button>
        </form>
      </div>
    </Form>
  );
};
