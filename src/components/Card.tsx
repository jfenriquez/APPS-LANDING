"use client";
import React, { useRef } from "react";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import styles from "./Card.module.scss";
import Image from "next/image";

interface CardProps {
  i: number;
  title: string;
  description: string;
  src?: string;
  link?: string;
  color: string;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}

const Card = ({
  i,
  title,
  description,
  src,
  link,
  color,
  progress,
  range,
  targetScale,
}: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [5, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={styles.card}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-left text-black drop-shadow-md">
          {title}
        </h2>

        <div className={styles.body}>
          <div className={styles.description}>
            <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed text-center lg:text-left max-w-3xl">
              {description}
            </p>
            <span>
              <a href={link} target="_blank">
                VER PROYECTO
              </a>
            </span>
          </div>

          <div className={styles.imageContainer}>
            <motion.div className={styles.inner} style={{ scale: imageScale }}>
              <Image fill src={`/images/${src}`} alt="image" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
