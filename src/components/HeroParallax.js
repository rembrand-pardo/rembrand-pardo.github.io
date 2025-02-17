/*
 * Copyright (c) 2025 Rembrand Pardo
 * Unauthorized copying, modification, or redistribution is strictly prohibited.
 * Violators will face legal action.
 */

// HeroParallax.jsx
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Link } from 'react-router-dom';

export const HeroParallax = ({
  products, translations
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, -100]), springConfig);

  return (
    <div
      ref={ref}
      className="min-h-screen overflow-hidden relative flex flex-col"
    >
      <Header translations={translations}/>
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="relative"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row space-x-20">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};



export const Header = ({ translations }) => {
  return (
    (<div
      className="max-w-7xl relative z-10 mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        { translations.serviceMainHeading }
      </h1>
      <p
        className="max-w-3xl mt-8 dark:text-neutral-200 text-center mx-auto"
        style={{ fontSize: '1.6rem' }}
      >
      { translations.serviceSubheading }
      </p>
    </div>)
  );
};

/*
"Empowering Success: Unleashing Potential, Building Leaders, Streamlining Technology, and Inspiring Change." 
I am dedicated to unlocking the full potential of your business, empowering your teams, streamlining your operations, 
and inspiring your audiences. My comprehensive services are designed to transform challenges into opportunities, 
fostering growth and success in every endeavor. 
*/

export const ProductCard = ({
  product,
  translate
}) => {
  return (
    (<motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-48 w-full sm:h-20 sm:w-20 md:h-30 md:w-30 lg:h-96 lg:w-[30rem] relative flex-shrink-0">
      <Link href={product.link} className="block group-hover/product:shadow-2xl cursor-default">
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title} />
      </Link>
      <div
        className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2
        className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>)
  );
};
