import React from 'react';
import styles from '../../styles/calendar.css';

const ClearDates = ({ updateCheckIn, updateCheckOut, toggleValidRange }) => {
  const handleClick = (e) => {
    e.preventDefault();
    updateCheckIn('');
    updateCheckOut('');
    toggleValidRange();
  }

  return(
    <div className={styles.clearDates}>
      <a href="" onClick={handleClick}>Clear dates</a>
    </div>
  );
};

export default ClearDates;
