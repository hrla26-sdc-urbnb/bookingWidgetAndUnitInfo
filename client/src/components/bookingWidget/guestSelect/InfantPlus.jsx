import React from 'react';
import styles from '../../styles/guests.css';

const InfantPlus = ({ going, allowed, plus }) => {
  let works;
  let press = <button className={styles.yesClick} onClick={() => { plus() }}>+</button>
  let noPress = <div className={styles.noClick}>+</div>
  if (going < allowed) {
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

export default InfantPlus;
