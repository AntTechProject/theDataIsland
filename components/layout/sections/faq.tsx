"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedGridPattern from '@/components/ui/AnimatedGridPattern';
import GradualSpacing from '@/components/ui/GradualSpacingTextEffect';
import { cn } from '@/utils/cn';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleAccordionClick = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: 'How do I get started with staff augmentation?',
            answer:
                "Share your project requirements with us, including the tech stack, team size, and duration. We’ll match you with suitable professionals and assist with onboarding.",
        },
        {
            question: 'What is the duration of staff augmentation engagements?',
            answer:
                'We offer both short-term and long-term staff augmentation solutions. You can choose the duration that best fits your project needs.',
        },
        {
            question: 'How quickly can I onboard augmented staff?',
            answer:
                'For short-term needs, we can provide ready-to-deploy teams and onboard skilled professionals within a week. For long-term needs, we ensure a smooth recruitment process.',
        },
        {
            question: 'What are the costs associated with staff augmentation?',
            answer:
                'Costs vary depending on the roles, duration, and expertise required. We provide transparent and very competitive pricing with a guaranteed  at least 20 percent reduction in cost when you decide to work with us based on your specific needs and project scope.',
        },
        {
            question: 'How do you select your resources?',
            answer:
                'Our resources are groomed by us using our own training program called the “The Data Island Academy” .Our academy has five different resources located in Dhaka, Bangladesh where we instruct to create Mid level and junior resources) possessing the competencies needed in satisfying project needs efficiently.',
        },
        {
            question: 'What are the specializations of your training program?',
            answer:
                'We offer AI pipeline courses, from Data Annotation to MLOps, with durations ranging from one to six months.',
        },
    ];

    return (
        <div id='faq' className='py-6 pb-20'>
            <div className="relative h-full z-50">
                <BackgroundOverlay />
                <div className="relative shadow-xl bg-transparent lg:px-4 px-2 lg:py-4 h-full overflow-hidden rounded-2xl border border-gray-900">
                    <Title />
                    <div className="flex flex-col lg:flex-row lg:items-center lg:px-0 lg:py-0 px-2">
                        <OURFAQ />
                    </div>
                    <h1 className='text-center font-sans text-3xl lg:text-4xl'>Common Questions</h1>
                    <div className="h-full py-12">
                        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="space-y-4">
                                {faqData.map((faq, index) => (
                                    <AccordionItem
                                        key={index}
                                        index={index}
                                        activeIndex={activeIndex}
                                        handleAccordionClick={handleAccordionClick}
                                        question={faq.question}
                                        answer={faq.answer}
                                    />
                                ))}
                            </div>
                        </div>
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

const BackgroundOverlay = () => (
    <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-black-100 via-teal-900 to-black-100 transform scale-[0.94] rounded-lg blur-3xl" />
);

const Title = () => (
    <h1 className="font-bold font-sans text-xs text-white lg:mb-4 relative z-50 lg:py-0 py-4 lg:px-0 px-2">
        ● Our F.A.Q.
    </h1>
);

const OURFAQ = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.span
            ref={ref}
            className="text-3xl md:text-5xl lg:text-6xl font-sans font-bold z-50 lg:py-0 py-4 tracking-[-0.1em] text-black dark:text-white leading-tight md:leading-[5rem]"
        >
            {inView && <GradualSpacing text="Our F.A.Q." />}
            {!inView && "Our F.A.Q."}
        </motion.span>
    );
};

const AccordionItem: React.FC<{
    index: number;
    activeIndex: number | null;
    handleAccordionClick: (index: number) => void;
    question: string;
    answer: string;
}> = ({ index, activeIndex, handleAccordionClick, question, answer }) => {
    const isOpen = index === activeIndex;

    const contentVariants = {
        collapsed: { opacity: 0, height: 0 },
        expanded: { opacity: 1, height: 'auto' }
    };
    return (
        <motion.div
            className={`bg-black-300 rounded-lg shadow-md ${isOpen ? 'border-2 border-gray-700' : ''}`}
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            layout
        >
            <button
                className="w-full flex justify-between items-center px-6 py-4 text-left text-white hover:bg-white hover:underline hover:text-teal-900 hover:rounded-lg focus:outline-none"
                onClick={() => handleAccordionClick(index)}
            >
                <h3 className="text-xl font-sans first-letter:font-extrabold">{question}</h3>
                <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </motion.div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        className="border-t overflow-hidden"
                        key="content"
                        initial="collapsed"
                        animate="expanded"
                        exit="collapsed"
                        variants={contentVariants}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <div className="px-6 py-4">
                            <motion.p 
                                className="text-white font-sans text-lg lg:text-xl first-letter:font-bold"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                            >
                                {answer}
                            </motion.p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};


export default FAQ;