import React from 'react';

const ClearDates = ({ updateCheckIn, updateCheckOut }) => {
  const handleClick = (e) => {
    e.preventDefault();
    updateCheckIn('');
    updateCheckOut('');
  }

  return(
    <div>
      <a href="" onClick={handleClick}>Clear Dates</a>
    </div>
  );
};

export default ClearDates;