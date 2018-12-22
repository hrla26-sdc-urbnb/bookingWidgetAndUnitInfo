import React from 'react';

const AboutUnit = ({ about }) => {
  return(
    <div className="aboutUnit">
      <div>The Space</div>
      <div>{about}</div>
    </div>
  );
};

export default AboutUnit;