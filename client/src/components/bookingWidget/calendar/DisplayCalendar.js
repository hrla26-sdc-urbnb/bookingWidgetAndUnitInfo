import React from 'react';
import Calendar from './Calendar';

const DisplayCalendar = ({ isOpen }) => {
  let display = <Calendar />;
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