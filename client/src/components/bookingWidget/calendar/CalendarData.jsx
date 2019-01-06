const dateFn = require('date-fns');
import React from 'react';
import styles from '../../styles/calendar.css';

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
  let format = styles.validDate;
  let today = '';
  let markX = '';
  let markY = '';
  let hasDate = styles.dateCell;
  
  let handleClick = (e) => {
    if (checkInSelected) {
      updateCheckIn(`${displayMonth + 1}/${date}/${displayYear}`);
      toggleCheckOut();
    }
    if (checkOutSelected) {
      updateCheckOut(`${displayMonth + 1}/${date}/${displayYear}`);
      toggleCheckIn();
    }
  };

  if (!date) {
    hasDate = styles.dateCellNull;
    handleClick = () => {};
  }

  if (date === thisDate && thisMonth === displayMonth && thisYear === displayYear) {
    today = styles.today;
  }
  if (!inRange) {
    format = styles.dateCellCrossed;
    handleClick = () => {};
  }

  if (!date) {
    date = '';
    format = '';
  }


  if (withinSelection) {
    markX = styles.markX;
  }
  if (startIsEqual || stopIsEqual) {
    markY = styles.markY;
  }


  return(
    <td className={hasDate} onClick={handleClick}>
      <div className={[format, today, markX, markY].join(' ')}>
          {date}
      </div>
    </td>
  );
};

export default CalendarData;
