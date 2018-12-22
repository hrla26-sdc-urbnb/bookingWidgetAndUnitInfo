import React from 'react';

const GuestAccess = ({ access }) => {
  return(
    <div className="access">
      <div>Guest Access</div>
      <div>{access}</div>
    </div>
  );
};

export default GuestAccess;