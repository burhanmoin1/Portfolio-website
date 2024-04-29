import React from 'react';
import SecondContainer from './SecondContainer'; // Component inside the black container

function BlackContainerWrapper({ refProp }) {
  return (
    <div ref={refProp}> {/* Attach the ref */}
      <SecondContainer /> {/* Content inside the black container */}
    </div>
  );
}

export default BlackContainerWrapper;
