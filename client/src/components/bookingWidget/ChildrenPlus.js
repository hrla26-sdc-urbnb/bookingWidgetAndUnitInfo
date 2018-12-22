import React from 'react';

const ChildrenPlus = ({ going, allowed, guests, plus }) => {
  let works;
  let press = <button onClick={() => { plus() }}>+</button>
  let noPress = <div>+</div>
  if (going < allowed && guests < allowed) {
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

export default ChildrenPlus;