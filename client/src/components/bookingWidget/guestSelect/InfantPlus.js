import React from 'react';

const InfantPlus = ({ going, allowed, plus }) => {
  let works;
  let press = <button onClick={() => { plus() }}>+</button>
  let noPress = <div>+</div>
  if (going < allowed) {
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

export default InfantPlus;