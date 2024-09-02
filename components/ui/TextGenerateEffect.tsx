"use client";
import { useEffect, ReactNode } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: ReactNode;  // Allows for both text and React elements
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {Array.isArray(words)
          ? words.map((word, idx) => (
              <motion.span
                key={idx}
                className={`${idx > 2 ? 'text-purple' : ' dark:text-white text-black'} opacity-0`}
                style={{
                  filter: filter ? "blur(10px)" : "none",
                  display: 'inline-block',
                  marginRight: '0.3em', // Ensure inline display
                }}
              >
                {word}{" "}
              </motion.span>
            ))
          : (
              <motion.span
                className="dark:text-white text-black opacity-0"
                style={{
                  filter: filter ? "blur(10px)" : "none",
                }}
              >
                {words}
              </motion.span>
            )}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
