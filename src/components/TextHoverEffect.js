import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export const TextHoverEffect = ({ text, duration = 4 }) => {
  const svgRef = useRef(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className="select-none"
    >
      <defs>
        {/* Linear Gradient */}
        <linearGradient id="textGradient" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={hovered ? "#00BFFF" : "#CCC"} />
          <stop offset="50%" stopColor={hovered ? "#1E90FF" : "#AAA"} />
          <stop offset="100%" stopColor={hovered ? "#4169E1" : "#888"} />
        </linearGradient>

        {/* Radial Gradient for Mask */}
        <radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          cx={maskPosition.cx}
          cy={maskPosition.cy}
          r="20%"
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </radialGradient>

        {/* Mask */}
        <mask id="textMask">
          <rect x="0" y="0" width="100%" height="100%" fill="url(#revealMask)" />
        </mask>
      </defs>

      {/* Background Text */}
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="font-[helvetica] font-bold fill-transparent text-7xl sm:text-6xl xs:text-5xl stroke-neutral-200 dark:stroke-neutral-800"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 1000,
        }}
        transition={{
          duration,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.text>

      {/* Gradient Stroked Text */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="0.3"
        mask="url(#textMask)"
        className="font-[helvetica] font-bold fill-transparent text-7xl sm:text-6xl xs:text-5xl"
      >
        {text}
      </text>
    </svg>
  );
};
