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
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Transparent black for tabs
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
        className={cn("mt-32", contentClassName)}
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
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn("w-full h-full absolute top-0 left-0", className)}
        >

          {/* Wrapper for both image and text */}
          <div className="relative w-full h-full flex flex-col items-center justify-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", borderRadius: "12px" }}> {/* Rounded corners */}
            {/* Text Container */}
            <div className="z-10 text-white font-bold text-xl md:text-4xl mb-2"> {/* Added margin-bottom for spacing */}
              {tab.text} {/* Custom text for each tab */}
            </div>

            {/* Image with 'contain' to ensure it fits without zoom */}
            <img
              src={tab.image} // Image for each tab
              alt={tab.title}
              className="w-[40%] h-auto object-contain" // Set width to 85% and maintain aspect ratio
            />
          </div>

        </motion.div>
      ))}
    </div>
  );
};
