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
const Services = () => {
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
      className="pb-8 pt-20"
      id='staff-services'
      style={{ opacity }} // Apply the opacity transform here
    >
      <div className="relative">
        <div className="absolute inset-3/4 top-0 right-80 h-screen w-screen bg-gradient-to-b from-black-100 from-10% via-teal-500 to-purple transform-gpu scale-[0.55] rounded-full blur-[250px]" />
        <div className="absolute inset-80 top-0 right-80 -translate-x-full h-screen w-screen bg-gradient-to-b from-black-100 from-10% via-teal-500 to-purple transform-gpu scale-[0.55] rounded-full blur-[250px]" />
        <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-black-100 from-50% to-violet-900 transform scale-[0.9] rounded-lg blur-3xl" />
        <div className="relative shadow-xl bg-black/[0.6] border border-gray-900 lg:px-4 md:px-4 px-2 py-8 h-full overflow-hidden rounded-2xl items-start">
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
          <div className="flex flex-col xl:flex-col lg:items-center py-8">
            <span className="text-4xl md:text-5xl font-sans font-bold lg:text-6xl z-50">
              Web Development Staff-Aug
            </span>
            <span className="font-sans font-bold gradient-text lg:pl-4">
              <TypewriterEffectSmooth words={words} className='' />
            </span>
          </div>
          <div className="flex flex-col lg:flex-row justify-end font-normal text-base text-pretty z-50 mt-4">

            <h3 className="block lg:hidden w-full mb-4">
              <TextGenerateEffect
                className='text-white font-sans text-lg'
                words={'We offer various employment choices to match your specific needs as a specialised AI staff augmentation company, together with professional support for seamless integration and operation of AI projects.'}
              />
            </h3>

            <EvervaultCard className="hidden lg:block" text="As a staff augmentation firm specializing in AI, we offer flexibility in hiring our professionals to meet your unique needs. Our team is equipped to support
  various aspects of AI projects, ensuring seamless integration and operation. Explore how we can collaborate in detail below:" />
            <motion.div
              ref={ref}
              style={{ x, opacity }}
              className="w-full lg:w-[50rem] mb-4 lg:mb-0"
            >
              <Card className="lg:w-full mb-4 lg:mb-0 border border-gray-900 bg-gradient-to-r from-white/[0.05] via-white/[0] to-white/2 backdrop-blur-md backdrop-opacity-30 shadow-sm">
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <span className="flex text-2xl font-sans font-bold lg:text-xl mb-3">
                        The Best We Offer &
                      </span>
                      <AccordionTrigger className='text-left lg:p-4 md:p-4 font-sans font-bold text-lg'>Consultation and Ideation</AccordionTrigger>
                      <AccordionContent className='lg:ml-4 md:ml-4 font-sans text-lg'>
                        ● Engage with stakeholders to understand the
project’s vision, define objectives, and explore how AI can enhance
web functionalities and user experiences.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className='text-left lg:p-4 md:p-4 font-sans font-bold text-lg'>Feasibility Study</AccordionTrigger>
                      <AccordionContent className='lg:ml-4 md:ml-4 font-sans text-lg'>
                        ● Analyze technical requirements, evaluate available AI
technologies, and identify any constraints to assess the project’s
feasibility and ensure that the AI integration is practical and
achievable.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger className='text-left lg:p-4 md:p-4 font-sans font-bold text-lg'>Design and Prototyping</AccordionTrigger>
                      <AccordionContent className='lg:ml-4 md:ml-4 font-sans text-lg'>
                        ● Develop detailed design specifications and
create prototypes that illustrate how AI features will be incorporated
into the web application. This phase allows for visualizing and
refining the AI components before full development.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger className='text-left lg:p-4 md:p-4 font-sans font-bold text-lg'>Development</AccordionTrigger>
                      <AccordionContent className='lg:ml-4 md:ml-4 font-sans text-lg'>
                        ● Implement the web application, integrating AI technologies
such as machine learning models, recommendation engines, or
chatbots. Ensure the application is scalable, secure, and performs
optimally.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger className='text-left lg:p-4 md:p-4 font-sans font-bold text-lg'>Testing and Validation</AccordionTrigger>
                      <AccordionContent className='lg:ml-4 md:ml-4 font-sans text-lg'>
                        ● Perform extensive testing to validate the AI
functionalities and overall web application. This includes unit testing,
integration testing, and user acceptance testing to confirm that AI
features work as intended and enhance the user experience.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                      <AccordionTrigger className='text-left lg:p-4 md:p-4 font-sans font-bold text-lg'>Deployment and Support</AccordionTrigger>
                      <AccordionContent className='lg:ml-4 md:ml-4 font-sans text-lg'>
                        ● Launch the web application into the
production environment. Provide ongoing support to monitor
performance, address issues, and update the application as needed
to incorporate improvements and adapt to user feedback.
                      </AccordionContent>
                    </AccordionItem>  
                  </Accordion>
                </CardContent>
              </Card>

            </motion.div>
          </div>
          <Meteors number={30} />
        </div>
      </div>

    </motion.div>
  )
}

export default Services
