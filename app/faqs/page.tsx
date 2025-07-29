import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Bounded from "@/components/Bounded";

import { coreProcessFaqs, otherFaqs, safetyFaqs } from "@/constants";
import Link from "next/link";

const page = () => {
  return (
    <Bounded className="">
      <h1
        id={"faqs"}
        className={
          "font-manrope text-brand-offwhite text-center text-3xl font-semibold md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
        }
      >
        FAQs
      </h1>
      <p className="mt-2 text-center text-balance lg:text-lg">
        Questions Asked By Homeowners
      </p>

      <div className="mt-12">
        <h2
          id={"faqs"}
          className={
            "font-manrope text-brand-offwhite text-2xl font-semibold md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
          }
        >
          Core Process
        </h2>
        <Accordion type="single" collapsible>
          {coreProcessFaqs.map((cpf) => (
            <AccordionItem value={cpf.value} key={cpf.value}>
              <AccordionTrigger className="text-lg lg:text-xl">
                {cpf.trigger}
              </AccordionTrigger>
              <AccordionContent className="text-lg lg:text-xl">
                {cpf.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="mt-12">
        <h2
          id={"faqs"}
          className={
            "font-manrope text-brand-offwhite text-2xl font-semibold md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
          }
        >
          Safety & Standards
        </h2>
        <Accordion type="single" collapsible>
          {safetyFaqs.map((sf) => (
            <AccordionItem value={sf.value} key={sf.value}>
              <AccordionTrigger className="text-lg lg:text-xl">
                {sf.trigger}
              </AccordionTrigger>
              <AccordionContent className="text-lg lg:text-xl">
                {sf.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="mt-12">
        <h2
          id={"faqs"}
          className={
            "font-manrope text-brand-offwhite text-2xl font-semibold md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
          }
        >
          Other Practical Questions
        </h2>
        <Accordion type="single" collapsible>
          {otherFaqs.map((of) => (
            <AccordionItem value={of.value} key={of.value}>
              <AccordionTrigger className="text-lg lg:text-xl">
                {of.trigger}
              </AccordionTrigger>
              <AccordionContent className="text-lg lg:text-xl">
                {of.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <p className="mt-24 text-center font-semibold text-balance uppercase lg:text-lg">
        If you have any other questions, please{" "}
        <Link href="/contact" className="text-blue-500 underline">
          contact us
        </Link>
        .
      </p>
    </Bounded>
  );
};

export default page;
