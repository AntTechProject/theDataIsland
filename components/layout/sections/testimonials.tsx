"use client";
import React, { useRef } from 'react'
import { InfiniteMovingCards } from '@/components/ui/MovingCards';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/Avatar"


const Testimonials = () => {

    return (
        <div id='testimonials' className="pb-8">
            <div className="relative">
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-teal-900 via-black-100 to-teal-950 transform scale-[0.95]  rounded-lg blur-3xl" />
                <div className="relative shadow-xl lg:px-4 md:px-4 px-2 py-8 h-full overflow-hidden rounded-2xl items-start">
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

                    <h1 className="font-bold font-sans text-2xl text-white mb-4 relative z-50 ">
                        ● Testimonials
                    </h1>
                    <div className="flex flex-col lg:flex-row lg:items-center">
                        <span className="text-4xl md:text-5xl font-sans font-bold lg:text-6xl z-50">
                            {/* AI Staff Augmentation */}
                        </span>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-end font-normal text-base text-pretty z-50 mt-4">
                        <div className="rounded-md flex flex-col antialiased   items-center justify-center relative overflow-hidden">
                            <InfiniteMovingCards
                                items={testimonials}
                                direction="right"
                                speed="slow"
                            />
                        </div>
                    </div>
                </div>
            </div> </div>
    )
}
const testimonials = [
    {
        quote: "The Data Island has performed an excellent job that meet our expectation regularly, and we are happy to work with the vibrant team and the company.It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        name: "Mikka Varri",
        title: "TD, Dilosys Interonational Ltd",
        avatar: "/avatar/mv.png", // Add the avatar URL

    },
    {
        quote: "The Data Island has been a great backend support for our data labelling task. They have labelled different types of vehicle for our vehicle detection algorithm. We mostly love their accuracy and precision regarding data annotation works.",
        name: "Tanvir Tabassum",
        title: "CEO, Lynkus.Ai",
        avatar: "/avatar/tt.png", // Add the avatar URL

    },
    {
        quote: "The Data Island was excellent at keeping us engaged and explaining the concepts in an applicable way. Today’s Basic Computer Training Course will help me acknowledge my team’s different personalities and will help me to manage them better, benefitting them as well as our entire company.",
        name: "Md. Anisuzzaman",
        title: "MD, Faith Overseas Ltd.",
        avatar: "/avatar/ma.png", // Add the avatar URL

    },
];
export default Testimonials
