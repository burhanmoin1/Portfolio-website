import React from 'react';
import { motion, useScroll } from 'framer-motion';
import './FirstContainer.css';

const FirstContainer = () => {
  const { scrollYprogress } = useScroll();

  return (
    <motion.h2
    animate={{ y: 100 }}
    initial={{y: 50}} 
    transition={{type: 'spring', stiffness: 500}}
    className="main-heading">
    Portfolio
    </motion.h2>
  );
};

export default FirstContainer;
