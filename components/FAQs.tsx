import React from "react";
import Bounded from "@/components/Bounded";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const FaQs = () => {
  useGSAP(() => {
    gsap.to(".parentContainerFAQs", {
      opacity: 1,
      ease: "power4.out",
      duration: 1.5,
      scrollTrigger: {
        trigger: ".parentContainerFAQs",
        start: "top 80%",
        // markers: true
      },
    });
  }, []);

  return (
    <Bounded className={"text-brand-offwhite parentContainerFAQs opacity-0"}>
      <h1
        id={"faqs"}
        className={
          "font-manrope text-brand-offwhite text-center text-3xl font-semibold md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
        }
      >
        FAQs
      </h1>

      <Accordion type={"single"} collapsible={true}>
        <AccordionItem value={"item-1"}>
          <AccordionTrigger className={"text-lg lg:text-xl"}>
            How long does duct cleaning take?
          </AccordionTrigger>
          <AccordionContent className={"text-lg lg:text-xl"}>
            A standard home takes about 2–4 hours depending on size and duct
            condition.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value={"item-2"}>
          <AccordionTrigger className={"text-lg lg:text-xl"}>
            Is duct cleaning safe for kids and pets?
          </AccordionTrigger>
          <AccordionContent className={"text-lg lg:text-xl"}>
            Yes, We use eco-friendly, non-toxic methods that are 100% safe for
            the entire family.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value={"item-3"}>
          <AccordionTrigger className={"text-lg lg:text-xl"}>
            How often should I get my ducts cleaned?
          </AccordionTrigger>
          <AccordionContent className={"text-lg lg:text-xl"}>
            Every 2–3 years is ideal. Homes with pets, allergies, or recent
            renovations may need it more often.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value={"item-4"}>
          <AccordionTrigger className={"text-lg lg:text-xl"}>
            Do you offer commercial services?
          </AccordionTrigger>
          <AccordionContent className={"text-lg lg:text-xl"}>
            Absolutely. We serve offices, restaurants, gyms, and more tailored
            to your facility’s needs.
          </AccordionContent>
        </AccordionItem>{" "}
        <AccordionItem value={"item-5"}>
          <AccordionTrigger className={"text-lg lg:text-xl"}>
            Can I book online?
          </AccordionTrigger>
          <AccordionContent className={"text-lg lg:text-xl"}>
            Yes, just head to our Booking Page it only takes 2 minutes.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Bounded>
  );
};
export default FaQs;
