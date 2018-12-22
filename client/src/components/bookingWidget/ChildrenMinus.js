import React from 'react';

const ChildrenMinus = ({ going, minus }) => {
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

export default ChildrenMinus;