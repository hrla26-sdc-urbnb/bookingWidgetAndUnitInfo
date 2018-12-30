import React from 'react';
import styles from '../styles/book.css';

const BookingButton = ({ unitData, toggleCalendar }) => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log('click!');
    toggleCalendar();
  }

  let { isBooked } = unitData;
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