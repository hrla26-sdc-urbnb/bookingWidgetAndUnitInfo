import React from 'react';
import styles from '../../styles/guests.css';

const InfantMinus = ({ going, minus }) => {
  let works;
  let press = <button className={styles.yesClick} onClick={() => { minus() }}>-</button>
  let noPress = <div className={styles.noClick}>-</div>
  if (going >= 1) {
    works = press;
  } else {
    works = noPress;
  }
  return(
    <div>
      {works}
    </div>
  );
};

export default InfantMinus;