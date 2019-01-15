import React from 'react';
import styles from '../styles/book.css';

const BookingButton = ({ unitData, toggleCalendar, toggleCheckIn, finalPrice }) => {
  let handleClick = (e) => {
    e.preventDefault();
    console.log('click!');
    toggleCalendar();
    toggleCheckIn();
  }

  const handleBook = (e) => {
    alert('You just booked my bro!');
    toggleCalendar();
  };

  const handleRequested = (e) => {
    alert('You just requested to book my bro!');
    toggleCalendar();
  };

  let { isbooked } = unitData;

  if (finalPrice && !isbooked) {
    handleClick = handleBook;
  }

  if (finalPrice && isbooked) {
    handleClick = handleRequested;
  }

  let button = <button  className={styles.button} onClick={handleClick}>Book</button>
  if (isbooked) {
    button = <button className={styles.button} onClick={handleClick}>Request to Book</button>
  }
  return(
    <div>
      <div className={styles.container}>
        <div>{button}</div>
      </div>
      <div>
        <div className={styles.text}>You won’t be charged yet</div>
      </div>
    </div>
  );
};

export default BookingButton;