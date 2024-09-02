"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface FadeInMotionDivProps {
  children: React.ReactNode;
  className?: string;
  initial?: object;
  animate?: object;
  transition?: object;
}

const FadeInMotionDiv: React.FC<FadeInMotionDivProps> = ({
  children,
  className = "",
  initial = { opacity: 0, y: -50 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.8, ease: "easeOut" }
}) => {
  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default FadeInMotionDiv;