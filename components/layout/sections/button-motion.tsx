"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface AnimatedCTASectionProps {
  href: string;
  children: React.ReactNode;
  containerClassName?: string;
  linkClassName?: string;
  containerInitial?: object;
  containerAnimate?: object;
  containerTransition?: object;
  linkWhileHover?: object;
  linkWhileTap?: object;
}

const AnimatedCTASection: React.FC<AnimatedCTASectionProps> = ({
  href,
  children,
  containerClassName = "",
  linkClassName = "",
  containerInitial = { opacity: 0, y: 50 },
  containerAnimate = { opacity: 1, y: 0 },
  containerTransition = { duration: 0.8, delay: 0.8 },
  linkWhileHover = { scale: 1.05 },
  linkWhileTap = { scale: 0.95 }
}) => {
  return (
    <motion.div 
      className={containerClassName}
      initial={containerInitial}
      animate={containerAnimate}
      transition={containerTransition}
    >
      <motion.div
        whileHover={linkWhileHover}
        whileTap={linkWhileTap}
      >
        <Link href={href} className={linkClassName}>
          {children}
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedCTASection;