import React from 'react';
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/utils/cn";
import AnimatedText from './animated-text-hero';
import AnimatedTitle from './animated-title-hero';
import AnimationWrapper from './animated-wrapper';


const Hero = () => {
  // Array of texts for the slider
  const texts = [
    "This refers to the creation of mobile or desktop applications that leverage-",
    " AI technologies to provide advanced functionalities. "
  ];

  return (
    <AnimationWrapper>
    <div className='pb-20 pt-36 font-sans'>
      <div className="h-screen w-full absolute top-0 left-0 flex items-center justify-center dark:bg-black">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-black-100 rounded-full filter blur-[100px] opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-black rounded-full filter blur-[100px] opacity-30 animate-pulse"></div>
        </div>
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] animate-pulse",
          )}
        />
      </div>
      <div className='relative my-20 z-10'>
        <div className=''>
          <AnimatedTitle />
          <div className="flex justify-end mt-12">
            <div className="max-w-2xl lg:text-center">
              <AnimatedText texts={texts} />
            </div>
          </div>
        </div>
      </div>
    </div>
    </AnimationWrapper>
  )
}

export default Hero;