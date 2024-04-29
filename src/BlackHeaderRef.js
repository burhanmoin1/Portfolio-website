import React from 'react';
import Header from './Header';

function BlackHeaderRef({ refProp }) {
  return (
    <div ref={refProp}> {/* Attach the ref */}
      <Header /> 
    </div>
  );
}

export default BlackHeaderRef;
