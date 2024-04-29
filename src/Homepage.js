import React, { useRef, useState, useEffect } from 'react';
import Header from './Header';
import FirstContainer from './FirstContainer';
import ThirdContainer from './ThirdContainer';
import BlackContainerWrapper from './BlackContainerWrapper';
import BlackHeaderRef from './BlackHeaderRef';

const FollowPointer = ({ position, pointerColor }) => (
  <div className='box'
    style={{
      position: 'fixed', // Fixed position
      top: position.y - 10, // Adjust position for centering
      left: position.x - 10,
      width: '20px', // Size of the circle
      height: '20px',
      backgroundColor: pointerColor, // Color of the circle
      borderRadius: '50%', // Make it a circle
      zIndex: 1400, // Ensure it's on top
      pointerEvents: 'none', // Allow interaction with underlying elements
    }}
  />
);

function Homepage() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [pointerColor, setPointerColor] = useState('black');
  const blackContainerRefs = [useRef(), useRef()]; // Two refs for two black containers

  const handleMouseMove = (e) => {
    const { clientX: x, clientY: y } = e;
    setPosition({ x, y });

    let isInBlackContainer = false;

    // Loop through each ref to check if the pointer is within any black container
    for (const ref of blackContainerRefs) {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
          isInBlackContainer = true;
          break; // Exit loop if found
        }
      }
    }

    setPointerColor(isInBlackContainer ? 'white' : 'black'); // Change color based on position
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
  
    return () => {
      document.removeEventListener('mousemove', handleMouseMove); // Corrected spelling
    };
  }, []); // Dependency array
  return (
    <>
      <FollowPointer position={position} pointerColor={pointerColor}/>
      <Header />
      <FirstContainer />
      <BlackContainerWrapper refProp={blackContainerRefs[0]} />
      <ThirdContainer />
    </>
  );
}

export default Homepage;
