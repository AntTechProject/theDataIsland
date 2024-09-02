'use client'

import React from 'react';
import { motion, useInView } from "framer-motion";

const MULTIDIRECTION_SLIDE_VARIANTS = {
  hidden: { opacity: 0, x: "-25vw" },
  show: { opacity: 1, x: 0 },
  right: { opacity: 0, x: "25vw" },
};

const AnimatedTitle: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref} className="overflow-hidden xl:max-w-xl justify-center">
      <motion.h1
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={MULTIDIRECTION_SLIDE_VARIANTS}
        transition={{ duration: 1 }}
        className="xl:text-left text-center font-display text-5xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl 
          xl:text-8xl md:leading-[5rem] text-transparent bg-clip-text bg-gradient-to-r from-[#00F260] from-10% to-[#0575E6] to-90%"
      >
        DevOps & MLOps
      </motion.h1>
      <motion.h1
        initial="right"
        animate={isInView ? "show" : "hidden"}
        variants={MULTIDIRECTION_SLIDE_VARIANTS}
        transition={{ duration: 1 }}
        className="xl:text-left text-center font-display text-5xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl 
          xl:text-8xl  md:leading-[5rem] text-transparent bg-clip-text bg-gradient-to-r from-[#0575E6] to-[#00F260] animate-gradient"
      >
        InteGration
      </motion.h1>
    </div>
  );
};

export default AnimatedTitle;