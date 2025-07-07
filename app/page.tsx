"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Loader from "@/components/LoadingAnimation";
import React, { useState } from "react";
import CustomButton from "@/components/CustomButton/CustomButton";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Services from "@/components/Services";
import Images from "@/components/ScrollImage";
import Coverage from "@/components/Coverage";
import Why from "@/components/Why";
import ReviewSection from "@/components/ReviewSection";
import FaQs from "@/components/FAQs";

gsap.registerPlugin(SplitText, useGSAP, ScrollTrigger);

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useGSAP(() => {
    const introTl = gsap.timeline({
      defaults: { ease: "power4.out", delay: 3 },
    });
    introTl
      .to(".img-wrapper", {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power4.out",
      })
      .from(
        ".introElement",
        {
          opacity: 0,
          y: "100%",
          stagger: 0.4,
          duration: 1.5,
        },
        0,
      );

    // const split = new SplitText(".gradientText", {
    //   type: "chars",
    // });
    // gsap.set(split.chars, {
    //   opacity: 0.5,
    //   color: "#fdfcf3",
    // });
    // gsap.to(split.chars, {
    //   scrollTrigger: {
    //     trigger: ".gradientTextParent",
    //     start: "top 80%",
    //     end: "bottom 80%",
    //     scrub: true,
    //   },
    //   opacity: 1,
    //   stagger: 1,
    // });
  }, []);

  return (
    <main className="overflow-hidden">
      {!isLoaded && <Loader onCompleted={() => setIsLoaded(true)} />}
      <section className="bg-brand-black relative z-30 h-screen overflow-hidden">
        <div className="img-wrapper absolute inset-0 scale-110 transform opacity-0">
          <video
            src="/videos/intro-vid.mp4"
            autoPlay={true}
            muted={true}
            loop={true}
            preload={"auto"}
            className="size-full scale-150 object-cover"
          />
        </div>
        <div
          className={
            "absolute flex h-full w-full flex-col justify-center gap-8 bg-black/50 pl-4 backdrop-opacity-30 md:pl-6 lg:px-8 xl:px-12 2xl:px-20"
          }
        >
          <div className="space-y-2">
            <div className="overflow-hidden">
              <h1
                className={
                  "font-manrope introElement text-3xl font-semibold md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-9xl"
                }
              >
                AIRO <span className={"text-brand-green"}>FIX</span>
              </h1>
            </div>
            <div className="overflow-hidden">
              <p className={"introElement max-w-4xl text-balance"}>
                Your home deserves more than just clean floors it deserves clean
                air. Our certified duct cleaning service helps you breathe
                easier by eliminating hidden contaminants with precision and
                care.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 overflow-hidden">
            <CustomButton
              text="Book Now"
              href="/book-service"
              className="introElement font-manrope! text-sm!"
            />
            <CustomButton
              text="CALL NOW"
              href="tel:5405158283"
              className="introElement font-manrope! text-sm!"
            />
          </div>
        </div>
      </section>

      {/*<Images />*/}
      <Services />
      <Coverage />
      <Why />
      <ReviewSection />
      <FaQs />

      {/*<Bounded className={"gradientTextParent"}>*/}
      {/*  <p className="gradientText text-lg font-bold text-balance text-white/10 md:text-2xl lg:text-3xl xl:text-4xl">*/}
      {/*    We specialize in deep duct cleaning that goes beyond the surface*/}
      {/*    removing dust, allergens, and pollutants at the source. Experience*/}
      {/*    cleaner air, improved energy efficiency, and a healthier home or*/}
      {/*    workspace with our advanced, eco-friendly solutions.*/}
      {/*  </p>*/}
      {/*</Bounded>*/}
    </main>
  );
}
