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

const iconStyle = "w-8 h-8 text-gray-900 dark:text-white mb-4";

const DataAnalyticsServices: React.FC = () => {
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
            className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8"
          >
            Our Data Analytics Services
          </CardItem>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <motion.div
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              animate={expandedCard === 'dataVisualization' ? "expanded" : "initial"}
              onClick={() => handleCardClick('dataVisualization')}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg cursor-pointer"
            >
              <CardItem translateZ={40}>
                <FaChartLine className={iconStyle} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Data Visualization
                </h3>
                <p className={`text-gray-600 dark:text-gray-300 ${expandedCard === 'dataVisualization' ? 'block' : 'line-clamp-3'}`}>
                  Create interactive and informative visual representations of your data.
                </p>
                {expandedCard === 'dataVisualization' && (
                  <div className="mt-4 text-gray-500 dark:text-gray-400">
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
              animate={expandedCard === 'dataAnalysis' ? "expanded" : "initial"}
              onClick={() => handleCardClick('dataAnalysis')}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg cursor-pointer"
            >
              <CardItem translateZ={40}>
                <FaDatabase className={iconStyle} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Data Analysis
                </h3>
                <p className={`text-gray-600 dark:text-gray-300 ${expandedCard === 'dataAnalysis' ? 'block' : 'line-clamp-3'}`}>
                  Analyze and interpret complex data to extract actionable insights.
                </p>
                {expandedCard === 'dataAnalysis' && (
                  <div className="mt-4 text-gray-500 dark:text-gray-400">
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
              animate={expandedCard === 'dataMining' ? "expanded" : "initial"}
              onClick={() => handleCardClick('dataMining')}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg cursor-pointer"
            >
              <CardItem translateZ={40}>
                <FaChartPie className={iconStyle} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Data Mining
                </h3>
                <p className={`text-gray-600 dark:text-gray-300 ${expandedCard === 'dataMining' ? 'block' : 'line-clamp-3'}`}>
                  Discover hidden patterns and relationships in large datasets.
                </p>
                {expandedCard === 'dataMining' && (
                  <div className="mt-4 text-gray-500 dark:text-gray-400">
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
              animate={expandedCard === 'dataIntegration' ? "expanded" : "initial"}
              onClick={() => handleCardClick('dataIntegration')}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg cursor-pointer"
            >
              <CardItem translateZ={40}>
                <FaTable className={iconStyle} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Data Integration
                </h3>
                <p className={`text-gray-600 dark:text-gray-300 ${expandedCard === 'dataIntegration' ? 'block' : 'line-clamp-3'}`}>
                  Combine data from various sources into a unified view.
                </p>
                {expandedCard === 'dataIntegration' && (
                  <div className="mt-4 text-gray-500 dark:text-gray-400">
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
              animate={expandedCard === 'predictiveAnalytics' ? "expanded" : "initial"}
              onClick={() => handleCardClick('predictiveAnalytics')}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg cursor-pointer"
            >
              <CardItem translateZ={40}>
                <FaTools className={iconStyle} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Predictive Analytics
                </h3>
                <p className={`text-gray-600 dark:text-gray-300 ${expandedCard === 'predictiveAnalytics' ? 'block' : 'line-clamp-3'}`}>
                  Utilize historical data to forecast future trends and outcomes.
                </p>
                {expandedCard === 'predictiveAnalytics' && (
                  <div className="mt-4 text-gray-500 dark:text-gray-400">
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
              animate={expandedCard === 'dataConsulting' ? "expanded" : "initial"}
              onClick={() => handleCardClick('dataConsulting')}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg cursor-pointer"
            >
              <CardItem translateZ={40}>
                <FaRegQuestionCircle className={iconStyle} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Data Consulting
                </h3>
                <p className={`text-gray-600 dark:text-gray-300 ${expandedCard === 'dataConsulting' ? 'block' : 'line-clamp-3'}`}>
                  Expert advice on leveraging data to achieve your business goals.
                </p>
                {expandedCard === 'dataConsulting' && (
                  <div className="mt-4 text-gray-500 dark:text-gray-400">
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
