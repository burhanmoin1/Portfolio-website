import React from "react";
import "./FirstContainer.css";
import {motion} from 'framer-motion';

function FirstContainer () {

  const handleButtonClick = () => {
    let scrollAmount = 800;
    if (window.innerWidth <= 767.98) {
      scrollAmount = 600;
    }
    
    const currentScroll = window.scrollY;
    const targetScroll = currentScroll + scrollAmount;
    const scrollDuration = 1000; // duration in milliseconds
    
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
      <p className='first-paragraph'>— an expert full stack web developer, assisting clients with all of their web development needs.</p>
      <motion.button initial={{scale:1.2}} whileHover={{scale:1.5, transition: {delay: 0.1}}} animate={{ scale: [1, 1.4, 1] }} transition={{repeat: Infinity, duration: 3.8, delay:1}}  className="arrow-button" onClick={handleButtonClick}>&#8595;</motion.button>
      <p className="based-in-text">Based in Pakistan, <br></br>available worldwide</p>
      <a className="consultation-button" href="https://calendly.com/m-burhanmoin1/30min">BOOK FREE CONSULTATION</a>
    </div>
  );
}

export default FirstContainer;
