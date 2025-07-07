"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Coverage = () => {
  const parentContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power4.out",
        duration: 1.5,
      },
      scrollTrigger: {
        trigger: parentContainerRef.current,
        start: "top 80%",
        end: "bottom 80%",
        scrub: true,
        // markers: true,
      },
    });

    gsap.to("body", {
      background: "#fdfcf3",
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: parentContainerRef.current,
        start: "-30% 80%",
        scrub: true,
        // markers: true,
      },
    });

    tl.to(".usaMap", {
      opacity: 1,
      scale: 1,
    }).from(
      ".coverHeading",
      {
        opacity: 0,
        y: 300,
      },
      0,
    );
  }, []);

  return (
    <section
      id={"coverage"}
      className={"text-brand-black relative h-[120vh] overflow-hidden"}
      ref={parentContainerRef}
    >
      <Image
        src={"/images/usmap.png"}
        alt={"usmap"}
        fill={true}
        className={"usaMap scale-[500%] object-cover opacity-0"}
      />
      <h1
        className={
          "font-manrope text-brand-offwhite coverHeading absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 transform text-3xl font-bold md:text-5xl lg:text-6xl"
        }
      >
        COVERING <span className={"text-[#bf0a30]"}>U</span>
        <span className={"text-[#f1f1f1]"}>S</span>
        <span className={"text-[#002868]"}>A</span>
      </h1>
    </section>
  );
};
export default Coverage;
