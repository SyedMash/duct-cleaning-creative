"use client";

import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Loader from "@/components/LoadingAnimation";
import { useEffect, useState } from "react";
import Bounded from "@/components/Bounded";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const disableScroll = (e: Event) => e.preventDefault();

    window.addEventListener("wheel", disableScroll, { passive: false });
    window.addEventListener("touchmove", disableScroll, { passive: false });

    if (isLoaded) {
      window.removeEventListener("wheel", disableScroll);
      window.removeEventListener("touchmove", disableScroll);
    }

    return () => {
      window.removeEventListener("wheel", disableScroll);
      window.removeEventListener("touchmove", disableScroll);
    };
  }, [isLoaded]);

  useGSAP(() => {
    gsap.to(".img-wrapper", {
      delay: 3,
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: "power4.out",
    });
  }, []);

  return (
    <main className="overflow-hidden">
      {!isLoaded && <Loader onCompleted={() => setIsLoaded(true)} />}
      <section className="bg-brand-black relative h-screen overflow-hidden">
        <div className="img-wrapper absolute inset-0 scale-110 transform opacity-0">
          <Image
            src="/images/img4.jpg"
            alt="image"
            fill
            priority
            className="size-full object-cover"
          />
        </div>
        <div className={"absolute h-full w-full bg-black opacity-30"}></div>
      </section>

      <Bounded>
        <h1>Hello</h1>
      </Bounded>
    </main>
  );
}
