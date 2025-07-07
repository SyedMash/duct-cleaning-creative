"use client";
import React, { useEffect, useState } from "react";
import { useGlobalLoader } from "@/hooks/useGlobalLoader";

const GlobalLoader = () => {
  const { isLoading, setLoading } = useGlobalLoader();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleLoad = () => {
      // Simulate progress for better UX
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += Math.random() * 30;
        if (currentProgress >= 100) {
          currentProgress = 100;
          setProgress(100);
          clearInterval(interval);
          // Add small delay for smooth transition
          setTimeout(() => {
            setLoading(false);
          }, 500);
        } else {
          setProgress(currentProgress);
        }
      }, 100);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, [setLoading]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="text-center">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 className="font-manrope mb-2 text-4xl text-white">
            AIRO <span className="text-brand-green">FIX</span>
          </h1>
          <p className="text-sm text-white/70">Air Duct Cleaning Services</p>
        </div>

        {/* Loading Animation */}
        <div className="mb-6">
          <div className="border-brand-green mx-auto h-12 w-12 animate-spin rounded-full border-b-2"></div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4 h-2 w-64 rounded-full bg-gray-800">
          <div
            className="bg-brand-green h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Loading Text */}
        <p className="text-sm text-white/70">
          {progress < 100 ? "Loading..." : "Ready!"}
        </p>
      </div>
    </div>
  );
};

export default GlobalLoader;
