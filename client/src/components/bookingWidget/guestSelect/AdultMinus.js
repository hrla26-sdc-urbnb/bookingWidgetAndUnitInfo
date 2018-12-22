import React from 'react';

const AdultMinus = ({ going, minus, allowed }) => {
  let works;
  let press = <button onClick={() => { minus() }}>-</button>
  let noPress = <div>-</div>
  if (going === 1) {
    works = noPress;
  } else {
    works = press;
  }
  return(
    <div>
      {works}
    </div>
  );
};

export default AdultMinus;