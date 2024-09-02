import { BackgroundBeams } from '@/components/ui/Beams';
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { FlipWords } from '@/components/ui/FlipWords';
import MagicButton from '@/components/ui/MagicButton'
import { Spotlight } from '@/components/ui/Spotlight'
import { TextGenerateEffect } from '@/components/ui/TextGenerateEffect'
import { GoFlame } from "react-icons/go";
import SparklesText from '@/components/ui/SparklesText';
import FadeMotion from './fade-motion'; // Import the motion1 component
import Image from 'next/image';
import FadeInMotionDiv from './parent-fade-motion';
import AnimatedCTASection from './button-motion';
import { ArrowRight } from 'lucide-react';
import AnimatedGridLayout from './grid-motion';
const Hero = () => {
  const words = ["Optimal-Efficiency", "Pinpoint-Precision", "Cost-Effectiveness"];
  return (
    <div id='hero' className='pb-20 pt-36 min-h-screen'>
      <div>
        <Spotlight className="top-40 xl:-top-8 xl:-left-5 xl:h-[50vw] md:-left-16 h-screen" fill="white" />
        <Spotlight className="xl:left-80 xl:top-28 xl:h-[80vh] xl:w-[50vw] top-28 sm:left-0 h-[80vh]" fill="blue" />
        <Spotlight className="h-[80vh] -top-10 xl:top-10 left-full" fill="purple" />
        {/* <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" /> */}
      </div>
      <FadeInMotionDiv>
        <FadeMotion>
          <div
            className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.014] 
        bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
            <div
              className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
       bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_4%,black)]"/>
          </div></FadeMotion>
        <div className="h-[32rem] w-full rounded-md relative flex flex-col items-center justify-center antialiased">
          <BackgroundBeams />
          <div className='flex justify-center relative my-20 z-10'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
              <TextGenerateEffect
                className='text-center text-[40px] md:text-5xl lg:text-6xl'
                words={[
                  "Your", <SparklesText key="sparkles" text="AI" className='text-[40px] md:text-5xl lg:text-6xl' />, "Partner", "Beyond", "Borders"
                ]}
              />
              <div className="flex justify-center items-center px-4">
                <div className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
                  <div className="sticky top-0 z-10">

                    <FadeMotion>
                      Experience our services with
                    </FadeMotion>

                  </div>
                  <div className="mt-4">
                    <FlipWords words={words} />
                  </div>
                </div>
              </div>
              {/* <a href="#">
              <MagicButton
                title='Get Started'
                icon={<GoFlame />}
                position='right'
              />
            </a> */}
              <AnimatedCTASection
                href="/"
                linkClassName=""
                linkWhileHover={{ scale: 1.05 }}
                linkWhileTap={{ scale: 0.95 }}
              >
                <MagicButton
                  title='Get Started'
                  icon={<GoFlame />}
                  position='right'
                />
                {/* <ArrowRight className="ml-2 h-5 w-5" /> */}
              </AnimatedCTASection>
            </div>
          </div>
        </div>
        <AnimatedGridLayout>
        <div className="relative flex flex-col">
          <div className="relative flex gap-2 z-50 items-start overflow-x-auto no-scrollbar  bottom-0 left-0 right-0">
            <div className="flex gap-2 min-w-max">
              <Card className="border border-gray-800 bg-gradient-to-r from-white/10 via-white/20 to-white/10 backdrop-blur-md backdrop-opacity-30 shadow-sm">
                <CardContent>
                  {/* {lazy} | {eager} */}
                  <Image src="/logo-1.svg" alt="The Data Island" width={112} height={112} loading='lazy' className="w-28 h-28 object-contain" />
                </CardContent>
              </Card>
              <Card className="border border-gray-800 bg-gradient-to-r from-white/10 via-white/20 to-white/10 backdrop-blur-md backdrop-opacity-30 shadow-sm">
                <CardContent>
                  <Image src="/logo-2.svg" alt="The Data Island" width={112} height={112} loading='lazy' className="w-28 h-28 object-contain" />
                </CardContent>
              </Card>
              <Card className="border border-gray-800 bg-gradient-to-r from-white/10 via-white/20 to-white/10 backdrop-blur-md backdrop-opacity-30 shadow-sm">
                <CardContent>
                  <Image src="/logo-3.svg" alt="The Data Island" width={112} height={112} loading='lazy' className="w-28 h-28 object-contain" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        </AnimatedGridLayout>
      </FadeInMotionDiv>
    </div>
  )
}

export default Hero