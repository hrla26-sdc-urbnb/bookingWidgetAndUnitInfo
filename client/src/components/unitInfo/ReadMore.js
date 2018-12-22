import React from 'react';

const ReadMore = ({ handleClick, wantsMore }) => {
  let direct;
  if (wantsMore) {
    direct = <a href="" onClick={handleClick}>Hide ^</a>
  } else {
    direct = <a href="" onClick={handleClick}>Read more about the space v</a>
  }
  return (
    <div>
      {direct}
    </div>
  );
};


export default ReadMore;