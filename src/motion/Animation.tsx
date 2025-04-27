"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

type Direction =
  | "bottom-to-top"
  | "top-to-bottom"
  | "left-to-right"
  | "right-to-left";

export const DirectionAnimation: React.FC<{
  children: React.ReactNode;
  direction?: Direction;
  duration?: number;
  delay?: number;
  distance?: number;
  once?: boolean;
  className?: string;
}> = ({
  children,
  direction = "bottom-to-top",
  duration = 0.7,
  delay = 0.2,
  distance = 50,
  once = false,
  className = "",
  ...props
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [isInView, controls, once]);

  // Define variants based on direction
  const getVariants = () => {
    switch (direction) {
      case "bottom-to-top":
        return {
          hidden: { y: distance, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              duration,
              ease: [0.25, 0.1, 0.25, 1],
              delay,
            },
          },
        };
      case "top-to-bottom":
        return {
          hidden: { y: -distance, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              duration,
              ease: [0.25, 0.1, 0.25, 1],
              delay,
            },
          },
        };
      case "left-to-right":
        return {
          hidden: { x: -distance, opacity: 0 },
          visible: {
            x: 0,
            opacity: 1,
            transition: {
              duration,
              ease: [0.25, 0.1, 0.25, 1],
              delay,
            },
          },
        };
      case "right-to-left":
        return {
          hidden: { x: distance, opacity: 0 },
          visible: {
            x: 0,
            opacity: 1,
            transition: {
              duration,
              ease: [0.25, 0.1, 0.25, 1],
              delay,
            },
          },
        };
      default:
        return {
          hidden: { y: distance, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              duration,
              ease: [0.25, 0.1, 0.25, 1],
              delay,
            },
          },
        };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={getVariants()}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
