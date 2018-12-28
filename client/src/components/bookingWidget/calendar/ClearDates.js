import React from 'react';

const ClearDates = ({ updateCheckIn, updateCheckOut, toggleValidRange }) => {
  const handleClick = (e) => {
    e.preventDefault();
    updateCheckIn('');
    updateCheckOut('');
    toggleValidRange();
  }

  return(
    <div>
      <a href="" onClick={handleClick}>Clear Dates</a>
    </div>
  );
};

export default ClearDates;
