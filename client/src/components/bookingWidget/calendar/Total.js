import React from 'react';
import styles from '../../styles/total.css';

const Total = ({ numberOfDaysSelected, unitData, price }) => {
  const { cleaningFee, serviceFee } = unitData;
  if (numberOfDaysSelected === 0) {
    numberOfDaysSelected = 1;
  }
  return(
    <div className={styles.container}>

      <div className={styles.subTotalContainer}>
        <div className={styles.text}>
          {`$${price} x ${numberOfDaysSelected}`}
          <button className={styles.question}>?</button>
        </div>
        <div className={styles.text}>
          {`$${price * numberOfDaysSelected}`}
        </div>
      </div>

      <div className={styles.subTotalContainer}>
        <div className={styles.text}>
          Cleaning fee
          <button className={styles.question}>?</button>
        </div>
        <div className={styles.text}>
          {`$${cleaningFee}`}
        </div>
      </div>

      <div className={styles.subTotalContainer}>
        <div className={styles.text}>
          Service fee
          <button className={styles.question}>?</button>
        </div>
        <div className={styles.text}>
          {`$${serviceFee}`}
        </div>
      </div>

      <div className={styles.totalContainer}>
        <div className={styles.totalText}>Total</div>
        <div className={styles.totalText}>{`$${(price * numberOfDaysSelected) + cleaningFee + serviceFee}`}</div>
      </div>

    </div>
  );
};

export default Total;
