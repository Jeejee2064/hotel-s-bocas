'use client'

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import localFont from 'next/font/local';


const ostrich = localFont({
  src: '../OstrichSans-Medium.otf', // Adjust the path accordingly

})

const Title  = ({ text }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div ref={ref} className={ostrich.className}>
      <motion.h2
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        className="px-4 mb-8 text-6xl text-center tracking-wider text-gray-200 font-bold"
      >
        {text}
      </motion.h2>
    </div>
  );
};

export default Title ;
