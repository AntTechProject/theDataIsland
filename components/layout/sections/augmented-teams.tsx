"use client";
import React from 'react';
import AnimatedGridPattern from '@/components/ui/AnimatedGridPattern';
import { cn } from '@/utils/cn';
import GradualSpacing from '@/components/ui/GradualSpacingTextEffect';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HoverEffect } from '@/components/ui/CardHoverEffect';

const AugmentedTeams = () => {
    return (
        <div className='relative' id='augmented-teams'>
            {/* Top-left circular gradient */}
            <div className="absolute -top-32 -left-20 w-96 h-96 bg-gradient-to-l from-red-900 to-indigo-800 rounded-full blur-[100px]" />

            {/* Bottom-right gradient */}
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-t from-indigo-500 via-violet-500 to-pink-600 rounded-lg rotate-12 blur-[200px]" />

            <div className="relative h-full py-12 z-50">

            {/* <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 via-teal-500 to-indigo-500 transform scale-[0.95] rounded-lg blur-3xl" /> */}
                {/* <div className="absolute inset-x-96 -inset-y-0 h-full w-full bg-gradient-to-tl from-black from-10% to-black transform scale-[1] skew-x-[-10deg] skew-y-[10deg] rounded-lg blur-3xl" />
                        <div className="absolute -inset-x-96 -inset-y-0  h-full w-full bg-gradient-to-l from-black from-10% to-black transform scale-[1] -skew-x-[-10deg] -skew-y-[10deg] rounded-lg blur-3xl" /> */}
                <div className="relative shadow-xl bg-slate-950/[0.5] lg:px-4 px-2 lg:py-4 h-full overflow-hidden rounded-2xl items-start border border-gray-900">
                    <h1 className="font-bold font-sans text-xs text-white lg:mb-4 relative z-50 lg:py-0 py-4 lg:px-0 px-2">
                        ● Augmented Teams
                    </h1>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:px-0 lg:py-0 px-2">
                        <AugmentedTeamsClient />
                    </div>
                    <div className="max-w-7xl mx-auto">
                        <HoverEffect items={team} className='text-4xl' />
                    </div>
                    <AnimatedGridPattern
                        numSquares={30}
                        maxOpacity={0.1}
                        duration={3}
                        repeatDelay={1}
                        className={cn(
                            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                            "inset-x-0 inset-y-[-50%] h-[200%] skew-y-12",
                        )}
                    />
                </div>
            </div>
        </div>
    );
};

export default AugmentedTeams;

export const team = [
    {
        title: "Data Collection & Annotation",
        description:
            "Dedicated data collectors specializing in data collection & annotation for high quality inputs for AI & machine learning models.",
        link: "",
        gradient: "gradient-text-3",
    },
    {
        title: "Generative AI",
        description:
            "Augment your team with our Generative AI experts with the top of advanced LLM's & image generation techniques, leading to innovative solutions.",
        link: "",
        gradient: "gradient-text-purple",
    },     
    {
        title: "Computer Vision",
        description:
            "Partner with leading-edge computer vision professionals, thereby enhancing image recognition & image processing capabilities.",
        link: "",
        gradient: "gradient-text-light-blue-purple",
    },
    {
        title: "NLP",
        description:
            "Get the best NLP expertise in language underst&ing, text analyses, & conversational agents & language models development.",
        link: "",
        gradient: "gradient-text-golden",
    },   
    {
        title: "Data Scientists",
        description:
            "Drive your projects forward with proficient Data Scientists specialized in deep analysis of complex data sets & derive actionable insights toward data-driven decisions.",
        link: "",
        gradient: "gradient-text-coral",
    },
    {
        title: "UI/UX Engineers",
        description:
            "Enhance user experiences by involving UI/UX engineers as they are instrumental in creating intuitive interfaces & seamless interactions.",
        link: "#",
        gradient: "gradient-text-blue-purple",
    },
    {
        title: "Web & App Developers",
        description:
            "Scale up your development capabilities with versatile Web & App Developers knowledgeable both in frontend & backend technologies & in mobile development using Flutter & Swift.",
        link: "#",
        gradient: "gradient-text-2",
    },
    {
        title: "DevOps & MLOps Engineers",
        description:
            "Optimize your deployment pipelines by continuous integration & processes, together with cloud infrastructure set up for the reliable systems.",
        link: "#",
        gradient: "gradient-text-aqua", // Reuse gradient classes or add new ones
    },
    {
        title: "Project Managers",
        description:
            "Assure project success with experienced Project Managers specialized in Agile methodologies & technical project oversight, ensuring the delivery of projects on time & within scope.",
        link: "#",
        gradient: "gradient-text-lime",
    },
];


const AugmentedTeamsClient = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.span
            ref={ref}
            className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold z-50 lg:py-0 py-4
            font-display text-center fontsans tracking-[-0.1em] text-black dark:text-white md:leading-[5rem]"
        >
            {inView && (
                <GradualSpacing
                    className=""
                    text="Augmented Teams"
                />
            )}
            {!inView && ""}
        </motion.span>
    );
};
