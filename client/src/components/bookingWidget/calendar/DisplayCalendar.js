import React from 'react';
import Calendar from './Calendar';

const DisplayCalendar = ({ 
  isOpen, 
  unitData,
  updateCheckIn,
  updateCheckOut,
  checkInDate,
  checkOutDate,
  checkInSelected,
  checkOutSelected,
  toggleCheckIn,
  toggleCheckOut,
}) => {
  let display = <Calendar 
    unitData={unitData} 
    updateCheckIn={updateCheckIn}
    updateCheckOut={updateCheckOut}
    checkInDate={checkInDate}
    checkOutDate={checkOutDate}
    checkInSelected={checkInSelected}
    checkOutSelected={checkOutSelected}
    toggleCheckIn={toggleCheckIn}
    toggleCheckOut={toggleCheckOut}
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