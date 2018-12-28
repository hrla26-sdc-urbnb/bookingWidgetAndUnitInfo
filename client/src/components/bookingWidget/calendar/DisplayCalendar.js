import React from 'react';
import Calendar from './Calendar';

const DisplayCalendar = ({ 
  isOpen, 
  unitData,
  updateCheckIn,
  updateCheckOut,
  checkInDate,
  checkOutDate,
}) => {
  let display = <Calendar 
    unitData={unitData} 
    updateCheckIn={updateCheckIn}
    updateCheckOut={updateCheckOut}
    checkInDate={checkInDate}
    checkOutDate={checkOutDate}
  />;
  if (!isOpen) {
    display = null;
  }
  return(
    <div>
      {display}
    </div>
  );
};

export default DisplayCalendar;