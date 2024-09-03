"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaRegFileAlt, FaRegCommentDots, FaRegSmile, FaRegPaperPlane, FaRegHandPointRight } from 'react-icons/fa';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

// Framer Motion variants
const cardVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
  expanded: { scale: 1.1 }
};

const iconStyle = "w-6 h-6 text-gray-900 dark:text-white mb-2"; // Adjusted for mobile

const NLPServices: React.FC = () => {
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
        <CardBody className="w-full max-w-7xl mx-auto relative bg-black/[0.6] border border-gray-900 rounded-2xl p-4 sm:p-6 lg:p-8 overflow-hidden">
          <CardItem translateZ={50} className="text-xl sm:pl-9 font-bold text-center text-gray-900 dark:text-white mb-6">
            Our NLP Services
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
                <FaRegFileAlt className={iconStyle} />
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Text Classification
                </h3>
                <p className={`text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 ${expandedCard === 'textClassification' ? 'block' : 'line-clamp-3'}`}>
                  Automatically categorize text into predefined categories.
                </p>
                {expandedCard === 'textClassification' && (
                  <div className="mt-2 text-gray-500 dark:text-gray-400 text-xs sm:text-sm lg:text-base">
                    <p>Our text classification models can categorize documents, emails, or other text data into predefined categories, improving data organization and accessibility.</p>
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
                <FaRegCommentDots className={iconStyle} />
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Sentiment Analysis
                </h3>
                <p className={`text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 ${expandedCard === 'sentimentAnalysis' ? 'block' : 'line-clamp-3'}`}>
                  Analyze and interpret the sentiment behind text data.
                </p>
                {expandedCard === 'sentimentAnalysis' && (
                  <div className="mt-2 text-gray-500 dark:text-gray-400 text-xs sm:text-sm lg:text-base">
                    <p>Sentiment analysis allows you to understand the emotions and opinions expressed in text data, which can be valuable for customer feedback, market research, and more.</p>
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
                <FaRegSmile className={iconStyle} />
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Named Entity Recognition
                </h3>
                <p className={`text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 ${expandedCard === 'namedEntityRecognition' ? 'block' : 'line-clamp-3'}`}>
                  Identify and classify entities within text such as names, dates, and locations.
                </p>
                {expandedCard === 'namedEntityRecognition' && (
                  <div className="mt-2 text-gray-500 dark:text-gray-400 text-xs sm:text-sm lg:text-base">
                    <p>Our named entity recognition services extract entities from text, such as people, organizations, and locations, enhancing your data processing capabilities.</p>
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
                <FaRegPaperPlane className={iconStyle} />
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Text Generation
                </h3>
                <p className={`text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 ${expandedCard === 'textGeneration' ? 'block' : 'line-clamp-3'}`}>
                  Generate coherent and contextually relevant text based on input prompts.
                </p>
                {expandedCard === 'textGeneration' && (
                  <div className="mt-2 text-gray-500 dark:text-gray-400 text-xs sm:text-sm lg:text-base">
                    <p>Our text generation models can create content, responses, or other text based on given prompts, enhancing automated content creation and customer interactions.</p>
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
                <FaRegHandPointRight className={iconStyle} />
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Language Translation
                </h3>
                <p className={`text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 ${expandedCard === 'languageTranslation' ? 'block' : 'line-clamp-3'}`}>
                  Translate text between different languages with high accuracy.
                </p>
                {expandedCard === 'languageTranslation' && (
                  <div className="mt-2 text-gray-500 dark:text-gray-400 text-xs sm:text-sm lg:text-base">
                    <p>Our language translation services enable seamless communication by translating text between various languages, helping bridge language gaps in global interactions.</p>
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
                <FaRegFileAlt className={iconStyle} />
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Custom NLP Solutions
                </h3>
                <p className={`text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 ${expandedCard === 'customNLP' ? 'block' : 'line-clamp-3'}`}>
                  Tailored NLP solutions to address your specific business requirements.
                </p>
                {expandedCard === 'customNLP' && (
                  <div className="mt-2 text-gray-500 dark:text-gray-400 text-xs sm:text-sm lg:text-base">
                    <p>We provide custom NLP solutions designed to fit your unique business needs, ensuring that our technology meets your specific requirements and integrates seamlessly with your operations.</p>
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

export default NLPServices;
