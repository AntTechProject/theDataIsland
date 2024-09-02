"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/utils/cn";
import { HoveredLink, Menu, MenuItem } from "../ui/Navbar-menu";
import { motion } from "framer-motion";
import MakeUsAcall from "../ui/MakeUsAcall";
import { IoIosCall } from "react-icons/io";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import Image from "next/image";

import FadeInMotionDiv from "./sections/parent-fade-motion";
import Link from "next/link";
export function NavbarTop() {
    return (
        <nav className="relative w-full">
            <Navbar />
        </nav>
    );
}

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [hidden, setHidden] = useState(false);

    const jumpAnimation = {
        initial: { y: -100, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { type: "spring", stiffness: 100, damping: 20 }
    };
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const toggleDropdown = (item: string) => {
        if (activeDropdown === item) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(item);
        }
    };

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setHidden(true);
            } else {
                setHidden(false);
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={cn("absolute top-5 inset-x-0 mx-auto z-50 transition-transform duration-300 lg:max-w-screen-xl", { "-translate-y-full": hidden }, className)}>
            <FadeInMotionDiv>
                <motion.div
                    className=""
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <div className="py-2">
                        <div className="flex justify-between items-center w-full">
                            <Link href="/">
                                <div className="flex items-center">
                                    <motion.div
                                        className="logo-wrapper"
                                        initial="initial"
                                        animate="animate"
                                    // variants={jumpAnimation}
                                    >
                                        <Image width={50} height={50} src="/thedataisland.png" alt="The Data Island" className="logo" />
                                    </motion.div>
                                    <motion.span
                                        className="gradient-outline uppercase tracking-widest text-center"
                                        initial="initial"
                                        animate="animate"
                                    // variants={jumpAnimation}
                                    >
                                        The Data Island
                                    </motion.span>
                                </div>
                            </Link>
                            <div className={cn("absolute hidden md:block top-0 inset-x-0 max-w-2xl mx-auto z-50 md:py-8 2xl:py-0 xl:py-0", className)}>
                                <Menu setActive={setActive}>
                                    <MenuItem setActive={setActive} active={active} item="Expertise">
                                        <div className="flex flex-col space-y-4 text-sm">
                                            <HoveredLink href="/expertise/data-collection-and-annotation">Data Collection & Annotation</HoveredLink>
                                            <HoveredLink href="/expertise/generative-ai">Generative AI</HoveredLink>
                                            <HoveredLink href="/expertise/computer-vision">Computer Vision</HoveredLink>
                                            <HoveredLink href="/expertise/nlp">NLP</HoveredLink>
                                            <HoveredLink href="/expertise/data-analytics">Data Analytics</HoveredLink>
                                            <HoveredLink href="/expertise/ui-ux">UI/UX Design</HoveredLink>
                                            <HoveredLink href="/expertise/ai-based-web-development">AI Based Web Development</HoveredLink>
                                            <HoveredLink href="/expertise/ai-based-app-development">AI Based App Development</HoveredLink>
                                            <HoveredLink href="/expertise/devops-mlops">DevOps & MLOps</HoveredLink>
                                        </div>

                                    </MenuItem>
                                    <MenuItem setActive={setActive} active={active} item="Solutions">
                                        <div className="flex flex-row">
                                            <div className="flex flex-col space-y-4 text-sm px-5">
                                                <h6 className="text-base font-bold">Collaboration Models</h6>
                                                <HoveredLink href="/web-dev">  AI Development Outsourcing</HoveredLink>
                                                <HoveredLink href="/web-dev">  Dedicated AI Team</HoveredLink>
                                                <HoveredLink href="/web-dev">	AI Staff Augmentation</HoveredLink>
                                                <HoveredLink href="/web-dev">	AI IT Outstaffing</HoveredLink>
                                                <HoveredLink href="/web-dev">	AI Business Process Outsourcing</HoveredLink>
                                            </div>
                                            <div className="flex flex-col space-y-4 text-sm px-5">
                                                <h6 className="text-base font-bold">Hire</h6>
                                                <div className="flex flex-wrap gap-4">
                                                    <div className="flex flex-col space-y-4 ">
                                                        <HoveredLink href="/hire-ai-engineer">Hire Data Annotators</HoveredLink>
                                                        <HoveredLink href="/hire-deep-learning-engineer">Hire Generative AI Experts</HoveredLink>
                                                        <HoveredLink href="/hire-computer-vision-engineer">Hire Computer Vision Engineer</HoveredLink>
                                                        <HoveredLink href="/hire-nlp-engineer">Hire (NLP) Engineer</HoveredLink>
                                                        <HoveredLink href="/hire-data-analyst">Hire Data Analyst & Scientist</HoveredLink>
                                                    </div>
                                                    <div className="flex flex-col space-y-4 ">
                                                        <HoveredLink href="/hire-cloud-ai-engineer">Hire DevOps and MLOps Engineer</HoveredLink>
                                                        <HoveredLink href="/hire-cloud-ai-engineer">Hire Frontend Developers</HoveredLink>
                                                        <HoveredLink href="/hire-cloud-ai-engineer">Hire APP Developers</HoveredLink>
                                                        <HoveredLink href="/hire-cloud-ai-engineer">Hire Backend Developers</HoveredLink>
                                                        <HoveredLink href="/hire-cloud-ai-engineer">Hire Project Managers</HoveredLink>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex flex-col space-y-4 text-sm px-5">
                                                <h6 className="text-base font-bold">Use-Cases</h6>
                                                <HoveredLink href="/Level1">Case Studies</HoveredLink>
                                                <HoveredLink href="/web-dev">Use-Cases</HoveredLink>
                                            </div>
                                        </div>

                                    </MenuItem>
                                    <MenuItem setActive={setActive} active={active} item="Industries">
                                        <div className="flex flex-col space-y-4 text-sm">
                                            <HoveredLink href="/web-dev">Web Development</HoveredLink>
                                            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                                            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                                            <HoveredLink href="/branding">Branding</HoveredLink>
                                        </div>
                                    </MenuItem>
                                    <MenuItem setActive={setActive} active={active} item="Portfolio">
                                        <div className="flex flex-col space-y-4 text-sm">
                                            <HoveredLink href="/web-dev">Web Development</HoveredLink>
                                            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                                            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                                            <HoveredLink href="/branding">Branding</HoveredLink>
                                        </div>
                                    </MenuItem>
                                    <MenuItem setActive={setActive} active={active} item="TDI Academy">
                                        <div className="flex flex-col space-y-4 text-sm">
                                            <HoveredLink href="/web-dev">Web Development</HoveredLink>
                                            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                                            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                                            <HoveredLink href="/branding">Branding</HoveredLink>
                                        </div>
                                    </MenuItem>
                                    <MenuItem setActive={setActive} active={active} item="AI Platform">
                                        <div className="flex flex-col space-y-4 text-sm">
                                            <HoveredLink href="/hobby">Hobby</HoveredLink>
                                            <HoveredLink href="/individual">Individual</HoveredLink>
                                            <HoveredLink href="/team">Team</HoveredLink>
                                            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
                                        </div>
                                    </MenuItem>
                                </Menu>
                            </div>
                            <div className="flex items-center">
                                <div className="flex md:hidden">
                                    <button onClick={toggleMenu} className="text-2xl">
                                        {menuOpen ? <IoCloseOutline /> : <IoMenuOutline />}
                                    </button>
                                </div>
                                <div className="hidden md:flex">
                                    <Link href="https://wa.me/8801974119333" target="_blank" rel="noopener noreferrer" passHref>
                                        <MakeUsAcall
                                            title='Make a Call'
                                            icon={<IoIosCall />}
                                            position='right'
                                            gradient="90deg,#E2CBFF 0%,#393BB2 50%,#E2CBFF 100%"
                                        />
                                    </Link>
                                    {/* <Link href='#testimonials' className="text-base px-2">
                                    hehe
                                    </Link> */}
                                </div>
                            </div>
                        </div>
                    </div></motion.div>
            </FadeInMotionDiv>
            {/* Mobile Sidebar */}
            <div className={`relative rounded-lg inset-y-0 left-0 z-50 w-full shadow-xl transform ${menuOpen ? "translate-x-0 bg-black-200" : "-translate-x-full bg-transparent"} transition-all duration-300 ease-in-out md:hidden`}>
                <div className={`p-4 ${menuOpen ? 'h-[calc(100vh-5rem)]' : 'h-auto'} overflow-y-auto`}>
                    <button onClick={toggleMenu} className="text-2xl mb-8 text-white">
                        <IoCloseOutline />
                    </button>
                    <nav className="space-y-4">
                        {/* Expertise */}
                        <div>
                            <button onClick={() => toggleDropdown('Expertise')} className="flex-grow flex items-center gap-2 w-full text-left text-white py-2">
                                Expertise {activeDropdown === 'Expertise' ? <FaArrowUp /> : <FaArrowDown />}
                            </button>
                            {activeDropdown === 'Expertise' && (
                                <div className="pl-4 space-y-2">
                                    <Link href="/expertise/data-collection-and-annotation" className="block text-white">● Data Collection & Annotation</Link>
                                    <Link href="/expertise/generative-ai" className="block text-white">● Generative AI</Link>
                                    <Link href="/seo" className="block text-white">● Computer Vision</Link>
                                    <Link href="/seo" className="block text-white">● NLP</Link>
                                    <Link href="/seo" className="block text-white">● Data Analytics</Link>
                                    <Link href="/expertise/ai-based-web-development" className="block text-white">● UI/UX Design</Link>
                                    <Link href="/expertise/ai-based-app-development" className="block text-white">● AI Based Web & App Development</Link>
                                    <Link href="/expertise/devops-mlops" className="block text-white">● DevOps & MLOps</Link>
                                </div>
                            )}
                        </div>

                        {/* Solutions */}
                        <div>
                            <button onClick={() => toggleDropdown('Solutions')} className="flex-grow flex items-center gap-2 w-full text-left text-white py-2">
                                Solutions {activeDropdown === 'Solutions' ? <FaArrowUp /> : <FaArrowDown />}
                            </button>
                            {activeDropdown === 'Solutions' && (
                                <div className="pl-4 space-y-2">
                                    <h6 className="text-base font-bold">Collaboration Models</h6>
                                    <Link href="/web-dev" className="block text-white">● AI Development Outsourcing</Link>
                                    <Link href="/web-dev" className="block text-white">● Dedicated AI Team</Link>
                                    <Link href="/web-dev" className="block text-white">● AI Staff Augmentation</Link>
                                    <Link href="/web-dev" className="block text-white">● AI IT Outstaffing</Link>
                                    <Link href="/web-dev" className="block text-white">● AI Business Process Outsourcing</Link>

                                    <h6 className="text-base font-bold mt-4">Hire</h6>
                                    <div className="flex flex-wrap gap-4">
                                        <div className="flex flex-col space-y-4">
                                            <Link href="/hire-ai-engineer" className="block text-white">● Hire Data Annotators</Link>
                                            <Link href="/hire-deep-learning-engineer" className="block text-white">● Hire Generative AI Experts</Link>
                                            <Link href="/hire-computer-vision-engineer" className="block text-white">● Hire Computer Vision Engineer</Link>
                                            <Link href="/hire-nlp-engineer" className="block text-white">● Hire (NLP) Engineer</Link>
                                            <Link href="/hire-data-analyst" className="block text-white">● Hire Data Analyst & Scientist</Link>
                                        </div>
                                        <div className="flex flex-col space-y-4">
                                            <Link href="/hire-cloud-ai-engineer" className="block text-white">● Hire DevOps and MLOps Engineer</Link>
                                            <Link href="/hire-cloud-ai-engineer" className="block text-white">● Hire Frontend Developers</Link>
                                            <Link href="/hire-cloud-ai-engineer" className="block text-white">● Hire APP Developers</Link>
                                            <Link href="/hire-cloud-ai-engineer" className="block text-white">● Hire Backend Developers</Link>
                                            <Link href="/hire-cloud-ai-engineer" className="block text-white">● Hire Project Managers</Link>
                                        </div>
                                    </div>

                                    <h6 className="text-base font-bold mt-4">Use-Cases</h6>
                                    <Link href="/web-dev" className="block text-white">● Case Studies</Link>
                                    <Link href="/web-dev" className="block text-white">● Use-Cases</Link>
                                </div>
                            )}
                        </div>

                        {/* Industries */}
                        <div>
                            <button onClick={() => toggleDropdown('Industries')} className="flex-grow flex items-center gap-2 text-left text-white py-2">
                                Industries {activeDropdown === 'Industries' ? <FaArrowUp /> : <FaArrowDown />}
                            </button>
                            {activeDropdown === 'Industries' && (
                                <div className="pl-4 space-y-2">
                                    <Link href="/web-dev" className="block text-white">● Web Development</Link>
                                    <Link href="/interface-design" className="block text-white">● Interface Design</Link>
                                    <Link href="/seo" className="block text-white">● Search Engine Optimization</Link>
                                    <Link href="/branding" className="block text-white">● Branding</Link>
                                </div>
                            )}
                        </div>

                        {/* Portfolio */}
                        <div>
                            <button onClick={() => toggleDropdown('Portfolio')} className="flex-grow flex items-center gap-2 text-left text-white py-2">
                                Portfolio {activeDropdown === 'Portfolio' ? <FaArrowUp /> : <FaArrowDown />}
                            </button>
                            {activeDropdown === 'Portfolio' && (
                                <div className="pl-4 space-y-2">
                                    <Link href="/web-dev" className="block text-white">● Web Development</Link>
                                    <Link href="/interface-design" className="block text-white">● Interface Design</Link>
                                    <Link href="/seo" className="block text-white">● Search Engine Optimization</Link>
                                    <Link href="/branding" className="block text-white">● Branding</Link>
                                </div>
                            )}
                        </div>

                        {/* TDI Academy */}
                        <div>
                            <button onClick={() => toggleDropdown('TDIAcademy')} className="flex-grow flex items-center gap-2 text-left text-white py-2">
                                TDI Academy {activeDropdown === 'TDIAcademy' ? <FaArrowUp /> : <FaArrowDown />}
                            </button>
                            {activeDropdown === 'TDIAcademy' && (
                                <div className="pl-4 space-y-2">
                                    <Link href="/web-dev" className="block text-white">● Web Development</Link>
                                    <Link href="/interface-design" className="block text-white">● Interface Design</Link>
                                    <Link href="/seo" className="block text-white">● Search Engine Optimization</Link>
                                    <Link href="/branding" className="block text-white">● Branding</Link>
                                </div>
                            )}
                        </div>

                        {/* AI Platform */}
                        <div>
                            <button onClick={() => toggleDropdown('AIPlatform')} className="flex-grow flex items-center gap-2 text-left text-white py-2">
                                AI Platform {activeDropdown === 'AIPlatform' ? <FaArrowUp /> : <FaArrowDown />}
                            </button>
                            {activeDropdown === 'AIPlatform' && (
                                <div className="pl-4 space-y-2">
                                    <Link href="/hobby" className="block text-white">● Hobby</Link>
                                    <Link href="/individual" className="block text-white">● Individual</Link>
                                    <Link href="/team" className="block text-white">● Team</Link>
                                    <Link href="/enterprise" className="block text-white">● Enterprise</Link>
                                </div>
                            )}
                        </div>
                    </nav>
                    <div className="mt-8 px-6">
                        <Link href="https://wa.me/8801974119333" target="_blank" rel="noopener noreferrer" passHref>
                            <MakeUsAcall
                                title='Make a Call'
                                icon={<IoIosCall />}
                                position='right'
                                gradient="90deg,#E2CBFF 0%,#393BB2 50%,#E2CBFF 100%"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}