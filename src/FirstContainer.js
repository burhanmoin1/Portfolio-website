import React, { useState, useEffect } from "react";
import "./FirstContainer.css";

function FirstContainer () {
  const revolvingText = ['Full-Stack Web Developer', 'Django, ReactJS, ExpressJS, MongoDB, MySQL, NodeJS', 'And ML Engineer']
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [textOpacity, setTextOpacity] = useState(1);

  useEffect(() => {
    // Function to cycle through the text items
    const rotateText = () => {
      setTextOpacity(0); // Set opacity to 0
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % revolvingText.length);
        setTextOpacity(1); 
      }, 250); 
    };

    // Set an  interval to update the text every 3 seconds (adjust as needed)
    const intervalId = setInterval(rotateText, 3500);

    return () => {
      // Clear the interval when the component unmounts
      clearInterval(intervalId);
    };
  }, [revolvingText.length]);
  return (
    <div className="first-container">
      <h2 className='first-heading'>Hey,<br></br> I'm Burhan</h2>
      <p className='first-revolve-text'>— an expert full stack web developer, assisting clients with all of their web related needs.</p>
    </div>
  );
}

export default FirstContainer;
