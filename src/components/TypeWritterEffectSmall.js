/*
 * Copyright (c) 2025 Rembrand Pardo
 * Unauthorized copying, modification, or redistribution is strictly prohibited.
 * Violators will face legal action.
 */

import { cn } from "../lib/utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect, useState } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName
}) => {
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const [cursorVisible, setCursorVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setCursorVisible(false);
      animate("span", {
        opacity: 1,
      }, {
        duration: 0.1, // Control speed here
        delay: stagger(0.1), // Adjust the delay between letters
        ease: "easeInOut",
        onComplete: () => {
          setCursorVisible(false); // Hide cursor after typing is complete
          setHasAnimated(true);
        },
      });
    }
  }, [isInView, animate, hasAnimated]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => (
          <div key={`word-${idx}`} className="inline-block">
            {word.text.map((char, index) => (
              <motion.span
                initial={{ opacity: 0 }} // Start with opacity 0
                animate={{ opacity: 1 }} // Animate to opacity 1
                transition={{
                  delay: index * 0.1, // Delay each character
                }}
                key={`char-${index}`}
                className={cn(`text-white`, word.className)} // Set text color to white
                onAnimationStart={() => {
                  if (index === 0) {
                    setCursorVisible(true);
                  }
                }}
                onAnimationComplete={() => {
                  if (index === word.text.length - 1) {
                    setCursorVisible(false); // Ensure cursor disappears
                  }
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        ))}
      </motion.div>
    );
  };

  return (
    <div
      className={cn(
        "text-lg md:text-xl lg:text-2xl font-normal text-center break-words", // Adjusted size for larger screens
        className
      )}
    >
      {renderWords()}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: cursorVisible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
          repeat: cursorVisible ? Infinity : 0,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[2px] h-3 sm:h-4 md:h-5 lg:h-6 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
