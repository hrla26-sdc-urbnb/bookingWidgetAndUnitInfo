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

  let { isBooked } = unitData;

  if (finalPrice && !isBooked) {
    handleClick = handleBook;
  }

  if (finalPrice && isBooked) {
    handleClick = handleRequested;
  }

  let button = <button  className={styles.button} onClick={handleClick}>Book</button>
  if (isBooked) {
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