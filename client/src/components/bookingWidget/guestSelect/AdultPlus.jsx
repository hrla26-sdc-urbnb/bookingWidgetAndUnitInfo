import React from 'react';
import styles from '../../styles/guests.css';

const AdultPlus = ({ going, allowed, guests, plus }) => {
  let works;
  let press = <button className={styles.yesClick} onClick={() => { plus() }}>+</button>
  let noPress = <button className={styles.noClick}>+</button>
  if (going < allowed && guests < allowed) {
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

export default AdultPlus;