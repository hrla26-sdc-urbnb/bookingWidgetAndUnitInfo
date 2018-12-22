import React from 'react';

const GuestPlus = ({ going, allowed }) => {
  let works;
  let press = <button>+</button>
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

export default GuestPlus;