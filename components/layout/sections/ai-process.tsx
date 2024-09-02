
import React from 'react';
import { BentoGrid, BentoCard } from '@/components/ui/NewCard';
import Image from 'next/image';
const features = [
    {
        name: "Data Collection and Annotation",
        description: "● Enhance your AI training datasets with precise data collection and annotation services.",
        href: "/",
        cta: "Learn more",
        background: <Image src="/ProcessImages/3.jpg" loading='lazy' width={1120} height={1120} alt="Data Collection and Annotation" className="absolute [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]" />,
        className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
        name: "Data Analytics",
        description: "● Leverage our data analytics expertise to gain deeper insights and drive data-driven decisions.",
        href: "/",
        cta: "Learn more",
        background: <Image src="/ProcessImages/7.jpg" loading='lazy' width={1120} height={1120} alt="Data Analytics" className="absolute [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]" />,
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
        name: "AI Model Development",
        description: "● Access our skilled AI model developers to build and refine your machine learning models.",
        href: "/",
        cta: "Learn more",
        background: <Image src="/ProcessImages/8.jpg" loading='lazy' width={1120} height={1120} alt="AI Model Development" className="absolute -inset-y-36 [mask-image:linear-gradient(to_top,transparent_0%,#000_100%)]" />,
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
        name: "MLOps and DevOps Integration",
        description: "● Ensure smooth deployment and maintenance of your AI models with our MLOps and DevOps services.",
        href: "/",
        cta: "Learn more",
        background: <Image src="/ProcessImages/10.jpg"loading='lazy' width={1472} height={832} alt="MLOps and DevOps Integration" className="absolute [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]" />,
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
        name: "AI Based Software Development",
        description:
            "● Integrate advanced AI pipelines with frontend and backend solutions for scalable, cutting-edge applications.",
        href: "/",
        cta: "Learn more",
        background: <Image src="/ProcessImages/11.jpg"loading='lazy' width={1472} height={832} alt="AI Based Software Development" className="absolute [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]" />,
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
];
const AIProcess = () => {
    // const ref = useRef(null);
    // const { scrollYProgress } = useScroll({
    //     target: ref,
    //     offset: ["start end", "end start"]
    // });

    // // Define transformations based on scroll position
    // const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);
    // const opacity = useTransform(scrollYProgress, [0, 0, 1], [0, 1, 1]);

    // // const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.4]);

    return (

        <div className="relative h-full py-6 z-50" id='ai-process'>
            {/* <div className="absolute h-full w-full bg-gradient-to-r from-blue-500 from-10% to-emerald-500 transform scale-[0.9] rounded-lg blur-3xl" /> */}

            <div className="relative shadow-xl bg-black-100/[0.3] lg:px-4 px-2 lg:py-4 h-full overflow-hidden rounded-2xl items-start border border-gray-900">

                <h1 className="font-bold font-sans text-xs text-white lg:mb-4 relative z-50 lg:py-0 py-4 lg:px-0 px-2">
                    ● Our AI Process
                </h1>
                <div className="lg:items-center lg:px-0 lg:py-0 px-2">
                    <span className="text-xl md:text-3xl lg:text-3xl font-sans font-bold bg-gradient-to-r from-blue-500 to-red-500 text-transparent bg-clip-text z-50 px-0.5 lg:px-1">
                        We Deliver
                    </span>
                    <br />
                    <span className="text-4xl md:text-6xl lg:text-6xl font-sans font-bold bg-gradient-to-r from-blue-500 to-red-500 text-transparent bg-clip-text z-50 animated-gradient">
                        RESOURCES
                    </span>
                    <br />
                    <span className="text-xl md:text-3xl lg:text-3xl font-sans font-bold bg-gradient-to-r from-blue-500 to-red-500 text-transparent bg-clip-text z-50 px-0.5 lg:px-1">
                         in the complete AI PROCESS
                    </span>
                </div>                
                <div className="flex flex-col lg:flex-row lg:items-center justify-center py-6">
                    <BentoGrid className="lg:grid-rows-3">
                        {features.map((feature) => (
                            <BentoCard key={feature.name} {...feature} />
                        ))}
                    </BentoGrid>
                </div>
            </div>
        </div>
    );
};

export default AIProcess;
