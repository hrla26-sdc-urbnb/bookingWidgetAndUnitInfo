import React from 'react';

const GuestInteraction = ({ interaction }) => {
  return (
    <div className="interaction">
      <div>Interaction with Guests</div>
      <div>{interaction}</div>
  </div>
  );
};

export default GuestInteraction;