import React from 'react';

const OtherNote = ({ notes }) => {
  return(
    <div className="otherNote">
      <div>Other Things to Note</div>
      <div>{notes}</div>
    </div>
  );
};

export default OtherNote;