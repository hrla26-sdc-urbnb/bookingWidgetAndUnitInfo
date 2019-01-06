import React from 'react';
import styles from '../styles/showAllAmens.css';
const faker = require('faker');


const ShowAmensListItem = ({ sent, name }) => {
  
  let descript = faker.lorem.sentence();
  let first = <div className={styles.subtitle}>{sent}</div>;
  let second = <div className={styles.nonsense}>{descript}</div>;
  if (name === 'Not included') {
    descript = null;
    first = <div className={styles.notIncluded}>{sent}</div>;
    second = null;
  }
  if (!sent) {
    first = null;
    second = null;
  }
  return (
    <div>
      <div>{first}</div>
      <div>{second}</div>
    </div>
  );
};

export default ShowAmensListItem;
