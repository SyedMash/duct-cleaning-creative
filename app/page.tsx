"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import CustomButton from "@/components/CustomButton/CustomButton";

import Services from "@/components/Services";
import Images from "@/components/ScrollImage";
import Coverage from "@/components/Coverage";
import Why from "@/components/Why";
import ReviewSection from "@/components/ReviewSection";
import FaQs from "@/components/FAQs";
import MarqueeText from "@/components/Marquee";
import Pricing from "@/components/Pricing";

gsap.registerPlugin(useGSAP);

export default function Home() {
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
  }, []);

  return (
    <main className="overflow-hidden">
      <section className="bg-brand-black relative z-30 h-screen overflow-hidden">
        <div className={"absolute bottom-0 w-full"}>
          <MarqueeText />
        </div>
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
              href="/book"
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

      <Images />
      <Services />
      <Why />
      <Pricing />
      <ReviewSection />
      <FaQs />
      <Coverage />
    </main>
  );
}
