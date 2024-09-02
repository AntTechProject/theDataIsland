"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface FadeMotionProps {
  children: React.ReactNode;
  className?: string;
  initial?: object;
  animate?: object;
  transition?: object;
}

const FadeMotion: React.FC<FadeMotionProps> = ({
  children,
  className = "",
  initial = { opacity: 0 },
  animate = { opacity: 1 },
  transition = { duration: 0.8, delay: 0.6 }
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

export default FadeMotion;