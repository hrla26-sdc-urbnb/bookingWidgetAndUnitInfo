import React from 'react';
import styles from '../styles/descriptions.css';

const ReadMore = ({ handleClick, wantsMore }) => {
  let direct;
  if (wantsMore) {
    direct = <a href="" onClick={handleClick}>Hide &uarr;</a>
  } else {
    direct = <a href="" onClick={handleClick}>Read more about the space &darr;</a>
  }
  return (
    <div className={styles.readMore}>
      {direct}
    </div>
  );
};


export default ReadMore;
