"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEye, FaCogs, FaUser, FaTextWidth, FaImage, FaRegStar, FaPlus } from 'react-icons/fa';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

// Framer Motion variants
const cardVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
  expanded: { scale: 1.1 }
};

const iconStyle = "w-6 h-6 text-gray-900 dark:text-white mb-2"; // Adjusted for mobile

const Services: React.FC = () => {
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
            Our Computer Vision Services
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
                <FaEye className={iconStyle} />
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Object Detection
                </h3>
                <p className={`text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 ${expandedCard === 'textClassification' ? 'block' : 'line-clamp-3'}`}>
                  Identify and classify objects within images or video streams with high precision.
                </p>
                {expandedCard === 'textClassification' && (
                  <div className="mt-2 text-gray-500 dark:text-gray-400 text-xs sm:text-sm lg:text-base">
                    <p>Our object detection algorithms use advanced techniques to accurately identify and classify various objects, making them suitable for applications in security, retail, and more.</p>
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
                <FaImage className={iconStyle} />
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Image Segmentation
                </h3>
                <p className={`text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 ${expandedCard === 'sentimentAnalysis' ? 'block' : 'line-clamp-3'}`}>
                  Segment images into distinct regions for detailed analysis and improved decision-making.
                </p>
                {expandedCard === 'sentimentAnalysis' && (
                  <div className="mt-2 text-gray-500 dark:text-gray-400 text-xs sm:text-sm lg:text-base">
                    <p>Image segmentation divides an image into multiple segments or regions to simplify the analysis and understanding of its content, which is useful in medical imaging, autonomous driving, and more.</p>
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
                <FaUser className={iconStyle} />
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Facial Recognition
                </h3>
                <p className={`text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 ${expandedCard === 'namedEntityRecognition' ? 'block' : 'line-clamp-3'}`}>
                  Accurate facial recognition and analysis for security, identification, and personalization.
                </p>
                {expandedCard === 'namedEntityRecognition' && (
                  <div className="mt-2 text-gray-500 dark:text-gray-400 text-xs sm:text-sm lg:text-base">
                    <p>Our facial recognition technology offers precise identification and verification for security purposes, customer personalization, and more, using state-of-the-art algorithms.</p>
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
                <FaTextWidth className={iconStyle} />
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  OCR (Optical Character Recognition)
                </h3>
                <p className={`text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 ${expandedCard === 'textGeneration' ? 'block' : 'line-clamp-3'}`}>
                  Extract and process text from images and documents with high accuracy.
                </p>
                {expandedCard === 'textGeneration' && (
                  <div className="mt-2 text-gray-500 dark:text-gray-400 text-xs sm:text-sm lg:text-base">
                    <p>OCR technology enables the conversion of various types of documents, such as scanned paper documents, PDFs, or images taken by a digital camera, into editable and searchable data.</p>
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
                <FaRegStar className={iconStyle} />
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Image Classification
                </h3>
                <p className={`text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 ${expandedCard === 'languageTranslation' ? 'block' : 'line-clamp-3'}`}>
                  Classify images into predefined categories to streamline content management and analysis.
                </p>
                {expandedCard === 'languageTranslation' && (
                  <div className="mt-2 text-gray-500 dark:text-gray-400 text-xs sm:text-sm lg:text-base">
                    <p>Image classification involves labeling images with predefined categories, which is useful for content moderation, organization, and analysis in various industries.</p>
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
                <FaCogs className={iconStyle} />
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Custom Solutions
                </h3>
                <p className={`text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 ${expandedCard === 'customNLP' ? 'block' : 'line-clamp-3'}`}>
                  Tailored computer vision solutions to meet your unique business needs and challenges.
                </p>
                {expandedCard === 'customNLP' && (
                  <div className="mt-2 text-gray-500 dark:text-gray-400 text-xs sm:text-sm lg:text-base">
                    <p>We offer custom computer vision solutions designed specifically for your business requirements, ensuring that our technology fits seamlessly with your existing systems.</p>
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

export default Services;
