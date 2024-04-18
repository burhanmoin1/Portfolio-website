import React from "react";
import "./FirstContainer.css";
import {motion} from 'framer-motion';

function FirstContainer () {

  const handleButtonClick = () => {
    const scrollDuration = 1000; // Adjust the duration (in milliseconds) to control the speed
    const scrollStep = 40;

    let scrollAmount = 800;
    if (window.innerWidth <= 767.98) {
        scrollAmount = 500;
    }

    const scrollStepAmount = scrollAmount / (scrollDuration / scrollStep);
    let currentScroll = window.scrollY;

    const scroll = () => {
        currentScroll += scrollStepAmount;
        if (currentScroll >= window.scrollY + scrollAmount) {
            window.scrollTo(0, window.scrollY + scrollAmount);
        } else {
            window.scrollTo(0, currentScroll);
            requestAnimationFrame(scroll);
        }
    };

    scroll();
};

  return (
    <div className="first-container">
      <h2 className='first-heading'><span className="hey">Hey,</span><br></br><span className="burhan"> I'm Burhan </span></h2>
      <p className='first-paragraph'>— an expert full stack web developer, assisting clients with all of their web development needs.</p>
      <motion.button animate={{ scale: [1, 1.3, 1] }} transition={{repeat: Infinity, duration: 3, delay:1}}  className="arrow-button" onClick={handleButtonClick}>&#8595;</motion.button>
    </div>
  );
}

export default FirstContainer;
