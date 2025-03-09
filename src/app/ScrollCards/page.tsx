"use client";

import React, { Suspense } from "react";

import { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";

import Card from "@/components/Card";
import { projects } from "./data";
import FormContact from "@/components/FormContact";

import HeroSection from "@/components/HeroSection";
const ScrollCards = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main ref={container}>
      <div
        style={{
          backgroundColor: "#000000",
          height: "100vh",
          position: "relative",
        }}
      >
        <Suspense
          fallback={
            <h1
              style={{
                backgroundColor: "#d11414",
              }}
            >
              cargando...
            </h1>
          }
        >
          {/* SECTION HERO */}
          <HeroSection />
        </Suspense>
      </div>
      <div
        style={{
          backgroundColor: "#76b5f5",
        }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-black drop-shadow-md pt-5 pb-0">
          Nuestras apps
        </h2>
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={i}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
      <div
        style={{
          backgroundColor: "#121313f6",
          height: "100vh",
          position: "relative",
        }}
      >
        {/* SECTION FORM CONTACT */}
        <FormContact />
      </div>
    </main>
  );
};

export default ScrollCards;
