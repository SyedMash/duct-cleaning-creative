"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { navLinks } from "@/constants";
import Image from "next/image";
import { clsx } from "clsx";
import { IoMenuSharp } from "react-icons/io5";
import { RiCloseLargeLine } from "react-icons/ri";
import Link from "next/link";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState<string>("");
  const [isHovered, setIsHovered] = useState(false);
  const [enableNavbar, setEnableNavbar] = useState(true);

  const navigationSection = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const parentContainerRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 500) {
        setEnableNavbar(true);
      } else {
        setEnableNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavbar = () => {
    if (isOpen) {
      gsap
        .timeline()
        .to(
          ".leftDiv",
          {
            opacity: 0,
            duration: 1,
            ease: "power4.out",
            // delay: 0.71,
          },
          "-=0.2",
        )
        .to(
          ".rightDiv",
          {
            x: "100%",
            duration: 1,
            ease: "power4.out",
            onComplete: () => setIsOpen(false),
          },
          0,
        );
    } else {
      setIsOpen(true);
      gsap
        .timeline()
        .to(".leftDiv", {
          opacity: 1,
          duration: 2,
          ease: "power4.out",
          delay: 0.5,
        })
        .to(
          ".rightDiv",
          {
            x: 0,
            duration: 1,
            ease: "power4.out",
          },
          0,
        );
    }
  };

  const handleHoverImage = (imagePath: string) => {
    setIsHovered(true);
    setImage(imagePath);

    gsap.to(".leftDiv", {
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    });

    gsap.from(imageRef.current, {
      duration: 1,
      ease: "expo.out",
      scale: 1.5,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setImage("/images/img4.jpg");
    gsap.to(imageRef.current, {
      duration: 1,
      ease: "expo.out",
      scale: 1,
    });

    gsap.to(".leftDiv", {
      opacity: 1,
      duration: 1,
      ease: "power4.out",
    });
  };

  return (
    <header
      className={"fixed z-50 w-full overflow-hidden bg-transparent"}
      ref={parentContainerRef}
    >
      <nav
        className={"z-50 flex items-center justify-between p-12"}
        style={{ display: enableNavbar ? "flex" : "none" }}
      >
        <Link href={"/"}>
          <Image
            src={"/images/logo.png"}
            alt={"logo"}
            width={100}
            height={100}
            className={"object-contain"}
          />
        </Link>
        <h1
          onClick={handleNavbar}
          className={clsx(
            "z-50 cursor-pointer text-2xl font-semibold transition-colors duration-700",
            isOpen ? "text-brand-offwhite" : "text-brand-offwhite",
          )}
        >
          {isOpen ? <RiCloseLargeLine size={48} /> : <IoMenuSharp size={48} />}
        </h1>
      </nav>
      <section
        className={"fixed top-0 left-0 h-screen w-screen"}
        style={{ display: isOpen ? "flex" : "none" }}
        ref={navigationSection}
      >
        <div className={"pointer-events-none relative flex-1"}>
          {isHovered && (
            <Image
              src={image || "/images/img4.jpg"}
              alt={"img"}
              fill={true}
              className={"object-cover"}
              ref={imageRef}
            />
          )}
          <div
            className={
              "leftDiv flex-center pointer-events-none absolute inset-0 size-full bg-black/30 opacity-0 backdrop-blur-3xl"
            }
          >
            <h1
              className={
                "font-manrope text-brand-offwhite hidden text-9xl font-semibold md:block"
              }
            >
              AIRO <span className={"text-brand-green"}>FIX</span>
            </h1>
          </div>
        </div>
        <div
          className={
            "rightDiv bg-brand-black text-brand-offwhite flex flex-10/12 translate-x-full flex-col justify-center p-6 md:flex-1 md:p-8"
          }
        >
          {navLinks.map((link) => (
            <Link
              onClick={handleNavbar}
              href={link.link}
              key={link.name}
              className={
                "font-fira hover:text-brand-green w-fit cursor-pointer text-2xl leading-[50px] font-semibold transition-all duration-700 md:text-4xl md:leading-[100px] xl:text-5xl 2xl:text-8xl"
              }
              onMouseEnter={() => {
                handleHoverImage(link.imageUrl);
              }}
              onMouseLeave={handleMouseLeave}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </section>
    </header>
  );
};
export default Navbar;
