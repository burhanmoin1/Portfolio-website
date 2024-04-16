import React from "react";
import "./FirstContainer.css";
import { motion } from 'framer-motion';

function FirstContainer () {
  return (
    <div className="first-container">
      <motion.h2 initial={{x:-300, opacity:0}} animate={{x:-200, opacity: 1}} transition={{type:'tween', delay: 0.4}} className='first-heading'>Hey,<br></br><motion.span> I'm Burhan</motion.span></motion.h2>
      <motion.p initial={{y:100, opacity: 0, x:200}} animate={{y:0, opacity:1}} transition={{type:'tween', delay: 1, duration:0.5}}  className='first-paragraph'>— an expert full stack web developer, assisting clients with all of their web related needs.</motion.p>
    </div>
  );
}

export default FirstContainer;
