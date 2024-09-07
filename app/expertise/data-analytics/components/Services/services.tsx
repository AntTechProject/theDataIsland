"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChartLine, FaDatabase, FaChartPie, FaTable, FaTools, FaRegQuestionCircle } from 'react-icons/fa';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

// Framer Motion variants
const cardVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
  expanded: { scale: 1.1 }
};

const iconStyle = "w-6 h-6 text-gray-900 dark:text-white mb-2"; // Adjusted for mobile

const DataAnalyticsServices: React.FC = () => {
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
            Our Data Analytics Services
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
                <FaChartLine className={iconStyle} />
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Data Visualization
                </h3>
                <p className={`text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 ${expandedCard === 'textClassification' ? 'block' : 'line-clamp-3'}`}>
                Create interactive and informative visual representations of your data.
                </p>
                {expandedCard === 'textClassification' && (
                  <div className="mt-2 text-gray-500 dark:text-gray-400 text-xs sm:text-sm lg:text-base">
                    <p>Our data visualization services help you transform complex data into easy-to-understand visual formats, enabling better insights and more informed decision-making.</p>
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
                <FaDatabase className={iconStyle} />
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Data Analysis
                </h3>
                <p className={`text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 ${expandedCard === 'sentimentAnalysis' ? 'block' : 'line-clamp-3'}`}>
                  Analyze and interpret complex data to extract actionable insights.
                </p>
                {expandedCard === 'sentimentAnalysis' && (
                  <div className="mt-2 text-gray-500 dark:text-gray-400 text-xs sm:text-sm lg:text-base">
                     <p>Our data analysis services focus on processing and interpreting your data to uncover trends, patterns, and insights that can drive strategic decisions and improve business outcomes.</p>
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
                <FaChartPie className={iconStyle} />
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Data Mining
                </h3>
                <p className={`text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 ${expandedCard === 'namedEntityRecognition' ? 'block' : 'line-clamp-3'}`}>
                  Discover hidden patterns and relationships in large datasets.
                </p>
                {expandedCard === 'namedEntityRecognition' && (
                  <div className="mt-2 text-gray-500 dark:text-gray-400 text-xs sm:text-sm lg:text-base">
                    <p>Our data mining services involve exploring large datasets to identify patterns, correlations, and anomalies that can provide valuable business insights and drive informed decisions.</p>
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
              <FaTable className={iconStyle} />
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Data Integration
                </h3>
                <p className={`text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 ${expandedCard === 'textGeneration' ? 'block' : 'line-clamp-3'}`}>
                  Combine data from various sources into a unified view.
                </p>
                {expandedCard === 'textGeneration' && (
                  <div className="mt-2 text-gray-500 dark:text-gray-400 text-xs sm:text-sm lg:text-base">
                    <p>Our data integration services ensure that data from different sources is consolidated into a single, coherent view, facilitating better analysis and reporting.</p>
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
              <FaTools className={iconStyle} />
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Predictive Analytics
                </h3>
                <p className={`text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 ${expandedCard === 'languageTranslation' ? 'block' : 'line-clamp-3'}`}>
                  Utilize historical data to forecast future trends and outcomes.
                </p>
                {expandedCard === 'languageTranslation' && (
                  <div className="mt-2 text-gray-500 dark:text-gray-400 text-xs sm:text-sm lg:text-base">
                     <p>Our predictive analytics services use historical data and statistical techniques to predict future trends and outcomes, helping you make proactive decisions and strategize effectively.</p>
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
              <FaRegQuestionCircle className={iconStyle} />
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Data Consulting
              </h3>
                <p className={`text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 ${expandedCard === 'customNLP' ? 'block' : 'line-clamp-3'}`}>
                  Expert advice on leveraging data to achieve your business goals.
                </p>
                {expandedCard === 'customNLP' && (
                  <div className="mt-2 text-gray-500 dark:text-gray-400 text-xs sm:text-sm lg:text-base">
                   <p>Our data consulting services provide expert guidance on how to effectively use data to meet your business objectives, optimize processes, and drive growth.</p>
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

export default DataAnalyticsServices;
