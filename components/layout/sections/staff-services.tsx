"use client";
import React, { useRef } from 'react'
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Meteors } from '@/components/ui/MeteorEffect'
import { EvervaultCard, Icon } from '@/components/ui/EvervaultCard'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion"
import { TypewriterEffectSmooth } from '@/components/ui/TypeWriterEffect'
import { TextGenerateEffect } from '@/components/ui/TextGenerateEffect'
import { motion, useScroll, useTransform } from 'framer-motion';

const words = [
  {
    text: "Services",
    className: "lg:text-6xl md:text-5xl text-3xl",
  },
  {
    text: "We",
    className: "lg:text-6xl md:text-5xl text-3xl",
  },
  {
    text: "Provide",
    className: "lg:text-6xl md:text-5xl text-3xl",
  },
];
const StaffServices = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Animate card sliding in from the right
  const x = useTransform(scrollYProgress, [0, 0.5, 0.7, 1], [100, 0, 0, 100]);
  // const opacity1 = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]); // Fades in and out

  return (
    <motion.div
      ref={ref}
      className="pb-8"
      id='staff-services'
      style={{ opacity }} // Apply the opacity transform here
    >      
        <div className="relative">
        <div className="absolute inset-3/4 top-0 right-80 h-screen w-screen bg-gradient-to-b from-black-100 from-10% via-teal-500 to-purple transform-gpu scale-[0.55] rounded-full blur-[250px]" />
        <div className="absolute inset-80 top-0 right-80 -translate-x-full h-screen w-screen bg-gradient-to-b from-black-100 from-10% via-teal-500 to-purple transform-gpu scale-[0.55] rounded-full blur-[250px]" />

        <div className="relative shadow-xl bg-gray-900/[0.5] border border-gray-800 lg:px-4 md:px-4 px-2 py-8 h-full overflow-hidden rounded-2xl items-start">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>

            <h1 className="font-bold font-sans text-xs text-white mb-4 relative z-50">
              ● Service We Provide
            </h1>
            <div className="flex flex-col xl:flex-row lg:items-center py-8">
              <span className="text-4xl md:text-5xl font-sans font-bold lg:text-6xl z-50">
                AI Staff Augmentation
              </span>
              <span className="font-sans font-bold gradient-text lg:pl-4">
                <TypewriterEffectSmooth words={words} className='' />
              </span>
            </div>
            <div className="flex flex-col lg:flex-row justify-end font-normal text-base text-pretty z-50 mt-4">

              <h3 className="block lg:hidden w-full mb-4">
                {/* <TextGenerateEffect
                  className='text-white font-sans text-lg'
                  words={'As a specialized AI staff augmentation firm, we provide flexible hiring options to meet your specific needs, offering expert support for seamless AI project integration and operation.'}
                /> */}
                <TextGenerateEffect
                  className='text-white font-sans text-lg'
                  words={'We offer various employment choices to match your specific needs as a specialised AI staff augmentation company, together with professional support for seamless integration and operation of AI projects.'}
                />
              </h3>

              <EvervaultCard className="hidden lg:block" text="As a staff augmentation firm specializing in AI, we offer flexibility in hiring our professionals to meet your unique needs. Our team is equipped to support
  various aspects of AI projects, ensuring seamless integration and operation. Explore how we can collaborate in detail below:" />

              {/* <EvervaultCard className="hidden lg:block" text="Our variable employment forms aim to adjust to your various needs as a provider of artificial intelligence-based staff augmentation services. The experts are on stand-by to take you through in every aspect so that your AI project integrates smoothly and runs smoothly. Read more about how we can collaborate:" /> */}
              <motion.div
                ref={ref}
                style={{ x, opacity }}
                className="w-full lg:w-[50rem] mb-4 lg:mb-0"
              >
                <Card className="lg:w-full mb-4 lg:mb-0 border border-gray-800 bg-gradient-to-r from-white/15 via-white/2 to-white/2 backdrop-blur-md backdrop-opacity-30 shadow-sm">
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <span className="flex text-2xl font-sans font-bold lg:text-xl mb-3">
                          The Best We Offer &
                        </span>
                        <AccordionTrigger className='text-left lg:p-4 md:p-4 font-sans font-bold text-lg'>Boost Your AI Projects with Our Expertise</AccordionTrigger>
                        <AccordionContent className='lg:ml-4 md:ml-4 font-sans text-lg'>
                        {/* ● Enrich your AI projects with our services in the following domains: correct data gathering and annotation; innovative analytics for deeper insight into your data; qualified AI model development; effortless MLOps and DevOps integration; specialized support for nice, seamless integration of the most advanced AI pipelines with Frontend and Backend Systems to prepare your AI infrastructure for current needs and future growth. */}
                        ● Enhance your AI projects with expert services in data collection and annotation, advanced analytics, AI model development, MLOps and DevOps integration, and seamless integration of AI pipelines with frontend and backend systems for scalable growth.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger className='text-left lg:p-4 md:p-4 font-sans font-bold text-lg'>Flexible Project Management</AccordionTrigger>
                        <AccordionContent className='lg:ml-4 md:ml-4 font-sans text-lg'>
                        {/* ● Manage your team directly to maintain full control over your project. You can also assign a part-time or full-time project manager who will take over management tasks. */}
                        ● Maintain full control or assign a part-time/full-time project manager to handle management tasks
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger className='text-left lg:p-4 md:p-4 font-sans font-bold text-lg'>Project Handover Support</AccordionTrigger>
                        <AccordionContent className='lg:ml-4 md:ml-4 font-sans text-lg'>
                        ● Looking for a new technology partner for your project? We make this smooth, efficient, and easy to transition. This involves takeover of your project midway to ensure continuity.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                        <AccordionTrigger className='text-left lg:p-4 md:p-4 font-sans font-bold text-lg'>Short-Term Staff Augmentation</AccordionTrigger>
                        <AccordionContent className='lg:ml-4 md:ml-4 font-sans text-lg'>
                        ● In our Short-Term Staff Augmentation, we help optimize urgent hiring needs by providing ready-to-deploy teams and access to a pool of top tech talent, enabling onboarding for skilled professionals within a week to meet immediate project demands.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-5">
                        <AccordionTrigger className='text-left lg:p-4 md:p-4 font-sans font-bold text-lg'>Long-Term Staff Augmentation</AccordionTrigger>
                        <AccordionContent className='lg:ml-4 md:ml-4 font-sans text-lg'>
                        ● Our Extended Team service offers recruitment on demand and ensures stability in the long run. We find developers with the right mix of both hard and soft skills for your projects, take care of the rest, and let either you or your project manager be in charge of completing tasks while we ensure seamless integration into your team.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>

              </motion.div>
            </div>


            {/* Meaty part - Meteor effect */}
            <Meteors number={30} />

          </div>
        </div>
     
    </motion.div>
  )
}

export default StaffServices
