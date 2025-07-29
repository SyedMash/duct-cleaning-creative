import React from "react";

import Bounded from "@/components/Bounded";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

const page = () => {
  return (
    <Bounded className="">
      <h1
        id={"faqs"}
        className={
          "font-manrope text-brand-offwhite text-center text-3xl font-semibold md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
        }
      >
        Contact
      </h1>
      <p className="mt-2 text-center text-balance lg:text-lg">
        Got questions about your air ducts? Our friendly team is ready to help
        just reach out and we&apos;ll get back to you as soon as possible!”
      </p>

      <div className="mt-12">
        <h2
          id={"faqs"}
          className={
            "font-manrope text-brand-offwhite text-3xl font-semibold md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
          }
        >
          Details
        </h2>
        <div className="mt-6 flex flex-col lg:text-lg">
          <span>
            Phone:{" "}
            <Link
              href={"tel:5405158283"}
              className="text-brand-green font-semibold underline"
            >
              5405158283
            </Link>{" "}
          </span>
          <span>
            Email:{" "}
            <Link
              href={"mailTo:airofixductcleaning@gmail.com"}
              className="text-brand-green font-semibold underline"
            >
              airofixductcleaning@gmail.com
            </Link>{" "}
          </span>
        </div>
      </div>

      <div className="mt-12">
        <h2
          id={"faqs"}
          className={
            "font-manrope text-brand-offwhite mb-6 text-3xl font-semibold md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
          }
        >
          Contact Form
        </h2>
        <ContactForm />
      </div>
    </Bounded>
  );
};

export default page;
