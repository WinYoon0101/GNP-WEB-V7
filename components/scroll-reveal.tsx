"use client";

import React, { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

export type AnimationType =
  | "fadeInUp"
  | "slideInLeft"
  | "slideInRight"
  | "popIn"
  | "scaleUp";

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  margin?: string;
  className?: string;
}

export function ScrollReveal({
  children,
  animation = "fadeInUp",
  delay = 0,
  duration = 0.6,
  margin = "-50px",
  className = "",
  ...rest
}: ScrollRevealProps) {
  const getVariants = () => {
    switch (animation) {
      case "fadeInUp":
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration, delay, ease: "easeOut" } },
        };
      case "slideInLeft":
        return {
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0, transition: { duration, delay, ease: "easeOut" } },
        };
      case "slideInRight":
        return {
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0, transition: { duration, delay, ease: "easeOut" } },
        };
      case "popIn":
        return {
          hidden: { opacity: 0, scale: 0.8, y: 20 },
          visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, delay, type: "spring", stiffness: 100 } },
        };
      case "scaleUp":
        return {
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1, transition: { duration, delay, ease: "easeOut" } },
        };
      default:
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration, delay, ease: "easeOut" } },
        };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin }}
      variants={getVariants()}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
