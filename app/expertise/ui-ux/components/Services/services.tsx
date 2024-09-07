"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaDesktop, FaPencilAlt, FaMobileAlt, FaPaintBrush, FaUsers } from 'react-icons/fa';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

// Framer Motion variants
const cardVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
  expanded: { scale: 1.1 }
};

const iconStyle = "w-8 h-8 text-gray-900 dark:text-white mb-4";

const UIDesignServices: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const handleCardClick = (service: string) => {
    setExpandedCard(expandedCard === service ? null : service);
  };

  return (
    <div className="relative">
      {/* Background Effects */}
      <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-black-100 from-10% via-teal-500 to-purple transform-gpu rounded-full blur-[250px] lg:scale-[0.55]" />
      <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-black-100 from-50% to-violet-900 transform rounded-lg blur-3xl lg:scale-[0.9]" />

      {/* Main Content */}
      <CardContainer className="relative py-8 px-4 sm:px-6 lg:px-8 bg-transparent">
        <CardBody className="w-full max-w-7xl mx-auto relative bg-black/[0.6] border border-gray-900 rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center">
          <CardItem translateZ={50} className="text-lg sm:text-xl lg:text-2xl font-bold text-center text-gray-900 dark:text-white mb-4 sm:mb-6 px-4 sm:px-6 lg:px-8">
            Our UI/UX Design Services
          </CardItem>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {/* Service 1 */}
            <motion.div
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              animate={expandedCard === 'textClassification' ? "expanded" : "initial"}
              onClick={() => handleCardClick('textClassification')}
              className="bg-white dark:bg-gray-900 p-2 sm:p-4 lg:p-6 rounded-lg shadow-lg cursor-pointer max-w-xs mx-auto lg:max-w-sm"
            >
              <CardItem translateZ={40}>
                <FaDesktop className={iconStyle} />
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Web Design
                </h3>
                <p className={`text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 ${expandedCard === 'textClassification' ? 'block' : 'line-clamp-3'}`}>
                  Create visually appealing and user-friendly websites tailored to your brand.
                </p>
                {expandedCard === 'textClassification' && (
                  <div className="mt-2 text-gray-500 dark:text-gray-400 text-xs sm:text-sm lg:text-base">
                    <p>Our web design services focus on crafting beautiful and functional websites that enhance user experience and align with your brand&apos;s identity.</p>
                  </div>
                )}
              </CardItem>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              animate={expandedCard === 'sentimentAnalysis' ? "expanded" : "initial"}
              onClick={() => handleCardClick('sentimentAnalysis')}
              className="bg-white dark:bg-gray-900 p-2 sm:p-4 lg:p-6 rounded-lg shadow-lg cursor-pointer max-w-xs mx-auto lg:max-w-sm"
            >
              <CardItem translateZ={40}>
                <FaPencilAlt className={iconStyle} />
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  UX Design
                </h3>
                <p className={`text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 ${expandedCard === 'sentimentAnalysis' ? 'block' : 'line-clamp-3'}`}>
                  Design intuitive and engaging user experiences to improve interaction with your digital products.
                </p>
                {expandedCard === 'sentimentAnalysis' && (
                  <div className="mt-2 text-gray-500 dark:text-gray-400 text-xs sm:text-sm lg:text-base">
                     <p>Our UX design services aim to create seamless and engaging user experiences, focusing on user research, wireframing, and prototyping to ensure your product is user-friendly and effective.</p>
                  </div>
                )}
              </CardItem>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              animate={expandedCard === 'namedEntityRecognition' ? "expanded" : "initial"}
              onClick={() => handleCardClick('namedEntityRecognition')}
              className="bg-white dark:bg-gray-900 p-2 sm:p-4 lg:p-6 rounded-lg shadow-lg cursor-pointer max-w-xs mx-auto lg:max-w-sm"
            >
              <CardItem translateZ={40}>
                <FaMobileAlt className={iconStyle} />
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Mobile Design
                </h3>
                <p className={`text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 ${expandedCard === 'namedEntityRecognition' ? 'block' : 'line-clamp-3'}`}>
                  Optimize designs for mobile devices to ensure a great user experience on the go.
                </p>
                {expandedCard === 'namedEntityRecognition' && (
                  <div className="mt-2 text-gray-500 dark:text-gray-400 text-xs sm:text-sm lg:text-base">
                    <p>Our mobile design services focus on creating responsive and user-friendly designs specifically for mobile devices, ensuring your applications look and perform well on smartphones and tablets.</p>
                  </div>
                )}
              </CardItem>
            </motion.div>

            {/* Service 4 */}
            <motion.div
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              animate={expandedCard === 'textGeneration' ? "expanded" : "initial"}
              onClick={() => handleCardClick('textGeneration')}
              className="bg-white dark:bg-gray-900 p-2 sm:p-4 lg:p-6 rounded-lg shadow-lg cursor-pointer max-w-xs mx-auto lg:max-w-sm"
            >
              <CardItem translateZ={40}>
                <FaPaintBrush className={iconStyle} />
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  UI Design
                </h3>
                <p className={`text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 ${expandedCard === 'textGeneration' ? 'block' : 'line-clamp-3'}`}>
                  Develop engaging and aesthetically pleasing user interfaces for various applications.
                </p>
                {expandedCard === 'textGeneration' && (
                  <div className="mt-2 text-gray-500 dark:text-gray-400 text-xs sm:text-sm lg:text-base">
                     <p>Our UI design services emphasize creating visually attractive and functional user interfaces that enhance user interaction and satisfaction with your digital products.</p>
                  </div>
                )}
              </CardItem>
            </motion.div>

            {/* Service 5 */}
            <motion.div
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              animate={expandedCard === 'languageTranslation' ? "expanded" : "initial"}
              onClick={() => handleCardClick('languageTranslation')}
              className="bg-white dark:bg-gray-900 p-2 sm:p-4 lg:p-6 rounded-lg shadow-lg cursor-pointer max-w-xs mx-auto lg:max-w-sm"
            >
              <CardItem translateZ={40}>
                <FaUsers className={iconStyle} />
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Prototyping
                </h3>
                <p className={`text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 ${expandedCard === 'languageTranslation' ? 'block' : 'line-clamp-3'}`}>
                  Create interactive prototypes to validate design concepts and gather user feedback.
                </p>
                {expandedCard === 'languageTranslation' && (
                  <div className="mt-2 text-gray-500 dark:text-gray-400 text-xs sm:text-sm lg:text-base">
                    <p>Our prototyping services involve developing interactive prototypes to test and refine design concepts, allowing you to gather valuable user feedback before final development.</p>
                  </div>
                )}
              </CardItem>
            </motion.div>

            {/* Service 6 */}
            <motion.div
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              animate={expandedCard === 'customNLP' ? "expanded" : "initial"}
              onClick={() => handleCardClick('customNLP')}
              className="bg-white dark:bg-gray-900 p-2 sm:p-4 lg:p-6 rounded-lg shadow-lg cursor-pointer max-w-xs mx-auto lg:max-w-sm"
            >
              <CardItem translateZ={40}>
                <FaDesktop className={iconStyle} />
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  UX Research
                </h3>
                <p className={`text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 ${expandedCard === 'customNLP' ? 'block' : 'line-clamp-3'}`}>
                  Conduct user research to gain insights into user needs and improve design strategies.
                </p>
                {expandedCard === 'customNLP' && (
                  <div className="mt-2 text-gray-500 dark:text-gray-400 text-xs sm:text-sm lg:text-base">
                    <p>We conduct comprehensive UX research to understand user needs and behaviors, providing insights that inform design decisions and improve the overall user experience.</p>
                  </div>
                )}
              </CardItem>
            </motion.div>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
};

export default UIDesignServices;
