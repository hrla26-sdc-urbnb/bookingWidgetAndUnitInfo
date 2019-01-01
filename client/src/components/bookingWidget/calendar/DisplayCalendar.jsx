import React from 'react';
import Calendar from './Calendar.jsx';
import styles from '../../styles/calendar.css';

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
  toggleValidRange,
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
    toggleValidRange={toggleValidRange}
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
