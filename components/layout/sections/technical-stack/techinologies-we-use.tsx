"use client";
import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GradualSpacing from '@/components/ui/GradualSpacingTextEffect';
const TechnologiesWeUse = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    return (
        <motion.span
            ref={ref}
            className="text-3xl md:text-5xl lg:text-6xl font-sans font-bold z-50 lg:py-0 py-4 tracking-[-0.1em] text-black dark:text-white leading-tight md:leading-[5rem]"
        >
            {inView && <GradualSpacing text="Technologies We Use" />}
            {!inView && "Technologies We Use"}
        </motion.span>
    )
}

export default TechnologiesWeUse
