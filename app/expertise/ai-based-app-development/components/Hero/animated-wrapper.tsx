'use client'

import React, { ReactNode } from 'react';
import { motion, useInView } from "framer-motion";

interface AnimationWrapperProps {
  children: ReactNode;
}

const AnimationWrapper: React.FC<AnimationWrapperProps> = ({ children }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      viewport={{ once: false }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.5,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;