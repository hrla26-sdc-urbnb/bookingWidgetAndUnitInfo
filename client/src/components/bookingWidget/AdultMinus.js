import React from 'react';

const AdultMinus = ({ going, minus }) => {
  let works;
  let press = <button onClick={() => { minus() }}>-</button>
  let noPress = <div>-</div>
  if (going > 1 && going !== 0) {
    works = press;
  } else {
    works = noPress;
  }
  return(
    <div>
      {works}
    </div>
  );
};

export default AdultMinus;