import React from 'react';

const CalendarData = ({ 
  date,
  thisDate,
  thisMonth,
  thisYear,
  displayMonth,
  displayYear,
  availableFrom,
  availableTo,
}) => {
  let today = null;
  if (date === thisDate && thisMonth === displayMonth && thisYear === displayYear) {
    today = 'today';
  }
  if (!date) {
    date = '';
  }
  return(
    <td className={today}>
      {date}
    </td>
  );
};

export default CalendarData;
