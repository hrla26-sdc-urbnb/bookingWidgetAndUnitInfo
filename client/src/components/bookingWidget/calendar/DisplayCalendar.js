import React from 'react';
import Calendar from './Calendar';

const DisplayCalendar = ({ isOpen, unitData }) => {
  let display = <Calendar unitData={unitData}/>;
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