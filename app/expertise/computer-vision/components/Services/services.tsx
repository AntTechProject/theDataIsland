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

const iconStyle = "w-8 h-8 text-gray-900 dark:text-white mb-4";

const Services: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const handleCardClick = (service: string) => {
    setExpandedCard(expandedCard === service ? null : service);
  };

  return (
    <div className="relative">
      {/* Background Effects */}
      <div className="absolute inset-3/4 top-0 right-80 h-screen w-screen bg-gradient-to-b from-black-100 from-10% via-teal-500 to-purple transform-gpu scale-[0.55] rounded-full blur-[250px]" />
      <div className="absolute inset-80 top-0 right-80 -translate-x-full h-screen w-screen bg-gradient-to-b from-black-100 from-10% via-teal-500 to-purple transform-gpu scale-[0.55] rounded-full blur-[250px]" />
      <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-black-100 from-50% to-violet-900 transform scale-[0.9] rounded-lg blur-3xl" />

      {/* Main Content */}
      <CardContainer className="relative py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
        <CardBody className="w-full max-w-7xl mx-auto relative bg-black/[0.6] border border-gray-900 rounded-2xl p-8 overflow-hidden">
          <CardItem
            translateZ={50}
            className="text-2xl font-bold text-center text-grey-500 dark:text-white mb-8"
          >
            Our Computer Vision Services
          </CardItem>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <motion.div
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              animate={expandedCard === 'objectDetection' ? "expanded" : "initial"}
              onClick={() => handleCardClick('objectDetection')}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg cursor-pointer"
            >
              <CardItem translateZ={40}>
                <FaEye className={iconStyle} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Object Detection
                </h3>
                <p className={`text-gray-600 dark:text-gray-300 ${expandedCard === 'objectDetection' ? 'block' : 'line-clamp-3'}`}>
                  Identify and classify objects within images or video streams with high precision.
                </p>
                {expandedCard === 'objectDetection' && (
                  <div className="mt-4 text-gray-500 dark:text-gray-400">
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
              animate={expandedCard === 'imageSegmentation' ? "expanded" : "initial"}
              onClick={() => handleCardClick('imageSegmentation')}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg cursor-pointer"
            >
              <CardItem translateZ={40}>
                <FaImage className={iconStyle} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Image Segmentation
                </h3>
                <p className={`text-gray-600 dark:text-gray-300 ${expandedCard === 'imageSegmentation' ? 'block' : 'line-clamp-3'}`}>
                  Segment images into distinct regions for detailed analysis and improved decision-making.
                </p>
                {expandedCard === 'imageSegmentation' && (
                  <div className="mt-4 text-gray-500 dark:text-gray-400">
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
              animate={expandedCard === 'facialRecognition' ? "expanded" : "initial"}
              onClick={() => handleCardClick('facialRecognition')}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg cursor-pointer"
            >
              <CardItem translateZ={40}>
                <FaUser className={iconStyle} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Facial Recognition
                </h3>
                <p className={`text-gray-600 dark:text-gray-300 ${expandedCard === 'facialRecognition' ? 'block' : 'line-clamp-3'}`}>
                  Accurate facial recognition and analysis for security, identification, and personalization.
                </p>
                {expandedCard === 'facialRecognition' && (
                  <div className="mt-4 text-gray-500 dark:text-gray-400">
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
              animate={expandedCard === 'ocr' ? "expanded" : "initial"}
              onClick={() => handleCardClick('ocr')}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg cursor-pointer"
            >
              <CardItem translateZ={40}>
                <FaTextWidth className={iconStyle} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  OCR (Optical Character Recognition)
                </h3>
                <p className={`text-gray-600 dark:text-gray-300 ${expandedCard === 'ocr' ? 'block' : 'line-clamp-3'}`}>
                  Extract and process text from images and documents with high accuracy.
                </p>
                {expandedCard === 'ocr' && (
                  <div className="mt-4 text-gray-500 dark:text-gray-400">
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
              animate={expandedCard === 'imageClassification' ? "expanded" : "initial"}
              onClick={() => handleCardClick('imageClassification')}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg cursor-pointer"
            >
              <CardItem translateZ={40}>
                <FaRegStar className={iconStyle} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Image Classification
                </h3>
                <p className={`text-gray-600 dark:text-gray-300 ${expandedCard === 'imageClassification' ? 'block' : 'line-clamp-3'}`}>
                  Classify images into predefined categories to streamline content management and analysis.
                </p>
                {expandedCard === 'imageClassification' && (
                  <div className="mt-4 text-gray-500 dark:text-gray-400">
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
              animate={expandedCard === 'customSolutions' ? "expanded" : "initial"}
              onClick={() => handleCardClick('customSolutions')}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg cursor-pointer"
            >
              <CardItem translateZ={40}>
                <FaCogs className={iconStyle} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Custom Solutions
                </h3>
                <p className={`text-gray-600 dark:text-gray-300 ${expandedCard === 'customSolutions' ? 'block' : 'line-clamp-3'}`}>
                  Tailored computer vision solutions to meet your unique business needs and challenges.
                </p>
                {expandedCard === 'customSolutions' && (
                  <div className="mt-4 text-gray-500 dark:text-gray-400">
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
