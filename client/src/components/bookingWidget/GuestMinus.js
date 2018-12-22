import React from 'react';

const GuestMinus = ({ going }) => {
  let works;
  let press = <button>-</button>
  let noPress = <div>-</div>
  if (going > 1) {
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

export default GuestMinus;