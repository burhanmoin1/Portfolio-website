import React from 'react';
import { motion, useScroll } from 'framer-motion';
import './FirstContainer.css';

const FirstContainer = () => {
  const { scrollYprogress } = useScroll();

  return (
    <motion.h2
    style={{ scaleY: scrollYprogress }}
    className="main-heading">
    Portfolio
    </motion.h2>
  );
};

export default FirstContainer;
