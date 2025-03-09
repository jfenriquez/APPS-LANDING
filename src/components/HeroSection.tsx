"use client";

import React, {  useEffect, useRef } from "react";
import { gsap } from "gsap";
import TorusMotion3D from "./IMG_3D/TorusMotion3D";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    if (titleRef.current && subtitleRef.current) {
      gsap.set(titleRef.current, { opacity: 1 });
      gsap.set(subtitleRef.current, { opacity: 1 });

      gsap.fromTo(
        titleRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      );

      gsap.fromTo(
        subtitleRef.current,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.5 }
      );
    }
  }, []);

  return (
    <section className="py-12 px-6 sm:px-8 md:px-12 text-center md:text-left text-white">
      <div className="hero-content flex flex-col lg:flex-row items-center gap-8">
        {/* Contenedor del texto (arriba en móviles) */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          {/* <h1
            ref={titleRef}
            className="text-4xl sm:text-4xl md:text-5xl font-bold mb-4 floating-text"
          >
            Creamos herramientas digitales para motivarte y ayudarte a crecer.
            ¡Es genial tenerte aquí! 😁✨
          </h1> */}
          <div className="mockup-code max-w-lg mx-auto floating-text">
            <pre data-prefix=">" className="text-warning p-4">
              <code style={{ whiteSpace: "pre-wrap" }}>
                <Typewriter
                  options={{
                    delay: 50,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(25)
                      .typeString(
                        "¡Bienvenido a nuestra página de apps puedes utilizarlas cuando quieras es gratis! Están en Play Store, Si deseas puedes darnos crédito calificándonos con 5 estrellas te lo agradecemos😁.  Aquí encontrarás una selección de apps de tal calidad que hasta tu perro dirá “wow”. ,Soporte 👀 seamos sinceros, los servidores no son gratuitos, nuestro amor no es tanto. Si quieres que hagamos magia y todo fluya mejor que un domingo en pijama, los servidores tiene un precio. Así que, si estás dispuesto a que el café del equipo no se pague solo, estamos listos para que nos dones o nos apoyes."
                      )
                      .start();
                  }}
                />
              </code>
            </pre>
          </div>
        </div>

        {/* Contenedor de la imagen (abajo en móviles) */}
        <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
          <div className="w-78 sm:w-94 md:w-100 lg:w-full">
            <TorusMotion3D />
          </div>
        </div>
      </div>

      {/* Estilos para la animación flotante */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .floating-text {
          text-shadow: 3px 3px 10px rgb(37, 255, 8);
          animation: float 3s ease-in-out infinite;
          position: relative;
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
