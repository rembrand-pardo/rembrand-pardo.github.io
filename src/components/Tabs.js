/*
 * Copyright (c) 2025 Rembrand Pardo
 * Unauthorized copying, modification, or redistribution is strictly prohibited.
 * Violators will face legal action.
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName
}) => {
  const [active, setActive] = useState(propTabs[0]);
  const [tabs, setTabs] = useState(propTabs);

  const moveSelectedTabToTop = (idx) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
        className={cn(
          // Adjust flex layout to be more responsive
          "flex flex-wrap items-center justify-start [perspective:1000px] relative sm:overflow-visible no-visible-scrollbar max-w-full w-full",
          containerClassName
        )}
        style={{
          maxHeight: "120px", // Increase the max height to fit more buttons
        }}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn(
              "relative px-2 py-1 sm:px-4 sm:py-2 rounded-full", // Smaller padding for mobile, larger for desktop
              tabClassName
            )}
            style={{
              border: "2px solid rgba(255, 255, 255, 0.871)",
              transformStyle: "preserve-3d",
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Transparent black for tabs 0b1024
              minWidth: "80px", // Ensure tabs are not too small
              margin: "0 4px 4px", // Add some margin between tabs
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-blue-500 dark:bg-blue-600 rounded-full", // Bluish color for active tab
                  activeTabClassName
                )}
                style ={{
                  backgroundColor: "rgba(4, 28, 148, 0.8)", // Transparent white for active tab
                }}
              />
            )}

            <span className="relative block text-white dark:text-white text-sm sm:text-base"> 
              {tab.title} {/* Smaller text for mobile, larger for desktop */}
            </span>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("mt-19", contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering
}) => {
  const isActive = (tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className="relative w-full h-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
            backgroundColor: "rgba(0, 0, 0, 0.0)", //Dynamic background color
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn("w-full h-full absolute top-0 left-0", className)}
        >

          {/* Wrapper for both image and text */}
          <div
            className={`relative w-full h-full flex ${
              tab.textPosition === "over" ? "items-center justify-center" : "flex-col items-center"
            }`}
            style={{ 
              borderRadius: "16px",  // Rounded corners
              paddingLeft: "16px",   // Left padding
              paddingRight: "16px",  // Right padding
              marginTop: "47px",
              backgroundColor: "rgba(0, 0, 0, 0.5)" // Ensure background is visible
            }}
          >
            {tab.textPosition === "over" ? (
              <>
                {/* Text Over Image */}
                <div
                  className={`absolute inset-0 flex items-center justify-center z-10 ${tab.textAlign} ${tab.textSize}`}
                  style={{ color: tab.textColor || "white" }}
                >
                  {tab.text}
                </div>
                <img
                  src={tab.image}
                  alt={tab.title}
                  className={tab.imageClassName || "w-[40%] h-auto object-contain"}
                />
              </>
            ) : (
              <>
                {/* Text Above Image */}
                <div
                  className={`z-10 font-bold mb-4 ${tab.textAlign} ${tab.textSize}`}
                  style={{ color: tab.textColor || "white" }}
                >
                  {tab.text}
                </div>
                <img
                  src={tab.image}
                  alt={tab.title}
                  className={tab.imageClassName || "w-[40%] h-auto object-contain"}
                />
              </>
            )}
          </div>

        </motion.div>
      ))}
    </div>
  );
};
