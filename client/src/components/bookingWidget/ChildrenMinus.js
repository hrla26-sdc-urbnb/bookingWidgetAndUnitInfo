import React from 'react';

const ChildrenMinus = ({ going, minus }) => {
  let works;
  let press = <button onClick={() => { minus() }}>-</button>
  let noPress = <div>-</div>
  if (going === 0) {
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

export default ChildrenMinus;