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
  checkInSelected,
  checkOutSelected,
  updateCheckIn,
  updateCheckOut,
  toggleCheckIn,
  toggleCheckOut,
  checkInDate,
  checkOutDate,

}) => {
  const month = monthMap[displayMonth];
  const inRange = dateFn.isWithinRange(new Date(`${month} ${date} ${displayYear}`), new Date(availableFrom), new Date(availableTo));
  const withinSelection = dateFn.isWithinRange(new Date(`${month} ${date} ${displayYear}`), new Date(checkInDate), new Date(checkOutDate));
  const startIsEqual = dateFn.isEqual(new Date(`${month} ${date} ${displayYear}`), new Date(checkInDate));
  const stopIsEqual = dateFn.isEqual(new Date(`${month} ${date} ${displayYear}`), new Date(checkOutDate));
  let crossed = '';
  let today = '';
  let markX = '';
  let markY = '';

  const handleClick = (e) => {
    if (checkInSelected) {
      updateCheckIn(`${displayMonth + 1}/${date}/${displayYear}`);
      toggleCheckOut();
    }
    if (checkOutSelected) {
      updateCheckOut(`${displayMonth + 1}/${date}/${displayYear}`);
      toggleCheckIn();
    }
  };

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

  if (withinSelection) {
    markX = 'inSelectedRange';
  }
  if (startIsEqual || stopIsEqual) {
    markY = 'endOfSelectedRange';
  }

  return(
    <td className={`${today} ${crossed} ${markX} ${markY}`} onClick={handleClick}>
      {date}
    </td>
  );
};

export default CalendarData;
