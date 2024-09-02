'use client'; // This directive makes this file a client component

import React, { useState, useEffect } from 'react';
import { TbArrowUpToArc } from "react-icons/tb";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Function to handle scroll events
  const handleScroll = () => {
    if (window.scrollY > 300) { // Show button if scrolled down 300px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 p-3 rounded-full shadow-lg 
        transition-opacity duration-300 ease-in-out 
        ${isVisible ? 'opacity-100' : 'opacity-0'} 
         bg-opacity-30 backdrop-blur-lg   border-opacity-60 hover:bg-gradient-to-r hover:from-emerald-500  hover:to-blue-500 bg-gradient-to-r from-blue-500 via-slate-700 to-violet-500
        hover:bg-opacity-50 focus:outline-none hover:animate-bounce z-50`}
      aria-label="Scroll to top"
    >
      <TbArrowUpToArc size={20}/>
    </button>
  );
};

export default ScrollToTopButton;
