const dateFn = require('date-fns');
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
  monthMap,
}) => {
  const month = monthMap[displayMonth];
  const inRange = dateFn.isWithinRange(new Date(`${month} ${date} ${displayYear}`), new Date(availableFrom), new Date(availableTo));
  let crossed = '';
  let today = '';
  if (date === thisDate && thisMonth === displayMonth && thisYear === displayYear) {
    today = 'today';
  }
  if (!inRange) {
    crossed = 'crossed';
  }
  if (!date) {
    date = '';
    crossed = '';
  }
  return(
    <td className={`${today} ${crossed}`}>
      {date}
    </td>
  );
};

export default CalendarData;
