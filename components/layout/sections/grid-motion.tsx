"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedGridLayoutProps {
  children: React.ReactNode;
  className?: string;
  initial?: object;
  animate?: object;
  transition?: object;
  initial2?: object;
  animate2?: object;
  transition2?: object;
  gridClassName?: string;
}

const AnimatedGridLayout: React.FC<AnimatedGridLayoutProps> = ({
  children,
  className = "",
  initial = { opacity: 0},
  animate = { opacity: 1},
  transition = { duration: 0.8, delay: 0.8 },
  initial2 = { y: 20},
  animate2 = { y: 0},
  transition2 = { duration: 0.8, delay: 1.8 },

}) => {
  return (
    <motion.div
      className={`${className}`}
      initial={initial}
      animate={animate}
      transition={transition}
    ><motion.div
    className={`${className}`}
    initial={initial2}
    animate={animate2}
    transition={transition2}
  >
      {children} 
      </motion.div>
    </motion.div>
  );
};

export default AnimatedGridLayout;