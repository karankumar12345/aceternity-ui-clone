"use client";
import { ThreeDCardDemo } from "@/components/3DDEMO";
import { CardStackDemo } from "@/components/CardStack";
import { CodeBlockDemo } from "@/components/CodeBlockDemo";
import { CompareDemo } from "@/components/COMPARE";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { SiNextdotjs, SiReact, SiTailwindcss, SiFramer } from "react-icons/si";

const HeroSection = () => {
  const words = ["better", "beautiful", "modern", "awesome"];
  const showContent = [<CardStackDemo />, <CodeBlockDemo />];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);

  // Change text every 2 seconds
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prevIndex) =>
        prevIndex === words.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(wordInterval);
  }, []);

  // Change component every 2 seconds
  useEffect(() => {
    const componentInterval = setInterval(() => {
      setCurrentComponentIndex((prevIndex) =>
        prevIndex === showContent.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(componentInterval);
  }, []);

  return (
    <>
    <div className="mt-[10%] ml-9 flex flex-col justify-center h-screen text-center">
      <div className="flex flex-col lg:flex-row ">
        <div className="mb-10 lg:mb-0 lg:text-left">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold">
            Make your websites look 10x{" "}
            <span className="text-blue-600">{words[currentWordIndex]}</span>
          </h1>

          <div className="mt-10">
            <p className="text-lg md:text-2xl max-w-3xl mx-auto lg:mx-0">
              Copy-paste the most trending components and use them in your
              websites without having to worry about styling and animations.
            </p>
          </div>

          <div className="mt-5">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Browse Components
            </Button>
          </div>
          <div className="mt-5 flex space-x-6 justify-center items-center">
            <div className="flex flex-col items-center">
              <SiNextdotjs className="text-5xl " />
              <span className="text-sm mt-1">Next.js</span>
            </div>
            <div className="flex flex-col items-center">
              <SiReact className="text-5xl " />
              <span className="text-sm mt-1">React</span>
            </div>
            <div className="flex flex-col items-center">
              <SiTailwindcss className="text-5xl " />
              <span className="text-sm mt-1">Tailwind CSS</span>
            </div>
            <div className="flex flex-col items-center">
              <SiFramer className="text-5xl " />
              <span className="text-sm mt-1">Framer Motion</span>
            </div>
          </div>
          <div className="mt-[10%]">
            <h1 className="font-bold text-4xl ">
              As simple as copy and paste
            </h1>
            <p className="text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto lg:mx-0">
              Copy-paste the most trending components and use them in your
              websites without having to worry about styling and animations.
            </p>
          </div>

      
        </div>

        {/* Right section for larger screens */}
        <div className="hidden lg:flex flex-col justify-center items-center space-y-10">
          <CompareDemo />
          <ThreeDCardDemo />
        </div>
      </div>
    </div>
        <div>
        {/* Display the current component */}
        {showContent[currentComponentIndex]}
      </div>
      </>
  );
};

export default HeroSection;
