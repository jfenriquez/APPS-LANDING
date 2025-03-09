"use client";
import Spline from "@splinetool/react-spline";
import { useState } from "react";

export default function TorusMotion3D() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <main className="flex justify-center items-center">
      {isLoading && <div>Loading...</div>}
      <div className="max-w-[90vw] md:max-w-3xl h-[140px] md:h-[400px] lg:h-[600px] lg:w-[600px] max-h-screen overflow-hidden">
        <Spline
          scene="https://prod.spline.design/b9vpXQo2nEJeYJk7/scene.splinecode"
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </main>
  );
}
