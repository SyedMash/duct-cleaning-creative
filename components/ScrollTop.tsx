"use client";

import { ArrowUp } from "lucide-react";
import React, { useEffect, useState } from "react";

const ScrollTop = () => {
  const [showArrowButton, setShowArrowButton] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setShowArrowButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {showArrowButton && (
        <div className="fixed right-5 bottom-5 z-50 flex cursor-pointer items-center justify-center rounded-full bg-sky-950/50 p-1 backdrop-blur-3xl">
          <ArrowUp
            className="animate-pulse text-sky-500"
            onClick={scrollToTop}
          />
        </div>
      )}
    </>
  );
};

export default ScrollTop;
