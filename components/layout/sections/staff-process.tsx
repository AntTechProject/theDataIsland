"use client";
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { SparklesCore } from '@/components/ui/Sparkles';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { GoogleGeminiEffect } from '@/components/ui/GeminiEffect';
import { BorderBeam } from '@/components/ui/BorderBeam';
import ShineBorder from '@/components/ui/ShinesBorder';
import MakeUsAcall from '@/components/ui/MakeUsAcall';
import { GoArrowUpRight } from 'react-icons/go';


const StaffProcess = () => {
    const [activeButton, setActiveButton] = useState('Share Your Requirements');
    const [hoverContent, setHoverContent] = useState({
        title: "Share Your Requirements",
        description: "Share your specific needs for AI staff augmentation, including relevant tech stack, team size, and project duration. The more detailed your requirements, the faster we can connect you with the best-fit AI experts."
    });

    const ref = useRef(null);
    const controls = useAnimation();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
    const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
    const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
    const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
    const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

    const y = useTransform(scrollYProgress, [0, 0.5, 1], [30, 0, -30]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
    
            scrollYProgress.onChange(latest => {
                if (latest > 0.1 && latest < 0.9 && screenWidth >= 1400) {
                    controls.start({
                        x: '-7rem',
                        y: '-4rem',
                        transition: { duration: 2 }
                    });
                } else {
                    controls.start({
                        x: 0,
                        y: 0,
                        transition: { duration: 0.5 }
                    });
                }
            });
        };
    
        handleResize();
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [scrollYProgress, controls]);

    const buttonData = [
        { title: "Share Your Requirements", description: "Share your specific needs for AI staff augmentation, including relevant tech stack, team size, and project duration. The more detailed your requirements, the faster we can connect you with the best-fit AI experts.", color: 'bg-[linear-gradient(110deg,#0033cc,45%,#0066ff,55%,#0033cc)]' },
        { title: "Choose AI Specialists", description: "Select from our pool of skilled AI professionals, including data collectors, data analysts, AI model developers, and MLOps specialists, as well as frontend, backend, and app developers for integration tasks.", color: 'bg-[linear-gradient(110deg,#00b4db,45%,#0083b0,55%,#00b4db)]' },
        { title: "Onboard Remote AI Experts", description: "Integrate your chosen AI experts into your team, ensuring they are fully equipped and aligned with your project goals.", color: 'bg-[linear-gradient(110deg,#8e2de2,45%,#4a00e0,55%,#8e2de2)]' },
        { title: "Manage Extended AI Team", description: "Leverage our support in managing the extended AI team, ensuring seamless collaboration and productivity.", color: 'bg-[linear-gradient(110deg,#f9d423,45%,#ff4e50,55%,#f9d423)]' },
        { title: "Get Your AI Project Delivered", description: "Receive your completed AI project with our commitment to quality and precision, ensuring all your specifications are met.", color: 'bg-[linear-gradient(110deg,#fc5c7d,45%,#6a82fb,55%,#fc5c7d)]' }
    ];
    

    return (
        <div id='staff-process' className="">
            <motion.div
                ref={ref}
                style={{ y, opacity }}
                className=""
            >   
                <div className="relative py-6 lg:h-[60rem]">
                <div className="absolute -bottom-36 -right-36 w-64 h-64 bg-gradient-to-l from-gray-900 to-pink-800  rounded-full blur-[100px]" />

                <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-black-100 from-50% to-violet-900 transform scale-[0.9] rounded-lg blur-3xl" />

                    <div className="relative shadow-xl bg-black/[0.6] lg:px-4 lg:py-8 h-full overflow-hidden rounded-2xl items-start border border-gray-900">
                        <BorderBeam />
                        <div className="lg:h-[20rem] flex flex-col lg:flex-row lg:items-center py-8 justify-center">
                            <span className="text-4xl md:text-5xl font-sans font-bold lg:text-6xl z-50">
                                <h1 className="md:text-5xl text-xl lg:text-6xl font-sans font-bold text-center text-white relative z-20">
                                    Our AI Staff Augmentation Process
                                </h1>
                                <div className="relative">
                                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[8px] w-3/4 blur-sm" />
                                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-8px w-3/4" />
                                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-violet-700 to-transparent h-[8px] w-1/4 blur-sm" />
                                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-violet-700 to-transparent h-8px w-1/4" />
                                    <SparklesCore
                                        background="transparent"
                                        minSize={0.4}
                                        maxSize={1}
                                        particleDensity={1200}
                                        className="w-full h-full"
                                        particleColor="#FFFFFF"
                                    />
                                    <div className="absolute inset-0 w-full h-full bg-[#01000a] [mask-image:radial-gradient(350px_200px_at_top,transparent_100%,white)]"></div>
                                </div>
                            </span>
                        </div>
                        <div className="relative">
                            {/* Large screen layout */}
                            <div className="hidden lg:block">
                                <motion.div
                                    className="fixed z-50"
                                    animate={controls}
                                >
                                    <Card className='fixed z-50 w-[30rem] rounded-lg border -translate-y-20
                                    transform-gpu bg-gradient-to-r from-slate-900 from-90% to-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-10px_80px_-20px_#ffffff1f_inset]'>
                                       <BorderBeam /> <CardHeader>
                                            <CardTitle className='font-sans'>AI Staff Augmentation Process</CardTitle>
                                            <CardDescription className='text-lg text-slate-300 font-sans'>As a staff augmentation firm specializing in AI, we offer flexibility in hiring our professionals to meet your unique needs. Our team is equipped to support various aspects of AI projects, ensuring seamless integration and operation. Explore how we can collaborate in detail below:</CardDescription>
                                        </CardHeader>
                                        <CardContent className='flex flex-col space-y-4'>
                                            {buttonData.map((button, index) => (
                                                <button
                                                    key={index}
                                                    onMouseEnter={() => {
                                                        setActiveButton(button.title);
                                                        setHoverContent({
                                                            title: button.title,
                                                            description: button.description,
                                                        });
                                                    }}
                                                    className={`inline-flex h-12 text-lg animate-shimmer items-center justify-center rounded-md border border-slate-800 ${activeButton === button.title ? button.color : 'bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)]'} bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:text-white`}
                                                >
                                                    {button.title}
                                                </button>
                                            ))}
                                        </CardContent>
                                    </Card>
                                </motion.div>
                                <div className='translate-x-28 -translate-y-12 scale-100'>
                                    <GoogleGeminiEffect
                                        pathLengths={[
                                            pathLengthFirst,
                                            pathLengthSecond,
                                            pathLengthThird,
                                            pathLengthFourth,
                                            pathLengthFifth,
                                        ]}
                                    />
                                </div>
                                <div className="flex justify-center transform translate-y-8 translate-x-60 scale-150 font-sans">
                                    <a href="#">
                                        <MakeUsAcall
                                            title='Book Consultation'
                                            icon={<GoArrowUpRight />}
                                            position='right'
                                        />
                                    </a>
                                </div>
                                <div className="flex justify-end h-full transform translate-y-20 ">
                                    <ShineBorder
                                        className="fixed"
                                        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                                    >
                                        <Card className=' h-[21rem] xl:w-[30rem] w-[23rem] text-xl bg-gradient-to-r from-black via-black to-black'>
                                            <CardHeader>
                                                <CardTitle className="break-words">{hoverContent.title}</CardTitle>
                                                <CardDescription></CardDescription>
                                            </CardHeader>
                                            <CardContent className="break-words">
                                                {hoverContent.description}
                                            </CardContent>
                                            <CardFooter>
                                            </CardFooter>
                                        </Card>
                                    </ShineBorder>
                                </div>
                            </div>

                            {/* Small and medium screen layout */}
                            <div className="lg:hidden flex flex-col items-center space-y-6">
                                {buttonData.map((button, index) => (
                                    <div key={index} className="w-full flex flex-col items-center">
                                        <button
                                            onClick={() => {
                                                setActiveButton(button.title);
                                                setHoverContent({
                                                    title: button.title,
                                                    description: button.description,
                                                });
                                            }}
                                            // className={`p-4 w-[85vw] h-12 px-6 animate-shimmer text-white rounded-md ${button.color}`}
                                            className={`p-4 md:w-[80vw] w-[85vw] inline-flex h-12 animate-shimmer items-center justify-center text-lg rounded-md border border-slate-800 ${activeButton === button.title ? button.color : 'bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)]'} 
                                            bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 `}
                                        >
                                            {button.title}
                                        </button>
                                        {activeButton === button.title && (
                                            
                                            <Card className='md:w-[80vw] w-[85vw] mt-4 rounded-lg border border-s-violet-950 bg-gradient-to-r bg-gray-900 border-gray-800 from-black via-black to-black'>
                                                <ShineBorder
                                            className="w-[85vw] md:w-[80vw]"
                                            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                                        >
                                                <CardHeader>
                                                    <CardTitle className='font-sans'>{hoverContent.title}</CardTitle>
                                                    <CardDescription className='text-lg text-slate-300 font-sans'>{hoverContent.description}</CardDescription>
                                                </CardHeader></ShineBorder>
                                            </Card>
                                           
                                        )}
                                    </div>
                                ))}
                                <div className="w-[70vw] md:w-[65vw] flex  mt-6  font-sans py-6 scale-125">
                                    <a href="#">
                                        <MakeUsAcall
                                            title='Book Consultation'
                                            icon={<GoArrowUpRight />}
                                            position='right'
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default StaffProcess;