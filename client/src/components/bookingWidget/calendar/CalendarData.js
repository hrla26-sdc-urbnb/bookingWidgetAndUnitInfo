import React from 'react';

const CalendarData = ({ date }) => {
  if (!date) {
    date = '';
  }
  return(
    <td>
      {date}
    </td>
  );
};

export default CalendarData;
