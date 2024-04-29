import React from "react";
import "./FirstContainer.css";
import { useRef } from "react";
import { motion } from "framer-motion";

function FirstContainer () {

  const handleButtonClick = () => {
    let scrollAmount = 800;
    if (window.innerWidth <= 767.98) {
      scrollAmount = 680;
    }
    
    const currentScroll = window.scrollY;
    const targetScroll = currentScroll + scrollAmount;
    const scrollDuration = 600;
    
    const startTime = performance.now();
    
    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / scrollDuration, 1);
      
      const easing = 1 - Math.pow(1 - progress, 3); // Ease-out cubic
      const scrollPosition = currentScroll + (scrollAmount * easing);
      
      window.scrollTo(0, scrollPosition);
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };
  
    requestAnimationFrame(animateScroll);
  };

  return (
    <div className="first-container">
      <h2 className='first-heading'><span className="hey">Hey,</span><br></br><span className="burhan"> I'm Burhan </span></h2>
      <p className='first-paragraph'>— an expert full stack developer, assisting clients with all of their developer needs.</p>
      <motion.button whileHover={{scale:1.4, transition: {delay: 0.1}}} animate={{ y: [0, 40, 0], transition: {repeat: Infinity, duration: 2, delay: .4, type: "tween"} }} className="arrow-button" onClick={handleButtonClick}>&#8595;</motion.button>
      <p className="based-in-text">Based in Pakistan, <br></br>available worldwide</p>
      <a className="consultation-button" href="https://calendly.com/m-burhanmoin1/30min">BOOK FREE CONSULTATION</a>
    </div>
  );
}

export default FirstContainer;
