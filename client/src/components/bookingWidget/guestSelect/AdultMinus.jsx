import React from 'react';
import styles from '../../styles/guests.css';

const AdultMinus = ({ going, minus, allowed }) => {
  let works;
  let press = <button className={styles.yesClick} onClick={() => { minus() }}>-</button>
  let noPress = <button className={styles.noClick}>-</button>
  if (going === 1) {
    works = noPress;
  } else {
    works = press;
  }
  return(
    <div>
      {works}
    </div>
  );
};

export default AdultMinus;
