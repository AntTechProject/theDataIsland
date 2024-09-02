import React from 'react'
import {
    Card,
    CardContent,
  } from "@/components/ui/card"
  import { Meteors } from '@/components/ui/MeteorEffect';
  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/Accordion"
const StaffAug = () => {
  return (
    <div id='staff-aug' className="group/pulse">
        <div className="relative py-16 ">
          {/* <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 h-full w-full bg-gradient-to-r from-purple via-indigo-500 to-emerald-500 scale-[0.9] rounded-full blur-[50px]" /> */}
          <div className="absolute top-2 group-hover/pulse:animate-pulse lg:top-13 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-[85%] bg-gradient-to-r from-purple via-indigo-500 to-emerald-500 rounded-full blur-3xl"></div>
          {/* <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-gradient-to-r from-purple via-indigo-500 to-emerald-500 rounded-full blur-3xl"></div> */}

          <div className="relative shadow-xl bg-gray-900/[0.91] border border-gray-800 lg:px-4 md:px-4 px-2 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
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
              ● AI Staff Augmentation
            </h1>
            <span className="text-4xl md:text-5xl font-sans font-bold lg:text-6xl">
              AI Staff Augmentation
            </span>
            <div className="w-full relative font-normal text-base text-pretty z-50 lg:flex-grow lg:flex lg:gap-4 py-6">
              <Card className="transition ease-in-out delay-150 hover:scale-105 hover:rounded-2xl rounded-2xl mb-4 lg:mb-0 transform-gpu dark:bg-gray-900/[0.4] dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-10px_80px_-20px_#ffffff1f_inset]">
                <CardContent>
                  {/* <span className='font-sans text-lg hidden lg:block'>
                    Are you seeking AI experts with specific skill sets to bridge your talent gaps? The Data Island, our AI staff augmentation and platform service, can help you strike the perfect balance between project progress and cost-effectiveness. Scale your team effortlessly according to your current development needs. We eliminate the costly and time-consuming recruitment processes and the paperwork hassle of on-site hiring.
                  </span> */}
                  <span className='font-sans text-xl hidden lg:block'>
                  Looking to fill your AI talent gaps? The Data Island is here to help with our AI staff augmentation services. Scale your team quickly and cost effectively, bypassing all the hassles of recruitment to get the right talent exactly when you need it.
                  </span>
                  <div className='font-sans text-lg block lg:hidden w-full'>
                  <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <span className="flex text-2xl font-sans font-bold lg:text-xl mb-3">
                          Important Details You Might Want to Know
                        </span>
                        <AccordionTrigger className='text-left lg:p-4 md:p-4 font-sans font-bold text-lg'>AI Team Boost</AccordionTrigger>
                        <AccordionContent className='lg:ml-4 md:ml-4 font-sans text-lg'>
                        ● Are you seeking AI experts with specific skill sets to bridge your talent gaps? The Data Island offers AI staff augmentation that balances project progress and cost-efficiency, allowing you to scale your team without the hassle of recruitment and on-site hiring.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger className='text-left lg:p-4 md:p-4 font-sans font-bold text-lg'>Cost Optimization</AccordionTrigger>
                        <AccordionContent className='lg:ml-4 md:ml-4 font-sans text-lg'>
                        ● The Data Island provides customized AI staff augmentation services, professionally managed expertise without the added recruitment costs. 
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger className='text-left lg:p-4 md:p-4 font-sans font-bold text-lg'>AI Integration</AccordionTrigger>
                        <AccordionContent className='lg:ml-4 md:ml-4 font-sans text-lg'>
                        ● The Data Island`&apos;`s remote AI professionals augment your in-house team, supporting desktop, mobile, and web development in global projects—dealing from data annotation and model training to AI deployment.
                        </AccordionContent>
                      </AccordionItem>                     
                    </Accordion>
                    </div>
                </CardContent>
              </Card>
              <Card className="transition ease-in-out delay-450 hover:scale-105 hover:mx-2 hover:rounded-2xl rounded-2xl mb-4 lg:mb-0 transform-gpu dark:bg-gray-900/[0.4] dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-10px_80px_-20px_#ffffff1f_inset] hidden lg:block">
                <CardContent>
                  {/* <span className='font-sans text-lg hidden lg:block'>
                  Looking to fill your AI talent gaps? The Data Island is here to help with our AI staff augmentation services. Scale your team quickly and cost effectively, bypassing all the hassles of recruitment to get the right talent exactly when you need it.
                  </span> */}
                  <span className='font-sans text-xl hidden lg:block'>
                  Data Island is a leading AI Staff Augmentation Agency that offers on-demand Staffing Solutions without the extra costs for recruitment. Our remote AI specialists blend in seamlessly with your team to support product development across desktop, mobile, and web. Additionally, our platform allows you to annotate data, train models, and deploy AI solutions for projects worldwide.                  </span>
                </CardContent>
              </Card>
            </div>
            <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
              Explore
            </button>
            <Meteors number={30} />
          </div>
        </div>
      </div>
  )
}

export default StaffAug
